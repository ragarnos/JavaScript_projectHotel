const cardHotel = document.querySelector("#card");


const cloneTemplate = cardHotel.content.cloneNode(true);
const hotelData = new DocumentFragment();
const titleClone = cloneTemplate.querySelector('.popup__title');
const avatarClone = cloneTemplate.querySelector('.popup__avatar');
const addressClone = cloneTemplate.querySelector('.popup__text--address');
const typeClone = cloneTemplate.querySelector('.popup__type');
const priceClone = cloneTemplate.querySelector('.popup__text--price');
const roomsGuestClone = cloneTemplate.querySelector('.popup__text--capacity');
const InOutTimeClone = cloneTemplate.querySelector('.popup__text--time');
const featuresClone = cloneTemplate.querySelector('.popup__features');
const descriptionClone = cloneTemplate.querySelector('.popup__description');
const photosClone = cloneTemplate.querySelector('.popup__photos');
function switchType(type){
    switch (type) {
        case 'palace' :
            return  'Квартира';
        case 'flat':
            return  'Бунгало';
        case 'house':
            return  'Будинок';
        case 'bungalow':
            return  'Палац';  
        default:
            console.log('dafault');
    }
}
function FeaturesArray(feature){
    const lis = document.createElement('li');
    const NewCloneLi = new DocumentFragment();
    feature.forEach(item => {
        lis.setAttribute('class', `popup__feature popup__feature--${item}`);
        NewCloneLi.appendChild(lis.cloneNode(true))
    });
    return NewCloneLi;
}
function photoArray(photo){
    const photos = photosClone.querySelector('.popup__photo');
    const NewClonephoto = new DocumentFragment();
    photo.forEach(item => {
        photos.src =  item;
        NewClonephoto.appendChild(photos.cloneNode(true))
    });
    return NewClonephoto;
}


export function CloneCardHotel(HotelDataOffers){   
        titleClone.innerText = HotelDataOffers.hotelOffer.title;
        descriptionClone.innerText = HotelDataOffers.hotelOffer.description;
        avatarClone.src = HotelDataOffers.author.avatar;
        addressClone.innerText = HotelDataOffers.hotelOffer.address;
        typeClone.innerText = switchType(HotelDataOffers.hotelOffer.type);
        priceClone.innerHTML = HotelDataOffers.hotelOffer.price+" <span>грн/ніч</span>";
        roomsGuestClone.innerText = `${HotelDataOffers.hotelOffer.rooms} кімнати для ${HotelDataOffers.hotelOffer.guests} гостей`;
        InOutTimeClone.innerText = `Заїзд після ${HotelDataOffers.hotelOffer.checkin}, виїзд до ${HotelDataOffers.hotelOffer.guests}`;
        const featuresArray = FeaturesArray(HotelDataOffers.hotelOffer.Features);
        featuresClone.replaceChildren(featuresArray);
        const photosArray = photoArray(HotelDataOffers.hotelOffer.photos);
        photosClone.replaceChildren(photosArray)
        return cloneTemplate.cloneNode(true);
}
