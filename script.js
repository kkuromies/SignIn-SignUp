const signUpButton = document.getEmelemntById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => { 
    container.classList.add('right-panel-active');
});

signInButton.addEventListener('click', () => { 
    container.classList.add('right-panel-active');
});