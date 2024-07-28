import React, { useState, useEffect } from "react";

interface QuestionAnswer {
  question: string;
  answer: string;
}

interface HeadTextProps {
  texts: QuestionAnswer[];
  interval: number;
}

const HeadText: React.FC<HeadTextProps> = ({ texts, interval }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setIsFadingOut(false);
      }, 1000);
    }, interval * 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentData = texts[textIndex];

  return (
    <div>
      {isFadingOut ? (
        <h1 className="fading-out text-4xl sm:text-6xl md:text-7xl mt-8 break-normal font-bold leading-snug">
          {currentData.question}
          <div className="text-2xl sm:text-4xl leading-tight mt-4">
            {currentData.answer}
          </div>
        </h1>
      ) : (
        <h1 className="fading-in text-4xl sm:text-6xl md:text-7xl mt-8 break-normal font-bold leading-snug">
          {currentData.question}
          <div className="text-2xl sm:text-4xl leading-tight mt-4">
            {currentData.answer}
          </div>
        </h1>
      )}
    </div>
  );
};

export default HeadText;
