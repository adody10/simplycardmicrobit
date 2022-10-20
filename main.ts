let tel = 0
let gebruiker = ""
input.onButtonPressed(Button.A, function () {
    basic.showNumber(tel)
    serial.writeNumber(tel)
    serial.writeLine("")
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
    gebruiker = serial.readLine()
    if (gebruiker == "test") {
        basic.showIcon(IconNames.Yes)
        serial.writeLine("\"welkom gebruiker\"")
        basic.pause(1000)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(1000)
        tel = tel + 1
        gebruiker = ""
    }
})
