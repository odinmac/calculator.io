let result = document.getElementById("result");
let btn = document.getElementById("btn");
let numOne = document.getElementById("numOne");
let numTwo = document.getElementById("numTwo");
let reqop = document.getElementById("reqop");
let finalresult;
let numOneStatus,
  numTwoStatus,
  reqopStatus = false;

numOne.style.display = "none";
numTwo.style.display = "none";
reqop.style.display = "none";

btn.addEventListener("click", function () {
  let num1 = document.getElementById("fnum");
  let num2 = document.getElementById("snum");
  let option = document.getElementById("option");

    if (num1.value == "" || num1.value == null || num1.value == undefined) {
      numOne.style.display = "block";
      numOneStatus = true;
    } else {
      numOne.style.display = "none";
      numOneStatus = false;

    }
    if (num2.value == "" || num2.value == null || num2.value == undefined) {
      numTwo.style.display = "block";
      numTwoStatus = true;

    } else {
      numTwo.style.display = "none";
      numTwoStatus = false;

    }
    if (option.value == "empty") {
      reqop.style.display = "block";
      reqopStatus = true ;
    } else {
      reqop.style.display = "none";
      reqopStatus = false ;
    }

  if( !numOneStatus &&
      !numTwoStatus && 
      !reqopStatus) {
        num1 = parseInt(num1.value);
  num2 = parseInt(num2.value);

  switch (option.value) {
    case "add":
      finalresult = num1 + num2;
      break;
    case "minus":
      finalresult = num1 - num2;
      break;
    case "multily":
      finalresult = num1 * num2;
      break;
    case "devision":
      finalresult = num1 / num2;
      break;
    default:
      console.log("error");
      break;
  }
  result.innerHTML = finalresult;
      }
 
});
