document.getElementById('btn-update').addEventListener('click',function(){
    const InputField =document.getElementById('input-field')
    const inputValue=InputField.value;
    const display = document.getElementById('input-text-display')
    display.innerText = inputValue;
    InputField.value =" ";
})