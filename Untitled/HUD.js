function HUD() {
  if (ammo.total < 0) ammo.total = 0;
  if (bigammo.total < 0) bigammo.total = 0;
  if (ammo.ingun < 0) ammo.ingun = 0;
  if (bigammo.ingun < 0) bigammo.ingun = 0;

  fill(255)
  textSize(10);
  text(ammo.ingun + "/" + ammo.total, width - 75, height - 10);
  text(bigammo.ingun + "/" + bigammo.total, width - 150, height - 10);
  text("level: " + level, 10, height - 10);
  text("X " + vida, width - 200, height - 10);
  if (money < 10000) {
    text(money + "$", width - 250, height - 10);
  } else {
    text(money + "$", width - 255, height - 10);
  }
  head(width - 208, height - 13.5);
}
