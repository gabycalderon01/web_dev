//window.addEventListener("load", submitForm);
function initialize() {
//    document.getElementById("submitB").addEventListener("click", validateForm);
    document.getElementById("submitB").addEventListener("click", doMath);
}

/*function validateForm(e) {
    let myForm = document.getElementById("myForm");
    let inputIsValid = true;
    
    let totalValue = myForm.total.value;
    let tipPercentage = myForm.percentage.value;
    let splitCheck = document.getElementById("myForm").yes;
    let numberOfPeople = myForm.numberPeople.value;
    
    //validate total bill input
    if (isNaN(totalValue)) {
        //totalValue.style.backgroundColor = "Red";
        inputIsValid = false;
    }
    //validate tip percentage
    if ( !(0 < tipPercentage < 100) ) {
        //tipPercentage.style.backgroundColor = "Red";
        inputIsValid = false
    }
    //validate if number of people was entered
    if (splitCheck.checked) {
        if (isNaN(numberOfPeople)) {
            //numberOfPeople.style.backgroundColor = "Green";
            inputIsValid = false;
        }
    }
    
    if (inputIsValid == true) {
        doMath;
    }
}*/

function doMath() {
    let totalValue = parseFloat(document.getElementById("total").value);
    let tipPercentage = parseFloat(document.getElementById("percentage").value) / 100;
    const tax = 7.25 / 100;
    let splitCheck = document.getElementById("yes").value;

    /*if (splitCheck.checked) {
        let numberOfPeople = myForm.getElementById("numberPeople");
    }*/

    let tipResult = parseFloat(totalValue * tipPercentage);
    document.getElementById("tipResult").textContent = tipResult;
    let totBill = tipResult + totalValue;
    document.getElementById("totalBill").textContent = totBill;
    let plusTax = totBill + (totBill * tax);
    document.getElementById("billWithTax").textContent = Math.round(plusTax * 100) / 100;
}
 
window.addEventListener("load", initialize);