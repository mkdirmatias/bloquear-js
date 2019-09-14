/*
* Bloquear la Selecion de texto y boton derecho del mouse
*/
window.onload = function()
{
    // Bloquear la Selecion de texto en internet explorer, chrome
    document.onselectstart = function()
    {
        return false;
    } 
    // Bloquear la Selecion de texto Firefox
    document.onmousedown = function()
    {
        return false;
    }
    // bloquear boton derecho
    document.oncontextmenu = function()
    {
        return false;
    }
}


/*
* Bloquear teclas
*/
onkeydown = function(evento)
{
    var evento = evento || event;

    // array quen contiene las teclas a bloquear cuando este precionada la tecla ctrl
    var combinacion = [67,70,71,82,83,85,86,116];

    // array quen contiene las teclas solas a bloquear
    var tecla = [116,113];

    /*
    * Bloquear combinacion de teclas del tipo ctrl + tecla
    */
    if (evento.ctrlKey) 
    {
        // Recorremos el array combinacion que contiene las teclas a bloquear cuando se precione ctrl 
        for (i in combinacion) 
        {
            // Verificamos si se ha precionado una tecla perteneciente al array combinacion
            if(evento.keyCode == combinacion[i])
            {
                // Si se ha presionado una, devolvemos un return false
                try
                {
                    evento.preventDefault();
                }
                catch(error)
                {
                    evento.returnValue = false;
                }
            }
        }
    }


    /*
    * Bloquear teclas independientes
    */
    var tecla = [116];

    // recorremos el array que contiene las teclas solas a bloquear
    for (i in tecla) 
    {
        // Verificamos si se ha precionado una tecla perteneciente al array tecla
        if(evento.keyCode == tecla[i])
        {
            // Si se ha presionado una, devolvemos un return false
            try
            {
                evento.preventDefault();
            }
            catch(error)
            {
                evento.returnValue = false;
            }
        }
    }
}