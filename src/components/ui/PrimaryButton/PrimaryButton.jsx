// import { ArrowRight } from "lucide-react";

// export default function PrimaryButton() {
//     return (
//         <button
//             className="relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-primary px-6 py-3 text-white font-medium transition hover:bg-primary group"
//         >
//             <span className="relative z-10 flex items-center gap-2">
//                 Learn More
//                 <ArrowRight size={18} />
//             </span>

//             <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-500 group-hover:scale-150" />
//         </button>
//     );
// }

import { ArrowRight } from "lucide-react";

export default function PrimaryButton({
  children = "Learn More",
  className = "",
  ...props
}) {
  return (
    <button
      className={`relative inline-flex items-center justify-center gap-2 
        overflow-hidden rounded-lg bg-primary px-6 py-3 
        text-white font-medium transition hover:bg-primary 
        group ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        <ArrowRight size={18} />
      </span>

      <span className="absolute inset-0 bg-white/20 scale-0 rounded-full transition-transform duration-500 group-hover:scale-150" />
    </button>
  );
}

