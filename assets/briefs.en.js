/* English briefs: translation of assets/briefs.js.
   Structure, field types and the number of questions are identical to the Russian briefs, so the answers go into the same
   receiving Google Forms (the entry codes `e` and the form address are copied from the Russian brief by position).
   Field types: short — one line, long — paragraph, check — several options, radio — a single checkmark option.
   r: required. */
window.MV = window.MV || {};
window.MV.en = window.MV.en || {};
window.MV.en.briefs = [
  {
    id: 'commercial', n: '01', name: 'Commercial project', color: 'yellow',
    title: 'Brief for commercial projects',
    intro: 'A brief is a document where you describe your wishes and requirements for a design project and share information about yourself, your company, your target audience and your competitors. It helps me understand the task better and propose the best solution, so please answer as fully and in as much detail as you can.',
    steps: [
      { title: 'About you and your company', fields: [
        { t: 'long', q: 'Your contact details', r: 1, ph: 'Telegram, email or phone — whichever suits you best' },
        { t: 'short', q: 'Client', h: 'Enter the name of your organization, or your full name if you are a sole proprietor', r: 1 },
        { t: 'short', q: 'Line of business', r: 1 },
        { t: 'long', q: 'Price range of your products and services', r: 1 },
        { t: 'short', q: 'How long has your organization been on the market?', r: 1 },
        { t: 'long', q: 'About competitors', h: 'List your main competitors on the market and analyze their strengths and weaknesses. This will help me set you apart from them and avoid repeating solutions that already exist.', r: 1 },
        { t: 'long', q: 'What are your organization’s competitive advantages?', h: 'Main, additional and prospective.', r: 1 },
        { t: 'long', q: 'About marketing goals and objectives', h: 'State the main idea the brand style should convey, beyond simply identifying you.', r: 1 },
        { t: 'long', q: 'About your target audience', h: 'Describe who your product or service is for: the age, gender, education, interests, needs and problems of your audience. This will help me choose suitable colors, typefaces, images and elements for your project.', r: 1 },
        { t: 'long', q: 'The barrier in the customer’s mind that has to be overcome' }
      ]},
      { title: 'Project specification', intro: 'Give this section your special attention: garbage in, garbage out.', fields: [
        { t: 'long', q: 'Main task', h: 'State the main goals and objectives you set for the design work.', r: 1 },
        { t: 'short', q: 'Text', h: 'State what text should appear on the materials. If a version in Latin letters is also needed, give that spelling too. If the text has to be written, state the requirements it must meet.', r: 1 },
        { t: 'long', q: 'Which deliverables do you want to receive (logo, brand style, guidebook, website, packaging, business cards, etc.)?', r: 1 },
        { t: 'long', q: 'Do you already have any brand style elements? If so, which ones?', r: 1 },
        { t: 'long', q: 'Which colors, typefaces, symbols, images or styles do you prefer and want to see in the design? Why?', r: 1 },
        { t: 'long', q: 'Which colors, typefaces, symbols, images or styles do you dislike and want to avoid in the design? Why?', r: 1 },
        { t: 'long', q: 'Links to designs you like', h: 'Pinterest, Behance, Google Drive or Yandex Disk — any links. You can also send me files on Telegram or by email.', ph: 'Paste your links, one per line' },
        { t: 'long', q: 'Links to designs you DON’T like', h: 'Same here, as links. You can also send me files on Telegram or by email.', ph: 'Paste your links, one per line' },
        { t: 'long', q: 'What technical requirements do you have (file formats, sizes, resolutions, etc.)?', r: 1 },
        { t: 'long', q: 'What budget do you plan to allocate for this project?', h: 'Please give an amount or a range. It will help me propose the best solutions within your financial means.', r: 1 },
        { t: 'long', q: 'What timeline do you have in mind for the project?', r: 1 }
      ]},
      { title: 'Charity projects support option', intro: 'By ticking this box, you agree to a voluntary 10% increase in the price of your order. The extra funds compensate my time spent on charity projects for non-profit organizations. Your choice has no effect on the timing or quality of your order.', link: ['Details about the supported projects (in Russian)', 'https://ubiquitous-tugboat-b36.notion.site/18f0adf9b9d48069abc1e1126d4661d1?pvs=4'], fields: [
        { t: 'radio', q: 'Would you like to support my charity projects by increasing the price of your order by 10%?', o: ['Yes, let’s make the world a better place!'] }
      ]},
      { title: 'Bonus questions', intro: 'For the most thorough clients. Your answers will help me, and perhaps you too, understand your project even better. Answering is optional, but strongly encouraged.', fields: [
        { t: 'short', q: 'Which three words or phrases best describe the vision and mission of your project?' },
        { t: 'long', q: 'What key idea or value is at the core for you, and how exactly do you want your audience to perceive it?' },
        { t: 'long', q: 'What reaction or emotion do you want people to feel when they encounter your project and its message?' },
        { t: 'long', q: 'Which five adjectives best describe your project or team?' },
        { t: 'long', q: 'What role do you want to play for your audience? For example, a friend, a guide into a new field, an advisor?' },
        { t: 'long', q: 'What makes your project fundamentally unique compared with other similar initiatives?' },
        { t: 'long', q: 'Which difficulties, doubts or prejudices of your audience do you aim to work with? How does that shape your approach?' },
        { t: 'long', q: 'Are there stereotypes or entrenched beliefs you want to break down or change in your audience’s minds?' },
        { t: 'long', q: 'What important change in your audience’s life or perception would you like to start through your project?' },
        { t: 'long', q: 'If your project were a person, who would it be? Which traits and qualities would describe it best?' }
      ]}
    ]
  },
  {
    id: 'civic', n: '02', name: 'Civic initiative', color: 'orange',
    title: 'Brief for civic activists',
    intro: 'A brief is a document where you describe your wishes and requirements for a project and share information about yourself, your organization, your target audience and what makes you unique. It helps me understand the task better and propose the best solution, so please answer as fully and in as much detail as you can.',
    steps: [
      { title: 'About you and your organization', fields: [
        { t: 'short', q: 'Client', h: 'Enter the name of your organization, or your own name if you represent an individual initiative.', r: 1 },
        { t: 'long', q: 'Your contact details', r: 1, ph: 'Telegram, email or phone — whichever suits you best' },
        { t: 'short', q: 'Line of work', r: 1 },
        { t: 'long', q: 'Description of your activities', h: 'Describe your organization’s mission, main projects and initiatives.' },
        { t: 'long', q: 'What are your organization’s unique strengths?', h: 'Main achievements, distinctive approaches, partnerships.' },
        { t: 'long', q: 'History of the organization', h: 'How long have you been doing this work? A short history of how the organization was formed and has developed.' },
        { t: 'long', q: 'About competitors', h: 'List your main “competitors”, or the organizations you cooperate with that work in similar fields. Analyzing their strengths and weaknesses will help me set you apart from them and avoid repeating solutions that already exist.', r: 1 },
        { t: 'long', q: 'About your target audience', h: 'Describe who your projects and services are for: the age, gender, education, interests, needs and problems of your audience. This will help me choose suitable colors, typefaces, images and elements for your project.', r: 1 },
        { t: 'long', q: 'The barrier in your target audience’s mind that has to be overcome' }
      ]},
      { title: 'Project specification', intro: 'Give this section your special attention: garbage in, garbage out.', fields: [
        { t: 'long', q: 'Main task', h: 'State the main goals and objectives you set for the project.', r: 1 },
        { t: 'check', q: 'Which deliverables do you want to receive? (select all that apply)', r: 1, o: ['Logo', 'Brand style', 'Guidebook', 'Website', 'App', 'Product packaging', 'Business cards', 'Poster / flyer / banner'], other: 'Other' },
        { t: 'short', q: 'Text', h: 'State what text should appear on the materials. If a version in Latin letters is also needed, give that spelling too. If the text has to be written, state the requirements it must meet.', r: 1 },
        { t: 'long', q: 'Do you already have any brand style elements? If so, which ones?', r: 1 },
        { t: 'long', q: 'Which colors, typefaces, symbols, images or styles do you prefer and want to see in the design? Why?', r: 1 },
        { t: 'long', q: 'Which colors, typefaces, symbols, images or styles do you dislike and want to avoid in the design? Why?', r: 1 },
        { t: 'long', q: 'Links to designs you like', h: 'Pinterest, Behance, Google Drive or Yandex Disk — any links. You can also send me files on Telegram or by email.', ph: 'Paste your links, one per line' },
        { t: 'long', q: 'Links to designs you DON’T like', h: 'Same here, as links. You can also send me files on Telegram or by email.', ph: 'Paste your links, one per line' },
        { t: 'long', q: 'What technical requirements do you have (file formats, sizes, resolutions, etc.)?', r: 1 },
        { t: 'long', q: 'What timeline do you have in mind for the project?', r: 1 },
        { t: 'short', q: 'Deadline date' }
      ]},
      { title: 'Bonus questions', intro: 'For the most thorough clients. Your answers will help me, and perhaps you too, understand your project even better. Answering is optional, but strongly encouraged.', fields: [
        { t: 'short', q: 'Which three words or phrases best describe the vision and mission of your project?' },
        { t: 'long', q: 'What key idea or value is at the core for you, and how exactly do you want your audience to perceive it?' },
        { t: 'long', q: 'What reaction or emotion do you want people to feel when they encounter your project and its message?' },
        { t: 'long', q: 'Which five adjectives best describe your project or team?' },
        { t: 'long', q: 'What role do you want to play for your audience? For example, a friend, a guide into a new field, an advisor?' },
        { t: 'long', q: 'What makes your project fundamentally unique compared with other similar initiatives?' },
        { t: 'long', q: 'Which difficulties, doubts or prejudices of your audience do you aim to work with? How does that shape your approach?' },
        { t: 'long', q: 'Are there stereotypes or entrenched beliefs you want to break down or change in your audience’s minds?' },
        { t: 'long', q: 'What important change in your audience’s life or perception would you like to start through your project?' },
        { t: 'long', q: 'If your project were a person, who would it be? Which traits and qualities would describe it best?' }
      ]}
    ]
  }
];

/* The receiving Google Forms accept free text in every field, so English answers go into the same forms as the Russian ones.
   The form address and the entry codes are taken from the Russian brief with the same id, question by question. */
(function () {
  window.MV.en.briefs.forEach(function (b) {
    var ru = (window.MV.briefs || []).filter(function (x) { return x.id === b.id; })[0];
    if (!ru) return;
    b.form = ru.form;
    b.steps.forEach(function (s, si) { s.fields.forEach(function (f, fi) { var rf = ru.steps[si] && ru.steps[si].fields[fi]; if (rf) f.e = rf.e; }); });
  });
})();
