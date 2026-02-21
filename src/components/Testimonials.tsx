import React from 'react';

const testimonials = [
  {
    quote:
      'Anton played a key role in helping us get the project off the ground. His work on the MVP made it easier for us to explain the idea to both users and investors.',
    name: 'Viacheslav Sabirov',
    title: 'BATNA, Chief Executive Officer',
  },
  {
    quote:
      'Anton has a deep understanding of the needs of target customers and successfully turns business goals into final product.',
    name: 'Fabrizio Rossi',
    title: 'De Fonseca',
  },
  {
    quote:
      'Anton quickly and efficiently achieves his goals thanks to his responsibility, focus on results, deep understanding of user needs.',
    name: 'Sergey Doroshko',
    title: 'Leto Digital Agency, Managing Director',
  },
  {
    quote:
      'Anton is a clear expert who has a vast knowledge of UX and demonstrates a deep understanding of users.',
    name: 'Roman Soroka',
    title: 'KupiVIP',
  },
  {
    quote:
      'Anton dramatically improved our UX, added both functional and appealing features that became a huge part of digital strategy and help us grow our customer base.',
    name: 'Rossano Rolla',
    title: 'De Fonseca',
  },
  {
    quote:
      'Anton quickly understood the product and turned a complex technical offering into a clear and compelling visual story.',
    name: 'Mike Lukinov',
    title: 'OptimaJet, Managing Partner',
  },
  // Добавьте больше отзывов по мере необходимости
];

const Testimonials = () => {
  return (
    <section className="py-10 w-full" style={{ background: '#f7f5f4' }}>
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-medium text-foreground mb-2 font-headline">Testimonials</h2>
        <div className="mb-8"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full bg-white rounded-3xl transition-shadow duration-200 p-8 justify-between"
            >
              <div className="flex-1">
                <svg className="w-8 h-8 text-[#171717] mb-4" fill="currentColor" viewBox="0 0 24 24"><path d="M7.17 6.17A7 7 0 0 0 3 13v1a4 4 0 0 0 4 4h.01A2.99 2.99 0 0 0 10 15v-2A3 3 0 0 0 7 10H6.97a5 5 0 0 1 2.2-3.83zM17.17 6.17A7 7 0 0 0 13 13v1a4 4 0 0 0 4 4h.01A2.99 2.99 0 0 0 20 15v-2a3 3 0 0 0-3-3h-.03a5 5 0 0 1 2.2-3.83z"/></svg>
                <p className="text-xl md:text-2xl text-foreground font-normal leading-relaxed mb-8">{t.quote}</p>
              </div>
              <div className="flex items-center mt-auto">
                <div>
                  <div className="text-base font-semibold text-foreground">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 