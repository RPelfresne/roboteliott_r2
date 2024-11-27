radio.onReceivedString(function (receivedString) {
    basic.showIcon(IconNames.SmallHeart)
    if (receivedString == "S") {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (receivedString == "A") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 60)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 60)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else if (receivedString == "R") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Reverse, 50)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo2, 45)
        Kitronik_Robotics_Board.servoWrite(Kitronik_Robotics_Board.Servos.Servo1, 45)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
    } else if (receivedString == "G") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (receivedString == "D") {
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, 50)
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor2, Kitronik_Robotics_Board.MotorDirection.Forward, 20)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else {
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor1)
        Kitronik_Robotics_Board.motorOff(Kitronik_Robotics_Board.Motors.Motor2)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo1)
        Kitronik_Robotics_Board.servoStop(Kitronik_Robotics_Board.Servos.Servo2)
    }
})
radio.setGroup(1)
basic.showIcon(IconNames.Butterfly)
basic.forever(function () {
	
})
