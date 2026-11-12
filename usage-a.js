// Which word, when? Short notes on words that English speakers mix up, because one English word covers
// several Nepali ones (or the other way round). This file: A1. usage-b.js: A2. usage-c.js: B1 and up.
// Each note belongs to the lesson (unit) where the words first matter. daily.js shows it in the daily session
// on the first new phrase that uses one of its `words` ("gar-" matches the start of a word, "-samma" the end), asks two of
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
{ id: "w-le", level: "A2", unit: "past", gram: "erg", title: "The doer marker: when does -le appear?", sub: "maile, usle: required in the past with an object, wrong elsewhere", words: ["usle", "tapaainle", "haamile"] },
{ id: "w-like", level: "A2", unit: "compare", gram: "compare", title: "“Than” and “like”: bhandaa, jasto, jastai", sub: "More than, the most, similar to, exactly like", words: ["bhandaa", "jasto", "jastai"] },
{ id: "w-no", level: "B1", unit: "solve", gram: "neg", title: "“Not”: hoina, chhaina or na-?", sub: "Which negative goes with which verb form", words: ["hoina", "chhaina"] },
{ id: "w-part", level: "B1", unit: "emotion", gram: "particles", title: "Small words: ni, na, ta, re, hai, po", sub: "Tiny particles that carry tone, doubt and emphasis", words: ["ni", "re", "hai", "po", "nai"] },
{ id: "w-guess", level: "B2", unit: "news", gram: "guess", title: "Probably, it seems, it turns out", sub: "holaa (I guess), jasto chha (it looks like), rahechha (I've just found out)", words: ["holaa", "rahechha"] },
{ id: "w-work", level: "B2", unit: "b2feel", gram: "workhorse", title: "Laagnu and parnu: one verb, twenty meanings", sub: "Feelings, costs, time, rain, need: which verb carries what", words: [] },
{ id: "w-words", level: "C1", unit: "c1precise", gram: "words", title: "Know, can, say, ask, want: the fine print", sub: "Near-synonyms that aren't, at native level", words: [] },

/* ---------- A1 ---------- */
{ id: "w-hello", level: "A1", unit: "greet", title: "Hello and goodbye: namaste, namaskaar, and leaving", sub: "namaste (hello and goodbye), namaskaar (the formal one), ma gaen hai (I'm off), bistaarai jaanus / basnus (to the one leaving / staying)",
  words: ["namaste", "namaskaar", "bhetaunlaa"],
  blocks: [
    { p: "English has one “hello” and one “bye”. Nepali has an all-purpose greeting, a more formal one, and no single word for “bye” at all: when you leave, you say what you are doing, and the other person answers with what you should do." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>namaste</b>", "hello and goodbye, to anyone, any time of day", "<b>namaste</b>, didi"],
      ["<b>namaskaar</b>", "the same, more formal: officials, elders you don't know, a room full of people", "sabailaai <b>namaskaar</b>"],
      ["<b>ma gaen hai</b> / <b>aba ma jaanchhu</b>", "you are the one leaving: “I'm off”", "<b>ma gaen hai</b>, pheri bhetaunlaa"],
      ["<b>bistaarai jaanus</b>", "to the person who is leaving: go carefully", "<b>bistaarai jaanus</b> hai"],
      ["<b>basnus</b>", "from the one leaving to those who stay: don't get up, stay put", "ma jaanchhu, <b>basnus</b> hai"]
    ] } },
    { rule: "Meeting: <b>namaste</b> (<b>namaskaar</b> when it's formal). Parting: the leaver announces it (<b>ma gaen hai</b>), the one staying sends them off (<b>bistaarai jaanus</b>)." },
    { ex: [
      { ne: "सबैलाई नमस्कार।", ro: "sabailaai namaskaar.", en: "Hello, everyone.", note: "Formal: a meeting, a class, a speech." },
      { ne: "म गएँ है, फेरि भेटौँला।", ro: "ma gaen hai, pheri bhetaunlaa.", en: "I'm off. See you again.", note: "A past form: “I've (as good as) gone”." },
      { ne: "बिस्तारै जानुस् है।", ro: "bistaarai jaanus hai.", en: "Take care on the way.", note: "Literally: go slowly. Said to the one leaving." },
      { ne: "अब म जान्छु। बस्नुस् है।", ro: "aba ma jaanchhu. basnus hai.", en: "I'll be off now. Don't get up.", note: "basnus (sit, stay) to those staying behind." }
    ] },
    { warn: "Looking for a word for “bye” gets you nowhere. <b>namaste</b> as you leave is always polite, especially with people you don't know well; with hosts and friends, announce that you're going and let them answer. Among young people in Kathmandu you will also hear English “bye”, but not from your host's grandmother." }
  ],
  quiz: [
    { q: "You're leaving your host's house after tea. You stand up and say:", a: "ma gaen hai", o: ["bistaarai jaanus", "sabailaai namaskaar"], why: "The leaver announces it: <b>ma gaen hai</b>. <b>bistaarai jaanus</b> is your host's reply." },
    { q: "Your guest is leaving. At the door you say:", a: "bistaarai jaanus", o: ["ma gaen hai", "aba ma jaanchhu"], why: "To the one leaving → <b>bistaarai jaanus</b>. The other two announce that <i>you</i> are going." },
    { q: "Which greeting is the more formal one, for a room of officials?", a: "namaskaar", o: ["namaste", "pheri bhetaunlaa"], why: "<b>namaskaar</b> is the formal form; <b>namaste</b> is never rude, just less formal. <b>pheri bhetaunlaa</b> is for parting." },
    { q: "“See you again.”", a: "pheri bhetaunlaa", o: ["pheri bhetyaun", "bistaarai jaanus"], why: "<b>bhetaunlaa</b> = we'll meet (future). <b>bhetyaun</b> is the past: we met." }
  ] },

{ id: "w-thanks", level: "A1", unit: "greet", title: "“Thank you” and “sorry”: dhanyabaad, maaf garnuhos", sub: "dhanyabaad (real thanks), maaf garnuhos (a real apology, or to excuse yourself), daai / didi (to get attention)",
  words: ["dhanyabaad", "maaf"],
  blocks: [
    { p: "English sprinkles “thanks”, “sorry” and “excuse me” over every exchange. In Nepali <b>dhanyabaad</b> and <b>maaf garnuhos</b> are heavier words, kept for when they are meant; small courtesies are shown in other ways." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>dhanyabaad</b>", "a real favour, a gift, a meal as a guest, a service at the end of it", "pugyo, <b>dhanyabaad</b>"],
      ["a smile, or praise", "small everyday services: tea put in front of you, change handed back, rice passed at home", "<b>mitho chha</b> (it's tasty) thanks the cook"],
      ["<b>maaf garnuhos</b>", "a real apology, or to excuse yourself: interrupting, saying no", "<b>maaf garnuhos</b>, dhilo bhayo"],
      ["<b>daai</b> / <b>didi</b>", "getting someone's attention: a waiter, a stranger in the street", "<b>didi</b>, charpi kahaan chha?"],
      ["<b>kehi chhaina</b>", "answering thanks or an apology: it's nothing", "<b>kehi chhaina</b>"]
    ] } },
    { rule: "Did someone do you a real favour, or did you really do wrong? Then <b>dhanyabaad</b> or <b>maaf garnuhos</b>. For the small change of daily life, a smile and a kinship word do the work." },
    { ex: [
      { ne: "धन्यवाद, दिदी। खाना एकदम मीठो छ।", ro: "dhanyabaad, didi. khaanaa ekdam mitho chha.", en: "Thank you, didi. The food is really tasty.", note: "The praise thanks the cook more than the word does." },
      { ne: "माफ गर्नुहोस्, ढिलो भयो।", ro: "maaf garnuhos, dhilo bhayo.", en: "Sorry I'm late." },
      { ne: "माफ गर्नुहोस्, म आज आउन सक्दिनँ।", ro: "maaf garnuhos, ma aaja aauna sakdina.", en: "I'm sorry, I can't come today.", note: "Excusing yourself, declining." },
      { ne: "दाइ, चर्पी कहाँ छ?", ro: "daai, charpi kahaan chha?", en: "Excuse me, where's the toilet?", note: "daai does the job of “excuse me”." }
    ] },
    { warn: "A <b>dhanyabaad</b> for every cup of tea, at home or among friends, sounds formal and distant, as if you were a guest keeping your distance. With shopkeepers, drivers and hotel staff it is perfectly normal. To call a waiter, <b>maaf garnuhos</b> is understood but opens like an apology: <b>daai</b>, <b>didi</b> or, to a young waiter, <b>bhaai</b> is what people actually say." }
  ],
  quiz: [
    { q: "Your friend's mother serves you daal bhaat. The warmest way to thank her:", a: "ekdam mitho chha", o: ["maaf garnuhos", "kehi chhaina"], why: "Praise is the thanks: <b>ekdam mitho chha</b>. <b>kehi chhaina</b> is the reply to thanks, not the thanks." },
    { q: "You step on someone's foot on the bus.", a: "maaf garnuhos", o: ["dhanyabaad", "kehi chhaina"], why: "A real fault → <b>maaf garnuhos</b>. <b>kehi chhaina</b> is what they'll say back." },
    { q: "You want the attention of a waiter who looks a bit older than you.", a: "daai", o: ["bahini", "dhanyabaad"], why: "A kinship word is the Nepali “excuse me”: <b>daai</b> for a slightly older man. <b>bahini</b> is a younger woman." },
    { q: "Someone thanks you for holding the door. You reply:", a: "kehi chhaina", o: ["maaf garnuhos", "dhanyabaad"], why: "<b>kehi chhaina</b> = it's nothing, no problem." }
  ] },

