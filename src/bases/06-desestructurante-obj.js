// Desestructuración o Asignacion desestructurante de OBJETOS


const persona = {
    nombre: 'Santiago',
    edad: 29,
    profesion: 'Programador',
    rango: 'trainee/jr',
}


// Forma incorrecta
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.profesion);

//formas correctas

const {nombre} = persona;
console.log(nombre);

const retornaPersona = ({ edad, profesion, rango}) => {

    console.log(edad,profesion, rango); 
}

retornaPersona (persona);   

const useContext  = ({ edad,rango}) => {

    return {
        nombreRango: rango,
        anios: edad,
        }
}
const {nombreRango, anios} = useContext(persona);
console.log(nombreRango,anios);
