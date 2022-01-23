const persona = {
    nombre : 'Santiago',
    apellido : 'Beltramo',
    edad : 29,
    nacionalidad : 'Argentino'
    
    };
    
    console.log({persona});
    
    const persona2 = {...persona};
    persona2.nombre = 'Ignacio';
    persona2.edad = 22;
    
    console.log({persona2});