{ id: "w-hajur", level: "A1", unit: "intro", title: "“Yes”: hajur, ho or hunchha?", sub: "hajur (yes? pardon? I'm listening), ho (that's right), hunchha (OK, I'll do it)",
  words: ["hajur"],
  blocks: [
    { p: "English “yes” answers a call, confirms a fact and accepts a plan. Nepali uses a different word for each job, and <b>hajur</b>, the most respectful “you”, does several of them on its own." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>hajur?</b>", "someone calls you, or you didn't catch what was said", "“paulo…” – <b>hajur?</b>"],
      ["<b>hajur</b>", "yes, I'm listening: to an elder, a teacher, on the phone", "<b>hajur</b>, bhannuhos"],
      ["<b>ho</b>", "that's right: confirming a fact or who someone is", "tapaain paulo hunuhunchha? – <b>ho</b>"],
      ["<b>hunchha</b>", "OK, agreed: accepting a suggestion or a request", "bholi aaunus hai. – <b>hunchha</b>"]
    ] } },
    { rule: "Called, or didn't hear → <b>hajur?</b> A fact to confirm → <b>ho</b>. A plan or request to accept → <b>hunchha</b>. Asked whether you do something → repeat the verb (see <i>Asking questions</i>)." },
    { ex: [
      { ne: "हजुर, भन्नुहोस्।", ro: "hajur, bhannuhos.", en: "Yes, go ahead.", note: "Answering a call, in person or on the phone." },
      { ne: "हजुर? फेरि भन्नुहोस् त।", ro: "hajur? pheri bhannuhos ta.", en: "Pardon? Please say it again." },
      { ne: "हो, म शिक्षक हुँ।", ro: "ho, ma shikshak hun.", en: "Yes, I'm a teacher.", note: "Confirming a fact → ho." },
      { ne: "हुन्छ, भोलि आउँछु।", ro: "hunchha, bholi aaunchhu.", en: "OK, I'll come tomorrow.", note: "Agreeing to do something → hunchha." }
    ] },
    { warn: "<b>ho</b> to “will you come tomorrow?” sounds as if you were confirming a fact, not agreeing: say <b>aaunchhu</b> or <b>hunchha</b>. And <b>ke?</b> for “pardon?” is blunt; to an older person it sounds rude. <b>hajur?</b> is the polite version, and it is never wrong." }
  ],
  quiz: [
    { q: "Your host's grandmother calls your name from the kitchen. You answer:", a: "hajur?", o: ["ke?", "ho?"], why: "Answering a call politely → <b>hajur?</b>" },
    { q: "Someone asks: “Are you Paulo?” You are.", a: "ho", o: ["hunchha", "chha"], why: "Confirming who you are → <b>ho</b>. <b>hunchha</b> agrees to do something." },
    { q: "A friend suggests: “Shall we go tomorrow?” You agree:", a: "hunchha", o: ["ho", "thaahaa chha"], why: "Accepting a plan → <b>hunchha</b>. <b>ho</b> confirms facts, not plans." },
    { q: "“Will you have tea?” – “Yes, please.”", a: "khaanchhu", o: ["ho", "chha"], why: "A question about doing something is answered with the verb: <b>khaanchhu</b> (I'll have some)." }
  ] },

{ id: "w-also", level: "A1", unit: "intro", title: "“And”, “also”, “and you?”: ra, ani, pani, ni", sub: "ra (and, joining words), ani (and then), pani (also, after the word), ni (and what about…?)",
  words: ["pani", "ani", "ra"],
  blocks: [
    { p: "English “and” and “too” are flexible: “and” joins anything, “too” floats to the end of the sentence. Nepali has separate words, and the one for “too” has a fixed place." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>ra</b>", "and: joining two words", "ma <b>ra</b> mero saathi"],
      ["<b>ani</b>", "and then: the next action or sentence; alone, “and…?”", "khaanaa khaanchhu, <b>ani</b> jaanchhu"],
      ["<b>pani</b>", "also, too: straight after the word it adds to", "ma <b>pani</b> shikshak hun (I'm a teacher too)"],
      ["<b>ni</b>", "after a word: and what about…?", "tapaainlaai <b>ni</b>?"]
    ] } },
    { rule: "<b>pani</b> sticks to the word it adds to. Move it, and you change what is “also” true." },
    { ex: [
      { ne: "म पोर्चुगलबाट आएको हुँ। तपाईं नि?", ro: "ma porchugalbaata aaeko hun. tapaain ni?", en: "I'm from Portugal. And you?" },
      { ne: "म पनि शिक्षक हुँ।", ro: "ma pani shikshak hun.", en: "I'm a teacher too.", note: "Like you, I am a teacher." },
      { ne: "म शिक्षक पनि हुँ।", ro: "ma shikshak pani hun.", en: "I'm also a teacher.", note: "As well as my other job." },
      { ne: "म र मेरो साथी पोर्चुगलबाट आएका हौँ।", ro: "ma ra mero saathi porchugalbaata aaekaa haun.", en: "My friend and I are from Portugal." }
    ] },
    { warn: "Copying English word order gives <i>ma shikshak hun pani</i>, which doesn't work. <b>pani</b> goes straight after the word it adds to. With <b>malaai</b> phrases it follows <b>malaai</b>: “I'm fine.” – <b>malaai pani</b> (me too). To start a sentence or a question with “and”, use <b>ani</b>: <b>ani?</b> (and then?)." }
  ],
  quiz: [
    { q: "“I'm fine.” (malaai thik chha) – “Me too.”", a: "malaai pani", o: ["pani malaai", "malaai ni"], why: "<b>pani</b> comes after the word: <b>malaai pani</b>. <b>malaai ni?</b> would ask “and me?”" },
    { q: "You've told someone your name. Ask “And yours?”", a: "tapaainko ni?", o: ["tapaainko pani?", "ra tapaainko?"], why: "“And what about…?” = <b>ni</b> after the word. <b>tapaainko pani</b> means “yours too”." },
    { q: "“I'm also a teacher” (as well as being a scientist).", a: "ma shikshak pani hun", o: ["ma pani shikshak hun", "ma shikshak hun pani"], why: "What is added is <i>teacher</i>, so <b>pani</b> follows <b>shikshak</b>. <b>ma pani</b> = I, like someone else." },
    { q: "Your friend is telling a story and pauses. “And then?”", a: "ani?", o: ["ra?", "pani?"], why: "<b>ani</b> = and then; on its own it asks for more." }
  ] },

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

