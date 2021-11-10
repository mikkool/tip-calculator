const textBill = document.querySelector("#txt-bill");
const textPeople = document.querySelector("#txt-people");
const tipButtons = document.querySelectorAll(".btn-tip");
const labelTip = document.querySelector(".lbl-tip");
const labelPerson = document.querySelector(".tip-person");

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
    let tipValue = tipButton.value / 100;
    let totalTip = (textBill.value * tipValue);
    let totalTipPerson = (textBill.value * tipValue) / textPeople.value;
    console.log(totalTip);

    usdFormat = Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    });

    labelTip.innerHTML = usdFormat.format(totalTip);
    labelPerson.innerHTML = usdFormat.format(totalTipPerson)
  })
})
