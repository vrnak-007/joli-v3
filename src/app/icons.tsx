import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (size = 18): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
});

export const IconBatch = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-12" />
    <path d="M9 7V4h6v3M10 11v6M14 11v6" />
  </svg>
);

export const IconTransparent = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3v18M3 12h18" />
  </svg>
);

export const IconDerma = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l8 4v5c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

export const IconLeaf = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M11 20A7 7 0 1 1 18 6c0 4-2 7-7 14z" />
    <path d="M11 20c0-5 2-8 5-10" />
  </svg>
);

export const IconCzech = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 21s-7-5.5-7-11a7 7 0 1 1 14 0c0 5.5-7 11-7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

export const IconTruck = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 7h11v9H3zM14 11h4l3 3v2h-7" />
    <circle cx="7" cy="18" r="1.5" />
    <circle cx="17.5" cy="18" r="1.5" />
  </svg>
);

export const IconSample = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M9 3h6M10 3v6l-4 8a3 3 0 0 0 3 4h6a3 3 0 0 0 3-4l-4-8V3" />
    <path d="M7 14h10" />
  </svg>
);

export const IconReturn = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 12a9 9 0 1 0 3-6.7" />
    <path d="M3 4v5h5" />
  </svg>
);

export const IconLock = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="4" y="10" width="16" height="11" rx="2" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
  </svg>
);

export const IconHeadset = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
    <rect x="3" y="14" width="4" height="6" rx="1" />
    <rect x="17" y="14" width="4" height="6" rx="1" />
  </svg>
);

export const IconCleansing = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M8 3h8v3l-1 2v4l2 4v6H7v-6l2-4V8L8 6z" />
    <path d="M10 14h4" />
  </svg>
);

export const IconMist = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M10 4h4v3l3 2v3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V9l3-2z" />
    <path d="M17 4h2M17 7h3M17 10h2" />
  </svg>
);

export const IconDrop = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3s7 7 7 12a7 7 0 1 1-14 0c0-5 7-12 7-12z" />
  </svg>
);

export const IconSun = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4" />
  </svg>
);

export const IconMoon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M20 14A8 8 0 0 1 10 4a8 8 0 1 0 10 10z" />
  </svg>
);

export const IconGift = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 9h18v3H3zM4 12v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8" />
    <path d="M12 9v12M8 9c-2 0-3-2-1.5-3.5S12 7 12 9c0-2 4-3.5 5.5-2S15 9 13 9" />
  </svg>
);

export const IconFlag = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 21V4M5 4h11l-2 4 2 4H5" />
  </svg>
);

export const IconStory = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 4h11a3 3 0 0 1 3 3v14l-3-2-3 2-3-2-3 2-3-2V5a1 1 0 0 1 1-1z" />
    <path d="M8 9h6M8 13h4" />
  </svg>
);

export const IconJournal = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 4h11a2 2 0 0 1 2 2v15l-3-2-3 2-3-2-4 2V6a2 2 0 0 1 0-2z" />
    <path d="M9 9h5M9 13h5" />
  </svg>
);

export const IconSalon = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 21V11a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v10" />
    <path d="M3 21h18M9 7V3h6v4" />
  </svg>
);

export const IconCheck = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 12l5 5 11-12" />
  </svg>
);

export const IconSearch = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="M21 21l-4.5-4.5" />
  </svg>
);

export const IconAccount = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </svg>
);

export const IconBag = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 8h12l-1 13H7L6 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export const IconChevron = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

export const IconMenu = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

export const IconArrowRight = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconRitual = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 1 0 18M12 7v5l3 3" />
  </svg>
);

export const IconCraft = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M7 11V6a2 2 0 0 1 4 0v4M11 10V5a2 2 0 0 1 4 0v6M15 11V7a2 2 0 0 1 4 0v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-6-6v-3a2 2 0 0 1 3-1.7" />
  </svg>
);

export const IconHands = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 11V7.5a1.5 1.5 0 0 1 3 0V11M9 11V5.5a1.5 1.5 0 0 1 3 0V11M12 11V6.5a1.5 1.5 0 0 1 3 0V11M15 11V8a1.5 1.5 0 0 1 3 0v6a7 7 0 0 1-7 7 6 6 0 0 1-6-6v-2a2 2 0 0 1 3-1.7" />
  </svg>
);

export const IconMoonStar = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M19 14A8 8 0 0 1 10 4a8 8 0 1 0 9 10z" />
    <path d="M18 3l.7 1.6L20 5l-1.3.4L18 7l-.7-1.6L16 5l1.3-.4z" />
  </svg>
);

export const IconLayers = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l9 5-9 5-9-5 9-5z" />
    <path d="M3 13l9 5 9-5M3 17l9 5 9-5" />
  </svg>
);

export const IconMolecule = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="6" cy="6" r="2" />
    <circle cx="18" cy="6" r="2" />
    <circle cx="6" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M8 7l3 3M16 7l-3 3M8 17l3-3M16 17l-3-3" />
  </svg>
);