{ id: "w-howmuch", level: "A1", unit: "num", title: "How much, how many, how long: kati and its partners", sub: "kati ho? (the price), kati wataa / kati janaa (how many things / people), kati samaya (how long), kati barsha (how old)",
  words: ["kati"],
  blocks: [
    { p: "English changes the question word: how much, how many, how long, how old. Nepali keeps <b>kati</b> and adds what you are counting." },
    { table: { head: ["Ask", "For", "Example"], rows: [
      ["<b>kati ho?</b> / <b>kati parchha?</b>", "the price of a thing", "yo <b>kati ho</b>?"],
      ["<b>kati laagchha?</b>", "the cost of a service: a taxi, a ticket", "thamel jaana <b>kati laagchha</b>?"],
      ["<b>kati wataa</b> / <b>kati janaa</b>", "how many things / how many people", "<b>kati janaa</b> hunuhunchha?"],
      ["<b>kati samaya laagchha?</b>", "how long something takes", "pokharaa jaana <b>kati samaya laagchha</b>?"],
      ["<b>kati barsha</b>", "how old", "tapaain <b>kati barsha</b> hunubhayo?"]
    ] } },
    { rule: "<b>kati</b> alone asks how much. Add what you count: <b>wataa</b> (things), <b>janaa</b> (people), <b>samaya</b> (time), <b>din</b> (days), <b>barsha</b> (years)." },
    { ex: [
      { ne: "यो कति पर्छ?", ro: "yo kati parchha?", en: "How much is this?", note: "Same as yo kati ho?" },
      { ne: "कति जना हुनुहुन्छ?", ro: "kati janaa hunuhunchha?", en: "How many of you are there?", note: "What a waiter asks at the door." },
      { ne: "ठमेल जान कति समय लाग्छ?", ro: "thamel jaana kati samaya laagchha?", en: "How long does it take to get to Thamel?" },
      { ne: "तपाईं कति वर्ष हुनुभयो?", ro: "tapaain kati barsha hunubhayo?", en: "How old are you?", note: "Age is the years you have “become”: a past form." }
    ] },
    { warn: "“How long does it take?” is not <i>kati laamo?</i>: <b>laamo</b> is length (<b>kati laamo chha?</b> = how long is it, end to end). Time is <b>kati samaya laagchha?</b>, distance <b>kati taadhaa chha?</b> And to count, <b>kati</b> needs <b>wataa</b> or <b>janaa</b>: the chapter <i>Counting people and things</i> explains them." }
  ],
  quiz: [
    { q: "At a fruit stall, pointing at the mangoes: “How much?”", a: "kati ho?", o: ["kati janaa?", "kati samaya laagchha?"], why: "The price → <b>kati ho?</b> (or <b>kati parchha?</b>)." },
    { q: "A waiter at the door: “How many of you?”", a: "kati janaa?", o: ["kati wataa?", "kati ho?"], why: "People are counted with <b>janaa</b>." },
    { q: "“How long does it take to get to Bhaktapur?”", a: "bhaktapur jaana kati samaya laagchha?", o: ["bhaktapur kati laamo chha?", "bhaktapur kati taadhaa chha?"], why: "Time → <b>kati samaya laagchha</b>. <b>taadhaa</b> asks how far, <b>laamo</b> how long in length." },
    { q: "In a momo shop: “How many momos do you want?”", a: "kati wataa momo chaahiyo?", o: ["kati janaa momo chaahiyo?", "kati momo ho?"], why: "Things → <b>kati wataa</b>. <b>kati … ho?</b> asks the price." }
  ] },

{ id: "w-eat", level: "A1", unit: "food", title: "Eat, drink, smoke: khaanu does most of it", sub: "khaanu (eat; also tea, water, cigarettes, medicine), piunu (drink), khaanaa (a meal), khaajaa (a snack)",
  words: ["khaan-", "khaae-", "piu-", "khaajaa"],
  blocks: [
    { p: "English has separate verbs for eating, drinking, smoking and taking pills. Everyday Nepali uses <b>khaanu</b> for all of them, and splits food itself into the meal and everything else." },
    { table: { head: ["Say", "For", "Example"], rows: [
      ["<b>khaanu</b>", "eating; also drinking tea or water, smoking, taking medicine", "chiyaa <b>khaanus</b>"],
      ["<b>piunu</b>", "drinking: correct everywhere, a little more careful in tone", "dherai paani <b>piunuhos</b>"],
      ["<b>khaanaa khaanu</b>", "having a proper meal: rice, daal, vegetables", "<b>khaanaa khaanubhayo</b>?"],
      ["<b>khaajaa khaanu</b>", "a snack between meals: tea and biscuits, chiura, momos", "diunso <b>khaajaa khaanchhu</b>"]
    ] } },
    { rule: "Food, drink, cigarettes or pills: <b>khaanu</b> works for all of them. <b>khaanaa</b> is the real meal; anything lighter is <b>khaajaa</b>." },
    { ex: [
      { ne: "चिया खानुहुन्छ?", ro: "chiyaa khaanuhunchha?", en: "Will you have some tea?", note: "khaanu is the everyday verb for tea." },
      { ne: "म चुरोट खाँदिनँ।", ro: "ma churot khaandina.", en: "I don't smoke." },
      { ne: "खाना खानुभयो?", ro: "khaanaa khaanubhayo?", en: "Have you eaten?", note: "A greeting around mealtimes. It asks about the rice meal." },
      { ne: "दिउँसो हामी खाजा खान्छौँ।", ro: "diunso haami khaajaa khaanchhaun.", en: "In the afternoon we have a snack." }
    ] },
    { warn: "<b>khaanaa khaanubhayo?</b> is a greeting, not an invitation: answer <b>khaaen</b> (I have) or <b>aba khaanchhu</b> (I'm about to), and ask it back. A plate of momos is <b>khaajaa</b>, so it may not count as having eaten. <b>piunu</b> is never wrong for drinking, but at a tea stall you will mostly hear <b>khaanu</b>. Medicine is eaten too: <b>aushadhi khaanu</b>." }
  ],
  quiz: [
    { q: "At 11 am a neighbour asks: khaanaa khaanubhayo? You had rice an hour ago.", a: "khaaen", o: ["khaanchhu", "khaandina"], why: "It's a greeting about today's meal; you have eaten → past <b>khaaen</b>. Then ask back: <b>tapaain ni?</b>" },
    { q: "You had a plate of momos at 3 pm. In Nepali terms that was…", a: "khaajaa", o: ["khaanaa", "chiyaa"], why: "Anything lighter than the rice meal is <b>khaajaa</b>." },
    { q: "“I don't smoke.”", a: "ma churot khaandina", o: ["ma churot gardina", "masanga churot chhaina"], why: "Smoking is “eating” too: <b>churot khaanu</b>. <b>masanga churot chhaina</b> = I have no cigarettes on me." },
    { q: "The doctor tells you to drink plenty of water. She says:", a: "dherai paani piunuhos", o: ["dherai paani laijaanuhos", "dherai paani haalnuhos"], why: "<b>piunu</b> = drink; <b>khaanuhos</b> would do too. <b>laijaanu</b> is take away, <b>haalnu</b> put in." }
  ] },

{ id: "w-taste", level: "A1", unit: "food", title: "Tasty, sweet, spicy, hot: mitho, guliyo, piro, taato", sub: "mitho (tasty), guliyo (sweet), piro (chilli-hot), taato / chiso (hot / cold to the touch)",
  words: ["mitho", "guliyo", "piro", "taato", "chiso"],
  blocks: [
    { p: "English “hot” covers chilli and temperature, and “sweet” is often loose praise. Nepali keeps them apart, and its word for “tasty” says nothing about sugar." },
    { table: { head: ["Word", "Means", "Example"], rows: [
      ["<b>mitho</b>", "tasty, delicious: any food you enjoy, spicy or sweet", "daal bhaat <b>mitho</b> chha"],
      ["<b>guliyo</b>", "sweet: sugar", "chiyaa <b>guliyo</b> chha"],
      ["<b>piro</b>", "hot from chilli: spicy", "achaar <b>piro</b> chha"],
      ["<b>taato</b> / <b>chiso</b>", "hot / cold to the touch: temperature", "<b>taato</b> paani, <b>chiso</b> paani"],
      ["<b>amilo</b>, <b>nunilo</b>, <b>tito</b>", "sour, salty, bitter", "kaagati <b>amilo</b> hunchha"]
    ] } },
    { rule: "Did the chilli burn, or the temperature? <b>piro</b> or <b>taato</b>. Did you enjoy it? <b>mitho</b>, whatever the flavour." },
    { ex: [
      { ne: "यो अचार अलि पिरो छ।", ro: "yo achaar ali piro chha.", en: "This pickle is a bit spicy." },
      { ne: "चिया तातो छ, बिस्तारै खानुहोस्।", ro: "chiyaa taato chha, bistaarai khaanuhos.", en: "The tea is hot; drink it slowly." },
      { ne: "दाल मीठो छ, तर अलि नुनिलो भयो।", ro: "daal mitho chha, tara ali nunilo bhayo.", en: "The daal is tasty, but a bit salty." },
      { ne: "मलाई गुलियो चिया मन पर्दैन।", ro: "malaai guliyo chiyaa man pardaina.", en: "I don't like sweet tea." }
    ] },
    { warn: "<i>khaanaa taato chha</i> for “the food is spicy” tells the cook it is fresh off the stove. For less chilli, ask <b>dherai piro nahaalnuhos</b>. And <b>mitho</b> is not “sweet”: it is the praise for anything that tastes good; <b>guliyo</b> only describes sugar. Weather has its own words: <b>garmi</b> (hot), <b>jaado</b> (cold)." }
  ],
  quiz: [
    { q: "The curry is burning your mouth with chilli. “It's very hot.”", a: "dherai piro chha", o: ["dherai taato chha", "dherai guliyo chha"], why: "Chilli heat → <b>piro</b>. <b>taato</b> is temperature." },
    { q: "Your host asks how the food is. You love it:", a: "mitho chha", o: ["guliyo chha", "piro chha"], why: "<b>mitho</b> = tasty, the praise for any good food." },
    { q: "Your tea has just been poured and is too hot to sip.", a: "chiyaa taato chha", o: ["chiyaa piro chha", "chiyaa guliyo chha"], why: "Temperature → <b>taato</b>." },
    { q: "“Lemons are sour.”", a: "kaagati amilo hunchha", o: ["kaagati tito hunchha", "kaagati nunilo hunchha"], why: "Sour = <b>amilo</b>; <b>tito</b> is bitter, <b>nunilo</b> salty." }
  ] },

