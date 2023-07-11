const panels = document.querySelectorAll('div[class="panel"]');

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    deactivateAllPanels();
    panel.classList.add('active');
  });
});

function deactivateAllPanels() {
  panels.forEach((panel) => panel.classList.remove("active"));
}
