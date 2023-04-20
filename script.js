const pesoDropdown = document.getElementById("weight");
const dosisDropdown = document.getElementById("dose");
const tomasDropdown = document.getElementById("frequency");
const presentacionDropdown = document.getElementById("presentation");
const dosisTotalOutput = document.getElementById("total-dose");
const dosisPorTomaOutput = document.getElementById("dose-per-take");
const divisionesPipetaOutput = document.getElementById("pipette-divisions");
const pipetaOutput = document.getElementById("pipette");
const diasUsoOutput = document.getElementById("days-of-use");

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

//pesoDropdown.addEventListener("change", calculate);
//dosisDropdown.addEventListener("change", calculate);
//tomasDropdown.addEventListener("change", calculate);
//presentacionDropdown.addEventListener("change", calculate);

calculate();
