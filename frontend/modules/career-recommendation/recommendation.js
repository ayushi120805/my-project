function generateRecommendations() {

    const profileData =
        localStorage.getItem("careerProfile");

    const assessmentData =
        localStorage.getItem("careerAssessment");


    const resultBox =
        document.getElementById("recommendationResult");


    // Check data
    if (!profileData || !assessmentData) {

        resultBox.innerHTML = `
            <div class="welcome-card">
                <h2>⚠️ Information Missing</h2>

                <p>
                    Please complete your User Profile and Career Assessment first.
                </p>

                <a href="../user-profile/profile.html"
                   class="next-btn">
                    Complete Profile →
                </a>
            </div>
        `;

        return;
    }


    const profile =
        JSON.parse(profileData);

    const assessment =
        JSON.parse(assessmentData);


    let recommendations = [];


    // TECHNOLOGY
    if (
        assessment.interest === "technology" ||
        assessment.workType === "problem-solving"
    ) {

        recommendations.push(
            {
                career: "Software Developer",
                score: 95,
                icon: "💻",
                reason: "Your interest in technology and problem-solving matches software development."
            },
            {
                career: "Data Analyst",
                score: 88,
                icon: "📊",
                reason: "Analytical thinking and technical skills are useful for data analysis."
            }
        );
    }


    // HEALTHCARE
    if (
        assessment.interest === "healthcare" ||
        assessment.workType === "helping"
    ) {

        recommendations.push(
            {
                career: "Healthcare Professional",
                score: 94,
                icon: "🩺",
                reason: "Your interest in healthcare and helping people makes this a strong option."
            },
            {
                career: "Medical Researcher",
                score: 86,
                icon: "🔬",
                reason: "Research-oriented work can match your interest in healthcare."
            }
        );
    }


    // BUSINESS
    if (
        assessment.interest === "business" ||
        assessment.workType === "leading"
    ) {

        recommendations.push(
            {
                career: "Business Manager",
                score: 93,
                icon: "📈",
                reason: "Leadership and management interests are suitable for business roles."
            },
            {
                career: "Marketing Specialist",
                score: 87,
                icon: "📢",
                reason: "Communication and business understanding are valuable in marketing."
            }
        );
    }


    // DESIGN
    if (
        assessment.interest === "design" ||
        assessment.workType === "creative"
    ) {

        recommendations.push(
            {
                career: "UI/UX Designer",
                score: 94,
                icon: "🎨",
                reason: "Creative thinking and design interest are ideal for UI/UX."
            },
            {
                career: "Graphic Designer",
                score: 89,
                icon: "🖌️",
                reason: "Visual creativity can be developed into a graphic design career."
            }
        );
    }


    // COMMUNICATION
    if (
        assessment.interest === "communication" ||
        assessment.workType === "communication"
    ) {

        recommendations.push(
            {
                career: "Content Creator",
                score: 91,
                icon: "🎥",
                reason: "Communication and presentation skills are useful for content creation."
            },
            {
                career: "Public Relations Specialist",
                score: 86,
                icon: "🎤",
                reason: "Strong communication skills can lead to PR and media careers."
            }
        );
    }


    // DEFAULT
    if (recommendations.length === 0) {

        recommendations.push(
            {
                career: "General Career Exploration",
                score: 75,
                icon: "🧭",
                reason: "Explore different fields and identify the areas that interest you most."
            }
        );
    }


    // MARKS BONUS
    const marks = Number(assessment.marks);

    recommendations =
        recommendations.map(function(item) {

            let score = item.score;

            if (marks >= 80) {
                score += 3;
            } else if (marks >= 60) {
                score += 1;
            }

            if (score > 100) {
                score = 100;
            }

            return {
                ...item,
                score: score
            };

        });


    // SORT
    recommendations.sort(function(a, b) {

        return b.score - a.score;

    });


    // TOP 3
    const topRecommendations =
        recommendations.slice(0, 3);


    // SAVE
    localStorage.setItem(
        "careerRecommendations",
        JSON.stringify(topRecommendations)
    );


    // DISPLAY
    let cards = "";


    topRecommendations.forEach(function(item, index) {

        cards += `

            <div class="career-card">

                <div class="career-icon">
                    ${item.icon}
                </div>

                <h3>
                    ${index + 1}. ${item.career}
                </h3>

                <p>
                    ${item.reason}
                </p>

                <div class="match-box">

                    <div class="match-label">

                        <span>Career Match</span>

                        <span>
                            ${item.score}%
                        </span>

                    </div>

                    <div class="match-bar">

                        <div
                            class="match-fill"
                            style="width:${item.score}%">
                        </div>

                    </div>

                </div>

            </div>

        `;

    });


    resultBox.innerHTML = `

        <div class="welcome-card">

            <h2>
                🎯 Great job, ${profile.name}!
            </h2>

            <p>
                Based on your interests, skills, academic performance
                and career goals, we found these career options for you.
            </p>

        </div>


        <div class="recommendation-grid">

            ${cards}

        </div>


        <a
            href="../career-information/career-info.html"
            class="next-btn">

            Explore Career Information →

        </a>

    `;

}


// Automatically generate recommendations
generateRecommendations();