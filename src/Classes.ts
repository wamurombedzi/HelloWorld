class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    walk(distance: number) {
        console.log('Hi, my name is ' + this.name + ' and I\'m walking ' + distance + ' meters');
    }
}

let myAnimal = new Animal('Wadza');
myAnimal.walk(10);

class Snake extends Animal{
    constructor(theName: string) {
        super(theName);
    }

    walk(distance: number) {
        console.log('Snakes don\'t really walk');
    }
}