window.addEventListener('load',()=>{
    let formRegistro = document.querySelector('#form-registro')

    let fullName = document.querySelector('#nombre-apellido')

    console.log(fullName);
    let userName = document.querySelector('#userName')
    let email = document.querySelector('#email')
    let address = document.querySelector('#address')
    let archivo = document.querySelector('#archivo')
    let pasword = document.querySelector('#password');
    let rePassword = document.querySelector('#re-password')

    let listaErrores = document.querySelector('#listaErrores')

    formRegistro.addEventListener('submit',(e)=>{
        let errores = [];

        if (fullName.value == ""){
            errores.push('Debes escribir tu nombre completo')
        }
        if (fullName.value.length < 2){
            errores.push('Debes escribir mas de dos caracteres')
        }

        console.log(errores)

        //No tira error

        if (errores>0){
            e.preventDefault()
            for (let index = 0; index < errores.length; index++) {
                listaErrores.innerHTML+=`<li>${errores[index]}</li>`
            }
        }
    })
})