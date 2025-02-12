import { useState, useEffect } from "react";
import { Calendar, Clock } from "lucide-react";

const CountdownSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-03T00:00:00");

    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
        const days = Math.floor((difference / (1000 * 60 * 60 * 24)) % 30.44);
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ months, days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-50 countSection relative bg-[#fbefdf] my-10 z-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Namangan Gullar Bayrami 2025
          </h2>
          <div className="flex items-center justify-center space-x-2 text-black">
            <Calendar className="w-5 h-5" />
            <p className="text-lg">3-May, 2025</p>
            <Clock className="w-5 h-5 ml-4" />
            <p className="text-lg">Namangan shahri</p>
          </div>
        </div>

        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {/* Months */}
          <div className="bg-[#fcead3] rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-black mb-2">
              {timeLeft.months}
            </div>
            <div className="text-black font-medium">Oy</div>
          </div>

          {/* Days */}
          <div className="bg-[#fcead3] rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-black mb-2">
              {timeLeft.days}
            </div>
            <div className="text-black font-medium">Kun</div>
          </div>

          {/* Hours */}
          <div className="bg-[#fcead3] rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-black mb-2">
              {timeLeft.hours}
            </div>
            <div className="text-black font-medium">Soat</div>
          </div>

          {/* Minutes */}
          <div className="bg-[#fcead3] rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-black mb-2">
              {timeLeft.minutes}
            </div>
            <div className="text-black font-medium">Daqiqa</div>
          </div>

          {/* Seconds */}
          <div className="className md:col-span-1 col-span-2 bg-[#fcead3] rounded-xl shadow-lg p-6 text-center">
            <div className="text-4xl font-bold text-black mb-2">
              {timeLeft.seconds}
            </div>
            <div className="text-black font-medium">Soniya</div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-lg text-black max-w-2xl mx-auto">
            O`zbekistonning eng go`zal va rang-barang gullar festivali.
            Namanganning mashhur bog`lari va gulzorlarida o`tkaziladigan ajoyib
            bayramni kutib qoling!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
