function makeWolvesNoConstructor() {
    //hide instantiation buttons
    document.getElementById("with").style.display = "none"; //"block"
    document.getElementById("without").style.display = "none"; //"block"
    //create wolf 1
    let wolf1 = new Wolf();
    wolf1.htmlElement = document.getElementById("wolf1");
    wolf1.id = wolf1.htmlElement.id;
    wolf1.left = 100;
    wolf1.top = 200;
    //display it
    wolf1.htmlElement.style.left = wolf1.left + "px";
    wolf1.htmlElement.style.top = wolf1.top + "px";
    //store it in the array
    wolves.push(wolf1);

    let wolf2 = new Wolf();
    wolf2.htmlElement = document.getElementById("wolf2");
    wolf2.id = wolf2.htmlElement.id;
    wolf2.left = 100;
    wolf2.top = 500;
    //display
    wolf2.htmlElement.style.left = wolf2.left + "px";
    wolf2.htmlElement.style.top = wolf2.top + "px";
    //store it in the array
    wolves.push(wolf2);

}