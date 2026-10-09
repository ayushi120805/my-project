function showAssessment() {

    document.getElementById("assessment")
        .scrollIntoView({
            behavior: "smooth"
        });
}


document.getElementById("careerForm").addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const marks =
            Number(document.getElementById("marks").value);

        const interest =
            document.getElementById("interest").value;

        const skill =
            document.getElementById("skill").value;


        let recommendations = [];


        // Technology
        if (interest === "technology" ||
            skill === "problem") {

            let score = 80;

            if (marks >= 75) {
                score += 10;
            }

            recommendations.push({
                career: "Software Developer",
                score: Math.min(score, 100),
                reason:
                    "Your interest in technology and problem-solving makes software development a suitable option."
            });

            recommendations.push({
                career: "Data Analyst",
                score: Math.min(score - 5, 100),
                reason:
                    "Analytical thinking and good academic performance can support a career in data analysis."
            });
        }


        // Healthcare
        if (interest === "healthcare") {

            let score = 80;

            if (marks >= 75) {
                score += 10;
            }

            recommendations.push({
                career: "Healthcare Professional",
                score: Math.min(score, 100),
                reason:
                    "Your interest in biology and healthcare matches this career direction."
            });

            recommendations.push({
                career: "Medical Researcher",
                score: Math.min(score - 5, 100),
                reason:
                    "Interest in healthcare can also lead toward research and scientific careers."
            });
        }


        // Business
        if (interest === "business" ||
            skill === "leadership" ||
            skill === "communication") {

            let score = 78;

            if (marks >= 70) {
                score += 10;
            }

            recommendations.push({
                career: "Business Manager",
                score: Math.min(score, 100),
                reason:
                    "Your leadership, communication and business interests match management careers."
            });

            recommendations.push({
                career: "Marketing Specialist",
                score: Math.min(score - 5, 100),
                reason:
                    "Communication skills can be useful in marketing and customer-focused careers."
            });
        }


        // Design
        if (interest === "design" ||
            skill === "creativity") {

            let score = 82;

            recommendations.push({
                career: "UI/UX Designer",
                score: score,
                reason:
                    "Your creativity and interest in design are strong matches for UI/UX design."
            });

            recommendations.push({
                career: "Graphic Designer",
                score: score - 5,
                reason:
                    "Creative thinking can lead to a career in graphic and visual design."
            });
        }


        // Default
        if (recommendations.length === 0) {

            recommendations.push({
                career: "General Career Exploration",
                score: 70,
                reason:
                    "Explore different fields and identify your strongest interests and skills."
            });
        }


        // Highest score first
        recommendations.sort(function(a, b) {
            return b.score - a.score;
        });


        let html = `
            <p>
                Hello <strong>${name}</strong>!
                Based on your profile, here are your
                recommended careers:
            </p>
        `;


        recommendations.slice(0, 3).forEach(function(item) {

            html += `
                <div class="career-result">

                    <h3>
                        ${item.career}
                        — ${item.score}%
                    </h3>

                    <p>
                        ${item.reason}
                    </p>

                </div>
            `;
        });


        document.getElementById("resultContent").innerHTML =
            html;


        document.getElementById("result").style.display =
            "block";


        document.getElementById("result")
            .scrollIntoView({
                behavior: "smooth"
            });

    }
);