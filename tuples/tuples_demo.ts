var tup1 = [10, "Abc", true];

console.log(tup1[0]);
console.log(tup1.length);

for (var v of tup1) {
    console.log(v);
}

tup1[2] = false;
console.log(tup1);

// destructuring tuple
var [i1, i2, i3, i4] = tup1;
console.log(i3);