import { useState } from 'react'
import {
  Heart,
  Droplets,
  Wind,
  Apple,
  Moon,
  Smile,
  Activity,
  Brain,
  ChevronRight,
} from 'lucide-react'

export default function HealthTips() {

    const healthTips = [
  {
    icon: Heart,
    title: 'Heart Health',
    description: 'Maintain cardiovascular wellness with regular exercise and a balanced diet.',
    details: 'A healthy heart is the foundation of overall wellness. Regular cardiovascular exercise strengthens your heart muscle and improves circulation.',
    tips: [
      'Exercise 30 minutes daily',
      'Reduce sodium intake',
      'Monitor blood pressure',
    ],
  },
  {
    icon: Droplets,
    title: 'Hydration',
    description: 'Stay hydrated by drinking adequate water throughout the day.',
    details: 'Proper hydration supports all bodily functions including digestion, temperature regulation, and nutrient transport.',
    tips: [
      'Drink 8-10 glasses daily',
      'Monitor urine color',
      'Drink before feeling thirsty',
    ],
  },
  {
    icon: Wind,
    title: 'Respiratory Health',
    description: 'Protect your lungs by avoiding pollutants and practicing breathing exercises.',
    details: 'Strong respiratory health ensures your body gets adequate oxygen for optimal functioning.',
    tips: [
      'Avoid smoking',
      'Exercise regularly',
      'Practice breathing exercises',
    ],
  },
  {
    icon: Apple,
    title: 'Nutrition',
    description: 'Build a nutritious diet with whole foods, fruits, and vegetables.',
    details: 'Balanced nutrition provides energy, supports immunity, and prevents chronic diseases.',
    tips: [
      'Eat colorful vegetables',
      'Choose whole grains',
      'Limit processed foods',
    ],
  },
  {
    icon: Moon,
    title: 'Sleep Quality',
    description: 'Get 7-9 hours of quality sleep each night for optimal health.',
    details: 'Quality sleep supports immune function, mental health, and physical recovery.',
    tips: [
      'Maintain consistent schedule',
      'Avoid screens 1 hour before bed',
      'Keep room cool and dark',
    ],
  },
  {
    icon: Smile,
    title: 'Mental Wellness',
    description: 'Prioritize mental health through meditation and stress management.',
    details: 'Mental wellbeing is just as important as physical health for overall quality of life.',
    tips: [
      'Practice daily meditation',
      'Maintain social connections',
      'Manage stress effectively',
    ],
  },
  {
    icon: Activity,
    title: 'Physical Activity',
    description: 'Incorporate both cardio and strength training for optimal fitness.',
    details: 'Regular physical activity builds strength, endurance, and improves mental health.',
    tips: [
      'Mix cardio and weights',
      'Stay consistent',
      'Listen to your body',
    ],
  },
  {
    icon: Brain,
    title: 'Brain Health',
    description: 'Support cognitive function through learning and a healthy diet.',
    details: 'Brain health affects memory, focus, and long-term cognitive abilities.',
    tips: [
      'Learn something new',
      'Solve puzzles',
      'Get adequate sleep',
    ],
  },
]

     const [expandedId, setExpandedId] = useState(null)

  return (
     <section className="w-full py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-3xl font-bold text-foreground mb-4 text-balance">
            Health Tips & Wellness Guide
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover essential tips for maintaining optimal health across all areas of your wellness journey
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3 md:space-y-4">
          {healthTips.map((tip, index) => {
            const Icon = tip.icon
            const isExpanded = expandedId === index

            return (
              <div key={index} className="group">
                {/* Card Header - Always Visible */}
                <button
                  onClick={() =>
                    setExpandedId(isExpanded ? null : index)
                  }
                  className={`w-full px-6 py-5 md:py-6 rounded-xl transition-all duration-300 flex items-center gap-4 md:gap-6 ${
                    isExpanded
                      ? 'bg-primary text-white text-primary-foreground shadow-lg scale-105'
                      : 'bg-card border-2 border-border hover:border-primary/50 text-foreground hover:shadow-md'
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? 'bg-primary/70 scale-110'
                        : 'bg-primary/10 group-hover:bg-primary/20'
                    }`}
                  >
                    <Icon className="w-6 h-6 md:w-7 md:h-7" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-left">
                    <h3 className="text-lg md:text-xl font-bold mb-1">
                      {tip.title}
                    </h3>
                    <p
                      className={`text-sm md:text-base line-clamp-1 transition-all duration-300 ${
                        isExpanded
                          ? 'text-primary-foreground/90'
                          : 'text-muted-foreground'
                      }`}
                    >
                      {tip.description}
                    </p>
                  </div>

                  {/* Chevron */}
                  <ChevronRight
                    className={`flex-shrink-0 w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${
                      isExpanded ? 'rotate-90' : 'group-hover:translate-x-1'
                    }`}
                  />
                </button>

                {/* Expanded Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-primary/5 border-2 border-t-0 border-primary/30 rounded-b-xl px-6 md:px-8 py-6 md:py-8 space-y-4">
                    {/* Details */}
                    <p className="text-sm md:text-base text-foreground leading-relaxed">
                      {tip.details}
                    </p>

                    {/* Tips List */}
                    <div className="pt-4 border-t border-primary/20">
                      <p className="text-xs md:text-sm font-semibold text-primary uppercase tracking-wide mb-3">
                        Quick Tips
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
                        {tip.tips.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm md:text-base text-foreground/80 flex items-start gap-2"
                          >
                            <span className="text-accent font-bold flex-shrink-0 mt-0.5">
                              ✓
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