{ id: "w-order", level: "A1", unit: "food", title: "Asking for things: dinus na, chaahiyo, chha?", sub: "… dinus na (please give: ordering), malaai … chaahiyo (I want / need), … chha? (do you have…?), man parchha (I like: not an order), pugyo (enough)",
  words: ["chaahiyo", "dinus", "dinuhos", "pugyo"],
  blocks: [
    { p: "English orders politely with “I'd like” or “I'll have”. Translated word for word with the verb for liking, that becomes a remark about your tastes. Nepali orders with “give” or “is needed”." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>… dinus na</b>", "ordering, or asking someone to hand you something", "ek kap chiyaa <b>dinus na</b>"],
      ["<b>malaai … chaahiyo</b>", "what you want or need, right now", "malaai yo <b>chaahiyo</b>"],
      ["<b>… chha?</b>", "whether they have it", "momo <b>chha</b>?"],
      ["<b>malaai … man parchha</b>", "what you like in general: conversation, not an order", "malaai momo <b>man parchha</b>"],
      ["<b>pugyo</b>", "that's enough, no more", "<b>pugyo</b>, dhanyabaad"]
    ] } },
    { rule: "Want it brought to you now? <b>dinus na</b> or <b>chaahiyo</b>. Talking about your tastes? <b>man parchha</b>." },
    { ex: [
      { ne: "दाइ, दुई कप चिया दिनुस् न।", ro: "daai, dui kap chiyaa dinus na.", en: "Two cups of tea, please.", note: "dinus is the spoken form of dinuhos." },
      { ne: "यहाँ मोमो छ?", ro: "yahaan momo chha?", en: "Do you have momos here?" },
      { ne: "मलाई एउटा पानीको बोतल चाहियो।", ro: "malaai eutaa paaniko botal chaahiyo.", en: "I'd like a bottle of water." },
      { ne: "पुग्यो, पुग्यो। अब खान सक्दिनँ।", ro: "pugyo, pugyo. aba khaana sakdina.", en: "That's enough. I can't eat any more.", note: "Hosts keep serving: say it firmly, often twice." }
    ] },
    { warn: "“I'd like the momos” rendered as <i>malaai momo man parchha</i> tells the waiter you are fond of momos, and he will wait for your order. Order with <b>momo dinus na</b> or <b>malaai momo chaahiyo</b>. To turn down a street seller: <b>chaahindaina</b> (I don't need it)." }
  ],
  quiz: [
    { q: "In a café: “I'd like a cup of tea.”", a: "ek kap chiyaa dinus na", o: ["malaai ek kap chiyaa man parchha", "ek kap chiyaa chha"], why: "Ordering → <b>dinus na</b>. <b>man parchha</b> states a taste; <b>chha</b> says there is one." },
    { q: "You want to know whether the restaurant has momos today.", a: "momo chha?", o: ["malaai momo man parchha?", "momo pugyo?"], why: "Do you have…? → <b>… chha?</b>" },
    { q: "Your host is about to give you a third helping.", a: "pugyo", o: ["chaahiyo", "dinus na"], why: "<b>pugyo</b> = that's enough. The other two ask for more." },
    { q: "A new friend asks whether you like Nepali food. “Yes, I like it a lot.”", a: "malaai dherai man parchha", o: ["malaai dherai chaahiyo", "dherai dinus na"], why: "A taste, not an order → <b>man parchha</b>." }
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

{ id: "w-very", level: "A1", unit: "shop", title: "Very, too, a bit: dherai, ekdam, saahrai, ali", sub: "dherai (very, a lot, too), ekdam (really, totally), saahrai (extremely), ali / alikati (a bit, a little)",
  words: ["dherai", "ekdam", "saahrai", "alikati"],
  blocks: [
    { p: "English separates “very”, “a lot” and “too”. In everyday Nepali one word, <b>dherai</b>, covers all three, and the context, often the verb <b>bhayo</b>, tells you which." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>dherai</b>", "very; a lot; with <b>bhayo</b>, too", "<b>dherai</b> mahango bhayo"],
      ["<b>ekdam</b>", "really, totally", "<b>ekdam</b> raamro"],
      ["<b>saahrai</b>", "extremely, often with feeling", "<b>saahrai</b> raamro chha"],
      ["<b>ali</b>", "a bit, rather: before a describing word", "<b>ali</b> sasto garnus na"],
      ["<b>alikati</b> / <b>ali-ali</b>", "a little: an amount", "<b>alikati</b> dinus"]
    ] } },
    { rule: "Strength runs roughly <b>ali</b> → <b>dherai</b> → <b>ekdam</b> / <b>saahrai</b>. For “too”, judge it with <b>bhayo</b> (it has become): <b>dherai mahango bhayo</b>." },
    { ex: [
      { ne: "यो धेरै महँगो भयो।", ro: "yo dherai mahango bhayo.", en: "This is too expensive.", note: "bhayo judges it against what you want." },
      { ne: "यो कपडा एकदम राम्रो छ।", ro: "yo kapadaa ekdam raamro chha.", en: "This fabric is really nice." },
      { ne: "यो अलि सानो भयो।", ro: "yo ali saano bhayo.", en: "This one is a bit small." },
      { ne: "मलाई नेपाल साह्रै मन पर्छ।", ro: "malaai nepaal saahrai man parchha.", en: "I love Nepal." }
    ] },
    { warn: "Learners hunt for a word for “too” and miss the pattern: <b>dherai … bhayo</b> = too …, <b>ali … bhayo</b> = a bit too …. <b>dherai mahango chha</b> simply says it is very expensive. When you want to stress the excess, <b>jyaadai</b> (too much) also exists. And the intensifier goes right before its word: <b>dherai mitho</b>, never <i>mitho dherai</i>." }
  ],
  quiz: [
    { q: "The price is more than you will pay. “Too expensive.”", a: "dherai mahango bhayo", o: ["mahango dherai bhayo", "mahango pani bhayo"], why: "Intensifier before the word, and <b>bhayo</b> for the judgement: <b>dherai mahango bhayo</b>." },
    { q: "“Make it a bit cheaper, please.”", a: "ali sasto garnus na", o: ["dherai sasto garnus na", "ekdam sasto garnus na"], why: "A bit → <b>ali</b>. The others ask for a big cut." },
    { q: "The shopkeeper offers you a taste of dried fruit; you want only a little.", a: "alikati dinus", o: ["dherai dinus", "saahrai dinus"], why: "A small amount → <b>alikati</b>. <b>saahrai</b> intensifies qualities and feelings, not amounts." },
    { q: "“This shirt is really nice.”", a: "yo kamij ekdam raamro chha", o: ["yo kamij ali raamro chha", "yo kamij raamro ekdam chha"], why: "Really → <b>ekdam</b>, right before <b>raamro</b>. <b>ali raamro</b> is only “fairly nice”." }
  ] },

