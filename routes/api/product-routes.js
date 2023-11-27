const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// GET all products, including associated Category and Tag data
router.get('/', async (req, res) => {
	try {
		const products = await Product.findAll({
			include: [Category, Tag],
		});
		res.status(200).json(products);
	} catch (err) {
		res.status(500).json(err);
	}
});

// GET one product by its `id` value, including associated Category and Tag data
router.get('/:id', async (req, res) => {
	try {
		const product = await Product.findByPk(req.params.id, {
			include: [Category, Tag],
		});
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json(err);
	}
});

// POST: Create a new product
router.post('/', (req, res) => {
	Product.create({
		product_name: req.body.product_name,
		price: req.body.price,
		stock: req.body.stock,
		tagIds: req.body.tagIds,
	})
		.then((product) => {
			// If there are product tags, create pairings to bulk create in the ProductTag model
			if (req.body.tagIds) {
				const productTagIdArr = req.body.tagIds.map((tag_id) => {
					return {
						product_id: product.id,
						tag_id,
					};
				});
				return ProductTag.bulkCreate(productTagIdArr);
			}
			// if no product tags, just respond
			res.status(200).json(product);
		})
		.then((productTagIds) => res.status(200).json(productTagIds))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

// PUT: Update a product by its `id` value
router.put('/:id', (req, res) => {
	Product.update(req.body, {
		where: {
			id: req.params.id,
		},
	})
		.then((product) => {
			if (req.body.tagIds && req.body.tagIds.length) {
				ProductTag.findAll({
					where: { product_id: req.params.id },
				}).then((productTags) => {
					// Create filtered list of new tag_ids
					const productTagIds = productTags.map(
						({ tag_id }) => tag_id
					);
					const newProductTags = req.body.tagIds
						.filter((tag_id) => !productTagIds.includes(tag_id))
						.map((tag_id) => {
							return {
								product_id: req.params.id,
								tag_id,
							};
						});

					// Figure out which ones to remove
					const productTagsToRemove = productTags
						.filter(
							({ tag_id }) => !req.body.tagIds.includes(tag_id)
						)
						.map(({ id }) => id);
					// Run both actions
					return Promise.all([
						ProductTag.destroy({
							where: { id: productTagsToRemove },
						}),
						ProductTag.bulkCreate(newProductTags),
					]);
				});
			}

			return res.json(product);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

// DELETE: Delete a product by its `id` value
router.delete('/:id', async (req, res) => {
	try {
		const product = await Product.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(product);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;