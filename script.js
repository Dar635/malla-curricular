const materiasPorSemestre = {
  1: [
    { sigla: "MAT-100", nombre: "Álgebra", prereq: "Pre-facultativo" },
    { sigla: "IND-122", nombre: "Contabilidad", prereq: "Pre-facultativo" },
    { sigla: "MEC-101", nombre: "Dibujo Técnico", prereq: "Pre-facultativo" },
    { sigla: "FIS-100", nombre: "Física Básica I y Lab.", prereq: "Pre-facultativo" },
    { sigla: "MAT-101", nombre: "Cálculo I", prereq: "Pre-facultativo" },
    { sigla: "QMC-101", nombre: "Química General e Inorgánica y Lab.", prereq: "Pre-facultativo" },
  ],
  2: [
    { sigla: "MAT-103", nombre: "Álgebra Lineal y Teoría Matricial", prereq: "MAT-100" },
    { sigla: "IND-222", nombre: "Teoría Económica", prereq: "IND-122" },
    { sigla: "MEC-225", nombre: "Ciencia de los Materiales", prereq: "MEC-101" },
    { sigla: "FIS-102", nombre: "Física Básica II y Lab.", prereq: "FIS-100" },
    { sigla: "MAT-102", nombre: "Cálculo II", prereq: "MAT-101" },
    { sigla: "QMC-200", nombre: "Química Orgánica y Lab.", prereq: "QMC-101" },
  ],
  3: [
    { sigla: "IND-311", nombre: "Cálculo de Probabilidades", prereq: "MAT-103" },
    { sigla: "IND-312", nombre: "Informática para Ingeniería y Lab.", prereq: "MAT-103, IND-222" },
    { sigla: "IND-333", nombre: "Procesos de Manufactura", prereq: "MEC-225" },
    { sigla: "ELT-322", nombre: "Electrotecnia, Electrónica y Lab.", prereq: "FIS-102" },
    { sigla: "MAT-207", nombre: "Ecuaciones Diferenciales", prereq: "MAT-102" },
    { sigla: "QMC-206", nombre: "Fisicoquímica y Lab.", prereq: "QMC-200" },
  ],
  4: [
    { sigla: "IND-411", nombre: "Estadística Inferencial", prereq: "IND-311" },
    { sigla: "IND-412", nombre: "Metodología de Investigación Científica", prereq: "IND-312" },
    { sigla: "IND-413", nombre: "Ingeniería Ambiental y Desarrollo Sostenible", prereq: "IND-333" },
    { sigla: "IND-414", nombre: "Construcciones e Instalaciones Industriales", prereq: "ELT-322" },
    { sigla: "IND-445", nombre: "Administración Industrial", prereq: "IND-333" },
    { sigla: "IND-436", nombre: "Operaciones Unitarias I y Lab.", prereq: "QMC-206, MAT-207" },
  ],
  5: [
    { sigla: "IND-521", nombre: "Econometría", prereq: "IND-411" },
    { sigla: "IND-532", nombre: "Control Estadístico de la Calidad y Lab.", prereq: "IND-411" },
    { sigla: "IND-543", nombre: "Investigación de Operaciones I", prereq: "IND-411, IND-413" },
    { sigla: "IND-544", nombre: "Ingeniería de Costos", prereq: "IND-412" },
    { sigla: "IND-535", nombre: "Ingeniería de Métodos y Lab.", prereq: "IND-445, IND-414" },
    { sigla: "IND-536", nombre: "Operaciones Unitarias II y Lab.", prereq: "IND-436" },
  ],
  6: [
    { sigla: "IND-621", nombre: "Marketing", prereq: "IND-521" },
    { sigla: "IND-642", nombre: "Ingeniería de Sistemas", prereq: "IND-532" },
    { sigla: "IND-643", nombre: "Investigación de Operaciones II", prereq: "IND-543" },
    { sigla: "IND-624", nombre: "Ingeniería Económica", prereq: "IND-544" },
    { sigla: "IND-635", nombre: "Manufactura Esbelta y Lab.", prereq: "IND-532, IND-535" },
    { sigla: "IND-636", nombre: "Operaciones Unitarias III y Lab.", prereq: "IND-536" },
  ],
  7: [
    { sigla: "IND-721", nombre: "Ingeniería Legal", prereq: "IND-621" },
    { sigla: "IND-742", nombre: "Ingeniería de Simulación y Lab.", prereq: "IND-642, IND-643" },
    { sigla: "IND-723", nombre: "Preparación y Evaluación de Proyectos I", prereq: "IND-624" },
    { sigla: "IND-734", nombre: "Seguridad Industrial y Salud Ocupacional y Lab.", prereq: "IND-635" },
    { sigla: "IND-735", nombre: "Diseño Industrial y Lab.", prereq: "IND-635" },
    { sigla: "IND-736", nombre: "Tecnología de Alimentos y Lab.", prereq: "IND-636" },
  ],
  8: [
    { sigla: "IND-841", nombre: "Planificación y Control de la Producción I", prereq: "IND-742" },
    { sigla: "IND-812", nombre: "Taller de Proyecto de Grado I", prereq: "IND-723" },
    { sigla: "IND-823", nombre: "Preparación y Evaluación de Proyectos II", prereq: "IND-723" },
    { sigla: "IND-844", nombre: "Gestión de Calidad", prereq: "IND-721, IND-734" },
    { sigla: "IND-835", nombre: "Automatización y Lab.", prereq: "IND-735" },
    { sigla: "IND-836", nombre: "Diseño de Procesos Industriales I", prereq: "IND-736" },
  ],
  9: [
    { sigla: "IND-941", nombre: "Planificación y Control de la Producción II", prereq: "IND-841" },
    { sigla: "IND-912", nombre: "Taller de Proyecto de Grado II", prereq: "IND-812" },
    { sigla: "IND-943", nombre: "Gerencia de Proyectos", prereq: "IND-823" },
    { sigla: "IND-944", nombre: "Logística", prereq: "IND-844" },
    { sigla: "IND-915", nombre: "Prácticas Industriales", prereq: "IND-835" },
    { sigla: "IND-936", nombre: "Diseño de Procesos Industriales II", prereq: "IND-836" },
  ]
};

const contenedor = document.getElementById("malla");

for (let semestre = 1; semestre <= 9; semestre++) {
  const div = document.createElement("div");
  div.className = "semestre";
  div.innerHTML = `<h2>Semestre ${semestre}</h2>`;
  materiasPorSemestre[semestre].forEach(m => {
    const matDiv = document.createElement("div");
    matDiv.className = "materia";
    matDiv.innerHTML = `<strong>${m.sigla}</strong>: ${m.nombre}<br><em>Pre: ${m.prereq}</em>`;
    div.appendChild(matDiv);
  });
  contenedor.appendChild(div);
}

