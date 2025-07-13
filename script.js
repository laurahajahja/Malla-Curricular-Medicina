
document.addEventListener('DOMContentLoaded', () => {
  const semestresData = [
    {
      nombre: "SEMESTRE 1",
      materias: [
        { nombre: "Bases para la Ciencia", creditos: 2 },
        { nombre: "Sistemas Orgánicos Integrados I", creditos: 7 },
        { nombre: "Práctica Médica en Comunidad I", creditos: 5 },
        { nombre: "Relevancia Práctica en Individuos", creditos: 4 },
        { nombre: "Vocación y Sentido Médico I", creditos: 2 },
        { nombre: "Core curriculum Persona & Cultu", creditos: 2 },
        { nombre: "Competencias Digitales", creditos: 3 }
      ]
    },
    {
      nombre: "SEMESTRE 2",
      materias: [
        { nombre: "Sistemas Orgánicos Integrados II", creditos: 7 },
        { nombre: "Práctica Médica en Comunidad II", creditos: 5 },
        { nombre: "Relevancia Práctica en Individuos II", creditos: 4 },
        { nombre: "Vocación y Sentido Médico II", creditos: 2 },
        { nombre: "Core Curriculum: Persona & Cultu II", creditos: 2 },
        { nombre: "Tecnologías para la educación en salud", creditos: 2 },
        { nombre: "Lenguas extranjeras I", creditos: 3 }
      ]
    }
  ];

  const container = document.querySelector('.semestres');

  semestresData.forEach((semestre, i) => {
    const semDiv = document.createElement('div');
    semDiv.classList.add('semestre');
    semDiv.innerHTML = `<h2>${semestre.nombre}</h2>`;

    semestre.materias.forEach((materia, j) => {
      const key = `${i}-${j}`;
      const matDiv = document.createElement('div');
      matDiv.classList.add('materia');
      matDiv.textContent = `${materia.nombre} (${materia.creditos} cr.)`;

      if (localStorage.getItem(key) === 'true') {
        matDiv.classList.add('tachada');
      }

      matDiv.addEventListener('click', () => {
        const wasTachada = matDiv.classList.toggle('tachada');
        localStorage.setItem(key, wasTachada);
      });

      semDiv.appendChild(matDiv);
    });

    container.appendChild(semDiv);
  });
});
