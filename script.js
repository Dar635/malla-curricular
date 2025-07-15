const materias = [
  { nombre: "Matemática I", semestre: 1 },
  { nombre: "Física I", semestre: 1 },
  { nombre: "Programación", semestre: 1 },
  { nombre: "Álgebra Lineal", semestre: 2 },
  { nombre: "Estadística", semestre: 2 },
  { nombre: "Estructura de Datos", semestre: 2 }
];

const malla = document.getElementById('malla');

materias.forEach(m => {
  const div = document.createElement('div');
  div.className = 'materia';
  div.innerText = `${m.nombre}\n(Semestre ${m.semestre})`;
  malla.appendChild(div);
});
