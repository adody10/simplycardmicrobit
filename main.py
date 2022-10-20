gebruiker = ""

def on_forever():
    global gebruiker
    gebruiker = serial.read_line()
    if gebruiker == "test":
        basic.show_leds("""
            . . . . .
                        . . . . .
                        # . . . #
                        . # . # .
                        . . # . .
        """)
        basic.pause(1000)
        serial.write_line("\"welkom gebruiker\"")
        basic.pause(1000)
basic.forever(on_forever)
