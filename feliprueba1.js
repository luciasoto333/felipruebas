var carreritas=["Lucía","Roberto","María","Jesús","Andrea","José"];  


carreritas.splice(2, 2, 'Andrea');
carreritas.splice(3, 3, 'María');
carreritas.splice(4, 4, 'Jesús');
carreritas.splice(5, 5, 'José'); // pt.1

let descalificado = carreritas.pop() // pt.2

const carreritas2 = ["Roberto","María","Jesús","Andrea","José"];
carreritas.unshift("Lucía","Cristobal", "Fernanda", "Armando"); // pt.3

let nuevaLongitud = carreritas.unshift('Federico') // pt.4


console.log(carreritas);