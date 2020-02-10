const result = {
    name: "Anderson",
    privileges: ["one", "two", "three"],
    startDate: new Date() // As seen like this, inheritAll have to follow all type's properties which it inherited
};
function add(a, b) {
    // Then, I have to set the concrete situation about whether a and b are string or number by using optional condition called type guard
    if (typeof a === "number" && typeof b === "number") {
        // in this case, "if(typeof)" is used as type guard to check the type
        return a + b;
    }
    a.toString() + b.toString();
}
const insideInfo = {
    name: "Does it work?",
    order: ["Yes, definitely"],
    date: new Date()
};
function printThings(who) {
    console.log(`Name : ${who.name}`); // There is no problem because two different types have the same property "name" so it is intersected
    if ("order" in who) {
        // "in" allows me to check if there is "order" property in material1|material2 <------ This is another type guard
        console.log(`Orders : ${who.order}`);
    }
    if ("date" in who) {
        console.log("Date :" + who.date);
    } //
}
printThings(insideInfo); // it works
printThings({ name: "Though I want to follow mateiral2", date: new Date() }); // Then, it draws result about material2
// And I can use union type in classes
class type1 {
    function1() {
        console.log("It is yours");
    }
}
class type2 {
    function1(a) {
        console.log(`It is yours ${a}`);
    }
    function2(b, c) {
        console.log(`It is answer ${Math.random() * (b - c) +
            Math.floor(5.3) +
            Math.ceil(5.7)}`);
    }
}
const v1 = new type1();
const v2 = new type2();
function useTypeInherit(parameters) {
    parameters.function1("If the name of function is the same, unless I put some condition, it will follow the thing which have a parameter");
    if ("function2" in parameters) {
        //Then, if I set type gaurd, it works in this optional condition.
        parameters.function2(50, 20);
    }
    if (parameters instanceof type2) {
        //I can also express the same syntax above by using "instanceof". In this case, it means "If paramters are created based on type2"/ const v2 = new type2
        parameters.function2(3, 2);
    }
}
useTypeInherit(v1); // just 'it is yours'
useTypeInherit(v2); // 'it is yours If the name........' 'random number'
function moveAnimal(animal) {
    let speed;
    switch (animal.breed // switch is a container which holds every case that could be checked. Accroding to parameter, in this case "animal.breed", it select the right case.
    ) {
        case "Eagle":
            speed = animal.flyingSpeed;
            break; // it means a period.
        case "Black horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log(`Moving at speed : ${speed}km/h`);
}
moveAnimal({ breed: "Eagle", flyingSpeed: 23 }); // Moving at speed : 23km/h
//# sourceMappingURL=project10.js.map