let preguntas = [
  {
    pregunta: "Pregunta 1",
    respuestaA:
      "A veces dejo que la otra parte tome la responsabilidad para resolver el problema.",

    respuestaB:
      "En vez de negociar los puntos donde no estamos de acuerdo, intento poner énfasis en esos puntos donde estamos de acuerdo.",
    resultadoA: [0, 0, 0, 1, 0],
    resultadoB: [0, 0, 0, 0, 1],
  },
  {
    pregunta: "Pregunta 2",
    respuestaA: "Intento encontrar una solución equilibrada para ambas partes.",
    resultadoA: [0, 0, 1, 0, 0],
    respuestaB:
      "Intento tratar todos los temas que me importan a mí y que le importan a la otra parte.",
    resultadoB: [0, 1, 0, 0, 0],
  },
  {
    pregunta: "Pregunta 3",
    respuestaA: "Suelo ser dura o duro cuando persigo mis intereses.",
    resultadoA: [1, 0, 0, 0, 0],
    respuestaB:
      "Quizá intentaría calmar los sentimientos de la otra parte y conservar la relación.",
    resultadoB: [0, 0, 0, 0, 1],
  },
  {
    pregunta: "Pregunta 4",
    respuestaA: "Intento encontrar una solución a medio camino.",
    resultadoA: [0, 0, 1, 0, 0],
    respuestaB:
      "Algunas veces sacrifico mis intereses por los de la otra persona.",
    resultadoB: [0, 0, 0, 0, 1],
  },
  {
    pregunta: "Pregunta 5",
    respuestaA:
      "Constantemente busco la ayuda de la otra persona para encontrar una solución.",
    resultadoA: [0, 1, 0, 0, 0],
    respuestaB: "Intento hacer lo necesario para evitar tensiones inútiles.",
    resultadoB: [0, 0, 0, 1, 0],
  },
    {
    pregunta: "Pregunta 6",
    respuestaA:
      "Intento evitar situaciones desagradables para mí.",
    resultadoA: [0, 0, 0, 1, 0],
    respuestaB: "Intento ganar en mi posición.",
    resultadoB: [1, 0, 0, 0, 0],
  },
    {
    pregunta: "Pregunta 7",
    respuestaA:
      "Intento atrasar el tema hasta que he tenido tiempo para pensarlo.",
    resultadoA: [0, 0, 0, 1, 0],
    respuestaB: "Cedo en algunos temas a cambio de otros.",
    resultadoB: [0, 0, 1, 0, 0],
  },
    {
    pregunta: "Pregunta 8",
    respuestaA:
      "Suelo ser dura o duro cuando persigo mis metas.",
    resultadoA: [1, 0, 0, 0, 0],
    respuestaB: "Dejaré que gane alguna de sus posiciones si me deja a mí ganar alguna de las mías.",
    resultadoB: [0, 1, 0, 0, 0],
  },
    {
    pregunta: "Pregunta 9",
    respuestaA:
      "Creo que hay veces que no merece la pena preocuparse por las diferencias.",
    resultadoA: [0, 0, 0, 1, 0],
    respuestaB: "Hago bastantes esfuerzos por lograr lo que quiero.",
    resultadoB: [1, 0, 0, 0, 0],
  },
    {
    pregunta: "Pregunta 10",
    respuestaA:
      "Soy dura o duro cuando persigo mis metas.",
    resultadoA: [1, 0, 0, 0, 0],
    respuestaB: "Trato de encontrar una solución equilibrada para ambas partes.",
    resultadoB: [0, 0, 1, 0, 0],
  },
     {
    pregunta: "Pregunta 11",
    respuestaA:
      "Dejaré que gane alguna de sus posiciones si me deja a mí ganar alguna de las mías.",
    resultadoA: [0, 1, 0, 0, 0],
    respuestaB: "Quizá intentaría calmar los sentimientos de la otra parte y conservar la relación.",
    resultadoB: [0, 0, 0, 0, 1],
  },
     {
    pregunta: "Pregunta 12",
    respuestaA:
      "Algunas veces evito tomar posiciones que puedan crear conflicto.",
    resultadoA: [0, 0, 1, 0, 0],
    respuestaB: "Dejaré que gane alguna de sus posiciones si me deja a mí ganar alguna de las mías.",
    resultadoB: [0, 0, 0, 1, 0],
  },
     {
    pregunta: "Pregunta 13",
    respuestaA:
      "Yo propongo un punto intermedio.",
    resultadoA: [0, 0, 1, 0, 0],
    respuestaB: "Yo empujo para establecer mis puntos.",
    resultadoB: [1, 0, 0, 0, 0],
  },
     {
    pregunta: "Pregunta 14",
    respuestaA:
      "Yo le digo mis ideas y le pido las suyas.",
    resultadoA: [0, 1, 0, 0, 0],
    respuestaB: "Intento enseñarle los beneficios y lo lógico de mi posición.",
    resultadoB: [1, 0, 0, 0, 0],
  },
     {
    pregunta: "Pregunta 15",
    respuestaA:
      "Quizá intentaría calmar los sentimientos de la otra parte y conservar la relación.",
    resultadoA: [0, 0, 0, 0, 1],
    respuestaB: "Trato de hacer lo necesario para evitar la tensión.",
    resultadoB: [0, 0, 0, 1, 0],
  },
     {
    pregunta: "Pregunta 16",
    respuestaA:
      "Intento no herir los sentimientos de la otra persona.",
    resultadoA: [0, 0, 0, 0, 1],
    respuestaB: "Intento convencer a la otra persona de los méritos de mi posición.",
    resultadoB: [1, 0, 0, 0, 0],
  },
     {
    pregunta: "Pregunta 17",
    respuestaA:
      "Suelo ser dura o duro cuando persigo mis metas.",
    resultadoA: [1, 0, 0, 0, 0],
    respuestaB: "Intento hacer lo necesario para evitar tensiones inútiles.",
    resultadoB: [0, 0, 0, 1, 0],
  },
     {
    pregunta: "Pregunta 18",
    respuestaA:
      "Si le hace feliz a la otra parte, quizá la dejo mantener sus ideas.",
    resultadoA: [0, 0, 0, 0, 1],
    respuestaB: "Dejaré que gane alguna de sus posiciones si me deja a mí ganar alguna de las mías.",
    resultadoB: [0, 0, 1, 0, 0],
  },
     {
    pregunta: "Pregunta 19",
    respuestaA:
      "Dejaré que gane alguna de sus posiciones si me deja a mí ganar alguna de las mías.",
    resultadoA: [0, 1, 0, 0, 0],
    respuestaB: "Intento atrasar el tema hasta que he tenido tiempo para pensarlo.",
    resultadoB: [0, 0, 0, 1, 0],
  },
  {
    pregunta: "Pregunta 20",
    respuestaA: "Intento trabajar los problemas inmediatamente.",
    resultadoA: [0, 1, 0, 0, 0],
    respuestaB: "Intento encontrar una contribución justa de pérdidas y ganancias igualmente para mí y para la otra parte.",
    resultadoB: [0, 0, 1, 0, 0],
  },
    {
    pregunta: "Pregunta 21",
    respuestaA: "Cuando sé que voy a negociar, intento tener en cuenta los deseos de la otra persona.",
    resultadoA: [0, 0, 0, 0, 1],
    respuestaB: "Siempre intento discutir directamente el problema.",
    resultadoB: [0, 1, 0, 0, 0],
  },
    {
    pregunta: "Pregunta 22",
    respuestaA: "Intento encontrar una posición que sea intermedia entre la de mi “adversaria/o” y la mía.",
    resultadoA: [0, 0, 1, 0, 0],
    respuestaB: "Hay veces que dejo que la otra parte lleve la responsabilidad de intentar resolver el problema.",
    resultadoB: [1, 0, 0, 0, 0],
  },
    {
    pregunta: "Pregunta 23",
    respuestaA: "Muchas veces me preocupo intentando satisfacer todos mis deseos.",
    resultadoA: [0, 1, 0, 0, 0],
    respuestaB: "Hay veces que dejo que la otra parte lleve la responsabilidad de intentar resolver el problema.",
    resultadoB: [0, 0, 0, 1, 0],
  },
    {
    pregunta: "Pregunta 24",
    respuestaA: "Si su posición fuera muy importante para él/ella, intentaría dejarla lograr sus deseos.",
    resultadoA: [0, 0, 1, 0, 0],
    respuestaB: "Intento que la otra parte se ponga de acuerdo en un punto intermedio.",
    resultadoB: [1, 0, 0, 0, 0],
  },
    {
    pregunta: "Pregunta 25",
    respuestaA: "Intento enseñar a la otra parte los benefi cios y lo lógico de mi posición.",
    resultadoA: [1, 0, 0, 0, 0],
    respuestaB: "Cuando sé que voy a negociar, intento tener en cuenta los deseos de la otra persona.",
    resultadoB: [0, 0, 0, 0, 1],
  },
    {
    pregunta: "Pregunta 26",
    respuestaA: "Yo propongo un punto intermedio.",
    resultadoA: [0, 0, 1, 0, 0],
    respuestaB: "Casi siempre estoy preocupada o preocupado por satisfacer todos mis deseos.",
    resultadoB: [0, 1, 0, 0, 0],
  },
    {
    pregunta: "Pregunta 27",
    respuestaA: "A veces evito tomar posiciones que crearían confl ictos.",
    resultadoA: [0, 0, 0, 1, 0],
    respuestaB: "Si a la otra parte le hace feliz, quizá la deje mantener sus ideas.",
    resultadoB: [0, 0, 0, 0, 1],
  },
    {
    pregunta: "Pregunta 28",
    respuestaA: "Suelo ser dura o duro cuando persigo mis metas.",
    resultadoA: [1, 0, 0, 0, 0],
    respuestaB: "Suelo buscar la ayuda de la otra parte para trabajar la solución.",
    resultadoB: [0, 1, 0, 0, 0],
  },
    {
    pregunta: "Pregunta 29",
    respuestaA: "Propongo un punto intermedio.",
    resultadoA: [0, 0, 1, 0, 0],
    respuestaB: "Creo que no siempre merece la pena preocuparse por las diferencias entre las personas.",
    resultadoB: [0, 0, 0, 1, 0],
  },
    {
    pregunta: "Pregunta 30",
    respuestaA: "Intento no herir la sensibilidad de la otra parte.",
    resultadoA: [0, 0, 0, 0, 1],
    respuestaB: "Siempre comparto el problema con la otra persona para poder arreglarlo.",
    resultadoB: [0, 1, 0, 0, 0],
  },
];

