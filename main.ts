function Motor_Slagboom_ingang_dicht () {
    neZha.setMotorSpeed(neZha.MotorList.M2, -25)
    basic.pause(200)
    neZha.stopMotor(neZha.MotorList.M2)
}
input.onButtonPressed(Button.A, function () {
    Motor_slagboom_uitgang_open()
    basic.pause(1000)
    Motor_slagboom_uitgang_dicht()
})
function Motor_slagboom_uitgang_open () {
    neZha.setMotorSpeed(neZha.MotorList.M1, 25)
    basic.pause(200)
    neZha.stopMotor(neZha.MotorList.M1)
}
input.onButtonPressed(Button.B, function () {
    Motor_Slagboom_ingang_open()
    basic.pause(1000)
    Motor_Slagboom_ingang_dicht()
})
function Motor_slagboom_uitgang_dicht () {
    neZha.setMotorSpeed(neZha.MotorList.M1, -25)
    basic.pause(200)
    neZha.stopMotor(neZha.MotorList.M1)
}
function Motor_Slagboom_ingang_open () {
    neZha.setMotorSpeed(neZha.MotorList.M2, 25)
    basic.pause(500)
    neZha.stopMotor(neZha.MotorList.M2)
}
