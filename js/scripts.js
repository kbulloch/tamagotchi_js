$(document).ready(function() {

  var hunger = 0;
  var sleep = 0;
  var happy = 0;
  var lonely = 0;
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
    if(hunger === 10) {
      endGame("Starved to death!");
    }
    if((happy === 0) || (lonely === 10)) {
      endGame("Ran Away!");
    }
    if(sleep === 10) {
      endGame("Tamagotchi is in a coma!");
    }
  };

  function endGame(cause) {
    $("#buttons-real").hide();
    $("#buttons-fake").show();
    $("#endgame").show();
    $("#end").text(cause);
  }

  function playAgain() {
    setStats();
    update();
    $("#buttons-fake").hide();
    $("#buttons-real").show();
  }

  $("#feed").click(function() {
    hunger--;
    sleep++;
    update();
  });
  $("#rest").click(function() {
    sleep--;
    hunger++;
    lonely++;
    update();
  });
  $("#play").click(function() {
    happy++;
    hunger++;
    sleep++;
    update();
  });
  $("#pet").click(function() {
    lonely--;
    hunger++;
    update();
  });
  $("#again").click(function() {
    playAgain();
    $("#endgame").hide();
  })
});
