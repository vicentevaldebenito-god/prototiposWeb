const texts = [
  "At 12pm If a person wavesat you , drink a gallon of pre-warmed milk",
  "Play a game of chess with a stranger and if you win, take 53 strands of hair and eat it with a wooden fork",
  "If you see a cat, pet it and then immediately run in the opposite direction for 10 seconds",
  "Eliminate the thumb. no time limit",
  "See green from a white wall, and then immediately jump from a building 20 times",
];

const btn = document.getElementById("generateBtn");
const output = document.getElementById("output");

function getRandomText() {
  const index = Math.floor(Math.random() * texts.length);
  return texts[index];
}

function playClickSound() {
  if (!window.AudioContext && !window.webkitAudioContext) return;

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = "square";
  osc.frequency.value = 450;

  gain.gain.setValueAtTime(0.12, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.25);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start();
  osc.stop(ctx.currentTime + 0.25);
}

function handleGenerate() {
  playClickSound();
  output.textContent = getRandomText();
}

btn.addEventListener("click", handleGenerate);
