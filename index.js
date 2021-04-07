/**
 * Con esto alcanza para responder todo lo de arboles. 
 * primer numero: el que vamos a buscar luego
 * el resto de los numeros son el contenido del arbol. 
 * node . 7  4 82 982 28 1 2 44 52 982 11 20 68 54 43 37 78 10 19 83 47 56
 */

import {BinarySearchTree} from './bts.js'

const resolver = (numbers, notFound) => {
    const buildTree = (numbers) => {
        var bts = new BinarySearchTree();
        numbers.forEach(element => {
            bts.insert(element)
       });
       return bts;
    }
    
    console.log("tree");
    const tree = buildTree(numbers);
    var root = tree.getRoot();
    console.log("Altura");
    console.log(tree.getHeightTotal());
    
    const start = Date.now().toPrecision();
    console.log(`starting timer ${start}... Searching for:${notFound}`);
    const isFound = tree.searchFor(notFound);
    const millis = Date.now().toPrecision() - start;
    console.log(`seconds elapsed = ${millis} is found? ${isFound}`);
}

const numeros = process.argv.slice(3);
const noEncontrado = process.argv[2];

// Punto 1 - 4: 

console.log('Numbers: ')
console.log(numeros)
resolver(numeros, noEncontrado)


// Punto 5:

numeros.sort()
console.log('Numbers: ')
console.log(numeros)
resolver(numeros, noEncontrado)