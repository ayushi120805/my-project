document.getElementById("assessmentForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const interest =
        document.getElementById("interest").value;

    const workType =
        document.getElementById("workType").value;

    const strongSkill =
        document.getElementById("strongSkill").value.trim();

    const marks =
        document.getElementById("marks").value;

    const goal =
        document.getElementById("goal").value.trim();


    const assessment = {

        interest: interest,

        workType: workType,

        strongSkill: strongSkill,

        marks: marks,

        goal: goal

    };


    // Save assessment
    localStorage.setItem(
        "careerAssessment",
        JSON.stringify(assessment)
    );


    // Success message
    document.getElementById("assessmentMessage").innerHTML =

        "<div style='padding:15px; background:#ecfdf5; color:#047857; border-radius:10px; margin-top:20px;'>" +

        "✅ Assessment submitted successfully!<br>" +

        "<span style='font-weight:400;'>Finding the best career options for you...</span>" +

        "</div>";


    // Go to Recommendation Module
    setTimeout(function() {

        window.location.href =
            "../career-recommendation/recommendation.html";

    }, 1200);

});