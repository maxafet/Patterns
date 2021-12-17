class Iterator {
    constructor(cs) {
        this.index = 0;
        this.elements = ["One", "Two", "Three", "Four", "Five"];
        if (cs == 1) {
            this.index = this.elements.length - 1;
        }
    }

    next() {
        return this.elements[this.index++];
    }

    hasNext() {
        return this.index < this.elements.length;
    }

    nextBack() {
        return this.elements[this.index--];
    }

    hasNextBack() {
        return this.index > -1;
    }
};

class Strategy {
    cs = Math.floor(Math.random() * 10 % 2);

    chooseStrategy() {
        let coll = new Iterator(this.cs);

        switch(this.cs) {
            case 0:
                while (coll.hasNext()) {
                    console.log(coll.next());
                }
                break;
            case 1:
                while (coll.hasNextBack()) {
                    console.log(coll.nextBack());
                }
                break;
        }
    }
}

let strat = new Strategy();
strat.chooseStrategy();
