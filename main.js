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
    if (formValid) {
      console.log("name", " ", i, " ", formValid);
      if (!radios[0].checked && !radios[1].checked) {
        formValid = false;
      }
    }

    if (formValid) {
      respuesta = [
        ...respuesta,
        document.querySelector(`input[name="name${i}"]:checked`).value,
      ];
      console.log("respuesta", " ", respuesta);
      console.log("respuesta i", " ", respuesta[i]);
      console.log("respuesta", " ", respuesta[i][0]);
      console.log("preguntas", " ", preguntas);
      console.log("valoresFinales", " ", valoresFinales);
      console.log(preguntas[i].pregunta + " preguntaaa");
      console.log(preguntas[i][respuesta[0]] + " pregunta 1");
      console.log(preguntas[i][respuesta[1]] + " pregunta 2");
    }
  }

  if (formValid) {
    for (let i = 0; i < preguntas.length; i++) {
      for (let j = 0; j < valoresFinales.length; j++) {
        valoresFinales[j] += preguntas[i][respuesta[i]][j];
      }

      resultados.innerHTML = `Competición ${valoresFinales[0]}, colaboración ${valoresFinales[1]}, compartir ${valoresFinales[2]}, evitación ${valoresFinales[3]}, acomodación ${valoresFinales[4]}`;
    }
    form.reset();
    respuesta = [];
    for (let i = 0; i < valoresFinales.length; i++) {
      valoresFinales[i] = 0;
    }
  } else {
    alert("nos faltan respuestas");
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

let resultados = document.querySelector("#resultados");