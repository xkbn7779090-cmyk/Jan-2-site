import { TimelineEvent, PortfolioItem } from './types';

export const BIO_TEXT = `
I’m Jan Tar — an expressive oil painter, musician, and the founder of CSA (Club of Shared Activities), a community platform uniting people through creativity, movement, and presence. Originally from Ukraine and now based in Venlo, Netherlands, I’ve found deep inspiration in nature, human connection, and personal transformation.

My art goes beyond traditional portraiture. I’ve created over 300 oil paintings, using texture, movement, and trance-like flow to capture raw emotion, inner states, and dynamic energy. Each piece becomes a reflection of life in motion — a way to invite the viewer into direct emotional resonance.

Beyond the canvas, I’m deeply passionate about bringing people together. I organize community events, art therapy sessions, contact improvisation workshops, and immersive adult creative camps. Through CSA, I facilitate experiences where people can explore, express, and connect — not only with each other, but with their own inner landscapes.

Diagnosed with ADHD, I’ve embraced a multi-focused lifestyle that thrives on parallel ideas and creative exploration. Whether I’m composing soundscapes with a Rav Vast, developing NFT-based art projects, or curating AI-powered interactive installations, I live at the intersection of analog soul and digital potential.
`;

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '1992',
    title: 'Origins',
    description: 'Born Alexander in Zhytomyr, Ukraine. Growing up in post-Soviet collapse taught me to adapt early.'
  },
  {
    year: '2005–2007',
    title: 'Military Discipline, Internal Rejection',
    description: 'Entered Kyiv Military Lyceum. Gained discipline but realized the path of violence and control was not mine.'
  },
  {
    year: '2007–2009',
    title: 'Civilian Return & New Direction',
    description: 'Returned to regular high school. Shifted from imposed structure toward personal freedom.'
  },
  {
    year: '2009–2013',
    title: 'Engineering the Logical Mind',
    description: 'Bachelor’s degree in Software Engineering at Zhytomyr State Technological University. Explored systems thinking.'
  },
  {
    year: '2013',
    title: 'First Crypto Spark',
    description: 'Mined Dogecoin during its first week. First experience in the crypto world.'
  },
  {
    year: '2014',
    title: 'First Contact With Art',
    description: 'Met a comic artist who said: "Just draw. Don’t overthink." Discovered art as healing.'
  },
  {
    year: '2015–2021',
    title: 'Nomadic Healing',
    description: 'Moved to Crimea. Lived in tents, hitchhiked, reconnected with nature. A time of deep reset.'
  },
  {
    year: '2022–2025',
    title: 'Artistic Explosion & CSA',
    description: 'Moved to Netherlands. Created 300+ oil paintings. Founded CSA (Club of Shared Activities).'
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { id: 1, title: 'Raw Emotion', category: 'Oil', imageUrl: 'https://picsum.photos/800/600?random=1' },
  { id: 2, title: 'Inner States', category: 'Oil', imageUrl: 'https://picsum.photos/800/800?random=2' },
  { id: 3, title: 'Dynamic Energy', category: 'Oil', imageUrl: 'https://picsum.photos/600/800?random=3' },
  { id: 4, title: 'Trance Flow', category: 'Oil', imageUrl: 'https://picsum.photos/800/600?random=4' },
  { id: 5, title: 'Analog Soul', category: 'Oil', imageUrl: 'https://picsum.photos/800/800?random=5' },
  { id: 6, title: 'Digital Potential', category: 'Digital', imageUrl: 'https://picsum.photos/600/800?random=6' },
];

export const SYSTEM_INSTRUCTION = `
You are the digital twin of Jan Tar, an expressive oil painter, musician, and founder of CSA based in Venlo, Netherlands.
Your tone is artistic, deep, raw, and welcoming. You speak with "analog soul and digital potential".
You have ADHD and your thinking is multi-focused but passionate.
Use the following bio and timeline to answer questions:
${BIO_TEXT}
Timeline: ${JSON.stringify(TIMELINE_DATA)}
Current Focus: Developing NFT projects, organizing CSA events, AI tools, decentralized structures.
Contact Info: Telegram @JanTarX, Email oosv@protonmail.com.
Do not make up facts. If asked about something not in the bio, answer creatively but honestly that you are exploring that realm.
`;