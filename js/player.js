class Player{
    constructor(){
        this.index=null,
        this.name="";
        this.distance=0
    }
    getCount(){
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on('value', (data)=>{
            playerCount=data.val();
        })
    }
    update(myName){
        var playerIndex = "players/player"+playerCount;
        database.ref(playerIndex).update({
            name:myName
        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }

}