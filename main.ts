function screen (list2: any[]) {
    for (let i of logged_time) {
        if (i) {
            led.plot(x, y)
        }
        x += 1
        if (x > 4) {
            y += 1
            x = 0
        }
    }
}
function Instructions () {
    OLED.clear()
    OLED.writeStringNewLine("Here are the instructions:")
    OLED.newLine()
    OLED.writeStringNewLine("1) Shake for advice to improve sleep quality.")
    OLED.newLine()
    OLED.writeStringNewLine("2) Press A to show current time.")
    OLED.newLine()
    OLED.writeStringNewLine("2) Press B to set your target sleeping time.")
    OLED.newLine()
    OLED.writeStringNewLine("Use the extended buttons to input your goal time.")
    OLED.newLine()
    OLED.writeStringNewLine("3) Press A+B to log your sleeping time daily.")
    OLED.newLine()
    OLED.writeStringNewLine("4) Look at the Microbit LEDs for the tally. Keep track of your progress!")
    OLED.newLine()
    OLED.writeStringNewLine("5) We will now calibrate your time. Please be as accurate as possible and input the current time!")
    hrs22 = 0
    mins22 = 0
    OLED.writeStringNewLine("" + hrs22 + ":" + ("" + hrs22))
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        hrs22 += 1
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        hrs22 += -1
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        mins22 += 5
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        mins22 += -5
    }
}
input.onButtonPressed(Button.A, function () {
    show_time()
})
function show_time () {
    for (let index = 0; index < 4; index++) {
        OLED.writeStringNewLine("" + hrs22 + ":" + ("" + hrs22))
        for (let index = 0; index < 12; index++) {
            basic.pause(5000)
        }
        OLED.clear()
    }
    OLED.writeStringNewLine("press A to refresh clock")
}
function set_target () {
    OLED.writeStringNewLine(targ_time)
    targ_time = "" + targ_hr + ":" + ("" + targ_min)
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
}
input.onButtonPressed(Button.AB, function () {
    if (hrs22 <= targ_hr) {
        if (mins22 <= targ_min) {
            logged_time.push(true)
        }
    } else {
        logged_time.push(false)
    }
})
input.onButtonPressed(Button.B, function () {
    set_target()
})
input.onGesture(Gesture.Shake, function () {
    let list3: string[] = []
    OLED.clear()
    Advice = [
    "Warm milk: high in tryptophan --> melatonin",
    "Almond milk: has more magnesium",
    "Malted milk: contains minerals that promote sleep",
    "Coconut water: high in magnesium, potassium, vitamin B",
    "Banana Tea/Smoothies: high in magnesium, potassium",
    "Tea: Valerian, Chamomile, Decaffeinated Green",
    "Most importantly, KEEP YOUR PHONE AWAY!",
    "TART CHERRY JUICE: High in melatonin",
    "Remember to meditate.",
    "Read books, journal or draw to relax and reflect."
    ]
    OLED.writeStringNewLine(list3._pickRandom())
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Instructions()
})
let c = false
let Advice: string[] = []
let targ_min = 0
let targ_hr = 0
let targ_time = ""
let mins22 = 0
let hrs22 = 0
let y = 0
let x = 0
let logged_time: boolean[] = []
let b = false
let next_day = false
let time = ""
logged_time = []
OLED.init(128, 64)
OLED.init(128, 64)
OLED.writeStringNewLine("Hello. I am Snooz Babie!")
OLED.newLine()
OLED.writeStringNewLine("I  designed to help you regulate your sleep and sleep early.")
OLED.newLine()
OLED.writeStringNewLine("Please press logo for instructions.")
loops.everyInterval(60000, function () {
    // global mins, hrs, b, x
    mins22 += 1
    if (59 < mins22) {
        mins22 = 0
        hrs22 += 1
    }
    if (23 < hrs22) {
        hrs22 = 0
        c = true
    }
})
