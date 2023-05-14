let box = document.querySelector('.change-area');
input = document.querySelector('input');

input.addEventListener('input', () =>{
    box.style.backgroundColor = input.value;
    box.style.borderRadius = input.value;
});
