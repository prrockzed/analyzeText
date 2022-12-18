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
                "Reading",
                "Summary",
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
            <center><span className="tagcloud"></span></center>
        </div>
    );
};

export default TextShpere;