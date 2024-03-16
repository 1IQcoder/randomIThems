const PORT = 2000
const token = window.localStorage.getItem('authToken')

if (!token) {
    console.error('Log in please!')
}

// Функция обновления контента
function updateDataAreas(data) {
    const updateData = document.querySelectorAll('.updateData')

    updateData.forEach(e => {
        const areaType = e.dataset.area
        e.innerHTML = data[areaType]
    });    
}

// Выполнение GET-запроса
fetch(`http://localhost:${PORT}/account/profile`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    }
}).then(res => {
    if (!res.ok) {
        return false
    }
    return res.json()
}).then(res => {
    if (!res) {
        return
    }
    updateDataAreas(res.user)
})







































