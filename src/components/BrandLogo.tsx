/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  theme?: 'dark' | 'light';
}

export default function BrandLogo({ className = '', showTagline = false, theme = 'dark' }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-black border border-[#172D46] shadow-md flex items-center justify-center shrink-0">
        <img
          src="/assets/visio-logo.png"
          alt="VISIO logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex flex-col">
        <span
          className={`font-bold tracking-tight text-xl leading-none ${
            theme === 'dark' ? 'text-white' : 'text-[#101C2C]'
          }`}
        >
          VISIO
        </span>
        {showTagline && (
          <span className="text-[10px] tracking-wider uppercase text-blue-500 font-semibold mt-1">
            Crowd Safety Intelligence
          </span>
        )}
      </div>
    </div>
  );
}
