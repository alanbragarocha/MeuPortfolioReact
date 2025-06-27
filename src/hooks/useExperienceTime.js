import { useState, useEffect } from "react";

const useExperienceTime = (startDate) => {
  const [years, setYears] = useState(0);

  useEffect(() => {
    const calculateYears = () => {
      const start = new Date(startDate);
      const now = new Date();
      const diffTime = Math.abs(now - start);
      const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365.25));
      setYears(diffYears);
    };

    calculateYears();
    // Atualizar a cada dia
    const interval = setInterval(calculateYears, 24 * 60 * 60 * 1000);

    return () => clearInterval(interval);
  }, [startDate]);

  return years;
};

export default useExperienceTime;
