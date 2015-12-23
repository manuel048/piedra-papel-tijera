








function aleatorio(minimo, maximo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo );
   
    return numero;
} 


var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

 





var opcion = ["piedra", "papel", "tijera","lagarto","spock"];

var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

function inicio()

{

opcionUsuario = prompt("¿que eliges?\npiedra: 0\npapel: 1\ntijera: 2\nlagarto: 3\nspock: 4", 0);
if(opcionUsuario  > 4)
{
    alert("BANGGGG!!!!!!!\nElige de nuevo" );
   opcionUsuario = prompt("¿que eliges?\npiedra: 0\npapel: 1\ntijera: 2\nlagarto: 3\nspock: 4", 0);
}


{
alert("elegistes" + " " + opcion[opcionUsuario]);
}
{
alert("Sheldon eligio" + " " + opcion[opcionMaquina]);
}



if(opcionUsuario == piedra)
{
    if(opcionMaquina == piedra)
    {
        alert("Empate!");
        document.location.reload()

    }
    else if(opcionMaquina == papel)
    {
        alert("BAZINGA!\nPerdiste!");
            document.location.reload()

    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste!");
        document.location.reload()

    }
    else if(opcionMaquina == lagarto)
    {
        alert("Ganaste!");
        document.location.reload()

    }
    else if(opcionMaquina == spock)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
}
else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste!");
        document.location.reload()

    }
    else if(opcionMaquina == papel)
    {
        alert("Empate!");
        document.location.reload()

    }
    else if(opcionMaquina == tijera)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
        else if(opcionMaquina == lagarto)
    {
        alert("Ganaste!");
        document.location.reload()

    }
    else if(opcionMaquina == spock)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
}
else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste!");
        document.location.reload()

    }
    else if(opcionMaquina == tijera)
    {
        alert("Empate!");
        document.location.reload()

    }
        else if(opcionMaquina == lagarto)
    {
        alert("Ganaste!");
        document.location.reload()

    }
    else if(opcionMaquina == spock)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
}
else if(opcionUsuario == lagarto)
{
    if(opcionMaquina == piedra)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste!");
        document.location.reload()

    }
    else if(opcionMaquina == tijera)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
        else if(opcionMaquina == lagarto)
    {
        alert("Empate!");
        document.location.reload()

    }
    else if(opcionMaquina == spock)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
}
else if(opcionUsuario == spock)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste!");
        document.location.reload()

    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste!");
        document.location.reload()

    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste!");
        document.location.reload()

    }
        else if(opcionMaquina == lagarto)
    {
        alert("BAZINGA!\nPerdiste!");
        document.location.reload()

    }
    else if(opcionMaquina == spock)
    {
        alert("Empate!");
        document.location.reload()

    }
}
else
{
    alert("BAZINGA!");
}

}













