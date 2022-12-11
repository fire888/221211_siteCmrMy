import { PICTURES } from "./data/PICTURES";

console.log(window.URL)

const _$ = (key, classes, content) => {
    const elem = document.createElement(key)
    elem.classList.add(...classes)
    elem.innerHTML = content
    return elem
}


const wr = _$('div', ['aaa'], '')
document.body.appendChild(wr)
for (let i = 0; i < PICTURES.length; ++i) {
    const p = _$('div', [], PICTURES[i].name)
    wr.appendChild(p)
}

