
import React from 'react';

interface IconProps {
  className?: string;
}

export const SkullIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5zM5.25 9.75A2.25 2.25 0 017.5 7.5h9a2.25 2.25 0 012.25 2.25v4.5a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-4.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 16.5v1.5a.75.75 0 001.5 0v-1.5m3 0v1.5a.75.75 0 001.5 0v-1.5M7.5 14.25h9M7.5 12h9m-9-2.25h9" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a8.25 8.25 0 006.514-13.056A8.25 8.25 0 0012 3.75a8.25 8.25 0 00-6.514 13.056A8.25 8.25 0 0012 21z" />
  </svg>
);

export const SpineIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-6.75h6M12 3.75a1.5 1.5 0 011.5 1.5v.75H10.5V5.25A1.5 1.5 0 0112 3.75zM12 20.25a1.5 1.5 0 01-1.5-1.5v-.75h3v.75a1.5 1.5 0 01-1.5 1.5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6.75h3v1.5h-3zm0 3h3v1.5h-3zm0 3h3v1.5h-3z" />
  </svg>
);

export const ThoraxIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m-3.75-12.75L12 6l3.75-4.25M8.25 10.5l3.75 3.75 3.75-3.75M8.25 15l3.75 3.75 3.75-3.75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 11.25c0 3.314 2.985 6 6.75 6s6.75-2.686 6.75-6" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 15c0 2.485 2.686 4.5 6 4.5s6-2.015 6-4.5" />
  </svg>
);

export const PelvisIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 4.5v15m6-15v15m-10.5-7.5h15M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 0115 0M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 12a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
  </svg>
);


export const LimbIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 4.5l-.75 3 3.75 3.75.75-3M6.75 4.5L6 7.5l3.75.75.75-3.75M6.75 4.5L9 3.75l.75 3.75-3 .75M17.25 4.5l.75 3-3.75 3.75-.75-3M17.25 4.5l.75 3 .75-3M17.25 4.5l-2.25-.75-.75 3.75 3 .75" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l3 7.5 3-7.5M9 12H6.75M15 12h2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19.5v-7.5" />
  </svg>
);


export const HandFootIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 12.75A1.5 1.5 0 019 11.25h6a1.5 1.5 0 011.5 1.5v5.25a1.5 1.5 0 01-1.5 1.5H9a1.5 1.5 0 01-1.5-1.5v-5.25z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.25V9A2.25 2.25 0 0111.25 6.75h1.5A2.25 2.25 0 0115 9v2.25M11.25 3.75v3m1.5-3v3M9.75 3.75v3m3-3v3" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.375 19.5S5.25 18 5.25 15.75v-3.375c0-.43.345-.75.75-.75h1.5a.75.75 0 01.75.75V18a.75.75 0 001.5 0v-2.25" />
</svg>
);

export const AuditoryIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.5 4.5m0 0l4.5 4.5M11.25 12.75L6.75 17.25" />
  </svg>
);


export const ScienceIcon: React.FC<IconProps> = ({ className = "w-6 h-6" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 10.5V4.5m0 6c0 .966-.053 1.906-.151 2.816M14.25 10.5L16.5 12.75m-2.25-2.25L12 12.75m2.25-2.25L9.75 12.75m2.25-2.25L12 10.5M14.25 4.5L12 6.75m2.25-2.25L9.75 6.75M3.75 13.5c0-2.423.979-4.607 2.576-6.204M3.75 13.5v2.25c0 1.234.426 2.385 1.172 3.306M3.75 13.5H2.25m1.5 0c-.098.91-.151 1.85-.151 2.816m0 0L6.328 18.75m-2.707-2.434L2.25 13.5m5.872 3.456c.382.382.792.72 1.228 1.007M7.5 13.5c0-1.56.338-3.033.947-4.38M7.5 13.5L9.75 12m0 0L7.5 10.5M9.75 12l2.25 2.25M9.75 12l2.25-2.25M16.872 16.956c.382.382.792.72 1.228 1.007M16.5 13.5c0-1.56.338-3.033.947-4.38M16.5 13.5L18.75 12m0 0L16.5 10.5M18.75 12l2.25 2.25M18.75 12l2.25-2.25" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25a4.5 4.5 0 110 9 4.5 4.5 0 010-9z" />
  </svg>
);

export const GetCategoryIcon = (category: string): React.ReactNode => {
  switch (category) {
    case "Skull & Facial Bones": return <SkullIcon className="w-8 h-8 text-cyan-400" />;
    case "Spinal Column": return <SpineIcon className="w-8 h-8 text-cyan-400" />;
    case "Thorax": return <ThoraxIcon className="w-8 h-8 text-cyan-400" />;
    case "Pelvis": return <PelvisIcon className="w-8 h-8 text-cyan-400" />;
    case "Upper Limb": return <LimbIcon className="w-8 h-8 text-cyan-400" />;
    case "Lower Limb": return <LimbIcon className="w-8 h-8 text-cyan-400" />;
    case "Hand Bones": return <HandFootIcon className="w-8 h-8 text-cyan-400" />;
    case "Foot Bones": return <HandFootIcon className="w-8 h-8 text-cyan-400" />;
    case "Auditory Ossicles": return <AuditoryIcon className="w-8 h-8 text-cyan-400" />;
    default: return <ScienceIcon className="w-8 h-8 text-cyan-400" />;
  }
};
