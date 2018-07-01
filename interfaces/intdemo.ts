interface Person {
    name: string;
    age: number;
    toString: () => string;
}

interface Student extends Person {
    course: string;
}

function print(v: Person) {
    console.log(v.toString());
}

let p1: Person = {
    name: "Richards",
    age: 40,
    toString: function () {
        return this.name + ":" + this.age;
    }
};

let s1: Student = {
    name: "Mark",
    age: 20,
    course: "Angular",
    toString: function () {
        return this.name + ":" + this.age + ":" + this.course;
    }
};

print(p1);
print(s1);