document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const result = document.getElementById("akan-name");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const birthdate = document.getElementById("birthdate").value;
    const gender = document.getElementById("gender").value;

    if (!birthdate) {
      result.textContent = "Please enter your birthdate.";
      return;
    }
    if (!gender) {
      result.textContent = "Please select your gender.";
      return;
    }

    let dateObj = new Date(birthdate);
    let day = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();

    if (month < 3) {
      month += 12;
      year -= 1;
    }

    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    // Zeller’s Congruence
    const d = (DD + Math.floor(26 * (MM + 1) / 10) + YY + Math.floor(YY / 4) +
              Math.floor(CC / 4) + (5 * CC)) % 7;

    const dayOfWeek = d; // 0=Saturday, 1=Sunday, 2=Monday... (Zeller’s system)

    const maleNames = ["Kwame","Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi"];
    const femaleNames = ["Ama","Akosua","Adwoa","Abenaa","Akua","Yaa","Afua"];

    let akanName = gender === "male" ? maleNames[dayOfWeek] : femaleNames[dayOfWeek];
    result.textContent = `Your Akan name is: ${akanName}`;
  });
});


