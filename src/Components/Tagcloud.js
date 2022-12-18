import React, { useEffect } from "react";
import "../App.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = () => {
    // Animation settings for Text Cloud
    useEffect(() => {
        return () => {
            const container = ".tagcloud";
            const texts = [
                "HTML",
                "CSS",
                "SASS",
                "JavaScript",
                "C++",
                "Java",
                "Python",
                "Ruby",
                "Php",
                "React",
                "Vue",
                "NodeJS",
                "Jquery",
                "GIT",
                "GITHUB",
                "Priyanshu",
                "Ranjan",
                "Angular"
            ];

            const options = {
                radius: 200,
                maxSpeed: "fast",
                initSpeed: "fast",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <div className="text-shpere" >
            {/* span tag className must be "tagcloud"  */}
            <span className="tagcloud"></span>
        </div>
    );
};

export default TextShpere;