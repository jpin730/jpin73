const timeOnLight = 300 // ms
const timePerColor = 400 // ms
const timeToNextLevel = 500 // ms
const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const yellow = document.getElementById('yellow')
const startButton = document.getElementById('startButton')
const LAST_LEVEL = 5

class Game {
  constructor() {
    this.initialize = this.initialize.bind(this)
    this.showLevel = this.showLevel.bind(this)
    this.initialize()
    this.generateSequence()
    this.showLevel()
    // this.nextLevel()
  }

  initialize() {
    this.nextLevel = this.nextLevel.bind(this)
    this.clickedColor = this.clickedColor.bind(this)
    this.toggleStartButton()
    this.level = 1
    this.colors = {
      red, // red: red
      green,
      blue,
      yellow
    }
  }

  toggleStartButton() {
    if (startButton.classList.contains('hide')) {
      startButton.classList.remove('hide')
    } else {
      startButton.classList.add('hide')
    }
  }

  generateSequence() {
    this.sequence = new Array(LAST_LEVEL).fill(0).map(eachSequenceArrayElement => Math.floor(Math.random() * 4))
  }

  nextLevel() {
    this.score = 0
    this.doSequence()
    this.addClickEvents()
  }

  numberToColor(number) {
    switch (number) {
      case 0:
        return 'red'
      case 1:
        return 'green'
      case 2:
        return 'blue'
      case 3:
        return 'yellow'
    }
  }

  colorToNumber(color) {
    switch (color) {
      case 'red':
        return 0
      case 'green':
        return 1
      case 'blue':
        return 2
      case 'yellow':
        return 3
    }
  }

  doSequence() {
    for (let i = 0; i < this.level; i++) {
      const color = this.numberToColor(this.sequence[i])
      setTimeout(() => this.lightColor(color), timePerColor * i)
    }
  }

  lightColor(color) {
    this.colors[color].classList.add('light')
    setTimeout(() => this.turnoffColor(color), timeOnLight)
  }

  turnoffColor(color) {
    this.colors[color].classList.remove('light')
  }

  addClickEvents() {
    this.colors.red.addEventListener('click', this.clickedColor)
    this.colors.yellow.addEventListener('click', this.clickedColor)
    this.colors.green.addEventListener('click', this.clickedColor)
    this.colors.blue.addEventListener('click', this.clickedColor)
  }

  removeClickEvents() {
    this.colors.red.removeEventListener('click', this.clickedColor)
    this.colors.yellow.removeEventListener('click', this.clickedColor)
    this.colors.green.removeEventListener('click', this.clickedColor)
    this.colors.blue.removeEventListener('click', this.clickedColor)
  }

  clickedColor(event) {
    const colorName = event.target.dataset.color
    const colorNumber = this.colorToNumber(colorName)
    if (colorNumber === this.sequence[this.score]) {
      this.score++
      if (this.score === this.level) {
        this.level++
        this.removeClickEvents()
        if (this.level === (LAST_LEVEL + 1)) {
          this.wonGame()
        } else {
          this.showLevel()
        }
      }
    } else {
      this.lostGame()
    }
  }

  wonGame() {
    swal('Simon Game', 'Congrats! You won the game', 'success')
      .then(this.initialize)
  }

  lostGame() {
    swal('Simon Game', 'Sorry! You lost the game', 'error')
      .then(() => {
        this.removeClickEvents()
        this.initialize()
      })
  }
  
  showLevel() {
    swal('Simon Game', `Level ${this.level} of ${LAST_LEVEL}`)
      .then(() => {
        setTimeout(this.nextLevel, timeToNextLevel)
      })
  }

}

function startGame() {
  window.game = new Game()
}