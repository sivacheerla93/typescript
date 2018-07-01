var marks: number[];
marks = [60, 70, 80];

console.log(marks.length);
console.log(marks[0]);

var subjects: string[] = ["Java", "TypeScript", "Angular"];

// for .. of iterator
for (var sub of subjects) {
    console.log(sub);
}

// array methods
subjects.push("jQuery");
console.log("Top element: " + subjects.pop());
