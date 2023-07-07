const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const menu = document.getElementById('menu')

function openMenu(){
    console.log('berhasil')
    closeBtn.classList.toggle('hidden')
    openBtn.classList.toggle('hidden')
    menu.classList.toggle('hidden')

}

function closeMenu(){
    console.log('berhasil')
    closeBtn.classList.toggle('hidden')
    openBtn.classList.toggle('hidden')
    menu.classList.toggle('hidden')
}