{ id: "w-gocome", level: "A1", unit: "move", title: "Go, come, arrive, walk: jaanu, aaunu, pugnu, hindnu", sub: "jaanu (go elsewhere), aaunu (come towards the speaker or the listener), pugnu (reach, arrive), hindnu (walk, set off)",
  words: ["aaunchhu", "pug-", "aaipug-", "hind-"],
  blocks: [
    { p: "English decides between “come” and “go” loosely, and “arrive” and “walk” feel like separate topics. In Nepali the choice of verb depends on where the movement is heading, and arriving and going on foot have verbs of their own that you need from the first taxi ride." },
    { table: { head: ["Verb", "Use it when", "Example"], rows: [
      ["<b>jaanu</b>", "the movement goes somewhere other than where you or the listener are", "ma ghar <b>jaanchhu</b>"],
      ["<b>aaunu</b>", "the movement heads towards the speaker, or towards the person you are talking to", "ma bholi tapaainko ghar <b>aaunchhu</b>"],
      ["<b>pugnu</b>", "you reach the end point: arrive, get there", "ma thamel <b>pugen</b> (I've got to Thamel)"],
      ["<b>hindnu</b>", "you go on foot; also simply set off", "<b>hindera</b> jaaun (let's walk)"]
    ] } },
    { rule: "Picture where the listener is. Towards you or towards them → <b>aaunu</b>. Anywhere else → <b>jaanu</b>. Getting there → <b>pugnu</b>. On foot → <b>hindera</b>." },
    { ex: [
      { ne: "म एक छिनमा आउँछु।", ro: "ma ek chhinmaa aaunchhu.", en: "I'll be back in a minute.", note: "You'll be back where the listener is → aaunu." },
      { ne: "ल, म गएँ है।", ro: "la, ma gaen hai.", en: "Right, I'm off.", note: "Said as you leave: the past form treats it as done." },
      { ne: "म ठमेल पुगेँ।", ro: "ma thamel pugen.", en: "I've arrived in Thamel.", note: "The usual text or call on arrival: ma pugen." },
      { ne: "नजिकै छ, हिँडेर जाऔँ।", ro: "najikai chha, hindera jaaun.", en: "It's close. Let's walk." }
    ] },
    { warn: "On the phone to a friend waiting at the café, <b>ma jaanchhu</b> sounds as if you were heading somewhere else: towards the listener it is <b>ma aaunchhu</b>, as in English “I'm coming”. When you arrive at the place where someone is, you will often hear <b>aaipugnu</b> (come + reach): <b>tapaain kahile aaipugnubhayo?</b> (when did you arrive?). Out and about, <b>kataa hindeko?</b> is a casual “where are you off to?”" }
  ],
  quiz: [
    { q: "On the phone to a friend who is already at the café where you're meeting: “I'll be there in a moment.”", a: "ma ek chhinmaa aaunchhu", o: ["ma ek chhinmaa jaanchhu", "ma ek chhinmaa gaen"], why: "You are moving towards the person you are talking to → <b>aaunu</b>. <b>ma ek chhinmaa pugchhu</b> (I'll get there in a moment) also works." },
    { q: "You get out of the taxi and text the friend you're meeting: “I've arrived.”", a: "ma pugen", o: ["ma gaen", "ma hinden"], why: "Reaching the end point → <b>pugnu</b>. <b>ma gaen</b> is what you say as you leave." },
    { q: "Getting up to leave a friend's flat: “Right, I'm off.”", a: "la, ma gaen hai", o: ["la, ma pugen hai", "la, ma aaipugen hai"], why: "Leaving → <b>jaanu</b>, in the past form: <b>ma gaen hai</b>. <b>pugen</b> and <b>aaipugen</b> both mean “I've arrived”." },
    { q: "The shop is only five minutes away. “Let's walk.”", a: "hindera jaaun", o: ["pugera jaaun", "aaera jaaun"], why: "On foot → <b>hindera</b> (having walked). <b>jaaun</b> alone is just “let's go”." }
  ] },

{ id: "w-fromto", level: "A1", unit: "move", title: "From, to, until, towards: -baata, -dekhi, -samma, -tira", sub: "-baata (from a place), -dekhi (from a time, since), -samma (up to, until), -tira (towards, around)",
  words: ["-baata", "-dekhi", "-samma", "-tira"],
  blocks: [
    { p: "English “from” works for places and times alike, and “to” for destinations and deadlines. Nepali marks a starting place, a starting time and an end point with different endings. Like all postpositions (see the grammar chapter on them), they are glued to the end of the word; <b>-maa</b> (in, at) you already know, and going <i>to</i> a place usually needs no ending at all: <b>ma thamel jaanchhu</b>." },
    { table: { head: ["Ending", "Use it for", "Example"], rows: [
      ["<b>-baata</b>", "from a place; also by, through (a means)", "yahaan<b>baata</b> (from here), phon<b>baata</b> (by phone)"],
      ["<b>-dekhi</b>", "from a point in time, since; also the start of a “from X to Y”", "bihaan<b>dekhi</b> (since this morning)"],
      ["<b>-samma</b>", "up to, until, as far as: the end point, in time or space", "thamel<b>samma</b> kati laagchha?"],
      ["<b>-tira</b>", "towards, in the direction of; around (a place or a time)", "daayaan<b>tira</b>, tin baje<b>tira</b> (around three)"]
    ] } },
    { rule: "Where does it start? A place → <b>-baata</b>, a time → <b>-dekhi</b>. Where does it stop? → <b>-samma</b>. Only a direction or a rough time → <b>-tira</b>." },
    { ex: [
      { ne: "यहाँबाट ठमेल कति टाढा छ?", ro: "yahaanbaata thamel kati taadhaa chha?", en: "How far is Thamel from here?" },
      { ne: "म बिहानदेखि यहाँ छु।", ro: "ma bihaandekhi yahaan chhu.", en: "I've been here since this morning.", note: "English says “have been”; Nepali keeps the present with -dekhi." },
      { ne: "तीन बजेतिर भेटौँ।", ro: "tin bajetira bhetaun.", en: "Let's meet around three." },
      { ne: "काठमाडौंदेखि पोखरासम्म सात घण्टा लाग्छ।", ro: "kaathmaadaundekhi pokharaasamma saat ghantaa laagchha.", en: "It takes seven hours from Kathmandu to Pokhara.", note: "From X to Y: -dekhi … -samma. kaathmaadaunbaata also works here." }
    ] },
    { warn: "Don't translate “to” as <b>-samma</b>: <b>ma pokharaasamma jaanchhu</b> means “I'm going as far as Pokhara” (and no further); plain <b>ma pokharaa jaanchhu</b> is “I'm going to Pokhara”. For a starting time, <b>-dekhi</b> is always safe; you will also hear <b>-baata</b> with a few time words, such as <b>bholibaata</b> (from tomorrow)." }
  ],
  quiz: [
    { q: "“I've been in Nepal since Monday.”", a: "ma sombaardekhi nepaalmaa chhu", o: ["ma sombaarsamma nepaalmaa chhu", "ma sombaartira nepaalmaa chhu"], why: "A starting time → <b>-dekhi</b>. <b>-samma</b> would mean you are here <i>until</i> Monday." },
    { q: "To a taxi driver: “How much is it as far as the airport?”", a: "eyarportsamma kati laagchha?", o: ["eyarportbaata kati laagchha?", "eyarporttira kati laagchha?"], why: "The end point → <b>-samma</b>. <b>-baata</b> would make the airport your starting point." },
    { q: "Someone asks where your bus has come from. “From Pokhara.”", a: "pokharaabaata", o: ["pokharaasamma", "pokharaatira"], why: "A starting place → <b>-baata</b>." },
    { q: "“Let's meet at around three.”", a: "tin bajetira bhetaun", o: ["tin bajedekhi bhetaun", "tin bajesamma bhetaun"], why: "A rough time → <b>-tira</b>. <b>-dekhi</b> is “from three on”, <b>-samma</b> “until three”." }
  ] },

{ id: "w-here", level: "A1", unit: "move", title: "Here, there, where: the y- / ty- / k- pattern", sub: "y- (this, near), ty- (that, further off), k- (the question word)",
  words: ["yahaan", "tyahaan", "yataa", "utaa", "kataa"],
  blocks: [
    { p: "English “here, there, where” and “this, that, which” look unrelated. In Nepali they come in sets built on the same three beginnings, so one set you know lets you decode the other two." },
    { table: { head: ["y- · ty- · k-", "Means", "Example"], rows: [
      ["<b>yo</b> · <b>tyo</b> · <b>kun</b>", "this · that · which?", "<b>kun</b> bas thamel jaanchha?"],
      ["<b>yahaan</b> · <b>tyahaan</b> · <b>kahaan</b>", "here · there · where?", "<b>yahaan</b> roknuhos"],
      ["<b>yataa</b> · <b>utaa</b> · <b>kataa</b>", "this way · that way · which way?", "<b>yataa</b> aaunuhos"],
      ["<b>yasto</b> · <b>tyasto</b> · <b>kasto</b>", "like this · like that · what kind? how?", "tapaainlaai <b>kasto</b> chha?"],
      ["<b>yati</b> · <b>tyati</b> · <b>kati</b>", "this much · that much · how much? how many?", "<b>kati</b> ho?"]
    ] } },
    { rule: "<b>y-</b> points at what is near you, <b>ty-</b> at what is further off or already mentioned, <b>k-</b> asks. Meet a new <b>k-</b> word and you can usually guess its <b>y-</b> and <b>ty-</b> partners." },
    { ex: [
      { ne: "यता आउनुहोस्।", ro: "yataa aaunuhos.", en: "Come this way, please." },
      { ne: "बस बिसौनी कता छ?", ro: "bas bisauni kataa chha?", en: "Which way is the bus stop?" },
      { ne: "यहाँ रोक्नुहोस्, त्यहाँ होइन।", ro: "yahaan roknuhos, tyahaan hoina.", en: "Stop here, please, not there." },
      { ne: "यो कति हो?", ro: "yo kati ho?", en: "How much is this?" }
    ] },
    { warn: "The pattern has two kinks. “Which?” is <b>kun</b>, not <b>ke</b> (what): <b>kun bas?</b> = which bus? And “that way” is usually <b>utaa</b>. <b>kahaan</b> asks where something is; <b>kataa</b> asks which direction, and the answer is often a pointing hand and <b>utaa</b>. A fourth set in <b>j-</b> (<b>jahaan, jasto, jati</b>: where, like, as much as) comes later." }
  ],
  quiz: [
    { q: "You point at a jacket on the shop counter: “How much is this?”", a: "yo kati ho?", o: ["tyo kasto ho?", "yo kahaan ho?"], why: "Near you → <b>yo</b>; how much → <b>kati</b>." },
    { q: "Someone asks for the toilet and you point down the corridor: “That way.”", a: "utaa", o: ["kataa", "yahaan"], why: "That way → <b>utaa</b>. <b>kataa</b> is the question, “which way?”." },
    { q: "“Which bus goes to Thamel?”", a: "kun bas thamel jaanchha?", o: ["ke bas thamel jaanchha?", "kahaan bas thamel jaanchha?"], why: "Choosing one of several → <b>kun</b>. <b>ke</b> is “what”, <b>kahaan</b> “where”." },
    { q: "You know <b>yasto</b> = like this. So <b>kasto</b> means:", a: "what kind? how?", o: ["like that", "this much"], why: "<b>k-</b> makes the question word: <b>kasto chha?</b> = how is it?" }
  ] },

