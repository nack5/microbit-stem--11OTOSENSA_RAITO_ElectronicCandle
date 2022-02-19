basic.forever(function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) < 700) {
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
})
