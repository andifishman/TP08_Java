function ejercicio1()
{
    let fecha = document.getElementById('fecha').value
    let nombre = document.getElementById('nombre').value
    let edad = calcularEdad(fecha)
    document.getElementById('resultado1').textContent = "Hola " + nombre + ", tienes " + edad + " años!"
}

function ejercicio2()
{
let frutas = ["Mandarina","Manzana","Frutilla","Cereza","Pera","Banana","Naranja","Pomelo","Sandía","Melón"]
let nombreFruta = document.getElementById('fruta').value
let existe = buscarFruta(frutas, nombreFruta)
if (existe == true)
{
    document.getElementById('resultado2').textContent = "Si, tenemos " + nombreFruta
}
else{
    document.getElementById('resultado2').textContent = "No, no tenemos " + nombreFruta
}
}

function ejercicio3() 
{

}
function ejercicio4()
{
    const ciudad = new Object()
    ciudad.nombre = "Buenos Aires"
    ciudad.pais = "Argentina"
    ciudad.fundacion = "11 de junio de 1580"
    ciudad.poblacion = "17.523.996"
    ciudad.extension = "203 km²"
    document.getElementById('resultado4').textContent = "El nombre de la ciudad es " + ciudad.nombre + ", el pais es " + ciudad.pais + ", se fundó el " + ciudad.fundacion + ", tiene una población de " + ciudad.poblacion + " habitantes, y una extension de " + ciudad.extension
}
