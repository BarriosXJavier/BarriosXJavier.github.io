/* jshint esversion: 6*/
 const scriptURL = 'https://script.google.com/macros/s/AKfycbyozxWjSzux2kONMtGq09zjrZLtcmbM1CJFKna6X-BHjLJivm5QOMHfZbhfsJDraj98nA/exec';
        const form = document.forms['submit-to-google-sheet'];
        const msg = document.getElementById('msg');

        form.addEventListener('submit', e => {
            e.preventDefault()
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = " Message sent successfully";
                    setTimeout(function(){
                        msg.innerHTML = ""
                    },5000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        });















