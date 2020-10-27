function makeWolvesWithConstructor() {
    //hide instantiation buttons
    document.getElementById("with").style.display = "none"; //"block"
    document.getElementById("without").style.display = "none"; //"block"

    //create wolf 1
    let wolf1 = new WolfConstructor(document.getElementById("wolf1"), 100, 200);
    //display it
    wolf1.display();
    //store it in the array
    wolves.push(wolf1);

    //create wolf 2
    let wolf2 = new WolfConstructor(document.getElementById("wolf2"), 100, 500);
    //display it
    wolf2.display();
    //store it in the array
    wolves.push(wolf2);


}