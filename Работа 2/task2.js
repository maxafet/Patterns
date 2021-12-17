class Strategy {
    operation() {}
}

class Add extends Strategy {
    operation(a, b) {
        return a + b;
    }
}

class Sub extends Strategy {
    operation(a, b) {
        return a - b;
    }
}

class Mult extends Strategy {
    operation(a, b) {
        return a * b;
    }
}

class Div extends Strategy {
    operation(a, b) {
        return a / b;
    }
}

class Builder {
    chooseNumber1() {}
    chooseNumber2() {}
    build() {}
}

class Num extends Builder {
    num1 = 0;
    num2 = 0;
    chooseNumber1(a) {
        this.num1 = a;
    }

    chooseNumber2(b) {
        this.num2 = b;
    }

    build() {
        let objop1 = new Add();
        console.log(objop1.operation(obj.num1, obj.num2));
        let objop2 = new Sub();
        console.log(objop2.operation(obj.num1, obj.num2));
        let objop3 = new Mult();
        console.log(objop3.operation(obj.num1, obj.num2));
        let objop4 = new Div();
        console.log(objop4.operation(obj.num1, obj.num2));
    }
}

let obj = new Num();
obj.chooseNumber1(1);
obj.chooseNumber2(2);
obj.build();
