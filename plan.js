const plansSwitch = document.querySelector(".plans-switch");
const basicPrice = document.querySelector(".basic-price");
const professionalPrice = document.querySelector(".professional-price");
const businessPrice = document.querySelector(".business-price");
const planDuration = document.querySelectorAll(".plan-duration");

plansSwitch.addEventListener("change", () => {
    if (plansSwitch.checked) {
        basicPrice.innerText = "0";
        professionalPrice.innerText = "240";
        businessPrice.innerText = "588";
        planDuration.forEach(p => {
            p.innerText = "OMR/ year";
        })
    } else {
        basicPrice.innerText = "0OMR";
        professionalPrice.innerText = "20OMR";
        businessPrice.innerText = "49OMR";
        planDuration.forEach(p => {
            p.innerText = "/ month";
        })
    }
})