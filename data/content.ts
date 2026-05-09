// Editorial copy and content data for the landing page.
// Single source of truth for any non-speaker, non-pricing content.

export type AudienceSegment = {
  label: string;
  pitch: string;
};

export const AUDIENCE_SEGMENTS: AudienceSegment[] = [
  {
    label: 'The Researcher',
    pitch:
      'Credentialed scientist looking for cross-disciplinary peers. You have read the papers. Now meet the people doing the work.',
  },
  {
    label: 'The Engineer',
    pitch:
      'Building something at home or in a lab. You want kit-level technical depth, the schematics, the failure modes, the tips that never make it into a paper.',
  },
  {
    label: 'The Curious Mind',
    pitch:
      'You read about Tesla. You want to see whether the claims hold up. You came to ask hard questions and watch the demonstrations yourself.',
  },
  {
    label: 'The Practitioner',
    pitch:
      'Energy healers, alternative-health professionals, and bodyworkers using these technologies in practice. Meet the inventors. Vet the devices.',
  },
];

export type WalkAway = {
  title: string;
  body: string;
};

export const WALK_AWAY: WalkAway[] = [
  {
    title: 'Live demonstrations',
    body:
      'Working prototypes you can examine, photograph, and discuss with the inventor on the spot. Not slides. Hardware.',
  },
  {
    title: 'Direct contact with builders',
    body:
      'Every speaker is also at the evening socials. Bring your prototype, bring your questions, get them answered by the people who built it.',
  },
  {
    title: 'Vendor expo access',
    body:
      'Try Theraphi, Relax Sauna, AquaCure, ReVitaLazer, and other devices in person. Touch the hardware. Read the data sheets.',
  },
  {
    title: 'Year-long video archive',
    body:
      '1,500+ session recordings from past conferences, plus this year. Continue your education between events.',
  },
];

export const TRUST_SIGNALS = [
  { stat: '33', label: 'years of TeslaTech' },
  { stat: '30+', label: 'researchers presenting' },
  { stat: '5', label: 'days, six tracks' },
  { stat: '1,500+', label: 'archive sessions' },
];

// TTN Network branding metadata.
export const TTN = {
  name: 'TTN Network',
  url: 'https://titannetwork.io',
  tagline:
    'A Media Network for Explorers, Inventors, Scientists, Researchers, and The Curious Mind.',
  role: 'Channel Partner & Sponsor · News Desk Coverage',
  logo: '/brand/ttn-logo.png',
  about:
    'TTN Network is the channel partner promoting TeslaTech 2026. Our news desk will be on-site covering the conference, conducting speaker interviews, and producing post-event reporting for our audience of explorers, inventors, scientists, researchers, and the curious mind.',
};
