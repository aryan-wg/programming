import datetime
import math
import calendar

from datetime import date 
import time
# datetime.timedelta
# 
employees_db = [{
    "name":"Aryan",
    "date_joined":"2024-03-15",
    "leaves":0
    },
    {
    "name":"Shrey",
    "date_joined":"2004-01-20",
    "leaves":25
    },
    {
    "name":"Yash",
    "date_joined":"2024-05-10",
    "leaves":2
    },
    {
    "name":"Dev",
    "date_joined":"2024-01-01",
    "leaves":5
    }]

fn_runs_in_days = 10
probation_period = 90
leaves_per_quarter = 5
def leave_calculator():
    # for employee in employees_db:
    #
    #     date_now = date.fromtimestamp(time.time())
    #     date_joined = date.fromisoformat(employee["date_joined"])
    #
    #     time_employed_obj = date_now-date_joined
    #     days_employed = time_employed_obj.days
    #         
    #     if days_employed <= probation_period:
    #         continue
    #     
    #     else:
    #         # checking if function is running for the first time after employee cleared probation
    #         days_permanent = days_employed - probation_period
    #         if days_permanent < fn_runs_in_days :
    #             
    #
    #
    #     print(time_employed)
    #     print(date_joined)
    #
    days_till_current_quarter_end()

def days_till_current_quarter_end():
    today = date.fromtimestamp(time.time())
    current_month = today.month
    current_quarter = math.ceil(current_month/3)
    last_month_q = current_quarter*3    
    _,last_day_q = calendar.monthrange(today.year,last_month_q)

    print(last_day_q)
    
    # return days

    # days_employed = 
# test cases to cover 
# test for limiting the number of leaves at the start of a new year 
# person just became permanent on the same day the function running
# person just became permanent on the same day the function running and the fist day of quarter 
# function running just before start of a quarter and employee just became permanent (after fn last ran) (add n + leaves calculated for current quarter)
# person is permanent and the function runs = (add n leaves)

