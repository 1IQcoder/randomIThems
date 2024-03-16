const submit_reg = document.querySelector('#submit_register')
const signupFormEl = document.querySelector('.signupFormEl')
const messageAreas = document.querySelectorAll('.erorMessage')

const PORT = 2000

function printMessage(message) {
    messageAreas.forEach(e => {
        e.innerHTML = message
    });
}

signupFormEl.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(signupFormEl)
    const data = Object.fromEntries(formData)
    console.log(data)

    fetch(`http://localhost:${PORT}/auth/submit-signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => {
        return res.json()
    })
    .then(res => {
        console.log(res.message)
        printMessage(res.message)
    })
})





















