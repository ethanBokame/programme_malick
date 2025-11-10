let buttonDiscover = document.querySelector('.discover-button'),
    program = document.querySelector('.program');

buttonDiscover.addEventListener('click', () => {
    
    buttonDiscover.classList.add('hidden');
    program.classList.remove('hidden');
})


window.addEventListener('click', (e) => {

    if (!e.target.closest('.program') && !e.target.closest('.discover-button')) {
        buttonDiscover.classList.remove('hidden');
        program.classList.add('hidden');
    }

    
})