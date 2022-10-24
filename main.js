/* jshint esversion: 6*/

/*----------------<form manipulation>-------------------*/

const scriptURL = "https://script.google.com/macros/s/AKfycbyRLuBLTuazpVF7RzlhdhVPCDwcJ_hxSuTwt_tgOhfY-WnpOSKfvmMjaAoamILQ2HqmXA/exec";
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault();
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = " Message sent successfully";
            setTimeout(function () {
                msg.innerHTML = "";
            }, 5000);
            form.reset();
        })
        .catch(error => console.error('Error!', error.message));
});

/*--------------------<\form manipulation>-------------------*/

function footerDate() {
    const currentYear = new Date().getFullYear();
    var body = document.body;
    footer = document.getElementById('footer_date');
    footer.innerHTML = currentYear;
    footer.style.color = "aquawhite";
}
window.onload = footerDate();

const button = document.querySelector("button");
function buttonClick() {
    button.style.backgroundColor = "green";
}













