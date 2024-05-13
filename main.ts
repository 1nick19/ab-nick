basic.forever(function () {
    if (input.buttonIsPressed(Button.B)) {
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else {
        basic.clearScreen()
        if (input.buttonIsPressed(Button.A)) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                # . . . .
                `)
        } else {
            basic.clearScreen()
        }
    }
})
