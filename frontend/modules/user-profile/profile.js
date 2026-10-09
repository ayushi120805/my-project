document.getElementById("profileForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("profileName").value.trim();
    const age = document.getElementById("age").value;
    const education = document.getElementById("education").value.trim();
    const skills = document.getElementById("skills").value.trim();

    const profile = {
        name: name,
        age: age,
        education: education,
        skills: skills
    };

    localStorage.setItem(
        "careerProfile",
        JSON.stringify(profile)
    );

    document.getElementById("profileMessage").innerHTML =
        "✅ Profile saved successfully!";

    setTimeout(function() {

        window.location.href =
            "../career-assessment/assessment.html";

    }, 1000);

});