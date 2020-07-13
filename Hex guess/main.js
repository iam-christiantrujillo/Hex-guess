(function(){
    "use strict"
    console.log(datos)
    
    // Ocultamos la seccion donde me dice los resultados
    function ocultar(){
        document.querySelector('.resultados').style.display = 'none';
    }

    ocultar()


    var listaColores = Object.entries(datos)
    // console.log(listaColores)

    // console.log(listaColores[50])


    // Obtenemos el color random
    function obtenerColor(){
        var random = Math.floor(Math.random() * listaColores.length); //pone un tope 
        console.log ("Num Color: ",random)
        return listaColores[random]
        
    }

    var Color = []
    var info = obtenerColor()
    Color.push(info)
    console.log(Color)

    var hexa = (info[1])
    console.log(hexa) //La respuesta correcta

    // Cambiamos el background dependiendo del color que se pida
    var element = document.getElementById('main');
    element.style.backgroundColor = hexa;

    
    //Info: Respuesta Correcta
    var respuesta = document.getElementById('responder');
    var contenido = document.createTextNode(hexa);
    respuesta.appendChild(contenido);

    // Lo que pasara si dan click en REVISALO
    var button = document.querySelector('.revisalo')
    button.addEventListener('click', function(){

        var input = document.querySelector('.respuesta')

        if(input.value == hexa){
            console.log(true)
            var revisalo = document.querySelector('.checar')
            revisalo.innerHTML = ''
            function mostrar(){
                document.querySelector('.resultados').style.display = 'block';
            }
            mostrar()

            var circulo = document.querySelector('.colorResultante');
            circulo.style.backgroundColor = input.value;

            var torf = document.getElementById('responderResults');
            var cori = document.createTextNode("¡CORRECTO!");
            torf.appendChild(cori);


            
        }else{
            console.log(false)
            var revisalo = document.querySelector('.checar')
            revisalo.innerHTML = ''

            function mostrar(){
                document.querySelector('.resultados').style.display = 'block';
            }
            mostrar()

            var circulo = document.querySelector('.colorResultante');
            circulo.style.backgroundColor = input.value;

            var torf = document.getElementById('responderResults');
            var cori = document.createTextNode("¡INCORRECTO!");
            torf.appendChild(cori);
        }

    })    

    //Lo que pasar si dan click en OTRO
    var reiniciar = document.getElementById('otro')
    reiniciar.addEventListener('click', function(){
        location.reload();
    })

})();