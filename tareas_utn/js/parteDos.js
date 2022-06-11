/*--------------- cuadrados -------------------*/

function cambiarFondo(color){
    document.querySelector('body').style.background = color;
}


/*---------------- textarea ---------------*/
let texto = document.getElementById('texto');
let contar = document.getElementById('contar');

texto.addEventListener('keyup', function(){
    contar.innerText = texto.value.length; /*cuanto cant de caracteres*/
})


/*-------------------- alumnos ----------------*/
let alumnos = [
    {
      nombre: 'Juan Gomez',
      nota: 3
    }, 
    {
      nombre: 'Pedro Rodriguez',
      nota: 4
    }, 
    {
      nombre: 'Roxana García',
      nota: 8
    }, 
    {
      nombre: 'Luciano Lopez',
      nota: 2
    }, 
    {
      nombre: 'Fernanda Gimenez',
      nota: 2
    }, 
    {
      nombre: 'Florencia Martinez',
      nota: 10
    }, 
    {
      nombre: 'Raul Sanchez',
      nota: 7
    }, 
    {
      nombre: 'Sandra Figueroa',
      nota: 1
    }
  ];

  
  let aprobados = alumnos.filter(function (alumno){
      return alumno.nota >= 4;
  });

  console.log(aprobados);
  console.log(`${aprobados.length} aprobados`);