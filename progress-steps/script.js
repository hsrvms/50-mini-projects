let step = 1;
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const steps = document.querySelectorAll(".step");
const line = document.querySelector('.line');

prevButton.addEventListener("click", decreaseStep);
nextButton.addEventListener("click", increaseStep);

function decreaseStep() {
  if (step > 1) step--;
  adjustButtons();
  displayProcess();
}

function increaseStep() {
  if (step < 4) step++;
  adjustButtons();
  displayProcess();
}

function adjustButtons() {
  if(step <= 1){
    prevButton.setAttribute('disabled', '');
  } else {
    prevButton.removeAttribute('disabled');
  }

  if(step >= 4){
    nextButton.setAttribute('disabled', '');
  } else {
    nextButton.removeAttribute('disabled');
  }
}

function displayProcess() {
  const currentStep = document.querySelector(`.step[value="${step}"]`);
  const currentStepNumber = parseInt(currentStep.textContent);
  steps.forEach((item) => {
    if (item.textContent <= currentStep.textContent) {
      item.classList.add("active");
    } else  {
      item.classList.remove("active");
    }
  });

  switch(currentStepNumber) {
    case 1: 
      line.style.width = '0%';
    break;
    case 2: 
      line.style.width = '33%';
    break;
    case 3: 
      line.style.width = '66%';
    break;
    case 4: 
      line.style.width = '100%';
    break;
  }

 
}
