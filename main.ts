function show_time () {
    for (let index = 0; index < 4; index++) {
        OLED.writeStringNewLine(time)
        for (let index = 0; index < 12; index++) {
            basic.pause(5000)
        }
        OLED.clear()
    }
    OLED.writeStringNewLine("press A to refresh clock")
}
let targ_min = 0
let targ_hr = 0
let targ_time = ""
let b = false
let time = ""
let hrs = 0
let mins = 0
OLED.init(128, 64)
loops.everyInterval(500, function () {
    mins += 1
    if (59 < mins) {
        mins = 0
        hrs += 1
    }
    if (23 < hrs) {
        hrs = 0
        b = true
    }
})
basic.forever(function () {
    time = "" + hrs + ":" + mins
    targ_time = "" + targ_hr + ":" + targ_min
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        targ_hr += 1
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        targ_hr += -1
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        targ_min += 5
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        targ_min += -5
    }
})
