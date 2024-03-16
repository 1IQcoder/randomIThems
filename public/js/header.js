const isUser = window.localStorage.getItem('user')
const authButtonBlock = document.querySelector('.authButtonBlock')
const userBlock = document.querySelector('.userBlock')

if (isUser) {
    const user = JSON.parse(isUser)
    const usernameText = document.querySelector('#usernameText')
    usernameText.innerHTML = user.username
    authButtonBlock.style.display = 'none'
} else {
    userBlock.style.display = 'none'
}

const logo = document.querySelector('.header_logo')
logo.addEventListener('click', () => {
    window.location.href = '/';
})






















