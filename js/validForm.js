import  * as variable from "./variables.js";


const formTitle = document.querySelector("#title");
const formType = document.querySelector("#type");
const formPrice = document.querySelector("#price");
const formRooms = document.querySelector("#room_number");
const formGuest = document.querySelector("#capacity");
const formCheckin = document.querySelector("#timein");
const formCheckout = document.querySelector("#timeout");
const formDescription = document.querySelector("#description");
const submitBtn = document.querySelector(".ad-form__submit");



function defaultGuest(){
    
    for(const formGuests of formGuest){
        if(formGuests.value == 0){
            formGuests.disabled = false;
        }else{
            formGuests.disabled = true;
        }
    }   
        
}

function roomSwich(e){
    const roomValue = variable.roomValid[e.target.value];
    defaultGuest();
    roomValue.forEach(element => {
            formGuest.querySelector(`option[value="${element}"]`).disabled = false;
    });
    formGuest.value = roomValue[0];
}

function GuestSwich(e) {
        if(e.target.value == 0){
            console.log(e.target.value);
            formRooms.value = 100;
        }
}
function TypePriceSwich(e) {
   const PriceHolder = variable.typePriceValid[e.target.value];
   formPrice.placeholder = PriceHolder;
}
function TimeCheckInOrCheckout(time) {
    formCheckout.value = time.target.value;
    formCheckin.value = time.target.value;
}
formPrice.addEventListener('input', (e) => {
    if(e.target.value < variable.typePriceValid[formType.value]){
        formPrice.setCustomValidity('Вы указали сумму ниже минимальной!');
    }else{
        formPrice.setCustomValidity("");
    }
    formPrice.reportValidity();
})

formTitle.addEventListener('input', (e) => {
    if(e.target.value.length < variable.maxLenghTitle){
        formTitle.setCustomValidity(`Заголовок должен иметь минимум ${variable.maxLenghTitle} символа!`);
    }else{
        formTitle.setCustomValidity("");
    }
    formTitle.reportValidity();
})
formDescription.addEventListener('input', (e) => {
    if(e.target.value.length < variable.maxLenghDesc){
        formDescription.setCustomValidity(`Описание должен иметь минимум ${variable.maxLenghDesc} символа!`);
    }else{
        formDescription.setCustomValidity("");
    }
    formDescription.reportValidity();
})
formGuest.addEventListener('change', (e) => {
    GuestSwich(e);
})

formRooms.addEventListener('change', (e) => {
    roomSwich(e);
})
formType.addEventListener('change', (e) => {
    TypePriceSwich(e);
})
formCheckin.addEventListener('change', (e) => {
    TimeCheckInOrCheckout(e);
})
formCheckout.addEventListener('change', (e) => {
    TimeCheckInOrCheckout(e);
})


function validationFrom(){
    if (formPrice.value === "" || formTitle === "") {
        console.log("Недостаточно данных");
        
    } else if (formGuest.value == "0" && formRooms.value !== "100") {
        console.log("Неправильный тип квартиры для такого количества людей");
    }else if (formGuest.value > formRooms.value){
        console.log("Неправильный тип людей для такого типа квартиры");
    }else {
        console.log("ok")
    }
}


// submitBtn.addEventListener('click', (btn) => {
//     validationFrom();
// });

