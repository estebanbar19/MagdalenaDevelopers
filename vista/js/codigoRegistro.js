// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-auth.js';
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiWe1mOBsqvzD-AaACR7itNloHUYGe8fY",
  authDomain: "practica-228ed.firebaseapp.com",
  databaseURL: "https://practica-228ed-default-rtdb.firebaseio.com",
  projectId: "practica-228ed",
  storageBucket: "practica-228ed.appspot.com",
  messagingSenderId: "377221506090",
  appId: "1:377221506090:web:5aa745c062f6d6963a4f53",
  measurementId: "G-MCSBZT68Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase();

var btnRegistrar = document.getElementById("btnRegistrar");
var agregarRedSocial = document.getElementById("agregarRedSocial");
var divRedSocial = document.createElement("div");
var agregarLenguaje = document.getElementById("agregarLenguaje");
var divLenguajeProgramacion = document.createElement("div");
var btnVolver = document.getElementById("btnVolver");
divLenguajeProgramacion.classList.add("agregarLenguajeProgramacion")
divRedSocial.classList.add("redesSociales");

btnVolver.onclick = ()=>{
    window.location.assign("../../index.php");
}

agregarLenguaje.onclick = ()=>{
    let select1 = document.createElement("select");
    let opcion11 = document.createElement("option");
    let opcion12 = document.createElement("option");
    let opcion13 = document.createElement("option");
    let opcion14 = document.createElement("option");
    let select2 = document.createElement("select");
    let opcion21 = document.createElement("option");
    let opcion22 = document.createElement("option");
    let opcion23 = document.createElement("option");
    let opcion24 = document.createElement("option");
    let textarea = document.createElement("textarea");
    let informacionAcademica = document.getElementById("informacionAcademica");

    agregarAtributosLenguaje(select1, opcion11, opcion12, opcion13, opcion14, select2, opcion21, opcion22, opcion23, opcion24, textarea);

    select1.appendChild(opcion11);
    select1.appendChild(opcion12);
    select1.appendChild(opcion13);
    select1.appendChild(opcion14);
    select2.appendChild(opcion21);
    select2.appendChild(opcion22);
    select2.appendChild(opcion23);
    select2.appendChild(opcion24);
    divLenguajeProgramacion.appendChild(select1);
    divLenguajeProgramacion.appendChild(select2);
    divLenguajeProgramacion.appendChild(textarea);
    informacionAcademica.appendChild(divLenguajeProgramacion);
}

const agregarAtributosLenguaje = (select1, opcion11, opcion12, opcion13, opcion14, select2, opcion21, opcion22, opcion23, opcion24, textarea)=>{
    select1.setAttribute("form","formularioRegistro");
    select1.setAttribute("name","tipoLenguaje");
    select1.classList.add("tipoLenguaje");
    select1.setAttribute("size", "1");
    select2.setAttribute("form","formularioRegistro");
    select2.setAttribute("name","nivelProgramacion");
    select2.classList.add("nivelProgramacion");
    select1.setAttribute("size", "1");

    opcion11.setAttribute("value", "1");
    opcion12.setAttribute("value", "2");
    opcion13.setAttribute("value", "3");
    opcion14.setAttribute("value", "4");
    opcion21.setAttribute("value", "1");
    opcion22.setAttribute("value", "2");
    opcion23.setAttribute("value", "3");
    opcion24.setAttribute("value", "4");
    opcion11.innerText = "Lenguaje";
    opcion12.innerText = "PHP";
    opcion13.innerText = "Javascript";
    opcion14.innerText = "Python";
    opcion21.innerText = "Nivel programacion";
    opcion22.innerText = "Junior";
    opcion23.innerText = "Middle";
    opcion24.innerText = "Senior";

    textarea.setAttribute("name", "especializacion");
    textarea.setAttribute("form", "formularioRegistro");
    textarea.classList.add("especializacion");
}

agregarRedSocial.onclick = ()=>{
    let select = document.createElement("select");
    let opcion1 = document.createElement("option");
    let opcion2 = document.createElement("option");
    let opcion3 = document.createElement("option");
    let opcion4 = document.createElement("option");
    let input =document.createElement("input");
    let informacionContacto = document.getElementById("informacionContacto");

    agregarAtributosRedSocial(select, opcion1, opcion2, opcion3, opcion4, input);

    select.appendChild(opcion1);
    select.appendChild(opcion2);
    select.appendChild(opcion3);
    select.appendChild(opcion4);
    divRedSocial.appendChild(select);
    divRedSocial.appendChild(input);
    informacionContacto.appendChild(divRedSocial);
}

