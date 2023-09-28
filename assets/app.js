
const myLoadFunction = () => {

    const chevronButton = document.getElementById('chevron');
    const dropDown = document.querySelector('.drop-down');

    const dropDownEffect = () => {
        if (dropDown.style.display === "block") {
            dropDown.style.display = "none";
        } else {
            dropDown.style.display = "block";
        }
    }

    // const hideDropDown = () => {
    //     dropDown.style.display = "none";
    // }

    chevronButton.addEventListener('click', dropDownEffect);
    // chevronButton.addEventListener('mouseleave', hideDropDown);
};

document.addEventListener('DOMContentLoaded', myLoadFunction);