const myCar = {
    maxSpeed: 50,
    driver: 'Andrzej',
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDriver: function() {
        console.log('Driver name is ' + this.driver);
    },
};

const Car = function (maxSpeed, driver) {
    this.maxSpeed = maxSpeed;
    this.driver = driver;
    
};


