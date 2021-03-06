let str = "String";
str[0] = 0;
str[1] = 1;
console.log(str);
str += '1';
console.log(str);
//JavaScript 中的字符串是永远无法变更的，一旦字符串构造出来，无法用任何方式改变字符串的内容，所以字符串具有值类型的特征。
//变量指向的字符串，计算结果产生的是新的字符串，而非是在原来字符串上进行变更


/*

【考题】
一、JavaScript中的变量类型有哪些？
答：
1、值类型（基本类型）：字符串（string）、数值（number）、布尔值（boolean）、undefined、null  （这5种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值）（ECMAScript 2016新增了一种基本数据类型：symbo）
2、引用类型：对象（Object）、数组（Array）、函数（Function）

二、值类型和引用类型有哪些区别?
1、值类型：
1）占用空间固定，保存在栈中
2）保存与复制的是值本身
3）使用typeof检测数据类型
4）基本类型数据是值类型
2、引用类型
1）占用空间不固定，保存在堆中
2）保存与复制的是指向对象的一个指针
3）使用instanceof检测数据类型
4）使用new()方法构造出的对象是引用型

注1：当一个方法执行时，每个方法都会建立自己的内存栈，在这个方法内定义的变量将会逐个放入这块栈内存里，随着方法的执行结束，这个方法的内存栈也将自然销毁了。因此，所有在方法中定义的变量都是放在栈内存中的；栈中存储的是基础变量以及一些对象的引用变量，基础变量的值是存储在栈中，而引用变量存储在栈中的是指向堆中的数组或者对象的地址，这就是为何修改引用类型总会影响到其他指向这个地址的引用变量。

注2：当我们在程序中创建一个对象时，这个对象将被保存到运行时数据区中，以便反复利用（因为对象的创建成本通常较大），这个运行时数据区就是堆内存。堆内存中的对象不会随方法的结束而销毁，即使方法结束后，这个对象还可能被另一个引用变量所引用（方法的参数传递时很常见），则这个对象依然不会被销毁，只有当一个对象没有任何引用变量引用它时，系统的垃圾回收机制才会在核实的时候回收它。


*/
