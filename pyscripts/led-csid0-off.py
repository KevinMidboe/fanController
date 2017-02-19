#!/usr/bin/env python3
import CHIP_IO.GPIO as GPIO     #import the GPIO library

GPIO.setup("CSID0", GPIO.OUT)   #set CSID0 as an output
GPIO.output("CSID0", GPIO.LOW) #set CSID0 (LED) LOW (Off)

f = open( 'public/state.txt', 'w' )
f.write('off')
f.close()
