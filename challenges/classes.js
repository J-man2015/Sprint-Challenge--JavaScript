// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker2 {
    constructor(properties){
    this.length=properties.length;
    this.width=properties.width;
    this.height=properties.height;
    }
volume() {
    return `${this.length}` * `${this.width}` * `${this.height}`
}

surfaceArea() {
    return 2 * (`${this.length}` * `${this.width}` + `${this.length}` * `${this.height}` + `${this.width}` * `${this.height}`)
};

}


   

const cuboid2= new CuboidMaker2({
        length: 4,
        width: 5,
        height: 5
});


// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker2{
    constructor(properties){
        super(properties);

    }
    volume(){
        return `${this.height}` * `${this.width}` * `${this.length}`
    };
    surfaceArea(){
        return 6 * Math.pow(`${this.height}`,2) 
    }
}

const cube= new CubeMaker({
    length:5,
    width:5,
    height:5
});

const cube2= new CubeMaker({
    length:7,
    width:7,
    height:7
});
console.log(cube.volume()); // 125 cm^3
console.log(cube.surfaceArea()); //150 cm^2
console.log(cube2.volume());
console.log(cube2.surfaceArea());