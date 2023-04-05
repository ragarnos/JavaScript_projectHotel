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
    const location = formExample.querySelector('#address').value;
    formExample.addEventListener("submit", (evt) => {
        evt.preventDefault();
        let backendCardHotel = {
            id:  func.getRandomInt(offer.avatarCount.min, offer.avatarCount.max),
        author: {
            avatar: `img/avatars/user0${func.getRandomInt(offer.avatarCount.min, offer.avatarCount.max)}.png`
        },
        hotelOffer: {
            title: formExample.querySelector('#title').value,
            description: formExample.querySelector('#description').value,
            photos: func.randomUniqueArray(offer.photos),
            address: formExample.querySelector('#address').value,
            price: formExample.querySelector('#price').value,
            type: formExample.querySelector('#type').value,
            rooms: formExample.querySelector('#room_number').value,
            guests: formExample.querySelector('#capacity').value,
            checkin: formExample.querySelector('#timein').value,
            checkout: formExample.querySelector('#timeout').value,
            Features: func.randomUniqueArray(offer.Features),
            location: {
               x: location.split(',')[0],
               y: location.split(',')[1]
            },
        }
        };
        formExample.reset();
        fetch('http://localhost:3001/offert', {
            method: "POST",
            body: JSON.stringify(
                backendCardHotel
            ),
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