export const IconAroma = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 12a4 4 0 0 1-4-4 4 4 0 0 1 4-4 4 4 0 0 1 4 4 4 4 0 0 1-4 4z" />
    <path d="M12 12v9M5 17c2-1 4-1 7 0M19 17c-2-1-4-1-7 0" />
  </svg>
);

export const IconShield = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l8 4v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V7l8-4z" />
  </svg>
);

export const IconCycle = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M21 12a9 9 0 1 1-3-6.7" />
    <path d="M21 4v5h-5" />
  </svg>
);

export const IconCompass = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M16 8l-3 5-5 3 3-5 5-3z" />
  </svg>
);

export const IconClose = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 6l12 12M18 6L6 18" />
  </svg>
);

export const IconHelp = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4M12 17.5h.01" />
  </svg>
);

export const IconSparkle = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);

/* ---------- Pro Salony (B2B) icons ---------- */
export const IconSpa = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 4c-2 3-2 6 0 9 2-3 2-6 0-9z" />
    <path d="M6 10c1 3 3 5 6 6 3-1 5-3 6-6" />
    <path d="M4 20c2-1 5-1 8-1s6 0 8 1" />
  </svg>
);

export const IconHomeRitual = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" />
  </svg>
);

export const IconChart = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 19V5M4 19h16" />
    <path d="M8 15l3-3 3 2 4-6" />
  </svg>
);

export const IconStar = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l2.5 5.5L20 9l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-.5z" />
  </svg>
);

export const IconClipboard = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="6" y="4" width="12" height="17" rx="1.5" />
    <path d="M9 4h6v3H9z" />
    <path d="M9 11h6M9 14h6M9 17h4" />
  </svg>
);

export const IconClientCard = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="6" width="18" height="13" rx="1.5" />
    <circle cx="9" cy="12" r="2" />
    <path d="M14 11h5M14 14h4M5 17c1-1 3-1 4-1s3 0 4 1" />
  </svg>
);

export const IconSpeech = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 5h16v11h-9l-4 3v-3H4z" />
    <path d="M8 9h8M8 12h6" />
  </svg>
);

export const IconTraining = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 3l9 4-9 4-9-4 9-4z" />
    <path d="M7 9v4c0 2 5 3 5 3s5-1 5-3V9" />
  </svg>
);

export const IconMegaphone = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 10v4l11 5V5L4 10z" />
    <path d="M16 9v6" />
    <path d="M8 14v3a1 1 0 0 0 1 1h2v-4" />
  </svg>
);

export const IconLaptop = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="4" y="5" width="16" height="11" rx="1.5" />
    <path d="M2 19h20" />
  </svg>
);

export const IconCoin = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 9.5c0-1.2 1.3-2 3-2s3 .8 3 2-1.3 1.8-3 2-3 .8-3 2 1.3 2 3 2 3-.8 3-2" />
    <path d="M12 6.5v11" />
  </svg>
);

export const IconBox = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 8l9-4 9 4-9 4-9-4z" />
    <path d="M3 8v9l9 4 9-4V8" />
    <path d="M12 12v9" />
  </svg>
);

export const IconKit = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="7" width="18" height="13" rx="1.5" />
    <path d="M9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" />
    <path d="M12 11v6M9 14h6" />
  </svg>
);

export const IconLaunch = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 14l3 1c2-4 5-7 9-8l1 1c-1 4-4 7-8 9l1 3-3-1-2 2v-3l-2-2 1-2z" />
    <circle cx="15" cy="9" r="1.2" />
  </svg>
);

export const IconPin = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

export const IconMail = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <rect x="3" y="6" width="18" height="13" rx="1.5" />
    <path d="M3 8l9 6 9-6" />
  </svg>
);

export const IconRefresh = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 12a9 9 0 0 1 15-6.7" />
    <path d="M18 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15 6.7" />
    <path d="M6 21v-5h5" />
  </svg>
);

export const IconDownload = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 4v12" />
    <path d="M7 11l5 5 5-5" />
    <path d="M4 20h16" />
  </svg>
);

/* ---------- B2B Flow icons ---------- */
export const IconHandshake = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 12l4-4 5 5-4 4-5-5z" />
    <path d="M21 12l-4-4-5 5 4 4 5-5z" />
    <path d="M12 13l2 2" />
    <path d="M8 8l3-3 3 3" />
  </svg>
);

export const IconBookOpen = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 5h6a3 3 0 0 1 3 3v11a2 2 0 0 0-2-2H3z" />
    <path d="M21 5h-6a3 3 0 0 0-3 3v11a2 2 0 0 1 2-2h7z" />
  </svg>
);

export const IconChair = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 14h16l-1 4H5l-1-4z" />
    <path d="M6 14V8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v6" />
    <path d="M5 18l-1 3M19 18l1 3" />
  </svg>
);

export const IconFace = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M9 10h.01M15 10h.01" />
    <path d="M9 15c1.5 1.2 4.5 1.2 6 0" />
  </svg>
);

export const IconBottle = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M10 3h4v3l1 2v11a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V8l1-2z" />
    <path d="M10 12h4" />
  </svg>
);

