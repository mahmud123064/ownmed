import "./HealthBolletin.css"

export default function HealthBolletin() {

    const healthTips = [
  "💧 Drink at least 8 glasses of water daily",
  "🥗 Eat more fruits and green vegetables",
  "🚶 Walk at least 30 minutes every day",
  "😴 Get 7–8 hours of quality sleep",
  "🧘 Practice meditation to reduce stress",
  "🚭 Avoid smoking and tobacco products",
  "🧂 Reduce excess salt and sugar intake",
  "❤️ Regular health checkups save lives",
];

  return (
    <div className="relative w-full overflow-hidden rounded-xl  bg-background py-3">
      
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent dark:from-black" />

      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent dark:from-black" />

      {/* Marquee */}
      <div className="flex gap-8 whitespace-nowrap animate-marquee  px-4">
        {healthTips.concat(healthTips).map((tip, index) => (
          <span
            key={index}
            className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200"
          >
            {tip}
          </span>
        ))}
      </div>
    </div>
  );
}
