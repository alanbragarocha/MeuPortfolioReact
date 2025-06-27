import { useState, useEffect } from 'react';
import { differenceInYears } from 'date-fns';

function useCountTime(startDate) {
  const [years, setYears] = useState(0);

  useEffect(() => {
    const update = () => {
      setYears(differenceInYears(new Date(), new Date(startDate)));
    };
    update();
    const interval = setInterval(update, 1000 * 60 * 60 * 24);
    return () => clearInterval(interval);
  }, [startDate]);

  return years;
}

export default useCountTime;
