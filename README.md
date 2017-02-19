# Connected SMART Curtains
### (API for fanController)

## the Idea
Since I was young I have always been obsessed with motors. Using motors to control crazy mondane things. *Not because it was hard, but because I could.* So to continue that trend I wanted to be able to control me two roller curtains over my bed. I started prototyping with a Arduino and a couple servos and I now have it up and running. 
>A little caviate. It is working, but only the one curtain can be lifted again, it has no automation and no wireless connectivity. Needs to be done!

I have rewritten the software several times, and just landed on what just worked so I could get back to procrastinating before my exams. You can check the Arduino code out, I will make sure to comment it well.

## Install
First you need to download node, can be found at here.
Next clone or fork this project to your computer. To start we first need to add all our node modules
```unix  
    $ npm install
```
Now that we have all our components for our node project we can start the server.
```unix
    $ node server.js
```
This will print out the IP and port the website can be reached at. Go to a webbrowser and go to the address printed. You may need to allow that port through your firewall if you have it activated. 

If you want the server to launch at login to the following:
```unix
    $ EXPORT="/usr/share/init.d" +x node /home/{user}/curtains
```


## Parts list
Under is a list of all the parts I have yet used for this projects. Some I have links to, others I have just found laying around or made out of some random junk. If there are any questions about the items please send me a email. [MAIL](https://google.com)

Part | Part name | Usage | Link
---|---|---|---
Stepper motor | Motor: 28BYJ-48 Board: ULN2003 | Rotate curtain | [ebay](https://goo.gl/tHQHP3 "ebay.com Stepper Motors")
Arduino | Uno | Micro controller | 
Ethernet cable | 1.4 meters | Lines from switches to micro controller | [ebay](https://goo.gl/EOS7BO "ebay.com 200' Cat6")
Housing | Medium | Contains the electronics | radio
Curtains | IKEA | The curtains

## Development forwards
**Items still want to add or change:**
* ~~Working prototype~~
* Raspberry Pi
* Seperate powersupplies
* Internet Connectivity 

## Useful reading material
Controlling 28BYJ-48 with python on RPi - [link](https://defendtheplanet.net/2014/05/04/controlling-a-stepper-motor-28byi-48-with-a-raspberry-pi/)
Stepping up GPIO from 3.3v to 5v - [link](https://www.raspberrypi.org/forums/viewtopic.php?t=40540&p=331220)


I will be switching to a C.H.I.P or a Raspberry Pi gen 2 B+ with a WIFI dongle. 

The idea is to have a electronically controlled curtains. First time around I am using an Arduino and small stepper motors inserted in the ends of the curtains. I have a switch panel to control the power and direction of the *curtainbot*. I'm using a single powersource for the arduino and both stepper motors. 
