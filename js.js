const dateOfBirth = prompt('Год рождения','');
const name = prompt('Имя','');
const lastName = prompt('Фамилию','');
const years = 2022 - Number(dateOfBirth)
console.log(`User Bio: ${name} ${lastName} Doe, ${years} years old;`);