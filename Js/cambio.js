

function convertir() {
   var valore= parseInt(document.getElementById("valor").value);
   var resultado= 0;
   var dolar= 161.83;
   var euro= 162.22;
   if (document.getElementById ("uno").checked) {
     resultado=valore/dolar;
     alert ("El cambio de pesos Arg a Dolares es:$"+ resultado);
   }
    else 
    if (document.getElementById("dos").checked) {
     resultado=valore/euro;
     alert ("El cambio de pesos Arg a Euros es:"+ resultado);
    }
     else{
       alert("Tienes que completar todos los campos")
     }
 }
