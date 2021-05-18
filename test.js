//callback with a function
var me={
    name:'MH Imon',
    age:25,
    email:'imonmahamud495@gmail.com'
};
function printMySelf(person,callback){
    console.log('Name :'+person.name+' ('+person.age+')');
    
    if(person.age>=18){
        callback(person.email)
    }else{
        console.log('You are too little');
        
    }
}
printMySelf(me,function(email){
    console.log('Email sent to :'+email);
    
})
