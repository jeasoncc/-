## this 
###关键字大概是JS编程最令人头疼的关键字之一了，困惑的隐形变量传递。

this关键字的核心原理讲起来其实并不复杂：**this 指向最终调用对象，this无法在编写时被确定，只有在运行时才能被确定。**
    
    function foo() {
   	 console.log(this)
    }
    
    foo() // window
    
    var bar = {foo}
    
    bar.foo() //bar

我们想要明白 this的具体指向时，必须要牢记的一点是**this完全取决于被调用的位置**。只有仔细的分析调用位置才能回答this到底指向哪里。
