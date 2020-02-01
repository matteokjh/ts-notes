// 类 Class

// 抽象类     不能直接实例化，用作被子类继承
abstract class Animal {
    abstract makeSound(): void // 抽象方法必须在子类中被重写
    move(): void {
        console.log('moving')
    }
}
// const animal = new Animal() // error

class Cat extends Animal {
    makeSound() {
        console.log('meow meow')
    }
}
const cat = new Cat()
cat.makeSound() // meow meow
cat.move() // moving

// 访问限定符   默认 public
class Car {
    public run() { // 默认
        console.log('run')
    }
    private repair() { // 只能被类中方法调用
        console.log('repair')
    }
    protected setLogo() { // 只能被类内部以及子类访问
        console.log('logo')
    }
}
class Honda extends Car {
    init() {
        this.setLogo()
    }
}
const car = new Car()
car.run() // run
// car.repair() // error
// car.setLogo() // error
const car2 = new Honda()
car2.init() // logo

