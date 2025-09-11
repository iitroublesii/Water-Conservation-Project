setProperty("WaterAppHeader", "color", "#38618C");
setProperty("ParaText", "color", "#38618C");
setProperty("WaterAppHeader", "font-size", "30px");
setProperty("ParaText", "font-size", "24px");
setProperty("SpanishButton", "background-color", "#38618C");
setProperty("EnglishButton", "background-color", "#38618C");

onEvent("SpanishButton", "click", function () {
  setText("WaterAppHeader", "Proyecto de Conservación de Agua");
  setText("ParaText", "Es importante que todos hagamos nuestra parte para usar menos agua. Haga clic en esta aplicación para obtener consejos sobre ideas de conservación.");
  setText("SpanishButton", "Español");
  setText("EnglishButton", "Inglés");
});
onEvent("EnglishButton", "click", function () {
  setText("WaterAppHeader", "Water Conservation Project");
  setText("ParaText", "It's important that we all do our part to use less water. Click through this app for tips on conservation ideas.");
  setText("SpanishButton", "Spanish");
  setText("EnglishButton", "English");
});

let correctBottle = false;

hideElement("plasticNo");
hideElement("drip");

onEvent("glassBottle", "click", () => {
  hideElement("plasticNo");
  correctBottle = true;

  const faucet = document.getElementById("faucet");
  const glass = document.getElementById("glassBottle");
  const containerRect = faucet.parentElement.getBoundingClientRect();
  const faucetRect = faucet.getBoundingClientRect();

  const targetLeft = faucetRect.left + faucetRect.width * .85 - glass.offsetWidth / 2 - containerRect.left;
  const targetTop = faucetRect.bottom - containerRect.top - 130;

  setProperty("glassBottle", "position", "absolute");
  setProperty("glassBottle", "transition", "all 0.6s ease");
  setProperty("glassBottle", "left", targetLeft + "px");
  setProperty("glassBottle", "top", targetTop + "px");
});

onEvent("plasticBottle", "click", () => {
  correctBottle = false;

  const plastic = document.getElementById("plasticBottle");
  const plasticNo = document.getElementById("plasticNo");

  plasticNo.style.left = plastic.offsetLeft + "px";
  plasticNo.style.top = plastic.offsetTop + "px";

  showElement("plasticNo");
});

onEvent("faucet", "click", () => {
  const drip = document.getElementById("drip");

  if (!correctBottle) {
    hideElement("drip");
    return;
  }

  const faucet = document.getElementById("faucet");
  const containerRect = faucet.parentElement.getBoundingClientRect();
  const faucetRect = faucet.getBoundingClientRect();

  const dripLeft = faucetRect.left + faucetRect.width * .80 - drip.offsetWidth / .75 - containerRect.left;
  const dripTop = faucetRect.bottom - containerRect.top -130;

  setProperty("drip", "left", dripLeft + "px");
  setProperty("drip", "top", dripTop + "px");

  drip.classList.remove("drip-animate");
  void drip.offsetWidth; 
  drip.classList.add("drip-animate");

  showElement("drip");
  setTimeout(() => hideElement("drip"), 1000);
});

onEvent("NextButton", "click", () => {
  window.location.href = "index2.html";
});

onEvent("showerDuck", "click", () => {
  const rubberDuck = document.getElementById("rubberDuck");
  const showerDuck = document.getElementById("showerDuck");

  const showerRect = showerDuck.getBoundingClientRect();

  if (rubberDuck.style.display === "block") {
    hideElement("rubberDuck");
  } else {
    showElement("rubberDuck");

    requestAnimationFrame(() => {
      const duckWidth = rubberDuck.offsetWidth;
      const duckHeight = rubberDuck.offsetHeight;

      const left = showerRect.left + window.scrollX + (showerRect.width / 2) - (duckWidth / 2);
      const top = showerRect.top + window.scrollY + (showerRect.height / 2) - (duckHeight / 2);

      rubberDuck.style.left = `${left}px`;
      rubberDuck.style.top = `${top}px`;
    });
  }
});

onEvent("startTimer", "click", () => {
  const timer = document.getElementById("timer");
  const trigger = document.getElementById("startTimer");
  const triggerRect = trigger.getBoundingClientRect();

  if (timer.style.display === "block") {
    hideElement("timer");
  } else {
    const left = triggerRect.left + window.scrollX;
    const top = triggerRect.top + window.scrollY;

    timer.style.left = `${left}px`;
    timer.style.top = `${top}px`;

    showElement("timer");
  }
});

