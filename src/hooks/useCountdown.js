import { useState, useEffect } from 'react';
import { calculateTimeRemaining } from '../utils/dateUtils';

export function useCountdown(targetDateStr, targetTimeStr = '19:00', timezone = 'Asia/Kolkata') {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeRemaining(targetDateStr, targetTimeStr, timezone));

  useEffect(() => {
    // Initial check
    setTimeLeft(calculateTimeRemaining(targetDateStr, targetTimeStr, timezone));

    const interval = setInterval(() => {
      const remaining = calculateTimeRemaining(targetDateStr, targetTimeStr, timezone);
      setTimeLeft(remaining);

      if (remaining.isCompleted) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDateStr, targetTimeStr, timezone]);

  return timeLeft;
}

