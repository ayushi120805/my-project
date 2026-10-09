const careerData = {

    "Software Developer": {

        icon: "💻",

        description:
            "Software developers design, build, test and maintain software applications and websites.",

        skills: [
            "Programming",
            "Problem Solving",
            "Logical Thinking",
            "Database"
        ],

        courses:
            "BCA, B.Tech, MCA, Computer Science",

        opportunities:
            "Software Developer, Web Developer, Application Developer, Backend Developer",

        path:
            "Learn programming → Build projects → Create portfolio → Internship → Software Job"

    },


    "Data Analyst": {

        icon: "📊",

        description:
            "Data analysts study data and convert it into useful information for better decision making.",

        skills: [
            "Excel",
            "SQL",
            "Python",
            "Data Visualization"
        ],

        courses:
            "BCA, B.Tech, B.Sc Data Science, B.Sc Statistics",

        opportunities:
            "Data Analyst, Business Analyst, Data Associate",

        path:
            "Learn Excel & SQL → Learn Python → Practice datasets → Build projects → Apply for jobs"

    },


    "Healthcare Professional": {

        icon: "🩺",

        description:
            "Healthcare professionals help people maintain and improve their health.",

        skills: [
            "Communication",
            "Empathy",
            "Medical Knowledge",
            "Decision Making"
        ],

        courses:
            "MBBS, BDS, Nursing, Pharmacy, Allied Health Sciences",

        opportunities:
            "Doctor, Dentist, Nurse, Pharmacist, Healthcare Executive",

        path:
            "Choose healthcare course → Complete education → Training → Internship → Professional Career"

    },


    "Medical Researcher": {

        icon: "🔬",

        description:
            "Medical researchers study diseases, medicines and healthcare technologies.",

        skills: [
            "Research",
            "Biology",
            "Analysis",
            "Scientific Thinking"
        ],

        courses:
            "B.Sc Biology, Biotechnology, MBBS, M.Sc, PhD",

        opportunities:
            "Research Assistant, Clinical Researcher, Scientist",

        path:
            "Study science → Research experience → Higher studies → Research projects → Career"

    },


    "Business Manager": {

        icon: "📈",

        description:
            "Business managers plan, organize and manage business operations and teams.",

        skills: [
            "Leadership",
            "Communication",
            "Planning",
            "Decision Making"
        ],

        courses:
            "BBA, B.Com, MBA, Business Management",

        opportunities:
            "Business Manager, Operations Manager, Team Leader",

        path:
            "Study business → Develop leadership → Gain experience → Management role"

    },


    "Marketing Specialist": {

        icon: "📢",

        description:
            "Marketing specialists promote products and services and understand customer needs.",

        skills: [
            "Communication",
            "Creativity",
            "Marketing",
            "Social Media"
        ],

        courses:
            "BBA, B.Com, MBA Marketing, Digital Marketing",

        opportunities:
            "Marketing Executive, Digital Marketer, Brand Manager",

        path:
            "Learn marketing → Digital marketing → Create campaigns → Internship → Marketing Career"

    },


    "UI/UX Designer": {

        icon: "🎨",

        description:
            "UI/UX designers create attractive and easy-to-use digital products.",

        skills: [
            "Creativity",
            "Figma",
            "Design Thinking",
            "User Research"
        ],

        courses:
            "Design, BCA, B.Des, UI/UX Certifications",

        opportunities:
            "UI Designer, UX Designer, Product Designer",

        path:
            "Learn design → Learn Figma → Create designs → Portfolio → Internship → Job"

    },


    "Graphic Designer": {

        icon: "🖌️",

        description:
            "Graphic designers create visual content for brands, websites and media.",

        skills: [
            "Creativity",
            "Photoshop",
            "Illustrator",
            "Visual Design"
        ],

        courses:
            "Graphic Design, B.Des, Multimedia, Design Certifications",

        opportunities:
            "Graphic Designer, Visual Designer, Brand Designer",

        path:
            "Learn design tools → Practice → Create portfolio → Freelancing/Internship → Job"

    },


    "Content Creator": {

        icon: "🎥",

        description:
            "Content creators produce useful and engaging content for digital platforms.",

        skills: [
            "Communication",
            "Writing",
            "Video Editing",
            "Creativity"
        ],

        courses:
            "Mass Communication, Journalism, Digital Marketing",

        opportunities:
            "Content Creator, YouTuber, Social Media Manager, Copywriter",

        path:
            "Choose content niche → Create content → Build audience → Monetize → Career"

    },


    "Public Relations Specialist": {

        icon: "🎤",

        description:
            "PR specialists manage communication between organizations and the public.",

        skills: [
            "Communication",
            "Networking",
            "Presentation",
            "Writing"
        ],

        courses:
            "Mass Communication, Journalism, Public Relations",

        opportunities:
            "PR Executive, Communication Specialist, Media Relations",

        path:
            "Study communication → Build networking → Internship → PR projects → Career"

    }

};


// Get recommendations
const savedRecommendations =
    localStorage.getItem("careerRecommendations");


const careerInfoContainer =
    document.getElementById("careerInfo");


if (!savedRecommendations) {

    careerInfoContainer.innerHTML = `

        <div class="empty-box">

            <h2>⚠️ No Recommendations Found</h2>

            <p>
                Please complete your career assessment first
                to see personalized career information.
            </p>

            <a
                href="../user-profile/profile.html"
                class="next-btn">

                Start Assessment →

            </a>

        </div>

    `;

} else {

    const recommendations =
        JSON.parse(savedRecommendations);


    let cards = "";


    recommendations.forEach(function(item) {

        const data =
            careerData[item.career];


        if (!data) {
            return;
        }


        let skillTags = "";


        data.skills.forEach(function(skill) {

            skillTags += `
                <span class="tag">
                    ${skill}
                </span>
            `;

        });


        cards += `

            <div class="career-info-card">

                <div class="career-title">

                    <div class="career-icon">
                        ${data.icon}
                    </div>

                    <div>
                        <h2>
                            ${item.career}
                        </h2>

                        <small>
                            ${item.score}% Match
                        </small>
                    </div>

                </div>


                <p class="description">
                    ${data.description}
                </p>


                <div class="info-section">

                    <h4>🛠 Required Skills</h4>

                    <div class="tag-container">
                        ${skillTags}
                    </div>

                </div>


                <div class="info-section">

                    <h4>🎓 Recommended Courses</h4>

                    <p>
                        ${data.courses}
                    </p>

                </div>


                <div class="info-section">

                    <h4>💼 Career Opportunities</h4>

                    <p>
                        ${data.opportunities}
                    </p>

                </div>


                <div class="info-section">

                    <h4>🛣️ Career Path</h4>

                    <p>
                        ${data.path}
                    </p>

                </div>

            </div>

        `;

    });


    careerInfoContainer.innerHTML = `

        <div class="info-grid">

            ${cards}

        </div>


        <a
            href="../result-guidance/result.html"
            class="next-btn">

            View Final Result & Guidance →

        </a>

    `;

}