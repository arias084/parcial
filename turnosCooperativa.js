let data = {
    client: ["Cliente Cooperativa", "Cliente Externo"],
    typeAttention: ["Pagos", "Asesoria"],
    typeAttentionPayment: ["Cuotas", "Administracion"],
    module: ["1", "2", "3"]
};
let coop_open = true;
function time(ms) {
    return new Promise((resolve, reject) => {
        if (coop_open) {
            setTimeout(resolve, ms);
        }
        else {
            reject(console.log("La cooperativa esta cerrada"))
        }
    });
}
async function atencionClientes() {
    try {
        await time(0000)
        console.log("TIPO DE CLIENTE")
        await time(2000)
        console.log(`${data.client[0]}`)
        await time(2000)
        console.log("TIPO DE ATENCION")
        await time(2000)
        console.log(`${data.typeAttention[0]}`)
        await time(2000)
        console.log("TIPO DE ATENCION EN PAGOS")
        await time(2000)
        console.log(`${data.typeAttentionPayment[0]}`)
        await time(2000)
        console.log(`Su turno es prioritario, por favor acerquese al modulo ${data.module[1]}`)
    }
    catch (error) {
        console.log("ERROR: Por favor comuniquese con el personal para reportar el error")
    }
}
atencionClientes();