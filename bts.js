class Node {
    constructor(d){
        this.data = d;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    //Insertar de manera que quede ordenado. 
    insert(data) {
        var newNode = new Node(data)

        if(this.root === null)
            this.root = newNode
        else
            this.insertNode(this.root, newNode)
    }

    //Metodo Aux, no usar
    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            if (node.left === null) {
                node.left = newNode
            } else {
                this.insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                this.insertNode(node.right, newNode)
            }
        }
    }

    //recorre el arbol mostrando los datos. No queda muy bonito. 
    inorder(node){
        if (node !== null) {
            this.inorder(node.left)
            console.log(node.data);
            this.inorder(node.right)
        }
    }

    //Lo de arriba pero con true/false. Queda peor xD.
    inorder_Leaf(node){
        if (node !== null) {
            this.inorder_Leaf(node.left)
            console.log(this.isLeaf(node));
            this.inorder_Leaf(node.right)
        }
    }

    getRoot(){
        return this.root;
    }

    //Metodo Aux
    getHeight(node, c){
        //console.log("Nodo: "+node.data+" - Altura: "+c)
        var r = c;
        var l = c;
       if (node.left !== null) {
        l++;
        l = this.getHeight(node.left, l);
       }
       if (node.right !== null) {
        r++;
        r = this.getHeight(node.right, r);
       } 
       return this.max(l, r); 
    }

    //Devuelve la altura del arbol desde su raiz
    getHeightTotal(){
        return this.getHeight(this.root, 0);
    }

    //devuelve la altura desde un nodo en particular
    getHeightFromNode(node){
        return this.getHeight(node, 0);
    }

    //Devuelve si el nodo es hoja
    isLeaf(node){
        return node.left === null && node.right === null;
    }

    //Metodo meh, lo arme porque no sabia si hay uno definido en JS xD
    max(l, r){
        if (l < r) {
            return r
        } else {
            return l
        }
    }

    //Algoritmo de busqueda 
    betterSearch(marca){
        if (this.root.data === marca) {
            return true;
        } else if( this.root.data > marca) {
            return this.betterSearchChildren(this.root.left, marca)
        } else {
            return this.betterSearchChildren(this.root.right, marca)
        }
    }

    //Metodo Aux
    betterSearchChildren(node, marca){
        if (node === null) {
            return false;
        }
        if (node.data === marca) {
            return true;
        } else if( node.data > marca) {
           return  this.betterSearchChildren(node.left, marca)
        } else {
           return  this.betterSearchChildren(node.right, marca)
        }
    }

}

export {Node, BinarySearchTree}