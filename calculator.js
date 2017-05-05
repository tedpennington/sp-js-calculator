console.log("calculator.js loaded");

// Get button elements
var plusButton = document.getElementById("plus-button");
var minusButton = document.getElementById("minus-button");
var multiplyButton = document.getElementById("multiply-button");
var divideButton = document.getElementById("divide-button");
var output = document.getElementById("output");

// Get input fields and run doTheMath function, passing it which math function to run as determined by the names given to the html button elements (made name= the function name to run)
function getValues(event){
    var input1 = parseInt(document.getElementById("input-1").value);
    var input2 = parseInt(document.getElementById("input-2").value);
    // console.log("event.target.name", event.target.name);
    doTheMath(input1, input2, event.target.name);
}






// Math functions that perform the math and output the result to DOM

function plusFunction(input1, input2) {
    // console.log("plus function running");
    output.innerHTML = input1 + input2;
}

function minusFunction(input1, input2) {
    // console.log("minus function running");
    output.innerHTML = input1 - input2;
}

function multiplyFunction(input1, input2) {
    // console.log("multiply function running");
    output.innerHTML = input1 * input2;
}

function divideFunction(input1, input2) {
    // console.log("divide function running");
    output.innerHTML = input1 / input2;
}




function doTheMath(input1, input2, mathFunctionToDo){
    switch(mathFunctionToDo){
        case "plusFunction":
            // console.log("input1", input1, "input2", input2);
            plusFunction(input1, input2);
            break;
        case "minusFunction":
            // console.log("input1", input1, "input2", input2);
            minusFunction(input1, input2);
            break;
        case "multiplyFunction":
            // console.log("input1", input1, "input2", input2);
            multiplyFunction(input1, input2);
            break;
        case "divideFunction":
            // console.log("input1", input1, "input2", input2);
            divideFunction(input1, input2);
            break;
    }
    // console.log(typeof mathFunctionToDo);
    console.log("doTheMath running");
}




// Event listeners
plusButton.addEventListener("click", getValues);
minusButton.addEventListener("click", getValues);
multiplyButton.addEventListener("click", getValues);
divideButton.addEventListener("click", getValues);

// EXERCISE COMPLETE



