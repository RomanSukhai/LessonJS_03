let a =  [1,-2,32,42,-5,83,-3,-12,97];

console.log(a.sort());
console.log(a.reverse());
let b = a.reverse();
let v= new Array
let m = new Array();
let massnumber=0;
function PrintNumberMas(massnumber,v,m) {
    for (let i = 0; i < b.length; i++) {
        if (b[i]>0) {
            v[massnumber]=b[i];
            massnumber++;
        }
        
    }
    console.log(v);
    for (let i = 0; i < b.length; i++) {
        if (b[i]<0) {
            m[massnumber]=b[i];
            massnumber++;
        }
        
    }
    console.log(m);
}

PrintNumberMas(massnumber,v,m)