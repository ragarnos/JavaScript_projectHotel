
export const CountHotel = 10;
export const maxLenghTitle = 5;
export const maxLenghDesc = 15;
export const PriceCount = {
    min: 0,
    max: 13000
}
export const avatarCount = {
    min: 1,
    max: 8
}
export const locationX = {
    min: 35.65000,
    max: 35.70000
}
export const locationY = {
    min: 139.70000,
    max: 139.80000
}

export const roomsCount = {
    min: 1,
    max: 3,
    full: 100
}
export const guestsCount = {
    min: 1,
    max: 3
}
export const TitleHotel = [
    'San Pietro Grand Suite',
    'TIBERINA APARTMENTS - ROME TRASTEVERE',
    'Hotel Relais Dei Papi',
    'Nobildonne Relais',
    'Passepartout tower'
]

export const description = [
    'This is our guests favorite part of Rome, according to independent reviews.',
    'Popular points of interest near TIBERINA APARTMENTS - ROME TRASTEVERE include Largo di Torre Argentina, Palazzo Venezia and Great Synagogue of Rome. The nearest airport is Rome Ciampino, 15 km from the accommodation, and the property offers a paid airport shuttle service.',
    'Just 500 m from Lepanto Metro Station on line A, Hotel Relais Dei Papi is 5 minutes’ walk from St. Peters Square and the Vatican Museums. All air-conditioned, rooms come with free Wi-Fi, flat-screen TV with pay-per-view channels, and a mini-bar.',
    'NOBILDONNE RELAIS is located in the Spagna district in Rome, 260 m from Via Condotti. It offers accommodations with frescoed ceilings and Venetian mosaic floors. Free WiFi is throughout.',
    'Popular points of interest near the accommodations include Torre Argentina, Pantheon and Castel Sant Angelo. The nearest airport is Rome Ciampino Airport, 9.3 mi from Passepartout.'
]

export const type = [
    'palace',
    'flat',
    'house',
    'bungalow'
]

export const checkin = [
    '12:00',
    '13:00',
    '14:00'
]
export const checkout = [
    '12:00',
    '13:00',
    '14:00'
]

export const Features = [
    'wifi', 
    'dishwasher', 
    'parking', 
    'washer',
    'elevator', 
    'conditioner'
]
export const photos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg', 
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
]

export const roomValid = {
    1:[1],
    2:[2,1],
    3:[3,2,1],
    100:[0]
}
export const typePriceValid = {
    bungalow: 0,
    flat: 1000,
    house: 5000,
    palace: 10000
}
