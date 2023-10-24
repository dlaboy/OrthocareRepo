import axios from 'axios'

// https://github.com/axios/axios
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.post('https://formsubmit.co/ajax/laboydiego23@orthocare.life', {
    name: "FormSubmit",
    message: "I'm from Devro LABS"
})
    .then(response => console.log(response))
    .catch(error => console.log(error));