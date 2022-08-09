async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log(`hola ${nombre}`)
            resolve(nombre);
        }, 1000);
    });

}

async function hablar(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
        console.log('hablar');
        // resolve(nombre);
        resolve('hay un error')
    }, 1000)
    })
    
}


async function adios(nombre) {
    return new Promise( (resolve, reject) => {
        setTimeout(function () {
        console.log('adios', nombre);
        resolve();
    }, 1000);
    })   
}

async function main() {
   let nombre =  await hola('miguel');
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
    console.log('termina')
}

console.log('proceso ininciado');
main();



 