const myCar2 = {
    maxSpeed: 50,
    driver: 'Andrzej',
    drive: function (speed, time) {
        console.log(speed * time);
    },
    logDriver: function() {
        console.log('Driver name is ' + this.driver);
    },
};

console.log(myCar2.drive(50, 3));
myCar2.logDriver();
