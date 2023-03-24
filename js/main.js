const CountHotel = 10;

const PriceCount = {
    min: 12,
    max: 1200
}
const avatarCount = {
    min: 1,
    max: 8
}
const locationX = {
    min: 35.65000,
    max: 35.70000
}
const locationY = {
    min: 139.70000,
    max: 139.80000
}

const roomsCount = {
    min: 1,
    max: 3
}
const guestsCount = {
    min: 1,
    max: 5
}
const TitleHotel = [
    'San Pietro Grand Suite',
    'TIBERINA APARTMENTS - ROME TRASTEVERE',
    'Hotel Relais Dei Papi',
    'Nobildonne Relais',
    'Passepartout tower'
]

const description = [
    'This is our guests favorite part of Rome, according to independent reviews.',
    'Popular points of interest near TIBERINA APARTMENTS - ROME TRASTEVERE include Largo di Torre Argentina, Palazzo Venezia and Great Synagogue of Rome. The nearest airport is Rome Ciampino, 15 km from the accommodation, and the property offers a paid airport shuttle service.',
    'Just 500 m from Lepanto Metro Station on line A, Hotel Relais Dei Papi is 5 minutes’ walk from St. Peters Square and the Vatican Museums. All air-conditioned, rooms come with free Wi-Fi, flat-screen TV with pay-per-view channels, and a mini-bar.',
    'NOBILDONNE RELAIS is located in the Spagna district in Rome, 260 m from Via Condotti. It offers accommodations with frescoed ceilings and Venetian mosaic floors. Free WiFi is throughout.',
    'Popular points of interest near the accommodations include Torre Argentina, Pantheon and Castel Sant Angelo. The nearest airport is Rome Ciampino Airport, 9.3 mi from Passepartout.'
]

const type = [
    'palace',
    'flat',
    'house',
    'bungalow'
]

const checkin = [
    '12:00',
    '13:00',
    '14:00'
]
const checkout = [
    '12:00',
    '13:00',
    '14:00'
]

const Features = [
    'wifi', 
    'dishwasher', 
    'parking', 
    'washer',
    'elevator', 
    'conditioner'
]
const photos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
]


function randomUniqueArray(array){
    const lengthArray = array.length;
    const randomUniqueArray = randomUnique(lengthArray , getRandomInt(1, lengthArray + 1));
    return randomUniqueArray.map((elem) => array[elem - 1]);
}


function randomUnique(range, count){
    let nums = new Set();
    while (nums.size < count) {
        nums.add(Math.floor(Math.random() * (range - 1 + 1) + 1));
    }
    return [...nums];
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
}

function generationOffer(index){
    return {
        id: index + 1,
        author: {
            avatar: `img/avatars/user0${getRandomInt(avatarCount.min, avatarCount.max)}.png`
        },
        hotelOffer: {
            title: TitleHotel[getRandomInt(0, TitleHotel.length - 1)],
            description: description[getRandomInt(0, description.length - 1)],
            photos: randomUniqueArray(photos),
            address: `${getRandomFloat(locationX.min, locationX.max)}, ${getRandomFloat(locationY.min, locationY.max)}`,
            price: getRandomInt(PriceCount.min, PriceCount.max),
            type: type[getRandomInt(0, type.length - 1)],
            rooms: getRandomInt(roomsCount.min, roomsCount.max),
            guests: getRandomInt(guestsCount.min, guestsCount.max),
            checkin: checkin[getRandomInt(0, checkin.length - 1)],
            checkout: checkout[getRandomInt(0, checkout.length - 1)],
            Features: randomUniqueArray(Features),
            location: {
                x: getRandomFloat(locationX.min, locationX.max),
                y: getRandomFloat(locationY.min, locationY.max)
            }
        }
    }
}
  

const HotelDataArray = new Array(CountHotel).fill(null).map((e, index) => generationOffer(index));
console.log(HotelDataArray);