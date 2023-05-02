function calcularArea() {
	// Obtener los valores de entrada
	const a = parseFloat(document.getElementById("a").value);
	const b = parseFloat(document.getElementById("b").value);
	const n = parseInt(document.getElementById("n").value);
	
	// Validar que los valores sean numéricos
	if (isNaN(a) || isNaN(b) || isNaN(n)) {
	  alert("Por favor ingresa valores numéricos.");
	  return;
	}
	
	// Validar que a sea menor que b
	if (a >= b) {
	  alert("El límite inferior (a) debe ser menor que el límite superior (b).");
	  return;
	}
	
	// Calcular el ancho de cada intervalo
	const h = (b - a) / n;
	
	// Calcular la suma de los valores de la función en los puntos impares
	let impares = 0;
	for (let i = 1; i < n; i += 2) {
	  const x = a + i * h;
	  const fx = f(x);
	  impares += fx;
	}
	
	// Calcular la suma de los valores de la función en los puntos pares
	let pares = 0;
	for (let i = 2; i < n; i += 2) {
	  const x = a + i * h;
	  const fx = f(x);
	  pares += fx;
	}
	
	// Calcular el área
	const area = (h / 3) * (f(a) + 4 * impares + 2 * pares + f(b));
	
	// Mostrar el resultado
	document.getElementById("output").textContent = `El área bajo la curva es: ${area}`;
  }
  
  // Definir la función que se va a integrar
  function f(x) {
	return Math.sin(x);
  }
  
  // Asociar la función calcularArea al evento submit del formulario
  document.getElementById("input-form").addEventListener("submit", function(event) {
	event.preventDefault(); // Evitar que se recargue la página
	calcularArea();
  });