let valoresFinales = [
  (competicion = 0),
  (colaboracion = 0),
  (compartir = 0),
  (evitacion = 0),
  (acomodacion = 0),
];

let espacioPreguntas = document.querySelector("#espacioPreguntas");
let guardarHTML = "";
for (let i = 0; i < preguntas.length; i++) {
  if (preguntas[i].pregunta != undefined) {
    guardarHTML += `
    <div class="contenedorPregunta">
            <div class="pregunta">
       
                <p>${preguntas[i].pregunta}</p>
                </div>
                     <div class="respuesta">
                <input class="radiobutton" type="radio" id="${i}a" name="name${i}" value="resultadoA"
                ${preguntas[i].respuestaA.resultado}
    >

                <label for="a">${preguntas[i].respuestaA}</label>
                </div>
                       <div class="respuesta">
                <input class="radiobutton" type="radio" id="${i}b" name="name${i}" value="resultadoB"
                ${preguntas[i].respuestaB.resultado}
                >
                <label for="b">${preguntas[i].respuestaB}</label>
        </div>
            </div>
            </div>`;
  }
}
espacioPreguntas.innerHTML = guardarHTML;

let respuesta = [];
let form = document.querySelector("#formulario");
let formValid = true;

const guardarRespuesta = () => {
  for (let i = 0; i < preguntas.length; i++) {
    let radios = document.getElementsByName(`name${i}`);

    // comprobar si el formulario se puede enviar:
    if (formValid) {
      console.log("name", " ", i, " ", formValid);
      // no están seleccionadas todas las opciones:
      if (!radios[0].checked && !radios[1].checked) {
        formValid = false;
      }
    }

    if (formValid) {
      respuesta = [
        ...respuesta,
        document.querySelector(`input[name="name${i}"]:checked`).value,
      ];
    }
  }

  if (formValid) {
    console.log("Respuestas guardadas:", respuesta);
    let resultadosPage = document.createElement("div");
    resultadosPage.id = "resultadosPage";
    document.body.appendChild(resultadosPage);
  }
  if (formValid) {
    for (let i = 0; i < preguntas.length; i++) {
      for (let j = 0; j < valoresFinales.length; j++) {
        valoresFinales[j] += preguntas[i][respuesta[i]][j];
      }

      resultadosPage.innerHTML = `
      <div id="overlay"> 
        <div id="resultados">
        <div id="close"> X </div>
          <h2 class="resultados-titulo">Tus resultados</h2>
          <p class="comentario-resultados"> Recuerda apuntar tus resultados antes de cerrar la pestaña: estos resultados no se guardarán. </p>
          <ul>
            <li class="resultado-item">
              <p> Competición </p>
              <p> ${valoresFinales[0]}</p>
            </li>
            <li class="resultado-item">
              <p> Colaboración </p>
              <p> ${valoresFinales[1]}</p>
            </li>
            <li class="resultado-item">
              <p> Compartir </p>
              <p> ${valoresFinales[2]}</p>
            </li>
            <li class="resultado-item">
              <p> Evitación </p>
              <p> ${valoresFinales[3]}</p>
            </li>
            <li class="resultado-item">
              <p> Acomodación </p>
              <p> ${valoresFinales[4]}</p>
            </li>
          </ul>
          <p class="comentario-resultados"> No existen respuestas universalmente acertadas. Todas las modalidades son útiles en algunas situaciones, cada una representa un conjunto de habilidades sociales útiles. </p>
        </div>
      </div>
      `;
    }

    form.reset();
    respuesta = [];
    for (let i = 0; i < valoresFinales.length; i++) {
      valoresFinales[i] = 0;
    }
    document.body.appendChild(resultadosPage);

    // Close button logic
    document.getElementById("close").onclick = function () {
      removeElement();
    };
    function removeElement() {
      document.getElementById("overlay").remove();
    }
  } else {
    alert("Falta alguna pregunta por rellenar");
    formValid = true;
  }
};

const validar = () => {
  let radios = document.querySelectorAll(".radiobutton");
  let formValid = false;
  let i = 0;
  while (!formValid && i < radios.length) {
    if (radios[i].checked) formValid = true;
    i++;
  }
  if (!formValid) alert("Falta alguna pregunta por rellenar");
  return formValid;
};

let boton = document.querySelector("#boton");
boton.addEventListener("click", function (event) {
  event.preventDefault();
  guardarRespuesta();
});

// añadir clase al elemento de resultados de "hidden" o "visible" según si se han contestado las respuestas,
// y un "close".
