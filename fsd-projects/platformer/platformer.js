$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(200 ,650, 300, 10);
createPlatform(900 ,650, 300, 10);
createPlatform(500 ,550, 400, 10);
createPlatform(300 ,450, 100, 10);
createPlatform(1000 ,450, 100, 10);
createPlatform(100 ,400, 100, 10);
createPlatform(1200 ,400, 100, 10);
createPlatform(900 ,300, 200, 10);
createPlatform(300 ,300, 200, 10);
createPlatform(500 ,250, 400, 10);
createPlatform(500 ,125, 400, 10);






    // TODO 3 - Create Collectables
createCollectable("max", 680, 510);
createCollectable("max", 127, 360);
createCollectable("max", 1227, 360);
createCollectable("max", 927, 260);
createCollectable("max", 427, 260);
createCollectable("max", 680, 87);


    
    // TODO 4 - Create Cannons
createCannon("top", 409, 800, 20, 20);
createCannon("right", 358, 6000, 20, 20);
createCannon("top", 1109, 800, 20, 20);
createCannon("left", 238, 6000, 20, 20);
createCannon("bottom", 641, 1500, 20, 20);
createCannon("right", 158, 8000, 90, 90);
createCannon("left", 38, 8000, 90, 90);

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
