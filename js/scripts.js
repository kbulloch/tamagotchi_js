$(document).ready(function() {

  var hunger = 0;
  var sleep = 0;
  var happy = 0;
  var lonely = 0;
  var click = 0;
  setStats();
  update();

  function setStats() {
     hunger = (Math.floor(Math.random() * 4) + 3);
     sleep = (Math.floor(Math.random() * 4) + 3);
     happy = (Math.floor(Math.random() * 4) + 3);
     lonely = (Math.floor(Math.random() * 4) + 3);
  }
  function update() {
    $("#hunger").text("Hunger: " + hunger);
    $("#sleep").text("Tiredness: " + sleep);
    $("#happy").text("Happiness: " + happy);
    $("#lonely").text("Loneliness: " + lonely);
    $("#click_count").text("Clicks: " + click);
    if(hunger === 10) {
      endGame("starve");
    }
    if((happy === 0) || (lonely === 10)) {
      endGame("ran away");
    }
    if(sleep === 10) {
      endGame("coma");
    }
    if(happy === 10) {
      endGame("joy")
    }
  };

  function endGame(cause) {
    $("#buttons-real").hide();
    $("#buttons-fake").show();
    $("#endgame").show();
    if (cause === "starve") {
      $("#end").text("Starved to death!");
      $("#losses").append("<li>Starved at " + click + " clicks");
    }
    if (cause === "ran away") {
      $("#end").text("Ran Away!");
      $("#losses").append("<li>Ran Away at " + click + " clicks");
    }
    if (cause === "coma") {
      $("#end").text("Fell into a coma!");
      $("#losses").append("<li>Coma at " + click + " clicks");
    }
    if (cause === "joy") {
      $("#end").text("Exploded from Joy!!");
      $("#wins").append("<li>Exploded from joy at " + click + " clicks");
    }
  }

  function playAgain() {
    setStats();
    click = 0;
    update();
    $("#buttons-fake").hide();
    $("#buttons-real").show();
  }

  $("#feed").click(function() {
    hunger--;
    sleep++;
    click++;
    update();
  });
  $("#rest").click(function() {
    sleep--;
    hunger++;
    lonely++;
    click++;
    update();
  });
  $("#play").click(function() {
    happy++;
    hunger++;
    sleep++;
    lonely--;
    click++;
    update();
  });
  $("#pet").click(function() {
    lonely--;
    sleep++;
    happy++;
    click++;
    update();
  });
  $("#punt").click(function() {
    happy--;
    lonely++;
    hunger--;
    click++;
    update();
  });
  $("#again").click(function() {
    playAgain();
    $("#endgame").hide();
  });
});