{ id: "w-spouse", level: "A1", unit: "fam", title: "Husband and wife: shrimaan, shrimati and the plainer words", sub: "shrimaan / shrimati (polite, always safe), logne / swaasni (plain, can sound blunt), budhaa / budhi (casual, affectionate)",
  words: ["shrimaan", "shrimati", "logne", "swaasni"],
  blocks: [
    { p: "English has one neutral pair, husband and wife. Nepali has several, and they differ above all in register: one pair is safe with anyone, the others belong to particular company." },
    { table: { head: ["Words", "Register", "Example"], rows: [
      ["<b>shrimaan</b> / <b>shrimati</b>", "polite and neutral: fine for your own spouse and for anyone else's", "tapaainko <b>shrimaan</b> ke kaam garnuhunchha?"],
      ["<b>logne</b> / <b>swaasni</b>", "plain, everyday among family and close friends; about other people's spouses it can sound blunt", "uniharu <b>logne-swaasni</b> hun"],
      ["<b>budhaa</b> / <b>budhi</b>", "literally “old man / old woman”; casual and affectionate, for your own spouse, among friends", "mero <b>budhi</b> (my missus)"]
    ] } },
    { rule: "With anyone you call <b>tapaain</b>, say <b>shrimaan / shrimati</b>. Save the other pairs until you hear your Nepali friends use them about their own spouses." },
    { ex: [
      { ne: "मेरो श्रीमती पोर्चुगलमा छिन्।", ro: "mero shrimati porchugalmaa chhin.", en: "My wife is in Portugal.", note: "chhin: “she is”, with some respect." },
      { ne: "तपाईंको श्रीमान् के काम गर्नुहुन्छ?", ro: "tapaainko shrimaan ke kaam garnuhunchha?", en: "What does your husband do?" },
      { ne: "तपाईंको श्रीमती सन्चै हुनुहुन्छ?", ro: "tapaainko shrimati sanchai hunuhunchha?", en: "Is your wife well?", note: "Asking after the family is normal and friendly." },
      { ne: "उनीहरू लोग्ने-स्वास्नी हुन्।", ro: "uniharu logne-swaasni hun.", en: "They're husband and wife.", note: "The plain pair, common for a couple." }
    ] },
    { warn: "Learners who pick up <b>swaasni</b> or <b>logne</b> from friends sometimes use it to a host: <b>tapaainko swaasni</b> can sound too blunt from a guest, so stay with <b>shrimati</b>. <b>budhaa / budhi</b> also simply mean an old man and an old woman (<b>budhaabudhi</b> = old people), so use them only for your own spouse, and only in relaxed company." }
  ],
  quiz: [
    { q: "At dinner, you ask your host politely: “What does your husband do?”", a: "tapaainko shrimaan ke kaam garnuhunchha?", o: ["tapaainko logne ke kaam garchha?", "tapaainko budhaa ke kaam garchha?"], why: "Someone else's spouse, polite company → <b>shrimaan</b>, with the respectful verb." },
    { q: "Introducing your wife to a colleague's family. Which word?", a: "shrimati", o: ["swaasni", "budhi"], why: "<b>shrimati</b> is safe everywhere. <b>budhi</b> is for joking among friends; <b>swaasni</b> is too plain here." },
    { q: "What do <b>budhaa</b> and <b>budhi</b> mean literally?", a: "old man and old woman", o: ["husband and wife (formal)", "son and daughter"], why: "Hence the affectionate, joking tone when used for a spouse." },
    { q: "Asking a neighbour politely: “Is your wife well?”", a: "tapaainko shrimati sanchai hunuhunchha?", o: ["tapaainko swaasni sanchai chhe?", "tapaainko budhi sanchai chhe?"], why: "Someone else's wife → <b>shrimati</b>, with <b>hunuhunchha</b>." }
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
  ] },

{ id: "w-time", level: "A1", unit: "time", title: "“Time”: samaya, baje, ghantaa, patak, belaa", sub: "samaya (time in general), baje (o'clock), ghantaa (hours), patak (times, occasions), belaa (the time for something)",
  words: ["samaya", "baje", "ghantaa", "patak", "choti", "belaa"],
  blocks: [
    { p: "English “time” covers the clock, a length of time, an occasion and the right moment. Nepali has a word for each, and they don't stand in for one another." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>samaya</b>", "time in general: having time, free time, how long something takes", "masanga <b>samaya</b> chhaina"],
      ["<b>baje</b>", "a point on the clock: o'clock, at … o'clock", "tin <b>baje</b> (at three)"],
      ["<b>ghantaa</b>", "hours as a length of time", "tin <b>ghantaa</b> (three hours)"],
      ["<b>patak</b> / <b>choti</b>", "times as occasions: once, twice, the first time", "dui <b>patak</b> (twice)"],
      ["<b>belaa</b>", "the time of day for something, the moment", "khaanaa khaane <b>belaa</b> (mealtime)"]
    ] } },
    { rule: "Can you read it off a clock? → <b>baje</b>. Can you measure it? → <b>ghantaa</b> (or <b>samaya</b>). Can you count it? → <b>patak</b>. Is it the moment for something? → <b>belaa</b>." },
    { ex: [
      { ne: "म तीन बजे आउँछु, अनि दुई घण्टा बस्छु।", ro: "ma tin baje aaunchhu, ani dui ghantaa baschhu.", en: "I'll come at three and stay for two hours." },
      { ne: "मसँग आज समय छैन।", ro: "masanga aaja samaya chhaina.", en: "I don't have time today." },
      { ne: "यो औषधि दिनमा दुई पटक खानुहोस्।", ro: "yo aushadhi dinmaa dui patak khaanuhos.", en: "Take this medicine twice a day." },
      { ne: "खाना खाने बेला भयो।", ro: "khaanaa khaane belaa bhayo.", en: "It's time to eat." }
    ] },
    { warn: "<b>tin baje</b> is three o'clock; <b>tin ghantaa</b> is three hours. Mix them up and you agree to meet at three when you meant to wait for three hours. And “two times” is <b>dui patak</b> or <b>dui choti</b>: occasions are counted with <b>patak</b>, not with <b>samaya</b>. On the clock, <b>kati bajyo?</b> = what time is it?, <b>kati baje?</b> = at what time?" }
  ],
  quiz: [
    { q: "“The bus leaves at four.”", a: "bas chaar baje jaanchha", o: ["bas chaar ghantaa jaanchha", "bas chaar patak jaanchha"], why: "A point on the clock → <b>baje</b>." },
    { q: "“It takes three hours.”", a: "tin ghantaa laagchha", o: ["tin baje laagchha", "tin patak laagchha"], why: "A length of time → <b>ghantaa</b>." },
    { q: "“Twice a day.”", a: "dinmaa dui patak", o: ["dinmaa dui baje", "dinmaa dui ghantaa"], why: "Counting occasions → <b>patak</b>. <b>dui ghantaa</b> would be two hours a day." },
    { q: "Your host says the food is ready: “It's time to eat.”", a: "khaanaa khaane belaa bhayo", o: ["khaanaa khaane baje bhayo", "khaanaa khaane patak bhayo"], why: "The moment for something → <b>-ne belaa</b>." }
  ] },

