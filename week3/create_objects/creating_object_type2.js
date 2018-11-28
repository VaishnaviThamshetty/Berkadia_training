    // Creating Object. 
    //Using object Literals
    var obj = { 
        name : "", 
        age : "", 
        printInfo : function() { 
            console.log(this.name); 
            console.log(this.age); 
        } 
    } 
    var obj1 = { 
        name : "", 
        age : "", 
        printInfo : function() { 
            console.log(this.name); 
            console.log(this.age); 
        } 
    } 
  
// Initializing the parameters. 
obj.name = "Vaishu"; 
obj.age = 20; 
obj1.name ="Anjali"; 
obj1.age = 21; 
  
// Using method of the object. 
obj.printInfo(); 
obj1.printInfo(); 
