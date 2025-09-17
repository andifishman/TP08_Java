function calcularEdad(fecha) {
    const hoy = new Date();
    const nacimiento = new Date(fecha);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
      edad--;
    }
    return edad;
  }
  
  function buscarFruta(frutas, fruta) {
    return frutas.includes(fruta);
  }
  
  function doblarArray(arr) {
    return arr.map(num => num * 2);
  }
  
  function generarTrianguloSimple(filas) {
    return Array.from({ length: filas }, (_, i) => '*'.repeat(i + 1)).join('\n');
  }
  
  function generarTrianguloCentrado(filas) {
    return Array.from({ length: filas }, (_, i) => {
      const espacios = ' '.repeat(filas - i - 1);
      const estrellas = '*'.repeat(2 * i + 1);
      return espacios + estrellas;
    }).join('\n');
  }
  
  function filtrarNombresConA(nombres) {
    return nombres.filter(nombre => nombre.trim().startsWith('A'));
  }
  
  function reemplazarTexto(texto, buscar, reemplazo) {
    const regex = new RegExp(buscar, 'gi');
    return texto.replace(regex, reemplazo);
  }
  
  function cortarTexto(texto, cantidad) {
    return texto.slice(0, cantidad);
  }
  
  function separarConGuion(elementos) {
    return elementos.join(' - ');
  }
  
  function calcularTotal(pedidos) {
    return pedidos.reduce((total, pedido) => {
      const partes = pedido.split(':');
      return total + parseFloat(partes[1]);
    }, 0);
  }
  