import {HotelDataOffer} from "./ajaxForm.js"
import {CloneCardHotel} from './generationTemplate.js';

const addresInput = document.getElementById("address");
const map = L.map('map-canvas').setView([35.67267785620779, 139.7518429874794,], 13);
const mapFilter = document.querySelector('.map__filters') ;
const form = document.querySelector(".ad-form");
pageIsLoadedmap(true);
const MyIcon = L.icon({
    iconUrl: './img/main-pin.svg',
    iconSize: [38, 95],
    shadowSize: [50, 64], 
    iconAnchor: [22, 94], 
    shadowAnchor: [4, 62], 
    popupAnchor: [-3, -76] 
});



function mapCanvas(){
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    const myRedMarker = new L.marker(L.latLng(35.67267785620779, 139.75866624868985), { draggable: true, icon: MyIcon }).addTo(map)
    myRedMarker.on('drag', () => {
        addresInput.value = `${myRedMarker.getLatLng().lat}, ${myRedMarker.getLatLng().lng}`;
    });
    addresInput.value = `${myRedMarker.getLatLng().lat}, ${myRedMarker.getLatLng().lng}`;
    addresInput.setAttribute('readonly', true);

}
let BlueMarker =[];
export function generateMarkerCard(defaultHotels){

    for (let i = 0; i < defaultHotels.length; i++) {
        BlueMarker.push(new L.marker([defaultHotels[i].hotelOffer.location.x, defaultHotels[i].hotelOffer.location.y])
        .bindPopup(CloneCardHotel(defaultHotels[i]))
        .on("click", function(e){
             e.target.bindPopup(CloneCardHotel(defaultHotels[i]));
        }).addTo(map)); 
    }
    
}
export function deleteMarker(){
    for(let i = 0; i < BlueMarker.length; i++) {
        map.removeLayer(BlueMarker[i])
    }  
}
function pageIsLoadedmap(bool) {
    for (let i = 0; i < form.elements.length; i++) {
        form.elements[i].disabled = bool;
    }
    for (let i = 0; i < mapFilter.elements.length; i++) {
        mapFilter.elements[i].disabled = bool;
    }
    
}
mapCanvas();
generateMarkerCard(HotelDataOffer);

map.on('load',pageIsLoadedmap(false));