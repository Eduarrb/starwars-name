let starWarsNames = require('./starwars-names.json');

const uniqueRandomArray = arreglo => {
    let cantidad = arreglo.length;
    let random = function(){
        let aleatorio = Math.floor(Math.random() * cantidad);
        return aleatorio
    }
    return () => arreglo[random()];
}

module.exports = {
    all: starWarsNames,
    random: uniqueRandomArray(starWarsNames)
};