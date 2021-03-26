class Game{
    constructor(){

    }

    getState(){
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gameState=data.val();
        } )
    }

    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }

    async start(){
        if(gameState===0){
            player=new Player();
            var gameRef = await database.ref('playerCount').once('value');
            if(gameRef.exists()){
                playerCount= gameRef.val();
                player.getCount();
            }
            form=new Form();
            form.display();
        }
    }
    play(){
        textSize(20);
        form.hide();
        text("Game Start", 120, 100);
    }
}