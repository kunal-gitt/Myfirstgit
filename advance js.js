//this in global scope

this.table  = "window table";
console.log(window.table);


//this inside object and method 

this.garage = {

    table:"garage table",
    cleantable(){
        console.log(`cleaning ${this.table}`);
    }
}

console.log(this.garage.table);




let johnsroom = {

    table:"john table",
    cleantable(){
        console.log(`cleaning ${this.table}`);
    }
}

johnsroom.cleantable();
this.garage.cleantable();


//this inside a function and call function to rescue and this inside inner function

this.table  = "window table";

const cleantable = function(soap){

    const innerfunction = (_soap) => {
    console.log(`cleaning ${this.table} using ${soap}`);

    }
    innerfunction(soap);
};


cleantable.call(this, "new soap");

//this inside constructor


let createroom = function(name){

    this.table = `${name} table`
}

createroom.prototype.cleantable = function(soap){

    console.log(`cleaning ${this.table}` );  
}

const johnroom = new createroom('john');

johnroom.cleantable();


// this inside class

class createRoom {

      constructor(name){
        this.table = `${name} table`
      }

      cleantable(soap){
        
        console.log(`cleaning ${this.table}` );

      }


}

const jill = new createRoom("jill");

jill.cleantable();



// Deliverable 3 


class Student {

      static count= 0; 

    constructor(name , age, phonenumber , boardmarks){

        this.name = name;
        this.age = age;
        this.phonenumber = phonenumber;
        this.boardmarks = boardmarks;
        Student.count++;

        
        
    }

    //deliverable 4

    eligible(){

         if(this.boardmarks > 40){
            console.log("Eligible");
         }
         else{

            console.log("not eligible");
         }
    }

}


    const s1 = new Student("kunal", 23 , 98894548 , 50);
    const s2 = new Student("rishab", 21 ,9989184 , 60);
    const s3 = new Student("kartik", 20 , 9811548 , 30);
    const s4 = new Student("nihal", 24 , 848751515 , 20);
    const s5 = new Student("kiran", 27 , 4554854 , 90);



    s4.eligible();
    console.log(Student.count);


    
    
    
