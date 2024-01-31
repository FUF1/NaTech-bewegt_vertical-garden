let _4Digit = grove.createDisplay(DigitalPin.C16, DigitalPin.C17)
_4Digit.set(7)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P3)) {
        images.iconImage(IconNames.SmallHeart).showImage(0)
        control.waitMicros(250000)
        images.iconImage(IconNames.Heart).showImage(0)
        _4Digit.show(pins.analogReadPin(AnalogPin.P2))
        control.waitMicros(250000)
        if (pins.analogReadPin(AnalogPin.P2) < 150) {
            pins.digitalWritePin(DigitalPin.P0, 1)
        } else {
            pins.digitalWritePin(DigitalPin.P0, 0)
        }
    } else {
        images.iconImage(IconNames.No).showImage(0)
    }
})
