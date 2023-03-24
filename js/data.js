import * as offer from "./variables.js";
import * as func from "./util.js"


function generationOffer(index){
    return {  
        id: index + 1,
        author: {
            avatar: `img/avatars/user0${func.getRandomInt(offer.avatarCount.min, offer.avatarCount.max)}.png`
        },
        hotelOffer: {
            title: offer.TitleHotel[func.getRandomInt(0, offer.TitleHotel.length - 1)],
            description: offer.description[func.getRandomInt(0, offer.description.length - 1)],
            photos: func.randomUniqueArray(offer.photos),
            address: `${func.getRandomFloat(offer.locationX.min, offer.locationX.max)}, ${func.getRandomFloat(offer.locationY.min, offer.locationY.max)}`,
            price: func.getRandomInt(offer.PriceCount.min, offer.PriceCount.max),
            type: offer.type[func.getRandomInt(0, offer.type.length - 1)],
            rooms: func.getRandomInt(offer.roomsCount.min, offer.roomsCount.max),
            guests: func.getRandomInt(offer.guestsCount.min, offer.guestsCount.max),
            checkin: offer.checkin[func.getRandomInt(0, offer.checkin.length - 1)],
            checkout: offer.checkout[func.getRandomInt(0, offer.checkout.length - 1)],
            Features: func.randomUniqueArray(offer.Features),
            location: {
                x: func.getRandomFloat(offer.locationX.min, offer.locationX.max),
                y: func.getRandomFloat(offer.locationY.min, offer.locationY.max)
            }
        }
    }
}
export const HotelDataOffer = new Array(offer.CountHotel).fill(null).map((e, index) => generationOffer(index));



