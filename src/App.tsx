import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

function App() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  useEffect(() => {
    const timer = setInterval(() => {
      const launchDate = new Date('2025-01-30T00:00:00');
      const now = new Date();
      const difference = launchDate.getTime() - now.getTime();
      
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,#1a1a1a,#000000)]">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 text-center space-y-12">
          <div>
            <div className="text-sm text-gray-400 mb-4 tracking-widest uppercase">Launching Soon</div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4">
              ShowGo<span className="text-white">.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300">
              Snap Tickets, Share Moments
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 max-w-lg mx-auto">
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-lg">
              <div className="text-2xl font-bold">{timeLeft.days}</div>
              <div className="text-xs text-gray-400">DAYS</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-lg">
              <div className="text-2xl font-bold">{timeLeft.hours}</div>
              <div className="text-xs text-gray-400">HOURS</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-lg">
              <div className="text-2xl font-bold">{timeLeft.minutes}</div>
              <div className="text-xs text-gray-400">MINUTES</div>
            </div>
            <div className="p-4 rounded-lg bg-white/5 backdrop-blur-lg">
              <div className="text-2xl font-bold">{timeLeft.seconds}</div>
              <div className="text-xs text-gray-400">SECONDS</div>
            </div>
          </div>

          <div className="max-w-md mx-auto">
            <p className="text-gray-400 mb-6">Want to be the first to know when we go live?</p>
            {!isSubscribed ? (
              <form onSubmit={handleSubmit}>
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:outline-none focus:border-white transition-colors"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                  >
                    Notify Me
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-white font-semibold text-lg">
                Thanks for subscribing! We'll keep you posted.
              </div>
            )}
          </div>

          <div className="text-sm text-gray-500">
            © 2025 ShowGo. | All rights reserved
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
