const textareas = document.querySelectorAll('.auto_height')
const add_text_button = document.querySelector('#add_text')
const threads_wrapper = document.querySelector('.public_content')
const public_post_b = document.querySelector('#public_post_b')

const PORT = 2000

// изменение размера textarea
textareas.forEach(e => {
    e.addEventListener('input', () => {
        autoExpand(e)
    })
});

const textarea_padding = 0
function autoExpand(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight+textarea_padding + 'px';
}

// активация поля для ввода текста
add_text_button.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    textarea.placeholder = 'Напешите текст'
    textarea.addEventListener('input', () => {
        autoExpand(textarea)
    })
    textarea.classList.add('auto_height', 't_post-text', 'textarea_unsize')
    textarea.setAttribute('data-type', 'text_p')
    threads_wrapper.appendChild(textarea)
    textarea.focus()
})

// Публикация статьи
// function getPostContent() {
//     let formData = new FormData()

//     const public_elems = document.querySelector('.public_content').children
//     console.log(public_elems)
//     Array.from(public_elems).forEach(function(e) {
//         // if (e.dataset.type = 'title_h1') {
//         //     console.log(e.value)
//         // }
//         formData.append(e.dataset.type, e.value)
//     });
//     // console.log(formData.getAll('title_h1'))
//     for (var pair of formData.entries()) {
//         console.log(pair[0] + ': ' + pair[1]);
//     }

//     // отправка данных
//     fetch(`http://localhost:${PORT}/article`, {
//         method: 'POST',
//         // headers: {
//         //     'Content-Type': 'application/json'
//         // },
//         body: formData
//     })
//     .then(response => {
//         if (response.ok) {
//             return response.json();
//         }
//         throw new Error('Ошибка HTTP: ' + response.status);
//     })
//     .then(data => {
//         console.log('Успешно отправлено:', data);
//     })
//     .catch(error => {
//         console.error('Ошибка отправки:', error);
//     });
// }

function sendArticle() {

    let formData = new FormData()

    const sendData = {
        author: {
            name: "Alex",
            email: "pon@gmail.com"
        }
    }

    formData.append('title', 'Ivan Rak')
    formData.append('p', 'Ivan its a big Rak')
    formData.append('author', sendData)

    fetch(`http://localhost:${PORT}/article/create`, {
        method: 'POST',
        body: formData
    })
    .then(res => {
        if (res.ok) {
            return res.json();
        }
        throw new Error('Ошибка HTTP: ' + res.status);
    })
    .then(res => {
        console.log(res);
    })
}

public_post_b.addEventListener('click', () => {
    sendArticle()
})









