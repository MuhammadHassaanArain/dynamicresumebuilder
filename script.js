document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#userform");


  const workExperiences = [];
  const skills = [];
  const userEducation = [];

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const userName = document.getElementById("username").value;
    const phoneNumber = document.getElementById("userphone").value;
    const email = document.getElementById("useremail").value;
    const adress = document.getElementById("useradress").value;
    const personalInfo = document.getElementById("userpersonalinfo").value;

    // Update content with form values
    document.getElementById("usernamedata").textContent = `Name: ${userName}`;
    document.getElementById('name').textContent = userName;
    document.getElementById("userPhoneNumber").textContent = `Phone: ${phoneNumber}`;
    document.getElementById("userEmail").textContent = `Email: ${email}`;
    document.getElementById("userAdress").textContent = `Current Address: ${adress}`;
    document.getElementById("personalInfo").textContent = personalInfo;

    // Update lists with the added data
    updateList('workexperiencelist', workExperiences);
    updateList('skillsList', skills);
    updateList('educationList', userEducation);

    // Hide the form and show the content
    document.getElementById("form").style.display = "none";
    document.querySelector(".content").style.display = "block";
  });

  // Add work experience
  document.getElementById("addExperience").addEventListener("click", function () {
    const workExperience = document.getElementById("experienceInput").value.trim();
    if (workExperience && !workExperiences.includes(workExperience)) {
      workExperiences.push(workExperience);
      updateList('workexperiencelist', workExperiences);
      document.getElementById("experienceInput").value = "";
    } else {
      alert("Work Experience is either empty or already added.");
    }
  });

  // Add skill
  document.getElementById("addSkill").addEventListener("click", function () {
    const skillInput = document.getElementById("skillInput").value.trim();
    if (skillInput && !skills.includes(skillInput)) {
      skills.push(skillInput);
      updateList('skillsList', skills);
      document.getElementById("skillInput").value = "";
    } else {
      alert("Skill is either empty or already added.");
    }
  });

  // Add education
  document.getElementById("addEducation").addEventListener("click", function () {
    const educationInput = document.getElementById("educationInput").value.trim();
    if (educationInput && !userEducation.includes(educationInput)) {
      userEducation.push(educationInput);
      updateList('educationList', userEducation);
      document.getElementById("educationInput").value = "";
    } else {
      alert("Education is either empty or already added.");
    }
  });

  function updateList(listId, dataArray) {
    const list = document.getElementById(listId);
    list.innerHTML = "";
    dataArray.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
});
