
const mainController = {
    index: (req, res) => {  
    res.render('home') 

},     
login: (req, res) => {  
    res.render('login')
},

register: (req, res) => {  
    res.render('register')
},       

about: (req, res) => {
    res.render(path.join(__dirname, '../views/about.html'))
},

productCart: (req, res) => {  
    res.render('productCart')
},

productDetail: (req, res) => {  
    res.render('productDetail')
},       

}
module.exports = mainController;
