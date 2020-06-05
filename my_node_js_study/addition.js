function add(){
    console.log("I am in addition file");
}
var a =20;
//Module.exports for using same declaration in another file
module.exports.addition =add;
module.exports.aval = a;
