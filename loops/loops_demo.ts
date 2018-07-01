var i: number;

// while loop starts here
i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// do-while starts here
i = 2;
do {
    console.log(i);
    i++;
}
while (i <= 10);

// for loop starts here
for (i = 1; i <= 10; i++) {
    console.log(i);
}


var marks: number[] = [10, 30, 40];
// for .. in starts here
for (var idx in marks) {
    console.log(`Marks for student ${parseInt(idx)} are ${marks[idx]}`);
}

// for .. of loop starts here
for (var m of marks) {
    console.log(m);
}