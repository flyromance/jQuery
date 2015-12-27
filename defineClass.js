/**
 * Created by Administrator on 2015/12/27.
 *
 * �ࣺ�౾���Ǹ����󣨺����������{xxx}��
 * ��װ�������֯˽�С����з������ԣ�������������ʵ��������е���Щ���Է���
 * ���ุ��֮��̳У�������и�����Щ���Է���
 *
 * �ࣺ���ǳ��������һ�����ߣ�ʹ��������ߣ�����ʵ������
 */
// 1�����캯��ģʽ
function Person(name, age){
    this.name = name;
    this.age = age;
}

Person.prototype = {
    constructor: Person,
    sayName: function(){
        console.log(this.name);
    },
    sayAge: function(){
        console.log(this.age);
    }
}

var person1 = new Person("fanlong", 28);
person1.sayName();

// 2��Object.create()�� IE678��֧��
function defineClass(obj){
    if( Object.create ){
        return Object.create(obj);
    }else{
        var fn = function(){};
        fn.prototype = obj;
        return new fn();
    }
}
var obj = {
    name:"fly",
    age:28,
    sayName: function(){
        console.log(this.name);
    }
}
var obj1 = defineClass(obj);
obj1.sayName();

// 3������
var superClass = {
    // ���������뷽��
    name: "fanlong",
    age: 28,
    sayName: function(){
        console.log(this.name);
    },
    // ����ģʽ��������
    createNew: function(){
        // ˽�������뷽��
        var top = this;
        var national = "china";
        var obj = {};
        obj.sayNation = function(){
            console.log(national);
        }
        obj.sayTop = function(){
            // ���ù�������
            console.log(top.name);
        };
        return obj;
    }
};
var supClass = {
    createNew: function(){
        var obj = superClass.createNew();
        obj.sayHi = function(){
            console.log("hello nihao");
        };
        return obj;
    }
};
var class1 = supClass.createNew();
class1.sayTop();