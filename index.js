let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here

for(let i = 0; i < weeklyExpenseQuestions.length; i++)
{
let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
let numberAnswer = parseFloat(stringAnswer)
weeklyExpenses = weeklyExpenses + numberAnswer

console.log(weeklyExpenses)
}

for(let i = 0; i < monthlyExpenseQuestions.length; i++)
{
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    let numberAnswer = parseFloat(stringAnswer)
    monthlyExpenses = monthlyExpenses + numberAnswer

    console.log(monthlyExpenses)

}

for(let i = 0; i < annualExpenseQuestions; i++)
{
    let stringAnswer = window.prompt(annualExpenseQuestions[i])
    let numberAnswer = parseFloat(stringAnswer)
    annualExpenses = annualExpenses + numberAnswer

    console.log(annualExpenses)

}



