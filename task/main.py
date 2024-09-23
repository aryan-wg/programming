import schedule
import time

from leave_manager import leave_calculator 

# schedule.every(10).days.do(leave_calculator)

def printer():
    print("i ran")

schedule.every(1).seconds.do(leave_calculator)

while 1:
    schedule.run_pending()

print("this is the main function runing")
