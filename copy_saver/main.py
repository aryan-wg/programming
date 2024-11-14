import pyperclip
import time

file_name = input("What do you want to name the file ?? \n")
prev = pyperclip.paste()
while True:
    file = open(file_name+".txt","a")
    time.sleep(1)
    clipboard_data = pyperclip.paste()
    if prev == clipboard_data:
        continue
    else:
        file.write(clipboard_data)
        prev = clipboard_data
    file.close()



