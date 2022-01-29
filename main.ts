basic.forever(function () {
    if (input.temperature() >= 60 || input.lightLevel() >= 100) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("C C C C C C C C ", 500)
            basic.showIcon(IconNames.SmallHeart)
            basic.pause(100)
            basic.showIcon(IconNames.Heart)
        }
        music.stopAllSounds()
    }
    basic.pause(500)
    basic.clearScreen()
})
