import React, { useState } from 'react';
import { BIO_TEXT, TIMELINE_DATA, PORTFOLIO_ITEMS } from './constants';
import { AIChat } from './components/AIChat';
import { Section } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Oil' | 'Digital'>('All');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const filteredPortfolio = activeCategory === 'All' 
    ? PORTFOLIO_ITEMS 
    : PORTFOLIO_ITEMS.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-oil-dark text-oil-paper selection:bg-oil-accent selection:text-oil-dark font-sans">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-oil-dark/90 backdrop-blur-sm border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold tracking-wider text-oil-accent cursor-pointer" onClick={() => scrollToSection(Section.HOME)}>
            JAN TAR
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-neutral-400">
            {[Section.ABOUT, Section.TIMELINE, Section.PORTFOLIO, Section.CONTACT].map((item) => (
              <button 
                key={item} 
                onClick={() => scrollToSection(item)}
                className="hover:text-oil-accent transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id={Section.HOME} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Abstract Background Effect */}
        <div className="absolute inset-0 opacity-20">
            <img 
              src="https://picsum.photos/1920/1080?grayscale&blur=2" 
              alt="Background texture" 
              className="w-full h-full object-cover"
            />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-oil-dark via-transparent to-transparent"></div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-serif text-5xl md:text-8xl mb-6 text-oil-accent">
            Analog Soul,<br/>Digital Potential.
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-10">
            Artist. Musician. Founder of CSA. <br/>
            Uniting people through creativity, movement, and presence.
          </p>
          <button 
            onClick={() => scrollToSection(Section.PORTFOLIO)}
            className="border border-oil-accent text-oil-accent px-8 py-3 rounded-full hover:bg-oil-accent hover:text-oil-dark transition-all duration-300 uppercase tracking-widest text-sm"
          >
            Explore Works
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id={Section.ABOUT} className="py-24 px-6 bg-neutral-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center text-oil-accent">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="aspect-[3/4] relative rounded-lg overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://picsum.photos/600/800?person" alt="Jan Tar" className="object-cover w-full h-full"/>
             </div>
             <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
                {BIO_TEXT.split('\n\n').slice(0, 2).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
                <div className="pt-4">
                  <h3 className="text-oil-accent font-serif text-xl mb-2">Current Focus</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm text-neutral-400">
                    <li>NFT projects linked to physical oil paintings</li>
                    <li>CSA-based community events & retreats</li>
                    <li>AI tools & decentralized structures</li>
                  </ul>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id={Section.TIMELINE} className="py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl mb-16 text-center text-oil-accent">The Journey</h2>
          <div className="relative border-l border-neutral-700 ml-4 md:ml-0">
            {TIMELINE_DATA.map((event, index) => (
              <div key={index} className="mb-12 ml-8 relative group">
                <div className="absolute -left-[39px] top-1 w-5 h-5 rounded-full bg-neutral-800 border-2 border-neutral-600 group-hover:border-oil-accent group-hover:bg-oil-accent transition-colors"></div>
                <span className="text-sm text-oil-accent font-mono mb-1 block">{event.year}</span>
                <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                <p className="text-neutral-400 leading-relaxed">{event.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id={Section.PORTFOLIO} className="py-24 px-6 bg-neutral-900">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
             <h2 className="font-serif text-3xl md:text-4xl mb-6 text-oil-accent">Selected Works</h2>
             <div className="flex space-x-4">
               {(['All', 'Oil', 'Digital'] as const).map((cat) => (
                 <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-sm uppercase tracking-widest px-4 py-2 border rounded-full transition-all ${activeCategory === cat ? 'border-oil-accent text-oil-accent' : 'border-transparent text-neutral-500 hover:text-white'}`}
                 >
                   {cat}
                 </button>
               ))}
             </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item) => (
              <div key={item.id} className="group relative aspect-square bg-neutral-800 overflow-hidden cursor-pointer">
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="font-serif text-2xl text-oil-accent mb-2">{item.title}</h3>
                  <span className="text-xs uppercase tracking-widest text-white">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-neutral-500 italic">"300+ oil paintings created in flow state."</p>
          </div>
        </div>
      </section>

      {/* CSA Section */}
      <section className="py-24 px-6 bg-oil-accent text-oil-dark">
        <div className="max-w-4xl mx-auto text-center">
           <h2 className="font-serif text-3xl md:text-5xl mb-6">Club of Shared Activities</h2>
           <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto font-medium">
             A community platform uniting people through creativity, movement, and presence. 
             Art therapy, musical gatherings, contact improvisation, and camps.
           </p>
           <button className="bg-oil-dark text-oil-accent px-8 py-3 rounded-full hover:bg-black transition-colors uppercase tracking-widest text-sm font-bold">
             Join the Community
           </button>
        </div>
      </section>

      {/* Contact Section */}
      <section id={Section.CONTACT} className="py-24 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-12 text-oil-accent">Let's Connect</h2>
          <p className="text-neutral-400 mb-12">
            I’m especially interested in collaborative projects, and always open to connecting with curators, gallery owners, and fellow artists.
          </p>
          
          <div className="grid gap-6">
            <a href="https://t.me/JanTarX" target="_blank" rel="noreferrer" className="flex items-center justify-center p-4 border border-neutral-700 hover:border-oil-accent hover:bg-neutral-900 transition-all rounded-lg group">
              <span className="font-mono text-neutral-300 group-hover:text-oil-accent">Telegram: @JanTarX</span>
            </a>
            <div className="flex items-center justify-center p-4 border border-neutral-700 rounded-lg">
              <span className="font-mono text-neutral-300">WhatsApp: +31 6 4903 3401</span>
            </div>
            <a href="mailto:oosv@protonmail.com" className="flex items-center justify-center p-4 border border-neutral-700 hover:border-oil-accent hover:bg-neutral-900 transition-all rounded-lg group">
              <span className="font-mono text-neutral-300 group-hover:text-oil-accent">oosv@protonmail.com</span>
            </a>
          </div>
          
          <div className="mt-16 text-xs text-neutral-600">
            &copy; 2025 Artist Jan Tar. All rights reserved. <br/>
            Venlo, Netherlands.
          </div>
        </div>
      </section>

      {/* AI Chat Widget */}
      <AIChat />

    </div>
  );
};

export default App;