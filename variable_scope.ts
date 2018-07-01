var g: number = 1; // Global scope

class Test {
    static sv: number = 2; // Class or Static variable
    iv: number = 3; // Instance variable or Field

    print(): void {
        var i: number = 4; // Local variable

        console.log("Global variable: " + g);
        console.log("Class or Static varible: " + Test.sv);
        console.log("Instance variable or Field: " + this.iv);
        console.log("Local varible: " + i);
    }
}

var obj = new Test();
obj.print();