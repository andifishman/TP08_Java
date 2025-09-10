function calcularEdad(fecha)
{
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function buscarFruta(frutas,nombreFruta)
{
    let existe = false
    for(const fruta of frutas)
    {
        if (nombreFruta == fruta)
        {
            existe = true
        }
    }
    return existe
}