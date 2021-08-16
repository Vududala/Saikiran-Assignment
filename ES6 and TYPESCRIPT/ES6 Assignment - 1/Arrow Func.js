let names = [" Tom", " Ivan", " Jerry"]
let arrObject = ( names) => {
let arr = [ ];
for ( let n of names) {
arr. push( {name: n, length: n.length} );
}
console.log( arr );
}
arrObject(names);