let buttonDiscover = document.querySelector('.discover-button'),
    program = document.querySelector('.program');

buttonDiscover.addEventListener('click', () => {
    
    buttonDiscover.classList.add('hidden');
    program.classList.remove('hidden');
})