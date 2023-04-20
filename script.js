const pesoDropdown = document.getElementById("peso-dropdown");
const dosisDropdown = document.getElementById("dosis-dropdown");
const tomasDropdown = document.getElementById("tomas-dropdown");
const presentacionDropdown = document.getElementById("presentacion-dropdown");
const dosisTotalOutput = document.getElementById("dosis-total-output");
const dosisPorTomaOutput = document.getElementById("dosis-por-toma-output");
const divisionesPipetaOutput = document.getElementById("divisiones-pipeta-output");
const pipetaOutput = document.getElementById("pipeta-output");
const diasUsoOutput = document.getElementById("dias-uso-output");

const calculate = () => {
  const peso = parseFloat(pesoDropdown.value);
  const dosisMG = parseFloat(dosisDropdown.value);
  const tomasDia = parseFloat(tomasDropdown.value);
  const presentacionML = parseFloat(presentacionDropdown.value);

  const dosisTotal = peso * dosisMG;
  const dosisPorToma = dosisTotal / tomasDia;
  const divisionesPipeta = dosisPorToma / 100;
  const pipeta = divisionesPipeta < 1.00001 ? "1 ml" : "5 ml";
  const diasUso = presentacionML === 35 ? 3500 / dosisTotal : 7000 / dosisTotal;

  dosisTotalOutput.textContent = `${dosisTotal.toFixed(2)} mg`;
  dosisPorTomaOutput.textContent = `${dosisPorToma.toFixed(2)} mg`;
  divisionesPipetaOutput.textContent = divisionesPipeta.toFixed(2);
  pipetaOutput.textContent = pipeta;
  diasUsoOutput.textContent = `${Math.ceil(diasUso)} days`;
};

pesoDropdown.addEventListener("change", calculate);
dosisDropdown.addEventListener("change", calculate);
tomasDropdown.addEventListener("change", calculate);
presentacionDropdown.addEventListener("change", calculate);

calculate();
