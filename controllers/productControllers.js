const { decodeBase64 } = require('bcryptjs');
const fs = require('fs');
const path = require('path');
const db = require ("../dataBase/models")


const productsFilePath = path.join(__dirname, '../dataBase/productsDataBase.json');
const products = JSON.parse (fs.readFileSync(productsFilePath, 'utf-8'));

const productControllers = {
    index: (req, res) => {
		res.render('products')
    },
    detail: (req, res) => {
		let id = req.params.id
		let product = products.find(product => product.id == id)
		res.render('detail')
	},
    create: (req, res) => {
		res.render('product-create-form')
		db.Productos.create({
			equipos: req.body.equipo,
			modelo: req.body.modelo,
			marca: req.body.marca,
		});

		res.redirect("/producto")
	},
    store: (req, res) => {
		let image
		console.log(req.files);
		if (req.files[0] != undefined) {
			image = req.files[0].filename
		} else {
			image = 'default-image.png'
		}
		let newProduct = {
			id: products[products.length - 1].id + 1,
			...req.body,
			image: image
		};
		products.push(newProduct)
		fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));
		res.redirect('/');
	},
    edit: (req, res) => {
		let id = req.params.id
		let productToEdit = products.find(product => product.id == id)
		res.render('product-edit-form', {productToEdit})
	},
    destroy : (req, res) => {
		let id = req.params.id;
		let finalProducts = products.filter(product => product.id != id);
		fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
		res.redirect('/');
	
	},
}



module.exports = productControllers;
