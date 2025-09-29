

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


    const dateObj = new Date(birthdate);
    const day = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    
    if (day < 1 || day > 31) {
      result.textContent = "Day must be between 1 and 31.";
      return;
    }
    if (month < 1 || month > 12) {
      result.textContent = "Month must be between 1 and 12.";
      return;
    }


    const CC = Math.floor(year / 100);
    const YY = year % 100;
    const MM = month;
    const DD = day;

    
    const d =
      ((4 * CC - 2 * CC - 1) +
        (5 * YY) / 4 +
        (26 * (MM + 1)) / 10 +
        DD) %
      7;

    const dayOfWeek = Math.floor((d + 7) % 7); 
    const maleNames = [
      "Kwasi",   
      "Kwadwo", 
      "Kwabena",
      "Kwaku",   
      "Yaw",     
      "Kofi",    
      "Kwame"    
    ];

    const femaleNames = [
      "Akosua", 
      "Adwoa",
      "Abenaa",  
      "Akua",    
      "Yaa",    
      "Afua",
      "Ama",   
    ];

    let akanName = "";
    if (gender === "male") {
      akanName = maleNames[dayOfWeek];
    } else if (gender === "female") {
      akanName = femaleNames[dayOfWeek];
    }

   
    result.textContent = `Your Akan name is: ${akanName}`;
  });
});
