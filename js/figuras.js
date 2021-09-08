window.onload = () => {
	document.querySelector('#btnCalcularPerimetroCuadrado').addEventListener("click", calcularPerimetroCuadrado, false);
	document.querySelector('#btnCalcularAreaCuadrado').addEventListener("click", calcularAreaCuadrado, false);
};

function calcularPerimetroCuadrado()
{
     let lado = document.querySelector('#ladoCuadrado').value;
	let perimetro = perimetroCuadrado(lado);
     document.querySelector('#mensaje').innerText = 'El Perímetro del cuadrado es: '+perimetro;
}

function perimetroCuadrado(lado)
{
	return lado * 4;
}

function calcularAreaCuadrado()
{
     let lado = document.querySelector('#ladoCuadrado').value;
	let area = areaCuadrado(lado);
     document.querySelector('#mensaje').innerText = 'El Área del cuadrado es: '+area;
}

function areaCuadrado(lado)
{
	return lado * lado;
}