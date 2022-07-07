let dateOfBirth = prompt('Год рождения','');
let name = prompt('Имя','');
let lastName = prompt('Фамилию','');
dateOfBirth = 2022 - Number(dateOfBirth)
console.log(`User Bio: ${name} ${lastName} Doe, ${dateOfBirth} years old;`)