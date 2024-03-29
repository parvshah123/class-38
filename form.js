class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton('play')
        this.greeting = createElement('h2')
    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement('h2')
        this.title.html('carRacingGame')
        this.title.position(displayWidth/2-50,0)
        var input = createInput('name')
        this.input.position(displayWidth/2-40,displayHeight/2-80)
        var button = createButton('play')
        this.button.position(displayWidth/2+30,displayHeight/2)
        var greeting = createElement('h3')
        this.button.mousePressed(function(){
            this.input.hide()
            this.button.hide()
            var name = input.value()
            playerCount+=1
            player.update(name)
            player.updateCount(playerCount)
            this.greeting.html("hello"+name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })
    }

}