import * as array from "./variables.js";
import * as func from "./util.js"


function generationOffer(index){
    return {  
        id: index + 1,
        author: {
            avatar: `img/avatars/user0${func.getRandomInt(array.avatarCount.min, array.avatarCount.max)}.png`
        },
        hotelOffer: {
            title: array.TitleHotel[func.getRandomInt(0, array.TitleHotel.length - 1)],
            description: array.description[func.getRandomInt(0, array.description.length - 1)],
            photos: func.randomUniqueArray(array.photos),
            address: `${func.getRandomFloat(array.locationX.min, array.locationX.max)}, ${func.getRandomFloat(array.locationY.min, array.locationY.max)}`,
            price: func.getRandomInt(array.PriceCount.min, array.PriceCount.max),
            type: array.type[func.getRandomInt(0, array.type.length - 1)],
            rooms: func.getRandomInt(array.roomsCount.min, array.roomsCount.max),
            guests: func.getRandomInt(array.guestsCount.min, array.guestsCount.max),
            checkin: array.checkin[func.getRandomInt(0, array.checkin.length - 1)],
            checkout: array.checkout[func.getRandomInt(0, array.checkout.length - 1)],
            Features: func.randomUniqueArray(array.Features),
            location: {
                x: func.getRandomFloat(array.locationX.min, array.locationX.max),
                y: func.getRandomFloat(array.locationY.min, array.locationY.max)
            }
        }
    }
}
export const HotelDataArray = new Array(array.CountHotel).fill(null).map((e, index) => generationOffer(index));