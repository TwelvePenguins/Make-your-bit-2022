def screen(list2: List[any]):
   global x, y
   for i in logged_time:
       if i:
           led.plot(x, y)
       x += 1
       if x > 4:
           y += 1
           x = 0
def Instructions():
   global hrs22, mins22
   OLED.clear()
   OLED.write_string_new_line("Here are the instructions:")
   OLED.new_line()
   OLED.write_string_new_line("1) Shake for advice to improve sleep quality.")
   OLED.new_line()
   OLED.write_string_new_line("2) Press A to show current time.")
   OLED.new_line()
   OLED.write_string_new_line("2) Press B to set your target sleeping time.")
   OLED.new_line()
   OLED.write_string_new_line("Use the extended buttons to input your goal time.")
   OLED.new_line()
   OLED.write_string_new_line("3) Press A+B to log your sleeping time daily.")
   OLED.new_line()
   OLED.write_string_new_line("4) Look at the Microbit LEDs for the tally. Keep track of your progress!")
   OLED.new_line()
   OLED.write_string_new_line("5) We will now calibrate your time. Please be as accurate as possible and input the current time!")
   hrs22 = 0
   mins22 = 0
   OLED.write_string_new_line("" + str(hrs22) + ":" + ("" + str(hrs22)))
   if tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P0):
       hrs22 += 1
   if tinkercademy.ad_keyboard(ADKeys.B, AnalogPin.P0):
       hrs22 += -1
   if tinkercademy.ad_keyboard(ADKeys.C, AnalogPin.P0):
       mins22 += 5
   if tinkercademy.ad_keyboard(ADKeys.E, AnalogPin.P0):
       mins22 += -5
 
def on_button_pressed_a():
   show_time()
input.on_button_pressed(Button.A, on_button_pressed_a)
 
def show_time():
   for index in range(4):
       OLED.write_string_new_line("" + str(hrs22) + ":" + ("" + str(hrs22)))
       for index2 in range(12):
           basic.pause(5000)
       OLED.clear()
   OLED.write_string_new_line("press A to refresh clock")
def set_target():
   global targ_time, targ_hr, targ_min
   OLED.write_string_new_line(targ_time)
   targ_time = "" + str(targ_hr) + ":" + ("" + str(targ_min))
   if tinkercademy.ad_keyboard(ADKeys.A, AnalogPin.P0):
       targ_hr += 1
   if tinkercademy.ad_keyboard(ADKeys.B, AnalogPin.P0):
       targ_hr += -1
   if tinkercademy.ad_keyboard(ADKeys.C, AnalogPin.P0):
       targ_min += 5
   if tinkercademy.ad_keyboard(ADKeys.E, AnalogPin.P0):
       targ_min += -5
 
def on_button_pressed_ab():
   if hrs22 <= targ_hr:
       if mins22 <= targ_min:
           logged_time.append(True)
   else:
       logged_time.append(False)
input.on_button_pressed(Button.AB, on_button_pressed_ab)
 
def on_button_pressed_b():
   set_target()
input.on_button_pressed(Button.B, on_button_pressed_b)
 
def on_gesture_shake():
   global Advice
   list3: List[str] = []
   OLED.clear()
   Advice = ["Warm milk: high in tryptophan --> melatonin",
       "Almond milk: has more magnesium",
       "Malted milk: contains minerals that promote sleep",
       "Coconut water: high in magnesium, potassium, vitamin B",
       "Banana Tea/Smoothies: high in magnesium, potassium",
       "Tea: Valerian, Chamomile, Decaffeinated Green",
       "Most importantly, KEEP YOUR PHONE AWAY!",
       "TART CHERRY JUICE: High in melatonin",
       "Remember to meditate.",
       "Read books, journal or draw to relax and reflect."]
   OLED.write_string_new_line(list3._pick_random())
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
 
def on_logo_pressed():
   Instructions()
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)
 
c = False
Advice: List[str] = []
targ_min = 0
targ_hr = 0
targ_time = ""
mins22 = 0
hrs22 = 0
y = 0
x = 0
logged_time: List[bool] = []
time = ""
next_day = False
b = False
logged_time = []
OLED.init(128, 64)
OLED.init(128, 64)
OLED.write_string_new_line("Hello. I am Snooz Babie!")
OLED.new_line()
OLED.write_string_new_line("I  designed to help you regulate your sleep and sleep early.")
OLED.new_line()
OLED.write_string_new_line("Please press logo for instructions.")
 
def on_every_interval():
   global mins22, hrs22, c
   # global mins, hrs, b, x
   mins22 += 1
   if 59 < mins22:
       mins22 = 0
       hrs22 += 1
   if 23 < hrs22:
       hrs22 = 0
       c = True
loops.every_interval(60000, on_every_interval)