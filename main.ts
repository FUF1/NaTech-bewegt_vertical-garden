// "4Digit" ist das kleine Zahlendisplay auf der Box. Diese beiden Blöcke sind nur dazu da, dass am Anfang dem Calliope mitgeteilt wird, wie dieses Display funktionieren soll.
let _4Digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4Digit.set(7)
basic.forever(function () {
    // "P3" ist der mit "Regelung" beschriftete Schalter. Das Programm in diesem grünen "Wenn-Block" wird solange wiederholt, wie dieser Schalter eingeschaltet ist.
    if (input.pinIsPressed(TouchPin.P3)) {
        // Zeigt auf dem Calliope-Display ein Herz, damit klar ist, dass der automatische Bewässerungsmodus aktiviert ist.
        images.iconImage(IconNames.SmallHeart).showImage(0)
        // Wartezeit: 1 Sekunde = 1'000'000 Mikrosekunden (1 Million Mikrosekunden)
        control.waitMicros(250000)
        images.iconImage(IconNames.Heart).showImage(0)
        // P2 ist ein Feuchtigkeitssensor.
        // Dieser Block zeigt die gemessenen Feuchtigkeitswerte als Zahl auf dem Zahlendisplay
        _4Digit.show(pins.analogReadPin(AnalogPin.P2))
        control.waitMicros(250000)
        // Wenn die Feuchtigkeit in der Erde zu tief ist, soll das Wasserventil (P0 = Wasserventil) solange geöffnet werden, bis die Erde wieder feucht genug ist.
        if (pins.analogReadPin(AnalogPin.P2) < 150) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    } else {
        // Zeigt auf dem Calliope-Display ein Kreuz, damit klar ist, dass der automatische Bewässerungsmodus nicht eingeschaltet ist.
        images.iconImage(IconNames.No).showImage(0)
    }
})
