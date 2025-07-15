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

