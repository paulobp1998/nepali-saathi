// Culture: illustrated articles about Nepal, a month-by-month festival calendar, and links from each lesson.
// Article: id, title, sub, art (key of C.art), intro, sections [{h, p}], words [{ne, ro, en}], facts [], quiz [{q, a, o, why}].
(function () {
const C = window.COURSE;

/* Flat illustrations. Background uses --art-sky so they suit light and dark themes. */
const bg = '<rect width="160" height="100" rx="14" fill="var(--art-sky)"/>';
const flags = (y = 18) => `<path d="M0 ${y} Q80 ${y + 14} 160 ${y}" fill="none" stroke="var(--muted)" stroke-width=".7"/>` +
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(i => { const x = 8 + i * 15, yy = y + 14 * (1 - Math.pow((x - 80) / 80, 2)) * 0.5; const c = ["#2f5fa8", "#f6f1e7", "#c8372d", "#2f8a4e", "#f0c53a"][i % 5]; return `<path d="M${x} ${yy.toFixed(1)} h9 l-4.5 8z" fill="${c}"/>`; }).join("");
const svg = s => `<svg viewBox="0 0 160 100" class="art" aria-hidden="true">${bg}${s}</svg>`;
C.art = {
  stupa: svg(flags(14) +
    '<rect x="34" y="82" width="92" height="8" rx="2" fill="#d8cfbd"/><rect x="42" y="76" width="76" height="7" rx="2" fill="#e8e1d2"/>' +
    '<path d="M48 77 A32 30 0 0 1 112 77Z" fill="#f7f3ea"/><rect x="67" y="38" width="26" height="11" rx="1" fill="#e0a83a"/>' +
    '<path d="M71 44 q3 -3 6 0 M83 44 q3 -3 6 0" stroke="#1d2b44" stroke-width="1.6" fill="none"/><path d="M80 45.5 q2.4 1.2 0 3.4" stroke="#1d2b44" stroke-width="1.3" fill="none"/>' +
    '<path d="M70 38 L80 15 L90 38Z" fill="#e8b347"/><path d="M73 32h14M74.5 27h11M76 22h8" stroke="#c38a24" stroke-width="1.2"/><path d="M75 15h10l-5-6z" fill="#e8b347"/>'),
  temple: svg('<circle cx="128" cy="24" r="10" fill="#f0c53a" opacity=".8"/>' +
    '<rect x="50" y="78" width="60" height="12" fill="#a8603a"/><rect x="58" y="62" width="44" height="16" fill="#8b4a2b"/><rect x="74" y="66" width="12" height="12" fill="#3b2418"/>' +
    '<path d="M40 64 L80 50 L120 64Z" fill="#6b3a24"/><rect x="62" y="44" width="36" height="8" fill="#8b4a2b"/>' +
    '<path d="M48 46 L80 32 L112 46Z" fill="#6b3a24"/><rect x="68" y="28" width="24" height="6" fill="#8b4a2b"/><path d="M58 30 L80 18 L102 30Z" fill="#6b3a24"/>' +
    '<path d="M78 18 h4 l-2 -9z" fill="#e0a83a"/><path d="M44 64v4M116 64v4M52 46v4M108 46v4" stroke="#e0a83a" stroke-width="1.5"/>'),
  diyo: svg('<circle cx="40" cy="30" r="2" fill="#f0c53a"/><circle cx="120" cy="22" r="2" fill="#f0c53a"/><circle cx="135" cy="45" r="1.5" fill="#f0c53a"/><circle cx="25" cy="55" r="1.5" fill="#f0c53a"/>' +
    '<path d="M80 30 C86 42 88 50 80 58 C72 50 74 42 80 30Z" fill="#f59e2b"/><path d="M80 42 C83 48 83 52 80 56 C77 52 77 48 80 42Z" fill="#ffe08a"/>' +
    '<path d="M54 64 Q80 88 106 64 Q80 70 54 64Z" fill="#b5532a"/><path d="M54 64 Q80 70 106 64" stroke="#8a3a1c" stroke-width="2" fill="none"/>' +
    [30, 46, 114, 130].map((x, i) => `<circle cx="${x}" cy="${78 + (i % 2) * 4}" r="7" fill="${i % 2 ? "#f59e2b" : "#f0c53a"}"/><circle cx="${x}" cy="${78 + (i % 2) * 4}" r="3" fill="#e07b1a"/>`).join("")),
  momo: svg('<ellipse cx="80" cy="80" rx="58" ry="10" fill="#b98a4a"/><rect x="26" y="56" width="108" height="24" rx="4" fill="#d6aa66"/><path d="M26 64h108M26 72h108" stroke="#b98a4a" stroke-width="1.2"/>' +
    [44, 64, 84, 104, 118].map((x, i) => `<path d="M${x - 10} ${54 - (i % 2) * 3} q10 -18 20 0z" fill="#fbf6ec"/><path d="M${x - 4} ${46 - (i % 2) * 3} q4 -6 8 0" stroke="#e1d6c2" stroke-width="1.4" fill="none"/>`).join("") +
    '<path d="M60 26 q4 -8 0 -14 M80 22 q4 -8 0 -14 M100 26 q4 -8 0 -14" stroke="var(--muted)" stroke-width="1.4" fill="none" opacity=".6"/>'),
  thali: svg('<circle cx="80" cy="54" r="38" fill="#c9ccd2"/><circle cx="80" cy="54" r="33" fill="#e3e5e9"/>' +
    '<ellipse cx="72" cy="58" rx="16" ry="12" fill="#fbf8f1"/><circle cx="98" cy="40" r="9" fill="#e0a83a"/><circle cx="98" cy="40" r="6" fill="#f0c53a"/>' +
    '<circle cx="100" cy="66" r="7" fill="#2f8a4e"/><circle cx="62" cy="36" r="6" fill="#c8372d"/><path d="M58 76 q8 6 18 4" stroke="#2f8a4e" stroke-width="3" fill="none" stroke-linecap="round"/>'),
  mountains: svg('<circle cx="124" cy="22" r="9" fill="#f0c53a" opacity=".85"/><path d="M0 92 L38 44 L54 60 L84 18 L114 58 L130 46 L160 80 V100 H0Z" fill="var(--mtn)"/>' +
    '<path d="M84 18 L95 34 L89 32 L84 38 L78 31 L72 34Z M38 44 L45 53 L40 52 L37 56 L33 51Z" fill="var(--snow)"/><path d="M0 100 L0 88 Q40 80 80 90 T160 86 V100Z" fill="#2f8a4e" opacity=".55"/>'),
  flag: svg('<rect x="44" y="8" width="3" height="88" fill="#6b5b4b"/><path d="M47 10 L112 50 L76 50 L114 90 L47 90Z" fill="#c8102e" stroke="#003893" stroke-width="4" stroke-linejoin="miter"/>' +
    '<path d="M58 32 a10 10 0 0 0 20 0 a10 7 0 0 1 -20 0z" fill="#fff"/><circle cx="68" cy="27" r="3.5" fill="#fff"/>' +
    '<g fill="#fff"><circle cx="66" cy="72" r="6"/>' + Array.from({ length: 12 }, (_, i) => { const a = i * Math.PI / 6; return `<path d="M${(66 + 6 * Math.cos(a - .2)).toFixed(1)} ${(72 + 6 * Math.sin(a - .2)).toFixed(1)} L${(66 + 10 * Math.cos(a)).toFixed(1)} ${(72 + 10 * Math.sin(a)).toFixed(1)} L${(66 + 6 * Math.cos(a + .2)).toFixed(1)} ${(72 + 6 * Math.sin(a + .2)).toFixed(1)}Z"/>`; }).join("") + '</g>'),
  lotus: svg('<ellipse cx="80" cy="82" rx="46" ry="6" fill="#2f5fa8" opacity=".35"/>' +
    '<path d="M80 30 C92 44 92 62 80 78 C68 62 68 44 80 30Z" fill="#f39bb0"/><path d="M80 78 C64 70 54 56 52 42 C66 48 76 60 80 78Z" fill="#ec7f9b"/><path d="M80 78 C96 70 106 56 108 42 C94 48 84 60 80 78Z" fill="#ec7f9b"/>' +
    '<path d="M80 80 C60 80 44 72 38 62 C54 62 70 70 80 80Z M80 80 C100 80 116 72 122 62 C106 62 90 70 80 80Z" fill="#d9617f"/>'),
  calendar: svg('<rect x="40" y="18" width="80" height="70" rx="8" fill="#fbf8f1" stroke="#c8372d" stroke-width="2"/><rect x="40" y="18" width="80" height="18" rx="8" fill="#c8372d"/><rect x="40" y="28" width="80" height="8" fill="#c8372d"/>' +
    '<path d="M58 12v12M102 12v12" stroke="#6b5b4b" stroke-width="3" stroke-linecap="round"/>' +
    Array.from({ length: 12 }, (_, i) => `<rect x="${50 + (i % 4) * 16}" y="${44 + Math.floor(i / 4) * 13}" width="10" height="8" rx="2" fill="${i === 6 ? "#f0c53a" : "#e4ddd0"}"/>`).join("")),
  people: svg('<path d="M0 100 V84 Q80 74 160 84 V100Z" fill="#2f8a4e" opacity=".45"/>' +
    [[40, "#2f5fa8", 1], [80, "#c8372d", 0], [120, "#2f8a4e", 1]].map(([x, c, topi]) => `<circle cx="${x}" cy="40" r="10" fill="#c98b5e"/><path d="M${x - 16} 88 Q${x - 16} 54 ${x} 54 Q${x + 16} 54 ${x + 16} 88Z" fill="${c}"/>` +
      (topi ? `<path d="M${x - 10} 33 L${x - 8} 24 L${x + 9} 26 L${x + 10} 33Z" fill="#7b2d3a"/><path d="M${x - 9} 30 h18" stroke="#f0c53a" stroke-width="1" stroke-dasharray="2 2"/>` : `<path d="M${x - 11} 40 Q${x} 22 ${x + 11} 40 Q${x} 31 ${x - 11} 40Z" fill="#2a2420"/><circle cx="${x}" cy="35" r="1.6" fill="#c8372d"/>`)).join("")),
  house: svg('<path d="M0 100 V86 H160 V100Z" fill="#2f8a4e" opacity=".45"/><rect x="44" y="48" width="72" height="40" fill="#e9d8b8"/><rect x="44" y="70" width="72" height="18" fill="#b5532a"/>' +
    '<path d="M36 50 L80 24 L124 50Z" fill="#7a8a99"/><rect x="74" y="66" width="12" height="22" fill="#5a3a24"/><rect x="54" y="54" width="10" height="9" fill="#5a3a24"/><rect x="96" y="54" width="10" height="9" fill="#5a3a24"/>' +
    '<path d="M124 56 v-30" stroke="#6b5b4b" stroke-width="1.5"/><path d="M124 26 h12 l-4 4 l4 4 h-12z" fill="#c8372d"/>'),
  hands: svg('<path d="M14 20 Q80 64 146 20" fill="none" stroke="#5f7d3a" stroke-width="1.4"/>' +
    Array.from({ length: 13 }, (_, i) => { const t = i / 12, x = 14 + 132 * t, y = 20 + 44 * 4 * t * (1 - t) * 0.5; return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="6.5" fill="${i % 2 ? "#f59e2b" : "#f0c53a"}"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="2.6" fill="#e07b1a"/>`; }).join("") +
    '<text x="80" y="82" text-anchor="middle" font-family="Mukta, Kohinoor Devanagari, Noto Sans Devanagari, sans-serif" font-size="30" font-weight="600" fill="var(--accent)">नमस्ते</text>')
};

C.culture = [
{ id: "namaste", title: "Namaste and body language", sub: "Greetings, hands, head and feet", art: "hands",
  intro: "How you greet, give and sit says as much as your words. A few habits make Nepalis feel instantly respected.",
  sections: [
    { h: "Namaste", p: "Press your palms together at chest height and say <b>namaste</b>, with a slight bow for elders. It means roughly “I bow to you”. It works for hello and goodbye, morning or night. <b>Namaskaar</b> is even more respectful. Handshakes are common between men in cities, but namaste is never wrong." },
    { h: "The head wobble", p: "A gentle side-to-side tilt of the head means <i>yes, OK, I'm listening</i>, not <i>no</i>. You'll catch yourself doing it after a few weeks." },
    { h: "Hands", p: "Give and receive things, especially money and food, with the <b>right hand</b>. For extra respect, touch your left hand to your right forearm or use both hands. The left hand is associated with washing and is considered unclean." },
    { h: "Head and feet", p: "The head is the most respected part of the body and the feet the lowest. Don't pat people on the head, don't point your feet at people, altars or fireplaces, and don't step over someone sitting on the floor. If your foot touches someone by accident, touch their arm and then your forehead as an apology." }
  ],
  words: [
    { ne: "नमस्कार", ro: "namaskaar", en: "a very respectful namaste" },
    { ne: "दाहिने हात", ro: "daahine haat", en: "right hand" },
    { ne: "माफ गर्नुहोस्", ro: "maaf garnuhos", en: "excuse me, sorry" },
    { ne: "टाउको", ro: "taauko", en: "head" },
    { ne: "खुट्टा", ro: "khuttaa", en: "foot, leg" }
  ],
  facts: [
    "A side-to-side head wobble in Nepal means “yes” or “OK”, not “no”.",
    "In Nepal, give and receive money with your right hand, touching your left hand to your right forearm for extra respect.",
    "Stepping over someone's legs in Nepal is rude. Walk around, or ask them to move."
  ],
  quiz: [
    { q: "A shopkeeper tilts their head side to side when you ask the price. It probably means…", a: "Yes / OK", o: ["No", "I don't understand"], why: "The head wobble signals agreement or attention." },
    { q: "Which hand should you use to hand over money?", a: "The right hand", o: ["The left hand", "Either, it doesn't matter"], why: "The left hand is considered unclean; use the right, or both." },
    { q: "Your foot touches someone's leg by accident. A good apology:", a: "Touch their arm, then your forehead, and say maaf garnuhos", o: ["Pat them on the head", "Laugh and ignore it"], why: "Feet are lowest; this gesture apologises for the contact." }
  ] },

{ id: "etiquette", title: "Home, table and hospitality", sub: "Shoes, jutho, and “eat a little more”", art: "thali",
  intro: "Being a guest in a Nepali home is a joy, and a test of your manners. These are the rules nobody will tell you, but everybody notices.",
  sections: [
    { h: "Shoes off", p: "Take your shoes off before entering a home, a kitchen, a temple or a monastery. Look for a pile of sandals by the door. Some Hindu temples also don't allow leather." },
    { h: "Jutho: ritual impurity", p: "Food or water that has touched someone's mouth, or a plate or spoon they've eaten from, is <b>jutho</b> (impure). Don't offer anyone food you've bitten, don't eat from a shared plate with your own spoon, and when sharing a water bottle, pour it into your mouth without touching your lips to it." },
    { h: "Guest is god", p: "Nepalis follow the old saying <i>atithi devo bhava</i>: the guest is a god. You'll be served first and offered more again and again: <b>ali kati khaanus na!</b> (have a little more!). To stop, cover your plate with your hand and say <b>pugyo, dherai mitho bhayo</b> (that's enough, it was delicious)." },
    { h: "Eating", p: "Daal bhaat is traditionally eaten with the right hand: mix rice, daal and curry with your fingertips and push it into your mouth with your thumb. Spoons are always available, so do whichever you're comfortable with. Wash your hands before and after." }
  ],
  words: [
    { ne: "जुठो", ro: "jutho", en: "ritually impure (touched by the mouth)" },
    { ne: "पाहुना", ro: "paahunaa", en: "guest" },
    { ne: "अलि कति खानुस् न।", ro: "ali kati khaanus na.", en: "Have a little more." },
    { ne: "पुग्यो, धेरै मिठो भयो।", ro: "pugyo, dherai mitho bhayo.", en: "That's enough, it was delicious." },
    { ne: "जुत्ता खोल्नुहोस्।", ro: "juttaa kholnuhos.", en: "Please take your shoes off." }
  ],
  facts: [
    "In Nepal, food that has touched someone's mouth is “jutho” (impure) and shouldn't be shared.",
    "When drinking from a shared bottle in Nepal, pour the water into your mouth without touching the bottle to your lips.",
    "To refuse a third helping politely in Nepal, cover your plate with your hand and say “pugyo”."
  ],
  quiz: [
    { q: "A friend offers you a bite of their apple. Taking a bite would make it…", a: "jutho, so they may not want it back", o: ["lucky", "a sign of engagement"], why: "Anything touched by the mouth becomes jutho." },
    { q: "How do you politely say you've had enough?", a: "pugyo, dherai mitho bhayo", o: ["malaai bhok laagyo", "ali kati khaanus na"], why: "pugyo = enough; mitho bhayo = it was delicious." },
    { q: "Where should you take off your shoes?", a: "Homes, kitchens and temples", o: ["Only in hotels", "Only on festival days"], why: "Shoes stay outside sacred and domestic spaces." }
  ] },

{ id: "buddhism", title: "Buddhism in Nepal", sub: "Lumbini, stupas, prayer flags and the mantra", art: "stupa",
  intro: "The Buddha was born in Nepal, and Buddhism has lived here alongside Hinduism for more than two thousand years.",
  sections: [
    { h: "The Buddha's birthplace", p: "Siddhartha Gautama was born about 2,500 years ago in <b>Lumbini</b>, in Nepal's southern plains. Today Lumbini is a UNESCO World Heritage Site with the sacred garden, the Maya Devi temple and monasteries built by Buddhist countries from all over the world." },
    { h: "Stupas", p: "A <b>stupa</b> is a dome that holds sacred relics. Kathmandu's great stupas, <b>Swayambhunath</b> and <b>Boudhanath</b>, have the Buddha's eyes painted on all four sides, looking in every direction. The curl between them, like a question mark, is often said to be the Nepali numeral 1 (<b>१</b>), a symbol of unity." },
    { h: "Walk clockwise", p: "Walk around stupas, monasteries and prayer walls <b>clockwise</b>, keeping them on your right. Spin prayer wheels clockwise as you pass. Each turn is said to send out the prayer written inside, usually the mantra <b>Om mani padme hum</b>." },
    { h: "Prayer flags", p: "Strings of five-coloured flags flutter on passes, bridges and rooftops. The colours stand for the elements: <b>blue</b> sky, <b>white</b> air, <b>red</b> fire, <b>green</b> water and <b>yellow</b> earth. The wind is believed to carry the printed prayers and blessings to everyone it touches. Never step on them or put them on the ground." },
    { h: "Many Buddhisms", p: "Most Buddhists in Nepal follow Tibetan (Vajrayana) Buddhism, especially Sherpa, Tamang and other mountain peoples. The Newars of the Kathmandu Valley have their own ancient Buddhist tradition with Sanskrit texts, and Theravada monasteries have grown since the 20th century. Many Hindus also visit stupas, and many Buddhists visit Hindu temples: the two religions share festivals, sites and even gods." }
  ],
  words: [
    { ne: "बुद्ध", ro: "buddha", en: "the Buddha" },
    { ne: "गुम्बा", ro: "gumbaa", en: "Buddhist monastery" },
    { ne: "लामा", ro: "laamaa", en: "lama, Tibetan Buddhist teacher" },
    { ne: "ध्यान", ro: "dhyaan", en: "meditation; attention" },
    { ne: "शान्ति", ro: "shaanti", en: "peace" },
    { ne: "करुणा", ro: "karunaa", en: "compassion" },
    { ne: "ॐ मणि पद्मे हूँ", ro: "om mani padme hum", en: "the mantra of compassion" }
  ],
  facts: [
    "The Buddha was born in Lumbini, in the plains of southern Nepal, about 2,500 years ago.",
    "Prayer flags come in five colours for the five elements: sky, air, fire, water and earth.",
    "Always walk clockwise around a stupa, keeping it on your right.",
    "The ‘nose’ on Boudhanath's painted eyes is often said to be the Nepali numeral १ (one), a symbol of unity."
  ],
  quiz: [
    { q: "Where was the Buddha born?", a: "Lumbini, Nepal", o: ["Bodh Gaya, India", "Lhasa, Tibet"], why: "Lumbini, in southern Nepal. He attained enlightenment later in Bodh Gaya, India." },
    { q: "Which way do you walk around a stupa?", a: "Clockwise", o: ["Anticlockwise", "Either way"], why: "Clockwise, keeping the stupa on your right." },
    { q: "What does ‘gumbaa’ mean?", a: "A monastery", o: ["A prayer flag", "A drum"], why: "gumbaa = Buddhist monastery." },
    { q: "In prayer flags, the white flag stands for…", a: "Air / wind", o: ["Snow", "Death"], why: "Blue sky, white air, red fire, green water, yellow earth." }
  ] },

{ id: "hinduism", title: "Hinduism in daily life", sub: "Gods, puja, tika and temples", art: "lotus",
  intro: "About 81% of Nepalis are Hindu (2021 census). Faith here is less about doctrine and more about daily acts: a morning puja, a tika, a bell rung on the way to work.",
  sections: [
    { h: "Many gods, one divine", p: "You'll see <b>Shiva</b> (as Pashupati, lord of animals and protector of Nepal), <b>Vishnu</b> (often called Narayan), the elephant-headed <b>Ganesh</b>, who removes obstacles and is worshipped first, <b>Durga</b>, the warrior goddess of Dashain, <b>Laxmi</b>, goddess of wealth, and <b>Saraswati</b>, goddess of learning, a favourite of students." },
    { h: "Puja and tika", p: "<b>Puja</b> is worship: flowers, rice, red powder, incense and a small lamp offered at a home shrine or temple. Afterwards people receive <b>prasaad</b> (blessed food) and put a <b>tika</b>, a dot of red powder and rice, on their forehead. Accept prasaad with your right hand and eat it; it's a blessing." },
    { h: "Temples", p: "Ring the bell as you enter to announce yourself to the god. Walk around clockwise. <b>Pashupatinath</b>, on the Bagmati river in Kathmandu, is Nepal's holiest Hindu temple: non-Hindus may not enter the main courtyard, but can watch from the opposite (east) bank, looking across at the cremation ghats. Be quiet and don't photograph mourners." },
    { h: "Sacred cows", p: "The cow is sacred and is Nepal's national animal. Most Hindus don't eat beef, and cows wander freely, even in Kathmandu traffic. Buffalo meat (<b>raango</b>) is common instead, for example in buff momos." }
  ],
  words: [
    { ne: "पूजा", ro: "pujaa", en: "worship ceremony" },
    { ne: "मन्दिर", ro: "mandir", en: "temple" },
    { ne: "प्रसाद", ro: "prasaad", en: "blessed food" },
    { ne: "टीका", ro: "tikaa", en: "blessing mark on the forehead" },
    { ne: "भगवान्", ro: "bhagawaan", en: "god" },
    { ne: "धर्म", ro: "dharma", en: "religion, duty, righteousness" }
  ],
  facts: [
    "Shiva as Pashupati, ‘lord of animals’, is considered the protector of Nepal.",
    "The cow is Nepal's national animal, and killing one is illegal.",
    "Ganesh, the elephant-headed god, is worshipped first in any Hindu ceremony because he removes obstacles.",
    "Nepal was the world's only officially Hindu kingdom until it was declared secular in 2006; it became a republic in 2008."
  ],
  quiz: [
    { q: "Which god is worshipped first because he removes obstacles?", a: "Ganesh", o: ["Shiva", "Laxmi"], why: "Ganesh opens every ceremony." },
    { q: "What is prasaad?", a: "Blessed food given after worship", o: ["A temple bell", "A red powder"], why: "Accept it with your right hand and eat it." },
    { q: "Nepal's holiest Hindu temple, on the Bagmati river:", a: "Pashupatinath", o: ["Swayambhunath", "Boudhanath"], why: "Swayambhu and Boudha are Buddhist stupas." }
  ] },

{ id: "festivals", title: "Dashain and Tihar", sub: "The two biggest festivals of the year", art: "diyo",
  intro: "In autumn the whole country goes home. Offices close, buses overflow, and families gather for weeks of feasting, blessings and lights.",
  sections: [
    { h: "Dashain (Sept/Oct)", p: "Nepal's biggest festival lasts fifteen days and celebrates the goddess <b>Durga's</b> victory over the buffalo demon Mahishasura: the triumph of good over evil. Families sow barley seeds (<b>jamara</b>) on the first day. On the tenth day, <b>Vijaya Dashami</b>, elders give younger relatives a big red <b>tika</b> of rice and yoghurt, the yellow jamara shoots and a blessing, and often a little money. Kites fill the sky and children ride bamboo swings (<b>ping</b>)." },
    { h: "Tihar (Oct/Nov)", p: "The five-day festival of lights. Day 1 honours <b>crows</b>, day 2 <b>dogs</b> (garlanded with marigolds and given a tika), day 3 <b>cows</b> and the goddess <b>Laxmi</b>, when houses glow with oil lamps (<b>diyo</b>) and coloured patterns (<b>rangoli</b>) to welcome her. Day 4 honours oxen, and for Newars it's <b>Mha Puja</b>, worship of one's own body, and their New Year. On day 5, <b>Bhai Tika</b>, sisters bless their brothers with a seven-coloured tika and marigold garlands." },
    { h: "Deusi and bhailo", p: "During Tihar, groups go from house to house singing <b>deusi</b> and <b>bhailo</b> songs, blessing the household in exchange for money, sweets and <b>sel roti</b>, a crunchy ring of fried rice dough." },
    { h: "What to say", p: "<b>Dashain ko shubhakaamanaa!</b> and <b>Tihar ko shubhakaamanaa!</b> (best wishes for Dashain / Tihar). If you're invited for tika, bow your head to receive it, then touch the elder's feet or do namaste." }
  ],
  words: [
    { ne: "दसैँको शुभकामना!", ro: "dasainko shubhakaamanaa!", en: "Happy Dashain!" },
    { ne: "तिहारको शुभकामना!", ro: "tihaarko shubhakaamanaa!", en: "Happy Tihar!" },
    { ne: "जमरा", ro: "jamaraa", en: "barley shoots given at Dashain" },
    { ne: "दियो", ro: "diyo", en: "oil lamp" },
    { ne: "सयपत्री", ro: "sayapatri", en: "marigold" },
    { ne: "सेल रोटी", ro: "sel roti", en: "ring-shaped rice bread" },
    { ne: "भाइटीका", ro: "bhaai tikaa", en: "sister–brother blessing day" }
  ],
  facts: [
    "During Tihar, Nepalis honour dogs with marigold garlands and a red tika.",
    "Dashain lasts fifteen days, and on its tenth day elders give younger relatives tika and blessings.",
    "At Bhai Tika, sisters give their brothers a seven-coloured tika for a long life.",
    "For Newars, Tihar's fourth day is Mha Puja, ‘worship of the self’, and the start of the Nepal Sambat new year."
  ],
  quiz: [
    { q: "Which animals are honoured on the second day of Tihar?", a: "Dogs", o: ["Elephants", "Goats"], why: "Kukur Tihar: dogs get garlands and tika." },
    { q: "Who gives tika at Dashain?", a: "Elders, to younger relatives", o: ["Children, to parents", "Priests only"], why: "Blessings flow from elders to the young." },
    { q: "How do you wish someone a happy Tihar?", a: "tihaarko shubhakaamanaa!", o: ["tihar dhanyabaad!", "tihar hos!"], why: "[festival] + ko shubhakaamanaa." }
  ] },

{ id: "food", title: "Daal bhaat and beyond", sub: "What Nepal eats, and how", art: "momo",
  intro: "Food is the fastest way into Nepali conversation. Ask anyone about momos and you've made a friend.",
  sections: [
    { h: "Daal bhaat tarkaari", p: "Rice (<b>bhaat</b>), lentil soup (<b>daal</b>) and vegetable curry (<b>tarkaari</b>), with pickle (<b>achaar</b>) and greens. Most Nepalis eat it twice a day, late morning and evening, and refills are usually free. Trekkers joke: <i>daal bhaat power, 24 hour!</i> For many people, <b>bhaat</b> simply means “a meal”: <b>bhaat khaanubhayo?</b> means “have you eaten?”" },
    { h: "Momo", p: "Steamed dumplings filled with buff, chicken or vegetables, served with a spicy tomato and sesame sauce. They came from Tibet and became Nepal's favourite snack. Try them steamed, fried, or <b>jhol</b> (in soup)." },
    { h: "Regional dishes", p: "<b>Dhido</b>, a thick porridge of millet or buckwheat flour, in the hills. <b>Gundruk</b>, fermented dried greens. <b>Thukpa</b> noodle soup in the mountains. Newar feasts of beaten rice (<b>chiuraa</b>), spiced meats and <b>yomari</b>, a sweet steamed dumpling. Bhaktapur's <b>juju dhau</b>, the “king of yoghurts”." },
    { h: "Tea", p: "<b>Chiyaa</b> is milky, sweet and spiced, drunk many times a day. Nepalis “eat” tea: <b>chiyaa khaanus!</b> Saying no to tea is possible, but saying yes is how friendships start." }
  ],
  words: [
    { ne: "दाल भात तरकारी", ro: "daal bhaat tarkaari", en: "lentils, rice and curry" },
    { ne: "अचार", ro: "achaar", en: "pickle, relish" },
    { ne: "पिरो", ro: "piro", en: "spicy hot" },
    { ne: "मिठो", ro: "mitho", en: "tasty" },
    { ne: "भोक लाग्यो।", ro: "bhok laagyo.", en: "I'm hungry." },
    { ne: "अलिकति मात्र।", ro: "alikati maatra.", en: "Just a little." }
  ],
  facts: [
    "Many Nepalis eat daal bhaat twice a day, and refills are usually included.",
    "In Nepali you “eat” tea: chiyaa khaanu.",
    "Juju dhau, Bhaktapur's sweet yoghurt set in clay pots, is called the ‘king of yoghurts’."
  ],
  quiz: [
    { q: "What does ‘tarkaari’ mean?", a: "Vegetable curry", o: ["Lentil soup", "Rice"], why: "daal = lentils, bhaat = rice, tarkaari = curry." },
    { q: "‘bhaat khaanubhayo?’ is used as…", a: "a friendly greeting: have you eaten?", o: ["an invitation to cook", "a complaint about rice"], why: "It's a common way to say hello." },
    { q: "Momos originally came from…", a: "Tibet", o: ["Japan", "Portugal"], why: "Brought over the Himalaya, now Nepal's favourite snack." }
  ] },

{ id: "family", title: "Family and kinship", sub: "Elders, siblings, and why everyone is your brother", art: "house",
  intro: "Family is the centre of Nepali life. Many people live with parents, grandparents and siblings' families under one roof or nearby.",
  sections: [
    { h: "Age matters", p: "Nepali has separate words for older and younger siblings: <b>daai</b> / <b>didi</b> (older brother / sister), <b>bhaai</b> / <b>bahini</b> (younger). Older siblings are respected and responsible for younger ones. That's why age is one of the first things people ask: it tells them how to address you." },
    { h: "Everyone is family", p: "Strangers are addressed with family words too: a shopkeeper is <b>didi</b> or <b>daai</b>, an elderly woman <b>aamaa</b> (mother) or <b>hajuraamaa</b> (grandmother), a child <b>bhaai</b> or <b>bahini</b>. It's warm, normal and respectful." },
    { h: "Uncles and aunts", p: "Relatives on the father's and mother's side have different names: <b>kaakaa</b> (father's younger brother), <b>thulobaa</b> (father's older brother), <b>maamaa</b> (mother's brother), <b>phupu</b> (father's sister), <b>saanimaa</b> (mother's younger sister). Ask your Nepali friends what they call their relatives: it's a great conversation starter." },
    { h: "Questions to expect", p: "Within minutes of meeting, you may be asked your age, whether you're married (<b>bihe bhayo?</b>), how many children you have and what your parents do. This is friendliness, not nosiness. Answer as much as you like and ask back." }
  ],
  words: [
    { ne: "परिवार", ro: "pariwaar", en: "family" },
    { ne: "हजुरबुबा", ro: "hajurbubaa", en: "grandfather" },
    { ne: "हजुरआमा", ro: "hajuraamaa", en: "grandmother" },
    { ne: "काका", ro: "kaakaa", en: "father's younger brother" },
    { ne: "मामा", ro: "maamaa", en: "mother's brother" },
    { ne: "बिहे भयो?", ro: "bihe bhayo?", en: "Are you married?" }
  ],
  facts: [
    "Nepali has different words for older and younger brothers and sisters: daai, bhaai, didi, bahini.",
    "In Nepal, a mother's brother (maamaa) and a father's younger brother (kaakaa) have completely different names.",
    "Asking someone's age in Nepal is polite: it tells you how to address them."
  ],
  quiz: [
    { q: "Your mother's brother is your…", a: "maamaa", o: ["kaakaa", "daai"], why: "kaakaa is the father's younger brother." },
    { q: "Why do Nepalis often ask your age early on?", a: "To know how to address you", o: ["To check your visa", "It's considered rude, so they rarely do"], why: "Age decides daai/bhaai, didi/bahini." },
    { q: "“bihe bhayo?” means…", a: "Are you married?", o: ["Did you eat?", "Are you tired?"], why: "bihe = wedding, marriage." }
  ] },

{ id: "people", title: "A country of many peoples", sub: "Languages, ethnic groups and respect", art: "people",
  intro: "Nepal is small on the map but enormously diverse: the 2021 census counted more than 120 languages and over 140 caste and ethnic groups.",
  sections: [
    { h: "Nepali and other languages", p: "Nepali is the official language and the mother tongue of about 45% of people (the 2015 constitution recognises every mother tongue as a national language). Others include Maithili and Bhojpuri in the plains, Tharu, Tamang, Newar (Nepal Bhasa), Magar, Gurung, Rai and Limbu languages, Sherpa and many more. Most Nepalis speak two or three languages. Your Nepali will work everywhere." },
    { h: "Some of the peoples", p: "The <b>Newar</b> built the temples and cities of the Kathmandu Valley. <b>Sherpa</b> is an ethnic group from the Everest region, not a job title. <b>Gurung</b> and <b>Magar</b> communities are famous for their Gurkha soldiers. <b>Tharu</b> people live in the southern Terai. <b>Rai</b> and <b>Limbu</b> in the east follow the Kirat tradition. Each has its own festivals, food and dress." },
    { h: "Caste", p: "The traditional caste system still shapes Nepali society, but caste discrimination is illegal, most recently under a 2011 law. Don't ask people about their caste: it's personal and can be uncomfortable." },
    { h: "Dress and symbols", p: "The <b>dhaka topi</b>, a patterned cap, is a symbol of Nepali identity, worn by many men on formal occasions. Women may wear a saree or a <b>kurtaa suruwaal</b>. Red is the colour of celebration, worn by brides and by women at the Teej festival." }
  ],
  words: [
    { ne: "भाषा", ro: "bhaashaa", en: "language" },
    { ne: "जाति", ro: "jaati", en: "ethnic group, caste" },
    { ne: "ढाका टोपी", ro: "dhaakaa topi", en: "traditional Nepali cap" },
    { ne: "मातृभाषा", ro: "maatribhaashaa", en: "mother tongue" },
    { ne: "तपाईंको मातृभाषा के हो?", ro: "tapaainko maatribhaashaa ke ho?", en: "What is your mother tongue?" }
  ],
  facts: [
    "Nepal's 2021 census counted more than 120 languages.",
    "‘Sherpa’ is an ethnic group from the Everest region, not a job title.",
    "Only about 45% of Nepalis have Nepali as their mother tongue; most people speak two or three languages."
  ],
  quiz: [
    { q: "‘Sherpa’ is…", a: "an ethnic group", o: ["a job: mountain guide", "a type of yak"], why: "Many Sherpas work in mountaineering, but Sherpa is a people." },
    { q: "Which is a good conversation question?", a: "tapaainko maatribhaashaa ke ho?", o: ["tapaainko jaati ke ho?", "tapaain kati kamaaunuhunchha?"], why: "Asking about mother tongue is welcome; asking about caste or salary isn't." },
    { q: "The dhaka topi is…", a: "a traditional patterned cap", o: ["a festival dish", "a musical instrument"], why: "A symbol of Nepali identity." }
  ] },

{ id: "valley", title: "The Kathmandu Valley", sub: "Newar cities, a living goddess and pagodas", art: "temple",
  intro: "Kathmandu, Patan and Bhaktapur sit a few kilometres apart in one valley, with seven groups of monuments listed together as a UNESCO World Heritage Site.",
  sections: [
    { h: "Three royal cities", p: "Each city has a <b>Durbar Square</b>, a palace square packed with temples. For centuries they were rival kingdoms ruled by the Malla kings, who competed to build the finest temples. Patan is famous for metalwork, Bhaktapur for pottery and woodcarving." },
    { h: "The Newars", p: "The Newars are the valley's original people, with their own language (<b>Nepal Bhasa</b>), a calendar (<b>Nepal Sambat</b>), and a rich mix of Hindu and Buddhist traditions. Their feasts, masked dances and chariot festivals fill the year." },
    { h: "The Kumari", p: "In Kathmandu, a young girl from the Newar Shakya community is chosen as the <b>Kumari</b>, a living goddess believed to embody the goddess Taleju. She lives in the Kumari Ghar on Durbar Square and appears at festivals like Indra Jatra until she reaches puberty, when a new Kumari is chosen." },
    { h: "Pagodas travelled from here", p: "In the 13th century, the Newar artist <b>Araniko</b> travelled to the court of Kublai Khan and is credited with spreading the multi-roofed pagoda style to China. The tiered temple roofs you see in the valley are part of that heritage." }
  ],
  words: [
    { ne: "दरबार", ro: "darbaar", en: "palace, royal court" },
    { ne: "कुमारी", ro: "kumaari", en: "living goddess; unmarried girl" },
    { ne: "जात्रा", ro: "jaatraa", en: "chariot festival, procession" },
    { ne: "उपत्यका", ro: "upatyakaa", en: "valley" }
  ],
  facts: [
    "The Kathmandu Valley's seven monument zones are listed together as one UNESCO World Heritage Site.",
    "The Kumari of Kathmandu is a young Newar girl worshipped as a living goddess until puberty.",
    "The Newar artist Araniko is credited with taking the pagoda style to China in the 13th century."
  ],
  quiz: [
    { q: "What is a Durbar Square?", a: "A royal palace square with temples", o: ["A bus station", "A rice market"], why: "darbaar = palace." },
    { q: "The Kumari is…", a: "a young girl worshipped as a living goddess", o: ["the queen of Nepal", "a festival dish"], why: "She serves until puberty." },
    { q: "Who are the original people of the Kathmandu Valley?", a: "The Newars", o: ["The Sherpas", "The Tharus"], why: "Newars built its cities and temples." }
  ] },

{ id: "himalaya", title: "Mountains and nature", sub: "Sagarmatha, red pandas and rhinos", art: "mountains",
  intro: "Nepal rises from about 60 metres above sea level in the south to 8,849 metres at the top of Everest, all within about 200 kilometres.",
  sections: [
    { h: "Eight of the fourteen", p: "Eight of the world's fourteen mountains over 8,000 m are wholly or partly in Nepal, including Everest, Kangchenjunga, Lhotse, Makalu, Cho Oyu, Dhaulagiri, Manaslu and Annapurna. <b>Himaal</b> means snow mountain; <b>Himaalaya</b> means “abode of snow”." },
    { h: "Sagarmatha", p: "Everest's Nepali name, <b>Sagarmatha</b>, is often translated as “forehead (or head) of the sky”. Sherpas call it <b>Chomolungma</b>. In 1953 Tenzing Norgay Sherpa and Edmund Hillary were the first to reach the summit." },
    { h: "Three bands", p: "The <b>Terai</b> in the south is hot, flat farmland and jungle. The <b>Pahaad</b> (hills) hold terraced fields, Kathmandu and Pokhara. The <b>Himaal</b> in the north is high mountain country. In a few days' travel you cross climates from tropical to arctic." },
    { h: "Wildlife and symbols", p: "Chitwan and Bardia national parks shelter one-horned rhinos, Bengal tigers and elephants. The high forests are home to the red panda (<b>habre</b>, like this app's mascot), and the rocky heights above the treeline to the snow leopard. National symbols: the rhododendron (<b>laaliguraans</b>), the Himalayan monal or <b>daanphe</b> bird, and the cow." }
  ],
  words: [
    { ne: "हिमाल", ro: "himaal", en: "snow mountain" },
    { ne: "पहाड", ro: "pahaad", en: "hills" },
    { ne: "तराई", ro: "taraai", en: "southern plains" },
    { ne: "लालीगुराँस", ro: "laaliguraans", en: "rhododendron (national flower)" },
    { ne: "डाँफे", ro: "daanphe", en: "Himalayan monal (national bird)" },
    { ne: "हाब्रे", ro: "haabre", en: "red panda" }
  ],
  facts: [
    "Eight of the world's fourteen 8,000 m peaks are in Nepal.",
    "Nepal climbs from about 60 m to 8,849 m above sea level in roughly 200 km.",
    "The rhododendron (laaliguraans) is Nepal's national flower and the daanphe its national bird.",
    "Habre, this app's mascot, is the Nepali name for the red panda."
  ],
  quiz: [
    { q: "Everest's Nepali name:", a: "Sagarmatha", o: ["Annapurna", "Machhapuchhre"], why: "Sagarmatha; Sherpas say Chomolungma." },
    { q: "How many of the 14 peaks above 8,000 m are in Nepal?", a: "Eight", o: ["Three", "All fourteen"], why: "Including Everest and Annapurna." },
    { q: "‘laaliguraans’ is…", a: "the rhododendron, national flower", o: ["a red sweet", "a mountain lake"], why: "It blooms red across the hills in spring." }
  ] },

{ id: "calendar", title: "Time, calendar and festivals", sub: "Bikram Sambat, 5:45 and the festival year", art: "calendar",
  intro: "Nepal runs on its own clock and its own calendar. Knowing them helps you plan, and impresses everyone you talk to.",
  sections: [
    { h: "Bikram Sambat", p: "The official calendar, <b>Bikram Sambat</b> (BS), is about 56 years and 8 months ahead of the Western one: 2026 is mostly 2083 BS. The new year starts in mid-April, on <b>Baisakh 1</b>. Months begin around the middle of Western months and have 29 to 32 days." },
    { h: "UTC +5:45", p: "Nepal's time zone is 5 hours 45 minutes ahead of UTC, one of the few with a 45-minute offset. It's 15 minutes ahead of India." },
    { h: "Saturday off", p: "<b>Shanibaar</b> (Saturday) is the main weekly day off. Many offices work on Sunday (<b>aaitabaar</b>), which feels like a Monday." },
    { h: "A festival year", p: "Most festivals follow the moon, so their Western dates move each year. Use the month-by-month list below to know what's coming." }
  ],
  words: [
    { ne: "विक्रम संवत्", ro: "bikram sambat", en: "the Nepali calendar" },
    { ne: "नयाँ वर्ष", ro: "nayaan barsha", en: "new year" },
    { ne: "चाड", ro: "chaad", en: "festival" },
    { ne: "बिदा", ro: "bidaa", en: "holiday, leave" },
    { ne: "आज कति गते हो?", ro: "aaja kati gate ho?", en: "What's the date today? (Nepali calendar)" }
  ],
  facts: [
    "Nepal's calendar, Bikram Sambat, is about 56 years and 8 months ahead: 2026 is mostly 2083 BS.",
    "Nepal's time zone is UTC+5:45, 15 minutes ahead of India.",
    "Saturday is Nepal's weekly holiday; Sunday is a working day for many offices.",
    "Nepal's flag is the only national flag in the world that isn't a rectangle."
  ],
  quiz: [
    { q: "When is the Nepali new year?", a: "Mid-April (Baisakh 1)", o: ["1 January", "During Dashain"], why: "Baisakh 1 falls around 13–14 April." },
    { q: "Nepal's time zone is…", a: "UTC +5:45", o: ["UTC +5:30", "UTC +6:00"], why: "India is +5:30, Nepal +5:45." },
    { q: "Which is Nepal's weekly day off?", a: "Saturday (shanibaar)", o: ["Sunday (aaitabaar)", "Friday (shukrabaar)"], why: "Saturday is the weekly holiday." }
  ] },

{ id: "history", title: "Nepal in brief", sub: "Unification, never colonised, a young republic", art: "flag",
  intro: "A short history to give your conversations context. Nepalis are proud of it, and happy to tell you more.",
  sections: [
    { h: "Unification", p: "In the 18th century, <b>Prithvi Narayan Shah</b>, king of the small hill state of Gorkha, conquered the Kathmandu Valley (1768–69) and unified dozens of small kingdoms into modern Nepal. He called it “a yam between two boulders”: between China and India." },
    { h: "Never colonised", p: "Nepal fought Britain's East India Company in 1814–16 and lost territory, but was never colonised. Impressed by their enemies, the British began recruiting Nepali soldiers, the <b>Gurkhas</b>, who still serve in the British and Indian armies. Their battle cry: <b>Ayo Gorkhali!</b> (the Gurkhas are here!)." },
    { h: "From kingdom to republic", p: "Nepal was a monarchy for two and a half centuries. Democracy first came in 1951, and multiparty democracy was restored in 1990; a civil war between Maoist rebels and the state lasted from 1996 to 2006. In 2008 the monarchy was abolished and Nepal became a federal democratic republic, with a new constitution in 2015." },
    { h: "The flag", p: "Nepal's flag is the only non-rectangular national flag: two crimson pennants with a blue border, a white moon and a white sun. A common reading is that the moon and sun express the hope that Nepal will last as long as they do." }
  ],
  words: [
    { ne: "देश", ro: "desh", en: "country" },
    { ne: "इतिहास", ro: "itihaas", en: "history" },
    { ne: "राजा", ro: "raajaa", en: "king" },
    { ne: "गणतन्त्र", ro: "ganatantra", en: "republic" },
    { ne: "झन्डा", ro: "jhandaa", en: "flag" },
    { ne: "आयो गोरखाली!", ro: "aayo gorkhaali!", en: "The Gurkhas are here! (battle cry)" }
  ],
  facts: [
    "Nepal was never colonised.",
    "Prithvi Narayan Shah unified Nepal in the 18th century and called it ‘a yam between two boulders’.",
    "Gurkha soldiers from Nepal have served in the British Army for over 200 years.",
    "Nepal abolished its monarchy in 2008 and became a federal democratic republic."
  ],
  quiz: [
    { q: "Who unified modern Nepal?", a: "Prithvi Narayan Shah", o: ["Araniko", "Tenzing Norgay"], why: "King of Gorkha, 18th century." },
    { q: "Since 2008, Nepal has been…", a: "a federal democratic republic", o: ["an absolute monarchy", "a British colony"], why: "The monarchy was abolished in 2008." },
    { q: "What makes Nepal's flag unique?", a: "It's the only non-rectangular national flag", o: ["It has no colours", "It changes every year"], why: "Two stacked pennants." }
  ] }
];

/* The Nepali year, month by month. Festival dates follow the moon, so they move a little each year. */
C.months = [
  { ne: "वैशाख", ro: "Baisakh", g: "mid-April to mid-May", fest: "Nepali New Year on Baisakh 1, Bisket Jatra in Bhaktapur, and often Buddha Jayanti, the Buddha's birthday, at the full moon.", tip: "Rhododendrons bloom in the hills." },
  { ne: "जेठ", ro: "Jeth", g: "mid-May to mid-June", fest: "The hottest month. Buddha Jayanti sometimes falls now. Farmers prepare for the monsoon.", tip: "Mountain views fade as clouds build up." },
  { ne: "असार", ro: "Asaar", g: "mid-June to mid-July", fest: "The monsoon arrives and rice is planted. On Asaar 15, Paddy Day, people plant rice in the mud and eat yoghurt with beaten rice (dahi chiuraa).", tip: "Expect rain every afternoon." },
  { ne: "साउन", ro: "Saaun", g: "mid-July to mid-August", fest: "Women wear green bangles and henna through the month. Janai Purnima, when a sacred thread is renewed, often falls at its end.", tip: "Leeches on the trails!" },
  { ne: "भदौ", ro: "Bhadau", g: "mid-August to mid-September", fest: "Gai Jatra (a cow procession remembering those who died that year, with satire and humour), Krishna Janmashtami and Teej, when women wear red, dance and fast.", tip: "The monsoon starts to ease." },
  { ne: "असोज", ro: "Asoj", g: "mid-September to mid-October", fest: "Indra Jatra in Kathmandu, with the Kumari's chariot. Dashain begins, and kites fill the sky.", tip: "Clear skies return: trekking season starts." },
  { ne: "कात्तिक", ro: "Kaattik", g: "mid-October to mid-November", fest: "Dashain often ends now, and Tihar, the festival of lights, follows. Chhath in the southern plains honours the sun.", tip: "The clearest mountain views of the year." },
  { ne: "मंसिर", ro: "Mangsir", g: "mid-November to mid-December", fest: "Harvest time and the main wedding season: brass bands and processions everywhere. Yomari Punhi, a Newar festival of sweet dumplings, often falls at the full moon.", tip: "Mornings turn cold." },
  { ne: "पुस", ro: "Pus", g: "mid-December to mid-January", fest: "The coldest month. Gurung communities celebrate Tamu Losar, their new year, around 30 December.", tip: "Fog in the plains, snow on the passes." },
  { ne: "माघ", ro: "Maagh", g: "mid-January to mid-February", fest: "Maghe Sankranti on Maagh 1: sesame sweets, sweet potatoes and ghee. Sonam Losar (Tamang new year) and Saraswati Puja, when students honour the goddess of learning.", tip: "Days get warmer." },
  { ne: "फागुन", ro: "Phaagun", g: "mid-February to mid-March", fest: "Maha Shivaratri draws pilgrims and sadhus to Pashupatinath. Gyalpo Losar (Sherpa and Tibetan new year), and often Holi, the festival of colours.", tip: "Wear old clothes for Holi." },
  { ne: "चैत", ro: "Chait", g: "mid-March to mid-April", fest: "Ghode Jatra, a horse festival in Kathmandu, and Ram Navami. The year closes.", tip: "Spring trekking season." }
];

/* Lesson → related culture article and grammar chapter. */
C.unitLinks = {
  greet: { c: "namaste", g: "pron" }, intro: { c: "people", g: "be" }, help: { c: "namaste", g: "imp" }, num: { c: "calendar", g: "count" },
  food: { c: "food", g: "like" }, shop: { c: "etiquette", g: "ask" }, move: { c: "himalaya", g: "post" }, fam: { c: "family", g: "poss" },
  time: { c: "calendar", g: "pres" }, feel: { c: "etiquette", g: "like" }, verbs: { c: "valley", g: "pres" },
  past: { c: "history", g: "past" }, future: { c: "festivals", g: "fut" }, weather: { c: "himalaya", g: "was" }, routine: { c: "food", g: "cont" },
  describe: { c: "valley", g: "adj" }, phone: { c: "family", g: "must" }, hobby: { c: "festivals", g: "noun" }, clinic: { c: "etiquette", g: "perf" },
  culture: { c: "hinduism", g: "wish" }, compare: { c: "himalaya", g: "compare" },
  opinion: { c: "people", g: "guess" }, tell: { c: "history", g: "when" }, work: { c: "family", g: "conn" }, health: { c: "buddhism", g: "rel" },
  solve: { c: "etiquette", g: "compound" }, ifthen: { c: "buddhism", g: "if" }, emotion: { c: "family", g: "particles" }, news: { c: "history", g: "formal" }
};
})();
