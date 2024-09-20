"use client";

import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  text: string;
  speed?: number; // Speed is in milliseconds, controls typing speed
  className?: string;
}

const TypingAnimation: React.FC<TypingEffectProps> = ({
  text,
  speed = 100, // default typing speed
  className,
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return <span className={className}>{displayedText}</span>;
};

export default TypingAnimation;
