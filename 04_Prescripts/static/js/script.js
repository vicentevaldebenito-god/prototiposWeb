const texts = [
  "At 12pm If a person waves at you , drink a gallon of pre-warmed milk",
  "Play a game of chess with a stranger and if you win, take 53 strands of hair and eat it with a wooden fork",
  "If you see a cat, pet it and then immediately run in the opposite direction for 10 seconds",
  "Eliminate the thumb. no time limit",
  "See green from a white wall, and then immediately jump from a building 20 times",
  "Walk backward through every door you enter for seven years. The Prescript ends when you forget how to go forward.",
  "Count the stars you can see from your window tonight. Subtract your age. If the result is negative, swallow a live spider at dawn.",
  "Speak only in questions until the next eclipse. Answer none of them. The silence after is your fulfillment.",
  "Paint your shadow black every midnight. If it moves without you, cut it off with scissors.",
  "Collect your own tears for one lunar month in a glass vial. Drink them on the new moon while standing on one leg reciting pi to 100 digits.",
  "Replace every mirror in your home with photographs of yourself crying. Shatter the last one with your teeth.",
  "Breathe only through your left nostril for 49 days. On the 50th, suffocate until the Prescript allows air again.",
  "Write your death date on every wall you pass. Erase it with saliva before anyone reads it. Miss one and the date becomes true.",
  "Sleep inside a circle of salt every night. If you wake outside it, eat the entire circle.",
  "Whisper your real name to every stranger you meet. If they repeat it back correctly, kill them. If not, kill yourself.",
  "Carry a lit match between your fingers until it burns out. Do this 1,000 times without blistering. The Prescript is complete when your hands forget pain.",
  "Reverse every sentence you speak for the rest of your life. The moment you speak normally again, the Prescript claims your tongue.",
  "Dig a grave exactly your height and width. Sleep in it every night until grass grows over you. Only rise when flowers bloom from your chest.",
  "Eat one page of any book you open each day. Finish the book or finish yourself.",
  "Stare at the sun until your vision turns black. Then describe every color you still remember to a blind man.",
  "Tie a thread from your wrist to the moon each night. If it snaps before dawn, pull the moon down with your teeth.",
  "Count every heartbeat for 24 hours without stopping. If you lose count even once, stop your heart manually.",
  "Replace all your blood with rainwater over seven nights. The Prescript ends when you drown from the inside.",
  "Speak the name of every person who has ever died while looking into their eyes in a photograph. Blink only after the last name.",
  "Walk on your hands until your feet forget how to touch the ground. The Prescript forgives you only when you fall upward.",
  "Burn every photograph of yourself. Collect the ashes. Rebuild your face from them in a mirror that no longer exists.",
  "Hold your breath until the next person you see exhales for you. If they never do, remain breathless forever.",
  "Carve your sins into your skin with a rusty nail. Wash them away with vinegar every sunrise. The scars must vanish before you die.",
  "Live the next year exactly one second behind everyone else. Catch up only by stealing time from a sleeping child.",
  "Swallow a key every morning. Vomit it up every night. The Prescript ends when the key unlocks something inside you.",
  "Sing every song you know backward while hanging upside down. Stop when blood fills your lungs instead of air.",
  "Erase one memory every hour by writing it on paper and eating the paper. When no memories remain, the Prescript is satisfied.",
  "Stand in the same spot without moving for 30 days. If a shadow falls on you that is not yours, step into it and disappear.",
  "Count to infinity without stopping. The Prescript ends the moment you realize infinity counted you first.",
  "Die tomorrow. If you wake up the day after, the Prescript was never given."
];

const btn = document.getElementById("generateBtn");
const output = document.getElementById("output");

const clickSfx = new Audio("static/sounds/index1.wav");
clickSfx.volume = 0.75;

const delayedSfx = new Audio("static/sounds/index.wav");
delayedSfx.volume = 0.9;

function getRandomText() {
  const index = Math.floor(Math.random() * texts.length);
  return texts[index];
}

function playClickSound() {
  clickSfx.currentTime = 0;
  clickSfx.play().catch(() => {
    // Silently ignore if playback fails (e.g. autoplay restrictions)
  });
}

function playDelayedSound() {
  delayedSfx.currentTime = 0;
  delayedSfx.play().catch(() => {
    // Silently ignore if playback fails (e.g. autoplay restrictions)
  });
}

function handleGenerate() {
  playClickSound();
  btn.disabled = true;
  output.textContent = "Generating...";

  const interval = setInterval(() => {
    output.textContent = getRandomText();
  }, 100);

  setTimeout(() => {
    playDelayedSound();
  }, 1200);

  setTimeout(() => {
    clearInterval(interval);
    output.textContent = getRandomText();
    btn.disabled = false;
  }, 1000);
}

btn.addEventListener("click", handleGenerate);

