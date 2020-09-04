let Animal = 1
let Food = 2
let Hobby = 3
basic.forever(function () {
    if (Animal == 1) {
        basic.showString("Dog")
    }
    basic.pause(500)
    if (Food == 2) {
        basic.showString("Pizza")
    }
    basic.pause(500)
    if (Hobby == 3) {
        basic.showString("Videogames")
    }
})
