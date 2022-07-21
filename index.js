//Primera parte
const nombre = "Juan sebastian";
const apellido = "Fandiño Cardenas";
const User_plazi = "Sebas.dot"
const edad = 24;
const correo = "dev_sebasfc@outlook.es"
let Mayor_de_edad = true;
const Dinero_Ahorrado = 50000;
const deudas = 750000;

let Nombre_completo = `${nombre} ${apellido}`;
console.log(Nombre_completo);
let Dineroreal = Dinero_Ahorrado - deudas;
console.log(Dineroreal);
// Segunda parte

function Nombrecompleto(n,a,ap){

 let completeName = n + a;
 let nickname = ap;
 
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");  
}
