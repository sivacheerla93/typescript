function greeter(person: string) {
    return "Hello " + person + "!";
}

var user = "Siva Cheerla";
console.log(greeter(user));


function add(n1: number, n2: number): number {
    return n1 + n2;
}
console.log(add(10, 20));

// with optional parameters
function siva(n1: number, n2: number, n3?: number): number {
    if (n3)
        return n1 + n2 + n3;
    else
        n1 + n2;
}
console.log(siva(10, 20, 30));

// with default parameters
function siva1(n1: number, n2: number, n3: number = 50): number {
    return n1 + n2 + n3;
}
console.log(siva1(10, 20));