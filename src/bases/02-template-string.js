const nombre = 'Santiago';
const apellido = 'Beltramo';

const nombreCompleto = `Mi nombre es 
${nombre}
${apellido}
`;

function getNombre(nombre){
    return 'Hola soy' + nombre;
}


console.log(`${getNombre(nombre)}`);