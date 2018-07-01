// Rest parameters with functions
function print(message: string, ...names: string[]) {
    for (let n of names)
        console.log(message + " " + n);
}
print("Hi", "Siva", "Teja", "Gnani", "Baasha");