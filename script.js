// Features

let options = document.querySelectorAll(".features .options .option")
let line = document.querySelector(".features .line")
let results = document.querySelectorAll(".features .result")

options.forEach((option) => {
  option.onclick = function(){
    // Hide All Results
    results.forEach((result) => {
      result.classList.remove("show")
    })
    // Remove Acitve Class
    options.forEach((option) => {
      option.classList.remove("active")
    })
    this.classList.add("active")
    // Check To Move The Line
    if(this.classList.contains("option1")){
      line.classList.remove("right")
      line.classList.remove("middle")
      line.classList.add("left")
      // For The Result
      document.querySelector(".result1").classList.add("show")
    }else if(this.classList.contains("option2")){
      line.classList.remove("right")
      line.classList.remove("left")
      line.classList.add("middle")
      // For The Result
      document.querySelector(".result2").classList.add("show")
    }else{
      line.classList.remove("left")
      line.classList.remove("middle")
      line.classList.add("right")
      // For The Result
      document.querySelector(".result3").classList.add("show")
    }
  }
})

// Questions
let questions = document.querySelectorAll(".questions .question")

questions.forEach((question) => {
  question.onclick = function(){
    let hiddenText = this.querySelector(".hidden-text")
    hiddenText.classList.toggle("show")
    let arrow = this.querySelector(".arrow")
    arrow.classList.toggle("up")
  }
})

// Header
let toggler = document.querySelector(".burgur-icon")
let links = document.querySelector("header .links")
let svg = document.querySelector("header svg")

toggler.onclick = function(){
  this.classList.toggle("open")
  svg.classList.toggle("open")
  links.classList.toggle("open")
}