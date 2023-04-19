import {HotelDataOffer} from './ajaxForm.js';
import * as variable from "./variables.js";
import {generateMarkerCard, deleteMarker} from "./map.js";


let arrNewFilter;
const features = [];

document.querySelector(".map__filters").addEventListener('change', function (e) {


    if(e.target.getAttribute("name") === "features"){
        toggleCheckbox(e.target);
        arrNewFilter = resultFilter(e.target, HotelDataOffer);
        generateMarkerCard(arrNewFilter)
        
    } else if(e.target.classList.value === "map__filter"){
        arrNewFilter = resultFilter(e.target, HotelDataOffer);
        generateMarkerCard(arrNewFilter)
    }
  })

function resultFilter(HotelOfFilter, HotelDataBack){
    let result = [];
    const FilterValueSelect = HotelOfFilter.id.split('-')[1];
    const valueFilter = HotelOfFilter.value;
    HotelDataBack.filter((element) => {
        const typeFilter = element.hotelOffer[FilterValueSelect];
        if(FilterValueSelect === 'type'){
            if(typeFilter == valueFilter ){
                result.push(element);
                deleteMarker();
            }else if(valueFilter == 'any'){
                result.push(element);
            }
        }if(FilterValueSelect === 'price'){
            const priceMin = variable.FilterVar.price[valueFilter].min;
            const priceMax = variable.FilterVar.price[valueFilter].max;
            if(typeFilter > priceMin && typeFilter < priceMax){
                result.push(element);
                deleteMarker();
            }else if(valueFilter == 'any'){
                result.push(element);
            }
        }
        if(FilterValueSelect === 'rooms'){
            if(typeFilter === valueFilter){
                result.push(element);
                deleteMarker();
            }else if(valueFilter == 'any'){
                result.push(element);
            }
        }
        if(FilterValueSelect === 'guests'){
            if(typeFilter === valueFilter){
                result.push(element);
                deleteMarker();
            }else if(valueFilter == 'any'){
                result.push(element);
            }
        }
        if(HotelOfFilter.name == 'features'){
            
          featuresFilter(element,result);
          deleteMarker();
        //   result.push(featurdata);
        //   console.log(featurdata);
        }else if(features.length !== 0){

        }

    });
    return result;
}
function toggleCheckbox(checkbox){
    if(checkbox.checked){
        features.push(checkbox.id.split("-")[1]);
    }else{
        features.forEach((value, index) => {
            if(value === checkbox.id.split("-")[1]){
                features.splice(index, 1);
            }
        });
    }
}

function featuresFilter(DataHole,result){
    if(features.length !== 0){
        if(features.every(item => DataHole.hotelOffer.Features.includes(item))){
            return result.push(DataHole);
        }
      
    } else{
        return result.push(DataHole);
    }
}