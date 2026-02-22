import KfcLogo from './icons/KfcLogo';
import DefonsecaLogo from './icons/DefonsecaLogo';
import SalomonLogo from './icons/SalomonLogo';
import AdidasLogo from './icons/AdidasLogo';
import FerreroLogo from './icons/FerreroLogo';
import HyundaiLogo from './icons/HyundaiLogo';
import AbbottLogo from './icons/AbbottLogo';
import MazdaLogo from './icons/MazdaLogo';
import KotanyiLogo from './icons/KotanyiLogo';

import XeroxLogo from './icons/XeroxLogo';

const logos = [
  { Logo: KfcLogo, className: "h-8 w-auto" },
  { Logo: DefonsecaLogo, className: "h-12 w-auto" },
  { Logo: SalomonLogo, className: "h-6 w-auto" },
  { Logo: AdidasLogo, className: "h-10 w-auto" },
  { Logo: FerreroLogo, className: "h-6 w-auto" },
  { Logo: HyundaiLogo, className: "h-8 w-auto" },
  { Logo: AbbottLogo, className: "h-8 w-auto" },
  { Logo: MazdaLogo, className: "h-6 w-auto" },
  { Logo: KotanyiLogo, className: "h-10 w-auto" },

  { Logo: XeroxLogo, className: "h-8 w-auto" },
];

const BrandStrip = () => {
  return (
    <section className="mb-24 overflow-hidden relative">
      {/* Градиент слева */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#FFFFFF] to-transparent z-10 dark:from-background" />
      
      {/* Градиент справа */}
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#FFFFFF] to-transparent z-10 dark:from-background" />

      <div className="overflow-hidden">
        <div className="flex items-center animate-scroll gap-x-10 md:gap-x-20 whitespace-nowrap text-muted-foreground min-w-max">
          {/* 1-й набор логотипов */}
          {logos.map(({ Logo, className }, i) => (
            <Logo key={`logo-1-${i}`} className={className} />
          ))}
          {/* 2-й набор логотипов (дубликат) */}
          {logos.map(({ Logo, className }, i) => (
            <Logo key={`logo-2-${i}`} className={className} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
