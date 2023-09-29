function initMap() {
    // Create a new map instance
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 52.251218, lng: -0.894386 },
        zoom: 15
    });

    // Create a new marker instance and set its position and map
    const marker = new google.maps.Marker({
        position: { lat: 52.251218, lng: -0.894386 },
        map: map,
        title: '58 Bunting Road, NN2 6EE'
    });
}
  window.initMap = initMap;

function myLoadFunction() {

    const chevronButton = document.getElementById('chevron1');
    const dropDown = document.querySelector('.drop-down');

    const dropDownEffect = () => {
        if (dropDown.style.display === "block") {
            dropDown.style.display = "none";
        } else {
            dropDown.style.display = "block";
        }
    };

    // const hideDropDown = () => {
    //     dropDown.style.display = "none";
    // }
    chevronButton.addEventListener('click', dropDownEffect);
    // chevronButton.addEventListener('mouseleave', hideDropDown);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);