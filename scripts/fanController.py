#!/usr/bin/env python3
import CHIP_IO.GPIO as GPIO     #import the GPIO library
import sqlite3
from sys import argv

path = "scripts/fanState.db"

def updateFanstate(state):
	conn = sqlite3.connect(path)
	c = conn.cursor()
	c.execute('UPDATE fanstate SET state='+str(state))

	conn.commit()
	conn.close()

def getFanstate():
	conn = sqlite3.connect(path)
	c = conn.cursor()

	c.execute('SELECT state FROM fanstate')

	state = c.fetchone()[0]
	conn.close()

	return state

def turnFanON():
	if not getFanstate():
		updateFanstate(1)
		GPIO.setup("CSID0", GPIO.OUT)   #set CSID0 as an output
		GPIO.output("CSID0", GPIO.HIGH) #set CSID0 (Relay) HIGH (On)
		return '1'

def turnFanOFF():
	if getFanstate():
		updateFanstate(0)
		GPIO.setup("CSID0", GPIO.OUT)   #set CSID0 as an output
		GPIO.output("CSID0", GPIO.LOW) #set CSID0 (Relay) LOW (Off)
		return '1'

def reloadFanstate():
	GPIO.setup("CSID0", GPIO.OUT)   #set CSID0 as an output
	
	if getFanstate():
		GPIO.output("CSID0", GPIO.HIGH) #set CSID0 (Relay) HIGH (On)
	else:
		updateFanstate(1)
		GPIO.output("CSID0", GPIO.LOW) #set CSID0 (Relay) LOW (Off)

if __name__ == '__main__':
	arg = argv[-1]
	if (arg == 'on'):
		print(turnFanON())
	elif (arg == 'off'):
		print(turnFanOFF())
	elif (arg == 'get'):
		print(getFanstate())
	elif (arg == 'reload'):
		reloadFanstate()
	else:
		print("Invalid input")
