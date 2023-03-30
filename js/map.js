
import {HotelDataOffer} from './data.js';
import {CloneCardHotel} from './generationTemplate.js';

const map = L.map('map-canvas').setView([35.67267785620779, 139.7518429874794,], 13);
let marker = undefined;
let MyIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [38, 95],
    shadowSize: [50, 64], 
    iconAnchor: [22, 94], 
    shadowAnchor: [4, 62], 
    popupAnchor: [-3, -76] 
});



export function mapCanvas(){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    
    for (let i = 1; i < HotelDataOffer.length; i++) {
        console.log(HotelDataOffer[i].hotelOffer);
        marker = new L.marker([HotelDataOffer[i].hotelOffer.location.x, HotelDataOffer[i].hotelOffer.location.y],)
            .bindPopup(CloneCardHotel[i])
            .addTo(map);
        
    }
    const myMarker = new L.marker(L.latLng(35.67267785620779, 139.75866624868985), { draggable: true, icon: MyIcon })
    .addTo(map)
    myMarker.addEventListener('drag', () => {
        const latlng = myMarker.getLatLng();
        myMarker.setLatLng(latlng);
        document.getElementById("address").value = `${latlng.lat}, ${latlng.lng}`;
    });
}
const form = document.querySelector(".ad-form");
export function pageIsLoadedmap(bool) {
    for (let i = 0; i < form.elements.length; i++) {
        form.elements[i].disabled = bool;
    }
}
map.on('load',pageIsLoadedmap(false))