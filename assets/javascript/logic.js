let p1 = {
    userName: String,
    rpsMove: String,
    picked: Boolean,
    wins: Number,
    losses: Number,
    ties: Number,
}

let p2 = {
    userName: String,
    rpsMove: String,
    picked: Boolean,
    wins: Number,
    losses: Number,
    ties: Number,
}


const config = {

}

const rock = "r";
const scissors = "s";
const paper = "p";

firebase.initializeApp(config);

let database = firebase.database();

$("#player1").on("click", establishPlayerOne)
$("#player2").on("click", establishPlayerTwo)






if (p1.rpsMove === rock && p2.rpsMove === scissors ||
    p1.rpsMove === scissors && p2.rpsMove === paper ||
    p1.rpsMove === paper && p2.rpsMove === rock){
        console.log("p1 win")
    }
    else {
        console.log("p2 win")
    }

