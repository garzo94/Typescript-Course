"use strict";
console.log("it is working");

class Player {
  // static indicates only exists in the class its self is visible only indise the class nobody know about it
  static description = "Player in our game";
  #score = 0; // should be only usefuly inside class not outside
  numLives = 0;
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  // score is procteted but I still can allow get and change value with gettters and setters
  //getters
  get score() {
    return this.#score;
  }
  //setters
  set score(newScore) {
    this.#score = newScore;
  }
  yell() {
    console.log("Heeey");
  }
  loseLife() {
    this.numLives -= 1;
  }
  getScore() {
    console.log(this.#score);
  }
}

const player1 = new Player("Alex", "Garzo");
console.log(player1.score);
player1.score = 325;

class AdminPlayer extends Player {
  constructor(first, last, powers) {
    super();
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer();
