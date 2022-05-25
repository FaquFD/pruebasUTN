let metros;
let transportes;


/*------------------------------ EJERCICIO TRANSPORTE METROS --------------------------*/
metros=prompt("Ingrese la distancia")
if(metros>0 && metros<1000){
document.write("El transporte es PIE");
}
else{
    if(metros>1000 && metros<10000){
        document.write("El transporte es BICICLETA");
    }
    else{
        if(metros>10000 && metros<30000){
            document.write("El transporte es COLECTIVO");
        }
        else{
            if(metros>30000 && metros<100000){
                document.write("El transporte es AUTO");
            }
            else{
                document.write("El transporte es AVION");
            }
        }
    }
}


/*----------------------------------- EJERCICIO ARRAYS ------------------------------*/
let numeros = [2,7,15,56,32,5,89,23,24,55];
let mayor = 0;
 
for(i = 0; i < numeros.length; i++){
    if (numeros[i] > mayor)
    {
        mayor = numeros[i];
    }
} 
console.log("El numero mayor es: "+mayor);
    
