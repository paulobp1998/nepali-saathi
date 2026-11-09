// Content for the daily session (daily.js): grammar plan, word glosses, sentence-pattern notes,
// branching role-plays, weekly real-world tasks and monthly recording topics.
(function () {
const C = window.COURSE;

// Grammar chapters taught inside each unit's sessions, in order. Chapters not listed here
// (B2 to C2) are taught after B1, in course order.
C.gplan = {
  greet: ["order"], intro: ["pron", "be"], help: ["imp"], num: ["count"], food: ["like"], shop: ["ask"],
  move: ["post"], fam: ["poss"], time: ["pres"], feel: ["adj"], verbs: ["must"],
  past: ["past", "erg"], future: ["fut"], weather: ["was"], routine: ["cont", "habit"], describe: [], phone: ["era"],
  hobby: [], clinic: ["perf"], culture: ["wish"], compare: ["compare"],
  opinion: ["report"], tell: ["when"], work: ["conn"], health: ["rel"], solve: ["neg"], ifthen: ["if"], emotion: ["particles"], news: ["guess"]
};

// Word-by-word help. Keys are romanized words as the course writes them.
C.gloss = {
  ma: "I", malaai: "to me", maile: "I (doer)", mero: "my", haami: "we", haamro: "our", haamile: "we (doer)",
  tapaain: "you (polite)", tapaainlaai: "to you", tapaainko: "your", tapaainle: "you (doer)", hajur: "you (very polite) / yes?",
  uni: "he, she", uhaan: "he, she (respectful)", usko: "his, her", unko: "his, her", yo: "this", tyo: "that", yasko: "its, of this",
  ko: "who", ke: "what / (question)", kahaan: "where", kati: "how much, how many", kasto: "how, what kind", kahile: "when", kina: "why", kun: "which", kasari: "how",
  ho: "is (identity)", hoina: "is not (identity)", chha: "is, there is", chhaina: "is not, there isn't", chhu: "am", chhan: "are (they)", hun: "am (identity)", usle: "he, she (doer)",
  hunchha: "OK / happens", hunuhunchha: "is (polite)", bhayo: "happened, became", thiyo: "was", thiena: "was not",
  laagyo: "came to be (felt)", laagchha: "feels / costs, takes", parchha: "falls, is needed", chaahiyo: "is needed, want",
  pani: "also, too", ra: "and", ani: "and then", tara: "but", ki: "or", ni: "and…? (soft emphasis)", ta: "(emphasis)", maatra: "only",
  dherai: "very, a lot", ali: "a bit", alikati: "a little", ajhai: "still, more", sabai: "all", kehi: "something", kunai: "some, any",
  aaja: "today", bholi: "tomorrow", hijo: "yesterday", ahile: "now", pahile: "first, before", pachhi: "after, later", pheri: "again",
  bihaan: "morning", belukaa: "evening", baje: "o'clock", haptaa: "week", samaya: "time", ghantaa: "hour", din: "day", barsha: "year",
  yahaan: "here", tyahaan: "there", najikai: "nearby", taadhaa: "far",
  thik: "fine, OK", raamro: "good", naraamro: "bad", thulo: "big", saano: "small", mitho: "tasty", mahango: "expensive", sasto: "cheap", nayaan: "new", khusi: "happy",
  arko: "another, next", eutaa: "one (thing)", ek: "one", dui: "two", tin: "three", chaar: "four", paanch: "five", saya: "hundred", hajaar: "thousand",
  naam: "name", ghar: "home, house", kaam: "work", paani: "water", chiyaa: "tea", khaanaa: "food, meal", bhaat: "rice", daal: "lentils",
  saathi: "friend", daai: "older brother", didi: "older sister", aamaa: "mother", bubaa: "father", man: "heart, mind", taauko: "head",
  kuraa: "thing, talk", paisaa: "money", rupaiyaan: "rupees", aushadhi: "medicine", daaktar: "doctor", samasyaa: "problem", jwaro: "fever",
  nepaali: "Nepali", nepaal: "Nepal", thaahaa: "knowledge (thaahaa chha = know)", maaf: "pardon", dhanyabaad: "thank you", namaste: "hello",
  sanchai: "well, healthy", bistaarai: "slowly", sangai: "together", pugyo: "enough / arrived", jaaun: "let's go", gaen: "I went",
  bujhen: "I understood", bujhina: "I didn't understand", sakchhu: "I can", sakdina: "I can't", bhane: "if / said"
};
// Endings, longest first: [ending, meaning, kind]. kind "v" marks a verb ending; "n" a little word joined to a noun.
C.suffix = [
  ["nuhunchha", "polite present: you do / he does", "v"], ["nubhayo", "polite past: you did", "v"], ["nuparchha", "must, have to", "v"],
  ["nuhos", "please … (polite request)", "v"], ["daichhu", "I am …-ing", "v"], ["daichha", "is …-ing", "v"], ["daichhan", "they are …-ing", "v"],
  ["chhaina", "doesn't", "v"], ["dainan", "they don't", "v"], ["daina", "doesn't", "v"], ["dina", "I don't", "v"],
  ["chhaun", "we … (present)", "v"], ["chhau", "you … (familiar, present)", "v"], ["chhan", "they … (present)", "v"], ["chhin", "she … (present)", "v"],
  ["chhu", "I … (present)", "v"], ["chha", "he, she, it … (present)", "v"], ["eko", "…-ed (has done / that did)", "v"], ["era", "having …-ed, then", "v"],
  ["yo", "…-ed (past)", "v"], ["haru", "plural (-s)", "n"], ["laai", "to, for", "n"], ["baata", "from", "n"], ["sanga", "with", "n"],
  ["dekhi", "since, from", "n"], ["samma", "until, up to", "n"], ["maa", "in, at, on", "n"], ["ko", "of, 's", "n"], ["kaa", "of, 's (plural)", "n"], ["le", "doer / by means of", "n"]
];
// Words that only look like they carry an ending.
C.notSuffix = ["aamaa", "maamaa", "hajuraamaa", "taauko", "arko", "ahile", "kahile", "pahile", "tyasaile", "gaekaale", "dekhi", "samma", "sanga", "haru", "chha", "chhu", "chhan", "yo", "tyo", "ko", "le", "ke", "kaakaa", "ekaa"];
// Verb roots, so endings can show "gar + nuhos = please do".
C.roots = { gar: "do", jaa: "go", aau: "come", aaun: "come", khaa: "eat", khaan: "eat", pi: "drink", piu: "drink", bas: "sit, live", bol: "speak", bujh: "understand",
  sik: "learn", bhan: "say", di: "give", din: "give", de: "give", li: "take", lin: "take", her: "look", sun: "listen", padh: "read, study", padhaau: "teach",
  lekh: "write", kin: "buy", ruk: "stop", rok: "stop", sut: "sleep", uth: "get up", khel: "play", sak: "can, finish", bhet: "meet", dukh: "hurt", laag: "feel, seem",
  par: "fall, be needed", chalaau: "drive", lyaau: "bring", aa: "come", ga: "go", bha: "be, become", hun: "be", parkha: "wait", pug: "reach, be enough", padhaaun: "teach" };

// Pattern notes: why the sentence is built this way. First two that match are shown.
C.patterns = [
  { re: /\b(malaai|tapaainlaai|usalaai|unlaai)\b.*\b(laagyo|laagchha|laageko|chha|chhaina|parchha|chaahiyo|chaahindaina)\b/, note: "Feelings and wants use “to me”: <b>malaai bhok laagyo</b> is literally “to me hunger came”. The person who feels takes <b>-laai</b>.", g: "like" },
  { re: /\b(maile|tapaainle|usle|uhaanle|haamile)\b/, note: "<b>-le</b> marks who did it, mainly with past actions done to something: <b>maile khaaen</b>, I ate.", g: "erg" },
  { re: /\b(ke|kahaan|kati|kasto|kahile|kina|kun|kasari)\b/, note: "Question words sit where the answer would go. Nothing moves: <b>tapaain kahaan jaanuhunchha?</b> = you where go?", g: "ask" },
  { re: /nuhos\b/, note: "<b>-nuhos</b> makes a polite request. It replaces “please”: <b>dinuhos</b> = please give.", g: "imp" },
  { re: /\b(tapaain\w*)\b.*nu(hunchha|bhayo)\b/, note: "With <b>tapaain</b> the verb takes its polite form too: <b>garnuhunchha</b>, not <b>garchha</b>.", g: "pron" },
  { re: /\w(maa|baata|sanga|dekhi|samma)\b/, note: "Nepali has postpositions: little words like <b>-maa</b> (in) and <b>-baata</b> (from) come after the noun, joined to it.", g: "post" },
  { re: /\bho[.?!]*$/, note: "<b>ho</b> links two things that are the same: X <b>ho</b> = it is X. For where something is, or how it is, Nepali uses <b>chha</b>.", g: "be" },
  { re: /eko (chha|chhu|chhan|ho)\b/, note: "<b>-eko chha</b> is the “has done” form: the action happened and its result still matters.", g: "perf" },
  { re: /dai(chha|chhu|chhan)\b/, note: "<b>-dai chha</b> = is doing right now.", g: "cont" },
  { re: /nuparchha\b/, note: "<b>-nuparchha</b> = must, have to. The verb ending carries the whole idea.", g: "must" },
  { re: /\b\w+(chhu|chha|chhan|chhin|yo|en|nuhos|nuhunchha|nubhayo|daina|dina|ho|hoina|chhaina)[.?!]*$/, note: "The verb comes last. Everything else, who, when, where, what, comes before it.", g: "order" }
];

// Branching role-plays. Each node: what they say (say), then your options (opts), each leading to another node.
// A node with end: true closes the scene. Options are spoken; the microphone decides which branch follows.
C.roleplays = [
  { id: "tea", unit: "food", title: "Ordering food in Thamel", scene: "A small tea shop in Thamel. The owner smiles at you.", start: "a", nodes: {
    a: { say: { ne: "नमस्ते! के खानुहुन्छ?", ro: "namaste! ke khaanuhunchha?", en: "Hello! What will you have?" }, opts: [
      { ne: "एक कप चिया दिनुहोस्।", ro: "ek kap chiyaa dinuhos.", en: "Order a cup of tea", go: "tea" },
      { ne: "दाल भात छ?", ro: "daal bhaat chha?", en: "Ask if there's daal bhaat", go: "meal" }] },
    tea: { say: { ne: "दूध चिया कि कालो चिया?", ro: "dudh chiyaa ki kaalo chiyaa?", en: "Milk tea or black tea?" }, opts: [
      { ne: "दूध चिया दिनुहोस्।", ro: "dudh chiyaa dinuhos.", en: "Milk tea, please", go: "more" },
      { ne: "कालो चिया दिनुहोस्।", ro: "kaalo chiyaa dinuhos.", en: "Black tea, please", go: "more" }] },
    more: { say: { ne: "लिनुहोस्। अरू केही चाहियो?", ro: "linuhos. aru kehi chaahiyo?", en: "Here you are. Anything else?" }, opts: [
      { ne: "एक प्लेट मोमो पनि दिनुहोस्।", ro: "ek plet momo pani dinuhos.", en: "Order a plate of momos too", go: "momo" },
      { ne: "पुग्यो, धन्यवाद। बिल ल्याउनुहोस्।", ro: "pugyo, dhanyabaad. bil lyaaunuhos.", en: "That's all. Ask for the bill", go: "bill" }] },
    momo: { say: { ne: "मोमो दस मिनेटमा आउँछ।", ro: "momo das minetmaa aaunchha.", en: "The momos will come in ten minutes." }, opts: [
      { ne: "ठिक छ, धन्यवाद।", ro: "thik chha, dhanyabaad.", en: "Say that's fine, thank you", go: "momoend" }] },
    momoend: { say: { ne: "लिनुहोस्, तातो मोमो!", ro: "linuhos, taato momo!", en: "Here you go, hot momos!" }, end: true },
    meal: { say: { ne: "छ। मासु पनि खानुहुन्छ?", ro: "chha. maasu pani khaanuhunchha?", en: "Yes. Do you eat meat too?" }, opts: [
      { ne: "म मासु खाँदिनँ।", ro: "ma maasu khaandina.", en: "Say you don't eat meat", go: "taste" },
      { ne: "हुन्छ, मासु पनि दिनुहोस्।", ro: "hunchha, maasu pani dinuhos.", en: "Say yes, meat too", go: "taste" }] },
    taste: { say: { ne: "लिनुहोस्। कस्तो छ?", ro: "linuhos. kasto chha?", en: "Here you are. How is it?" }, opts: [
      { ne: "मीठो छ!", ro: "mitho chha!", en: "Say it's delicious", go: "rice" },
      { ne: "अलि पिरो छ।", ro: "ali piro chha.", en: "Say it's a bit spicy", go: "water" }] },
    rice: { say: { ne: "अझै भात चाहियो?", ro: "ajhai bhaat chaahiyo?", en: "Would you like more rice?" }, opts: [
      { ne: "अझै अलिकति दिनुहोस्।", ro: "ajhai alikati dinuhos.", en: "Ask for a little more", go: "refill" },
      { ne: "पुग्यो, धन्यवाद।", ro: "pugyo, dhanyabaad.", en: "Say that's enough, thank you", go: "bill" }] },
    refill: { say: { ne: "लिनुहोस्।", ro: "linuhos.", en: "Here you are." }, opts: [
      { ne: "पुग्यो, धन्यवाद। बिल ल्याउनुहोस्।", ro: "pugyo, dhanyabaad. bil lyaaunuhos.", en: "That's enough. Ask for the bill", go: "bill" }] },
    water: { say: { ne: "माफ गर्नुहोस्! पानी लिनुहोस्।", ro: "maaf garnuhos! paani linuhos.", en: "Sorry! Have some water." }, opts: [
      { ne: "धन्यवाद। बिल ल्याउनुहोस्।", ro: "dhanyabaad. bil lyaaunuhos.", en: "Thank them and ask for the bill", go: "bill" }] },
    bill: { say: { ne: "जम्मा दुई सय रुपैयाँ।", ro: "jammaa dui saya rupaiyaan.", en: "Two hundred rupees in total." }, end: true }
  } },
  { id: "bazaar", unit: "shop", title: "A shawl in Asan bazaar", scene: "A shawl shop in Asan bazaar, Kathmandu.", start: "a", nodes: {
    a: { say: { ne: "आउनुहोस्! के चाहियो?", ro: "aaunuhos! ke chaahiyo?", en: "Come in! What do you need?" }, opts: [
      { ne: "हेर्दै मात्र छु।", ro: "herdai maatra chhu.", en: "Say you're just looking", go: "look" },
      { ne: "मलाई सल चाहियो।", ro: "malaai sal chaahiyo.", en: "Say you need a shawl", go: "shawl" }] },
    look: { say: { ne: "हुन्छ, हेर्नुहोस्। यो सल राम्रो छ।", ro: "hunchha, hernuhos. yo sal raamro chha.", en: "Sure, have a look. This shawl is nice." }, opts: [
      { ne: "यो कति हो?", ro: "yo kati ho?", en: "Ask the price", go: "price" },
      { ne: "अर्को रङ छ?", ro: "arko rang chha?", en: "Ask for another colour", go: "colour" }] },
    shawl: { say: { ne: "यो हेर्नुहोस्। पस्मिना हो।", ro: "yo hernuhos. pasminaa ho.", en: "Look at this one. It's pashmina." }, opts: [
      { ne: "यो कति हो?", ro: "yo kati ho?", en: "Ask the price", go: "price" },
      { ne: "अर्को रङ छ?", ro: "arko rang chha?", en: "Ask for another colour", go: "colour" }] },
    colour: { say: { ne: "छ। रातो र निलो छ।", ro: "chha. raato ra nilo chha.", en: "Yes. There's red and blue." }, opts: [
      { ne: "निलो राम्रो छ। यो कति हो?", ro: "nilo raamro chha. yo kati ho?", en: "Say the blue is nice and ask the price", go: "price" },
      { ne: "मलाई चाहिँदैन।", ro: "malaai chaahindaina.", en: "Say you don't need it", go: "leave" }] },
    price: { say: { ne: "दुई हजार रुपैयाँ।", ro: "dui hajaar rupaiyaan.", en: "Two thousand rupees." }, opts: [
      { ne: "धेरै महँगो भयो।", ro: "dherai mahango bhayo.", en: "Say it's too expensive", go: "offer" },
      { ne: "ठिक छ, मलाई यो चाहियो।", ro: "thik chha, malaai yo chaahiyo.", en: "Accept: you want this one", go: "buy" }] },
    offer: { say: { ne: "कति दिनुहुन्छ?", ro: "kati dinuhunchha?", en: "How much will you give?" }, opts: [
      { ne: "एक हजार दिन्छु।", ro: "ek hajaar dinchhu.", en: "Offer a thousand", go: "counter" },
      { ne: "अलि सस्तो गर्नुहोस् न।", ro: "ali sasto garnuhos na.", en: "Ask to make it a bit cheaper", go: "counter" }] },
    counter: { say: { ne: "पन्ध्र सय अन्तिम हो।", ro: "pandhra saya antim ho.", en: "Fifteen hundred is my final price." }, opts: [
      { ne: "हुन्छ, लिन्छु।", ro: "hunchha, linchhu.", en: "Agree: you'll take it", go: "buy" },
      { ne: "मलाई चाहिँदैन। धन्यवाद।", ro: "malaai chaahindaina. dhanyabaad.", en: "Say no thanks and walk away", go: "wait" }] },
    wait: { say: { ne: "पर्खनुहोस्! बाह्र सय, हुन्छ?", ro: "parkhanuhos! baahra saya, hunchha?", en: "Wait! Twelve hundred, OK?" }, opts: [
      { ne: "हुन्छ, लिन्छु।", ro: "hunchha, linchhu.", en: "Agree: you'll take it", go: "buy" }] },
    buy: { say: { ne: "धन्यवाद! फेरि आउनुहोस्।", ro: "dhanyabaad! pheri aaunuhos.", en: "Thank you! Come again." }, end: true },
    leave: { say: { ne: "ठिक छ, फेरि आउनुहोस्।", ro: "thik chha, pheri aaunuhos.", en: "All right, come again." }, end: true }
  } },
  { id: "taxi", unit: "move", title: "A taxi from the airport", scene: "You wave down a taxi outside the airport.", start: "a", nodes: {
    a: { say: { ne: "कहाँ जाने?", ro: "kahaan jaane?", en: "Where to?" }, opts: [
      { ne: "ठमेल जान कति लाग्छ?", ro: "thamel jaana kati laagchha?", en: "Ask how much to Thamel", go: "fare" },
      { ne: "ठमेल जानुपर्छ।", ro: "thamel jaanuparchha.", en: "Say you need to go to Thamel", go: "fare2" }] },
    fare: { say: { ne: "पाँच सय रुपैयाँ।", ro: "paanch saya rupaiyaan.", en: "Five hundred rupees." }, opts: [
      { ne: "धेरै महँगो भयो। तीन सय हुन्छ?", ro: "dherai mahango bhayo. tin saya hunchha?", en: "Too expensive. Offer three hundred", go: "deal" },
      { ne: "ठिक छ, जाऔँ।", ro: "thik chha, jaaun.", en: "Accept: let's go", go: "where" }] },
    fare2: { say: { ne: "हुन्छ, पाँच सय लाग्छ।", ro: "hunchha, paanch saya laagchha.", en: "OK, it costs five hundred." }, opts: [
      { ne: "धेरै महँगो भयो। तीन सय हुन्छ?", ro: "dherai mahango bhayo. tin saya hunchha?", en: "Too expensive. Offer three hundred", go: "deal" },
      { ne: "ठिक छ, जाऔँ।", ro: "thik chha, jaaun.", en: "Accept: let's go", go: "where" }] },
    deal: { say: { ne: "चार सय दिनुहोस्।", ro: "chaar saya dinuhos.", en: "Give me four hundred." }, opts: [
      { ne: "ठिक छ, जाऔँ।", ro: "thik chha, jaaun.", en: "Accept: let's go", go: "where" }] },
    where: { say: { ne: "ठमेलमा कहाँ?", ro: "thamelmaa kahaan?", en: "Where in Thamel?" }, opts: [
      { ne: "सिधा जानुहोस्, अनि दायाँ।", ro: "sidhaa jaanuhos, ani daayaan.", en: "Go straight, then right", go: "here" },
      { ne: "बिस्तारै चलाउनुहोस्।", ro: "bistaarai chalaaunuhos.", en: "Ask them to drive slowly", go: "slow" }] },
    slow: { say: { ne: "हुन्छ, बिस्तारै चलाउँछु।", ro: "hunchha, bistaarai chalaaunchhu.", en: "OK, I'll drive slowly." }, opts: [
      { ne: "धन्यवाद। यहाँ रोक्नुहोस्।", ro: "dhanyabaad. yahaan roknuhos.", en: "Thank them, then ask to stop here", go: "end" }] },
    here: { say: { ne: "यहाँ दायाँ?", ro: "yahaan daayaan?", en: "Right here?" }, opts: [
      { ne: "हो, यहाँ रोक्नुहोस्।", ro: "ho, yahaan roknuhos.", en: "Yes, stop here", go: "end" },
      { ne: "होइन, अलि अगाडि।", ro: "hoina, ali agaadi.", en: "No, a bit further ahead", go: "further" }] },
    further: { say: { ne: "यहाँ?", ro: "yahaan?", en: "Here?" }, opts: [
      { ne: "हो, यहाँ रोक्नुहोस्।", ro: "ho, yahaan roknuhos.", en: "Yes, stop here", go: "end" }] },
    end: { say: { ne: "ठमेल आयो। धन्यवाद!", ro: "thamel aayo. dhanyabaad!", en: "Here's Thamel. Thank you!" }, end: true }
  } },
  { id: "clinic", unit: "clinic", title: "At the health post", scene: "You feel unwell and see a doctor at a health post.", start: "a", nodes: {
    a: { say: { ne: "नमस्ते। के भयो?", ro: "namaste. ke bhayo?", en: "Hello. What's the matter?" }, opts: [
      { ne: "मलाई ज्वरो आएको छ।", ro: "malaai jwaro aaeko chha.", en: "Say you have a fever", go: "fever" },
      { ne: "मलाई रुघाखोकी लागेको छ।", ro: "malaai rughaakhoki laageko chha.", en: "Say you have a cold and a cough", go: "cold" }] },
    fever: { say: { ne: "कहिलेदेखि?", ro: "kahiledekhi?", en: "Since when?" }, opts: [
      { ne: "तीन दिनदेखि।", ro: "tin dindekhi.", en: "For three days", go: "test" },
      { ne: "हिजोदेखि।", ro: "hijodekhi.", en: "Since yesterday", go: "breath" }] },
    cold: { say: { ne: "कहिलेदेखि? ज्वरो पनि छ?", ro: "kahiledekhi? jwaro pani chha?", en: "Since when? Do you have a fever too?" }, opts: [
      { ne: "दुई दिनदेखि। ज्वरो छैन।", ro: "dui dindekhi. jwaro chhaina.", en: "Two days, no fever", go: "breath" },
      { ne: "तीन दिनदेखि। अलि अलि ज्वरो छ।", ro: "tin dindekhi. ali ali jwaro chha.", en: "Three days, a slight fever", go: "test" }] },
    breath: { say: { ne: "गहिरो सास फेर्नुहोस्।", ro: "gahiro saas phernuhos.", en: "Take a deep breath." }, opts: [
      { ne: "हुन्छ।", ro: "hunchha.", en: "Say OK", go: "allergy" }] },
    test: { say: { ne: "रगत जाँच गर्नुपर्छ।", ro: "ragat jaanch garnuparchha.", en: "We need to do a blood test." }, opts: [
      { ne: "हुन्छ।", ro: "hunchha.", en: "Say OK", go: "allergy" },
      { ne: "कुनै समस्या छ?", ro: "kunai samasyaa chha?", en: "Ask if there's a problem", go: "calm" }] },
    calm: { say: { ne: "धेरै चिन्ता नगर्नुहोस्। जाँच मात्र हो।", ro: "dherai chintaa nagarnuhos. jaanch maatra ho.", en: "Don't worry too much. It's just a test." }, opts: [
      { ne: "ठिक छ।", ro: "thik chha.", en: "Say all right", go: "allergy" }] },
    allergy: { say: { ne: "कुनै औषधिसँग एलर्जी छ?", ro: "kunai aushadhisanga elarji chha?", en: "Are you allergic to any medicine?" }, opts: [
      { ne: "छैन।", ro: "chhaina.", en: "Say no", go: "end" },
      { ne: "छ, पेनिसिलिनसँग।", ro: "chha, penisilinsanga.", en: "Say yes, to penicillin", go: "other" }] },
    other: { say: { ne: "ठिक छ, अर्को औषधि दिन्छु।", ro: "thik chha, arko aushadhi dinchhu.", en: "All right, I'll give you a different medicine." }, opts: [
      { ne: "धन्यवाद।", ro: "dhanyabaad.", en: "Thank them", go: "end" }] },
    end: { say: { ne: "यो औषधि खाना खाएपछि खानुहोस्। आराम गर्नुहोस्, अनि धेरै पानी पिउनुहोस्।", ro: "yo aushadhi khaanaa khaaepachhi khaanuhos. aaraam garnuhos, ani dherai paani piunuhos.", en: "Take this medicine after eating. Rest, and drink plenty of water." }, end: true }
  } },
  { id: "work", unit: "work", title: "Talking shop at a conference", scene: "A Nepali colleague starts chatting with you during a coffee break.", start: "a", nodes: {
    a: { say: { ne: "तपाईं कहाँ काम गर्नुहुन्छ?", ro: "tapaain kahaan kaam garnuhunchha?", en: "Where do you work?" }, opts: [
      { ne: "म विश्वविद्यालयमा पढाउँछु।", ro: "ma bishwabidyaalayamaa padhaaunchhu.", en: "Say you teach at a university", go: "teach" },
      { ne: "म अनुसन्धान गर्छु।", ro: "ma anusandhaan garchhu.", en: "Say you do research", go: "research" }] },
    teach: { say: { ne: "के पढाउनुहुन्छ?", ro: "ke padhaaunuhunchha?", en: "What do you teach?" }, opts: [
      { ne: "म नर्सिङका विद्यार्थीहरूलाई पढाउँछु।", ro: "ma narsingkaa bidyaarthiharulaai padhaaunchhu.", en: "Say you teach nursing students", go: "studied" },
      { ne: "म जीवविज्ञान पढाउँछु।", ro: "ma jeewabigyaan padhaaunchhu.", en: "Say you teach biology", go: "studied" }] },
    studied: { say: { ne: "राम्रो! तपाईंले के पढ्नुभयो?", ro: "raamro! tapaainle ke padhnubhayo?", en: "Nice! What did you study?" }, opts: [
      { ne: "मैले जीवविज्ञान पढेँ।", ro: "maile jeewabigyaan padhen.", en: "Say you studied biology", go: "years" }] },
    years: { say: { ne: "अनि कति वर्षदेखि पढाउनुहुन्छ?", ro: "ani kati barshadekhi padhaaunuhunchha?", en: "And how many years have you been teaching?" }, opts: [
      { ne: "दस वर्षदेखि।", ro: "das barshadekhi.", en: "For ten years", go: "dinner" },
      { ne: "म यो काम धेरै वर्षदेखि गर्दै आएको छु।", ro: "ma yo kaam dherai barshadekhi gardai aaeko chhu.", en: "Say you've been doing this for many years", go: "dinner" }] },
    research: { say: { ne: "कुन विषयमा अनुसन्धान गर्नुहुन्छ?", ro: "kun bishayamaa anusandhaan garnuhunchha?", en: "What do you research?" }, opts: [
      { ne: "म प्रतिरक्षा प्रणालीमा अनुसन्धान गर्छु।", ro: "ma pratirakshaa pranaalimaa anusandhaan garchhu.", en: "Say you research the immune system", go: "since" },
      { ne: "म क्यान्सरमा अनुसन्धान गर्छु।", ro: "ma kyaansarmaa anusandhaan garchhu.", en: "Say you research cancer", go: "since" }] },
    since: { say: { ne: "रमाइलो! कति वर्षदेखि?", ro: "ramaailo! kati barshadekhi?", en: "Interesting! For how many years?" }, opts: [
      { ne: "दस वर्षदेखि।", ro: "das barshadekhi.", en: "For ten years", go: "dinner" },
      { ne: "म यो काम धेरै वर्षदेखि गर्दै आएको छु।", ro: "ma yo kaam dherai barshadekhi gardai aaeko chhu.", en: "Say you've been doing this for many years", go: "dinner" }] },
    dinner: { say: { ne: "आज बेलुका सँगै खाना खाऔँ न।", ro: "aaja belukaa sangai khaanaa khaaun na.", en: "Let's have dinner together this evening." }, opts: [
      { ne: "हुन्छ! कति बजे?", ro: "hunchha! kati baje?", en: "Accept and ask what time", go: "seven" },
      { ne: "माफ गर्नुहोस्, आज बैठक छ।", ro: "maaf garnuhos, aaja baithak chha.", en: "Apologise: you have a meeting", go: "tomorrow" }] },
    seven: { say: { ne: "सात बजे। होटलमा भेटौँला।", ro: "saat baje. hotalmaa bhetaunlaa.", en: "Seven o'clock. We'll meet at the hotel." }, end: true },
    tomorrow: { say: { ne: "ठिक छ, भोलि भेटौँला।", ro: "thik chha, bholi bhetaunlaa.", en: "All right, see you tomorrow." }, end: true }
  } }
];

// One real-world task a week. Logged time counts toward the immersion hours on Your path.
C.weekly = {
  start: [
    { id: "w1", t: "Greet someone in Nepali", d: "Find a Nepali speaker (a restaurant, a shop, a colleague) and say namaste, then tapaainlaai kasto chha?", min: 10 },
    { id: "w2", t: "A Nepali song", d: "Play a Nepali song with lyrics on YouTube. Listen three times and catch five words you know.", min: 15 },
    { id: "w3", t: "Name your dinner", d: "Cook or order daal bhaat or momos and name everything on the plate aloud in Nepali.", min: 10 },
    { id: "w4", t: "Label your home", d: "Put ten notes with Nepali words on things at home: paani, chiyaa, ghar, dhoka (door)… Say each one when you use it.", min: 15 },
    { id: "w5", t: "Find a language partner", d: "Join a free language-exchange app (Tandem or HelloTalk) and exchange five messages with a Nepali speaker.", min: 20 },
    { id: "w6", t: "Introduce yourself by voice", d: "Send a 30-second voice message in Nepali to a friend or partner: your name, where you're from, your work.", min: 10 },
    { id: "w7", t: "Ten minutes of radio", d: "Play ten minutes of a Nepali radio station or podcast while doing chores. Don't try to understand everything.", min: 10 }
  ],
  mid: [
    { id: "m1", t: "A 15-minute call", d: "Call a language partner. Talk only about your work: what you do, since when, what you like about it.", min: 15 },
    { id: "m2", t: "A vlog, twice", d: "Watch a short Nepali vlog without subtitles, then again with them. Note three phrases in My phrases.", min: 20 },
    { id: "m3", t: "Retell the news", d: "Read one short article on BBC News Nepali and summarise it aloud in three sentences.", min: 20 },
    { id: "m4", t: "Your week in a voice note", d: "Record a one-minute voice note about your week for a Nepali friend.", min: 10 },
    { id: "m5", t: "A childhood story", d: "Tell a partner a story from your childhood. Use the habitual past: -thyo, -thyen.", min: 15 },
    { id: "m6", t: "Ask about a festival", d: "Ask a Nepali speaker three questions about Dashain or Tihar and note their answers.", min: 15 }
  ],
  beyond: [
    { id: "b1", t: "30 minutes, no English", d: "Have a 30-minute conversation without switching to English. When stuck, describe the word instead.", min: 30 },
    { id: "b2", t: "A Nepali film", d: "Watch a Nepali film on YouTube and retell the plot aloud in two minutes.", min: 120 },
    { id: "b3", t: "Podcast mining", d: "Listen to a Nepali podcast episode and add five new expressions to My phrases.", min: 40 },
    { id: "b4", t: "Explain your research", d: "Explain your research to a partner in simple Nepali, as if to a curious neighbour.", min: 20 },
    { id: "b5", t: "Read and discuss", d: "Read an opinion piece in Nepali and discuss it with a partner for ten minutes.", min: 30 },
    { id: "b6", t: "Teach in Nepali", d: "Teach someone three Portuguese phrases while speaking only Nepali.", min: 15 }
  ]
};

// Monthly 60-second recording: same kind of topic each month at a level, so you can hear yourself improve.
C.monologue = {
  A1: { t: "Introduce yourself", d: "Your name, where you're from, where you live, your work, your family.", hints: ["mero naam … ho", "ma … baata aaeko hun", "ma …maa baschhu", "ma … garchhu"] },
  A2: { t: "Yesterday", d: "What you did yesterday, from morning to night.", hints: ["hijo bihaan ma … uthen", "tyaspachhi …", "belukaa …", "raati …"] },
  B1: { t: "Your work", d: "What you do, why you chose it, what you like and what is hard.", hints: ["ma … kaam garchhu", "kinabhane …", "malaai … man parchha", "tara … gaahro chha"] },
  B2: { t: "An opinion", d: "Pick a topic (social media, travel, cities vs villages) and argue your view with an example.", hints: ["mero bichaarmaa …", "udaaharanko laagi …", "tyasaile …", "jasto laagchha"] }
};
})();