{ id: "w-feelsick", level: "A1", unit: "feel", title: "Hungry, cold, ill, sore: which verb?", sub: "laagyo (a feeling strikes you), aayo (a fever comes), dukhyo (it hurts), biraami chhu (I'm ill)",
  words: ["dukhyo", "dukhchha", "jwaro", "rughaa", "biraami", "sancho"],
  blocks: [
    { p: "English says “I am hungry” and “I have a fever”. Nepali treats most of these as things that happen to you, each group with its own verb; the malaai pattern itself is in the grammar chapter <i>I like, I want, I'm hungry</i>." },
    { table: { head: ["Verb", "Use it for", "Example"], rows: [
      ["<b>laagyo</b>", "sensations that come over you: bhok, tirkhaa, nindraa, thakaai, jaado, garmi; also a cold or a cough", "malaai bhok <b>laagyo</b>"],
      ["<b>aayo</b>", "a fever: it “comes”", "malaai jwaro <b>aayo</b>"],
      ["<b>dukhyo</b> / <b>dukhchha</b>", "pain in a part of the body: dukhyo for pain that has come on, dukhchha for pain that keeps coming", "mero taauko <b>dukhyo</b>"],
      ["<b>biraami chhu</b> / <b>sancho chhaina</b>", "being ill or unwell in general", "ma <b>biraami chhu</b>"]
    ] } },
    { rule: "A feeling that strikes you → <b>malaai … laagyo</b>. A fever → <b>malaai jwaro aayo</b>. A part of you hurts → <b>mero … dukhyo</b>." },
    { ex: [
      { ne: "मलाई ज्वरो आयो।", ro: "malaai jwaro aayo.", en: "I've got a fever." },
      { ne: "मलाई रुघा लाग्यो।", ro: "malaai rughaa laagyo.", en: "I've caught a cold." },
      { ne: "मेरो टाउको दुख्यो।", ro: "mero taauko dukhyo.", en: "I've got a headache.", note: "The head is what hurts, so: mero taauko." },
      { ne: "म बिरामी छु, आज आउन सक्दिनँ।", ro: "ma biraami chhu, aaja aauna sakdina.", en: "I'm ill, I can't come today." }
    ] },
    { warn: "Word-for-word English gives <b>masanga jwaro chha</b> or <b>ma bhok chhu</b>: a Nepali will guess what you mean, but it sounds foreign. Notice too that these use the past form (<b>laagyo, aayo, dukhyo</b>) for how you feel now: the feeling has struck. With <b>jaado</b> and <b>garmi</b> you will also hear <b>bhayo</b>: <b>malaai jaado bhayo</b> (I'm cold) is just as good." }
  ],
  quiz: [
    { q: "“I'm thirsty.”", a: "malaai tirkhaa laagyo", o: ["malaai tirkhaa aayo", "mero tirkhaa dukhyo"], why: "A sensation that strikes you → <b>laagyo</b>." },
    { q: "“I've got a fever.”", a: "malaai jwaro aayo", o: ["malaai jwaro dukhyo", "masanga jwaro chha"], why: "A fever “comes” → <b>jwaro aayo</b>." },
    { q: "“My stomach hurts.”", a: "mero pet dukhyo", o: ["malaai pet laagyo", "mero pet aayo"], why: "A part of the body hurts → <b>dukhyo</b>, with <b>mero</b>." },
    { q: "Phoning to cancel a lesson: “I'm ill.”", a: "ma biraami chhu", o: ["malaai biraami laagyo", "mero biraami dukhyo"], why: "Being ill is a state: <b>ma biraami chhu</b>, or <b>malaai sancho chhaina</b>." }
  ] },

{ id: "w-good", level: "A1", unit: "feel", title: "“Good”: raamro, mitho, thik, sanchai, asal, ramaailo", sub: "raamro (good, nice), mitho (tasty, pleasant), thik (OK, right), sanchai (well), asal (good in character), ramaailo (fun)",
  words: ["raamro", "mitho", "ramaailo", "asal", "sanchai"],
  blocks: [
    { p: "English “good” praises food, people, health, a day out and an answer alike. Nepali has a general word, <b>raamro</b>, and several more exact ones that Nepalis reach for first." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>raamro</b>", "good, nice, beautiful: the general word for things, places, looks, skills", "tapaainko nepaali <b>raamro</b> chha"],
      ["<b>mitho</b>", "tasty; also pleasant to the ear or the body: a voice, a song, sleep", "khaanaa <b>mitho</b> chha"],
      ["<b>thik</b> / <b>sanchai</b>", "thik: OK, fine, correct; sanchai: well, in good health", "<b>thik</b> chha · <b>sanchai</b> hunuhunchha?"],
      ["<b>asal</b>", "good in character: a good, decent person", "<b>asal</b> maanchhe"],
      ["<b>ramaailo</b>", "fun, enjoyable: an outing, a festival, a language", "nepaali <b>ramaailo</b> chha"]
    ] } },
    { rule: "Food or drink → <b>mitho</b>. Health → <b>sanchai</b>. Character → <b>asal</b>. A good time → <b>ramaailo</b>. “OK, correct” → <b>thik</b>. Anything else → <b>raamro</b>." },
    { ex: [
      { ne: "दाल भात धेरै मीठो छ।", ro: "daal bhaat dherai mitho chha.", en: "The dal bhat is delicious." },
      { ne: "तपाईंको नेपाली राम्रो छ।", ro: "tapaainko nepaali raamro chha.", en: "Your Nepali is good." },
      { ne: "उहाँ असल मान्छे हुनुहुन्छ।", ro: "uhaan asal maanchhe hunuhunchha.", en: "He's a good man.", note: "Kind, honest, decent." },
      { ne: "आज धेरै रमाइलो भयो।", ro: "aaja dherai ramaailo bhayo.", en: "Today was great fun." }
    ] },
    { warn: "<b>khaanaa raamro chha</b> is not wrong, but it praises the food in general, or how it looks; for the taste, which is what the cook wants to hear, say <b>mitho chha</b>. And <b>thik chha</b> about food means “it's all right”: faint praise. Said of yourself, though, <b>malaai thik chha</b> is the normal “I'm fine”." }
  ],
  quiz: [
    { q: "Your host asks how the momos are. “Very tasty.”", a: "dherai mitho chha", o: ["dherai asal chha", "dherai sanchai chha"], why: "Taste → <b>mitho</b>." },
    { q: "“Are you well?” “I'm well.”", a: "sanchai chhu", o: ["mitho chhu", "ramaailo chhu"], why: "Health → <b>sanchai</b>." },
    { q: "“Tihar was great fun.”", a: "tihaar dherai ramaailo bhayo", o: ["tihaar dherai mitho bhayo", "tihaar dherai sanchai bhayo"], why: "An enjoyable time → <b>ramaailo</b>." },
    { q: "“She's a good person” (kind, honest).", a: "uhaan asal maanchhe hunuhunchha", o: ["uhaan mitho maanchhe hunuhunchha", "uhaan sanchai maanchhe hunuhunchha"], why: "Character → <b>asal</b>. <b>raamro maanchhe</b> also works." }
  ] },

{ id: "w-see", level: "A1", unit: "verbs", title: "Look, see, listen, hear: hernu, dekhnu, sunnu", sub: "hernu (look at, watch), dekhnu (see, catch sight of), sunnu (listen, hear), dekhaaunu (show)",
  words: ["her-", "dekhnu", "dekhen", "dekhina", "sunnu", "suninchha"],
  blocks: [
    { p: "English has two pairs, look / see and listen / hear: the first on purpose, the second just happens. Nepali splits the eyes the same way, but has one verb, <b>sunnu</b>, for both listening and hearing." },
    { table: { head: ["Verb", "Use it when", "Example"], rows: [
      ["<b>hernu</b>", "you look at something on purpose; watch TV, a film, a match", "yo <b>hernuhos</b> · philm <b>herchhu</b>"],
      ["<b>dekhnu</b>", "something reaches your eyes: see, catch sight of, spot", "maile himaal <b>dekhen</b>"],
      ["<b>sunnu</b>", "listen and hear, both", "git <b>sunchhu</b>"],
      ["<b>suninchha</b> / <b>sunina</b>", "whether a sound gets through: it can be heard / I didn't catch it", "<b>sunina</b>, hajur?"]
    ] } },
    { rule: "On purpose → <b>hernu</b>. It just came into view → <b>dekhnu</b>. Anything with the ears → <b>sunnu</b>." },
    { ex: [
      { ne: "यो फोटो हेर्नुहोस्।", ro: "yo photo hernuhos.", en: "Have a look at this photo." },
      { ne: "मैले हिमाल देखेँ।", ro: "maile himaal dekhen.", en: "I saw the mountains.", note: "They came into view." },
      { ne: "म आज बेलुका फिल्म हेर्छु।", ro: "ma aaja belukaa philm herchhu.", en: "I'm watching a film this evening." },
      { ne: "मलाई नेपाली गीत सुन्न मन पर्छ।", ro: "malaai nepaali git sunna man parchha.", en: "I like listening to Nepali songs." }
    ] },
    { warn: "You can only ask someone to look, not to see: “look at this” is <b>yo hernuhos</b>, never <b>yo dekhnuhos</b>. For TV and films the usual verb is <b>hernu</b>; <b>maile philm dekhen</b> (I saw a film) is also heard. To make someone see, add -aau: <b>dekhaaunu</b> = show (<b>malaai baato dekhaaunuhos</b>, please show me the way)." }
  ],
  quiz: [
    { q: "A shopkeeper points to a scarf: “Have a look at this one.”", a: "yo hernuhos", o: ["yo dekhnuhos", "yo sunnuhos"], why: "Looking on purpose, and a request → <b>hernuhos</b>." },
    { q: "“Have you seen my phone?” “No, I haven't seen it.”", a: "maile dekhina", o: ["maile herina", "maile sunina"], why: "Whether it came into view → <b>dekhnu</b>. <b>herina</b> = I didn't look." },
    { q: "“I watch TV in the evening.”", a: "ma belukaa tibhi herchhu", o: ["ma belukaa tibhi dekhchhu", "ma belukaa tibhi sunchhu"], why: "Watching → <b>hernu</b>." },
    { q: "“I like listening to music.”", a: "malaai git sunna man parchha", o: ["malaai git herna man parchha", "malaai git dekhna man parchha"], why: "The ears → <b>sunnu</b>, for listening and hearing alike." }
  ] },

