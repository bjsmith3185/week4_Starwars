

$( document ).ready(function() {
   
    $(".container-welcome").show();
    $(".container-select-user").hide();
    $(".container-select-enemy").hide();
    $(".container-game").hide();
    $(".container-win").hide();
    $(".container-loss").hide();

    var userSelected = false;
    var userHP;
    var userAttack;
    var usercounter;
    var userImg;
    var otherCharacters;

    var enemyHP;
    var enemyAttack;
    var enemycounter;

    var enemyCount = 3;



    $("#welcome-btn").on("click", function() {
        $(".container-welcome").hide();
        $(".container-select-user").show();
        $(".container-select-enemy").hide();
        $(".container-game").hide();
        $(".container-win").hide();
        $(".container-loss").hide();

    });

// pick users sprite area 

    $(".container-select-user").on("click", ".sprite", function() {
        
        userHP = $(this).attr("data-health");
        userAttack = $(this).attr("data-attack");
        usercounter = $(this).attr("data-counter");
        // userImg = $(this).attr()
        console.log("User HP: " + userHP + "  Attack: " + userAttack + "  counter: " + usercounter);

        $(this).detach().appendTo(".userSprite-game");
        

        otherCharacters = $(".sprite").not(this);
        $(otherCharacters).detach().appendTo(".enemy-list");
                // console.log(otherCharacters); 
        
        $(".container-welcome").hide();
        $(".container-select-user").hide();
        $(".container-select-enemy").show();
        $(".container-game").hide();
        $(".container-win").hide();
        $(".container-loss").hide();
    });

// pick first enemy 

$(".container-select-enemy").on("click", ".sprite",  function() {
        
    enemyHP = $(this).attr("data-health");
    enemyAttack = $(this).attr("data-attack");
    enemycounter = $(this).attr("data-counter");
    
    console.log("Enemy HP: " + enemyHP + "  Attack: " + enemyAttack + "  counter: " + enemycounter);

    $(this).detach().appendTo(".enemySprite-game");
    
    
    $(".container-welcome").hide();
    $(".container-select-user").hide();
    $(".container-select-enemy").hide();
    $(".container-game").show();
    $(".container-win").hide();
    $(".container-loss").hide();
});


    $("#attack").on("click", function() {
        enemyHP -= userAttack;
        userHP -= enemycounter;
        userAttack =+ enemycounter;

        userImg = $(".user .sprite-img").attr("src");
        console.log("this is img src: " + userImg);

        enemyImg = $(".enemy .sprite-img").attr("src");
        console.log("this is enemy img src: " + enemyImg);

        $(".user .info").text("HP: " + userHP);
        $(".enemy .info").text("HP: " + enemyHP);


            // if statements for the game 
        if (userHP < 0) {
            gameOver = true;
            $(".container-loss").show();
            $(".container-game").hide();
            $(".loss-img").attr(enemyImg);

        } else if (enemyHP < 0) {
            nextEnemy = true;
            enemyCount--;

            if (enemyCount === 0) {
                $(".container-win").show()
                $(".container-game").hide();

            } else {
                $(".enemySprite-game").empty();
                $(".container-select-enemy").show();
                $(".container-game").hide();

            }
            
        }
       






    });











    













});

