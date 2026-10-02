import React from 'react';
import logo from '../../assets/watermark.png';

export const Watermark: React.FC = () => {
    return (
        <a
            href="https://www.mindtrixmedia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 pt-5 border-t border-white/10 text-center flex flex-col items-center gap-2 hover:opacity-100 transition-all group cursor-pointer"
        >
            <img 
                src={logo} 
                alt="Mindtrix Media" 
                className="h-6 sm:h-7 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
            <p className="text-[11px] sm:text-xs text-neutral-300 group-hover:text-white tracking-wider uppercase font-medium transition-colors">
                Growing Together with <span className="text-amber-400 font-bold inline-block mx-0.5">♥</span> Mindtrix Media
            </p>
        </a>
    );
};


