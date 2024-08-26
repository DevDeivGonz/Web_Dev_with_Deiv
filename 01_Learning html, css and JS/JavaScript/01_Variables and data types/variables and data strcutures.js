
function requested_result_sum() {
    let number_1 = parseInt(document.getElementById("num1").value);
    let number_2 = parseInt(document.getElementById("num2").value);
    let result_sum = number_1 + number_2 
    document.getElementById("result").value = 
    "The sum of " + number_1 + " and " + number_2 + " is: " + result_sum;
}

function requsted_result_substraction() {
    let number_1 = parseInt(document.getElementById("num1").value);
    let number_2 = parseInt(document.getElementById("num2").value);
    let result_subs = number_1 - number_2
    document.getElementById("result").value =
    "The substration of "+ number_1+ " and " + number_2 + " is : "+ result_subs;
}

function requested_result_multiplucation() {
    let number_1 = parseInt(document.getElementById("num1").value);
    let number_2 = parseInt(document.getElementById("num2").value);
    let result_mult = number_1 * number_2
    document.getElementById("result").value =
    "The multiplication of " + number_1 + " and " + number_2+ " is: " + result_mult;
}

function requested_result_divison() {
    let number_1 = parseInt(document.getElementById("num1").value);
    let number_2 = parseInt(document.getElementById("num2").value);
    let result_divition = number_1 / number_2
    document.getElementById("result").value =
    "The divition of " + number_1 + " and " + number_2+ " is: " + result_divition;
}

function clear_all() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").value = "";
}

window.onload = function() {
    document.getElementById("requested_result_sum").addEventListener("click", requested_result_sum);
    document.getElementById("requsted_result_substraction").addEventListener("click", requsted_result_substraction);
    document.getElementById("requested_result_multiplucation").addEventListener("click", requested_result_multiplucation);
    document.getElementById("requested_result_divison").addEventListener("click", requested_result_divison);
    document.getElementById("clear_all").addEventListener("click", clear_all);
};
  