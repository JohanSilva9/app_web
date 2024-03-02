var nombre = "nombre";
let apellido = "apellido";
const nummero = 12;
let numeroDos = 12.35;
let datoBolleano = false;   
let pares = [3,4,5,6,7,8,9,10];
let jobs = ['libros', 'Deportes'];

console.log(pares[2 ]);
let persona = {
    mobre:'Juan',
    apellido:'Pérez',
    edad:25,
    jobs:['libros', 'Deportes'],
    otrosDatos:{
        telefono: 1234,
        email: 'test@example.com'
    }

}

console.log(persona['nombre'],persona.name);
const personas =[
    {nombre:'persona 1', edad: 17, categoria: 'a'},
    {nombre:'persona 2', edad: 18, categoria: 'b'},
    {nombre:'persona 3', edad: 19, categoria: 'c'},
    {nombre:'persona 4', edad: 20, categoria: 'd'},
    {nombre:'persona 5', edad: 21, categoria: 'e'},
    {nombre:'persona 6', edad: 22, categoria: 'f'},
    
];


for(let index=0; index < persona.length-1; index++){
    console.log(persona[index].nombres);
}
//For in
for (let index in personas ){
    console.log(personas[index].nombres);
}
//For of
for(let item of personas){
    console.log(item.nombres);
}
//while
let index = 0;
while (index < personas.length){
    console.log(personas[index].nombres);
    index++;
}
//do while
index = 0;
do{
    console.log(personas[index].nombres);
    index++;
} while(index < personas.length);

//foreach
personas.forEach((iten,index) => {
    console.long(index, item.nombres);

});

