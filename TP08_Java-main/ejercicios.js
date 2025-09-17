function ejercicio1() {
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;
    const edad = calcularEdad(fecha);
    document.getElementById('resultado1').textContent = `Hola ${nombre}, tienes ${edad} años!`;
  }
  
  function ejercicio2() {
    const frutas = ["Mandarina", "Manzana", "Frutilla", "Cereza", "Pera", "Banana", "Naranja", "Pomelo", "Sandía", "Melón"];
    const fruta = document.getElementById('fruta').value;
    const existe = buscarFruta(frutas, fruta);
    document.getElementById('resultado2').textContent = existe ? `Sí, tenemos ${fruta}!` : `No, no tenemos ${fruta}!`;
  }
  
  function ejercicio3() {
    const resultado = `
  A. 10 == '10' → ${10 == '10'}
  B. 10 === '10' → ${10 === '10'}
  C. typeof 10.6 → ${typeof 10.6}
  D. true == 1 → ${true == 1}
  Conclusión: El operador == compara valores con conversión de tipo. El operador === compara tipo y valor sin conversión.
    `;
    document.getElementById('resultado3').textContent = resultado;
  }
  
  function ejercicio4() {
    const ciudad = {
      nombre: "Buenos Aires",
      fechaFundacion: "11 de junio de 1580",
      poblacion: "17.523.996",
      extension: "203 km²"
    };
    let texto = "";
    for (let clave in ciudad) {
      texto += `${clave}: ${ciudad[clave]}\n`;
    }
    document.getElementById('resultado4').textContent = texto;
  }
  
  function ejercicio5() {
    const input = document.getElementById('numeros').value;
    const numeros = input.split(',').map(n => parseFloat(n));
    const resultado = doblarArray(numeros);
    document.getElementById('resultado5').textContent = resultado.join(', ');
  }
  
  function ejercicio6A() {
    const resultado = generarTrianguloSimple(6);
    document.getElementById('resultado6').textContent = resultado;
  }
  
  function ejercicio6B() {
    const resultado = generarTrianguloCentrado(6);
    document.getElementById('resultado6').textContent = resultado;
  }
  
  function ejercicio7() {
    const input = document.getElementById('nombres').value;
    const nombres = input.split(',');
    const filtrados = filtrarNombresConA(nombres);
    document.getElementById('resultado7').textContent = filtrados.join(', ');
  }

function ejercicio8() {
    const texto = document.getElementById('texto8').value;
    const buscar = document.getElementById('buscar8').value;
    const reemplazo = document.getElementById('reemplazo8').value;
    const resultado = reemplazarTexto(texto, buscar, reemplazo);
    document.getElementById('resultado8').textContent = resultado;
  }
  
  function ejercicio9() {
    const texto = document.getElementById('texto9').value;
    const cantidad = parseInt(document.getElementById('cantidad9').value);
    const resultado = cortarTexto(texto, cantidad);
    document.getElementById('resultado9').textContent = resultado;
  }
  
  function ejercicio10() {
    const input = document.getElementById('elementos10').value;
    const elementos = input.split(',').map(e => e.trim());
    const resultado = separarConGuion(elementos);
    document.getElementById('resultado10').textContent = resultado;
  }
  
  function ejercicio11() {
    const input = document.getElementById('pedidos11').value;
    const pedidos = input.split(',').map(p => p.trim());
    const total = calcularTotal(pedidos);
    document.getElementById('resultado11').textContent = `Recaudación total: $${total.toFixed(2)}`;
  }