/* English content of the portfolio of Matvey Voronov: translation of assets/data.js.
   Structure is identical to the Russian file: the same ids, images, block types and order.
   Only the strings differ. Facts, numbers and names are kept; the wording is rewritten in natural English. */
window.MV = window.MV || {};
window.MV.en = {
  person: {
    name: 'Matvey Voronov',
    role: 'Graphic designer',
    hello: 'Hi! I’m Matvey, a graphic designer.',
    about: [
      'For me, a layout is not the answer to the question “what does it look like?” It is the answer to a client’s request: what should change once the project goes out into the world. That is why I start every job with a brief, and why I try to finish in a way that lets the team use the result without me.',
      'I’m drawn to European minimalism, where simplicity comes from precision, and to the Russian avant-garde, which was not afraid to experiment. I work between the two: I want a project to be beautiful and, at the same time, useful.'
    ],
    education: [
      ['2023', 'California Institute of the Arts', 'Graphic Design Specialization, online, Coursera'],
      ['2006–2012', 'Saint Petersburg Mining University', 'Organization Management, specialist degree']
    ],
    telegram: ['@Arelman', 'https://t.me/Arelman'],
    email: 'korvinart23@gmail.com',
    photo: 'me.jpg'
  },

  /* Reviews are translated from Russian: [order, text, client name, organization]. The organization is empty if the client gave none. */
  reviews: [
    ['Brochure layout', 'A professional approach! Lots of ideas and suggestions on how to do it better. Matvey did not just design the brochure; he also worked through the content of every page with us, step by step. Everything was done on time and in the best possible way!', 'Kristina L.', 'Preodolenie Trudnostey nonprofit'],
    ['Instagram post series', 'Matvey is a true professional. He did the work at the highest level, kept strictly to deadlines, paid attention to detail and stayed in touch. On top of that, Matvey has a wonderful sense of humor, which made the whole process pleasant and easy!', 'Oxana G.', 'Memoria Artis'],
    ['Banner layout design', 'It was very comfortable to work on this task, and since we had no clear vision of the final result, we looked at different options together with the volunteer. Huge thanks for the help and support, and of course for getting us to the perfect result in the end', 'Viktoria M.', ''],
    ['Logo for a youth project', 'Matvey did exactly what was needed. Perfect. We are adding Matvey to the project’s Hall of Fame.', 'Oleg I.', 'MMOOMM'],
    ['Banners for the “Internship” program', 'Matvey created wonderful banner design options for us, thank you. We are already working together on a second task, and I want to note that the comfortable communication with the volunteer goes perfectly with the high quality of the work.', 'Irina A.', 'House with a Lighthouse charity'],
    ['Banners (Yandex contextual ads)', 'Thank you very much! The work was done quickly and to a very high standard, and new design solutions were suggested for the banners. I recommend Matvey as an excellent designer: working with him was wonderful and very efficient.', 'Irina A.', 'House with a Lighthouse charity'],
    ['Presentation update', 'Thank you. The redesign is excellent. It is now much easier to present with these slides.', 'Irina A.', 'House with a Lighthouse charity'],
    ['Certificate design', 'Matvey, thank you for your work! The beautiful design of our certificates that you created will delight our volunteers all year!', 'Antonina L.', 'Vse Svoi! center'],
    ['Logo', 'Thank you so much for the logo! Thank you for the tips on what works best where! Thank you for the quick turnaround! I definitely recommend him!', 'Gulnaz O.', 'Birge project'],
    ['Name and visuals for a project', 'Matvey handled the task brilliantly and showed real creativity. Many thanks.', 'Semyon N.', ''],
    ['Logo swap on an image', 'Many thanks for your help! The work was done excellently! We were glad to work with you.', 'Antonina L.', 'Vse Svoi! center']
  ],

  projects: [
    {
      id: 'ri', name: 'Resilience Initiative', kind: 'Humanitarian initiative',
      title: 'A complete brand book and design system for a humanitarian initiative',
      year: '2025', scope: ['Brand identity', 'Social media kit & merch', 'Brand & communication strategy'],
      category: 'Commercial', role: 'Lead Brand Designer',
      pal: { bg: '#F2C84B', fg: '#14227A', ac: '#4A6FE3', on: '#14227A' },
      cover: 'ri-cover.jpg', mark: 'ri-01.jpg',
      lead: 'Resilience Initiative is an international humanitarian initiative. It helps children and adults keep their access to education, healthcare and the arts. A patron decides on a grant not only from reports but also from how an organization presents itself, so here the visual language is directly tied to trust.',
      blocks: [
        ['h', '01', 'Context and challenge'],
        ['h3', 'The problem'],
        ['list', [
          ['Slow approvals', 'There were no shared standards, so designers, volunteers and contractors spent hours agreeing on posters and reports.'],
          ['A different look in different places', 'On social media and in official documents the organization looked different, which did little to give international donors confidence in its professionalism.'],
          ['Every campaign from scratch', 'The graphics had to be invented anew for every new fundraising campaign.']
        ]],
        ['h3', 'The task'],
        ['lead', 'Build a visual system that brings order to internal processes, speeds up layout work and makes the organization recognizable in any channel.'],
        ['h', '02', 'Brand voice: bright hope and simple truths'],
        ['img', 'ri-02.jpg', 'An example of the brand voice'],
        ['p', 'The brand voice is built on the image of a “quiet hero”: a calm, sincere and respectful conversation between equals, with no bureaucracy and no pomp. You can hear a belief in change in it. With a voice like this, it is easier to talk to the audience, to volunteers and to international donors alike.'],
        ['h', '03', 'Visual system and identity'],
        ['h3', 'Color palette: flexibility and range'],
        ['p', 'Instead of a narrow base palette, the result is an extended color system: rich blues, sunny accents and soft background tones. The approved combinations can make up both a strict annual report and a high-contrast announcement for social media.'],
        ['img', 'ri-03.jpg', 'Color system'],
        ['h3', 'Typography: legible for everyone'],
        ['p', 'Unbounded is a free geometric sans-serif that was made for inclusive and humanitarian initiatives. It supports Cyrillic and Latin. Headlines are set in uppercase SemiBold and set the rhythm, while Regular, Light and Medium take care of body text, captions and interface.'],
        ['img', 'ri-04.jpg', 'Typography: Unbounded'],
        ['h3', 'Logo, iconography and brand symbols'],
        ['figs', [
          ['ri-05.jpg', 'Logo refinement', 'I systematized the geometry of the mark: I fixed the modular proportions, layout variants and clear space.'],
          ['ri-06.jpg', 'Custom icon pack', 'A set of 23 navigation and interface icons drawn in the same visual language as the mark. The line is deliberately uneven, as if drawn by hand, which makes the image warmer.'],
          ['ri-07.jpg', 'Symbol system', 'The brand elements translate the abstract meanings of help into a clear visual code.']
        ]],
        ['h', '04', 'Applied system: social media and documents'],
        ['img', 'ri-08.jpg', 'Social media layouts'],
        ['figs', [
          ['ri-09.jpg', 'Social media builder', 'A ready-made set of modular components in Figma. It quickly assembles announcements, carousels, quotes and volunteer stories.'],
          ['ri-10.jpg', 'Standards for official documents', 'Business documents now share one look: a carefully tuned modular grid, consistent margins and a clear order for details. With documents like these, you can approach patrons and international foundations with confidence.']
        ]],
        ['h', '05', 'Result and rollout'],
        ['p', 'After the brand book, Resilience Initiative’s communication stopped relying on one-off decisions and became a system the team can use on its own.'],
        ['metrics', [
          ['Faster', 'Templates instead of a blank page', 'A single set of components and ready-made templates lets the social media team assemble announcements, reports and presentations from ready-made parts, without drawing from scratch.'],
          ['One look', 'A cohesive image of the foundation', 'Consistent documents and a single palette make the organization recognizable and tidy in the eyes of an international audience and donor foundations.'],
          ['On its own', 'An easy start for new people', 'Clear brand voice rules and guidelines make it quick to bring in new volunteers and contractors, without long revisions and approvals.'],
          ['Merch', 'A fundraising tool', 'A line of clothing and souvenirs was made from the key symbols: pins, bandanas, hoodies. Merch became a working channel for collecting donations.']
        ]],
        ['img', 'ri-11.jpg', 'The logo on paper']
      ]
    },
    {
      id: 'salt', name: 'SALT', kind: 'Cultural community',
      title: 'A visual system and brand strategy for an independent cultural community',
      year: '2025', scope: ['Brand identity', 'Social media kit & merch', 'Brand & communication strategy'],
      category: 'Commercial', role: 'Lead Brand Designer',
      pal: { bg: '#121212', fg: '#F1F5FF', ac: '#FFC20E', on: '#121212' },
      cover: 'salt-01.jpg', mark: 'salt-02.jpg',
      lead: 'SALT is an independent community that brings people together around peace, culture and mutual aid. It hosts poetry readings and concerts, and the project itself serves as a platform for artists and authors.',
      blocks: [
        ['h', '01', 'Context and challenge'],
        ['h3', 'The problem'],
        ['list', [
          ['Scattered communication', 'Materials were laid out any which way, and the brand had no recognizable face, either in the feed or on posters.'],
          ['Too much manual work', 'The team and volunteers spent too much time on every poster, quote card or financial report.'],
          ['No defined voice', 'Posts and replies were written by different people in different tones, and the audience’s trust eroded as a result.']
        ]],
        ['h3', 'The task'],
        ['lead', 'Translate the project’s deep humanitarian philosophy into the language of concise graphics and build a scalable system the team can run on its own.'],
        ['img', 'salt-02.jpg', 'The SALT logo'],
        ['h', '02', 'Strategy and meaning'],
        ['h3', 'Communication philosophy: a conversation between equals'],
        ['p', 'We started with meaning; the graphics came later.'],
        ['list', [
          ['Equality in type', 'All SALT texts are set in lowercase by default. That way we give up hierarchy and formalism and show respect for the reader.'],
          ['A capital letter as a spotlight', 'Capital letters follow meaning, not school rules. They highlight only the key values: Peace, Culture, SALT.'],
          ['Brand voice', 'Calm confidence, honesty, restraint and no pomp.']
        ]],
        ['img', 'salt-03.jpg', 'The brand voice formula'],
        ['h', '03', 'Design system'],
        ['h3', 'Color palette: the logic of accents'],
        ['imgs', ['salt-04.jpg', 'salt-05.jpg', 'salt-06.jpg', 'salt-07.jpg'], 'Salt, kinda black, saffron, sky blue'],
        ['h3', 'Type pairing: architecture and document'],
        ['imgs', ['salt-08.jpg', 'salt-09.jpg'], 'Jost and TrueTypewriter Polyglot'],
        ['h', '04', 'Graphic solutions: iconography and photo style'],
        ['figs', [
          ['salt-10.jpg', 'Custom icon pack', 'A set of thematic pictograms in the brand style.'],
          ['salt-11.jpg', 'Marks', 'Versions of the mark and the logo in one consistent line language.'],
          ['salt-12.jpg', 'Pattern', 'Concise icons easily turn into a background pattern and do not overload the composition.']
        ]],
        ['img', 'salt-13.jpg', 'Photo style and “torn” frames: vector textured frames and a quick photo-processing scheme were made for posters and quotes. Layout work became much faster.'],
        ['h', '05', 'Results and impact'],
        ['p', 'With a unified visual and communication system, the project began to work faster and stand out more.'],
        ['metrics', [
          ['Builder', 'Built from components', 'Posters, posts and announcements are assembled from a ready-made kit in Figma, and every piece is made noticeably faster.'],
          ['Distinct', 'A face in the feed', 'High-contrast graphics with “torn” frames and a stage-like photo style set SALT apart on social media at first glance.'],
          ['One voice', 'One communication standard', 'The project has a system that lets the team and volunteers publish materials and reports in one voice, without arguing over design.'],
          ['Merch', 'An ecosystem of applications', 'The system carried over to clothing, print and items for the space with no effort, and the brand became a cohesive visual environment.']
        ]],
        ['imgs', ['salt-14.jpg', 'salt-15.jpg'], 'Items for the space and pins']
      ]
    },
    {
      id: 'fas', name: 'Adaptive Sports Federation', kind: 'NGO, Republic of Ingushetia',
      title: 'Logo and identity for the Adaptive Sports Federation of the Republic of Ingushetia',
      year: '2025', scope: ['Brand identity', 'Logo'],
      category: 'Charity', role: 'Lead Brand Designer',
      pal: { bg: '#0B6B2B', fg: '#FFFFFF', ac: '#E32A1C', on: '#FFFFFF' },
      cover: 'fas-cover.jpg', mark: 'fas-01.jpg',
      lead: 'The Adaptive Sports Federation of Ingushetia is a young non-profit organization. It supports people with disabilities through physical education and sport. I needed to create an identity that is restrained and modern while respecting the cultural and religious context of the region.',
      blocks: [
        ['img', 'fas-01.jpg', 'The mark on fabric'],
        ['lead', 'The visual language had to carry acceptance, dignity, equality and inclusion.'],
        ['p', 'That is how the brand book came about, one where empathy sits alongside structure, and functionality alongside spiritual depth.'],
        ['h', null, 'About the logo'],
        ['img', 'fas-04.jpg', 'Logo versions'],
        ['p', 'The logo is the main point of meaning. It brings together:'],
        ['list', [
          ['', 'a traditional Ingush symbol, a solar sign with three rays;'],
          ['', 'an Islamic eight-pointed star that serves as a frame;'],
          ['', 'three curved arcs that refer to the symbolism of the Paralympic movement.']
        ]],
        ['p', 'The mark is developed in several versions: the main round one (color and monochrome) and adaptive horizontal ones. The construction is geometrically precise, the proportions are strict, and usage guidelines come with the mark.'],
        ['img', 'fas-05.jpg', 'Stickers'],
        ['h', null, 'About the palette'],
        ['img', 'fas-02.jpg', 'The system’s three colors'],
        ['p', 'The system rests on three colors: deep green, warm red and white.'],
        ['list', [
          ['Green', 'Refers to the Islamic tradition, harmony and life. It is the main color of the brand.'],
          ['Red', 'Gives the accent and is associated with strength, movement and overcoming obstacles.'],
          ['White', 'Balances the composition and leaves room to breathe, reinforcing the idea of accessibility and openness.']
        ]],
        ['p', 'The colors were chosen for emotional richness and contrast in a real environment, so that print and screen speak with the same voice.'],
        ['img', 'fas-06.jpg', 'A brand book spread'],
        ['h', null, 'About the typography'],
        ['img', 'fas-03.jpg', 'Sheets with type samples'],
        ['p', 'The typography is built on the Jost typeface. I chose it for its geometry, legibility and a neutral but confident voice. It does not pull attention to itself and supports the meaning.'],
        ['list', [
          ['Jost Semibold', 'For headlines. It structures the page and sets its visual “skeleton”.'],
          ['Jost Regular', 'For body text. The shapes are friendly and the rhythm is even.'],
          ['Demonstration sheets', 'The brand book shows both the principles of working with typography and sheets with type samples, so the team can write and lay out text correctly and confidently from day one.']
        ]],
        ['h', null, 'Outcome'],
        ['p', 'This work called not only for precise graphics but also for tact, respect for context and the ability to listen. I had to keep a balance along several axes at once: modernity and tradition, universality and cultural roots, expressiveness and practicality.'],
        ['lead', 'The result is an identity that can keep growing: stable and flexible. It does not dictate a style; the style grows out of meaning.'],
        ['imgs', ['fas-07.jpg', 'fas-08.jpg', 'fas-09.jpg'], 'Applications: a bottle, business cards, a sports bag']
      ]
    },
    {
      id: 'tme', name: 'Taiwan Mountain Essence', kind: 'Premium tea',
      title: 'Logo sketches for a high-mountain Taiwanese tea brand',
      year: '2025', scope: ['Brand identity', 'Logo'],
      category: 'Commercial', role: 'Lead Brand Designer',
      pal: { bg: '#17132B', fg: '#F3EBDD', ac: '#D4A84B', on: '#17132B' },
      cover: 'tme-cover.jpg', mark: 'tme-01.jpg',
      lead: 'A brand of premium high-mountain Taiwanese tea. The visual identity had to show the refinement of the product, the place it comes from and its cultural heritage.',
      blocks: [
        ['p', 'Audience: restaurateurs and hoteliers (HoReCa), connoisseurs of tea culture and anyone with a high aesthetic standard.'],
        ['h', null, 'Design concepts'],
        ['h3', '1. Minimalist premium'],
        ['imgs', ['tme-01.jpg', 'tme-03.jpg'], 'Concept 1: mark and application'],
        ['list', [
          ['Idea', 'A thin silhouette of a tea leaf drawn in gold strokes. The focus is on conciseness and status.'],
          ['Palette', 'Deep navy or violet with gold.'],
          ['Typeface', 'The classic Roman serif Cinzel.'],
          ['Use', 'The main elite line, premium packaging, boutique identity.']
        ]],
        ['img', 'tme-02.jpg', 'Packaging for the main line'],
        ['h3', '2. Cultural authenticity and symbolism'],
        ['imgs', ['tme-04.jpg', 'tme-05.jpg'], 'Concept 2: mark and application'],
        ['list', [
          ['Idea', 'A Taiwan black bear fitted into the shape of a tea leaf. It signals ecological values and a connection to local traditions.'],
          ['Typeface', 'The stylized Parchment MF.'],
          ['Use', 'Gift packaging, limited editions, souvenir products.']
        ]],
        ['img', 'tme-06.jpg', 'Gift packaging'],
        ['h3', '3. Geography and naturalness'],
        ['imgs', ['tme-07.jpg', 'tme-08.jpg'], 'Concept 3: mark and application'],
        ['list', [
          ['Idea', 'Graphics of mountain peaks and plantations recall the organic origin of the tea.'],
          ['Palette', 'Dark graphite gray, grassy green and gold accents.'],
          ['Typeface', 'The strict and elegant Balthazar.'],
          ['Use', 'Eco lines, corporate products, organic series.']
        ]],
        ['img', 'tme-09.jpg', 'Organic series'],
        ['h', null, 'Summary'],
        ['lead', 'The three concepts offer a flexible choice of positioning: from strict classics to a deep cultural story. Any of them can be carried over to any application.'],
        ['img', 'tme-10.jpg', 'The three concepts side by side']
      ]
    },
    {
      id: 'sk', name: 'Heart of Kola', kind: 'Kolsky Foundation and GTRK Murmansk',
      title: 'Name, logo and brand book for the “Heart of Kola” project',
      year: '2023', scope: ['Naming', 'Brand identity'],
      category: 'Charity', role: 'Lead Brand Designer',
      pal: { bg: '#1E4A6E', fg: '#FFFFFF', ac: '#D9410B', on: '#FFFFFF' },
      cover: 'sk-cover.jpg', mark: 'sk-01.jpg',
      lead: 'The Kolsky Foundation approached me through the itvist.org platform. They needed an identity for a new project the foundation was running together with GTRK Murmansk, the regional state TV and radio company. The project was meant to make the non-profit more open and to involve the region’s residents in charity.',
      blocks: [
        ['img', 'sk-01.jpg', 'The project mark'],
        ['p', 'My job was to come up with a name, a logo and a brand style that would make the project stand out in the information space and convey its mission.'],
        ['img', 'sk-02.jpg', 'The source brands: the Kolsky Foundation and GTRK'],
        ['p', 'The client wanted the project to look modern, be recognizable and still fit with the foundation’s style. The palette was especially important: the brand blue and gold, plus white and red as a nod to the GTRK tricolor.'],
        ['h', null, 'Getting started'],
        ['p', 'To understand the task better, I prepared a detailed brief. At this stage I gathered everything needed: the audience, the project’s mission, stylistic preferences and technical constraints.'],
        ['img', 'sk-03.jpg', 'Answers to the brief'],
        ['lead', 'Of the six name options, “Heart of Kola” (in Russian, “Сердце Кольского”) resonated most: a metaphor for the foundation’s unifying role and its efforts to build a community.'],
        ['h', null, 'Logo development'],
        ['p', 'Once the name was approved, I set to work on the logo. It had to be versatile and memorable, and to work equally well on television, on social media and in print.'],
        ['p', 'I made three concepts. They contain references to the flag of the Murmansk Region, the project’s brand colors and modern graphic solutions that underline the humanitarian and social character of the mission.'],
        ['img', 'sk-04.jpg', 'Three logo concepts'],
        ['img', 'sk-05.jpg', 'The approved logo'],
        ['h', null, 'Creating the brand book'],
        ['p', 'The next stage was the brand book, which helps apply the brand style correctly and consistently. It contains:'],
        ['list', [
          ['', 'rules for using the logo;'],
          ['', 'the brand palette and typefaces (Cruinn Bold and Cruinn Regular);'],
          ['', 'composition principles;'],
          ['', 'recommendations for different media: digital platforms, print, television.']
        ]],
        ['imgs', ['sk-07.jpg', 'sk-08.jpg', 'sk-09.jpg'], 'Brand book spreads'],
        ['h', null, 'Wrap-up and rollout'],
        ['p', 'I delivered the name, logo and brand book within the agreed deadlines. The client put the new brand style to use right away: the “Heart of Kola” logo was shown on the regional TV channel and used in other media.'],
        ['imgs', ['sk-10.jpg', 'sk-11.jpg'], 'The project on the website and on air at GTRK Murmansk'],
        ['img', 'sk-12.jpg', 'Create, inspired by Kindness.']
      ]
    },
    {
      id: 'kp', name: 'CyberPravda', kind: 'Startup, a service for verified information',
      title: 'Redesign and restructuring of a pitch deck to attract investment',
      year: '2024', scope: ['Presentation', 'Logo'],
      category: 'Startup support', role: 'Lead Brand Designer',
      pal: { bg: '#0E2A2E', fg: '#FFFFFF', ac: '#33B9C4', on: '#0E2A2E' },
      cover: 'kp-cover.jpg', mark: 'kp-01.jpg',
      lead: 'At the Demhack9 hackathon, participants from the previous year came up to me with their project and asked me to look at their presentation and maybe help improve it. I agreed: their idea had potential.',
      blocks: [
        ['h', null, 'Analysis of the source material'],
        ['p', 'First I went through the original presentation in detail: I needed to find the weak spots and understand what to change.'],
        ['list', [
          ['Overload', 'Too much data, which made the material hard to take in.'],
          ['No evidence', 'The claims were not backed by facts, which made the project harder to believe.'],
          ['Weak logic and structure', 'The data came in an order unfamiliar to investors, and the key ideas got lost.']
        ]],
        ['img', 'kp-02.jpg', 'A slide from the original presentation'],
        ['h', null, 'Redesign, copy and structure'],
        ['p', 'I reworked the structure, the copy and the design. The goal was a clear, convincing and modern document that answers investors’ questions. The presentation was also translated into English.'],
        ['ba', [
          ['kp-09a.jpg', 'kp-09b.jpg', 'A clean, minimalist style puts the main thing first.'],
          ['kp-04a.jpg', 'kp-04b.jpg', 'Weak wording is replaced with precise, convincing statements.'],
          ['kp-05a.jpg', 'kp-05b.jpg', 'Bulky text and tables gave way to compact, clear elements.'],
          ['kp-06a.jpg', 'kp-06b.jpg', 'Infographics were added to show the data clearly, including financial forecasts and algorithms.']
        ]],
        ['h', null, 'Logo'],
        ['p', 'I also drew them a simple, concise and modern logo. In my view, the presentation did not work without it, and it became an important part of how the project is presented overall.'],
        ['img', 'kp-01.jpg', 'The CyberPravda logo'],
        ['h', null, 'Result'],
        ['lead', 'With the updated presentation, the CyberPravda team got into the Spanish accelerator SHUB.'],
        ['ba', [
          ['kp-07a.jpg', 'kp-07b.jpg', 'Every page was its own difficult but interesting puzzle.']
        ]]
      ]
    }
  ]
};
