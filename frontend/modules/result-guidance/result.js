const profileData =
    localStorage.getItem("careerProfile");

const recommendationsData =
    localStorage.getItem("careerRecommendations");

const resultContainer =
    document.getElementById("resultContainer");


if (!profileData || !recommendationsData) {

    resultContainer.innerHTML = `

        <div class="empty-box">

            <h2>⚠️ Result Not Available</h2>

            <p>
                Please complete your profile and career assessment
                to generate your personalized result.
            </p>

            <a
                href="../user-profile/profile.html"
                class="home-btn">

                Start Career Assessment →

            </a>

        </div>

    `;

} else {

    const profile =
        JSON.parse(profileData);

    const recommendations =
        JSON.parse(recommendationsData);


    const topCareer =
        recommendations[0];


    const otherCareers =
        recommendations.slice(1);


    let otherCareerHTML = "";


    otherCareers.forEach(function(item) {

        otherCareerHTML += `

            <span class="career-tag">

                ${item.career}
                — ${item.score}%

            </span>

        `;

    });


    resultContainer.innerHTML = `

        <!-- TOP RESULT -->

        <div class="top-result">

            <div class="result-icon">
                🎯
            </div>

            <h2>
                Congratulations, ${profile.name}!
            </h2>

            <p>
                Based on your profile, interests, skills,
                academic performance and assessment responses,
                your strongest career match is:
            </p>

            <div class="score">

                ${topCareer.score}% Career Match

            </div>

            <h2>
                ${topCareer.icon}
                ${topCareer.career}
            </h2>

            <p>
                ${topCareer.reason}
            </p>

        </div>


        <!-- GUIDANCE -->

        <div class="guidance-title">

            <h2>
                🚀 Your Career Roadmap
            </h2>

            <p>
                Follow these steps to move towards your career goal.
            </p>

        </div>


        <div class="guidance-grid">

            <div class="guidance-card">

                <div class="guidance-icon">
                    🛠️
                </div>

                <h3>
                    Build Skills
                </h3>

                <p>
                    Develop the technical and soft skills
                    required for your chosen career.
                </p>

            </div>


            <div class="guidance-card">

                <div class="guidance-icon">
                    📚
                </div>

                <h3>
                    Learn & Practice
                </h3>

                <p>
                    Take courses and regularly practice
                    what you learn.
                </p>

            </div>


            <div class="guidance-card">

                <div class="guidance-icon">
                    💼
                </div>

                <h3>
                    Build Portfolio
                </h3>

                <p>
                    Create projects that demonstrate
                    your abilities to employers.
                </p>

            </div>


            <div class="guidance-card">

                <div class="guidance-icon">
                    🌱
                </div>

                <h3>
                    Get Experience
                </h3>

                <p>
                    Look for internships, freelancing
                    and practical opportunities.
                </p>

            </div>


            <div class="guidance-card">

                <div class="guidance-icon">
                    🎯
                </div>

                <h3>
                    Plan Your Future
                </h3>

                <p>
                    Set career goals and continuously
                    improve your skills.
                </p>

            </div>

        </div>


        <!-- OTHER CAREERS -->

        <div class="other-careers">

            <h2>
                💡 Other Suitable Careers
            </h2>

            <div class="career-list">

                ${otherCareerHTML}

            </div>

        </div>


        <!-- HOME -->

        <a
            href="../../index.html"
            class="home-btn">

            🏠 Back to CareerGuide Home

        </a>

    `;

}