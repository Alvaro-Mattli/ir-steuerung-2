IR.IR_callbackUser(function (message) {
    if (Distanz > 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 72)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let Distanz = 0
for (let index = 0; index < 4; index++) {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
}
Distanz = maqueen.Ultrasonic(PingUnit.Centimeters)
