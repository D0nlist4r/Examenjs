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

 let completeName = n + " " + a;
 let nickname = ap;
 
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");  
}
// tercera parte
function Tipos(tipoDeSuscripcion){
 if (tipoDeSuscripcion === "Free") {
    console.log("Solo puedes tomar los cursos gratis");
 } else if(tipoDeSuscripcion === "Baric"){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
 } else if (tipoDeSuscripcion === "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
 } else if (tipoDeSuscripcion === "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
 }
}

function tipos2(suscripcion){
    const tipos = ["Free","Basic","Expert","ExpertPlus",];
    const infoTipos = ["Solo puedes tomar los cursos gratis","Puedes tomar casi todos los cursos de Platzi durante un mes","Puedes tomar casi todos los cursos de Platzi durante un año","Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año",];
    
    for (let i = 0; i < tipos.length; i++) {  
        if (suscripcion == tipos[i]){
            console.log("Tu Suscipcion es " + tipos[i] + " Ahora "+ infoTipos[i]);
     }
    } 
}

