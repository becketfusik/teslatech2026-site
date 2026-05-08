import { SPEAKERS, type Speaker } from './speakers';

export type AgendaDay = {
  day: 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
  date: string;
  themeTitle: string;
  themeSubtitle: string;
  sessions: Speaker[];
};

export const AGENDA: AgendaDay[] = [
  {
    day: 'Wed',
    date: 'Aug 12',
    themeTitle: "Tesla's Wireless Foundation",
    themeSubtitle: 'Workshops & Opening Evening',
    sessions: SPEAKERS.filter((s) => s.day === 'Wed'),
  },
  {
    day: 'Thu',
    date: 'Aug 13',
    themeTitle: 'Health · AntiGravity · Challenges',
    themeSubtitle: 'Wardenclyffe Tower — wireless energy transmission',
    sessions: SPEAKERS.filter((s) => s.day === 'Thu'),
  },
  {
    day: 'Fri',
    date: 'Aug 14',
    themeTitle: 'Water · Energy · Physics',
    themeSubtitle: 'Induction Motor — fields without brushes',
    sessions: SPEAKERS.filter((s) => s.day === 'Fri'),
  },
  {
    day: 'Sat',
    date: 'Aug 15',
    themeTitle: 'Concepts · Energy Concepts · Ancient Tech',
    themeSubtitle: 'Tesla Coil — resonance and amplification',
    sessions: SPEAKERS.filter((s) => s.day === 'Sat'),
  },
  {
    day: 'Sun',
    date: 'Aug 16',
    themeTitle: 'Physics · Consciousness · Closing',
    themeSubtitle: 'Tesla Turbine — bladeless boundary-layer effect',
    sessions: SPEAKERS.filter((s) => s.day === 'Sun'),
  },
];