export const IconShoppingBag = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M5 8h14l-1 12H6L5 8z" />
    <path d="M9 8V6a3 3 0 0 1 6 0v2" />
  </svg>
);

export const IconGrowth = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 19V5M4 19h16" />
    <path d="M8 14l3-3 3 2 5-7" />
    <path d="M14 6h5v5" />
  </svg>
);

export const IconPeopleHeart = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="8" cy="9" r="3" />
    <circle cx="16" cy="9" r="3" />
    <path d="M2 20c0-3 3-5 6-5s6 2 6 5" />
    <path d="M10 20c0-3 3-5 6-5s6 2 6 5" />
    <path d="M12 4c.6-.8 2-.8 2.5 0 .6 1-.5 2-2.5 3-2-1-3-2-2.5-3 .5-.8 1.9-.8 2.5 0z" />
  </svg>
);

export const IconCoins = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <circle cx="9" cy="9" r="6" />
    <circle cx="15" cy="15" r="6" />
    <path d="M9 6v6M6 9h6" />
    <path d="M13 17h4M13 14h4" />
  </svg>
);

export const IconDiscount = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M3 12l8-8h9v9l-8 8a2 2 0 0 1-3 0l-6-6a2 2 0 0 1 0-3z" />
    <circle cx="15.5" cy="8.5" r="1.3" />
    <path d="M9 15l6-6" />
  </svg>
);

export const IconLightning = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M13 3L4 14h7l-1 7 9-11h-7z" />
  </svg>
);

export const IconHome = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M4 11l8-7 8 7v9a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z" />
  </svg>
);

export const IconLocationPartner = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 21s-7-7-7-12a7 7 0 0 1 14 0c0 5-7 12-7 12z" />
    <circle cx="12" cy="9" r="2.5" />
    <path d="M3 21h18" />
  </svg>
);

export const IconDiamond = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M6 4h12l3 6-9 11L3 10z" />
    <path d="M3 10h18" />
    <path d="M9 4l3 6 3-6" />
    <path d="M9 4l-3 6M15 4l3 6" />
  </svg>
);

export const IconTools = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M14 6l4-4 4 4-4 4-4-4z" />
    <path d="M14 6l-8 8a2 2 0 1 0 3 3l8-8" />
    <path d="M6 14l-3 3 2 2 3-3" />
  </svg>
);

export const IconHeart = ({ size, ...p }: IconProps) => (
  <svg {...base(size)} {...p}>
    <path d="M12 21s-7-5-9-10c-1-3 1-6 4-6 2 0 4 1 5 3 1-2 3-3 5-3 3 0 5 3 4 6-2 5-9 10-9 10z" />
  </svg>
);

/* ============================================================
 * v3 — botanické dekorativní SVG (větev, list, kapka, větvička)
 * ============================================================ */

export const IconBotanicalBranch = ({ size = 80, ...p }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M40 8 Q 40 30 40 72" />
    <path d="M40 18 Q 28 22 22 32 Q 28 30 38 30" />
    <path d="M40 28 Q 52 30 58 40 Q 52 38 42 40" />
    <path d="M40 40 Q 26 44 18 56 Q 28 52 38 52" />
    <path d="M40 50 Q 54 52 62 62 Q 52 60 42 60" />
    <ellipse cx="40" cy="8" rx="2" ry="3" />
  </svg>
);

export const IconBotanicalLeaf = ({ size = 60, ...p }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M10 50 Q 30 10 50 28 Q 40 48 10 50 Z" />
    <path d="M14 46 Q 30 28 46 32" />
  </svg>
);

export const IconBotanicalSprig = ({ size = 100, ...p }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    strokeWidth={0.9}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M50 6 Q 50 50 50 94" />
    <ellipse cx="38" cy="22" rx="9" ry="3" transform="rotate(-30 38 22)" />
    <ellipse cx="62" cy="32" rx="9" ry="3" transform="rotate(30 62 32)" />
    <ellipse cx="36" cy="44" rx="11" ry="3" transform="rotate(-25 36 44)" />
    <ellipse cx="64" cy="56" rx="11" ry="3" transform="rotate(25 64 56)" />
    <ellipse cx="38" cy="68" rx="10" ry="3" transform="rotate(-28 38 68)" />
    <ellipse cx="62" cy="80" rx="10" ry="3" transform="rotate(28 62 80)" />
  </svg>
);

export const IconDropletEditorial = ({ size = 40, ...p }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <path d="M20 4 Q 28 18 28 24 A 8 8 0 1 1 12 24 Q 12 18 20 4 Z" />
    <path d="M16 22 Q 18 26 22 26" />
  </svg>
);

export const IconCircleMonogram = ({ size = 60, ...p }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 60 60"
    fill="none"
    stroke="currentColor"
    strokeWidth={1}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...p}
  >
    <circle cx="30" cy="30" r="28" />
    <path d="M22 22 L 22 36 Q 22 40 26 40" strokeWidth={1.2} />
    <path d="M30 20 L 30 40 M30 20 L 38 40 M38 20 L 38 40" strokeWidth={1.2} />
  </svg>
);
