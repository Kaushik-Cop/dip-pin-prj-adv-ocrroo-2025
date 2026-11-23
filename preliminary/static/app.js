const form = document.getElementById("capture-form");
const videoSelect = document.getElementById("video-select");
const videoInfo = document.getElementById("video-info");
const timeInput = document.getElementById("time-input");
const timeError = document.getElementById("time-error");
const statusEl = document.getElementById("status");
const ocrText = document.getElementById("ocr-text");
const frameImg = document.getElementById("frame-img");

let videoLength = 0;


async function loadVideoLength() {
  const response = await fetch(`/video/${videoSelect.value}`);
  const data = await response.json();
  videoLength = data.duration_seconds;
  videoInfo.textContent = `Length: ${Math.floor(videoLength)} seconds`;
}
loadVideoLength();

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const seconds = timeInput.value;


  if (seconds === "" || isNaN(seconds) || seconds < 0 || seconds >= videoLength) {
    timeError.textContent = `Please enter a time between 0 and ${Math.floor(videoLength)} seconds.`;
    timeError.hidden = false;
    timeInput.focus();
    return;
  }
  timeError.hidden = true;


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