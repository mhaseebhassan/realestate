import React from "react";

export function ArrowUpRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M7 17L17 7M17 7H7M17 7V17" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M5 12H19M19 12L12 5M19 12L12 19" />
    </svg>
  );
}

export function ArrowLeftIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M19 12H5M5 12L12 19M5 12L12 5" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M22 16.92V19.92C22 20.48 21.54 20.94 20.97 20.92C18.17 20.76 15.48 19.8 13.07 18.15C10.87 16.66 9.04 14.83 7.55 12.63C5.9 10.22 4.94 7.53 4.78 4.73C4.76 4.16 5.22 3.7 5.78 3.7H8.78C9.28 3.7 9.7 4.07 9.77 4.56C9.9 5.56 10.15 6.54 10.51 7.47C10.63 7.78 10.55 8.13 10.3 8.37L8.85 9.82C10.37 12.51 12.59 14.73 15.28 16.25L16.73 14.8C16.97 14.55 17.32 14.47 17.63 14.59C18.56 14.95 19.54 15.2 20.54 15.33C21.03 15.4 21.4 15.82 22 16.92Z" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M21 11.5C21.0039 13.1145 20.5563 14.6934 19.7042 16.0722C18.8521 17.451 17.6277 18.5779 16.1627 19.3333C14.6977 20.0887 13.0456 20.4439 11.3826 20.361C9.71961 20.2781 8.10688 19.7601 6.72 18.86L3 20L4.14 16.28C3.24 14.89 2.76 13.27 2.76 11.61C2.76 6.86 6.9 3 12 3C14.39 3.01 16.68 3.96 18.37 5.65C20.06 7.34 21 9.63 21 11.5Z" />
      <path d="M9.5 8.5C9.2 7.8 8.9 7.8 8.6 7.8C8.3 7.8 8 7.8 7.7 8.1C7.4 8.4 6.7 9.1 6.7 10.4C6.7 11.7 7.7 13 7.8 13.2C8 13.4 9.6 15.9 12.1 17C14.2 17.9 14.6 17.7 15.1 17.6C15.6 17.5 16.6 16.9 16.8 16.3C17 15.7 17 15.2 16.9 15.1C16.8 15 16.5 14.9 16.1 14.7C15.7 14.5 13.8 13.5 13.5 13.4C13.2 13.3 13 13.2 12.8 13.5C12.6 13.8 12 14.5 11.8 14.7C11.6 14.9 11.4 14.9 11 14.7C10.6 14.5 9.4 14.1 8 12.8C7 11.9 6.3 10.7 6.1 10.4C5.9 10 6.1 9.8 6.3 9.6C6.5 9.4 6.7 9.2 6.9 8.9C7.1 8.6 7.2 8.5 7.3 8.3C7.4 8.1 7.3 7.9 7.2 7.7L9.5 8.5Z" />
    </svg>
  );
}

export function MailIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="2" y="4" width="20" height="16" />
      <path d="M22 6L12 13L2 6" />
    </svg>
  );
}

export function MapPinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function CloseIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function GridIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  );
}

export function ListIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <line x1="8" y1="6" x2="21" y2="6" />
      <line x1="8" y1="12" x2="21" y2="12" />
      <line x1="8" y1="18" x2="21" y2="18" />
      <line x1="3" y1="6" x2="3.01" y2="6" />
      <line x1="3" y1="12" x2="3.01" y2="12" />
      <line x1="3" y1="18" x2="3.01" y2="18" />
    </svg>
  );
}

export function FilterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <line x1="4" y1="21" x2="4" y2="14" />
      <line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" />
      <line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" />
      <line x1="9" y1="8" x2="15" y2="8" />
      <line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

export function BedIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M2 4V20M2 12H22V20M22 12V8C22 6.89543 21.1046 6 20 6H12C10.8954 6 10 6.89543 10 8V12M6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" />
    </svg>
  );
}

export function AreaIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <rect x="3" y="3" width="18" height="18" />
      <line x1="3" y1="9" x2="9" y2="3" />
      <line x1="3" y1="15" x2="15" y2="3" />
      <line x1="3" y1="21" x2="21" y2="3" />
    </svg>
  );
}

export function ShieldVerifiedIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter">
      <path d="M12 22S20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
      <path d="M9 12L11 14L15 10" />
    </svg>
  );
}
