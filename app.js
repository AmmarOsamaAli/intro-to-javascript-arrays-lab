const foods = []
console.log('Exercise 1 Result: ', foods)
console.log('----------------------------');


foods.push('Pizza')
foods.push('ChesseBurger')

console.log('Exercise 2 Result: ', foods)
console.log('----------------------------');


foods.unshift('Taco')
console.log('Exercise 3 Result: ', foods)
console.log('----------------------------');


const favFood = foods[1]
console.log('Exercise 4 result:', favFood);
console.log('----------------------------');


foods.splice(2, 0, 'Tofu')
console.log('Exercise 5 result:', foods);
console.log('----------------------------');


foods.splice(1, 1, 'Sushi', 'Cupcake')
console.log('Exercise 6 result:', foods);
console.log('----------------------------');


const yummy = foods.slice(1, 3)
console.log('Exercise 7 result:', yummy);
console.log('----------------------------');


const soyIdx = foods.indexOf('Tofu')
console.log('Exercise 8 result:', soyIdx);
console.log('----------------------------');


const allFoods = foods.join(' -> ')
console.log('Exercise 9 result:', allFoods);
console.log('----------------------------');


const hasSoup = foods.includes('Soup')
console.log('Exercise 10 result:', hasSoup);
console.log('----------------------------');


const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];
const odds = []
nums.forEach(function (number) {
    if (number % 2 != 0) {
        odds.push(number)
    }
})

console.log('Exercise 11 result:', odds);
console.log('----------------------------');


const fizz = []
const buzz = []
const fizzbuzz = []
nums.forEach(function (number) {
    if (number % 15 === 0)
        fizzbuzz.push(number)
    else if (number % 3 === 0)
        fizz.push(number)
    else if (number % 5 === 0)
        buzz.push(number)
})

console.log('Exercise 12 Results:');
console.log(' fizz:', fizz);
console.log(' buzz:', buzz);
console.log(' fizzbuzz:', fizzbuzz);