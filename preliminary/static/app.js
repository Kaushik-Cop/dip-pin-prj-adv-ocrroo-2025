                                                      const form = document.getElementById("capture-form");
const videoSelect = document.getElementById("video-select");
const timeInput = document.getElementById("time-input");
const statusEl = document.getElementById("status");
const ocrText = document.getElementById("ocr-text");
const frameImg = document.getElementById("frame-img");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const seconds = timeInput.value;

  statusEl.textContent = "Extracting text...";
  const response = await fetch(`/video/${videoSelect.value}/frame/${seconds}/ocr`);
  if (!response.ok) {
    statusEl.textContent = "Text extraction failed. Try a different time.";
    return;
  }
  const data = await response.json();
  const lines = data.text.trim().split("\n").length;

  frameImg.src = `/video/${videoSelect.value}/frame/${seconds}`;
  frameImg.alt = `Video frame at ${seconds} seconds`;
  statusEl.textContent = `Frame captured at ${seconds} seconds. Text extracted, ${lines} lines.`;


  ocrText.textContent = data.text;
  ocrText.focus();
});