const textBill = document.querySelector("#txt-bill");
const textPeople = document.querySelector("#txt-people");
const tipButtons = document.querySelectorAll(".btn-tip");
const labelTip = document.querySelector(".lbl-tip");
const labelPerson = document.querySelector(".tip-person");
const buttonReset = document.querySelector(".btn-reset");
const textCustom = document.querySelector(".txt-custom")
const buttonCustom = document.querySelector(".custom")

let totalBill = 0;
let totalPeople = 0;


function calculateTip(){
  //let totalTip = 0;
  if(tipPercent === 5){
    totalTip = (textBill.value * 0.05) / textPeople.value;
    console.log(totalTip);
  }
  console.log(totalTip);
  return totalTip
}

tipButtons.forEach((tipButton) => {
  tipButton.addEventListener("click", () => {
    if (textBill.value == "") {
      textBill.focus();
    }else if (textPeople.value == ""){
      textPeople.focus();
      
    }else{
      let tipValue = tipButton.value / 100;
      let totalTip = (textBill.value * tipValue);
      let totalTipPerson = (textBill.value * tipValue) / textPeople.value;
      console.log(totalTip);

      usdFormat = Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
      });
      if(tipButton.value == "custom"){
        textCustom.style.display = "block";
        buttonCustom.style.display = "none";
        textCustom.focus();
      }else{
        labelTip.innerHTML = usdFormat.format(totalTip);
        labelPerson.innerHTML = usdFormat.format(totalTipPerson)
      }
    }
  })
})

buttonReset.addEventListener("click", () => {
  textBill.value = "";
  textPeople.value = "";
  textBill.focus();
  textCustom.style.display = "none";
  buttonCustom.style.display = "block";
})

textBill.addEventListener("keypress", (e) => {
  console.log(e.code);
  if(e.which == 'Tab' || e.code == 'Tab' || e.code == 'Enter') {
    textPeople.focus();
    console.log(e.code);
  }
})