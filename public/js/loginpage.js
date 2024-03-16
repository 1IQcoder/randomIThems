const loginForm = document.querySelector('.login_formEl')
const erorMessage = document.querySelectorAll('.erorMessage')

const PORT = 2000
const localStorage = window.localStorage

function printMessage(message) {
    if (!message.green) {
        erorMessage.forEach(e => {
            e.classList.add('errorColor')
            e.innerHTML = message
        });   
    } else {
        erorMessage.forEach(e => {
            e.classList.remove('errorColor')
            e.innerHTML = message.text
        });
    }
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const formData = new FormData(loginForm)
    const data = Object.fromEntries(formData)

    fetch(`http://localhost:${PORT}/auth/submit-login`, {
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
        printMessage(res.message)

        const dataToStorage = {
            username: res.user.username,
            email: res.user.email
        }

        localStorage.setItem('user', JSON.stringify(dataToStorage))
        localStorage.setItem('authToken', res.token)
    })
})























