//Functional pattern
var human = function(name) {
    var that = {};

    that.name = name;
    that.gender = '';
    that.stateOfBirth = 'Hyderabad';
    that.sayGender = function () {
        console.log(that.name + ' is a ' + that.gender);
    };
    that.sayState = function () {
        console.log(that.name + ' was born in ' + that.stateOfBirth);
    };

    return that;
}

var male = function (name) {
    var that = human(name);
    that.gender = 'Male';
    return that;
}

var female = function (name) {
    var that = human(name);
    that.gender = 'Female';
    return that;
}

var bunty = male('Bunty');//creating an object and returning its value
var vaishu = female('Vaishu');

vaishu.sayGender(); // Bunty says my gender is Male
bunty.sayGender(); // Vaishu says my gender is Female

vaishu.stateOfBirth = 'Mumbai';
vaishu.sayState(); // vaishu was born on Mumbai
bunty.sayState(); // Bunty was born on Hyderabad