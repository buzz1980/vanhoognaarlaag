let sprite = 0
input.onButtonPressed(Button.A, function () {
    sprite = 1
    music.playMelody("C5 B A G F E D C ", 120)
})
input.onButtonPressed(Button.B, function () {
	
})
basic.forever(function () {
    if (sprite == 1) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . # .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        basic.pause(500)
        basic.clearScreen()
        sprite = 0
    }
})
