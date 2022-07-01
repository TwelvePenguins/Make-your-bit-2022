hours = 0
hours = Math.constrain(hours, 0, 24)
if tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P0):
    hours += 1
    if True:
        pass
OLED.init(128, 64)

def on_forever():
    pass

hrs = 0
mins = 0
b = False
def show_time():
    for index in range(4):
        OLED.write_string_new_line("" + str(hrs) + ":" + str(mins))
        for index2 in range(12):
            basic.pause(5000)
        OLED.clear()
    OLED.write_string_new_line("press A to refresh clock")

def on_every_interval():
    global mins, hrs, b
    mins += 1
    if 59 < mins:
        mins = 0
        hrs += 1
    if 23 < hrs:
        hrs = 0
        b = True
loops.every_interval(500, on_every_interval)

