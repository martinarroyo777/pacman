let world = document.getElementById("world");
    // internal model of game(board)
    let map = [
        [1,1,1,1,1],
        [1,2,2,2,1],
        [1,3,1,3,1],
        [1,2,5,2,1],
        [1,2,2,3,1],
        [1,1,1,1,1]     
        ];
    // keep track of pacman position
    let pacman = {
        x:2,
        y:3
    };
        /*
            Draws our gameboard on screen based on map
        */
    const drawWorld = (map) => {
        world.innerHTML = ""; // clear the board each time this function is called
        for (let y=0; y < map.length; y++){
            for (let x=0; x < map[y].length; x++){
                switch(map[y][x]){
                /*
                    1 = wall
                    2 = ground
                    3 = coin
                    5 = Pacman
                                    */
                    case 1:
                        world.innerHTML += "<div class='wall'></div>"
                        break;
                    case 2:
                        world.innerHTML += "<div class='ground'></div>"
                        break;
                    case 3:
                        world.innerHTML += "<div class='coin'></div>"
                        break;
                    case 5:
                        world.innerHTML += "<div class='pacman'></div>"
                        break;
                    default:
                        break;
                }
            }
            world.innerHTML += "<br>";
        }
    };

    // draw gameboard
    drawWorld(map);

    document.onkeydown = (e) => {
        /*
        ArrowUp : 38
        ArrowRight : 39
        ArrowDown : 40
        ArrowLeft : 37
        */
        let pacmanPosition = map[pacman.y][pacman.x]; // shows the current position of pacman
        switch(e.keyCode){
            // Up 
            case 38:
                moveUp(pacmanPosition);
                break;
            
            // Right
            case 39: 
                moveRight(pacmanPosition);
                break;
            
            // Down
            case 40:
                moveDown(pacmanPosition); 
                break;
            
            // Left
            case 37: 
                moveLeft(pacmanPosition);
                console.log(map[pacman.y][pacman.x-1]);
                break;
            
            default:
                break;  
        }
    }

    /*
        Functions for moving
    */

    // Left
    const moveLeft = (pacmanPosition) => {
        // Check what item is at the location we want to move to
       let destination = map[pacman.y][pacman.x-1];
       //console.log(destination);
       // Collision detection: Make the move as long as we we don't go past the top of the array or go into a wall
       if (destination != 1 && pacman.x-1 >= 0){
            // change pacman's relative position
            pacman.x -= 1;
            // set the item at the new position to pacman
            map[pacman.y][pacman.x] = 5;
            // set the current position to be ground
            // make the old pacman position a ground block
            map[pacman.y][pacman.x+1] = 2;              
       }
       //console.log(pacmanPosition)
       drawWorld(map); // redraw the board
    };


   // Up
   const moveUp = (pacmanPosition) => {
       // Check what item is at the location we want to move to
       let destination = map[pacman.y-1][pacman.x];
       //console.log(destination);
       // Collision detection: Make the move as long as we we don't go past the top of the array or go into a wall
       if (destination != 1 && pacman.y-1 >= 0){
            // change pacman's relative position
            pacman.y -= 1;
            // set the item at the new position to pacman
            map[pacman.y][pacman.x] = 5;
            // set the current position to be ground
            // make the old pacman position a ground block
            map[pacman.y+1][pacman.x] = 2;              
       }
       //console.log(pacmanPosition)
       drawWorld(map); // redraw the board
   };

   // Right
   const moveRight = (pacmanPosition) => {
        // Check what item is at the location we want to move to
       let destination = map[pacman.y][pacman.x+1];
       //console.log(destination);
       // Collision detection: Make the move as long as we we don't go past the top of the array or go into a wall
       if (destination != 1 && pacman.x+1 < map.length){
            // change pacman's relative position
            pacman.x += 1;
            // set the item at the new position to pacman
            map[pacman.y][pacman.x] = 5;
            // set the current position to be ground
            // make the old pacman position a ground block
            map[pacman.y][pacman.x-1] = 2;              
       }
       //console.log(pacmanPosition)
       drawWorld(map); // redraw the board
    };

   // Down 
   const moveDown = (pacmanPosition) => {
       // Check what item is at the location we want to move to
       let destination = map[pacman.y+1][pacman.x];
       //console.log(destination);
       // Collision detection: Make the move as long as we we don't go past the bottom of the array or go into a wall
       if (destination != 1 && pacman.y-1 < map.length){
            // change pacman's relative position
            pacman.y += 1;
            // set the item at the new position to pacman
            map[pacman.y][pacman.x] = 5;
            // set the current position to be ground
            // make the old pacman position a ground block
            map[pacman.y-1][pacman.x] = 2;              
       }
       //console.log(pacmanPosition)
       drawWorld(map); // redraw the board
   };

   // Reset board
   const reset = () => {
       // set map back to default state
       map = [
        [1,1,1,1,1],
        [1,2,2,2,1],
        [1,3,1,3,1],
        [1,2,5,2,1],
        [1,2,2,3,1],
        [1,1,1,1,1]     
        ];
       drawWorld(map);
   }