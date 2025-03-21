// // Variables
// let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

// let cell1 = ``;
// let cell2 = ``;
// let cell3 = ``;
// let cell4 = ``;
// let commas = 0;

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === ',') {
//     // if char is a comma, do this
//     commas++;
//   } else if (str[i] === '\n') {
//     //If char is a "\n", do this\
//     console.log(cell1, cell2, cell3, cell4);
//     commas = 0;
//     cell1 = ``;
//     cell2 = ``;
//     cell3 = ``;
//     cell4 = ``;

//   } else {
//     // any other char
//     if (commas == 0) {
//       // if 0 commas
//       cell1 += str[i];
//     } else if (commas == 1) {
//       // if 1 commas
//       cell2 += str[i];
//     } else if (commas == 2) {
//       // if 2 commas
//       cell3 += str[i];
//     } else {
//       // if 3 or more
//       cell4 += str[i];
//     }
//   }

//   if(i === str.length - 1) { // if index number is the same as length of string
//     console.log(cell1, cell2, cell3, cell4);
//   }
// }

// not scalable, use arrays instead of hardcoding cells

// Expanding functionality

let str = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

let rows = []; //row array
let currentRow = [];
let currentCell = ``;
let numColumns = 0; // to capture number of columns
let isFirstRow = true; //first row flag

for (let i = 0; i < str.length; i++) { // to loop through the entire string
    if (str[i] === `,` || str[i] === `\n`) { //if char is a comma or a \n then do...
        currentRow.push(currentCell); //adds cell to the row
        currentCell = ``; //resets current cell

        if (str[i] === `\n`) { // when newline is found, do...
            rows.push(currentRow); //finish row and push currentRows into rows
            if (isFirstRow) { //Detects columns from first row
                numColumns = currentRow.length; //set num of columns based on how many cells were pushed into currentRow for scaling
                isFirstRow = false;
            }
            currentRow = []; //clears currentrow for next set
        }
    } else { // other chars stay in current cell between  commas and line breaks
        currentCell += str[i];
    }

    if (i === str.length - 1) { // to include last line without the \n
        currentRow.push(currentCell);
        rows.push(currentRow);
    }

}

console.log(`Number of columns:`, numColumns);
console.log(rows);

// Transforming Data

let headers = [];
let objests = [];

for (let i = 0; i < rows[0].length; i++) {
    let lowerCaseHeader = ``;
    let header = rows[0][i];
    for (let x = 0; x < header.length; x++) {
        let char = header[x];
        if (char >= `A` && char <= `Z`) {
            lowerCaseHeader += String.fromCharCode(char.charCodeAt(0) + (32));
        }
    else {
        lowerCaseHeader += char;
    }
    }
    
    headers.push(lowerCaseHeader);
}

for (let i = 1; i < rows.length; i++) {
    let row = rows [i];
    let obj =  {};
    for (let x = 0; x < numColumns; x++) {
        obj[headers[x]] = row[x];
    }
    Objects.push(obj);
}

console.log(objects);

// Part Four 

objects.pop()
objects.splice(1,0, { id: "48", name: "Barry", occupation: "Runner", age: "25"});
objecs.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });

console.log(objects);

let totalAge= 0;

for (let i = 0; i < objects.length; i++) {
    totalAge += Number(objects[i].age);
}

let aveAge = totalAge / objects.length;

console.log("Average Age:", aveAge);

// Part 5

let csvString = `ID,Name,Occupation,Age\n`;

for (let i = 0; i < objects.length; i++) {
    let row = objects[i].id + `,` + objects[i].name + `,` + objects[i].occupation + `,` + objects[i].age;
    csvString =+ row;

    if (i !== objects.length - 1) {
        csvString =+ `\n`;
    }
}

console.log(csvString);