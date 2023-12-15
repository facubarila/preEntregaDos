const autos = [
    {
    modelo: "Golf", 
    precio: 25000, 
    traccion: "Delantera", 
    transmision: "Automática"},
    {
    modelo: "Polo", 
    precio: 20000, 
    traccion: "Delantera", 
    transmision: "Manual"
    },
    {
    modelo: "Passat", 
    precio: 35000, 
    traccion: "Delantera", 
    transmision: "Automática"
    },
    {
    modelo: "Tiguan", 
    precio: 30000, 
    traccion: "AWD", 
    transmision: "Automática"
    },
    {
    modelo: "Vento", 
    precio: 23000, 
    traccion: "Delantera", 
    transmision: "Manual"
    },
    {
    modelo: "Beetle", 
    precio: 22000, 
    traccion: "Delantera", 
    transmision: "Automática"
    },
    {
    modelo: "Touareg", 
    precio: 45000, 
    traccion: "AWD", 
    transmision: "Automática"
    },
    {
    modelo: "Up!", 
    precio: 15000, 
    traccion: "Delantera", 
    transmision: "Manual"
    },
];

function mostrarAutos(autos) {
    autos.forEach(auto => {
        console.log(`Modelo: ${auto.modelo}`);
    });
}

mostrarAutos(autos);

let filtro = Number(prompt("Tu presupuesto entre 15mil y 45mil"))
function filtrarAutos(){
    const resultado = autos.filter((auto) =>{
        if (auto.precio <= filtro){2500
            console.log(`Modelo: ${auto.modelo}, Precio: $${auto.precio.toFixed(2)}, Tracción: ${auto.traccion}, Transmisión: ${auto.transmision}`);
        }else{
            console.log300(`Modelo: ${auto.modelo} - "no te alcanza"`)
        }
    })
}

filtrarAutos();

