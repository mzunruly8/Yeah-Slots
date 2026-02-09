let credits = 10;
const symbols = ["🍒", "🍋", "⭐", "🔔", "💎"];

function spin() {
  if (credits <= 0) {
    document.getElementById("result").textContent = "Out of credits.";
    return;
  }

  credits--;

  const reel1 = symbols[random()];
  const reel2 = symbols[random()];
  const reel3 = symbols[random()];

  document.getElementById("reels").textContent =
    `${reel1} ${reel2} ${reel3}`;

  let win = 0;

  if (reel1 === reel2 && reel2 === reel3) {
    win = 5;
    document.getElementById("result").textContent = "Jackpot! +5 credits";
  } else if (reel1 === reel2 || reel2 === reel3 || reel1 === reel3) {
    win = 2;
    document.getElementById("result").textContent = "Small win! +2 credits";
  } else {
    document.getElementById("result").textContent = "No win.";
  }

  credits += win;
  document.getElementById("credits").textContent = credits;
}

function random() {
  return Math.floor(Math.random() * symbols.length);
}
