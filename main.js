let preguntas = [
    {
        "pregunta": "Tortilla con cebolla o sin cebolla?",
        "a": [0, 1, 0, 0, 1],
        "b": [1, 0, 1, 1, 0]
    },
    {
        "pregunta": "verano o invierno?",
        "a": [1, 1, 1, 0, 0],
        "b": [0, 0, 0, 1, 1]
    },
]

let valoresFinales = [
    competicion = 0,
    colaboracion = 0,
    compartir = 0,
    evitacion = 0,
    acomodacion = 0
]


let espacioPreguntas = document.querySelector("#espacioPreguntas")
let guardarHTML = "";
for (let i = 0; i < preguntas.length; i++) {
    if (preguntas[i].pregunta != undefined) {
        guardarHTML += `
            <div class="pregunta">
                <p>${preguntas[i].pregunta}</p>
                <input class="radiobutton" type="radio" id="${i}a" name="name${i}" value="a">
                <label for="a">A</label>
                <input class="radiobutton" type="radio" id="${i}b" name="name${i}" value="b">
                <label for="b">B</label>
            </div>`
    }

}
espacioPreguntas.innerHTML = guardarHTML;

let respuesta = [];
let form = document.querySelector("#formulario");
let formValid = true;


const guardarRespuesta = () => {
    for (let i = 0; i < preguntas.length; i++) {
        let radios = document.getElementsByName(`name${i}`)
        if (formValid) {
            console.log("name", " ", i, " ", formValid)
            if (!radios[0].checked && !radios[1].checked) {
                formValid = false;
            }
        }


        if (formValid) {
            respuesta = [...respuesta, document.querySelector(`input[name="name${i}"]:checked`).value]
        }
    }

    if (formValid) {
        for (let i = 0; i < preguntas.length; i++) {

            for (let j = 0; j < valoresFinales.length; j++) {
                valoresFinales[j] += preguntas[i][respuesta[i]][j]
            }

            resultados.innerHTML = `Competición ${valoresFinales[0]}, colaboración ${valoresFinales[1]}, compartir ${valoresFinales[2]}, evitación ${valoresFinales[3]}, acomodación ${valoresFinales[4]}`
        }
        form.reset()
        respuesta = [];
        for (let i = 0; i < valoresFinales.length; i++) {
            valoresFinales[i] = 0;
        }
    } else {
        alert("nos faltan respuestas");
        formValid = true;
    }

}





const validar = () => {
    let radios = document.querySelectorAll(".radiobutton")
    let formValid = false;
    let i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;
    }
    if (!formValid) alert("Falta alguna pregunta por rellenar");
    return formValid;
}

let boton = document.querySelector("#boton")
boton.addEventListener("click", function (event) {
    event.preventDefault();
    guardarRespuesta()
});

let resultados = document.querySelector("#resultados")
