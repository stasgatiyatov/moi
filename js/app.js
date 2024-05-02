const burger = () => {
    const btn = document.querySelector('header header svg#burg')
    const off = document.querySelector('.offset')
    const close = document.querySelector('.offset nav svg')
    btn.addEventListener('click', () => {
        off.style.display = 'block'
        console.log(btn)
    })
    close.addEventListener('click', () => {
        off.style.display = 'none'
    })
}

burger()

const crest = () => {
    const tru = document.querySelector('header div>svg')
    const row = document.querySelector('header>div')
    tru.addEventListener('click', () => {
        row.style.display = 'none'
    })
}

crest()