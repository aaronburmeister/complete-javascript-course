let Question = function(question, answers, solution) {
    this.question = question;
    this.answers = answers;
    this.solution = solution;
}

let question1 = new Question("What kind of facial hair does Aaron feature?", ["None", "Trimmed Beard", "Full Beard", "Chinstrap"], 1)
let question2 = new Question("What temperature does Aaron dislike?", ["Cold", "Room", "Hot"], 2)

let questions = [question1, question2]

let givenQuestion = questions[Math.floor(Math.random() * Math.floor(2))]
console.log(givenQuestion.question)
givenQuestion.answers.map((answer, index) => console.log(`${index}. ${answer}`))
let response = prompt("Which answer do you choose?")

console.log(response)
if (response == givenQuestion.solution) {
    console.log("You are correct!")
} else {
    console.log("You are incorrect! Sorry! The correct answer is " + givenQuestion.answers[givenQuestion.solution])
}