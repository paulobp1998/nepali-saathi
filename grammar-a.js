// Grammar course, A1 and A2. Each chapter: id, level, title, sub, blocks, quiz.
// Block types: {h} subheading, {p} paragraph, {rule} key rule, {warn} exception or common mistake,
// {list: []}, {table: {head, rows, cap}}, {ex: [{ne, ro, en, note}]} playable examples.
// Quiz items: {q, a (right answer), o (wrong answers), why (shown after answering)}.
(function () {
const C = window.COURSE;
C.grammar = C.grammar || [];
C.grammar.push(

/* =============================== A1 =============================== */
{ id: "order", level: "A1", title: "Word order: the verb goes last", sub: "Subject, object, verb. Little words come after the noun.",
  blocks: [
    { p: "English says <i>I eat rice</i>. Nepali says <i>I rice eat</i>. The verb almost always comes at the very end of the sentence. Once this feels normal, half of Nepali grammar falls into place." },
    { rule: "Subject → time → place → object → <b>verb</b>. The verb (with its endings) closes the sentence." },
    { ex: [
      { ne: "म भात खान्छु।", ro: "ma bhaat khaanchhu.", en: "I eat rice.", note: "Literally: I rice eat." },
      { ne: "म भोलि काठमाडौंमा साथीलाई भेट्छु।", ro: "ma bholi kaathmaadaunmaa saathilaai bhetchhu.", en: "I'll meet a friend in Kathmandu tomorrow.", note: "I · tomorrow · Kathmandu-in · friend-to · meet." },
      { ne: "मेरो घर पोखरामा छ।", ro: "mero ghar pokharaamaa chha.", en: "My house is in Pokhara.", note: "My house · Pokhara-in · is." }
    ] },
    { h: "Postpositions, not prepositions" },
    { p: "English puts <i>in, from, with, to</i> before the noun. Nepali puts them after it, joined to the word: <b>Pokhara-maa</b> (in Pokhara), <b>ghar-baata</b> (from home), <b>saathi-sanga</b> (with a friend)." },
    { h: "Everything that describes comes first" },
    { p: "Adjectives, possessives, numbers and even whole describing clauses come before the noun they describe, never after." },
    { table: { head: ["English order", "Nepali order"], rows: [
      ["a <b>big</b> house", "<b>thulo</b> ghar"],
      ["my friend's house", "mero saathi-<b>ko</b> ghar"],
      ["two cups of tea", "dui kap chiyaa"],
      ["the man <b>who came yesterday</b>", "<b>hijo aaeko</b> maanchhe"]
    ] } },
    { h: "Questions keep the same order" },
    { p: "To ask a question you don't move anything. Put the question word where the answer would go, and raise your voice at the end." },
    { ex: [
      { ne: "तपाईं कहाँ जानुहुन्छ?", ro: "tapaain kahaan jaanuhunchha?", en: "Where are you going?", note: "You · where · go?" },
      { ne: "म बजार जान्छु।", ro: "ma bajaar jaanchhu.", en: "I'm going to the market.", note: "The answer slots in where the question word was." }
    ] },
    { warn: "In fast speech people sometimes add a word after the verb as an afterthought (<b>gayo, u?</b> = he went, did he?). That's fine to understand, but when you speak, keep the verb last: it always sounds correct." }
  ],
  quiz: [
    { q: "Which is the natural Nepali order for “I drink tea”?", a: "ma chiyaa khaanchhu", o: ["ma khaanchhu chiyaa", "khaanchhu ma chiyaa"], why: "Object before verb: I · tea · drink. (Nepalis “eat” tea: <b>chiyaa khaanu</b>.)" },
    { q: "“From Kathmandu” is…", a: "kaathmaadaun-baata", o: ["baata kaathmaadaun", "kaathmaadaun-maa"], why: "Postpositions follow the noun. <b>-baata</b> = from; <b>-maa</b> = in." },
    { q: "Where does the question word go in “What do you eat?”", a: "tapaain ke khaanuhunchha?", o: ["ke tapaain khaanuhunchha ho?", "tapaain khaanuhunchha ke?"], why: "Same order as the answer: you · what · eat. The answer replaces <b>ke</b>." },
    { q: "“A big red house” in Nepali order is…", a: "thulo raato ghar", o: ["ghar thulo raato", "thulo ghar raato"], why: "All describing words come before the noun." }
  ] },

{ id: "pron", level: "A1", title: "“You” and respect levels", sub: "ta, timi, tapaain, hajur; u, uni, uhaan",
  blocks: [
    { p: "Nepali has several words for <i>you</i> and for <i>he/she</i>. Each one sets a level of respect, and the verb changes to match. Choosing the right level is the single most noticeable thing about how a foreigner speaks." },
    { table: { cap: "Personal pronouns", head: ["", "Word", "Use it for"], rows: [
      ["I", "<b>ma</b>", "yourself"],
      ["we", "<b>haami</b>", "you and others"],
      ["you (intimate)", "<b>ta</b>", "small children, very close friends, animals. Rude to anyone else."],
      ["you (familiar)", "<b>timi</b>", "friends your age, younger siblings, children"],
      ["you (polite)", "<b>tapaain</b>", "<b>your default</b>: any adult you don't know well, shopkeepers, colleagues"],
      ["you (very respectful)", "<b>hajur</b>", "elders, in-laws, important guests"],
      ["he / she (low)", "<b>u</b>", "children, close friends (talking about them)"],
      ["he / she (middle)", "<b>uni</b>", "peers; also news style"],
      ["he / she (respectful)", "<b>uhaan</b> (said <i>wahaan</i>)", "elders, teachers, anyone you'd call tapaain"],
      ["they", "<b>uniharu</b> / <b>uhaanharu</b>", "-haru makes the plural"],
      ["this / that", "<b>yo</b> / <b>tyo</b>", "things, and people (low level)"]
    ] } },
    { rule: "When in doubt, use <b>tapaain</b> for “you” and <b>uhaan</b> for “he/she”. Too polite is never a mistake; too familiar can offend." },
    { h: "The verb follows the respect level" },
    { p: "The polite forms <b>tapaain</b> and <b>uhaan</b> share one special verb ending: <b>-nuhunchha</b> (present) and <b>-nubhayo</b> (past). It is the same for men and women, singular and plural." },
    { ex: [
      { ne: "तिमी के गर्छौ?", ro: "timi ke garchhau?", en: "What do you do? (to a friend)" },
      { ne: "तपाईं के गर्नुहुन्छ?", ro: "tapaain ke garnuhunchha?", en: "What do you do? (polite)" },
      { ne: "उहाँ मेरो शिक्षक हुनुहुन्छ।", ro: "uhaan mero shikshak hunuhunchha.", en: "He is my teacher.", note: "Respectful: uhaan + hunuhunchha." }
    ] },
    { h: "Calling people by family words" },
    { p: "Nepalis rarely address people by name alone. They use kinship words, even with strangers. This is warm and normal, and you should do it too." },
    { table: { head: ["Word", "Literally", "Use it for"], rows: [
      ["<b>daai</b>", "older brother", "any man a bit older than you: waiters, drivers, shopkeepers"],
      ["<b>didi</b>", "older sister", "any woman a bit older than you"],
      ["<b>bhaai</b>", "younger brother", "a younger man or boy"],
      ["<b>bahini</b>", "younger sister", "a younger woman or girl"],
      ["<b>aamaa</b> / <b>bubaa</b>", "mother / father", "elderly women / men (also <b>aamaa</b> for an older shopkeeper)"],
      ["<b>saathi</b>", "friend", "a friend your age"]
    ] } },
    { ex: [
      { ne: "दाइ, एक कप चिया दिनुस् न।", ro: "daai, ek kap chiyaa dinus na.", en: "(Brother,) a cup of tea, please." },
      { ne: "दिदी, यो कति हो?", ro: "didi, yo kati ho?", en: "(Sister,) how much is this?" }
    ] },
    { warn: "Don't mix levels in one sentence: <b>tapaain garchhau</b> is wrong (polite pronoun with familiar verb). Say <b>tapaain garnuhunchha</b> or <b>timi garchhau</b>." },
    { p: "<b>hajur</b> is also the polite way to say “yes?” when someone calls you, and “pardon?” when you didn't catch something." }
  ],
  quiz: [
    { q: "You're asking a shopkeeper you don't know where she's from. Which “you”?", a: "tapaain", o: ["timi", "ta"], why: "<b>tapaain</b> is the safe, polite default for adults." },
    { q: "Which verb goes with tapaain? “You go.”", a: "tapaain jaanuhunchha", o: ["tapaain jaanchhau", "tapaain jaanchha"], why: "tapaain and uhaan take the <b>-nuhunchha</b> ending." },
    { q: "How would you call a waiter who looks a few years older than you?", a: "daai", o: ["bhaai", "ta"], why: "<b>daai</b> (older brother) is the friendly, respectful way to address an older man." },
    { q: "Talking about your grandmother: “She is at home.”", a: "uhaan gharmaa hunuhunchha", o: ["u gharmaa chha", "tyo gharmaa chha"], why: "For elders use <b>uhaan</b> with <b>hunuhunchha</b>." },
    { q: "Someone calls your name. The polite “yes?” is…", a: "hajur?", o: ["ke?", "ho?"], why: "<b>hajur</b> answers a call politely and also means “pardon?”." }
  ] },

{ id: "be", level: "A1", title: "Three ways to say “is”", sub: "ho (identity), chha (location, state), hunchha (in general)",
  blocks: [
    { p: "English has one verb <i>to be</i>. Nepali splits it in three. Learners mix them up for years, so learn the difference now." },
    { table: { head: ["Word", "Use it to say", "Example"], rows: [
      ["<b>ho</b>", "what something <b>is</b>: identity, name, job, definition", "yo mero ghar <b>ho</b> (this is my house)"],
      ["<b>chha</b>", "where something is, whether it exists, how it is right now", "ghar Pokharaamaa <b>chha</b> (the house is in Pokhara)"],
      ["<b>hunchha</b>", "how things are in general, habitually, or will be", "himaalmaa jaado <b>hunchha</b> (it's cold in the mountains)"]
    ] } },
    { rule: "Ask yourself: am I saying <i>what</i> it is (<b>ho</b>), or <i>where/how</i> it is (<b>chha</b>)? If it's a general truth or a habit, use <b>hunchha</b>." },
    { ex: [
      { ne: "म शिक्षक हुँ।", ro: "ma shikshak hun.", en: "I am a teacher.", note: "Identity → ho (hun with ma)." },
      { ne: "म घरमा छु।", ro: "ma gharmaa chhu.", en: "I am at home.", note: "Location → chha (chhu with ma)." },
      { ne: "आज जाडो छ।", ro: "aaja jaado chha.", en: "It's cold today.", note: "State right now → chha." },
      { ne: "जाडोमा हिउँ पर्छ, धेरै जाडो हुन्छ।", ro: "jaadomaa hiun parchha, dherai jaado hunchha.", en: "In winter it snows; it gets very cold.", note: "General truth → hunchha." },
      { ne: "पानी छ?", ro: "paani chha?", en: "Is there any water?", note: "Existence → chha. Also means “do you have water?”" }
    ] },
    { h: "ho: the forms" },
    { table: { head: ["", "is", "is not"], rows: [
      ["ma (I)", "<b>hun</b>", "<b>hoina</b>"],
      ["haami (we)", "<b>haun</b>", "<b>hoinaun</b>"],
      ["timi (you)", "<b>hau</b>", "<b>hoinau</b>"],
      ["tapaain / uhaan", "<b>hunuhunchha</b>", "<b>hunuhunna</b>"],
      ["u / yo / tyo", "<b>ho</b>", "<b>hoina</b>"],
      ["uni / uniharu", "<b>hun</b>", "<b>hoinan</b>"]
    ] } },
    { h: "chha: the forms" },
    { table: { head: ["", "is", "is not"], rows: [
      ["ma", "<b>chhu</b>", "<b>chhaina</b>"],
      ["haami", "<b>chhaun</b>", "<b>chhainaun</b>"],
      ["timi", "<b>chhau</b>", "<b>chhainau</b>"],
      ["tapaain / uhaan", "<b>hunuhunchha</b>", "<b>hunuhunna</b>"],
      ["u (he) / yo / tyo", "<b>chha</b>", "<b>chhaina</b>"],
      ["u (she)", "<b>chhe</b>", "<b>chhaina</b>"],
      ["uni (he) / uniharu", "<b>chhan</b>", "<b>chhainan</b>"],
      ["uni (she)", "<b>chhin</b>", "<b>chhainan</b>"]
    ] } },
    { warn: "Notice that the polite form is <b>hunuhunchha</b> for both ho and chha. <i>Tapaain doctor hunuhunchha</i> (you are a doctor) and <i>tapaain kahaan hunuhunchha</i> (where are you) use the same word." },
    { warn: "With <b>ma</b>, the negative of ho is <b>hoina</b> and of chha is <b>chhaina</b>. Written with a nasal mark (होइनँ, छैनँ) but the nasal is barely heard." },
    { p: "<b>ho</b> also means “yes, that's right”, and <b>hoina</b> (spoken <b>haina</b>) means “no, that's not it”. To say “there isn't any” use <b>chhaina</b>." }
  ],
  quiz: [
    { q: "“This is my friend.”", a: "yo mero saathi ho", o: ["yo mero saathi chha", "yo mero saathi hunchha"], why: "Saying who someone is = identity → <b>ho</b>." },
    { q: "“My friend is in Kathmandu.”", a: "mero saathi kaathmaadaunmaa chha", o: ["mero saathi kaathmaadaunmaa ho", "mero saathi kaathmaadaunmaa hun"], why: "Location → <b>chha</b>." },
    { q: "“Tea in Nepal is (usually) sweet.”", a: "nepaalmaa chiyaa guliyo hunchha", o: ["nepaalmaa chiyaa guliyo ho", "nepaalmaa chiyaa guliyo chhu"], why: "A general truth → <b>hunchha</b>." },
    { q: "“I am not a doctor.”", a: "ma daaktar hoina", o: ["ma daaktar chhaina", "ma daaktar hoinau"], why: "Identity negative with ma → <b>hoina</b> (होइनँ)." },
    { q: "“Is there a toilet here?”", a: "yahaan charpi chha?", o: ["yahaan charpi ho?", "yahaan charpi hun?"], why: "Existence → <b>chha</b>." },
    { q: "“Are you a teacher?” (polite)", a: "tapaain shikshak hunuhunchha?", o: ["tapaain shikshak ho?", "tapaain shikshak chhau?"], why: "tapaain always takes <b>hunuhunchha</b>." }
  ] },

{ id: "post", level: "A1", title: "Postpositions: in, from, with, to", sub: "-maa, -baata, -sanga, -laai, -ko, -le and friends",
  blocks: [
    { p: "Where English uses a separate word before the noun, Nepali glues a short ending onto the end of the noun. Written Nepali joins them: <b>घरमा</b> (gharmaa, at home)." },
    { table: { head: ["Ending", "Meaning", "Example"], rows: [
      ["<b>-maa</b>", "in, at, on", "gharmaa (at home), tebulmaa (on the table)"],
      ["<b>-baata</b>", "from; through; by (transport)", "Portugalbaata (from Portugal), yahaanbaata (from here)"],
      ["<b>-sanga</b>", "with (a person); also “to have”", "saathisanga (with a friend)"],
      ["<b>-laai</b>", "to, for (a person); marks people as objects", "aamaalaai (to Mum)"],
      ["<b>-ko</b>", "of, ’s", "Raamko ghar (Ram's house)"],
      ["<b>-le</b>", "who does the action (past tense); with (a tool)", "maile (I, as doer), haatle (by hand)"],
      ["<b>-dekhi</b>", "since, from (time or place)", "bihaandekhi (since morning)"],
      ["<b>-samma</b>", "until, up to", "saanjhasamma (until evening)"],
      ["<b>-tira</b>", "towards, around", "pasaltira (towards the shop)"],
      ["<b>-ko laagi</b>", "for", "tapaainko laagi (for you)"],
      ["<b>-bhandaa</b>", "than", "mabhandaa (than me)"]
    ] } },
    { ex: [
      { ne: "म पोर्चुगलबाट आएँ।", ro: "ma porchugalbaata aaen.", en: "I came from Portugal." },
      { ne: "बिहानदेखि साँझसम्म काम गर्छु।", ro: "bihaandekhi saanjhasamma kaam garchhu.", en: "I work from morning until evening." },
      { ne: "म साथीसँग खाना खान्छु।", ro: "ma saathisanga khaanaa khaanchhu.", en: "I eat with a friend." },
      { ne: "यो उपहार तपाईंको लागि हो।", ro: "yo upahaar tapaainko laagi ho.", en: "This present is for you." }
    ] },
    { h: "Pronouns change shape before some endings" },
    { p: "With <b>-laai</b>, <b>-le</b> and <b>-ko</b>, the short pronouns take special forms. These are among the most common words in the language, so learn this table by heart." },
    { table: { head: ["Pronoun", "+ -laai (to)", "+ -le (doer)", "+ -ko (of)"], rows: [
      ["ma (I)", "<b>malaai</b>", "<b>maile</b>", "<b>mero</b>"],
      ["haami (we)", "haamilaai", "haamile", "<b>haamro</b>"],
      ["timi (you)", "timilaai", "timile", "<b>timro</b>"],
      ["tapaain (you)", "tapaainlaai", "tapaainle", "tapaainko"],
      ["u (he/she)", "<b>uslaai</b>", "<b>usle</b>", "<b>usko</b>"],
      ["uni", "<b>unlaai</b>", "<b>unle</b>", "<b>unko</b>"],
      ["uhaan", "uhaanlaai", "uhaanle", "uhaanko"],
      ["yo (this)", "<b>yaslaai</b>", "<b>yasle</b>", "<b>yasko</b>"],
      ["tyo (that)", "<b>tyaslaai</b>", "<b>tyasle</b>", "<b>tyasko</b>"],
      ["ko (who)", "<b>kaslaai</b>", "<b>kasle</b>", "<b>kasko</b>"]
    ] } },
    { warn: "Going somewhere usually needs no ending at all: <b>ma bajaar jaanchhu</b> (I go to the market). Adding -maa (<i>bajaarmaa jaanchhu</i>) is also heard, but plain is more natural." },
    { warn: "<b>-laai</b> marks a person as the object: <b>maile Raamlaai dekhen</b> (I saw Ram). Things don't take it: <b>maile kitaab dekhen</b> (I saw the book)." },
    { p: "Place words are built with <b>-ko</b> + a position word: <b>gharko agaadi</b> (in front of the house), <b>tebulko muni</b> (under the table), <b>pasalko chheu</b> (next to the shop), <b>kothaa bhitra</b> (inside the room), <b>-ko baaremaa</b> (about)." }
  ],
  quiz: [
    { q: "“I am from Portugal” uses which ending on Portugal?", a: "-baata", o: ["-maa", "-laai"], why: "<b>-baata</b> = from." },
    { q: "“Give it to me” (to me =)", a: "malaai", o: ["maile", "mero"], why: "ma + laai = <b>malaai</b>." },
    { q: "“His book”", a: "usko kitaab", o: ["uslaai kitaab", "usle kitaab"], why: "u + ko = <b>usko</b>." },
    { q: "“Since Monday”", a: "sombaaradekhi", o: ["sombaarasamma", "sombaarmaa"], why: "<b>-dekhi</b> = since/from; <b>-samma</b> = until." },
    { q: "“I saw Sita.”", a: "maile sitaalaai dekhen", o: ["maile sitaa dekhen", "ma sitaalaai dekhen"], why: "A person as object takes <b>-laai</b>, and the doer in the past takes <b>-le</b> (maile)." }
  ] },

{ id: "poss", level: "A1", title: "My, your, and “to have”", sub: "-ko / -ki / -kaa, and three ways to have",
  blocks: [
    { p: "Nepali has no verb <i>to have</i>. Instead you say that something <i>is</i> (chha) mine, with me, or to me. Which one depends on what you have." },
    { table: { head: ["What you have", "Pattern", "Example"], rows: [
      ["family, body parts, home, things that are part of you", "<b>mero</b> … chha", "<b>mero</b> dui jana bhaai chhan (I have two younger brothers)"],
      ["things you carry or own right now", "<b>masanga</b> … chha", "<b>masanga</b> paisaa chha (I have money on me)"],
      ["feelings, illnesses, time, knowledge", "<b>malaai</b> … chha / laagyo", "<b>malaai</b> jwaro chha (I have a fever)"]
    ] } },
    { ex: [
      { ne: "मेरो एउटी छोरी छ।", ro: "mero euti chhori chha.", en: "I have a daughter." },
      { ne: "तपाईंसँग फोन छ?", ro: "tapaainsanga phon chha?", en: "Do you have a phone (with you)?" },
      { ne: "मसँग समय छैन।", ro: "masanga samaya chhaina.", en: "I don't have time." },
      { ne: "मलाई थाहा छ।", ro: "malaai thaahaa chha.", en: "I know.", note: "Literally: to me (it) is known." },
      { ne: "मलाई टाउको दुखेको छ।", ro: "malaai taauko dukheko chha.", en: "I have a headache.", note: "Literally: to me the head has hurt." }
    ] },
    { h: "-ko, -ki, -kaa: “of” agrees with the thing owned" },
    { p: "In careful Nepali, the “of” ending changes to match the noun that follows, not the owner." },
    { table: { head: ["Form", "Use before", "Example"], rows: [
      ["<b>-ko</b> / mero", "a masculine or neutral singular noun", "<b>mero</b> bhaai (my younger brother), <b>mero</b> ghar"],
      ["<b>-ki</b> / meri", "a feminine singular noun", "<b>meri</b> aamaa (my mother), <b>meri</b> bahini"],
      ["<b>-kaa</b> / meraa", "a plural noun, or someone you respect", "<b>meraa</b> saathiharu (my friends), <b>meraa</b> bubaa"]
    ] } },
    { warn: "In everyday speech many Nepalis just use <b>-ko</b> / <b>mero</b> for everything. You'll be understood either way, but <b>meri aamaa</b> and <b>meraa saathiharu</b> sound educated and correct." },
    { h: "Number and the verb" },
    { p: "When you have several people, the verb is plural: <b>mero dui jana bhaai chhan</b>. For several things, Nepalis usually keep the verb singular: <b>mero dui wataa kitaab chha</b>." }
  ],
  quiz: [
    { q: "“I have two sisters.”", a: "meraa dui jana didi chhan", o: ["masanga dui jana didi chha", "malaai dui jana didi ho"], why: "Family → <b>mero/meraa</b> … chha, with a plural verb for people." },
    { q: "“Do you have change (coins) on you?”", a: "tapaainsanga khudraa chha?", o: ["tapaainko khudraa ho?", "tapaainlaai khudraa ho?"], why: "Things you carry → <b>-sanga</b> … chha." },
    { q: "“I have a cold.” (rughaa = cold)", a: "malaai rughaa laagyo", o: ["masanga rughaa chha", "mero rughaa ho"], why: "Illness → <b>malaai</b> …. laagyo = (it) struck." },
    { q: "“My mother” in careful Nepali", a: "meri aamaa", o: ["meraa aamaa", "malaai aamaa"], why: "Feminine singular noun → <b>meri</b>." },
    { q: "“I don't know.”", a: "malaai thaahaa chhaina", o: ["ma thaahaa chhaina", "mero thaahaa hoina"], why: "Knowing a fact uses <b>malaai</b> + thaahaa chha / chhaina." }
  ] },

{ id: "pres", level: "A1", title: "Present tense: I do, I go", sub: "The everyday tense for habits, facts and the near future",
  blocks: [
    { p: "Nepali verbs are listed in the dictionary with <b>-nu</b>: <b>garnu</b> (to do), <b>khaanu</b> (to eat), <b>jaanu</b> (to go). Drop -nu to get the <b>stem</b>, then add an ending for the person." },
    { p: "This one tense covers <i>I do</i>, <i>I'm doing</i> (in general) and often <i>I'll do</i>: <b>bholi jaanchhu</b> = I'll go tomorrow." },
    { rule: "Stem + <b>-chh-</b> + person ending. Negative: stem + <b>-da-</b> + negative ending (<b>-dina, -daina</b>…)." },
    { table: { cap: "garnu (to do): stem gar-", head: ["", "does", "does not"], rows: [
      ["ma", "gar<b>chhu</b>", "gar<b>dina</b>"],
      ["haami", "gar<b>chhaun</b>", "gar<b>dainaun</b>"],
      ["timi", "gar<b>chhau</b>", "gar<b>dainau</b>"],
      ["tapaain / uhaan", "gar<b>nuhunchha</b>", "gar<b>nuhunna</b>"],
      ["u (he)", "gar<b>chha</b>", "gar<b>daina</b>"],
      ["u (she)", "gar<b>chhe</b>", "gar<b>dina</b>"],
      ["uni (he) / uniharu", "gar<b>chhan</b>", "gar<b>dainan</b>"],
      ["uni (she)", "gar<b>chhin</b>", "gar<b>dinan</b>"],
      ["ta", "gar<b>chhas</b>", "gar<b>dainas</b>"]
    ] } },
    { h: "Verbs whose stem ends in a vowel" },
    { p: "Stems like <b>khaa-</b> (eat), <b>jaa-</b> (go), <b>aau-</b> (come), <b>di-</b> (give), <b>li-</b> (take) add an <b>n</b> before -chh-, and a nasal before -da-." },
    { table: { cap: "khaanu (to eat): stem khaa-", head: ["", "eats", "does not eat"], rows: [
      ["ma", "khaa<b>n</b>chhu", "khaa<b>n</b>dina"],
      ["haami", "khaanchhaun", "khaandainaun"],
      ["timi", "khaanchhau", "khaandainau"],
      ["tapaain / uhaan", "khaanuhunchha", "khaanuhunna"],
      ["u (he)", "khaanchha", "khaandaina"],
      ["uni / uniharu", "khaanchhan", "khaandainan"]
    ] } },
    { ex: [
      { ne: "म हरेक दिन नेपाली पढ्छु।", ro: "ma harek din nepaali padhchhu.", en: "I study Nepali every day." },
      { ne: "ऊ मासु खाँदैन।", ro: "u maasu khaandaina.", en: "He doesn't eat meat." },
      { ne: "तपाईं कहाँ बस्नुहुन्छ?", ro: "tapaain kahaan basnuhunchha?", en: "Where do you live?", note: "basnu = to sit, stay, live." },
      { ne: "म भोलि आउँछु।", ro: "ma bholi aaunchhu.", en: "I'll come tomorrow.", note: "Present form, future meaning." }
    ] },
    { warn: "The ma negative ends in <b>-dina</b>, not -daina: <b>ma jaandina</b> (I don't go) but <b>u jaandaina</b> (he doesn't go). This is the most common beginner error." },
    { warn: "<b>hunu</b> (to be/become) is irregular: <b>hunchha</b> (it happens/is), negative <b>hundaina</b> (it isn't done, it won't do). Spoken: <b>hudaina</b>." }
  ],
  quiz: [
    { q: "“I don't drink coffee.”", a: "ma kaphi khaandina", o: ["ma kaphi khaandaina", "ma kaphi khaanchhaina"], why: "With ma the negative ends in <b>-dina</b>." },
    { q: "“We go.”", a: "haami jaanchhaun", o: ["haami jaanchhau", "haami jaanchhan"], why: "haami → <b>-chhaun</b>." },
    { q: "“Do you (polite) speak Nepali?”", a: "tapaain nepaali bolnuhunchha?", o: ["tapaain nepaali bolchhau?", "tapaain nepaali bolchha?"], why: "tapaain → <b>-nuhunchha</b>." },
    { q: "“She (mid level) works.”", a: "uni kaam garchhin", o: ["uni kaam garchhan", "uni kaam garchhu"], why: "Feminine mid level → <b>-chhin</b>." },
    { q: "“He doesn't understand.” (bujhnu)", a: "u bujhdaina", o: ["u bujhdina", "u nabujhchha"], why: "u → <b>-daina</b>." }
  ] },

{ id: "ask", level: "A1", title: "Asking questions", sub: "Question words, yes/no, and how to answer",
  blocks: [
    { table: { head: ["Word", "Meaning", "Example"], rows: [
      ["<b>ke</b>", "what", "yo <b>ke</b> ho? (what is this?)"],
      ["<b>ko</b>", "who", "uhaan <b>ko</b> hunuhunchha? (who is he?)"],
      ["<b>kahaan</b>", "where", "charpi <b>kahaan</b> chha?"],
      ["<b>kahile</b>", "when", "bas <b>kahile</b> aaunchha?"],
      ["<b>kina</b>", "why", "<b>kina</b> dhilo bhayo? (why is it late?)"],
      ["<b>kasari</b>", "how (in what way)", "<b>kasari</b> jaane? (how do we get there?)"],
      ["<b>kasto</b>", "how, what kind of", "<b>kasto</b> chha? (how is it?)"],
      ["<b>kati</b>", "how much, how many", "<b>kati</b> ho? (how much is it?)"],
      ["<b>kun</b>", "which", "<b>kun</b> bas? (which bus?)"],
      ["<b>kasko</b>", "whose", "yo <b>kasko</b> jholaa ho?"]
    ] } },
    { h: "Yes/no questions: just raise your voice" },
    { p: "A statement becomes a question by rising intonation alone. In writing, formal Nepali can start with <b>ke</b>: <b>ke tapaain nepaali hunuhunchha?</b>" },
    { rule: "Nepali has no all-purpose “yes”. You answer by <b>repeating the verb</b>: <i>Jaanuhunchha?</i> → <b>Jaanchhu.</b> (I go.) / <b>Jaandina.</b> (I don't.)" },
    { ex: [
      { ne: "चिया खानुहुन्छ?", ro: "chiyaa khaanuhunchha?", en: "Will you have tea?" },
      { ne: "खान्छु।", ro: "khaanchhu.", en: "Yes, please.", note: "Literally: I eat." },
      { ne: "तपाईंसँग पानी छ?", ro: "tapaainsanga paani chha?", en: "Do you have water?" },
      { ne: "छैन।", ro: "chhaina.", en: "No, I don't.", note: "Literally: isn't." }
    ] },
    { h: "Useful question tags" },
    { list: [
      "<b>…ho?</b> / <b>…hoina?</b> (spoken <b>haina?</b>): isn't it? right? → <i>tapaain Pauloko saathi, haina?</i>",
      "<b>…ki?</b> at the end means “or…?” / “or not?” → <i>chiyaa ki kaphi?</i> (tea or coffee?), <i>aaunuhunchha ki?</i> (are you coming, or?)",
      "<b>…ni?</b> after a word means “and what about…?” → <i>tapaainlaai ni?</i> (and you?)"
    ] },
    { warn: "<b>ho</b> means “yes” only when confirming a fact or identity (“Are you Paulo?” → <b>ho</b>). For actions, repeat the verb. Saying <i>ho</i> to “Will you eat?” sounds odd." }
  ],
  quiz: [
    { q: "“When does the bus leave?” Which question word?", a: "kahile", o: ["kahaan", "kasari"], why: "<b>kahile</b> = when." },
    { q: "Someone asks “Nepaali bujhnuhunchha?” You do understand. Answer:", a: "bujhchhu", o: ["ho", "chha"], why: "Answer yes by repeating the verb in your own form: <b>bujhchhu</b>." },
    { q: "“Tea or coffee?”", a: "chiyaa ki kaphi?", o: ["chiyaa ra kaphi?", "chiyaa ni kaphi?"], why: "<b>ki</b> = or (in questions)." },
    { q: "“How much is this?”", a: "yo kati ho?", o: ["yo kasto ho?", "yo kun ho?"], why: "<b>kati</b> = how much / how many." },
    { q: "“Which room is mine?”", a: "mero kothaa kun ho?", o: ["mero kothaa ke ho?", "mero kothaa kasto ho?"], why: "<b>kun</b> = which." }
  ] },

{ id: "imp", level: "A1", title: "Requests and commands", sub: "Please do, don't, let's",
  blocks: [
    { p: "The command form changes with the respect level, just like the pronouns." },
    { table: { cap: "Commands by level", head: ["Verb", "ta (intimate)", "timi (familiar)", "tapaain (polite)"], rows: [
      ["garnu (do)", "gar", "<b>gara</b>", "<b>garnuhos</b> / garnus"],
      ["basnu (sit)", "bas", "<b>basa</b>", "<b>basnuhos</b> / basnus"],
      ["khaanu (eat)", "khaa", "<b>khaau</b>", "<b>khaanuhos</b> / khaanus"],
      ["jaanu (go)", "jaa", "<b>jaau</b>", "<b>jaanuhos</b> / jaanus"],
      ["aaunu (come)", "<b>aaija</b>", "<b>aau</b>", "<b>aaunuhos</b> / aaunus"],
      ["dinu (give)", "<b>de</b>", "<b>deu</b>", "<b>dinuhos</b> / dinus"],
      ["linu (take)", "<b>le</b>", "<b>leu</b>", "<b>linuhos</b> / linus"]
    ] } },
    { rule: "Polite request = infinitive + <b>-hos</b>: <b>garnu → garnuhos</b>. In speech it shortens to <b>garnus</b>. Add <b>na</b> to soften it: <b>basnus na</b> (do sit down)." },
    { h: "Don't: add na- in front" },
    { p: "To forbid or ask someone not to, put <b>na-</b> at the start of the verb: <b>nagarnuhos</b> (please don't), <b>najaau</b> (don't go), <b>nadarau</b> (don't be afraid)." },
    { h: "Let's: -aun" },
    { p: "Stem + <b>-aun</b> = let's: <b>jaaaun</b> (let's go), <b>khaaaun</b> (let's eat), <b>basaun</b> (let's sit), <b>heraun</b> (let's see)." },
    { ex: [
      { ne: "बिस्तारै बोल्नुहोस् न।", ro: "bistaarai bolnuhos na.", en: "Please speak slowly." },
      { ne: "फेरि भन्नुस् त।", ro: "pheri bhannus ta.", en: "Could you say that again?", note: "ta softens, like “would you?”" },
      { ne: "चिन्ता नगर्नुहोस्।", ro: "chintaa nagarnuhos.", en: "Don't worry." },
      { ne: "भित्र आउनुहोस्, बस्नुहोस्।", ro: "bhitra aaunuhos, basnuhos.", en: "Come in, sit down." },
      { ne: "भोलि भेटौँ है।", ro: "bholi bhetaun hai.", en: "Let's meet tomorrow, OK?" }
    ] },
    { warn: "Irregular: <b>aaunu</b> (come) → <b>aaija</b> / <b>aau</b>; <b>dinu</b> (give) → <b>de</b> / <b>deu</b>; <b>linu</b> (take) → <b>le</b> / <b>leu</b>. Learn these three." },
    { p: "A more humble way to ask is the <b>-di-</b> “for me” form: <b>garidinus</b> (please do it for me): see <i>Compound verbs</i> at B2. For now, <b>dinus na</b> (please give) covers most shopping." }
  ],
  quiz: [
    { q: "Politely: “Please sit.”", a: "basnuhos", o: ["basa", "bas"], why: "Polite = infinitive + <b>-hos</b>." },
    { q: "To a friend: “Come here!”", a: "yahaan aau", o: ["yahaan aaija", "yahaan aaunu"], why: "timi level of aaunu is <b>aau</b>; <i>aaija</i> is the intimate ta form." },
    { q: "“Please don't go.” (polite)", a: "najaanuhos", o: ["jaanuhos na", "jaandina"], why: "<b>na-</b> + polite command = please don't." },
    { q: "“Let's eat.”", a: "khaaaun", o: ["khaau", "khaanus"], why: "Stem + <b>-aun</b> = let's." },
    { q: "Politely: “Give me water, please.”", a: "malaai paani dinus na", o: ["malaai paani deu na", "malaai paani de"], why: "<b>dinus</b> (dinuhos) is polite; <i>na</i> softens it." }
  ] },

{ id: "like", level: "A1", title: "I like, I want, I'm hungry", sub: "The malaai pattern: things happen to you",
  blocks: [
    { p: "For feelings, likes, needs and sensations, Nepali turns the sentence around. You don't <i>like</i> something; it <i>pleases to you</i>. The person goes into the <b>-laai</b> form, and the verb agrees with the thing." },
    { rule: "<b>malaai</b> + thing + feeling verb. <i>Malaai momo man parchha</i> = to me, momos are pleasing → I like momos." },
    { table: { head: ["Nepali", "Meaning", "Literally"], rows: [
      ["malaai … <b>man parchha</b>", "I like …", "… pleases my heart"],
      ["malaai … <b>chaahinchha</b>", "I need / want …", "… is needed to me"],
      ["malaai <b>bhok laagyo</b>", "I'm hungry", "hunger struck me"],
      ["malaai <b>tirkhaa laagyo</b>", "I'm thirsty", "thirst struck me"],
      ["malaai <b>jaado laagyo</b>", "I'm cold", "cold struck me"],
      ["malaai <b>nindraa laagyo</b>", "I'm sleepy", "sleep struck me"],
      ["malaai <b>thaahaa chha</b>", "I know (a fact)", "to me it is known"],
      ["malaai <b>… aaunchha</b>", "I can (a skill / language)", "… comes to me"],
      ["malaai <b>… jaana man laagchha</b>", "I feel like going", "to go, my heart strikes"]
    ] } },
    { ex: [
      { ne: "मलाई नेपाली खाना धेरै मन पर्छ।", ro: "malaai nepaali khaanaa dherai man parchha.", en: "I really like Nepali food." },
      { ne: "मलाई एउटा कोठा चाहियो।", ro: "malaai euta kothaa chaahiyo.", en: "I'd like a room.", note: "chaahiyo (past form) is the usual way to ask for something right now." },
      { ne: "मलाई भोक लाग्यो।", ro: "malaai bhok laagyo.", en: "I'm hungry." },
      { ne: "मलाई अलि-अलि नेपाली आउँछ।", ro: "malaai ali-ali nepaali aaunchha.", en: "I speak a little Nepali.", note: "Nepali comes to me a little." },
      { ne: "तपाईंलाई के मन पर्छ?", ro: "tapaainlaai ke man parchha?", en: "What do you like?" }
    ] },
    { warn: "<b>Past forms with present meaning.</b> For sensations that have just started, Nepali uses the past: <b>bhok laagyo</b> (I'm hungry, lit. hunger struck), <b>chaahiyo</b> (I want, now), <b>thaaken</b> (I'm tired), <b>bujhen</b> (I understand, lit. I understood). <b>bhok laagchha</b> means “I get hungry” (in general)." },
    { p: "Negative: <b>malaai man pardaina</b> (I don't like it), <b>malaai chaahindaina</b> (I don't need it), <b>malaai thaahaa chhaina</b> (I don't know)." },
    { warn: "Don't say <i>ma man parchhu</i>. The thing liked is the subject, so the verb stays in the “it” form: <b>malaai timi man parchhau</b> would mean “I like you” (you please me) — the verb agrees with <i>you</i>." }
  ],
  quiz: [
    { q: "“I like tea.”", a: "malaai chiyaa man parchha", o: ["ma chiyaa man parchhu", "mero chiyaa man parchha"], why: "Experiencer in <b>-laai</b> form: <b>malaai</b>." },
    { q: "You're hungry right now. Say:", a: "malaai bhok laagyo", o: ["malaai bhok laagchha", "ma bhok chhu"], why: "Sensations that just started use the past: <b>laagyo</b>." },
    { q: "In a shop: “I want this one.”", a: "malaai yo chaahiyo", o: ["ma yo chaahinchhu", "mero yo chaahiyo"], why: "<b>malaai … chaahiyo</b> is the natural “I'd like” for right now." },
    { q: "“I don't like it.”", a: "malaai man pardaina", o: ["ma man pardina", "malaai man parchhaina"], why: "Negative of parchha = <b>pardaina</b>." },
    { q: "“Do you speak English?” (literally: does English come to you?)", a: "tapaainlaai angreji aaunchha?", o: ["tapaain angreji aaunuhunchha?", "tapaainko angreji chha?"], why: "Language skills: <b>-laai … aaunchha</b>." }
  ] },

{ id: "count", level: "A1", title: "Counting people and things", sub: "jana, wataa, euta, and the plural -haru",
  blocks: [
    { p: "Between a number and a noun, Nepali adds a counting word, like English “two <i>pieces</i> of cake” but for everything." },
    { table: { head: ["Counter", "For", "Example"], rows: [
      ["<b>jana</b>", "people", "dui <b>jana</b> saathi (two friends), kati jana? (how many people?)"],
      ["<b>wataa</b> / <b>otaa</b>", "things and animals", "tin <b>wataa</b> kitaab (three books), kati wataa?"],
      ["<b>euta</b>", "one (thing)", "<b>euta</b> kothaa (one room / a room)"],
      ["<b>euti</b>", "one (woman, girl)", "<b>euti</b> chhori (a daughter)"],
      ["<b>ek jana</b>", "one (person)", "<b>ek jana</b> maanchhe (one person)"]
    ] } },
    { p: "In speech, <b>dui wataa</b> shortens to <b>duita</b> and <b>tin wataa</b> to <b>tinta</b>." },
    { ex: [
      { ne: "हामी चार जना छौँ।", ro: "haami chaar jana chhaun.", en: "There are four of us." },
      { ne: "दुईवटा मोमो दिनुस्।", ro: "duiwataa momo dinus.", en: "Two momos, please." },
      { ne: "मेरो एउटा प्रश्न छ।", ro: "mero euta prashna chha.", en: "I have a question." }
    ] },
    { h: "Plural: -haru, used sparingly" },
    { p: "<b>-haru</b> makes a noun plural: <b>saathiharu</b> (friends), <b>ketaaketiharu</b> (children). But after a number it's usually dropped: <b>tin jana saathi</b>, not <i>tin jana saathiharu</i>." },
    { warn: "Uncountable things (rice, water, money) never take -haru. <b>dherai paani</b> = a lot of water." },
    { p: "<b>-haru</b> also softens and respects: <b>tapaainharu</b> (you all), <b>uhaanharu</b> (they, respectful)." }
  ],
  quiz: [
    { q: "“Three people”", a: "tin jana maanchhe", o: ["tin wataa maanchhe", "tin maanchheharu"], why: "People are counted with <b>jana</b>." },
    { q: "“How many books?”", a: "kati wataa kitaab?", o: ["kati jana kitaab?", "kati kitaabharu?"], why: "Things use <b>wataa</b>." },
    { q: "“A room” (one room)", a: "euta kothaa", o: ["ek jana kothaa", "euti kothaa"], why: "One thing = <b>euta</b>." },
    { q: "“Two friends” (natural)", a: "dui jana saathi", o: ["dui jana saathiharu", "duita saathiharu"], why: "After a number, -haru is normally dropped." }
  ] },

{ id: "adj", level: "A1", title: "Describing things", sub: "Adjectives, agreement, very, a little",
  blocks: [
    { p: "Adjectives come before the noun (<b>raamro ghar</b>, a nice house) or before the verb (<b>ghar raamro chha</b>, the house is nice)." },
    { rule: "Adjectives ending in <b>-o</b> change: <b>-o</b> for masculine/neutral, <b>-i</b> for feminine, <b>-aa</b> for plural or respect. Other adjectives never change." },
    { table: { head: ["", "masc. / neutral", "feminine", "plural / respect"], rows: [
      ["good, nice", "<b>raamro</b> keto", "<b>raamri</b> keti", "<b>raamraa</b> maanchheharu"],
      ["big", "<b>thulo</b> ghar", "<b>thuli</b> chhori (elder daughter)", "<b>thulaa</b> gharharu"],
      ["small", "<b>saano</b> bhaai", "<b>saani</b> bahini", "<b>saanaa</b> bachchaa"],
      ["clean (doesn't end in -o)", "<b>saphaa</b> kothaa", "<b>saphaa</b> saari", "<b>saphaa</b> kothaaharu"]
    ] } },
    { warn: "In casual speech the -o form is often used for everything (<i>raamro keti</i>). The agreed forms sound more correct and are expected in writing." },
    { h: "Very, a little, too" },
    { table: { head: ["Word", "Meaning", "Example"], rows: [
      ["<b>dherai</b>", "very, a lot", "dherai mitho (very tasty)"],
      ["<b>ekdam</b>", "really, totally", "ekdam raamro (really good)"],
      ["<b>ali</b>", "a bit, rather", "ali mahango (a bit expensive)"],
      ["<b>kati</b> …!", "how …!", "kati raamro! (how lovely!)"],
      ["<b>jyaadai</b>", "too much", "jyaadai piro (too spicy)"]
    ] } },
    { ex: [
      { ne: "खाना एकदम मीठो छ।", ro: "khaanaa ekdam mitho chha.", en: "The food is really tasty." },
      { ne: "यो अलि महँगो भयो।", ro: "yo ali mahango bhayo.", en: "This is a bit expensive.", note: "bhayo (became) is common for judging a price." },
      { ne: "मेरी बहिनी अग्ली छिन्।", ro: "meri bahini agli chhin.", en: "My younger sister is tall.", note: "Careful speech: agli (fem.) and chhin." },
      { ne: "कति राम्रो ठाउँ!", ro: "kati raamro thaaun!", en: "What a beautiful place!" }
    ] },
    { p: "<b>kasto</b> asks “how / what kind”: <b>khaanaa kasto chha?</b> (how is the food?). Its forms follow the same rule: <b>kasti</b> (fem.), <b>kastaa</b> (plural)." }
  ],
  quiz: [
    { q: "“A small girl” (careful)", a: "saani keti", o: ["saano keti", "saanaa keti"], why: "Feminine noun → <b>-i</b> form." },
    { q: "“Clean rooms”", a: "saphaa kothaaharu", o: ["saphi kothaaharu", "saphaaharu kothaa"], why: "<b>saphaa</b> doesn't end in -o, so it never changes." },
    { q: "“Too spicy”", a: "jyaadai piro", o: ["ali piro", "piro dherai jyaadai"], why: "<b>jyaadai</b> = too much." },
    { q: "“The food is very tasty.”", a: "khaanaa dherai mitho chha", o: ["khaanaa mitho dherai chha", "dherai khaanaa mitho ho"], why: "Intensifier goes right before the adjective; a description uses <b>chha</b>." }
  ] },

/* =============================== A2 =============================== */
{ id: "past", level: "A2", title: "Simple past: I did, I went", sub: "-en, -yo, -e, and the irregular jaanu and hunu",
  blocks: [
    { p: "The simple past tells what happened: <i>I ate, she went, it rained</i>. It is used far more than in English: Nepalis also use it for things that have <i>just</i> happened." },
    { table: { cap: "garnu (to do): stem gar-", head: ["", "did", "did not"], rows: [
      ["ma", "gar<b>en</b>", "gar<b>ina</b>"],
      ["haami", "gar<b>yaun</b>", "gar<b>enaun</b>"],
      ["timi", "gar<b>yau</b>", "gar<b>enau</b>"],
      ["tapaain / uhaan", "gar<b>nubhayo</b>", "gar<b>nubhaena</b>"],
      ["u (he)", "gar<b>yo</b>", "gar<b>ena</b>"],
      ["u (she)", "gar<b>i</b>", "gar<b>ina</b>"],
      ["uni (he) / uniharu", "gar<b>e</b>", "gar<b>enan</b>"],
      ["uni (she)", "gar<b>in</b>", "gar<b>inan</b>"]
    ] } },
    { table: { cap: "Vowel stems and irregulars", head: ["Verb", "ma", "u (he)", "uni / they", "negative (u)"], rows: [
      ["khaanu (eat)", "khaaen", "khaayo", "khaae", "khaaena"],
      ["aaunu (come)", "aaen", "aayo", "aae", "aaena"],
      ["dinu (give)", "dien", "diyo", "die", "diena"],
      ["linu (take)", "lien", "liyo", "lie", "liena"],
      ["<b>jaanu (go)</b>", "<b>gaen</b>", "<b>gayo</b>", "<b>gae</b>", "<b>gaena</b>"],
      ["<b>hunu (be, become)</b>", "<b>bhaen</b>", "<b>bhayo</b>", "<b>bhae</b>", "<b>bhaena</b>"]
    ] } },
    { rule: "Two verbs change their stem in the past: <b>jaanu → ga-</b> (gayo, gaen) and <b>hunu → bha-</b> (bhayo, bhaen). Learn them as separate words." },
    { ex: [
      { ne: "हिजो म बजार गएँ।", ro: "hijo ma bajaar gaen.", en: "Yesterday I went to the market." },
      { ne: "बस ढिलो आयो।", ro: "bas dhilo aayo.", en: "The bus came late." },
      { ne: "तपाईं कहिले आइपुग्नुभयो?", ro: "tapaain kahile aaipugnubhayo?", en: "When did you arrive?" },
      { ne: "मैले केही खाइनँ।", ro: "maile kehi khaaina.", en: "I didn't eat anything." },
      { ne: "के भयो?", ro: "ke bhayo?", en: "What happened?" }
    ] },
    { warn: "In the past, the doer of a verb that takes an object needs <b>-le</b>: <b>maile khaaen</b> (I ate), not <i>ma khaaen</i>. But with verbs of motion and being there is no -le: <b>ma gaen</b> (I went). The next chapter explains this fully." },
    { p: "<b>bhayo</b> is one of the most useful words in Nepali: <b>bhayo</b> (that's enough / done), <b>thik bhayo</b> (that's fine), <b>dhilo bhayo</b> (it's got late), <b>ke bhayo?</b> (what's wrong?)." }
  ],
  quiz: [
    { q: "“He went home.”", a: "u ghar gayo", o: ["u ghar jaayo", "usle ghar gayo"], why: "jaanu's past stem is <b>ga-</b>; motion verbs don't take -le." },
    { q: "“I didn't understand.”", a: "maile bujhina", o: ["maile bujhena", "ma bujhdina"], why: "ma negative past = <b>-ina</b>; bujhnu takes -le." },
    { q: "“They came yesterday.”", a: "uniharu hijo aae", o: ["uniharu hijo aayo", "uniharu hijo aaen"], why: "uni / uniharu → <b>-e</b>." },
    { q: "“When did you (polite) come?”", a: "tapaain kahile aaunubhayo?", o: ["tapaain kahile aayau?", "tapaain kahile aayo?"], why: "Polite past = <b>-nubhayo</b>." },
    { q: "“What happened?”", a: "ke bhayo?", o: ["ke hunchha?", "ke gayo?"], why: "hunu's past = <b>bhayo</b>." }
  ] },

{ id: "erg", level: "A2", title: "The doer marker -le", sub: "maile, usle: when it's required and when it's wrong",
  blocks: [
    { p: "<b>-le</b> marks the person who <i>does something to something</i>. It is the trickiest ending for learners, but the rule is clear." },
    { rule: "In the <b>past</b> and <b>perfect</b> tenses, the subject of a <b>transitive</b> verb (a verb with an object: eat, see, say, buy, do) takes <b>-le</b>. Intransitive verbs (go, come, sit, sleep, be) never take it." },
    { table: { head: ["Transitive → -le", "Intransitive → no -le"], rows: [
      ["<b>maile</b> bhaat khaaen (I ate rice)", "<b>ma</b> ghar gaen (I went home)"],
      ["<b>usle</b> kitaab kinyo (he bought a book)", "<b>u</b> sutyo (he slept)"],
      ["<b>tapaainle</b> ke bhannubhayo? (what did you say?)", "<b>tapaain</b> kahile aaunubhayo? (when did you come?)"],
      ["<b>haamile</b> philm heryaun (we watched a film)", "<b>haami</b> hindyaun (we walked)"]
    ] } },
    { ex: [
      { ne: "मैले बुझेँ।", ro: "maile bujhen.", en: "I understand / I understood.", note: "bujhnu (understand) takes -le." },
      { ne: "उसले मलाई फोन गर्‍यो।", ro: "usle malaai phon garyo.", en: "He phoned me." },
      { ne: "हामी हिजो पोखरा पुग्यौँ।", ro: "haami hijo pokharaa pugyaun.", en: "We reached Pokhara yesterday.", note: "pugnu (arrive) is intransitive: no -le." },
      { ne: "रामले भन्यो।", ro: "raamle bhanyo.", en: "Ram said (it)." }
    ] },
    { h: "In the present tense" },
    { p: "In the present, the subject normally has no -le: <b>ma bhaat khaanchhu</b>. Adding -le (<b>maile bhaat khaanchhu</b>) stresses <i>I</i> (and not someone else) do it, or that it's my job. Use it only when you mean that." },
    { warn: "-le is common with <b>-nuparchha</b> for transitive verbs: <b>maile kaam garnuparchha</b> (I have to work), though <b>malaai kaam garnuparchha</b> is equally standard. With intransitive ones, Nepalis say <b>malaai jaanuparchha</b> (I have to go)." },
    { h: "Other uses of -le" },
    { list: [
      "Tool or means: <b>haatle khaanu</b> (eat with your hand), <b>kalamle lekhnu</b> (write with a pen)",
      "Cause: <b>rogle</b> (because of illness), <b>paaniko kaaranle</b> (because of the rain)"
    ] },
    { warn: "Common mistakes: <i>maile gaen</i> (wrong: go is intransitive → <b>ma gaen</b>) and <i>ma khaaen</i> (wrong: eat is transitive → <b>maile khaaen</b>)." }
  ],
  quiz: [
    { q: "“I saw a film.”", a: "maile philm dekhen", o: ["ma philm dekhen", "malaai philm dekhen"], why: "dekhnu is transitive, past tense → <b>maile</b>." },
    { q: "“I slept well.”", a: "ma raamrosanga suten", o: ["maile raamrosanga suten", "malaai raamrosanga suten"], why: "sutnu (sleep) is intransitive → no -le." },
    { q: "“She bought vegetables.” (mid level)", a: "unle tarkaari kinin", o: ["uni tarkaari kinin", "unlaai tarkaari kinin"], why: "kinnu (buy) is transitive → uni + le = <b>unle</b>." },
    { q: "“Who said that?”", a: "kasle bhanyo?", o: ["ko bhanyo?", "kaslaai bhanyo?"], why: "bhannu (say) is transitive → ko + le = <b>kasle</b>." },
    { q: "“They arrived.”", a: "uniharu aaipuge", o: ["uniharule aaipuge", "uniharulaai aaipuge"], why: "aaipugnu (arrive) is intransitive → no -le." }
  ] },

{ id: "was", level: "A2", title: "“Was”: thiyo and bhayo", sub: "The past of ho and chha, and “became”",
  blocks: [
    { p: "Both <b>ho</b> and <b>chha</b> have the same past: <b>thiyo</b> (was). <b>bhayo</b> means “became / happened / turned out”." },
    { table: { cap: "thiyo (was)", head: ["", "was", "was not"], rows: [
      ["ma", "<b>thien</b>", "<b>thiina</b>"],
      ["haami", "<b>thiyaun</b>", "<b>thienaun</b>"],
      ["timi", "<b>thiyau</b>", "<b>thienau</b>"],
      ["tapaain / uhaan", "<b>hunuhunthyo</b>", "<b>hunuhunnathyo</b>"],
      ["u (he) / yo / tyo", "<b>thiyo</b>", "<b>thiena</b>"],
      ["u (she)", "<b>thii</b>", "<b>thiina</b>"],
      ["uni (he) / uniharu", "<b>thie</b>", "<b>thienan</b>"],
      ["uni (she)", "<b>thiin</b>", "<b>thiinan</b>"]
    ] } },
    { ex: [
      { ne: "हिजो म घरमा थिएँ।", ro: "hijo ma gharmaa thien.", en: "Yesterday I was at home." },
      { ne: "बजारमा धेरै मान्छे थिए।", ro: "bajaarmaa dherai maanchhe thie.", en: "There were a lot of people at the market." },
      { ne: "मेरो बुबा शिक्षक हुनुहुन्थ्यो।", ro: "mero bubaa shikshak hunuhunthyo.", en: "My father was a teacher." },
      { ne: "पहिले यहाँ सडक थिएन।", ro: "pahile yahaan sadak thiena.", en: "There was no road here before." }
    ] },
    { h: "thiyo vs bhayo" },
    { table: { head: ["thiyo = was (a state)", "bhayo = became, happened"], rows: [
      ["u biraami <b>thiyo</b> (he was ill)", "u biraami <b>bhayo</b> (he fell ill)"],
      ["mausam raamro <b>thiyo</b> (the weather was good)", "mausam raamro <b>bhayo</b> (the weather turned good)"],
      ["paartimaa ke <b>thiyo</b>? (what was there at the party?)", "paartimaa ke <b>bhayo</b>? (what happened at the party?)"]
    ] } },
    { warn: "<b>bhayo</b> often describes a present result of a change: <b>dhilo bhayo</b> (I'm late, lit. it became late), <b>thik bhayo</b> (that's fine now), <b>pugyo / bhayo</b> (that's enough). Don't translate it with “was”." }
  ],
  quiz: [
    { q: "“I was tired.” (thaakeko = tired)", a: "ma thaakeko thien", o: ["ma thaakeko thiyo", "ma thaakeko bhayo"], why: "ma → <b>thien</b>." },
    { q: "“There were no buses.”", a: "bas thiena", o: ["bas bhaena", "bas thien"], why: "No existence in the past → <b>thiena</b>." },
    { q: "“He fell ill.”", a: "u biraami bhayo", o: ["u biraami thiyo", "u biraami chha"], why: "A change → <b>bhayo</b> (became). <i>thiyo</i> would mean he was (already) ill." },
    { q: "“What happened yesterday?”", a: "hijo ke bhayo?", o: ["hijo ke thiyo?", "hijo ke hunchha?"], why: "An event → <b>bhayo</b>." }
  ] },

{ id: "cont", level: "A2", title: "Right now: -dai chha", sub: "Present and past continuous",
  blocks: [
    { p: "To say what's happening at this very moment, Nepali uses the <b>-dai</b> form + chha, or (more emphatically) <b>-irahekochha</b>." },
    { table: { cap: "Present continuous: garnu", head: ["", "-dai form", "-iraheko form (very common in speech)"], rows: [
      ["ma", "gar<b>daichhu</b>", "gari<b>raheko chhu</b>"],
      ["haami", "gardaichhaun", "garirahekaa chhaun"],
      ["timi", "gardaichhau", "garirahekaa chhau"],
      ["tapaain", "gar<b>dai hunuhunchha</b>", "gari<b>rahanubhaeko chha</b>"],
      ["u", "gardaichha", "gariraheko chha"],
      ["uniharu", "gardaichhan", "garirahekaa chhan"]
    ] } },
    { p: "Vowel stems take a nasal: <b>khaandaichhu</b> (I'm eating), <b>jaandaichhu</b> (I'm going), <b>aaundaichha</b> (he's coming)." },
    { ex: [
      { ne: "म नेपाली सिक्दैछु।", ro: "ma nepaali sikdaichhu.", en: "I'm learning Nepali." },
      { ne: "पानी परिरहेको छ।", ro: "paani pariraheko chha.", en: "It's raining." },
      { ne: "ऊ आउँदैछ।", ro: "u aaundaichha.", en: "He's on his way.", note: "Also: he's about to come." },
      { ne: "अर्को हप्ता म पोखरा जाँदैछु।", ro: "arko haptaa ma pokharaa jaandaichhu.", en: "Next week I'm going to Pokhara.", note: "Like English, it also covers fixed plans." }
    ] },
    { h: "Past continuous: was doing" },
    { p: "Replace chha with <b>thiyo</b>: <b>ma khaandai thien</b> / <b>ma khaairaheko thien</b> (I was eating)." },
    { ex: [
      { ne: "तपाईंले फोन गर्दा म खाना खाँदै थिएँ।", ro: "tapaainle phon gardaa ma khaanaa khaandai thien.", en: "I was eating when you called." }
    ] },
    { warn: "The negative usually uses the -iraheko form: <b>ma kaam gariraheko chhaina</b> (I'm not working right now). For habits use the simple present negative: <b>ma kaam gardina</b> (I don't work)." }
  ],
  quiz: [
    { q: "“I'm eating.”", a: "ma khaandaichhu", o: ["ma khaanchhu", "maile khaaen"], why: "Right now → <b>-dai chhu</b>, with a nasal for vowel stems." },
    { q: "“It's raining.”", a: "paani pariraheko chha", o: ["paani parchha", "paani paryo"], why: "Ongoing → <b>-iraheko chha</b> (or pardaichha)." },
    { q: "“We were waiting.” (parkhanu)", a: "haami parkhirahekaa thiyaun", o: ["haami parkhirahekaa chhaun", "haami parkhyaun"], why: "Past continuous → <b>-iraheko + thiyo</b> (haami → thiyaun)." },
    { q: "“I'm not working right now.”", a: "ma ahile kaam gariraheko chhaina", o: ["ma ahile kaam gardaichhaina", "ma ahile kaam gardina"], why: "Negative continuous → <b>-iraheko chhaina</b>." }
  ] },

{ id: "fut", level: "A2", title: "Talking about the future", sub: "Present, -ne plans, -nechha, and -laa (probably)",
  blocks: [
    { p: "Nepali has several futures. In conversation you'll mostly hear the first two." },
    { table: { head: ["Form", "Meaning", "Example"], rows: [
      ["<b>present tense</b>", "will (definite, near)", "bholi <b>aaunchhu</b> (I'll come tomorrow)"],
      ["<b>-ne</b> (no person ending)", "plan, intention; “shall we?”", "bholi ke <b>garne</b>? (what shall we do tomorrow?)"],
      ["<b>-nechha</b>", "will (formal, certain)", "bholi paani <b>parnechha</b> (it will rain tomorrow)"],
      ["<b>-laa</b>", "will probably, might", "u bholi <b>aaulaa</b> (he'll probably come tomorrow)"]
    ] } },
    { table: { cap: "-laa future (probable): garnu", head: ["", "will probably do", "probably won't"], rows: [
      ["ma", "gar<b>unlaa</b>", "nagarunlaa"],
      ["haami", "gar<b>aunlaa</b>", "nagaraunlaa"],
      ["timi", "gar<b>laau</b>", "nagarlaau"],
      ["tapaain", "gar<b>nuholaa</b>", "nagarnuholaa"],
      ["u", "gar<b>laa</b>", "nagarlaa"],
      ["uni (he) / uniharu", "gar<b>laan</b>", "nagarlaan"],
      ["uni (she)", "gar<b>lin</b>", "nagarlin"]
    ] } },
    { p: "Vowel stems: <b>jaaunlaa</b> (I'll probably go), <b>jaalaa</b> (he'll probably go), <b>khaalaa</b> (he'll probably eat), <b>aaulaa</b> (he'll probably come)." },
    { table: { cap: "-nechha future (definite, formal): garnu", head: ["", "will do", "will not do"], rows: [
      ["ma", "gar<b>nechhu</b>", "gar<b>nechhaina</b>"],
      ["haami", "garnechhaun", "garnechhainaun"],
      ["tapaain", "gar<b>nuhunechha</b>", "garnuhunechhaina"],
      ["u", "gar<b>nechha</b>", "garnechhaina"],
      ["uniharu", "garnechhan", "garnechhainan"]
    ] } },
    { ex: [
      { ne: "भोलि के गर्ने?", ro: "bholi ke garne?", en: "What shall we do tomorrow?" },
      { ne: "म आज बेलुका फोन गर्छु।", ro: "ma aaja belukaa phon garchhu.", en: "I'll call this evening." },
      { ne: "ऊ अलि ढिलो आउला।", ro: "u ali dhilo aaulaa.", en: "He'll probably come a bit late." },
      { ne: "म अर्को वर्ष फेरि आउनेछु।", ro: "ma arko barsha pheri aaunechhu.", en: "I will come again next year." },
      { ne: "म पोखरा जाने विचारमा छु।", ro: "ma pokharaa jaane bichaarmaa chhu.", en: "I'm thinking of going to Pokhara." }
    ] },
    { rule: "Everyday rule: definite plan → <b>present</b> (jaanchhu). Not sure → <b>-laa</b> (jaaunlaa). News, promises, formal → <b>-nechha</b>." }
  ],
  quiz: [
    { q: "“What shall we eat?”", a: "ke khaane?", o: ["ke khaanchhaun?", "ke khaaulaa?"], why: "<b>-ne</b> asks about a plan: what to do." },
    { q: "You're not sure: “I'll probably go.”", a: "ma jaaunlaa", o: ["ma jaanechhu", "ma jaanchhu"], why: "<b>-laa</b> = probably / might." },
    { q: "Weather forecast: “It will snow tomorrow.”", a: "bholi hiun parnechha", o: ["bholi hiun parlaa ra", "bholi hiun paryo"], why: "Formal and certain → <b>-nechha</b>." },
    { q: "“I'll call you tomorrow.” (definite)", a: "ma bholi tapaainlaai phon garchhu", o: ["ma bholi tapaainlaai phon garen", "ma bholi tapaainlaai phon garnuholaa"], why: "Definite near future → <b>present tense</b>." }
  ] },

{ id: "must", level: "A2", title: "Must, can, may", sub: "-nuparchha, -na sakchhu, -na aaunchha, -na paaunchhu, hunchha",
  blocks: [
    { table: { head: ["Meaning", "Pattern", "Example"], rows: [
      ["have to, must", "<b>-nuparchha</b>", "maile kaam garnuparchha (I have to work)"],
      ["don't have to", "<b>-nupardaina</b>", "tapaainle tirnupardaina (you don't have to pay)"],
      ["must not", "<b>-nu hundaina</b>", "yahaan churot khaanu hundaina (you mustn't smoke here)"],
      ["can (able)", "<b>-na sakchhu</b>", "ma aaja aauna sakchhu (I can come today)"],
      ["can (know how)", "malaai <b>-na aaunchha</b>", "malaai paudi khelna aaunchha (I can swim)"],
      ["get to, be allowed", "<b>-na paaunchhu</b>", "ma bhitra jaana paaunchhu? (may I go in?)"],
      ["may I? is it OK?", "<b>-na hunchha?</b>", "photo khichna hunchha? (may I take a photo?)"],
      ["is it possible?", "<b>-na milchha?</b>", "bholi aauna milchha? (could you come tomorrow?)"]
    ] } },
    { rule: "<b>-nuparchha</b> (have to) uses the <b>-nu</b> form; everything else (sakchhu, paaunchhu, hunchha) uses the <b>-na</b> form." },
    { ex: [
      { ne: "अब मलाई जानुपर्छ।", ro: "aba malaai jaanuparchha.", en: "I have to go now." },
      { ne: "म नेपाली बोल्न सक्छु।", ro: "ma nepaali bolna sakchhu.", en: "I can speak Nepali." },
      { ne: "म भोलि आउन सक्दिनँ।", ro: "ma bholi aauna sakdina.", en: "I can't come tomorrow." },
      { ne: "यहाँ बस्न हुन्छ?", ro: "yahaan basna hunchha?", en: "May I sit here?" },
      { ne: "हुन्छ, बस्नुस्।", ro: "hunchha, basnus.", en: "Sure, sit down." },
      { ne: "जुत्ता लगाएर भित्र जानु हुँदैन।", ro: "juttaa lagaaera bhitra jaanu hundaina.", en: "You mustn't go in with shoes on." },
      { ne: "मैले हिजो अस्पताल जानुपर्‍यो।", ro: "maile hijo aspataal jaanuparyo.", en: "I had to go to hospital yesterday." }
    ] },
    { warn: "Don't confuse <b>-nupardaina</b> (you don't need to) with <b>-nu hundaina</b> (you must not). The first is kind, the second is a prohibition." },
    { warn: "<b>hunchha</b> on its own means “OK, sure, fine” and is the standard way to agree. <b>hundaina</b> = “that's not OK / no way”." },
    { p: "Who does it? With a transitive verb, the person takes <b>-le</b>: <b>maile garnuparchha</b>. With an intransitive one, Nepalis say <b>malaai jaanuparchha</b> (or simply <b>ma jaanuparchha</b>)." }
  ],
  quiz: [
    { q: "“I have to study.” (padhnu)", a: "maile padhnuparchha", o: ["ma padhna sakchhu", "maile padhna parchha"], why: "Have to = <b>-nuparchha</b>; padhnu is transitive → maile." },
    { q: "“You don't have to come.”", a: "tapaain aaunupardaina", o: ["tapaain aaunu hundaina", "tapaain aauna sakdainau"], why: "<b>-nupardaina</b> = no need." },
    { q: "“You mustn't take photos here.”", a: "yahaan photo khichnu hundaina", o: ["yahaan photo khichnupardaina", "yahaan photo khichna sakdina"], why: "Prohibition = <b>-nu hundaina</b>." },
    { q: "“I can't swim.” (skill)", a: "malaai paudi khelna aaundaina", o: ["ma paudi khelna paaundina", "malaai paudi khelnuparchha"], why: "A learned skill = malaai … <b>-na aaunchha / aaundaina</b>." },
    { q: "“May I come in?”", a: "bhitra aauna hunchha?", o: ["bhitra aaunuparchha?", "bhitra aaunu hundaina?"], why: "<b>-na hunchha?</b> asks permission." }
  ] },

{ id: "perf", level: "A2", title: "Have done: the -eko forms", sub: "Present perfect, experience, had done",
  blocks: [
    { p: "<b>-eko</b> is the past participle (done, gone, eaten). With <b>chha</b> it makes the perfect: <i>I have done</i>. With <b>thiyo</b>: <i>I had done</i>." },
    { table: { cap: "Present perfect: garnu", head: ["", "have done", "haven't done"], rows: [
      ["ma", "gar<b>eko chhu</b>", "gareko chhaina"],
      ["haami", "gar<b>ekaa chhaun</b>", "garekaa chhainaun"],
      ["timi", "garekaa chhau", "garekaa chhainau"],
      ["tapaain / uhaan", "gar<b>nubhaeko chha</b>", "garnubhaeko chhaina"],
      ["u (he)", "gareko chha", "gareko chhaina"],
      ["u (she)", "gareki chhe", "gareki chhaina"],
      ["uniharu", "garekaa chhan", "garekaa chhainan"]
    ] } },
    { p: "Vowel stems: <b>khaaeko</b> (eaten), <b>aaeko</b> (come), <b>gaeko</b> (gone), <b>bhaeko</b> (been), <b>dieko</b> (given)." },
    { h: "When to use it" },
    { list: [
      "<b>Experience</b> (ever / never): <b>tapaain nepaal aaunubhaeko chha?</b> (have you been to Nepal?)",
      "<b>A present state that results from a past action</b>: <b>u biraami bhaeko chha</b> (he's (become) ill), <b>pasal banda bhaeko chha</b> (the shop has closed)",
      "<b>Telling where you're from</b>: <b>ma Portugalbaata aaeko hun</b> (I have come from Portugal)"
    ] },
    { ex: [
      { ne: "मैले दाल भात खाएको छु।", ro: "maile daal bhaat khaaeko chhu.", en: "I've eaten (my meal).", note: "Reply to the common greeting “khaanaa khaanubhayo?”" },
      { ne: "म कहिल्यै सगरमाथा गएको छैन।", ro: "ma kahilyai sagarmaathaa gaeko chhaina.", en: "I've never been to Everest." },
      { ne: "तपाईंले मोमो खानुभएको छ?", ro: "tapaainle momo khaanubhaeko chha?", en: "Have you ever eaten momos?" },
      { ne: "म आइपुग्दा बस गइसकेको थियो।", ro: "ma aaipugdaa bas gaisakeko thiyo.", en: "When I arrived, the bus had already left." }
    ] },
    { warn: "Spoken Nepali often drops <b>chha</b>: <b>kahaan gaeko?</b> (where did you go? / where have you been?), <b>khaanaa khaaeko?</b> (have you eaten?). Learn to recognise this, it's everywhere." },
    { p: "The -eko form agrees like an adjective: <b>-eko</b> (masc.), <b>-eki</b> (fem.), <b>-ekaa</b> (plural / respect)." }
  ],
  quiz: [
    { q: "“Have you (polite) been to Pokhara?”", a: "tapaain pokharaa jaanubhaeko chha?", o: ["tapaain pokharaa jaanuhunchha?", "tapaain pokharaa gayau?"], why: "Experience = <b>perfect</b>; polite form -nubhaeko chha." },
    { q: "“I've never eaten yak cheese.”", a: "maile kahilyai yaakko chiij khaaeko chhaina", o: ["maile kahilyai yaakko chiij khaaina", "ma kahilyai yaakko chiij khaandina"], why: "Never (experience) = <b>-eko chhaina</b>." },
    { q: "“The film had already started.”", a: "philm suru bhaisakeko thiyo", o: ["philm suru bhaisakeko chha", "philm suru hunchha"], why: "Had done = <b>-eko thiyo</b>." },
    { q: "Spoken: “Where have you been?” (to a friend)", a: "kahaan gaeko?", o: ["kahaan jaane?", "kahaan jaanchhau?"], why: "Colloquial perfect drops chha: <b>gaeko?</b>" }
  ] },

{ id: "habit", level: "A2", title: "“Used to”: the habitual past", sub: "-thyo for repeated past actions and “would”",
  blocks: [
    { p: "For things that happened regularly in the past (<i>I used to…, every day I would…</i>), Nepali has its own tense built on <b>-thyo</b>." },
    { table: { cap: "garnu", head: ["", "used to do", "didn't use to do"], rows: [
      ["ma", "gar<b>then</b>", "gar<b>dinathen</b>"],
      ["haami", "gar<b>thyaun</b>", "gardainathyaun"],
      ["timi", "gar<b>thyau</b>", "gardainathyau"],
      ["tapaain / uhaan", "gar<b>nuhunthyo</b>", "garnuhunnathyo"],
      ["u (he)", "gar<b>thyo</b>", "gar<b>dainathyo</b>"],
      ["uniharu", "gar<b>the</b>", "gardainathe"]
    ] } },
    { p: "Vowel stems: <b>khaanthen</b> (I used to eat), <b>jaanthyo</b> (he used to go), <b>aaunthe</b> (they used to come)." },
    { ex: [
      { ne: "सानो छँदा म गाउँमा बस्थेँ।", ro: "saano chhandaa ma gaaunmaa basthen.", en: "When I was small I lived in a village." },
      { ne: "हामी हरेक दिन खोलामा पौडी खेल्थ्यौँ।", ro: "haami harek din kholaamaa paudi khelthyaun.", en: "We used to swim in the river every day." },
      { ne: "हजुरआमा हामीलाई कथा सुनाउनुहुन्थ्यो।", ro: "hajuraamaa haamilaai kathaa sunaaunuhunthyo.", en: "Grandmother used to tell us stories." }
    ] },
    { h: "It also means “would” (unreal)" },
    { p: "The same form expresses what <i>would</i> happen if things were different: <b>malaai thaahaa bhaeko bhae ma aaunthen</b> (if I'd known, I would have come). See <i>Conditionals</i> at B1." },
    { warn: "Don't use it for a single past event. <i>Hijo ma bajaar jaanthen</i> is wrong; say <b>hijo ma bajaar gaen</b>." }
  ],
  quiz: [
    { q: "“I used to drink a lot of coffee.”", a: "ma dherai kaphi khaanthen", o: ["maile dherai kaphi khaaen", "ma dherai kaphi khaandaichhu"], why: "Repeated past habit → <b>-then</b>." },
    { q: "“He didn't use to smoke.”", a: "u churot khaandainathyo", o: ["usle churot khaaena", "u churot khaandaina"], why: "Habitual past negative → <b>-dainathyo</b>." },
    { q: "Which sentence is a single event?", a: "hijo ma gaaun gaen", o: ["ma harek barsha gaaun jaanthen", "ma saano chhandaa gaaun jaanthen"], why: "One-off event → simple past <b>gaen</b>." }
  ] },

{ id: "era", level: "A2", title: "Linking actions: -era", sub: "Having done X, do Y. Then, and then, without",
  blocks: [
    { p: "English joins actions with <i>and</i>: “I'll eat and go”. Nepali prefers to turn the first verb into an <b>-era</b> form (“having eaten, I'll go”). Only the last verb has a tense." },
    { rule: "Stem + <b>-era</b> (or <b>-era</b> → <b>-ra</b> after vowels in speech): <b>gar → garera</b>, <b>khaa → khaaera</b>, <b>jaa → gaera</b>, <b>aau → aaera</b>, <b>hunu → bhaera</b>." },
    { ex: [
      { ne: "खाना खाएर जानुहोस्।", ro: "khaanaa khaaera jaanuhos.", en: "Eat before you go.", note: "Literally: having eaten, go." },
      { ne: "म घर गएर आराम गर्छु।", ro: "ma ghar gaera aaraam garchhu.", en: "I'll go home and rest." },
      { ne: "तपाईंलाई भेटेर खुसी लाग्यो।", ro: "tapaainlaai bhetera khusi laagyo.", en: "Nice to meet you.", note: "Having met you, happiness struck." },
      { ne: "हिँडेर जाऔँ।", ro: "hindera jaaaun.", en: "Let's walk there.", note: "-era also says how: going by walking." },
      { ne: "बिरामी भएर म आइनँ।", ro: "biraami bhaera ma aaina.", en: "I didn't come because I was ill.", note: "-era can also mean because." }
    ] },
    { h: "Without doing: na- … -i" },
    { p: "<b>na-</b> + stem + <b>-i</b> (or <b>-ikana</b>) = without doing: <b>nakhaai</b> (without eating), <b>nabhani</b> (without saying), <b>nasodhikana</b> (without asking)." },
    { ex: [
      { ne: "उनी केही नभनी गए।", ro: "uni kehi nabhani gae.", en: "He left without saying anything." }
    ] },
    { h: "Simple joining words" },
    { list: [
      "<b>ra</b> = and (between nouns): <i>daal ra bhaat</i>",
      "<b>ani</b> = and then (between sentences, very common in speech): <i>ma bajaar gaen, ani tarkaari kinen</i>",
      "<b>pheri</b> = again; <b>tyaspachhi</b> = after that"
    ] },
    { warn: "The -era verb takes the subject of the main verb. Both actions must be done by the same person. For different subjects, use two clauses with <b>ani</b>." }
  ],
  quiz: [
    { q: "“I'll wash my hands and eat.” (dhunu = wash)", a: "ma haat dhoera khaanchhu", o: ["ma haat dhunchhu ra khaanchhu", "ma haat dhoyo khaanchhu"], why: "First action → <b>-era</b>, only the last verb has a tense." },
    { q: "“Having gone to Kathmandu…”", a: "kaathmaadaun gaera", o: ["kaathmaadaun jaaera", "kaathmaadaun jaanera"], why: "jaanu uses its past stem: <b>gaera</b>." },
    { q: "“Without eating”", a: "nakhaai", o: ["khaaera", "nakhaanchha"], why: "<b>na- … -i</b> = without." },
    { q: "Which word joins two sentences as “and then”?", a: "ani", o: ["ra", "ki"], why: "<b>ani</b> links clauses; <b>ra</b> links nouns." }
  ] },

{ id: "compare", level: "A2", title: "Comparing: more, most, like", sub: "bhandaa, sabaibhandaa, jasto, jastai",
  blocks: [
    { p: "Nepali adjectives have no -er or -est. You compare with <b>bhandaa</b> (than)." },
    { rule: "X Y-<b>bhandaa</b> adjective chha = X is more adjective than Y. Most: <b>sabaibhandaa</b> (than all)." },
    { ex: [
      { ne: "पोखरा काठमाडौंभन्दा शान्त छ।", ro: "pokharaa kaathmaadaunbhandaa shaanta chha.", en: "Pokhara is quieter than Kathmandu." },
      { ne: "यो त्योभन्दा सस्तो छ।", ro: "yo tyobhandaa sasto chha.", en: "This one is cheaper than that one." },
      { ne: "सगरमाथा संसारको सबैभन्दा अग्लो हिमाल हो।", ro: "sagarmaathaa sansaarko sabaibhandaa aglo himaal ho.", en: "Everest is the highest mountain in the world." },
      { ne: "मेरो भाइ मभन्दा दुई वर्ष सानो छ।", ro: "mero bhaai mabhandaa dui barsha saano chha.", en: "My brother is two years younger than me." }
    ] },
    { table: { head: ["Pattern", "Meaning", "Example"], rows: [
      ["X-bhandaa <b>dherai</b> / <b>ali</b>", "much / a bit more than X", "yo tyobhandaa <b>dherai</b> raamro (much better)"],
      ["X <b>jasto</b>", "like X, similar to X", "timi aamaa <b>jasto</b> dekhinchhau (you look like Mum)"],
      ["X <b>jastai</b>", "just like X, the same as X", "hijo <b>jastai</b> (just like yesterday)"],
      ["X <b>jattikai</b> / <b>jati</b>", "as … as X", "u ma <b>jattikai</b> aglo chha (he's as tall as me)"],
      ["<b>ajha</b> / <b>jhan</b>", "even more", "aaja <b>jhan</b> jaado chha (it's even colder today)"],
      ["<b>-nu raamro</b>", "it's better to", "bholi aaunu raamro (better to come tomorrow)"]
    ] } },
    { warn: "Pronouns before bhandaa use their basic form: <b>mabhandaa</b> (than me), <b>timibhandaa</b>, <b>usbhandaa</b> (than him), <b>tapaainbhandaa</b>." }
  ],
  quiz: [
    { q: "“Tea is cheaper than coffee.”", a: "chiyaa kaphibhandaa sasto chha", o: ["kaphi chiyaabhandaa sasto chha", "chiyaa kaphi jasto sasto chha"], why: "The thing compared against takes <b>-bhandaa</b>." },
    { q: "“The best restaurant”", a: "sabaibhandaa raamro hotel", o: ["dherai raamro hotel", "raamro bhandaa hotel"], why: "Most = <b>sabaibhandaa</b>." },
    { q: "“He talks like a teacher.”", a: "u shikshak jasto bolchha", o: ["u shikshakbhandaa bolchha", "u shikshak jati bolchha"], why: "Like / similar to = <b>jasto</b>." },
    { q: "“Older than me”", a: "mabhandaa thulo", o: ["malaaibhandaa thulo", "merobhandaa thulo"], why: "Plain pronoun + bhandaa: <b>mabhandaa</b>." }
  ] }
);
})();
