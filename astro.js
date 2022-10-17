function randomNum () {
    let randNum = Math.random() * 5;
    switch (randNum) {
        case 0 : console.log("Your are in Mercury")
        break;
        case 1 : console.log("Your are in Mars")
        break;
        case 2 : console.log("Your are in Earth")
        break;
        case 3 : console.log("Your are in Venus")
        break;
        default : console.log("Your are in Saturn")
        break;
    }
}