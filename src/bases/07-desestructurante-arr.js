// Desestructurante de arreglos
// forma incorrecta

const personas = ['santiago',29,'gonzalo', 27, 'ignacio',22];
console.log(personas);
//  console.log(arreglo[0]);    
//  console.log(arreglo[1]);
//  console.log(arreglo[2]);
//  console.log(arreglo[3]);
//  console.log(arreglo[4]);
//  console.log(arreglo[5]);

//formas correctas 

const [ , , p2,n2] = personas;
console.log(p2,n2);


const retornaArreglo = () => {
    return ['NEWELLS','central']
}
const [equipo1,equipo2] = retornaArreglo();
console.log(equipo1,equipo2);

const useState = (valor) => {
    return [valor,  () =>{console.log('hola mundo')} ]
}
const [nombre,setNombre] = useState('NOB');
console.log([nombre,setNombre])
setNombre();