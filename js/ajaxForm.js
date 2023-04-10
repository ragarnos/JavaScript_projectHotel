import * as offer from "./variables.js";
import * as func from "./util.js"
export const HotelDataOffer = await fetch('http://localhost:3001/offert')
.then(function (resp) {
    return resp.json()
})
.catch((error) => {
    return `${error}`;
});

export function sendForm(formExample){
    
    formExample.addEventListener("submit", (evt) => {
        const formphotosData = new FormData();
        const location = formExample.querySelector('#address').value;
       console.log(location.split(',')[0],location.split(',')[1]);
        evt.preventDefault();
        formphotosData.append("avatar", formExample.querySelector('#avatar').files[0]);
        formphotosData.append("title", formExample.querySelector('#title').value);
        formphotosData.append("description", formExample.querySelector('#description').value);
        formphotosData.append("address", formExample.querySelector('#address').value);
        formphotosData.append("price", formExample.querySelector('#price').value);
        formphotosData.append("type", formExample.querySelector('#type').value);
        formphotosData.append("rooms", formExample.querySelector('#room_number').value);
        formphotosData.append("guests", formExample.querySelector('#capacity').value);
        formphotosData.append("checkin", formExample.querySelector('#timein').value);
        formphotosData.append("checkout", formExample.querySelector('#timeout').value);
        formphotosData.append("Features", func.randomUniqueArray(offer.Features));
        formphotosData.append("locationX", location.split(',')[0]);
        formphotosData.append("locationY", location.split(',')[1]);
        formphotosData.append("photos", formExample.querySelector('#images').files[0]);

        
        // formExample.reset();
        fetch('http://localhost:3001/offert', {
            method: "POST",
            body: formphotosData,
        })
            .then((response) => {
                response.json()
                bodys.appendChild(success);
            })

            .catch((error) => {
                // success
                return `${error}`;
            });

});
}