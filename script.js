
    
    

    
    
    /* Para el autoresize del textarea */
    var textarea = document.getElementById('mensaje');

    textarea.addEventListener('keydown', autosize);
                 
    function autosize(){
      var el = this;
      setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    }

    /* Para que desaparezca la caja de encima */
    function demoDisplay(){
        document.getElementById("cajaEncima").style.display = "none";
      }

      /* Para la accion de copiar texto */
      
      function copiando(){

        var copytext = document.getElementById("mensaje-Descrifrado");
        
        copytext.select();
        copytext.setSelectionRange(0,99999)

        navigator.clipboard.writeText(copytext.value)

      }


    /* Para filtrar solo de la a-z sin mayusculas, ni caracteres especiales */
    function filtro(){
        var dato1 = document.getElementById("mensaje").value
        var pattern = /[^a-z\s]/g
        if(dato1.match(pattern) == null){
            return dato1
        }else {
            alert("Solo se permiten letras en minúscula")
        }        
    }
    console.log(filtro())

    

    /*Para el el cambio de palabras del encriptador */

    function separando(){
        var dato2 = filtro()
        var dato3 = dato2.split("")
        return dato3
    }
    console.log(separando())


    function imprimiendo(){

        var dato4 = separando()
        var vocales = ["a","e","i","o","u"]
        var cambios = ["ai","enter","imes","ober","ufat"]
        var contador = 1
        var posicion = 0
        var puerta = true

            while(contador <= dato4.length){
            if(dato4[posicion] == vocales[0]){
                dato4[posicion] = cambios[0]
                puerta = false
            }if(dato4[posicion] == vocales[1] && puerta == true){
                dato4[posicion] = cambios[1]
                puerta = false
            }if(dato4[posicion] == vocales[2] && puerta == true ){
                dato4[posicion] = cambios[2]
                puerta = false
            }if(dato4[posicion] == vocales[3] && puerta == true){
                dato4[posicion] = cambios[3]
                puerta = false
            }if(dato4[posicion] == vocales[4] && puerta == true){
                dato4[posicion] = cambios[4]
                puerta = false
            }
            contador++
            posicion++
            puerta = true
        }

    return dato4
    }

    function union(){
        var dato5 = imprimiendo()
        var dato6 = dato5.join("")
        return dato6;
    }

    function final(){

        union()
        demoDisplay()        
        document.getElementById("mensaje-Descrifrado").value=union()  
        document.getElementById("mensaje").value="";      
    }

    
    //DesEncriptador //


    /* Para filtrar Desencriptador */
    function filtroDesencriptador(){
        var info1 = document.getElementById("mensaje").value
        var pattern = /[^a-z\s]/g
        if(info1.match(pattern) == null){
            return info1
        }else {
            alert("Solo se permiten letras en minúscula")
        }        
    }

    /* funcion de remplazos */

    function resultadoDesencriptado(){

        var infoEncriptado = filtroDesencriptador()   
        var encriptado = [/ai/g,/enter/g,/imes/g,/ober/g,/ufat/g]
        var desencriptado = ["a","e","i","o","u"]
        var posicionEncriptado = 0
        var contadorEncriptado = 1

        while(contadorEncriptado <=5 ){

            var mensajeDesencriptado = infoEncriptado.replace(encriptado[posicionEncriptado], desencriptado[posicionEncriptado])    
            posicionEncriptado++
            contadorEncriptado++
            var infoEncriptado = mensajeDesencriptado

        console.log(mensajeDesencriptado)
        }
        document.getElementById("mensaje-Descrifrado").value=mensajeDesencriptado
        return infoEncriptado.value = "";
        
    }

    function final2(){
        resultadoDesencriptado()
        demoDisplay()
        document.getElementById("mensaje").value="";
    }































