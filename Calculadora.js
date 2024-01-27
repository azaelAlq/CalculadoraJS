//declaramos las etiquetas que vayamos a usar
let S_resultado = document.getElementById('resultado')
let S_operacion = document.getElementById('cadena')

//declaramos todos los botones que ocuparemos
let btn_Pizquierdo = document.getElementById('Pizquierdo')
let btn_Pderecho = document.getElementById('Pderecho')
let btn_BorrarTodo = document.getElementById('borrarTodo')
let btn_Borrar = document.getElementById('borrar')
let btn_1 = document.getElementById('1')
let btn_2 = document.getElementById('2')
let btn_3 = document.getElementById('3')
let btn_4 = document.getElementById('4')
let btn_5 = document.getElementById('5')
let btn_6 = document.getElementById('6')
let btn_7 = document.getElementById('7')
let btn_8 = document.getElementById('8')
let btn_9 = document.getElementById('9')
let btn_0 = document.getElementById('0')
let btn_punto = document.getElementById('.')
let btn_mas = document.getElementById('+')
let btn_menos = document.getElementById('-')
let btn_multiplicar = document.getElementById('*')
let btn_dividir = document.getElementById('/')
let btn_igual = document.getElementById('igual')

//Operaciones para cada uno de los botones
btn_BorrarTodo.addEventListener('click', function () {
  S_operacion.innerHTML = '0'
  verificar()
})

btn_Borrar.addEventListener('click', function () {
  let ArregloCadena = S_operacion.innerText.split('')
  let cadenaNueva = ''

  for (let i = 0; i < ArregloCadena.length - 1; i++) {
    cadenaNueva += ArregloCadena[i]
  }

  if (S_operacion.innerText === '' || cadenaNueva === '') {
    S_operacion.innerHTML = '0'
  } else {
    S_operacion.innerHTML = cadenaNueva
  }

  verificar()
})

function primerN() {
  let ArregloCadena = S_operacion.innerText.split('')
  if (ArregloCadena[0] === '0') {
    S_operacion.innerHTML = ''
  }
}

btn_Pizquierdo.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '('
  verificar()
})

btn_Pderecho.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += ')'
  verificar()
})

btn_1.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '1'
  verificar()
})

btn_2.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '2'
  verificar()
})

btn_3.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '3'
  verificar()
})

btn_4.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '4'
  verificar()
})

btn_5.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '5'
  verificar()
})

btn_6.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '6'
  verificar()
})

btn_7.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '7'
  verificar()
})

btn_8.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '8'
  verificar()
})

btn_9.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '9'
  verificar()
})

btn_0.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '0'
  verificar()
})

btn_punto.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '.'
  verificar()
})

btn_mas.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '+'
  verificar()
})
btn_menos.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '-'
  verificar()
})
btn_dividir.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '/'
  verificar()
})
btn_multiplicar.addEventListener('click', function () {
  primerN()
  S_operacion.innerHTML += '*'
  verificar()
})

btn_igual.addEventListener('click', function () {
  S_operacion.innerHTML = S_resultado.innerText
  S_resultado.innerHTML = ''
})

function verificar() {
  if (S_operacion.innerText == '') {
    S_operacion.innerHTML = '0'
  } else {
    let cadena = S_operacion.innerText

    try {
      S_resultado.innerHTML = eval(cadena)
    } catch (error) {
      S_resultado.innerHTML = 'ERROR'
    }
  }
}
