import React, { useEffect } from "react";
import "../App.css";

// Importing TagCloud package
import TagCloud from "TagCloud";

const TextShpere = (props) => {
    let container

    // Animation settings for Text Cloud
    useEffect(() => {
        return () => {
            if (props.mode === 'dark') {
                container = ".cloudgrey";
            } else {
                container = ".cloudwhite";
            }
            const texts = [
                "prrockz",
                "Text",
                "Words",
                "Character",
                "Analyze",
                "Paragraphs",
                "Upper",
                "Lower",
                "Case",
                "Preview",
                "Count",
                "Article",
                "Essay",
                "Capital",
                "Sentences",
                "prrockz",
                "Summary",
            ];

            const options = {
                radius: 200,
                maxSpeed: "normal",
                initSpeed: "fast",
                keep: true,
            };

            TagCloud(container, texts, options);
        };
    }, []);

    return (
        <div>
            <span className={props.mode === 'dark' ? "cloudgrey" : "cloudwhite"}></span>
        </div>
    );
};

export default TextShpere;