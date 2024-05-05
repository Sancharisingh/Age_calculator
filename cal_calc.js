const dobInput = document.getElementById("dob");
dobInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let dob = new Date(dobInput.value);
  let d1 = dob.getDate();
  let m1 = dob.getMonth() + 1;
  let y1 = dob.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let days, months, years;

  years = y2 - y1;

  if (m2 >= m1) {
    months = m2 - m1;
  } else {
    years--;
    months = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    days = d2 - d1;
  } else {
    months--;
    days = getDaysInMonths(y1, m1) + d2 - d1;
  }
  if (months < 0) {
    months = 11;
    years--;
  }

  let yourAgeDiv = document.querySelector(".your_age");

  yourAgeDiv.textContent = `${years} years, ${months} months, ${days} days`;
}

function getDaysInMonths(year, month) {
  return new Date(year, month, 0).getDate();
}

calculateAge();