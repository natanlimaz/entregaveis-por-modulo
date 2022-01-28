const openModalButton = document.querySelector('#openModal')
const modalWrapper = document.querySelector('.modal-wrapper')

openModalButton.onclick = function() { 
    modalWrapper.classList.remove('invisible')
}

document.addEventListener('keydown', function(event) {
    const tecla = event.key === 'Escape'
    if(tecla) {
        modalWrapper.classList.add('invisible')
    }
})