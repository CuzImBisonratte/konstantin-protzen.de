const age_field = document.getElementById("age-field");

const date = new Date();
// Full Years since 25.01.2008 08:18
const years = date.getFullYear() - 2008;
const months = date.getMonth() - 0;
const days = date.getDate() - 25;
const hours = date.getHours() - 8;
const minutes = date.getMinutes() - 18;
// Calc age (Full year)
const age = years + (months < 0 ? -1 : months === 0 ? (days < 0 ? -1 : days === 0 ? (hours < 0 ? -1 : hours === 0 ? (minutes < 0 ? -1 : 0) : 0) : 0) : 0);
age_field.innerText = age;