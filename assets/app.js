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
    const chevronButtonCurrency = document.getElementById('currency');
    const chevronButtonLanguage = document.getElementById('language');
    const dropDown = document.querySelector('.drop-down');
    const dropDownCurrency = document.querySelector('.currencylist');
    const dropDownLanguage = document.querySelector('.languagelist');

    const dropDownEffect = (el) => {
        return () => {
            if (el.style.display === "block") {
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
        };
    };

    chevronButton.addEventListener('click', dropDownEffect(dropDown));
    chevronButtonCurrency.addEventListener('click', dropDownEffect(dropDownCurrency));
    chevronButtonLanguage.addEventListener('click', dropDownEffect(dropDownLanguage));

    document.querySelector('.contact-us>div:last-child>a>i').addEventListener('click', function() {
        this.classList.toggle('rotated');
    });
}

document.addEventListener('DOMContentLoaded', myLoadFunction);