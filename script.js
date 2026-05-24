const canvas = document.getElementById("game");
  } else {
    snake.pop();
  }
}

function drawSnake() {
  snake.forEach((segment, index) => {
    ctx.fillStyle = index === 0 ? "#00ff99" : "#39ff14";

    ctx.shadowBlur = 15;
    ctx.shadowColor = "#39ff14";

    ctx.fillRect(
      segment.x * gridSize,
      segment.y * gridSize,
      gridSize - 2,
      gridSize - 2
    );
  });
}

function drawFood() {
  ctx.fillStyle = "#ff0055";

  ctx.shadowBlur = 20;
  ctx.shadowColor = "#ff0055";

  ctx.fillRect(
    food.x * gridSize,
    food.y * gridSize,
    gridSize - 2,
    gridSize - 2
  );
}

function autoDirection() {
  const directions = [
    { x: 1, y: 0 },
    { x: -1, y: 0 },
    { x: 0, y: 1 },
    { x: 0, y: -1 }
  ];

  velocity = directions[Math.floor(Math.random() * directions.length)];
}

function gameOver() {
  const head = snake[0];

  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= tileCount ||
    head.y >= tileCount
  ) {
    return true;
  }

  for (let i = 1; i < snake.length; i++) {
    if (
      snake[i].x === head.x &&
      snake[i].y === head.y
    ) {
      return true;
    }
  }

  return false;
}

function resetGame() {
  snake = [{ x: 10, y: 10 }];

  velocity = {
    x: 1,
    y: 0
  };

  score = 0;

  document.getElementById("score").innerText = score;

  randomFood();
}

randomFood();
drawGame();
