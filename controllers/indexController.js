const fs = require('fs')
const { parse } = require('path')

// Traemos el archivo que contiene nuestra data a mostrar desde un json

const heroes = JSON.parse(fs.readFileSync('./heroes.json'))
let param = '';

//creamos el objeto literal del controlador
const indexController = {

  index: function (req,res) {
    res.render('index', {heroes:heroes})
  },

  detail: function (req,res) {
    let heroe = heroes.find(element => {
      return element.id === req.params.id
    })

    res.render('hero-detail',{heroe:heroe})

  },
  publisher: function(req, res) {
  }
}




module.exports = indexController;
