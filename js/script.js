let nombrePaciente = prompt('Por favor, ingrese su nombre:');
let apellidoPaciente = prompt('Ingrese su apellido:');
alert('Bienvenido ' + nombrePaciente + ' ' + apellidoPaciente + ' a la calculadora de IMC (índice de masa muscular) \n \n' + 'A continuación le solicitaremos algunos datos más :)');


let pesoPaciente =  parseInt(prompt('Ingrese su peso en kilos, por ej: 75'));
let alturaPaciente = parseInt(prompt('Ingrese su altura en centímetros, por ej: 165')); 
let altura = alturaPaciente * alturaPaciente


// console.log(pesoPaciente)
// console.log(alturaPaciente)


function imcPaciente (pesopaciente, altura) {
    let imc = pesoPaciente / altura * 10000;
    imc.toFixed(1)

    if (imc < 18.5) {
        alert('Usted tiene bajo peso según la OMS, consulte a su médico!');
    } else if (imc < 24.5) {
        alert('Usted tiene un peso adecuado según la OMS');
    } else if (imc < 29.9) {
        alert('Usted tiene sobrepeso según la OMS, consulte a su médico!');
    } else if(imc < 34.9) {
        alert('Usted tiene obesidad grado 1 según la OMS, consulte a su médico!');
    } else if(imc < 39.9){
        alert('Usted tiene obesidad grado 2 según la OMS, consulte a su médico!');
    } else {
        alert('Usted tiene obesidad grado 3 según la OMS, consulte a su médico!');
    }
};

imcPaciente(pesoPaciente, altura);
