	// Creating singleton object. 
	var obj = new function() { 
		this.name = ""; 
		this.age = ""; 
		this.printInfo = function() { 
			console.log(this.name); 
			console.log(this.age); 
		}; 
	} 
	var obj1 = new function() { 
		this.name = ""; 
		this.age = ""; 
		this.printInfo = function() { 
			console.log(this.name); 
			console.log(this.age); 
		}; 
	} 
// Initializing object. 
obj.name = "Vaishu"; 
obj.age = 20; 
obj1.name = "Hari"; 
obj1.age = 21; 
// Calling method of the object. 
obj.printInfo(); 
obj1.printInfo(); 
