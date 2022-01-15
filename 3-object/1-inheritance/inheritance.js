const object = {
    firstName : 'Jitesh',
    city: 'Bengaluru',
    getDetail : function getDetail () {
        console.log(this);
        console.log(this.firstName + " from " + this.city);
    },
    arrow : () => {
        console.log(this);
    } 

}

let object2 = {
    firstName : "Sachin"
}

object2.__proto__ = object;

object2.getDetail();
object2.arrow() 
