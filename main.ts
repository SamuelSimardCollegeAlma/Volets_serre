let t_air = 0
let c_t_air = 0
let d_t_air = 0
basic.forever(function () {
    if (t_air > c_t_air + d_t_air) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 0)
    } else if (t_air < c_t_air + d_t_air) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P1, 1)
    } else {
    	
    }
    basic.pause(12000)
})
basic.forever(function () {
    while (false) {
        for (let index = 0; index < 4; index++) {
            if (t_air > c_t_air + d_t_air) {
            	
            } else if (t_air < c_t_air + d_t_air) {
                pins.digitalWritePin(DigitalPin.P0, 0)
                basic.pause(500)
                pins.digitalWritePin(DigitalPin.P1, 1)
            } else {
            	
            }
            basic.pause(12000)
        }
    }
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(500)
    pins.digitalWritePin(DigitalPin.P1, 0)
})
