import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MATCH_DATE = new Date("2026-06-20T21:30:00-03:00").getTime();

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const diff = MATCH_DATE - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const MatchCountdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => String(n).padStart(2, "0");

  const isLive =
    timeLeft.days === 0 &&
    timeLeft.hours === 0 &&
    timeLeft.minutes === 0 &&
    timeLeft.seconds === 0;

  return (
    <div className="fixed top-24 right-4 z-50">
      <div className="bg-[#009C3B]/90 backdrop-blur-sm border border-[#FFDF00]/40 rounded-xl px-4 py-3 shadow-lg shadow-black/30 text-center min-w-[140px]">
        <p className="text-[10px] uppercase tracking-wider text-[#FFDF00] font-semibold mb-1">
          Brasil x Haiti
        </p>

        {isLive ? (
          <span className="text-sm font-bold text-white animate-pulse">
            AO VIVO
          </span>
        ) : (
          <div className="flex items-center justify-center gap-1 text-white font-mono text-sm font-bold">
            {timeLeft.days > 0 && (
              <>
                <span>{pad(timeLeft.days)}d</span>
                <span className="text-[#FFDF00]">:</span>
              </>
            )}
            <span>{pad(timeLeft.hours)}</span>
            <span className="text-[#FFDF00]">:</span>
            <span>{pad(timeLeft.minutes)}</span>
            <span className="text-[#FFDF00]">:</span>
            <span>{pad(timeLeft.seconds)}</span>
          </div>
        )}

        <p className="text-[9px] text-white/70 mt-1">Amanhã 21:30</p>
      </div>
    </div>
  );
};

export default MatchCountdown;
