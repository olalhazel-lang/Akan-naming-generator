const form = document.getElementById('akan-form');
const resultContainer = document.getElementById('result-container') || document.getElementById('reult-container');
const akanNameOutput = document.getElementById('Akan-name-output') || document.getElementById('akan-name-output');
const dayOutput = document.getElementById('day-output');

const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Amma"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const dateInputValue = document.getElementById('birth-date').value;
    const selectedGender = document.querySelector('input[name="gender"]:checked') || document.querySelector('input[name="gendre"]:checked');

    if (!dateInputValue || !selectedGender) {
        alert('Please enter your birth date and select a gender.');
        return;
    }

    const genderValue = selectedGender.value;
    const birthDate = new Date(dateInputValue);
    const dayIndex = birthDate.getDay();

    let akanName = "";
    if (genderValue === 'male') {
        akanName = maleNames[dayIndex];
    } else if (genderValue === 'female') {
        akanName = femaleNames[dayIndex];
    }

    const dayName = daysOfWeek[dayIndex];

    akanNameOutput.textContent = akanName;
    dayOutput.textContent = dayName;

    if (resultContainer) {
        resultContainer.classList.remove('hidden');
    }
});