{ id: "w-learn", level: "A1", unit: "verbs", title: "Learn, study, read, teach: siknu, padhnu, sikaaunu, padhaaunu", sub: "siknu (learn a skill), padhnu (read; study), sikaaunu (teach a skill), padhaaunu (teach a class or subject)",
  words: ["sik-", "padh-"],
  blocks: [
    { p: "English separates “read” from “study”, and “teach” covers every kind of teaching. Nepali draws the lines elsewhere: <b>padhnu</b> is both reading and formal study, <b>siknu</b> is picking up a skill, and each has its own “teach”." },
    { table: { head: ["Verb", "Use it when", "Example"], rows: [
      ["<b>siknu</b>", "you learn a skill or a language, by any means", "ma nepaali <b>sikdai chhu</b>"],
      ["<b>padhnu</b>", "you read; or you study, as at school or university", "kitaab <b>padhchhu</b>"],
      ["<b>sikaaunu</b>", "you teach someone a skill: show them how", "malaai <b>sikaaunuhos</b> na"],
      ["<b>padhaaunu</b>", "you teach a class or a subject, as a teacher does", "ma bishwabidyaalayamaa <b>padhaaunchhu</b>"]
    ] } },
    { rule: "Books, school, a course → <b>padhnu</b>. A skill you are picking up → <b>siknu</b>. Making someone else learn adds -aau: <b>sikaaunu</b>, <b>padhaaunu</b>." },
    { ex: [
      { ne: "म नेपाली सिक्दै छु।", ro: "ma nepaali sikdai chhu.", en: "I'm learning Nepali." },
      { ne: "मलाई किताब पढ्न मन पर्छ।", ro: "malaai kitaab padhna man parchha.", en: "I like reading books." },
      { ne: "मलाई नेपाली सिकाउनुहोस् न।", ro: "malaai nepaali sikaaunuhos na.", en: "Please teach me some Nepali." },
      { ne: "म विश्वविद्यालयमा पढाउँछु।", ro: "ma bishwabidyaalayamaa padhaaunchhu.", en: "I teach at a university." }
    ] },
    { warn: "<b>ma nepaali padhchhu</b> is not wrong, but it sounds like Nepali is a subject you take (or that you read Nepali texts). For picking up the language, the natural sentence is <b>ma nepaali sikdai chhu</b>. A book is always read with <b>padhnu</b>, never <b>siknu</b>. To a student, <b>tapaain ke padhnuhunchha?</b> = what are you studying?" }
  ],
  quiz: [
    { q: "“I'm learning to cook Nepali food.”", a: "ma nepaali khaanaa pakaauna sikdai chhu", o: ["ma nepaali khaanaa pakaauna padhdai chhu", "ma nepaali khaanaa pakaauna sikaaundai chhu"], why: "A skill → <b>siknu</b>. <b>sikaaundai</b> would mean you are teaching it." },
    { q: "“I'm reading a book.”", a: "ma kitaab padhdai chhu", o: ["ma kitaab sikdai chhu", "ma kitaab padhaaundai chhu"], why: "Reading → <b>padhnu</b>." },
    { q: "“I teach biology at a university.”", a: "ma bishwabidyaalayamaa jiwabigyaan padhaaunchhu", o: ["ma bishwabidyaalayamaa jiwabigyaan padhchhu", "ma bishwabidyaalayamaa jiwabigyaan sikchhu"], why: "Teaching a subject → <b>padhaaunu</b>. <b>padhchhu</b> would make you the student." },
    { q: "Your friend plays the guitar. “Please teach me.”", a: "malaai sikaaunus na", o: ["malaai padhaaunus na", "malaai siknus na"], why: "A skill → <b>sikaaunu</b>. <b>padhaaunu</b> is for classes and subjects; <b>siknus</b> = “learn!”." }
  ] },

{ id: "w-basnu", level: "A1", unit: "verbs", title: "One Nepali verb, several English ones: basnu and lagaaunu", sub: "basnu (sit, stay, live), lagaaunu (put on, wear, apply)",
  words: ["basnuhos", "basnus", "basnuhunchha", "baschhu", "lagaau-"],
  blocks: [
    { p: "Looking for one English equivalent of each Nepali verb leads you astray. <b>basnu</b> is sitting, staying and living at once: wherever you are settled, for a minute or for years. <b>lagaaunu</b> is whatever you put on your body." },
    { table: { head: ["Verb", "Means here", "Example"], rows: [
      ["<b>basnu</b>", "sit down: the polite invitation", "<b>basnuhos</b> (please sit down)"],
      ["<b>basnu</b>", "stay for a while: a hotel, a visit", "nepaalmaa kati din <b>basnuhunchha</b>?"],
      ["<b>basnu</b>", "live somewhere", "tapaain kahaan <b>basnuhunchha</b>?"],
      ["<b>lagaaunu</b>", "put on, wear: clothes, shoes, glasses", "juttaa <b>lagaaunuhos</b>"],
      ["<b>lagaaunu</b>", "apply to the body: tika, a vaccine", "tikaa <b>lagaaunu</b>, khop <b>lagaaunu</b>"]
    ] } },
    { rule: "Translate the situation, not the word. Settled somewhere, briefly or for good → <b>basnu</b>. Something goes onto your body → <b>lagaaunu</b>." },
    { ex: [
      { ne: "बस्नुहोस् न।", ro: "basnuhos na.", en: "Do sit down." },
      { ne: "तपाईं कहाँ बस्नुहुन्छ?", ro: "tapaain kahaan basnuhunchha?", en: "Where do you live?", note: "Also “where are you staying?”: context decides." },
      { ne: "म ठमेलको एउटा होटलमा बस्छु।", ro: "ma thamelko eutaa hotalmaa baschhu.", en: "I'm staying at a hotel in Thamel." },
      { ne: "जाडो छ, ज्याकेट लगाउनुहोस्।", ro: "jaado chha, jyaaket lagaaunuhos.", en: "It's cold. Put a jacket on." }
    ] },
    { warn: "Going word by word, learners reach for <b>jiunu</b> (to be alive) for “live”: <b>ma thamelmaa jiunchhu</b> sounds odd; where you live is <b>basnu</b>. And “put on” clothes is not <b>raakhnu</b> (put down, keep) but <b>lagaaunu</b>, often shortened in speech to <b>launu</b>." }
  ],
  quiz: [
    { q: "“Where do you live?”", a: "tapaain kahaan basnuhunchha?", o: ["tapaain kahaan jiunuhunchha?", "tapaain kahaan hunuhunchha?"], why: "Where you live → <b>basnu</b>. <b>kahaan hunuhunchha?</b> asks where someone is right now." },
    { q: "“How many days will you stay in Nepal?”", a: "nepaalmaa kati din basnuhunchha?", o: ["nepaalmaa kati din jiunuhunchha?", "nepaalmaa kati din aaunuhunchha?"], why: "Staying for a while → <b>basnu</b>." },
    { q: "It's cold outside. “Put a jacket on.”", a: "jyaaket lagaaunuhos", o: ["jyaaket basnuhos", "jyaaket raakhnuhos"], why: "Onto your body → <b>lagaaunu</b>. <b>raakhnuhos</b> = put it down, keep it." },
    { q: "“I'm staying at a hotel.”", a: "ma hotalmaa baschhu", o: ["ma hotalmaa jiunchhu", "ma hotalmaa lagaaunchhu"], why: "Staying somewhere → <b>basnu</b>." }
  ] }

]);
})();
