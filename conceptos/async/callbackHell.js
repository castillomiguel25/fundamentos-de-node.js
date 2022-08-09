function hola(nombre, mycallback) {
    setTimeout(function () {
        console.log(`hola ${nombre}`)
        mycallback(nombre);
    }, 1000);
}

function hablar(callbackhablar) {
    setTimeout(function () {
        console.log('hablar');
        callbackhablar();
    }, 1000)
}



function adios(nombre, otrocallback) {
    setTimeout(function () {
        console.log('adios', nombre);
        otrocallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    if (veces >= 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

// ---
console.log('iniciando proceso');
hola('miguel', function(nombre) {       
    conversacion(nombre, 3, function() {
        console.log('proceso terminado')
    })
});

// hola('miguel', function (nombre) {
//     hablar(function() {
//         hablar(function() {
//             adios(nombre, function() {
//             console.log('terminando proceso')
//             })
//         })
//     })
// });

