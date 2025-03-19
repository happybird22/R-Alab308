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