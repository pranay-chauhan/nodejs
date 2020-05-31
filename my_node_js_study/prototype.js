var emp = function(){
    this.name ='Moahan';
    this.sal=6000,
    this.age = 34
}
emp.prototype={
    desc: 'TL',
    getName:function(){
        return this.age  + this.desc
    }
}
var emp1 = new emp;
console.log(emp1.desc)

