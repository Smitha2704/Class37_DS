class Form{
    constructor(){
        this.input = createInput("Name");
        this.button = createButton("Play")
        this.greeting=createElement("h3")
    }

    display(){
        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(480, 0);      

        this.input.position(420, 150);
        this.button.position(750, 250);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();

            var name = this.input.value();
            player.getCount();
            
            playerCount+=1;
            player.index=playerCount;
            player.update(name);
            console.log(playerCount);
            player.updateCount(player.index);
            
            this.greeting.html("Hello " + name);
            this.greeting.position(420,150);
        })
    }
}