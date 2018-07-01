// we have to declare functions to overload
function f1(n: number): void;
function f1(s: string): void;
function f1(n: number, s: string): void;

function f1(n: any, s?: any): void {
    console.log(n);
    if (s)
        console.log(s);
}
f1("Abc");
f1(10);
f1(23, "Siva");