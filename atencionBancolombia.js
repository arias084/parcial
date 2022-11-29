let system = prompt("Si Desea utilizar el sistema Bancolombia, digite 'Si' para seguir y 'No' para recibir las estadisticas")
let contOfficeDoc = 0;
let contOfficeEst = 0;
let contTelephonyDoc = 0;
let contTelephonyEst = 0;

while (system == "si"){
    let attention = prompt("¿Qué tipo de atención desea? Digite 1. si desea telefonica y 2. si desea oficina.");
    let type = prompt("¿Es usted estudiante o docente? Digite 'E' si desea estudiante y 'D' si desea docente");

    switch(type){
        case "E": { 
            
            switch(attention){

                case "1" :{
                    
                    contTelephonyEst = contTelephonyEst + 1;
                    break;
                }
                case "2" :{
                    
                    contOfficeEst =contOfficeEst + 1;
                    break;
                }
            }
            break
        }
        case "D":{
           
            switch(attention){

                case "1" :{

                    contTelephonyDoc = contTelephonyDoc + 1;
                    break;
                }
                case "2" :{
        
                    contOfficeDoc = contOfficeDoc + 1;
                    break;
                }
            }
            break
        }
    }
    attention = 0;
    type = " ";

    system = prompt("¿Quiere seguir utilizando el sistema? Digite 'Si' para proceder y 'No' para recibir las estadisticas")
}

console.log("Ha finalizado la utilización el sistema Bancolombia.")
console.log("Estas son las estadisticas de cada uno de los modulos de atención")

console.log("La cantidad de estudiantes atendidos por vía telefonica es de:", contTelephonyEst);
console.log("La cantidad de estudiantes atendidos por oficina es de: ", contOfficeEst);
console.log("La cantidad de docentes atendidos por vía telefonica es de: ", contTelephonyDoc);
console.log("La cantidad de docentes atendidos por oficina es de: ", contOfficeDoc);
