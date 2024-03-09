const saludarBtn = document.getElementById('saludarBtn');

saludarBtn.addEventListener('click', () => {
    const form = document.forms['SaludarForm'];
    const nombreInput = form['nombreInp'];
    const nombreValue = nombreInput.value;
    const nombreError = document.getElementById('nombreError');
    if (!nombreValue){
        //alert('Debes ingresar un nombre');
        nombreError.classList.add('mostrarError');
    }else{
        nombreError.classList.remove('mostrarError'); 
        const parrafos = document.getElementsByTagName('p');
        console.log(parrafos);
        parrafos[0].innerText = ' Hola ' +  nombreInput.value;
    }
    
    
    
});

document.getElementById('nombreInp').addEventListener('keyup', () => {
    const form = document.forms['SaludarForm'];
    const nombreInput = form['nombreInp'];
    const nombreValue = nombreInput.value;

    if(!nombreValue){ return;}
    const nombreLetrasError = document.getElementById('nombreLetrasError');
    if(nombreValue.includes('1')){
        nombreLetrasError.classList.add('mostrarError');
    }else {
        nombreLetrasError.classList.remove('mostrarError');
    }
});