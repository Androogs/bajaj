const base = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' }
const I = (paths) => {
  const C = (props) => <svg {...base} aria-hidden="true" {...props}>{paths}</svg>
  return C
}
export const IconArrow = I(<><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></>)
export const IconDown = I(<path d="m6 9 6 6 6-6" />)
export const IconMenu = I(<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>)
export const IconClose = I(<><path d="M18 6 6 18" /><path d="m6 6 12 12" /></>)
export const IconSearch = I(<><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></>)
export const IconPhone = I(<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z" />)
export const IconPin = I(<><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></>)
export const IconClock = I(<><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></>)
export const IconMail = I(<><rect x="2" y="4" width="20" height="16" rx="3" /><path d="m22 7-10 6L2 7" /></>)
export const IconShield = I(<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" /></>)
export const IconWrench = I(<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9l-3.8 3.8Z" />)
export const IconCard = I(<><rect x="2" y="5" width="20" height="14" rx="3" /><path d="M2 10h20" /><path d="M6 15h4" /></>)
export const IconBox = I(<><path d="M21 8 12 3 3 8v8l9 5 9-5Z" /><path d="m3 8 9 5 9-5" /><path d="M12 13v8" /></>)
export const IconCheck = I(<path d="m5 12 5 5L20 7" />)
export const IconCompare = I(<><rect x="3" y="4" width="7" height="16" rx="2" /><rect x="14" y="4" width="7" height="16" rx="2" /></>)
export const IconCalendar = I(<><rect x="3" y="4" width="18" height="18" rx="3" /><path d="M16 2v4M8 2v4M3 10h18" /></>)
export const IconBolt = I(<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />)
export const IconGauge = I(<><path d="m12 14 4-4" /><path d="M3.3 19a10 10 0 1 1 17.4 0" /></>)
export const IconEngine = I(<><rect x="4" y="8" width="14" height="10" rx="2" /><path d="M8 8V5h6v3M18 11h3v4h-3M4 12H2" /></>)
export const IconDrop = I(<path d="M12 2.7 6.3 8.3a8 8 0 1 0 11.4 0Z" />)
export const IconWeight = I(<><path d="M6 8h12l2 12H4Z" /><circle cx="12" cy="5" r="2" /></>)
export const IconRoad = I(<><path d="M4 21 9 3M20 21 15 3M12 5v3M12 11v3M12 17v3" /></>)
export const IconFilter = I(<path d="M3 5h18l-7 8v6l-4 2v-8Z" />)
export const IconBook = I(<><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z" /><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5" /></>)
export const IconSpark = I(<><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" /></>)

// Íconos por línea
const Wheel = ({ cx, cy, r = 4 }) => <><circle cx={cx} cy={cy} r={r} /><circle cx={cx} cy={cy} r="1" /></>
export const LineaIcon = {
  pulsar: I(<><Wheel cx={5} cy={17} /><Wheel cx={19} cy={17} /><path d="M5 17l5-6h6l3 6M10 11l2-4 6 2-2 2" /></>),
  dominar: I(<><Wheel cx={5} cy={17} /><Wheel cx={19} cy={17} /><path d="M5 17l4-6h7l3 6M9 11l3-4h4l2 4" /><path d="M14 4h4l1 3" /></>),
  boxer: I(<><Wheel cx={5} cy={17} /><Wheel cx={19} cy={17} /><path d="M5 17l4-7h5l3 7M9 10l-1-3H6M14 10l2-3h2M3 10h4" /></>),
  discover: I(<><Wheel cx={5} cy={17} /><Wheel cx={19} cy={17} /><path d="M5 17l4-7h6l4 7M9 10h8M15 10l2-3h2" /></>),
  motocarros: I(<><Wheel cx={5} cy={18} r={3} /><Wheel cx={18} cy={18} r={3} /><path d="M2 14h10V6h7l3 5v7h-1M12 14h4" /></>),
}

export const IconWhatsApp = (props) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.4s1 2.8 1.2 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3ZM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8Zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.3-1.7A11.8 11.8 0 0 0 24 12c0-3.2-1.2-6.1-3.5-8.4Z" />
  </svg>
)
export const IconFacebook = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-3.3 0-4 2.4-4 4v3H7v4h3v11h4V12h3.4l.6-4Z" /></svg>
export const IconInstagram = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
export const IconTiktok = (p) => <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...p}><path d="M16.6 5.8A4.3 4.3 0 0 1 15.5 3h-3.3v12.4a2.6 2.6 0 1 1-2.6-2.6c.3 0 .5 0 .8.1V9.6a6 6 0 0 0-.8-.1 5.9 5.9 0 1 0 5.9 5.9V9a7.6 7.6 0 0 0 4.4 1.4V7.1a4.4 4.4 0 0 1-3.3-1.3Z" /></svg>
