let x = 0
basic.forever(function () {
    if (ModuleWorld_Digital.Collision(ModuleWorld_Digital.mwDigitalNum.P2P3, ModuleWorld_Digital.enCollision.OCollision)) {
        x = 1
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
    } else {
        x = 0
    }
})
basic.forever(function () {
    if (x == 1) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            . # . # .
            `)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # . # .
            # . . . #
            `)
    } else if (x == 0) {
        basic.showIcon(IconNames.Yes)
    }
})
