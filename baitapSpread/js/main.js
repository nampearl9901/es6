let heading = document.getElementsByClassName('heading')[0].innerText;

let chars = [...heading]

let content = ''
chars.forEach(item => {
    content += `<span>${item}</span>`
})
document.getElementsByClassName('heading')[0].innerHTML = content