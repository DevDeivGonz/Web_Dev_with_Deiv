
function requested_user() {
    let age_of_user = parseInt(document.getElementById("age_user").value);
    if (age_of_user < 18) {
        document.getElementById("result_requested").value = "You are minor of age";
        return;
    } else if (age_of_user >= 18) {
        document.getElementById("result_requested").value = "You are major of age";
        return;
    } else {
        document.getElementById("result_requested").value = "Invalid age input";
        return;
    }
}


function clear_all() {
    document.getElementById("age_user").value = "";
    document.getElementById("result_requested").value = "";
}

window.onload = function() {
    document.getElementById("requested_user").addEventListener("click", requested_user);
    document.getElementById("clear_all").addEventListener("click", clear_all);
};
  