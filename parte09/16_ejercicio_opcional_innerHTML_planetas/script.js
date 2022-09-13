let sistemaSolar = {
  mercurio: {
    nombre: 'mercurio',
    color: 'gris',
    temperatura: 350,
    imagen: 'https://www.astromia.com/fotosolar/fotos/planetamercurio.jpg'
  },
  venus: {
    nombre: 'venus',
    color: 'blanco',
    temperatura: 460,
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Venus-real_color.jpg/220px-Venus-real_color.jpg'
  },
  tierra: {
    nombre: 'tierra',
    color: 'morado',
    temperatura: 14,
    imagen:
      'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/5a0ab2a75bafe87f4d3f9a63/acaba-tiempo_0.jpg'
  },
  marte: {
    nombre: 'marte',
    color: 'rojo',
    temperatura: -46,
    imagen:
      'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/55365b6b34099b0279c8fb2e/slide-marte.jpg'
  },
  jupiter: {
    nombre: 'jupiter',
    color: 'marrón',
    temperatura: -121,
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Jupiter_by_Cassini-Huygens.jpg/280px-Jupiter_by_Cassini-Huygens.jpg'
  },
  saturno: {
    nombre: 'saturno',
    color: 'amarillo',
    temperatura: -130,
    imagen:
      'https://estaticos.muyinteresante.es/media/cache/760x570_thumb/uploads/images/article/558d2b15010e26221b57df75/saturno.jpg'
  },
  urano: {
    nombre: 'urano',
    color: 'azul',
    temperatura: -205,
    imagen: 'http://www.manzanares.es/v2/sites/paseo/img/urano/urano1.jpg'
  },
  neptuno: {
    nombre: 'neptuno',
    color: 'azul',
    temperatura: -220,
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Neptune_Full.jpg/280px-Neptune_Full.jpg'
  },
  pluton: {
    nombre: 'plutón',
    color: 'blanco',
    temperatura: -229,
    imagen:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg/1200px-Nh-pluto-in-true-color_2x_JPEG.jpg'
  }
};

/* 
1.Pedir al usuario tres nombres de planetas del Sistema Solar. Con el objeto Sistema Solar, 
2. muestra los datos de los tres planetas elegidos. 
3. Asegúrate de que los nombres existen (
4. y coinciden con las claves
del objeto) y de 
5. que el usuario no introduce valores repetidos.

6. a. Los 3 planetas deberán aparecer en el navegador, cada uno dentro de una card. Los tres
estarán colocados uno junto al otro, alineados horizontalmente.
7.b. Arriba del todo de la card aparecerá el nombre, luego la imagen y después las
características (color y temperatura).
El archivo a usar es el archivo Sistema Solar.docx.pdf.
Consejo: recordad que hay varias formas de acceder a las claves de los objetos. Tendréis que saber
cómo buscar dichas claves si no es con la notación de punto, jiji . Lo tenéis en un ejemplo
anterior.

p.D: Creao que tengo mucho codigo repetido ;(
*/

let nombrePrimerPlaneta = prompt('Nobre del primer planeta'),
  nombreSegundoPlaneta = prompt('Nobre del segundo planeta'),
  nombreTercerPlaneta = prompt('Nobre del tercer planeta'),

  planeta1 = nombrePrimerPlaneta.toLowerCase(),
  planeta2 = nombreSegundoPlaneta.toLowerCase(),
  planeta3 = nombreTercerPlaneta.toLowerCase();

if (sistemaSolar[planeta1] != undefined && sistemaSolar[planeta2] != undefined && sistemaSolar[planeta3] != undefined) {

  if (sistemaSolar[planeta1] !== sistemaSolar[planeta2] && sistemaSolar[planeta1] !== sistemaSolar[planeta3] && sistemaSolar[planeta2] !== sistemaSolar[planeta3]) {
    document.querySelector("body").innerHTML = `
      <div class="wrapper"> 
          <div class="planet"> 
            <h2>${planeta1}</h2>
            <img src="${sistemaSolar[planeta1].imagen}" />
            <p >Edad: ${sistemaSolar[planeta1].color}</p>
            <p >Correo: ${sistemaSolar[planeta1].temperatura}ºC</p>
        </div>
        <div class="planet">
        <h2>${planeta2}</h2>
        <img src="${sistemaSolar[planeta2].imagen}" />
        <p >Color: ${sistemaSolar[planeta2].color}</p>
        <p >Temperatura: ${sistemaSolar[planeta2].temperatura}ºC</p>
    </div>
    <div class="planet">
        <h2>${planeta3}</h2>
        <img src="${sistemaSolar[planeta3].imagen}" />
        <p >Edad: ${sistemaSolar[planeta3].color}</p>
        <p >Correo: ${sistemaSolar[planeta3].temperatura}ºC</p>
    </div>
    </div>
    `;
  } else {
    let planetas = Object.keys(sistemaSolar);
    document.querySelector("body").innerHTML = `<div><h2>Has introducidfo el mismo planeta dos o mas veces</h2>`;
    document.querySelector("body").innerHTML += `<h4>Planetas disponibles: </h4><ul></ul></div>`;
    for (let planeta in planetas) {
      document.querySelector("ul").innerHTML += `<li>${planetas[planeta]}</li>`;
    }
  }
} else {
  let planetas = Object.keys(sistemaSolar);
  document.querySelector("body").innerHTML = `<div><h2>Por favor seleciona entre siguentes planetas:</h2>`;
  document.querySelector("body").innerHTML += `<h4>Planetas disponibles: </h4><ul></ul></div>`;
  for (let planeta in planetas) {
    document.querySelector("ul").innerHTML += `<li>${planetas[planeta]}</li>`;
  }
}


