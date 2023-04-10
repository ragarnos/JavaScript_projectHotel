import  * as variable from "./variables.js";
import {sendForm} from "./ajaxForm.js"

const formTitle = document.querySelector("#title");
const formType = document.querySelector("#type");
const formPrice = document.querySelector("#price");
const formRooms = document.querySelector("#room_number");
const formGuest = document.querySelector("#capacity");
const formCheckin = document.querySelector("#timein");
const formCheckout = document.querySelector("#timeout");
const formDescription = document.querySelector("#description");
const form = document.querySelector(".ad-form");
const formAvatar = form.querySelector('.ad-form-header__preview').children[0]
const formPhotos = form.querySelector('.ad-form__photo').children[0]
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
form.querySelector('#avatar').addEventListener('input', (e) => {
    console.log(e.target.files[0]);
        if (e.target.files[0]) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    formAvatar.src = reader.result;
                }
                if (e.target.files[0]) {
                    reader.readAsDataURL(e.target.files[0]);
                } else {
                    formAvatar.src = "";
                }
        }
})
form.querySelector('#images').addEventListener('input', (e) => {
    console.log(e.target.files[0]);
        if (e.target.files[0]) {
                const reader = new FileReader();
                reader.onloadend = function () {
                    formPhotos.src = reader.result;
                }
                if (e.target.files[0]) {
                    reader.readAsDataURL(e.target.files[0]);
                } else {
                    formPhotos.src = "";
                }
        }
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

sendForm(form);
// submitBtn.addEventListener('submit', (btn) => {
    validationFrom();
    
// });
