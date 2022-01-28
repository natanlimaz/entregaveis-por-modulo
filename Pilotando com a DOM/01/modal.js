const openModalButton = document.getElementById('openModal')
const modalWrapper = document.getElementsByClassName('.modal-wrapper')

openModalButton.onclick = function() {
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const tecla = event.key === 'Escape'
    if(tecla) {
        modalWrapper.classList.add('invisible')
    }
})