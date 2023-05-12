const plansSwitch = document.querySelector(".plansSwitch");
const basicPrice = document.querySelector(".basic")
const standartPrice = document.querySelector(".standart");
const advancePrice = document.querySelector(".advanced");

plansSwitch.addEventListener("change", () =>{
  if (plansSwitch.checked){
    basicPrice.innerText = "30";
    standartPrice.innerText = "40";
    advancePrice.innerText = "60";
  } else {
    basicPrice.innerText = "25";
    standartPrice.innerText = "35";
    advancePrice.innerText = "50";
  }
})
