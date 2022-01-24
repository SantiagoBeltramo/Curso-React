//Funciones en JS

const saludar = function (nombre) {
    return `Hola, ${nombre}`;
}

//funciones flecha =>


const saludar2 = (nombre) =>{   
      return `Hola, ${nombre}`;
};

const saludar3 = (nombre)  => `Hola, ${nombre}`;
const saludar4 = () => 'Hola chicos';




console.log(saludar('santiago'));
console.log(saludar2('ignacio'));
console.log(saludar3('agustin'));
console.log(saludar4());