const agregarAtributosRedSocial = (select, opcion1, opcion2, opcion3, opcion4, input)=>{
    select.setAttribute("form","formularioRegistro");
    select.setAttribute("name","tipoRedSocial");
    select.classList.add("tipoRedSocial");
    select.setAttribute("size", "1");

    opcion1.setAttribute("value", "1");
    opcion2.setAttribute("value", "2");
    opcion3.setAttribute("value", "3");
    opcion4.setAttribute("value", "4");
    opcion1.innerText = "Red social";
    opcion2.innerText = "Facebook";
    opcion3.innerText = "Twitter";
    opcion4.innerText = "Instagram";

    input.setAttribute("type", "url");
    input.setAttribute("name", "redSocial");
    input.setAttribute("form", "formularioRegistro");
    input.classList.add("redSocial");
}

btnRegistrar.onclick = () =>{
    let arrayPersonal = declaracionVariablesPersonal();
    // validado = true;
    if(validacionNombres(arrayPersonal[0].value)){ //Validaci??n nombre
        arrayPersonal[0].setAttribute("style", "border-color: rgb(0, 0, 0);");
        if(validacionNombres(arrayPersonal[1].value)){ //Validaci??n apellido
            arrayPersonal[1].setAttribute("style", "border-color: rgb(0, 0, 0);");
            if(validacionFechas(arrayPersonal[2].value)){ //Validaci??n fecha
                arrayPersonal[2].setAttribute("style", "border-color: rgb(0, 0, 0);");
                if(validacionOpciones(arrayPersonal[3].value)){ //Validaci??n tipo de documento
                    arrayPersonal[3].setAttribute("style", "border-color: rgb(0, 0, 0);");
                    if(validacionNumeros(arrayPersonal[4].value)){ //Validaci??n documento identidad
                        arrayPersonal[4].setAttribute("style", "border-color: rgb(0, 0, 0);");
                        if(validacionNombres(arrayPersonal[5].value)){ //Validaci??n nombre pais
                            arrayPersonal[5].setAttribute("style", "border-color: rgb(0, 0, 0);");
                            if(validacionNombres(arrayPersonal[6].value)){ //Validaci??n nombre ciudad
                                arrayPersonal[6].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                if(validacionCampoGeneral(arrayPersonal[7].value)){ //Validaci??n direcci??n
                                    arrayPersonal[7].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                    if(validacionCelular(arrayPersonal[8].value)){ //Validaci??n celular
                                        arrayPersonal[8].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                        if(validacionTelefono(arrayPersonal[9].value)){ //Validaci??n tel??fono
                                            arrayPersonal[9].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                            if(validacionEmail(arrayPersonal[10].value)){ //Validaci??n email
                                                arrayPersonal[10].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                if(validacionContrasena(arrayPersonal[11].value)){ //Validaci??n contrase??a
                                                    arrayPersonal[11].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                    if(validacionConfirmarContrasena(arrayPersonal[11].value, arrayPersonal[12].value)){ //Validaci??n confirmar contrase??a
                                                        arrayPersonal[12].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                        let tipoRedesSociales = document.querySelectorAll(".tipoRedSocial");
                                                        let redesSociales = document.querySelectorAll(".redSocial");
                                                        for (let i = 0; i < redesSociales.length; i++) {
                                                            if(!validacionOpciones(tipoRedesSociales[i].value)){ //Validaci??n tipo red social
                                                                tipoRedesSociales[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                alert("Tipo de red social inv??lido: seleccione una red social");
                                                                return 0;
                                                            }
                                                            tipoRedesSociales[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                            if(!validacionUrl(redesSociales[i].value)){ //Validaci??n red social
                                                                redesSociales[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                alert("Red social inv??lida: seleccione un enlace de red social v??lido");
                                                                return 0;
                                                            }
                                                            redesSociales[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                        }
                                                        if(validacionOpciones(arrayPersonal[13].value)){ //Validaci??n nivel de estudio
                                                            arrayPersonal[13].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                            if(validacionOpciones(arrayPersonal[14].value)){ //Validaci??n nivel de ingl??s
                                                                arrayPersonal[14].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                if(validacionOpciones(arrayPersonal[15].value)){ //Validaci??n tipo de programador
                                                                    arrayPersonal[15].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                    let tipoLenguaje = document.querySelectorAll(".tipoLenguaje");
                                                                    let nivelProgramacion = document.querySelectorAll(".nivelProgramacion");
                                                                    let especializacion = document.querySelectorAll(".especializacion");
                                                                    console.log(arrayPersonal[16].value);
                                                                    if(validacionUrlOpcional(arrayPersonal[16].value)){ //Validacion repositorio
                                                                        arrayPersonal[16].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                        for (let i = 0; i < tipoLenguaje.length; i++) {
                                                                            if(!validacionOpciones(tipoLenguaje[i].value)){ //Validaci??n tipo de lenguaje
                                                                                tipoLenguaje[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                                alert("Lenguaje inv??lido: seleccione un tipo de lenguaje");
                                                                                return 0;
                                                                            }
                                                                            tipoLenguaje[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                            if(!validacionOpciones(nivelProgramacion[i].value)){ //Validaci??n nivel de programaci??n
                                                                                nivelProgramacion[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                                alert("Nivel de programaci??n inv??lida: seleccione un nivel de programaci??n");
                                                                                return 0;
                                                                            }
                                                                            nivelProgramacion[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                            if(!validacionCampoGeneral(especializacion[i].value)){ //Validaci??n especializaci??n
                                                                                especializacion[i].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                                alert("Especializaci??n inv??lida: ingresar una especializaci??n con m??s de 5 car??cteres");
                                                                                return 0;
                                                                            }
                                                                            especializacion[i].setAttribute("style", "border-color: rgb(0, 0, 0);");
                                                                        }

                                                                        console.time('SUBMIT');
                                                                        crearUsuario(arrayPersonal);
                                                                    }else{
                                                                        alert("Enlace de repositorio inv??lido: ingrese un enlace correcto");
                                                                        arrayPersonal[16].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                        return 0;
                                                                    }
                                                                }else{
                                                                    alert("Tipo de programador inv??lido: seleccione un tipo de programador");
                                                                    arrayPersonal[15].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                    return 0;
                                                                }
                                                            }else{
                                                                alert("Nivel de ingl??s inv??lido: seleccione un nivel de ingl??s");
                                                                arrayPersonal[14].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                                return 0;
                                                            }
                                                        }else{
                                                            alert("Nivel de estudio inv??lido: seleccione un nivel de estudio");
                                                            arrayPersonal[13].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                            return 0;
                                                        }
                                                    }else{
                                                        alert("No coinciden las contrase??as");
                                                        arrayPersonal[12].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                        return 0;
                                                    }
                                                }else{
                                                    alert("Contrase??a inv??lida: la contrase??a debe contar con al menos 6 car??cteres");
                                                    arrayPersonal[11].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                    return 0;
                                                }
                                            }else{
                                                alert("Correo electr??nico inv??lido: ingrese el nombre con letras y espacios");
                                                arrayPersonal[10].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                                return 0;
                                            }
                                        }else{
                                            alert("N??mero de t??lefono inv??lido: el n??mero debe tener 7 d??gitos (Si usted no cuenta con t??lefono puede colocar 0000000)");
                                            arrayPersonal[9].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                            return 0;
                                        }
                                    }else{
                                        alert("N??mero de celular inv??lido: el n??mero debe tener 10 d??gitos");
                                        arrayPersonal[8].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                        return 0;
                                    }
                                }else{
                                    alert("Direcci??n inv??lida: ingrese la direcci??n con m??s de 5 letras o c??racteres");
                                    arrayPersonal[7].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                    return 0;
                                }
                            }else{
                                alert("Ciudad de residencia inv??lida: ingrese la ciudad solamente con letras y espacios");
                                arrayPersonal[6].setAttribute("style", "border-color: rgb(156, 0, 0);");
                                return 0;
                            }
                        }else{
                            alert("Pa??s de residencia inv??lido: ingrese el pa??s solamente con letras y espacios");
                            arrayPersonal[5].setAttribute("style", "border-color: rgb(156, 0, 0);");
                            return 0;
                        }
                    }else{
                        alert("Numero de documento inv??lido: ingrese el numero de documento (solamente utilizar numeros)");
                        arrayPersonal[4].setAttribute("style", "border-color: rgb(156, 0, 0);");
                        return 0;
                    }
                }else{
                    alert("Tipo de documento inv??lido: seleccione un tipo de documento");
                    arrayPersonal[3].setAttribute("style", "border-color: rgb(156, 0, 0);");
                    return 0;
                }
            }else{
                alert("Fecha de nacimiento inv??lida: ingrese una fecha de nacimiento v??lida");
                arrayPersonal[2].setAttribute("style", "border-color: rgb(156, 0, 0);");
                return 0;
            }
        }else{
            alert("Apellidos inv??lidos: ingrese los apellidos solamente con letras y espacios");
            arrayPersonal[1].setAttribute("style", "border-color: rgb(156, 0, 0);");
            return 0;
        }
    }else{
        alert("Nombres inv??lidos: ingrese los nombres solamente con letras y espacios");
        arrayPersonal[0].setAttribute("style", "border-color: rgb(156, 0, 0);");
        return 0;
    }
}

function crearUsuario(arrayPersonal) {
    createUserWithEmailAndPassword(auth, arrayPersonal[10].value, arrayPersonal[11].value)
    .then((userCredential) => {
        // Signed in 
        updateProfile(auth.currentUser, {
            displayName: arrayPersonal[0].value+" "+arrayPersonal[1].value, photoURL: "", phoneNumber: arrayPersonal[8].value
          }).then(() => {
            // Profile updated!
            if(ingresarDatosUsuario(arrayPersonal,auth.currentUser.uid) == 0){
                
            }
            // volver();
            // ...
          }).catch((error) => {
            // An error occurred
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
            // ...
        });
        const user = userCredential.user;
        // ...
    })
    .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode +"CREACION DE USUARIO");
        console.log(errorMessage+"CREACION DE USUARIO");
        // ..
    });
}

const tiposLenguaje = ()=>{
    let lenguajes = document.getElementsByClassName("tipoLenguaje");
    let arrayLenguajes = [];
    let a = "";
    for(let i = 0; i < lenguajes.length; i++){
        console.log(lenguajes[i].value);
        switch(lenguajes[i].value){
            case "2":
                a = "PHP";
            break;
            case "3":
                a = "Javascript";
            break;
            case "4":
                a = "Python";
            break;
            default:
                a = "";
            break;
        }
        arrayLenguajes[i] = a;
    }
    return arrayLenguajes;
}

function ingresarDatosUsuario(arrayPersonal,uidUser) {
    let lenguajes = tiposLenguaje();
    set(ref(database, 'datosUsuarios/' + uidUser), {
      fechaNacimiento: arrayPersonal[2].value,
      tipoDocumentoIdentidad: arrayPersonal[3].value,
      documentoIdentidad: arrayPersonal[4].value,
      residencia: arrayPersonal[7].value+", "+arrayPersonal[6].value+", "+arrayPersonal[5].value,
      celular: arrayPersonal[8].value,
      telefono: arrayPersonal[9].value,
      nivelEstudio: arrayPersonal[13].value,
      nivelIngles: arrayPersonal[14].value,
      nivelProgramacion: arrayPersonal[15].value,
      uid: uidUser,
      rol: 1,
      nombreCompleto: arrayPersonal[0].value+" "+arrayPersonal[1].value,
      paisResidencia: arrayPersonal[5].value,
      ciudadResidencia: arrayPersonal[6].value,
      email: arrayPersonal[10].value,
      contrasena: arrayPersonal[11].value,
      enlaceRepositorio: arrayPersonal[16].value,
      descripcion: arrayPersonal[17].value,
      lenguajes: lenguajes
    }).then(() =>{
        setTimeout(window.location.assign("../../index.php"), 2000);
        }
    );
    return 0;
}
  

const declaracionVariablesPersonal = ()=>{
    try {
        let nombre = document.getElementById("nombres");
        let apellido = document.getElementById("apellidos");
        let fechaNacimiento = document.getElementById("fechaNacimiento");
        let tipoDocumento = document.getElementById("tipoDocumento");
        let documentoIdentidad = document.getElementById("documento");
        let paisResidencia = document.getElementById("paisResidencia");
        let ciudadResidencia = document.getElementById("ciudadResidencia");
        let direccionResidencia = document.getElementById("direccionResidencia");
        let celular = document.getElementById("celular");
        let telefono = document.getElementById("telefono");
        let email = document.getElementById("email");
        let contrasena = document.getElementById("contrasena");
        let confirmarContrasena = document.getElementById("confirmarContrasena");
        let nivelEstudio = document.getElementById("nivelEstudio");
        let nivelIngles = document.getElementById("nivelIngles");
        let tipoProgramador = document.getElementById("tipoProgramador");
        let repositorio = document.getElementById("enlaceRepositorio");
        let descripcion = document.getElementById("descripcion");
        return [nombre, apellido, fechaNacimiento, tipoDocumento, documentoIdentidad, paisResidencia, ciudadResidencia, direccionResidencia, celular, telefono, email, contrasena, confirmarContrasena, nivelEstudio, nivelIngles, tipoProgramador, repositorio, descripcion];
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionNombres(nombre){
    let regExNames = new RegExp("[A-Za-z??-?? ]{0,}","g");
    let nombreAdd = regExNames.exec(nombre);
    console.log(nombre);
    try {
        if(nombreAdd[0] == nombre && nombre != ""){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionFechas(fecha){
    let fechaActual = new Date().toLocaleDateString();
    let arrayFechaIngresada = fecha.split('-');
    let arrayFechaActual = fechaActual.split('/');
    if(arrayFechaIngresada[1] == undefined){
        return false;
    }else{
        if(arrayFechaActual[2] > arrayFechaIngresada[0]){
            return true;
        }else{
            if((arrayFechaActual[1] > arrayFechaIngresada[1]) &&  arrayFechaActual[2] == arrayFechaIngresada[0]){
                return true;
            }else{
                if((arrayFechaActual[0] > arrayFechaIngresada[2]) && (arrayFechaActual[1] == arrayFechaIngresada[1]) && (arrayFechaActual[2] == arrayFechaIngresada[0])){
                    return true;
                }else{
                    return false;
                }
            }
        } 
    }
}

function validacionNumeros(number){
    let regExNumber = new RegExp("[0-9]+","g");
    let numberAdd = regExNumber.exec(number);
    try {
        if(numberAdd[0] == number){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionCampoGeneral(textCampo){
    let regExText = new RegExp(".{5,}","g");
    let textAdd = regExText.exec(textCampo);
    try {
        if(textAdd[0] == textCampo){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionCelular(celular){
    let regExText = new RegExp("[0-9]{10}","g");
    let textAdd = regExText.exec(celular);
    try {
        if(textAdd[0] == celular){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionTelefono(telefono){
    let regExText = new RegExp("[0-9]{7}","g");
    let textAdd = regExText.exec(telefono);
    try {
        if(textAdd[0] == telefono){
            return true;
        }else{
            return false;
        }
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionEmail(email){
    let regExText = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$","g");
    let textAdd = regExText.exec(email);
    try {
        if(textAdd[0] == email){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionContrasena(contrasena){
    let regExText = new RegExp(".{6,}","g");
    let textAdd = regExText.exec(contrasena);
    try {
        if(textAdd[0] == contrasena){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionConfirmarContrasena(contrasena, confirmarContrasena){
    try {
        if(contrasena == confirmarContrasena){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionOpciones(opcion){
    let regExNumber = new RegExp("[0-9]","g");
    let numberAdd = regExNumber.exec(opcion);
    try {
        if(numberAdd[0] == opcion && opcion != 1){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionUrl(opcion){
    let regExNumber = new RegExp("(?:http:\/\/)?(?:https:\/\/)?(?:www\.)?[^0-9 \n]+\.[a-zA-Z.0-9/]+(.){1,}","g");
    let numberAdd = regExNumber.exec(opcion);
    try {
        if(numberAdd[0] == opcion && opcion != ""){
            return true;
        }else{
            return false;
        } 
    } catch (e) {
        if(e instanceof TypeError){
            console.log("error de valor nulo");
        }
    }
}

function validacionUrlOpcional(opcion){
    if(opcion == ""){
        return true;
    }else{
        let regExNumber = new RegExp("(?:http:\/\/)?(?:https:\/\/)?(?:www\.)?[^0-9 \n]+\.[a-zA-Z.0-9/]+(.){1,}","g");
        let numberAdd = regExNumber.exec(opcion);
        try {
            if(numberAdd[0] == opcion){
                return true;
            }else{
                return false;
            } 
        } catch (e) {
            if(e instanceof TypeError){
                console.log("error de valor nulo opcional");
            }
        }
    }
}