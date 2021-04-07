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

    insert(data) {
        var newNode = new Node(data)

        if(this.root === null)
            this.root = newNode
        else
            this.insertNode(this.root, newNode)
    }

    insertNode(node, newNode) {
        if (newNode.data < node.data) {
            // 
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

    inorder(node){
        if (node !== null) {
            this.inorder(node.left)
            console.log(node.data);
            this.inorder(node.right)
        }
    }

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

    getHeightTotal(){
        return this.getHeight(this.root, 0);
    }

    isLeaf(node){
        return node.left === null && node.right === null;
    }

    max(l, r){
        if (l < r) {
            return r
        } else {
            return l
        }
    }

    searchFor(marca){
        if (this.root.data === marca) {
            return true;
        } else {
            return (this.searchForChildren(this.root.left, marca) 
                    || 
                   this.searchForChildren(this.root.right, marca))
        }
    }

    searchForChildren(node, marca){
        if (node === null) {
            return false;
        }
        if (node.data === marca) {
            return true;
        } else {
            return (this.searchForChildren(node.left, marca) 
                    || 
                   this.searchForChildren(node.right, marca))
        }
    }

}

export {Node, BinarySearchTree}