// Grammar course, B1 and B2. Same format as grammar-a.js.
(function () {
const C = window.COURSE;
C.grammar = C.grammar || [];
C.grammar.push(

/* =============================== B1 =============================== */
{ id: "rel", level: "B1", title: "Who, which, that: describing with verbs", sub: "-ne and -eko clauses before the noun",
  blocks: [
    { p: "English builds “the man <i>who speaks Nepali</i>” with <i>who</i> after the noun. Everyday Nepali has no word for this “who”. Instead the verb becomes an adjective and goes <b>before</b> the noun." },
    { table: { head: ["Form", "Time", "Example"], rows: [
      ["<b>-ne</b>", "present, habitual or future: who does / will do", "<b>nepaali bolne</b> maanchhe (a person who speaks Nepali)"],
      ["<b>-eko</b>", "past or completed: who did / has done", "<b>hijo aaeko</b> maanchhe (the man who came yesterday)"],
      ["<b>-dai gareko</b> / <b>-iraheko</b>", "ongoing: who is doing", "<b>kaam gariraheko</b> keti (the girl who is working)"]
    ] } },
    { rule: "Whole clause + <b>-ne / -eko</b> + noun. The clause keeps its own subject (with -le if needed): <b>maile kineko kitaab</b> = the book (that) I bought." },
    { ex: [
      { ne: "मैले हिजो किनेको किताब यही हो।", ro: "maile hijo kineko kitaab yahi ho.", en: "This is the book I bought yesterday." },
      { ne: "नेपाली बोल्ने विदेशी धेरै छैनन्।", ro: "nepaali bolne bideshi dherai chhainan.", en: "There aren't many foreigners who speak Nepali." },
      { ne: "भोलि जाने बस कति बजे छुट्छ?", ro: "bholi jaane bas kati baje chhutchha?", en: "What time does tomorrow's bus leave?", note: "The bus that goes tomorrow." },
      { ne: "तपाईंले भन्नुभएको कुरा मैले बुझेँ।", ro: "tapaainle bhannubhaeko kuraa maile bujhen.", en: "I understood what you said.", note: "kuraa = thing, matter. ‘The thing you said’." },
      { ne: "म बस्ने होटल नजिकै छ।", ro: "ma basne hotel najikai chha.", en: "The hotel where I'm staying is close by." }
    ] },
    { h: "Agreement" },
    { p: "-eko agrees like an adjective: <b>aaeko</b> keto, <b>aaeki</b> keti, <b>aaekaa</b> maanchheharu. -ne never changes." },
    { h: "The formal jo … u pattern" },
    { p: "Formal and written Nepali also has relative pronouns, in pairs: <b>jo … u</b> (who … he), <b>jun … tyo</b> (which … that), <b>jahaan … tyahaan</b> (where … there), <b>jaba … taba</b> (when … then), <b>jati … uti</b> (as much … as)." },
    { ex: [
      { ne: "जो मेहनत गर्छ, ऊ सफल हुन्छ।", ro: "jo mehanat garchha, u saphal hunchha.", en: "Whoever works hard succeeds." },
      { ne: "जहाँ इच्छा, त्यहाँ उपाय।", ro: "jahaan ichchhaa, tyahaan upaaya.", en: "Where there's a will, there's a way." }
    ] },
    { warn: "Don't translate English “who” as <i>ko</i> in statements. <i>Ko</i> only asks “who?”. Say <b>nepaali bolne maanchhe</b>, never <i>maanchhe ko nepaali bolchha</i>." }
  ],
  quiz: [
    { q: "“The man who came yesterday”", a: "hijo aaeko maanchhe", o: ["maanchhe ko hijo aayo", "hijo aaune maanchhe"], why: "Past action → <b>-eko</b> clause before the noun." },
    { q: "“The food I cooked”", a: "maile pakaaeko khaanaa", o: ["ma pakaaeko khaanaa", "khaanaa maile pakaayo"], why: "Transitive clause keeps <b>-le</b>: maile pakaaeko." },
    { q: "“People who live in the mountains”", a: "himaalmaa basne maanchheharu", o: ["himaalmaa baseko maanchheharu", "maanchheharu jo himaalmaa"], why: "Habitual → <b>-ne</b>." },
    { q: "“The girl who is singing”", a: "gaanaa gaairaheki keti", o: ["gaanaa gaaune keto", "gaanaa gaaeko keti ho"], why: "Ongoing → <b>-iraheko</b>, feminine <b>-ki</b>." },
    { q: "“What you said is true.”", a: "tapaainle bhannubhaeko kuraa saanchai ho", o: ["tapaain ke bhannubhayo saanchai ho", "ke bhanne kuraa saanchai ho"], why: "‘The thing you said’ = <b>bhannubhaeko kuraa</b>." }
  ] },

{ id: "if", level: "B1", title: "If, even if, if only", sub: "bhane, -e, -e pani, -eko bhae … -thyo",
  blocks: [
    { table: { head: ["Meaning", "Pattern", "Example"], rows: [
      ["if (real)", "past form + <b>bhane</b>", "paani <b>paryo bhane</b> ma aaundina (if it rains, I won't come)"],
      ["if (short form)", "stem + <b>-e</b>", "samaya <b>bhae</b> aaunus (if you have time, come)"],
      ["even if", "stem + <b>-e pani</b>", "mahango <b>bhae pani</b> kinchhu (I'll buy it even if it's expensive)"],
      ["if not / otherwise", "<b>natra</b>", "chhito jaau, <b>natra</b> bas chhutchha (go fast, otherwise you'll miss the bus)"],
      ["if (unreal: would have)", "<b>-eko bhae</b> … <b>-thyo</b>", "thaahaa <b>bhaeko bhae</b> ma <b>aaunthen</b> (if I'd known, I'd have come)"],
      ["formal “if”", "<b>yadi</b> … bhane", "<b>yadi</b> tapaainlaai samasyaa chha <b>bhane</b> …"]
    ] } },
    { rule: "Real conditions: Nepali puts the “if” verb in the <b>past</b> (<b>paryo bhane</b>), even when talking about the future. The result clause uses present or future." },
    { ex: [
      { ne: "भोलि घाम लाग्यो भने हामी हिँड्न जान्छौँ।", ro: "bholi ghaam laagyo bhane haami hindna jaanchhaun.", en: "If it's sunny tomorrow, we'll go for a walk." },
      { ne: "तपाईंलाई मन लागे आउनुस्।", ro: "tapaainlaai man laage aaunus.", en: "Come if you feel like it." },
      { ne: "पानी परे पनि म जान्छु।", ro: "paani pare pani ma jaanchhu.", en: "Even if it rains, I'm going." },
      { ne: "पैसा भएको भए म घर किन्थेँ।", ro: "paisaa bhaeko bhae ma ghar kinthen.", en: "If I had money, I'd buy a house." },
      { ne: "तिमीले भनेको भए म सहयोग गर्थेँ।", ro: "timile bhaneko bhae ma sahayog garthen.", en: "If you had told me, I would have helped." }
    ] },
    { h: "The -e form" },
    { p: "Stem + <b>-e</b>: <b>gare</b> (if one does), <b>khaae</b>, <b>gae</b> (from jaanu), <b>bhae</b> (from hunu), <b>aae</b>. It has no person ending, so it works for everyone." },
    { warn: "Unreal conditions use the habitual past (<b>-thyo</b>) as “would”. There's no separate “would” word. <b>ma aaunthen</b> = I used to come / I would have come; context decides." },
    { p: "Negative: <b>na-</b> in front: <b>naaae</b> (if he doesn't come), <b>nagare</b> (if you don't do it). <b>samaya bhaena bhane</b> = if there's no time." }
  ],
  quiz: [
    { q: "“If it rains, I'll stay at home.”", a: "paani paryo bhane ma gharmai baschhu", o: ["paani parchha bhane ma gharmai basen", "paani paryo ma gharmai baschhu"], why: "Real condition: <b>past + bhane</b>, result in present." },
    { q: "“Even if it's far, I'll walk.”", a: "taadhaa bhae pani ma hindchhu", o: ["taadhaa bhane ma hindchhu", "taadhaa bhaeko bhae ma hindchhu"], why: "Even if = <b>-e pani</b>." },
    { q: "“If I had known, I would have come.”", a: "thaahaa bhaeko bhae ma aaunthen", o: ["thaahaa bhayo bhane ma aaunchhu", "thaahaa bhae pani ma aaen"], why: "Unreal past: <b>-eko bhae … -thyo</b>." },
    { q: "“Hurry, otherwise we'll be late.”", a: "chhito garaun, natra dhilo hunchha", o: ["chhito garaun, bhane dhilo hunchha", "chhito garaun, pani dhilo hunchha"], why: "<b>natra</b> = otherwise." }
  ] },

{ id: "when", level: "B1", title: "When, before, after, until", sub: "-daa, -epachhi, -nubhandaa agaadi, -unjel",
  blocks: [
    { p: "Time clauses are made by adding an ending to the verb, not with a separate word like English “when”." },
    { table: { head: ["Meaning", "Ending", "Example"], rows: [
      ["when, while", "<b>-daa</b>", "nepaal <b>jaandaa</b> (when going to Nepal), ma saano <b>chhandaa</b> (when I was small)"],
      ["after", "<b>-epachhi</b>", "khaanaa <b>khaaepachhi</b> (after eating)"],
      ["before", "<b>-nubhandaa agaadi</b> / <b>-nu aghi</b>", "<b>sutnubhandaa agaadi</b> (before sleeping)"],
      ["until", "<b>na-</b> … <b>-unjel</b>", "u <b>naaaunjel</b> (until he comes)"],
      ["as long as", "<b>-unjel</b>", "ma <b>baanchunjel</b> (as long as I live)"],
      ["as soon as", "<b>-ne bittikai</b>", "<b>pugne bittikai</b> phon garchhu (I'll call as soon as I arrive)"],
      ["while doing", "<b>-dai</b> / <b>-daa-dai</b>", "<b>hindadai</b> kuraa garaun (let's talk as we walk)"],
      ["since", "<b>-edekhi</b>", "<b>aaedekhi</b> (since coming)"]
    ] } },
    { ex: [
      { ne: "म काठमाडौं पुग्दा राति भइसकेको थियो।", ro: "ma kaathmaadaun pugdaa raati bhaisakeko thiyo.", en: "When I reached Kathmandu it was already night." },
      { ne: "खाना खाएपछि हामी चिया खान्छौँ।", ro: "khaanaa khaaepachhi haami chiyaa khaanchhaun.", en: "After the meal we have tea." },
      { ne: "सुत्नुभन्दा अगाडि दाँत माझ्नुहोस्।", ro: "sutnubhandaa agaadi daant maajhnuhos.", en: "Brush your teeth before going to bed." },
      { ne: "म नआउन्जेल यहीँ पर्खनुहोस्।", ro: "ma naaaunjel yahin parkhanuhos.", en: "Wait right here until I come." },
      { ne: "नेपाल आएदेखि म दाल भात मात्र खान्छु।", ro: "nepaal aaedekhi ma daal bhaat maatra khaanchhu.", en: "Since coming to Nepal I only eat daal bhaat." }
    ] },
    { warn: "<b>Until</b> uses a negative verb: <b>u naaaunjel</b> = until he comes (literally, as long as he doesn't come). Without na-, <b>-unjel</b> means “as long as”." },
    { warn: "The present “when” of <b>chha</b> is <b>chhandaa</b>: <b>ma saano chhandaa</b> (when I was little), <b>ghar chhandaa</b> (while at home)." },
    { p: "Formal pairing: <b>jaba</b> … <b>taba</b> (when … then): <i>jaba ma pugen, taba sabai gaisakekaa thie</i>." }
  ],
  quiz: [
    { q: "“When I was a child…”", a: "ma saano chhandaa", o: ["ma saano thiyo", "ma saano bhaepachhi"], why: "<b>chhandaa</b> = when (it) was." },
    { q: "“After work”", a: "kaam sakiepachhi", o: ["kaam sakinubhandaa agaadi", "kaam saknunjel"], why: "After = <b>-epachhi</b>." },
    { q: "“Wait until the rain stops.” (rokinu = stop)", a: "paani narokinjel parkhanus", o: ["paani rokinjel parkhanus", "paani rokiepachhi parkhanus"], why: "Until = <b>na- … -njel</b>." },
    { q: "“Before leaving, call me.”", a: "jaanubhandaa agaadi malaai phon garnus", o: ["gaepachhi malaai phon garnus", "jaandaa malaai phon garnus"], why: "Before = <b>-nubhandaa agaadi</b>." },
    { q: "“As soon as I arrive”", a: "pugne bittikai", o: ["pugepachhi maatra", "pugdai"], why: "<b>-ne bittikai</b> = as soon as." }
  ] },

{ id: "report", level: "B1", title: "Reported speech: he said, they say", sub: "bhanera, bhanne, ki, re",
  blocks: [
    { p: "Nepali usually reports speech by <b>quoting it as it was said</b>, then adding <b>bhanera</b> (saying) or <b>bhanyo</b> (said). Tenses and pronouns stay as the speaker said them." },
    { rule: "[Exact words] + <b>bhanera</b> / <b>bhanyo</b> / <b>bhannubhayo</b>. No tense shift: “he said <i>he would come</i>” = <b>u “aaunchhu” bhanyo</b>." },
    { ex: [
      { ne: "उसले भोलि आउँछु भन्यो।", ro: "usle bholi aaunchhu bhanyo.", en: "He said he'd come tomorrow.", note: "Literally: he said “I'll come tomorrow”." },
      { ne: "उहाँले मलाई पर्खनू भन्नुभयो।", ro: "uhaanle malaai parkhanu bhannubhayo.", en: "He told me to wait." },
      { ne: "म ढिलो हुन्छु भनेर फोन गरेँ।", ro: "ma dhilo hunchhu bhanera phon garen.", en: "I phoned to say I'd be late." },
      { ne: "बस ढिलो आउँछ रे।", ro: "bas dhilo aaunchha re.", en: "Apparently the bus is coming late.", note: "re = so they say." },
      { ne: "आज बिदा हो रे।", ro: "aaja bidaa ho re.", en: "They say today is a holiday." }
    ] },
    { h: "re: hearsay" },
    { p: "Put <b>re</b> at the end of any sentence to show you're passing on something you heard: <b>u biraami chha re</b> (I hear he's ill). It's extremely common and makes your Nepali sound natural. Asking someone to pass on a message: <b>bholi aaunus re</b> (he says please come tomorrow)." },
    { h: "ki: “that” (formal)" },
    { p: "More formal and Hindi-like: <b>uhaanle bhannubhayo ki uhaan bholi aaunuhunchha</b> (he said that he would come tomorrow). Correct, but in conversation the quote + bhanera style is more natural." },
    { h: "bhanne: “called”, “that”" },
    { list: [
      "<b>Raam bhanne maanchhe</b> = a man called Ram",
      "<b>u aaunchha bhanne kuraa</b> = the news/claim that he's coming",
      "<b>yaslaai nepaalimaa ke bhanchhan?</b> = what do they call this in Nepali?"
    ] },
    { warn: "Reported questions also quote: <b>usle “kahaan jaane?” bhanera sodhyo</b> (he asked where we should go). <b>sodhnu</b> = to ask (a question); <b>maagnu</b> = to ask for (something)." }
  ],
  quiz: [
    { q: "“She said she was tired.”", a: "unle “ma thaakeki chhu” bhanin", o: ["unle u thaakeki thiin bhanin", "unle thaakeki re bhanchhin"], why: "Quote the exact words + <b>bhanin</b>; no tense shift." },
    { q: "You heard the shop is closed today. Say it:", a: "aaja pasal banda chha re", o: ["aaja pasal banda chha bhane", "aaja pasal banda ki chha"], why: "Hearsay → sentence + <b>re</b>." },
    { q: "“What do you call this in Nepali?”", a: "yaslaai nepaalimaa ke bhanchhan?", o: ["yo nepaalimaa ke bhanyo?", "yaslaai nepaalimaa ke bolchha?"], why: "<b>bhannu</b> = to call / say; ‘they call it’ = bhanchhan." },
    { q: "“A village called Ghandruk”", a: "ghandruk bhanne gaaun", o: ["ghandruk bhanera gaaun", "ghandruk re gaaun"], why: "<b>bhanne</b> = called / named." }
  ] },

{ id: "particles", level: "B1", title: "Small words, big meaning: particles", sub: "ni, na, ta, re, hai, po, nai, pani, chaahin",
  blocks: [
    { p: "Particles are the short words that give spoken Nepali its tone. Textbooks skip them; Nepalis use them in almost every sentence. Getting them right is what makes you sound friendly instead of robotic." },
    { table: { head: ["Particle", "What it does", "Example"], rows: [
      ["<b>na</b>", "softens a request: “do…, please”", "basnus <b>na</b> (do sit down)"],
      ["<b>ta</b>", "contrast, “as for”; also softens", "ma <b>ta</b> jaanchhu (well, I'm going); bhannus <b>ta</b> (go on, tell me)"],
      ["<b>ni</b>", "“and…?”; “you know”, “of course”", "tapaainlaai <b>ni</b>? (and you?); aaen <b>ni</b> (I came, didn't I)"],
      ["<b>re</b>", "hearsay: they say", "aaja bidaa <b>re</b> (they say it's a holiday)"],
      ["<b>hai</b>", "“OK?”, friendly confirmation", "bholi bhetaun <b>hai</b> (see you tomorrow, OK?)"],
      ["<b>po</b>", "surprise, contrary to expectation", "o, tapaain <b>po</b>! (oh, it's you!)"],
      ["<b>nai</b> / <b>-ai</b>", "emphasis: exactly, right, very", "ahile <b>nai</b> (right now), yahin (right here), sabai (all)"],
      ["<b>pani</b>", "also, too; even", "ma <b>pani</b> (me too); ek paisaa <b>pani</b> (not even one paisa)"],
      ["<b>chaahin</b>", "picks out one thing: “as for this one”", "yo <b>chaahin</b> kati ho? (and this one, how much?)"],
      ["<b>ra</b>", "in questions: “really?”, doubt", "ho <b>ra</b>? (really?)"],
      ["<b>la</b>", "OK, well then; here you are", "<b>la</b>, jaaaun (OK, let's go)"],
      ["<b>ke</b> (at the start)", "formal yes/no question marker", "<b>ke</b> tapaain nepaali hunuhunchha?"]
    ] } },
    { ex: [
      { ne: "म त थाकेँ, तिमी नि?", ro: "ma ta thaaken, timi ni?", en: "Well, I'm tired. What about you?" },
      { ne: "एक छिन पर्खनुस् न।", ro: "ek chhin parkhanus na.", en: "Please wait a moment." },
      { ne: "ओहो, आज पो शुक्रबार!", ro: "oho, aaja po shukrabaar!", en: "Oh, today's Friday!", note: "po: you just realised, contrary to what you thought." },
      { ne: "म आजै जान्छु।", ro: "ma aajai jaanchhu.", en: "I'm going this very day.", note: "aaja + -ai = today itself." },
      { ne: "अनि यो चाहिँ के हो?", ro: "ani yo chaahin ke ho?", en: "And what's this one?" },
      { ne: "ल ठिक छ, भोलि भेटौँ है।", ro: "la thik chha, bholi bhetaun hai.", en: "OK then, see you tomorrow." }
    ] },
    { h: "The emphatic -ai" },
    { p: "Adding <b>-ai</b> (or <b>nai</b>) to a word means “exactly / very / -self”: <b>yahaan → yahin</b> (right here), <b>ahile → ahilyai</b> (right now), <b>ghar → gharmai</b> (right at home), <b>sabai</b> (all, every single), <b>thikkai</b> (just right / so-so), <b>ekai chhin</b> (just a moment)." },
    { warn: "Particles change tone, not facts. Overusing <b>ta</b> can sound argumentative; <b>na</b> on its own after a command sounds pleading. Copy what you hear before experimenting." }
  ],
  quiz: [
    { q: "Soften: “Please sit down.”", a: "basnus na", o: ["basnus re", "basnus po"], why: "<b>na</b> softens requests." },
    { q: "You heard it'll rain tomorrow. Add the hearsay particle:", a: "bholi paani parchha re", o: ["bholi paani parchha ni", "bholi paani parchha hai"], why: "<b>re</b> = they say." },
    { q: "“Me too.”", a: "ma pani", o: ["ma ni", "ma ta"], why: "<b>pani</b> = also, too." },
    { q: "“Right now!”", a: "ahile nai!", o: ["ahile pani!", "ahile re!"], why: "<b>nai</b> / -ai = exactly, right." },
    { q: "“Really?” (surprised)", a: "ho ra?", o: ["ho ni?", "ho hai?"], why: "<b>ra</b> in a question expresses doubt or surprise." }
  ] },

{ id: "conn", level: "B1", title: "Joining ideas: because, so, but, although", sub: "Connectors for longer sentences",
  blocks: [
    { table: { head: ["Meaning", "Nepali", "Example"], rows: [
      ["and", "<b>ra</b> (nouns), <b>ani</b> (clauses)", "ma thaaken, <b>ani</b> suten"],
      ["but", "<b>tara</b>, <b>tarapani</b>", "mahango chha, <b>tara</b> raamro chha"],
      ["because", "<b>kinabhane</b> (at start of reason)", "ma aaina, <b>kinabhane</b> biraami thien"],
      ["because (ending)", "<b>-ekaale</b> / <b>-eko kaaranle</b>", "biraami <b>bhaekaale</b> aaina (I didn't come because I was ill)"],
      ["so, therefore", "<b>tyasaile</b> / <b>tyasakaaran</b>", "paani paryo, <b>tyasaile</b> gharmai basen"],
      ["although, even though", "<b>-e pani</b>, <b>bhae pani</b>", "garib <b>bhae pani</b> khusi chhan"],
      ["nevertheless", "<b>taapani</b>, <b>pheri pani</b>", "<b>taapani</b> ma jaanchhu"],
      ["instead, rather", "<b>baru</b>", "<b>baru</b> bholi jaaaun (let's go tomorrow instead)"],
      ["either … or", "<b>ki</b> … <b>ki</b>", "<b>ki</b> aaja <b>ki</b> bholi"],
      ["neither … nor", "<b>na</b> … <b>na</b>", "<b>na</b> paani <b>na</b> bijuli (neither water nor electricity)"],
      ["in order to", "<b>-na</b> / <b>-nako laagi</b>", "nepaali <b>sikna</b> aaen (I came to learn Nepali)"],
      ["for the sake of", "<b>-ko laagi</b>", "<b>bachchaako laagi</b> (for the child)"],
      ["whereas", "<b>jabaki</b>", "u dhani chha, <b>jabaki</b> uskaa daaju garib chhan"]
    ] } },
    { rule: "Spoken Nepali prefers verb endings (<b>-ekaale</b>, <b>-e pani</b>, <b>-na</b>) to separate connector words. Use the endings and you'll sound much more natural." },
    { ex: [
      { ne: "बाटो बन्द भएकाले हामी ढिलो पुग्यौँ।", ro: "baato banda bhaekaale haami dhilo pugyaun.", en: "We arrived late because the road was closed." },
      { ne: "म नेपाली सिक्न चाहन्छु, किनभने मेरा धेरै नेपाली साथी छन्।", ro: "ma nepaali sikna chaahanchhu, kinabhane meraa dherai nepaali saathi chhan.", en: "I want to learn Nepali because I have many Nepali friends." },
      { ne: "थाकेको भए पनि ऊ काम गरिरह्यो।", ro: "thaakeko bhae pani u kaam garirahyo.", en: "Even though he was tired, he kept working." },
      { ne: "म नेपाली सिक्न नेपाल आएँ।", ro: "ma nepaali sikna nepaal aaen.", en: "I came to Nepal to learn Nepali." }
    ] },
    { warn: "<b>kinabhane</b> introduces the reason (like “because”); <b>kina</b> alone asks “why?”. Don't answer a <i>kina</i> question with <i>kina</i>: answer with a <b>-ekaale</b> clause or <b>kinabhane …</b>." }
  ],
  quiz: [
    { q: "“Because it rained, the match was cancelled.” (natural)", a: "paani parekaale khel radda bhayo", o: ["kina paani paryo, khel radda bhayo", "paani paryo kinabhane khel radda bhayo"], why: "Reason as ending: <b>-ekaale</b> before the result." },
    { q: "“It's expensive, but good.”", a: "mahango chha, tara raamro chha", o: ["mahango chha, baru raamro chha", "mahango chha, tyasaile raamro chha"], why: "<b>tara</b> = but." },
    { q: "“I came to see you.”", a: "ma tapaainlaai bhetna aaen", o: ["ma tapaainlaai bhetera aaen", "ma tapaainlaai bhetne aaen"], why: "Purpose = <b>-na</b> + motion verb." },
    { q: "“Neither tea nor coffee”", a: "na chiyaa na kaphi", o: ["ki chiyaa ki kaphi", "chiyaa pani kaphi"], why: "<b>na … na</b> = neither … nor." }
  ] },

{ id: "neg", level: "B1", title: "Saying no: the two negatives", sub: "na- prefix vs -daina/-ena suffix, nothing, nobody, only",
  blocks: [
    { p: "Nepali has two ways to make a verb negative, and each form of the verb uses one or the other." },
    { table: { head: ["Negative by…", "Used in", "Examples"], rows: [
      ["<b>suffix</b> (ending changes)", "present, past, perfect, continuous, was", "garchha → gar<b>daina</b>; garyo → gar<b>ena</b>; chha → <b>chhaina</b>; thiyo → <b>thiena</b>"],
      ["<b>prefix na-</b>", "commands, -era/-i forms, -ne/-eko, -laa, -e (if), -nu, -na", "<b>na</b>garnus, <b>na</b>khaai, <b>na</b>jaane, <b>na</b>gareko, <b>na</b>aaulaa, <b>na</b>bhae"]
    ] } },
    { ex: [
      { ne: "नआउने मान्छेलाई कुर्नु पर्दैन।", ro: "naaaune maanchhelaai kurnu pardaina.", en: "No need to wait for people who aren't coming." },
      { ne: "मैले नबुझेको कुरा फेरि भन्नुस्।", ro: "maile nabujheko kuraa pheri bhannus.", en: "Please repeat what I didn't understand." },
      { ne: "मैले खाना खाएको छैन।", ro: "maile khaanaa khaaeko chhaina.", en: "I haven't eaten." }
    ] },
    { h: "Nobody, nothing, never" },
    { p: "Combine the “some-” word with <b>pani</b> (even) and a negative verb. Nepali uses double negatives, and they're correct." },
    { table: { head: ["Nepali", "Meaning"], rows: [
      ["<b>kohi pani</b> … negative", "nobody: <i>kohi pani aaena</i> (nobody came)"],
      ["<b>kehi pani</b> … negative", "nothing: <i>kehi pani chhaina</i> (there's nothing)"],
      ["<b>kahin pani</b> … negative", "nowhere: <i>kahin pani gaina</i> (I didn't go anywhere)"],
      ["<b>kahilyai</b> … negative", "never: <i>kahilyai khaaeko chhaina</i> (I've never eaten it)"],
      ["<b>aba</b> … negative", "not any more: <i>aba basdina</i> (I don't live here any more)"],
      ["<b>ajhai</b> … negative", "not yet: <i>ajhai aaeko chhaina</i> (he hasn't come yet)"]
    ] } },
    { h: "Only" },
    { p: "<b>maatra</b> (or <b>maatrai</b>) after the word = only: <b>ek jana maatra</b> (only one person), <b>paani maatra</b> (only water)." },
    { warn: "The ma forms are special: <b>gardina</b> (I don't), <b>garina</b> (I didn't), <b>chhaina</b> (I'm not), <b>hoina</b> (I'm not [a…]). They're written with a final nasal (गर्दिनँ, गरिनँ, छैनँ, होइनँ)." }
  ],
  quiz: [
    { q: "“Nobody knows.”", a: "kaslaai pani thaahaa chhaina", o: ["kaslaai pani thaahaa chha", "kohi thaahaa chhaina"], why: "<b>kohi pani</b> (here kaslaai pani, because of the malaai pattern) + negative." },
    { q: "“He hasn't arrived yet.”", a: "u ajhai aaipugeko chhaina", o: ["u ajhai aaipugyo", "u aba aaipugeko chhaina"], why: "Not yet = <b>ajhai</b> + negative perfect." },
    { q: "“Don't do it.” (polite)", a: "nagarnus", o: ["gardina", "garnus chhaina"], why: "Commands take the <b>na-</b> prefix." },
    { q: "“The people who didn't come”", a: "naaaekaa maanchheharu", o: ["aaenan maanchheharu", "aaundaina maanchheharu"], why: "-eko forms take <b>na-</b>." },
    { q: "“Only two”", a: "dui wataa maatra", o: ["dui wataa pani", "dui wataa nai pani"], why: "<b>maatra</b> = only." }
  ] },

{ id: "wish", level: "B1", title: "Wishes, blessings and “let”", sub: "-os, -un, and -na dinu",
  blocks: [
    { p: "The <b>optative</b> (wish form) expresses “may it…”, “let it…”. You'll hear it in every blessing and greeting at festivals, weddings and goodbyes." },
    { table: { head: ["Person", "Ending", "Example"], rows: [
      ["he / she / it", "<b>-os</b>", "<b>hos</b> (may it be), <b>garos</b> (let him do), <b>aaos</b> (let him come)"],
      ["they, or respect", "<b>-un</b>", "<b>garun</b> (may they do)"],
      ["you (polite)", "<b>-nuhos</b>", "<b>khusi rahanuhos</b> (be happy)"],
      ["I / we", "<b>-un / -aun</b>", "<b>jaaun?</b> (shall I go?), <b>jaaaun</b> (let's go)"]
    ] } },
    { ex: [
      { ne: "तपाईंको यात्रा सफल होस्।", ro: "tapaainko yaatraa saphal hos.", en: "Have a good journey.", note: "May your journey be successful." },
      { ne: "नयाँ वर्षको शुभकामना!", ro: "nayaan barshako shubhakaamanaa!", en: "Happy New Year!", note: "shubhakaamanaa = good wishes." },
      { ne: "छिट्टै निको होस्।", ro: "chhittai niko hos.", en: "Get well soon." },
      { ne: "ऊ आओस्, म पर्खन्छु।", ro: "u aaos, ma parkhanchhu.", en: "Let him come; I'll wait." },
      { ne: "म पनि जाऊँ?", ro: "ma pani jaaun?", en: "Shall I come too?" }
    ] },
    { h: "Let someone do: -na dinu" },
    { p: "To allow, use the infinitive in <b>-na</b> + <b>dinu</b> (give): <b>malaai jaana dinus</b> (let me go), <b>bachchaalaai khelna deu</b> (let the child play), <b>malaai sochna dinus</b> (let me think)." },
    { h: "Wanting someone else to do something" },
    { p: "<b>chaahanu</b> + the optative: <b>ma chaahanchhu ki timi pani aau</b>, or more naturally <b>timi pani aau bhanne ma chaahanchhu</b> (I want you to come too)." },
    { warn: "Festival greetings follow a pattern: <b>[festival]-ko shubhakaamanaa!</b> → <i>dashaiko shubhakaamanaa</i>, <i>tihaarko shubhakaamanaa</i>, <i>janmadinko shubhakaamanaa</i> (happy birthday)." }
  ],
  quiz: [
    { q: "“Get well soon.”", a: "chhittai niko hos", o: ["chhittai niko hunchha", "chhittai niko bhayo"], why: "Wish → <b>hos</b> (may it be)." },
    { q: "“Let me speak.”", a: "malaai bolna dinus", o: ["malaai bolnuhos", "ma bolos"], why: "Let = <b>-na dinu</b>." },
    { q: "“Happy birthday!”", a: "janmadinko shubhakaamanaa!", o: ["janmadin hos!", "janmadinmaa dhanyabaad!"], why: "<b>-ko shubhakaamanaa</b> = best wishes for…" },
    { q: "“Shall I sit here?”", a: "ma yahaan basun?", o: ["ma yahaan baschhu?", "ma yahaan basos?"], why: "First person optative <b>-un</b> asks “shall I?”." }
  ] },

/* =============================== B2 =============================== */
{ id: "compound", level: "B2", title: "Compound verbs: adding colour", sub: "-idinu, -ihaalnu, -isaknu, -iraakhnu, -irahanu, -na thaalnu, -na laagnu",
  blocks: [
    { p: "Nepali often adds a second verb after the main one. The second verb loses its own meaning and adds a shade: finished, for someone, quickly, already, keeps on. This is where Nepali gets its flavour." },
    { rule: "Main verb in the <b>-i</b> form (gar<b>i</b>, khaa<b>i</b>, ga<b>i</b> from jaanu) + helper verb conjugated as usual." },
    { table: { head: ["Helper", "Adds", "Example"], rows: [
      ["<b>dinu</b> (give)", "for someone else's benefit; polite", "<b>garidinus</b> (please do it for me), <b>lekhidiyo</b> (wrote it for me)"],
      ["<b>haalnu</b> (throw in)", "quickly, decisively, go ahead", "<b>khaaihaalnus</b> (go ahead and eat), <b>birsihaalen</b> (I clean forgot)"],
      ["<b>saknu</b> (finish)", "already, completely", "<b>khaaisaken</b> (I've already eaten), <b>gaisakyo</b> (he's already left)"],
      ["<b>raakhnu</b> (keep)", "in advance, for later", "<b>lekhiraakhnus</b> (write it down for later), <b>bujhiraakhnus</b> (bear in mind)"],
      ["<b>rahanu</b> (stay)", "keeps on, continuously", "<b>padhirahanus</b> (keep studying), <b>pariraheko chha</b> (keeps raining)"],
      ["<b>-na thaalnu</b>", "begin to", "paani <b>parna thaalyo</b> (it started to rain)"],
      ["<b>-na laagnu</b>", "be about to", "bas <b>chhutna laagyo</b> (the bus is about to leave)"],
      ["<b>-na chhodnu</b>", "stop doing", "churot <b>khaana chhoden</b> (I quit smoking)"],
      ["<b>-dai jaanu</b>", "gradually more and more", "mahango <b>hundai gayo</b> (it got more and more expensive)"],
      ["<b>-i pathaaunu</b>", "do and send off", "<b>lekhi pathaaunus</b> (write and send it)"]
    ] } },
    { ex: [
      { ne: "मलाई यो चिठी पढिदिनुहोस् न।", ro: "malaai yo chithi padhidinuhos na.", en: "Could you read this letter for me?" },
      { ne: "मैले खाना खाइसकेँ।", ro: "maile khaanaa khaaisaken.", en: "I've already eaten." },
      { ne: "आउनुहोस्, खाइहाल्नुहोस्।", ro: "aaunuhos, khaaihaalnuhos.", en: "Come on, go ahead and eat." },
      { ne: "नेपाली सिकिरहनुहोस्।", ro: "nepaali sikirahanuhos.", en: "Keep learning Nepali." },
      { ne: "दिन छोटो हुँदै गयो।", ro: "din chhoto hundai gayo.", en: "The days got shorter and shorter." }
    ] },
    { warn: "<b>-idinus</b> is the most polite way to ask a favour. <b>kholnus</b> = open (it); <b>kholidinus</b> = would you open it for me. Use it with strangers and you'll get warmer responses." },
    { p: "The -i form of vowel stems: <b>khaai</b> (khaanu), <b>aai</b> (aaunu), <b>gai</b> (jaanu), <b>bhai</b> (hunu), <b>dii</b> (dinu), <b>lii</b> (linu)." }
  ],
  quiz: [
    { q: "Politely: “Could you write it for me?”", a: "lekhidinus na", o: ["lekhnus na", "lekhisaknus"], why: "<b>-idinu</b> = do for me." },
    { q: "“He has already left.”", a: "u gaisakyo", o: ["u jaana thaalyo", "u gaihaalyo"], why: "Already = <b>-isaknu</b>." },
    { q: "“It started to snow.”", a: "hiun parna thaalyo", o: ["hiun parisakyo", "hiun parna laagyo"], why: "Begin = <b>-na thaalnu</b>; -na laagnu = about to." },
    { q: "“I quit drinking alcohol.” (raksi)", a: "maile raksi khaana chhoden", o: ["maile raksi khaaisaken", "maile raksi khaana thaalen"], why: "Stop = <b>-na chhodnu</b>." },
    { q: "“Prices kept going up.”", a: "mol badhdai gayo", o: ["mol badhna laagyo", "mol badhisakyo"], why: "Gradually more = <b>-dai jaanu</b>." }
  ] },

{ id: "caus", level: "B2", title: "Causatives: make someone do", sub: "-aaunu, and verb pairs like khulnu / kholnu",
  blocks: [
    { p: "Adding <b>-aaunu</b> to a stem turns “do” into “make/have someone do”. Many everyday verbs are built this way." },
    { table: { head: ["Base", "Causative", "Meaning"], rows: [
      ["garnu (do)", "<b>garaaunu</b>", "have done, get done"],
      ["siknu (learn)", "<b>sikaaunu</b>", "teach"],
      ["padhnu (read, study)", "<b>padhaaunu</b>", "teach (a subject)"],
      ["dekhnu (see)", "<b>dekhaaunu</b>", "show"],
      ["sunnu (hear)", "<b>sunaaunu</b>", "tell (a story), play (music)"],
      ["bujhnu (understand)", "<b>bujhaaunu</b>", "explain"],
      ["uthnu (get up)", "<b>uthaaunu</b>", "wake someone, lift"],
      ["basnu (sit)", "<b>basaaunu</b>", "seat someone"],
      ["haansnu (laugh)", "<b>hansaaunu</b>", "make laugh"],
      ["<b>khaanu</b> (eat)", "<b>khuwaaunu</b>", "feed"],
      ["<b>piunu</b> (drink)", "<b>pilaaunu</b>", "give to drink"]
    ] } },
    { ex: [
      { ne: "उहाँले मलाई नेपाली सिकाउनुहुन्छ।", ro: "uhaanle malaai nepaali sikaaunuhunchha.", en: "She teaches me Nepali." },
      { ne: "मलाई बाटो देखाउनुहोस्।", ro: "malaai baato dekhaaunuhos.", en: "Please show me the way." },
      { ne: "आमाले बच्चालाई खाना खुवाउनुभयो।", ro: "aamaale bachchaalaai khaanaa khuwaaunubhayo.", en: "Mother fed the child." },
      { ne: "मैले कोठा सफा गराएँ।", ro: "maile kothaa saphaa garaaen.", en: "I had the room cleaned." }
    ] },
    { h: "Pairs: it happens vs someone does it" },
    { p: "Some verbs come in pairs where a vowel change turns “it happens” into “someone does it”. Using the wrong one is a classic mistake." },
    { table: { head: ["It happens (intransitive)", "Someone does it (transitive)"], rows: [
      ["<b>khulnu</b>: dhokaa khulyo (the door opened)", "<b>kholnu</b>: maile dhokaa kholen (I opened the door)"],
      ["<b>tutnu</b>: gilaas tutyo (the glass broke)", "<b>todnu</b>: usle gilaas todyo (he broke the glass)"],
      ["<b>marnu</b>: die", "<b>maarnu</b>: kill"],
      ["<b>chhutnu</b>: bas chhutyo (the bus left / I missed it)", "<b>chhodnu</b>: leave something, quit"],
      ["<b>bannu</b>: be made, be built", "<b>banaaunu</b>: make, build"],
      ["<b>suru hunu</b>: begin", "<b>suru garnu</b>: begin something"],
      ["<b>banda hunu</b>: close (by itself)", "<b>banda garnu</b>: close something"]
    ] } },
    { warn: "Noun + <b>hunu</b> = it happens; noun + <b>garnu</b> = someone does it. <b>kaam suru bhayo</b> (work began) vs <b>maile kaam suru garen</b> (I began the work). Transitive ones need -le in the past." }
  ],
  quiz: [
    { q: "“Please explain this to me.”", a: "malaai yo bujhaaidinus", o: ["malaai yo bujhidinus", "malaai yo bujhnus"], why: "Explain = causative of understand: <b>bujhaaunu</b>." },
    { q: "“The shop opened at ten.”", a: "pasal das baje khulyo", o: ["pasal das baje kholyo", "pasalle das baje kholyo"], why: "It happened by itself → <b>khulnu</b>." },
    { q: "“Who broke the window?”", a: "jhyaal kasle todyo?", o: ["jhyaal ko tutyo?", "jhyaal kasle tutyo?"], why: "Someone did it → <b>todnu</b> with -le." },
    { q: "“She fed the dog.”", a: "unle kukurlaai khuwaain", o: ["unle kukurlaai khaain", "uni kukurlaai khaaeki"], why: "Feed = <b>khuwaaunu</b> (irregular causative of khaanu)." },
    { q: "“I missed the bus.”", a: "mero bas chhutyo", o: ["maile bas chhoden", "ma bas chhutyo"], why: "Missing it = it left without you: <b>bas chhutyo</b>." }
  ] },

{ id: "pass", level: "B2", title: "Passive and impersonal: it is done", sub: "-inu: garinchha, bhaninchha, gariyo",
  blocks: [
    { p: "Stem + <b>-i-</b> + ending makes a passive or impersonal verb: <b>garinchha</b> (is done / one does), <b>gariyo</b> (was done). The doer is usually left out." },
    { table: { cap: "Passive forms", head: ["", "garnu", "bolnu", "khaanu"], rows: [
      ["present", "<b>garinchha</b>", "<b>bolinchha</b>", "<b>khaainchha</b>"],
      ["present negative", "<b>garindaina</b>", "<b>bolindaina</b>", "<b>khaaindaina</b>"],
      ["past", "<b>gariyo</b>", "<b>boliyo</b>", "<b>khaaiyo</b>"],
      ["perfect", "<b>garieko chha</b>", "<b>bolieko chha</b>", "<b>khaaieko chha</b>"]
    ] } },
    { ex: [
      { ne: "नेपालमा १२० भन्दा बढी भाषा बोलिन्छ।", ro: "nepaalmaa ek saya bisbhandaa badhi bhaashaa bolinchha.", en: "More than 120 languages are spoken in Nepal." },
      { ne: "यसलाई नेपालीमा के भनिन्छ?", ro: "yaslaai nepaalimaa ke bhaninchha?", en: "What is this called in Nepali?" },
      { ne: "दसैँमा टीका लगाइन्छ।", ro: "dasainmaa tikaa lagaainchha.", en: "At Dashain, tika is put on." },
      { ne: "बैठक भोलिलाई सारियो।", ro: "baithak bholilaai saariyo.", en: "The meeting was moved to tomorrow." },
      { ne: "यहाँ धूमपान गर्न पाइँदैन।", ro: "yahaan dhumpaan garna paaindaina.", en: "Smoking is not allowed here." }
    ] },
    { h: "Where you'll meet it" },
    { list: [
      "<b>Recipes and instructions</b>: <i>pyaaj kaatinchha, ani taatinchha</i> (the onion is cut, then fried)",
      "<b>Customs</b>: <i>yasto garinchha</i> (this is how it's done)",
      "<b>News</b>: <i>prahariko anusaar … giraphtaar gariyo</i> (according to the police … was arrested)",
      "<b>Can't</b>: the negative often means “one can't”: <i>yo khaaindaina</i> (this can't be eaten / one doesn't eat this), <i>bolna sakindaina</i>"
    ] },
    { warn: "Irregular: <b>laanu</b> (take someone somewhere) → <b>lagiyo</b> (was taken): <i>unlaai aspataal lagiyo</i> (he was taken to hospital). <b>dinu</b> → <b>diinchha</b>, <b>linu</b> → <b>liinchha</b>." },
    { p: "Formal passive with a doer uses <b>-dwaaraa</b> (by): <i>sarakaardwaaraa ghoshanaa gariyo</i> (it was announced by the government). Rare in speech." }
  ],
  quiz: [
    { q: "“Nepali is spoken here.”", a: "yahaan nepaali bolinchha", o: ["yahaan nepaali bolchha", "yahaan nepaalile bolyo"], why: "Passive present: stem + <b>-inchha</b>." },
    { q: "“How do you say this in Nepali?” (impersonal)", a: "yo nepaalimaa kasari bhaninchha?", o: ["yo nepaalimaa kasari bhanchhu?", "yo nepaalimaa kasari bhanyo?"], why: "One says → <b>bhaninchha</b>." },
    { q: "“The road was opened.”", a: "baato kholiyo", o: ["baato kholyo", "baato khulaayo"], why: "Passive past: <b>-iyo</b>." },
    { q: "“This can't be eaten.”", a: "yo khaaindaina", o: ["yo khaandaina", "yo nakhaanus"], why: "Negative passive = can't / isn't done." }
  ] },

{ id: "guess", level: "B2", title: "Probably, apparently, it turns out", sub: "holaa, jasto chha, rahechha",
  blocks: [
    { p: "Nepali grammar marks <i>how you know</i> something: a guess, an impression, or a surprise discovery. These forms are everywhere in conversation." },
    { table: { head: ["Form", "Meaning", "Example"], rows: [
      ["<b>holaa</b>", "probably, I suppose", "u gharmaa <b>holaa</b> (he's probably at home)"],
      ["verb + <b>holaa</b>", "probably does / did", "aaunchha <b>holaa</b> (he'll probably come); gayo <b>holaa</b> (he probably left)"],
      ["<b>hola ni</b>", "I guess, I suppose (resigned)", "thik chha, hola ni (OK, I guess)"],
      ["<b>hunasakchha</b>", "maybe, it could be", "<b>hunasakchha</b>, paani parchha (it might rain)"],
      ["<b>-ne jasto chha</b>", "it looks like …", "paani parne <b>jasto chha</b> (looks like rain)"],
      ["<b>… jasto laagchha</b>", "I think, it seems to me", "u aaundaina <b>jasto laagchha</b> (I don't think he'll come)"],
      ["<b>rahechha</b>", "it turns out (surprise, discovery)", "yo ta mitho <b>rahechha</b>! (oh, this is tasty!)"],
      ["<b>-echha</b>", "it turns out (past discovery)", "u ta <b>gaechha</b> (oh, he's gone)"]
    ] } },
    { h: "rahechha: the “oh!” form" },
    { p: "Use <b>rahechha</b> when you discover something you didn't know before, by seeing or experiencing it. It replaces chha / ho: <i>pasal banda chha</i> (the shop is closed, a fact) vs <i>pasal banda rahechha</i> (oh, the shop is closed, I've just found out)." },
    { ex: [
      { ne: "नेपाल त धेरै राम्रो रहेछ।", ro: "nepaal ta dherai raamro rahechha.", en: "Nepal turns out to be really beautiful!" },
      { ne: "तपाईं त राम्रो नेपाली बोल्नुहुँदो रहेछ!", ro: "tapaain ta raamro nepaali bolnuhundo rahechha!", en: "Oh, you speak good Nepali!" },
      { ne: "मेरो फोन घरमै छुटेछ।", ro: "mero phon gharmai chhutechha.", en: "I've left my phone at home (I've just realised)." },
      { ne: "ऊ अहिले अफिसमा होला।", ro: "u ahile aphismaa holaa.", en: "He's probably at the office now." },
      { ne: "आज पानी पर्ने जस्तो छ।", ro: "aaja paani parne jasto chha.", en: "It looks like it's going to rain today." }
    ] },
    { warn: "Don't use rahechha for things you already knew. Saying <i>mero naam Paulo rahechha</i> means you've just discovered your own name!" },
    { p: "For a habit you've just discovered, use <b>-ne rahechha</b>: <b>u dherai kaam garne rahechha</b> (it turns out he works a lot)." }
  ],
  quiz: [
    { q: "You taste the food and it's delicious. Say:", a: "yo ta mitho rahechha!", o: ["yo ta mitho holaa!", "yo ta mitho thiyo!"], why: "A discovery → <b>rahechha</b>." },
    { q: "“He's probably asleep.”", a: "u sutyo holaa", o: ["u sutyo rahechha", "u sutne jasto laagchha holaa"], why: "A guess → <b>holaa</b>." },
    { q: "“I think it's a holiday today.”", a: "aaja bidaa ho jasto laagchha", o: ["aaja bidaa rahechha", "aaja bidaa ho re"], why: "Your impression → <b>jasto laagchha</b>." },
    { q: "“Looks like it'll snow.”", a: "hiun parne jasto chha", o: ["hiun paryo holaa", "hiun parchha re"], why: "Appearance → <b>-ne jasto chha</b>." }
  ] },

{ id: "workhorse", level: "B2", title: "Workhorse verbs: laagnu, parnu, garnu", sub: "One verb, twenty meanings",
  blocks: [
    { p: "A handful of verbs do an enormous amount of work in Nepali. Learning their uses as chunks is faster than learning twenty separate verbs." },
    { h: "laagnu (to strike, attach)" },
    { table: { head: ["Chunk", "Meaning"], rows: [
      ["malaai bhok / tirkhaa / jaado / garmi <b>laagyo</b>", "I'm hungry / thirsty / cold / hot"],
      ["malaai raamro / naraamro <b>laagyo</b>", "I liked it / I felt bad"],
      ["kati <b>laagchha</b>? / kati samaya <b>laagchha</b>?", "how much does it cost? / how long does it take?"],
      ["malaai rughaa <b>laagyo</b>", "I caught a cold"],
      ["…-na <b>laagyo</b>", "about to …: paani parna laagyo"],
      ["kaammaa <b>laagnu</b>", "get down to work"],
      ["aago <b>laagyo</b>", "a fire broke out"],
      ["malaai … jasto <b>laagchha</b>", "I think, it seems to me"],
      ["dar <b>laagyo</b> / laaj <b>laagyo</b>", "I'm scared / I'm embarrassed"]
    ] } },
    { h: "parnu (to fall, befall)" },
    { table: { head: ["Chunk", "Meaning"], rows: [
      ["paani / hiun <b>paryo</b>", "it rained / snowed"],
      ["…-nu<b>parchha</b>", "have to"],
      ["man <b>parchha</b>", "like"],
      ["kati <b>parchha</b>?", "how much does it come to?"],
      ["baatomaa <b>parchha</b>", "it's on the way"],
      ["biraami <b>parnu</b>", "fall ill"],
      ["samasyaamaa <b>parnu</b>", "get into trouble"],
      ["<b>parchha</b> / <b>pardaina</b>", "it's needed / no need"]
    ] } },
    { h: "Noun + garnu / hunu: thousands of verbs" },
    { p: "Most new verbs are a noun + <b>garnu</b> (do) or <b>hunu</b> (be). This lets you use English and Sanskrit words freely: <b>phon garnu</b> (to phone), <b>prayog garnu</b> (to use), <b>maddat garnu</b> (to help), <b>kuraa garnu</b> (to talk), <b>bihe garnu</b> (to marry), <b>kosis garnu</b> (to try), <b>paarking garnu</b> (to park), <b>khusi hunu</b> (to be happy), <b>samaapta hunu</b> (to end)." },
    { ex: [
      { ne: "काठमाडौं जान कति समय लाग्छ?", ro: "kaathmaadaun jaana kati samaya laagchha?", en: "How long does it take to get to Kathmandu?" },
      { ne: "मलाई डर लाग्यो।", ro: "malaai dar laagyo.", en: "I got scared." },
      { ne: "बजार बाटोमै पर्छ।", ro: "bajaar baatomai parchha.", en: "The market is right on the way." },
      { ne: "म तपाईंलाई मद्दत गर्न सक्छु?", ro: "ma tapaainlaai maddat garna sakchhu?", en: "Can I help you?" }
    ] },
    { warn: "When the verb is noun + garnu, the person helped/called takes <b>-laai</b>: <b>malaai phon garnus</b> (call me), <b>saathilaai maddat garen</b> (I helped a friend)." }
  ],
  quiz: [
    { q: "“How much does it cost?”", a: "kati laagchha?", o: ["kati parchha ho?", "kati garchha?"], why: "Cost = <b>laagnu</b> (or parnu)." },
    { q: "“It's raining.”", a: "paani pardaichha", o: ["paani laagdaichha", "paani hundaichha"], why: "Rain falls: <b>parnu</b>." },
    { q: "“I felt embarrassed.”", a: "malaai laaj laagyo", o: ["ma laaj paryo", "malaai laaj garyo"], why: "Feelings strike: <b>laagnu</b>." },
    { q: "“Please help me.”", a: "malaai maddat garnus", o: ["ma maddat garnus", "mero maddat laagnus"], why: "noun + <b>garnu</b>; person helped takes <b>-laai</b>." }
  ] },

{ id: "honor", level: "B2", title: "The respect system in depth", sub: "Gender, honorifics, and speaking to elders",
  blocks: [
    { p: "By B2 you should switch levels smoothly: polite with strangers and elders, familiar with friends, and correctly respectful when talking <i>about</i> people." },
    { table: { cap: "Same verb, four levels (to come, present)", head: ["Level", "you", "he / she"], rows: [
      ["low / intimate", "ta <b>aaunchhas</b>", "u <b>aaunchha</b> / <b>aaunchhe</b>"],
      ["middle", "timi <b>aaunchhau</b>", "uni <b>aaunchhan</b> / <b>aaunchhin</b>"],
      ["high (polite)", "tapaain <b>aaunuhunchha</b>", "uhaan <b>aaunuhunchha</b>"],
      ["very high (formal)", "hajur <b>aaunuhunchha</b>", "(royal and religious: <b>baksanu</b>, rare today)"]
    ] } },
    { rule: "The high-respect forms have <b>no gender</b>. If you're unsure about gender agreement, the polite forms are both safer and more respectful." },
    { h: "Talking about family" },
    { p: "Use high respect for parents, grandparents, older relatives and teachers, even when they're not present: <b>mero bubaa shikshak hunuhunchha</b>, <b>hajuraamaa aaunubhayo</b>. Younger siblings and children take the middle or low level: <b>bhaai aayo</b>, <b>bahini aai</b>." },
    { h: "Feminine forms" },
    { p: "Only the low and middle levels distinguish gender: <b>u aai</b> (she came), <b>uni aain</b> (she came, mid), <b>u aaunchhe</b> (she comes). In fast speech many Nepalis use the masculine forms for women; in writing and careful speech the feminine forms are expected." },
    { ex: [
      { ne: "हजुर, के लिनुहुन्छ?", ro: "hajur, ke linuhunchha?", en: "What would you like, sir/madam?" },
      { ne: "मेरी आमा भोलि आउनुहुन्छ।", ro: "meri aamaa bholi aaunuhunchha.", en: "My mother is coming tomorrow." },
      { ne: "बहिनी स्कुल गई।", ro: "bahini skul gai.", en: "(My) little sister went to school." },
      { ne: "उनी डाक्टर हुन्।", ro: "uni daaktar hun.", en: "She is a doctor.", note: "Middle level, typical of news and neutral reports." }
    ] },
    { warn: "Using <b>timi</b> with an older stranger is a real faux pas. Using <b>tapaain</b> with a close friend just sounds distant; they'll probably tell you to switch: <i>timi bhane hunchha</i> (you can say timi)." },
    { p: "Respectful vocabulary: <b>khaanaa khaanubhayo?</b> (have you eaten? — a standard greeting), <b>sanchai hunuhunchha?</b> (are you well?), <b>aaraam garnus</b> (please rest). Respect also lives in <b>hajur</b> (yes / pardon), <b>-ji</b> after names (<b>Raamji</b>) and <b>daai / didi</b>." }
  ],
  quiz: [
    { q: "About your father: “He's coming.”", a: "bubaa aaundai hunuhunchha", o: ["bubaa aaundaichha", "bubaa aaundaichhin"], why: "Parents take the high respect form." },
    { q: "About your little sister: “She went to school.”", a: "bahini skul gai", o: ["bahini skul jaanubhayo", "bahini skul gayau"], why: "Younger siblings: low level, feminine <b>gai</b>." },
    { q: "Which forms have no gender distinction?", a: "tapaain / uhaan forms (-nuhunchha)", o: ["timi forms (-chhau)", "uni forms (-chhan)"], why: "High-respect forms are gender-neutral." },
    { q: "A friend tells you: “timi bhane hunchha.” This means:", a: "you can use timi with me", o: ["please use tapaain", "don't talk to me"], why: "They invite you to the familiar level." }
  ] },

{ id: "noun", level: "B2", title: "Verbs as nouns", sub: "-nu, -ne, -aai, -ne garchhu, -ne belaa",
  blocks: [
    { p: "To talk about actions as things (<i>learning is fun, it's time to go</i>), Nepali turns verbs into nouns in several ways." },
    { table: { head: ["Form", "Use", "Example"], rows: [
      ["<b>-nu</b>", "the action as subject (“to do”, “doing”)", "nepaali <b>siknu</b> ramaailo chha (learning Nepali is fun)"],
      ["<b>-na</b>", "after adjectives: hard to, easy to", "yo <b>bujhna</b> gaahro chha (this is hard to understand)"],
      ["<b>-ne</b> + noun", "the … for doing", "<b>khaane</b> kuraa (food), <b>basne</b> thaaun (a place to stay)"],
      ["<b>-ne garchhu</b>", "I usually, I make a habit of", "ma bihaan <b>hindne garchhu</b> (I usually walk in the morning)"],
      ["<b>-ne belaa</b>", "time to", "<b>jaane belaa</b> bhayo (it's time to go)"],
      ["<b>-ne bichaar</b>", "intend to", "<b>basne bichaar</b> chha (I'm planning to stay)"],
      ["<b>-aai</b>", "noun of the activity", "<b>padhaai</b> (studies), <b>lekhaai</b> (handwriting), <b>bhalaai</b> (good deed), <b>uchaai</b> (height)"],
      ["<b>-ko laagi</b> / <b>-nako laagi</b>", "for the purpose of", "<b>padhnako laagi</b> (in order to study)"]
    ] } },
    { ex: [
      { ne: "बिहान सबेरै उठ्नु राम्रो बानी हो।", ro: "bihaan saberai uthnu raamro baani ho.", en: "Getting up early is a good habit." },
      { ne: "मलाई नेपाली पढ्न अलि गाह्रो लाग्छ।", ro: "malaai nepaali padhna ali gaahro laagchha.", en: "I find reading Nepali a bit hard." },
      { ne: "म साँझ समाचार सुन्ने गर्छु।", ro: "ma saanjha samaachaar sunne garchhu.", en: "I usually listen to the news in the evening." },
      { ne: "तपाईंको पढाइ कस्तो चल्दैछ?", ro: "tapaainko padhaai kasto chaldaichha?", en: "How are your studies going?" }
    ] },
    { warn: "<b>-nu</b> and <b>-na</b> are both “to” in English. Rule of thumb: <b>-nu</b> when the action is the subject or with <b>parchha / hundaina</b>; <b>-na</b> after another verb (sakchhu, chaahanchhu, jaanchhu) or an adjective (gaahro, sajilo)." }
  ],
  quiz: [
    { q: "“Learning Nepali is fun.”", a: "nepaali siknu ramaailo chha", o: ["nepaali sikna ramaailo chha ho", "nepaali sikne ramaailo"], why: "Action as subject → <b>-nu</b>." },
    { q: "“It's time to sleep.”", a: "sutne belaa bhayo", o: ["sutnu belaa bhayo", "sutna belaa chha"], why: "<b>-ne belaa</b> = time to." },
    { q: "“I usually drink tea in the morning.”", a: "ma bihaan chiyaa khaane garchhu", o: ["ma bihaan chiyaa khaanu garchhu", "ma bihaan chiyaa khaana parchha"], why: "Habit → <b>-ne garchhu</b>." },
    { q: "“This is easy to understand.”", a: "yo bujhna sajilo chha", o: ["yo bujhnu sajilo chha ho", "yo bujhne sajilo"], why: "After adjectives → <b>-na</b>." }
  ] }
);
})();
