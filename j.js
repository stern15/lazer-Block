function c() {
    var a;
    console.log(a);
}

function b() {
    var a = 2;
    console.log(a);
    c();
}
var a = 1;
console.log(a);
b();
console.log(a);
