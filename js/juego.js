//VARIABLES GLOBALES
let respuesta = '0000'
let intento = '0000'
let cant_intentos = 0

//MAIN
do
{
    respuesta = String(generarNumeroAleatorio(4,false,false)) //se genera un numero aleatorio


    // se le pide al usuario que ingrese un numero de 4 digitos y se comprueba que sea valido
    do{
        intento = prompt("Elija un numero de 4 digitos")

        while(!esValido(intento))
        {
            intento = prompt("Sin repetir numeros. Por favor, ingrese un numero de 4 digitos")
        }
        cant_intentos ++
    }
    while(!esCorrecto(intento)) //se comprueba que el numero sea correcto y se le da una respuesta adecuada

    alert("Y solo te tomo " + cant_intentos +" intentos")
}
while(confirm("Quiere volver a jugar?"))


//FUNCIONES
/*
function esCorrecto( numero )
entrada: 
        number: numero a comprobar
return: boolean
Esta funcion analiza si el resultado igresado es correcto e informa cuantos numeros estan en su lugar,
cuantos son parte del numero pero no estan en su lugar y cuantos no son parte del numero.
a su vez analiza el resultado devuelto por la funcion verificacion y le da una respuesta al usuario
*/
function esCorrecto ( numero )
{
    let salida = false
    let comprobacion = String(verificacion(numero))

    if ((comprobacion >= 10) && (comprobacion < 40)) 
        alert("hay " + comprobacion[0] +" numeros correctos en su posicion y hay " + comprobacion[1] + " numeros correctos que no estan en su posicion")
    else if ((comprobacion <10) && (comprobacion > 0))
    {
        alert("no hay numeros correctos en su posicion y hay " + comprobacion[0] + " numeros correctos que no estan en su posicion")
    }
    else
    {
        alert("todos los numeros son incorrectos")
    }
    if (comprobacion == 40)
    {
        alert("FELICIDADES! Acertaste al numero!")
        salida = true
    }
    
    return salida;
}

/*
function verificacion( numero )
entrada: 
        number: numero a desglosar
return: numero de 0 a 40
Esta funcion analiza numero a numero si el numero ingresado es igual a la respuesta, y devuelve un valor asociado:
el numero es parte de la respuesta y esta en el lugar correcto: +10
el numero es parte de la respuesta pero no esta en el lugar indicado: +1
el numero no forma parte de la respuesta: +0
*/
function verificacion( numero ) 
{
    let salida = 0
    let posicion = 0

    for(let j = 0; j <= 3 ; j++)
    {
        posicion = j
        for(let i = 0; i < 4 ; i++)
        {
            if((numero[i] == respuesta[j]) && (posicion == i))
            {
                salida = salida + 10
            }
            else if(numero[i] == respuesta[j])
            {
                salida ++
            }
        }
            
    }
    return salida
}

/*
function seRepite( numero )
entrada: 
        number: numero a comprobar
return: boolean
Esta funcion analiza si hay numeros repetidos dentro de un mismo numero
*/
function seRepite( numero )
{
    let salida = false
    for(let i = 0; i < 4-1; i++)
    {
        for(let j = 1+i; j < numero.length; j++)
        {
            if(numero[i] == numero[j])
            {
                salida = true
            }
        }
    }
    return salida
}


/*
function generarNumeroAleatorio( cantNumeros, repeticion, con_ceros )
entradas:
        number: cantidad de digitos deseada
        boolen: si esos numero se pueden repetir o no (entre digitos)
        boolean: si desea que esos digitos puedan tomar el valor de 0 o no
return: boolean
Esta funcion genera un numero random de la cantidad de numeros que se le especifiquen y tambien tiene en cuenta si se desea que los numero que estan dentro se repitan o no
tambien podes elegir si el numero tiene ceros o no
*/
function generarNumeroAleatorio( cantDigitos, repeticion, con_ceros)
{
    let respuesta
    if(repeticion)
    {
        respuesta = String(Math.floor(Math.random() * (Math.pow(10,cantDigitos) - 1000) + 1000))
        if(!con_ceros)
        {
            for(let i = 0; i < cantDigitos; i++)
                {
                    if (respuesta[i] == 0)
                        respuesta[i] ++
                }
        }
        
    }
    else
    {
        do 
        {
            respuesta = String(Math.floor(Math.random() * (Math.pow(10,cantDigitos) - 1000) + 1000))
            if(!con_ceros)
            {
                for(let i = 1; i < cantDigitos; i++)
                {
                    if (respuesta[i] == '0')
                    {
                        respuesta = respuesta * 0 + 1111 //anula la respuesta para que se vuelva a generar una nueva
                    }
                    
                }
            }
        }
        while( seRepite(String(respuesta)))
    }

    return respuesta
}

/*
function esValido( numero )
entrada: 
        number: numero a comprobar
return: boolean
Esta funcion valida si lo ingresado por el usuario es un numero valido o no, esta para limpiar el codigo principal y facilitar el hecho de agregar condiciones a esta entrada
*/
function esValido( numero )
{
    let valido = true
    const numero_max = 9999, numero_min = 999

    if((seRepite( numero)) || (numero > numero_max) || (numero < numero_min))
    {
        valido = false
    }
    return valido
}