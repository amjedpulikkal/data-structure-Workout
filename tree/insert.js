// class Node{

//     constructor(value){
//         this.value = value
//         this.right=null
//         this.left = null
        
//     }
    
    
// }

// class Tree{
//     constructor(){
//         this.root = null
//     }
//     isEmpty(){
//         return this.root === null
//     }
    
//      insert(value){
//         let node = new Node(value)
//         if(this.isEmpty()){
//             this.root = node
//         }else{
//             this.insertNode(this.root,node)
//         }
//      }
//      insertNode(root,node){
//         if(root.value>node.value){

//             if (root.left===null) {
//                  root.left = node
                
//             }else{
//                this.insertNode(root.left,node)
//             }
//         }else{

//             if(root.right===null){
//                  root.right = node 
//             }else{
//                 this.insertNode(root.right,node)
//             }

//         }
     
//      }
// }


// let tr = new Tree()


// tr.insert(52)
// tr.insert(13)
// tr.insert(11)
// tr.insert(119)
// tr.insert(1193)
// tr.insert(1191)

// console.log(tr.root)


