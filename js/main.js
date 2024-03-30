
const nombre= prompt ("ingrese su nombre: ");

alert ("Hola "+ nombre+"! Bienvenida a Femina Style Lenceria");

let opc=0;

do{
    opc = parseInt(prompt("Ingrese un numero segun su necesidad:\n1- Ropa Interior\n2-Body \n3- Pack de Bombachas\n4 -Salir"));

    switch (opc){
        case 1:
            talles(opc);
            pagarProducto();
            break;
         
        case 2:
            talles(opc);
            pagarProducto();
            break;

        case 3:
            tallesBombachas();
            pagarProducto();
            break;

        case 4:
            alert ("Gracias por su visita, la esperamos nuevamente");
            break;

        default: 


    }
    
}while (opc !== 4);


function talles (opc){
    parseInt(prompt("Ingrese su talle:\n1- 85\n2- 90\n3- 95\n4 -100"));
    if (opc === 1) {
        parseInt(prompt("\n1-Conjunto bralette $4000 \n2-Conjunto triangulo $5000 \n3-Conjunto armado $6000"));
    }else{
        parseInt(prompt("\n1-body1 $4000 \n2-body2 $5000 \n3-body3 $6000"));
    }
    
}

function tallesBombachas (opc){
    parseInt(prompt("Ingrese su talle:\n1- s-m\n2- l\n3- xl\n4 xxl"));
    if (opc === 3) {
        parseInt(prompt("\n1-tangas $3700 \n2-Colaless $4700 \n3-vedetinas $5700"));
    }
}

// function pagarProducto(){
//     prompt("Ingrese el monto a abonar: ");
    
    
//     if (total<6000){
//         alert ("accede al descuento");
//         descuento= 0.10*total;
//         let precioDesc = total - descuento;
//         alert("el precio con descuento es de: ");
        
       
    
//     }else{
//         alert("no accede al descuento");
//     }
        
function pagarProducto() {
    let total = parseFloat(prompt("Ingrese el monto a abonar: ")); 
    
    if (!isNaN(total)) { 
        if (total >= 6000) {
            alert("Accede al descuento");
            let descuento = 0.10 * total;
            let precioDesc = total - descuento;
            alert("El precio con descuento es de: " + precioDesc); // Mostrar el precio con descuento
        } else {
            alert("No accede al descuento");
            alert("El precio total es de: " + total); 
        }
    } else {
        alert("Por favor, ingrese un monto válido.");
    }
}



