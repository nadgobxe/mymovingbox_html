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
    const infoButton = document.getElementById('infobutton');
    const closeInfoButton = document.getElementById('close-slideover');

    const dropDownEffect = (el) => {
        return () => {
            if (el.style.display === "block") {
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
        };
    };

    const allDropdowns = [dropDown, dropDownCurrency, dropDownLanguage];
    const allButtons = [chevronButton, chevronButtonCurrency, chevronButtonLanguage];

    document.addEventListener('click', function(event) {
        allDropdowns.forEach((dropdown, index) => {
            const correspondingButton = allButtons[index];
            if (!dropdown.contains(event.target) && !correspondingButton.contains(event.target)) {
                dropdown.style.display = 'none';
            }
        });
    });

    function showInfoCard(e) {
        e.preventDefault();
        const selectInfoCardClass = document.getElementsByClassName('main-card-slideover')[0];
        const selectInfoButton = document.querySelector("#infobutton > i");
        selectInfoButton.style.display = 'none';
        selectInfoCardClass.style.right = "-20%";
    }

    function closeInfoCard(e) {
        e.preventDefault();
        const selectInfoCardClass = document.getElementsByClassName('main-card-slideover')[0];
        const selectInfoButton = document.querySelector("#infobutton > i");
        selectInfoButton.style.display = 'block';
        selectInfoCardClass.style.right = "-55%";
    }

    chevronButton.addEventListener('click', dropDownEffect(dropDown));
    chevronButtonCurrency.addEventListener('click', dropDownEffect(dropDownCurrency));
    chevronButtonLanguage.addEventListener('click', dropDownEffect(dropDownLanguage));
    infoButton.addEventListener('click', showInfoCard);
    closeInfoButton.addEventListener('click', closeInfoCard);

    document.querySelector('.contact-us>div:last-child>a>i').addEventListener('click', function() {
        this.classList.toggle('rotated');
    });

    const element = document.getElementById("more-products-button"); // Extra width and height of more-products button
    const elementWidth = window.getComputedStyle(element).getPropertyValue("width");
    const elementHeight = window.getComputedStyle(element).getPropertyValue("height");
    document.documentElement.style.setProperty('--button-width', elementWidth);
    document.documentElement.style.setProperty('--button-height', elementHeight);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);