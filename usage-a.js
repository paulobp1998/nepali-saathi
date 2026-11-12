// Which word, when? Short notes on words that English speakers mix up, because one English word covers
// several Nepali ones (or the other way round). This file: A1. usage-b.js: A2. usage-c.js: B1 and up.
// Each note belongs to the lesson (unit) where the words first matter. daily.js shows it in the daily session
// on the first new phrase that uses one of its `words` (a trailing "-" matches the start of a word), asks two of
// its questions straight away and brings the others back on later days. All notes can be browsed under
// "Which word, when?". Blocks and quiz use the same format as the grammar chapters.
// A note with `gram` and no blocks points to a grammar chapter that already teaches the contrast.
(function () {
const C = window.COURSE;
C.usage = (C.usage || []).concat([

/* ---------- contrasts the grammar course already teaches ---------- */
{ id: "w-be", level: "A1", unit: "intro", gram: "be", title: "“Is”: ho, chha or hunchha?", sub: "ho (what it is), chha (where or how it is), hunchha (how things are in general)", words: ["ho", "chha", "hunchha"] },
{ id: "w-you", level: "A1", unit: "intro", gram: "pron", title: "“You”: ta, timi, tapaain or hajur?", sub: "Four levels of respect, and the verb ending that goes with each", words: ["timi", "tapaain"] },
{ id: "w-kin", level: "A1", unit: "intro", gram: "pron", sec: "Calling people by family words", title: "Daai, didi, bhaai, bahini: what to call people", sub: "Family words for strangers, by age and gender", words: ["daai", "didi", "bhaai", "bahini"] },
{ id: "w-count", level: "A1", unit: "num", gram: "count", title: "Counting: janaa or wataa?", sub: "janaa for people, wataa for things, and when you need neither", words: ["janaa", "wataa", "eutaa"] },
{ id: "w-have", level: "A1", unit: "fam", gram: "poss", title: "“To have”: mero chha, masanga chha, or malaai?", sub: "Three ways to have, depending on what you have", words: ["masanga", "sanga"] },
{ id: "w-was", level: "A2", unit: "weather", gram: "was", title: "“Was”: thiyo or bhayo?", sub: "thiyo (how it was), bhayo (what happened or became)", words: ["thiyo", "bhayo"] },
{ id: "w-le", level: "A2", unit: "past", gram: "erg", title: "The doer marker: when does -le appear?", sub: "maile, usle: required in the past with an object, wrong elsewhere", words: ["maile", "usle", "tapaainle", "haamile"] },
{ id: "w-like", level: "A2", unit: "compare", gram: "compare", title: "“Than” and “like”: bhandaa, jasto, jastai", sub: "More than, the most, similar to, exactly like", words: ["bhandaa", "jasto", "jastai"] },
{ id: "w-no", level: "B1", unit: "solve", gram: "neg", title: "“Not”: hoina, chhaina or na-?", sub: "Which negative goes with which verb form", words: ["hoina", "chhaina"] },
{ id: "w-part", level: "B1", unit: "emotion", gram: "particles", title: "Small words: ni, na, ta, re, hai, po", sub: "Tiny particles that carry tone, doubt and emphasis", words: ["ni", "re", "hai", "po", "nai"] },
{ id: "w-guess", level: "B2", unit: "news", gram: "guess", title: "Probably, it seems, it turns out", sub: "holaa (I guess), jasto chha (it looks like), rahechha (I've just found out)", words: ["holaa", "rahechha"] },
{ id: "w-work", level: "B2", unit: "b2feel", gram: "workhorse", title: "Laagnu and parnu: one verb, twenty meanings", sub: "Feelings, costs, time, rain, need: which verb carries what", words: [] },
{ id: "w-words", level: "C1", unit: "c1precise", gram: "words", title: "Know, can, say, ask, want: the fine print", sub: "Near-synonyms that aren't, at native level", words: [] },

/* ---------- A1 ---------- */
{ id: "w-dontknow", level: "A1", unit: "help", title: "“I don't understand”, “I didn't hear”, “I don't know”", sub: "bujhina (the meaning), sunina (the sound), thaahaa chhaina (the fact), aaundaina (the skill)",
  words: ["bujhina", "bujhen", "thaahaa", "sunina"],
  blocks: [
    { p: "When a conversation breaks down, English says “sorry?” or “I don't know” for almost everything. Nepali wants to know <i>what</i> went wrong, and people help you differently depending on your answer." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>bujhina</b>", "you heard the words but the meaning didn't land", "maile <b>bujhina</b>. pheri bhannuhos ta."],
      ["<b>sunina</b>", "the sound didn't reach you: noise, too fast, too quiet", "<b>sunina</b>, hajur?"],
      ["<b>thaahaa chhaina</b>", "you understood the question but don't know the answer", "malaai <b>thaahaa chhaina</b>."],
      ["<b>aaundaina</b>", "you don't have the skill: a language, cooking, driving", "malaai nepaali dherai <b>aaundaina</b>."]
    ] } },
    { rule: "Ask yourself what failed: the <i>sound</i> (<b>sunina</b>), the <i>meaning</i> (<b>bujhina</b>), the <i>fact</i> (<b>thaahaa chhaina</b>) or the <i>skill</i> (<b>aaundaina</b>)." },
    { ex: [
      { ne: "मैले बुझिनँ। फेरि भन्नुहोस् त।", ro: "maile bujhina. pheri bhannuhos ta.", en: "I didn't understand. Please say it again." },
      { ne: "सुनिनँ, हजुर?", ro: "sunina, hajur?", en: "I didn't catch that. Pardon?" },
      { ne: "मलाई थाहा छैन।", ro: "malaai thaahaa chhaina.", en: "I don't know." },
      { ne: "मलाई नेपाली अलिअलि मात्र आउँछ।", ro: "malaai nepaali aliali maatra aaunchha.", en: "I only know a little Nepali.", note: "A skill “comes to you”: malaai … aaunchha." }
    ] },
    { warn: "<b>malaai nepaali thaahaa chhaina</b> sounds as if you had never heard of the Nepali language. For anything you can or can't <i>do</i>, use <b>aaunchha / aaundaina</b>. And notice that <b>bujhina</b> and <b>sunina</b> are past forms (“I didn't…”): that is what Nepalis say even when English uses the present." }
  ],
  quiz: [
    { q: "A bus roars past just as the shopkeeper tells you the price. You say:", a: "sunina, hajur?", o: ["malaai thaahaa chhaina", "malaai aaundaina"], why: "The sound never reached you → <b>sunina</b>. She'll simply repeat it, louder." },
    { q: "A stranger asks you where the bus stop is. You understood, but you're new here too.", a: "malaai thaahaa chhaina", o: ["maile bujhina", "sunina"], why: "You understood the question and lack the fact → <b>thaahaa chhaina</b>. With <b>bujhina</b> he would just ask again, more slowly." },
    { q: "You heard every word clearly, but two of them were new to you.", a: "maile bujhina", o: ["malaai thaahaa chhaina", "malaai aaundaina"], why: "Sound fine, meaning missing → <b>bujhina</b>. Follow up with <b>yasko artha ke ho?</b>" },
    { q: "“I can't cook.”", a: "malaai khaanaa pakaauna aaundaina", o: ["malaai khaanaa pakaauna thaahaa chhaina", "maile khaanaa pakaauna bujhina"], why: "A skill “comes” or doesn't: <b>aaundaina</b>." }
  ] },

{ id: "w-take", level: "A1", unit: "shop", title: "“Take”, “bring”, “buy”: linu, lyaaunu, laijaanu, kinnu", sub: "linu (take in your hand), lyaaunu (bring here), laijaanu (take away), kinnu (buy)",
  words: ["linus", "linchhu", "linu", "lyaau-", "laijaa-", "kinn-", "kinchh-", "kinen"],
  blocks: [
    { p: "English “take” points in every direction: take this, take it away, take me there. Nepali splits it by <i>direction</i>, and buying has its own verb." },
    { table: { head: ["Verb", "Use it when", "Example"], rows: [
      ["<b>linu</b>", "you take or accept something into your hands", "<b>linus</b> (here, take it) · ma yo <b>linchhu</b> (I'll take this one)"],
      ["<b>lyaaunu</b>", "something moves <i>towards</i> the speaker: bring", "paani <b>lyaaunus</b> na"],
      ["<b>laijaanu</b>", "something moves <i>away</i> with someone: take along, take away", "yo <b>laijaanus</b>"],
      ["<b>kinnu</b>", "money changes hands: buy", "ma sim kaard <b>kinchhu</b>"]
    ] } },
    { rule: "Towards here → <b>lyaaunu</b>. Away from here → <b>laijaanu</b>. <b>linu</b> is only the moment of taking; <b>kinnu</b> is paying for it." },
    { ex: [
      { ne: "म यो लिन्छु।", ro: "ma yo linchhu.", en: "I'll take this one." },
      { ne: "दाइ, एक गिलास पानी ल्याउनुस् न।", ro: "daai, ek gilaas paani lyaaunus na.", en: "Brother, please bring a glass of water." },
      { ne: "मलाई ठमेल लैजानुस्।", ro: "malaai thamel laijaanus.", en: "Take me to Thamel.", note: "Away from here → laijaanu." },
      { ne: "म सिम कार्ड किन्छु।", ro: "ma sim kaard kinchhu.", en: "I'll buy a SIM card." }
    ] },
    { warn: "<b>malaai thamel linus</b> does not work for “take me to Thamel”: <b>linu</b> has no direction. And several English “takes” use other verbs altogether: <b>photo khichnu</b> (take a photo), <b>bas chadhnu</b> (take the bus), <b>aushadhi khaanu</b> (take medicine: you “eat” it)." }
  ],
  quiz: [
    { q: "In a restaurant: “Please bring the bill.”", a: "bil lyaaunus na", o: ["bil linus na", "bil laijaanus na"], why: "The bill comes towards you → <b>lyaaunu</b>." },
    { q: "To a taxi driver: “Take me to the airport.”", a: "malaai eyarport laijaanus", o: ["malaai eyarport linus", "malaai eyarport lyaaunus"], why: "Away from where you both are → <b>laijaanu</b>. <b>lyaaunus</b> is what someone waiting <i>at</i> the airport would say." },
    { q: "Your host hands you a cup of tea and says:", a: "linus", o: ["kinnus", "laijaanus"], why: "<b>linus</b> = please take it, have some. No direction, no money." },
    { q: "In a shop you've decided: “I'll buy this.”", a: "ma yo kinchhu", o: ["ma yo lyaaunchhu", "ma yo laijaanus"], why: "Paying for it → <b>kinnu</b>. <b>ma yo linchhu</b> (I'll take this one) also works in a shop." }
  ] },

{ id: "w-now", level: "A1", unit: "time", title: "“Now”: ahile, aba or bharkhar?", sub: "ahile (at this moment), aba (from here on), bharkhar (a moment ago)",
  words: ["ahile", "aba", "bharkhar"],
  blocks: [
    { p: "English “now” does three jobs. Nepali gives each its own word." },
    { table: { head: ["Word", "Means", "Example"], rows: [
      ["<b>ahile</b>", "at this moment, on the clock", "ma <b>ahile</b> gharmaa chhu"],
      ["<b>aba</b>", "from here on: something changes, what comes next", "<b>aba</b> ke garne? (what do we do now?)"],
      ["<b>bharkhar</b>", "just now, a moment ago (with the past)", "ma <b>bharkhar</b> aaen (I've just arrived)"]
    ] } },
    { rule: "<b>ahile</b> is a point on the clock. <b>aba</b> is a turning point: the situation has changed and you are looking forward. <b>bharkhar</b> looks back a few minutes." },
    { ex: [
      { ne: "म अहिले घरमा छु।", ro: "ma ahile gharmaa chhu.", en: "I'm at home right now." },
      { ne: "अब के गर्ने?", ro: "aba ke garne?", en: "What do we do now?", note: "Things have changed. What next?" },
      { ne: "अब म जान्छु।", ro: "aba ma jaanchhu.", en: "Well, I'll be off now.", note: "The usual way to announce you're leaving." },
      { ne: "म भर्खर आएँ।", ro: "ma bharkhar aaen.", en: "I've just arrived." }
    ] },
    { warn: "<b>ahile jaanchhu</b> = I'm going this very minute. <b>aba jaanchhu</b> = it's time for me to go. Two useful pairs: <b>ahile samma</b> = until now, so far; <b>aba dekhi</b> = from now on." }
  ],
  quiz: [
    { q: "On the phone: “Where are you right now?”", a: "tapaain ahile kahaan hunuhunchha?", o: ["tapaain aba kahaan hunuhunchha?", "tapaain bharkhar kahaan hunuhunchha?"], why: "This moment on the clock → <b>ahile</b>." },
    { q: "The last bus has just left without you. “What now?”", a: "aba ke garne?", o: ["bharkhar ke garne?", "ahile kati bajyo?"], why: "The situation changed and you look ahead → <b>aba</b>." },
    { q: "“I've just eaten.”", a: "maile bharkhar khaaen", o: ["maile aba khaaen", "ma ahile khaanchhu"], why: "A moment ago, with the past → <b>bharkhar</b>." },
    { q: "“From now on I'll speak Nepali.”", a: "aba dekhi ma nepaali bolchhu", o: ["ahile samma ma nepaali bolchhu", "bharkhar ma nepaali bolchhu"], why: "<b>aba dekhi</b> = from now on. <b>ahile samma</b> would mean “until now”." }
  ] }

]);
})();
