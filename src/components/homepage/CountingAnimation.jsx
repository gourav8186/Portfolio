import React, { useState, useEffect } from "react";

const CountingAnimation = ({ start, end, duration }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const startTime = performance.now();
    const step = (timestamp) => {
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.ceil(progress * (end - start) + start));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [start, end, duration]);

  return <div className="count-value">{count}</div>;
};

export default CountingAnimation;
