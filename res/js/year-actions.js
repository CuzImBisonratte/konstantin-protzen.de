const date = new Date();

// 
// Age field
// 
const age_field = document.getElementById("age-field");
// Full Years since 25.01.2008 08:18
const years = date.getFullYear() - 2008;
const months = date.getMonth() - 0;
const days = date.getDate() - 25;
const hours = date.getHours() - 8;
const minutes = date.getMinutes() - 18;
// Calc age (Full year)
const age = years + (months < 0 ? -1 : months === 0 ? (days < 0 ? -1 : days === 0 ? (hours < 0 ? -1 : hours === 0 ? (minutes < 0 ? -1 : 0) : 0) : 0) : 0);
age_field.innerText = age;

// 
// Copyright notice 
// 
const current_year = document.getElementById("current_year");
current_year.innerText = date.getFullYear();