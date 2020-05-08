window.addEventListener('DOMContentLoaded', init);


function init(e){
    const [form, email, error] = [document.querySelector('form'), document.querySelector('#email'), document.querySelector('#error')]

    form.addEventListener('submit', (e) => {
        if(email.value === ''){  // if email input field is empty
            // stop submitting
            e.preventDefault();

            // display error
            email.style.border = '1px solid var(--secondary-red)';
            error.textContent = 'Whoops! It looks like you forgot to add your email';

            // remove error after 3 sec
            setTimeout(() => {
                removeError();
            }, 3000);

            
        } else if(email.value.indexOf('@') === -1){ // if invalid email syntax
            // stop submitting
            e.preventDefault();

            // display error
            email.style.border = '1px solid var(--secondary-red)';
            error.textContent = 'Please provide a valid email address';

            // remove error after 3 sec
            setTimeout(() => {
                removeError();    
            })

        }else{
            // otherwise
            e.preventDefault();
            form.style.display = 'none';
            document.querySelector('#respond').style.padding = '2rem';
            document.querySelector('#respond').innerHTML = '<h1>Stay Alert...</h1>';
        }
    })


    // function that removes any error displayed
    function removeError(){
        email.style.border = '0';
        error.textContent = '';
    }
    
}