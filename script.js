class Student {
  constructor(name, firstExam, secondExam) {
    this.name = name;
    this.firstExam = firstExam;
    this.secondExam = secondExam;
  }

  get averageScore() {
    return this.calculateAverageScore();
  }

  calculateAverageScore() {
    return ((this.firstExam + this.secondExam) / 2).toFixed(1);
  }
}

const classroom = new Array();

const alberto = new Student("Alberto", 6, 4);
const jonas = new Student("Jonas", 8, 7);
const bilbor = new Student("Bilbor", 6, 6);
const trisha = new Student("Trisha", 2, 4);

classroom.push(alberto, jonas, bilbor, trisha);

classroom.forEach(student => {
  const {name, averageScore} = student;
  const minScoreToGetAproved = 7;
  const aproved = checkIfAproved(minScoreToGetAproved, averageScore);
  const resultMessage = formatMessage(aproved, name);
  alert(`
  The average score of ${name} is: ${averageScore}
  ${resultMessage}
  `)
});

function checkIfAproved(pMinimumScore, pAverageScore) {
  const aproved = pAverageScore >= pMinimumScore;

  return aproved;
}

function formatMessage(pIsAproved, name) {
  if (pIsAproved) {
    return `Congratulations, ${name}! You passed the contest!`
  }

  return `It wasn't this time ${name}! Try again.`
}
