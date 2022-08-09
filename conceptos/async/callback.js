function hola(nombre, mycallback) {
    
    setTimeout(function () {
        console.log(`hola ${nombre}`)
        mycallback(nombre);
    }, 1000);
}

function adios(nombre, otrocallback) {
    setTimeout(function() {
        console.log('adios', nombre);
        otrocallback();
    }, 1000);
}

console.log('iniciando proceso');
hola('miguel', function (nombre) {
    adios(nombre, function() {
        console.log('terminando proceso')
    })
    
});

