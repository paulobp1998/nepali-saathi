// Grammar course, C1 and C2: real speech, register, idiom and nuance. Same format as grammar-a.js.
(function () {
const C = window.COURSE;
C.grammar = C.grammar || [];
C.grammar.push(

/* =============================== C1 =============================== */
{ id: "spoken", level: "C1", title: "How Nepalis really talk", sub: "Contractions and colloquial forms you'll hear every day",
  blocks: [
    { p: "Textbook forms are correct, but conversation shortens them. You don't have to speak this way, but you must understand it. Use the short forms with friends once they feel natural." },
    { table: { head: ["Careful", "Spoken", "Meaning"], rows: [
      ["garnuhos", "<b>garnus</b>", "please do"],
      ["hoina", "<b>haina</b>", "no, isn't it"],
      ["bhayo", "<b>bho</b>", "happened, done, enough"],
      ["gayo", "<b>go</b>", "went"],
      ["bhaeko", "<b>bhaako</b>", "been, happened"],
      ["aaeko", "<b>aako</b>", "come"],
      ["jaaaun", "<b>jaaun</b> / <b>jaam</b>", "let's go"],
      ["kahaan gaeko?", "<b>kaa gaako?</b>", "where did you go?"],
      ["ke gariraheko chhau?", "<b>ke garirako?</b>", "what are you doing?"],
      ["thaahaa chhaina", "<b>khoi</b>", "I don't know (with a shrug)"],
      ["hunchha", "<b>has</b> / <b>hajur</b>", "OK, yes (to elders)"],
      ["ho ra?", "<b>ho ra?</b> / <b>hora?</b>", "really?"],
      ["ke chha?", "<b>k chha?</b>", "what's up? how are things?"]
    ] } },
    { h: "Answers you'll hear constantly" },
    { list: [
      "<b>an</b>: yes, mm-hm (casual)",
      "<b>hajur</b>: yes (polite); pardon?",
      "<b>thikai chha</b>: so-so, not bad",
      "<b>khoi</b>: who knows / I don't know / where is it?",
      "<b>la</b>: OK then; here you go; come on",
      "<b>ke re?</b>: what did they say? what was it again?",
      "<b>are</b> / <b>abui</b> / <b>oho</b>: surprise, shock, oh!"
    ] },
    { ex: [
      { ne: "के छ? सन्चै?", ro: "ke chha? sanchai?", en: "What's up? All good?" },
      { ne: "ठिकै छ, तिमी नि?", ro: "thikai chha, timi ni?", en: "Not bad, you?" },
      { ne: "खोइ, थाहा छैन।", ro: "khoi, thaahaa chhaina.", en: "No idea." },
      { ne: "ल, जाम् त।", ro: "la, jaam ta.", en: "OK, let's go then." },
      { ne: "खाना खानुभयो?", ro: "khaanaa khaanubhayo?", en: "Have you eaten?", note: "A greeting, not a real question. Answer “khaaen, tapaainle ni?”" }
    ] },
    { warn: "Short forms are informal. With elders, officials or in writing, keep the full forms (<b>garnuhos</b>, <b>hoina</b>, <b>bhayo</b>)." },
    { p: "English mixing is normal in cities: <i>ma office jaandaichhu</i>, <i>meeting cancel bhayo</i>, <i>busy chhu</i>. English nouns and adjectives slot into Nepali grammar with <b>garnu</b> / <b>hunu</b>." }
  ],
  quiz: [
    { q: "Spoken “bho” means…", a: "bhayo (happened / enough)", o: ["ho (is)", "bhaai (younger brother)"], why: "<b>bho</b> is the contraction of <b>bhayo</b>." },
    { q: "A friend says “khoi”. They mean:", a: "I don't know", o: ["Yes", "Let's go"], why: "<b>khoi</b> = who knows / no idea." },
    { q: "Polite equivalent of “garnus”", a: "garnuhos", o: ["gara", "gar"], why: "<b>garnus</b> is the spoken form of <b>garnuhos</b>." },
    { q: "Someone greets you with “khaanaa khaanubhayo?” The best reply:", a: "khaaen, tapaainle ni?", o: ["hoina, ma bhok chhaina", "khaanaa raamro chha"], why: "It's a greeting: answer and return the question." }
  ] },

{ id: "formal", level: "C1", title: "Formal and written Nepali", sub: "News, letters, signs: Sanskrit words and set phrases",
  blocks: [
    { p: "Formal Nepali uses many words borrowed from Sanskrit (<i>tatsam</i> words), the <b>-nechha</b> future, the passive, and the middle-level third person (<b>uni</b>, <b>unle bhane</b>). Recognising this register opens up news, documents and speeches." },
    { table: { head: ["Everyday", "Formal", "Meaning"], rows: [
      ["dherai", "<b>atyanta</b>", "very"],
      ["maddat", "<b>sahayog</b>", "help"],
      ["chalaaunu", "<b>prayog garnu</b>", "use"],
      ["bhannu", "<b>bataaunu</b>, <b>ullekh garnu</b>", "say, state"],
      ["suru garnu", "<b>aarambha garnu</b>", "begin"],
      ["sakinu", "<b>samaapta hunu</b>", "end"],
      ["kuraa", "<b>bishaya</b>", "matter, subject"],
      ["maanchhe", "<b>byakti</b>", "person"],
      ["paisaa", "<b>rakam</b>", "amount, sum"],
      ["ghar", "<b>niwaas</b>", "residence"],
      ["kina bhane", "<b>kinaki</b>, <b>kaaran</b>", "because"],
      ["tara", "<b>tathaapi</b>, <b>kintu</b>", "but, however"]
    ] } },
    { h: "News style" },
    { list: [
      "Reporting verbs: <b>unle bhane</b> (he said), <b>bataae</b> (stated), <b>jaanakaari die</b> (informed)",
      "Hedging: <b>… bhaneko chha</b> (it has said), <b>… bataainchha</b> (it is reported)",
      "Passive: <b>giraphtaar gariyo</b> (was arrested), <b>ghoshanaa gariyo</b> (was announced)",
      "Future: <b>sampanna hunechha</b> (will be held)"
    ] },
    { ex: [
      { ne: "प्रधानमन्त्रीले भोलि पत्रकार सम्मेलन गर्ने बताइएको छ।", ro: "pradhaanmantrile bholi patrakaar sammelan garne bataaieko chha.", en: "It is reported that the Prime Minister will hold a press conference tomorrow." },
      { ne: "कार्यक्रम बिहान दस बजे सुरु हुनेछ।", ro: "kaaryakram bihaana das baje suru hunechha.", en: "The programme will begin at 10 a.m." },
      { ne: "तपाईंको सहयोगका लागि हार्दिक धन्यवाद।", ro: "tapaainko sahayogkaa laagi haardik dhanyabaad.", en: "Heartfelt thanks for your help." }
    ] },
    { h: "Writing a formal message" },
    { list: [
      "Opening: <b>shriimaan</b> (sir), <b>aadaraniya</b> … (respected …), <b>namaskaar</b>",
      "Request: <b>… garidinuhuna anurodh garchhu</b> (I request that you kindly …)",
      "Closing: <b>dhanyabaad</b>, <b>bhavadiya</b> (yours faithfully)"
    ] },
    { warn: "Don't overdo formal words in conversation. <i>Ma atyanta prasanna chhu</i> (I am exceedingly pleased) sounds like a speech. Say <b>ma dherai khusi chhu</b>." }
  ],
  quiz: [
    { q: "Formal word for “help”", a: "sahayog", o: ["kuraa", "byakti"], why: "<b>sahayog</b> (formal) = maddat (everyday)." },
    { q: "In the news, “unle bhane” means:", a: "he/she said", o: ["they will say", "you said"], why: "Middle-level past of bhannu: <b>bhane</b>." },
    { q: "“The meeting will be held tomorrow.” (formal)", a: "baithak bholi sampanna hunechha", o: ["baithak bholi hunchha re", "baithak bholi bhayo"], why: "Formal future: <b>-nechha</b>." },
    { q: "Everyday word for “atyanta”", a: "dherai", o: ["ali", "kati"], why: "<b>atyanta</b> = very (formal)." }
  ] },

{ id: "idiom", level: "C1", title: "Idioms and body-part expressions", sub: "The chunks that make speech colourful",
  blocks: [
    { p: "Many Nepali idioms use the body: heart (<b>man</b>), head (<b>taauko</b>), eye (<b>aankhaa</b>), nose (<b>naak</b>), stomach (<b>pet</b>). Learn them as whole phrases." },
    { table: { head: ["Idiom", "Literally", "Meaning"], rows: [
      ["<b>man parnu</b>", "the heart falls (for it)", "to like"],
      ["<b>man laagnu</b>", "the heart attaches", "to feel like (doing)"],
      ["<b>man dukhnu</b>", "the heart hurts", "to be hurt, offended"],
      ["<b>man milnu</b>", "hearts match", "to get on well"],
      ["<b>naak katnu</b>", "the nose is cut", "to lose face, be shamed"],
      ["<b>aankhaa laagnu</b>", "the eye attaches", "to doze off"],
      ["<b>taauko dukhaaunu</b>", "to make one's head ache", "to worry about, bother with"],
      ["<b>dimaag khaanu</b>", "to eat (someone's) brain", "to pester"],
      ["<b>haat haalnu</b>", "to put a hand in", "to get involved, meddle"],
      ["<b>mukh laagnu</b>", "the mouth attaches", "to talk back, answer rudely"],
      ["<b>haawaa khaanu</b>", "to eat air", "to take a stroll, get fresh air"],
      ["<b>ghaam taapnu</b>", "to warm in the sun", "to sit in the sun"],
      ["<b>kaan paknu</b>", "the ears ripen", "to be sick of hearing something"],
      ["<b>chhaati phulaaunu</b>", "to swell the chest", "to be proud, show off"]
    ] } },
    { ex: [
      { ne: "मलाई आज कतै जान मन लागेको छैन।", ro: "malaai aaja katai jaana man laageko chhaina.", en: "I don't feel like going anywhere today." },
      { ne: "दिमाग नखाऊ न!", ro: "dimaag nakhaau na!", en: "Stop pestering me!" },
      { ne: "बेलुका हावा खान जाऔँ।", ro: "belukaa haawaa khaana jaaaun.", en: "Let's go for a stroll this evening." },
      { ne: "त्यो कुरा सुनेर मेरो मन दुख्यो।", ro: "tyo kuraa sunera mero man dukhyo.", en: "Hearing that hurt me." },
      { ne: "उस्तै कुरा सुनेर कान पाक्यो।", ro: "ustai kuraa sunera kaan paakyo.", en: "I'm sick of hearing the same thing." }
    ] },
    { h: "“Eating” more than food" },
    { p: "<b>khaanu</b> (eat) is also used for tea, water, cigarettes and medicine: <b>chiyaa khaanu</b>, <b>paani khaanu</b>, <b>churot khaanu</b>, <b>ausadhi khaanu</b>. And for abstract things: <b>ghus khaanu</b> (take bribes), <b>gaali khaanu</b> (get scolded), <b>dhokaa khaanu</b> (be cheated)." },
    { warn: "<b>man parnu</b> = to like (a stable taste); <b>man laagnu</b> = to feel like (right now). <i>Malaai momo man parchha</i> (I like momos) vs <i>malaai momo khaana man laagyo</i> (I fancy some momos)." }
  ],
  quiz: [
    { q: "“I fancy some tea.”", a: "malaai chiyaa khaana man laagyo", o: ["malaai chiyaa man paryo", "ma chiyaa man laagchhu"], why: "Feel like (now) = <b>man laagnu</b>." },
    { q: "“naak katyo” means…", a: "lost face / was shamed", o: ["had a nosebleed", "was very proud"], why: "Nose cut = <b>shame</b>." },
    { q: "“Let's go for a stroll.”", a: "haawaa khaana jaaaun", o: ["ghaam khaana jaaaun", "haawaa hindna jaaaun"], why: "<b>haawaa khaanu</b> = take the air." },
    { q: "“He got scolded.”", a: "usle gaali khaayo", o: ["usle gaali garyo", "u gaali bhayo"], why: "Receiving a scolding = <b>gaali khaanu</b>." }
  ] },

{ id: "words", level: "C1", title: "Choosing the right word", sub: "know, can, say, ask: near-synonyms that aren't",
  blocks: [
    { p: "Many English verbs split into two or three Nepali ones. Picking the right one is a mark of real fluency." },
    { h: "To know" },
    { table: { head: ["Nepali", "Use", "Example"], rows: [
      ["malaai <b>thaahaa chha</b>", "know a fact", "malaai usko ghar thaahaa chha (I know where he lives)"],
      ["<b>chinnu</b>", "know a person or place (recognise)", "ma unlaai chinchhu (I know her)"],
      ["<b>jaannu</b>", "know (deeply, formally); know how", "u dherai bhaashaa jaanchha (he knows many languages)"],
      ["malaai … <b>aaunchha</b>", "know how (a skill)", "malaai gaadi chalaauna aaunchha (I can drive)"]
    ] } },
    { h: "Can" },
    { table: { head: ["Nepali", "Use"], rows: [
      ["<b>-na saknu</b>", "physically/practically able: <i>ma bholi aauna sakchhu</i>"],
      ["malaai <b>-na aaunu</b>", "learned skill: <i>malaai paudi khelna aaunchha</i>"],
      ["<b>-na paaunu</b>", "get the chance, be allowed: <i>ma bhitra jaana paaina</i> (I wasn't allowed in)"],
      ["<b>-na hunu</b>", "permission: <i>yahaan basna hunchha?</i>"],
      ["<b>-na milnu</b>", "be feasible, convenient: <i>bholi bhetna milchha?</i>"]
    ] } },
    { h: "To say, speak, tell, ask" },
    { table: { head: ["Nepali", "Meaning"], rows: [
      ["<b>bhannu</b>", "say, tell (words): <i>ke bhannubhayo?</i>"],
      ["<b>bolnu</b>", "speak (a language), make a sound: <i>nepaali bolnu</i>"],
      ["<b>kuraa garnu</b>", "talk, chat: <i>uhaansanga kuraa garen</i>"],
      ["<b>bataaunu</b>", "tell, inform, explain: <i>baato bataaidinus</i> (tell me the way)"],
      ["<b>sunaaunu</b>", "tell (a story), recount: <i>kathaa sunaaunu</i>"],
      ["<b>sodhnu</b>", "ask (a question): <i>prashna sodhnu</i>"],
      ["<b>maagnu</b>", "ask for, request (a thing): <i>paani maagnu</i>"]
    ] } },
    { h: "To want, to need" },
    { table: { head: ["Nepali", "Meaning"], rows: [
      ["<b>chaahanu</b>", "want (to do), wish: <i>ma nepaal basna chaahanchhu</i>"],
      ["malaai <b>chaahinchha</b> / <b>chaahiyo</b>", "need / would like (a thing): <i>malaai euta kalam chaahiyo</i>"],
      ["malaai <b>man laagyo</b>", "feel like: <i>malaai sutna man laagyo</i>"]
    ] } },
    { warn: "<b>jaannu</b> (know) and <b>jaanu</b> (go) share the present form <b>jaanchhu</b>. To avoid confusion, say <b>malaai nepaali aaunchha</b> for “I know Nepali”." }
  ],
  quiz: [
    { q: "“Do you know Ram?” (the person)", a: "tapaain raamlaai chinnuhunchha?", o: ["tapaainlaai raam thaahaa chha?", "tapaainlaai raam aaunchha?"], why: "Knowing a person = <b>chinnu</b>." },
    { q: "“Could you tell me the way?”", a: "malaai baato bataaidinus", o: ["malaai baato bolidinus", "malaai baato sodhidinus"], why: "Tell / inform = <b>bataaunu</b>." },
    { q: "“Can I ask a question?”", a: "ma euta prashna sodhna sakchhu?", o: ["ma euta prashna maagna sakchhu?", "ma euta prashna bhanna sakchhu?"], why: "Ask a question = <b>sodhnu</b>; ask for a thing = maagnu." },
    { q: "“I know where the hotel is.”", a: "malaai hotel kahaan chha thaahaa chha", o: ["ma hotel chinchhu kahaan", "malaai hotel aaunchha"], why: "A fact → <b>thaahaa chha</b>." }
  ] },

/* =============================== C2 =============================== */
{ id: "echo", level: "C2", title: "Echo words and doubling", sub: "chiyaa-siyaa, ghar-ghar, ke-ke, bistaarai-bistaarai",
  blocks: [
    { p: "Native speech is full of doubled words. They're easy to use once you know the four patterns, and they make you sound remarkably natural." },
    { table: { head: ["Pattern", "Effect", "Examples"], rows: [
      ["<b>Echo word</b>: repeat with s- (or another sound)", "“… and such, … and the like”", "<b>chiyaa-siyaa</b> (tea and stuff), <b>khaanaa-saanaa</b> (food and so on), <b>kaam-saam</b>"],
      ["<b>Question word doubled</b>", "asks for a list", "<b>ke-ke</b> kinnubhayo? (what all did you buy?), <b>ko-ko</b> aae? (who all came?), <b>kahaan-kahaan</b> ghumnubhayo?"],
      ["<b>Noun doubled</b>", "each, every, distributive", "<b>ghar-ghar</b>maa (in every house), <b>gaaun-gaaun</b>maa"],
      ["<b>Adverb / adjective doubled</b>", "intensity, gradualness", "<b>bistaarai-bistaarai</b> (little by little), <b>saanaa-saanaa</b> (tiny), <b>chhito-chhito</b> (quickly, quickly)"],
      ["<b>Pair of related words</b>", "a whole category", "<b>daal-bhaat</b> (a meal), <b>aamaa-buwaa</b> (parents), <b>daaju-bhaai</b> (brothers; men of a community)"]
    ] } },
    { ex: [
      { ne: "आउनुस्, चिया-सिया खाऔँ।", ro: "aaunus, chiyaa-siyaa khaaaun.", en: "Come, let's have some tea or something." },
      { ne: "बजारमा के-के किन्नुभयो?", ro: "bajaarmaa ke-ke kinnubhayo?", en: "What (all) did you buy at the market?" },
      { ne: "बिस्तारै-बिस्तारै नेपाली आउँछ।", ro: "bistaarai-bistaarai nepaali aaunchha.", en: "Little by little, Nepali comes." },
      { ne: "दसैँमा घर-घरमा पिङ हालिन्छ।", ro: "dasainmaa ghar-gharmaa ping haalinchha.", en: "At Dashain, swings are put up everywhere.", note: "Literally: in house after house." }
    ] },
    { h: "Sound words (onomatopoeia)" },
    { p: "Nepali has a rich set of expressive sound-words used with <b>garnu</b> or as adverbs: <b>jhilimili</b> (glittering), <b>tapa-tapa</b> (dripping), <b>chhyaang chhyaang</b> (clanging), <b>sarara</b> (smoothly, swiftly), <b>tyaakkai</b> (exactly, precisely), <b>jhan-jhan</b> (more and more)." },
    { warn: "Echo words are informal and slightly dismissive (“and whatnot”). Don't use them in formal writing." }
  ],
  quiz: [
    { q: "“Who all came?”", a: "ko-ko aae?", o: ["ko aae-aae?", "kaslaai aae?"], why: "Doubling a question word asks for a list." },
    { q: "“Tea and stuff”", a: "chiyaa-siyaa", o: ["chiyaa-chiyaa", "siyaa-chiyaa"], why: "Echo word: repeat with <b>s-</b>." },
    { q: "“Little by little”", a: "bistaarai-bistaarai", o: ["saano-saano", "ali-maatra"], why: "Doubled adverb = gradualness." },
    { q: "“In every village”", a: "gaaun-gaaunmaa", o: ["sabai gaaunharumaa nai", "gaaunmaa-gaaun"], why: "Doubled noun = each / every." }
  ] },

{ id: "nuance", level: "C2", title: "Fine shades of meaning", sub: "Stacked particles, aspect choices and attitude",
  blocks: [
    { p: "At C2 the grammar is known; the challenge is choosing between correct options to say exactly what you mean, with the right attitude." },
    { h: "Same fact, different stance" },
    { table: { head: ["Sentence", "Nuance"], rows: [
      ["u aayo", "he came (neutral fact)"],
      ["u aaechha", "oh, he's come (I just noticed)"],
      ["u aayo re", "he came, so I hear"],
      ["u aayo holaa", "he's probably come"],
      ["u aaisakyo", "he's already here"],
      ["u ta aayo ni", "well, he did come, didn't he (mild objection)"],
      ["u po aayo", "it was HIM who came (unexpectedly)"]
    ] } },
    { h: "Stacked particles" },
    { p: "Particles combine at the end of a sentence, and the combination carries the tone." },
    { list: [
      "<b>ni ta</b>: obviousness, mild impatience → <i>bhaneko ni ta!</i> (I told you, didn't I!)",
      "<b>hai ta</b>: warm reminder → <i>khaanaa khaanu hai ta</i> (do eat, OK?)",
      "<b>ra ho?</b> / <b>ho ra?</b>: real surprise → <i>saanchai ho ra?</i> (is that really true?)",
      "<b>re ni</b>: passing on something you find questionable → <i>aaundaichha re ni</i> (he's coming, supposedly)",
      "<b>po ta</b>: contradiction → <i>tyo ta mero po ho ta</i> (but that's mine!)"
    ] },
    { h: "Aspect choices" },
    { table: { head: ["Choice", "Difference"], rows: [
      ["<b>garyo</b> vs <b>gareko chha</b>", "completed event vs present result / relevance: <i>u biraami bhayo</i> (he fell ill) vs <i>u biraami bhaeko chha</i> (he's ill now)"],
      ["<b>garchha</b> vs <b>garne garchha</b>", "does vs habitually makes a point of doing"],
      ["<b>gardai chha</b> vs <b>gariraheko chha</b>", "in progress vs ongoing, continuing (stronger)"],
      ["<b>garyo</b> vs <b>garihaalyo</b> vs <b>garisakyo</b>", "did vs did right away / without hesitation vs has already done"],
      ["<b>bhanyo</b> vs <b>bhanidiyo</b>", "said vs said (for someone; or let it slip)"]
    ] } },
    { ex: [
      { ne: "मैले भनेको नि त!", ro: "maile bhaneko ni ta!", en: "I told you so!" },
      { ne: "त्यो त मेरो पो हो त!", ro: "tyo ta mero po ho ta!", en: "But that's mine!" },
      { ne: "उसले सबै कुरा भनिदियो।", ro: "usle sabai kuraa bhanidiyo.", en: "He let it all out / told everything (to them)." },
      { ne: "खाना खानू है त।", ro: "khaanaa khaanu hai ta.", en: "Make sure you eat, OK?", note: "-nu as a gentle instruction + hai ta: very caring tone." }
    ] },
    { warn: "Tone particles are the last thing learners master. Collect them from real conversations (use My phrases) rather than inventing combinations." }
  ],
  quiz: [
    { q: "You walk in and notice he's already there. Which fits best?", a: "u aaechha", o: ["u aayo re", "u aaulaa"], why: "Discovery → <b>-echha</b>." },
    { q: "“I told you so!”", a: "maile bhaneko ni ta!", o: ["maile bhanen re!", "maile bhanne holaa!"], why: "<b>ni ta</b> = obviousness, ‘didn't I?’." },
    { q: "“He's ill (now).”", a: "u biraami bhaeko chha", o: ["u biraami bhayo holaa", "u biraami bhanyo"], why: "Present result → perfect <b>-eko chha</b>." },
    { q: "Which adds “unexpectedly, it was X”?", a: "po", o: ["hai", "pani"], why: "<b>po</b> marks surprise or contrast." }
  ] },

{ id: "proverb", level: "C2", title: "Proverbs and sayings", sub: "Cultural shorthand you'll hear from elders",
  blocks: [
    { p: "Elders love a well-placed proverb (<b>ukhaan</b>). Understanding them, and using one at the right moment, earns you real respect." },
    { table: { head: ["Proverb", "Literally", "Meaning"], rows: [
      ["<b>jasto desh, ustai bhesh</b>", "as the country, so the dress", "when in Rome, do as the Romans do"],
      ["<b>naachna najaanne, aangan tedho</b>", "can't dance, (says) the courtyard is crooked", "a bad workman blames his tools"],
      ["<b>hune biruwaako chillo paat</b>", "a promising plant has shiny leaves", "talent shows early"],
      ["<b>saano mukh, thulo kuraa</b>", "small mouth, big talk", "talking above your station, overstepping"],
      ["<b>jahaan ichchhaa, tyahaan upaaya</b>", "where (there's) desire, there (is) a way", "where there's a will, there's a way"],
      ["<b>aaphu bhalo ta jagat bhalo</b>", "if you are good, the world is good", "treat others well and they'll treat you well"]
    ] } },
    { ex: [
      { ne: "जस्तो देश, उस्तै भेष।", ro: "jasto desh, ustai bhesh.", en: "When in Rome, do as the Romans do." },
      { ne: "नाच्न नजान्ने, आँगन टेढो।", ro: "naachna najaanne, aangan tedho.", en: "A bad workman blames his tools." },
      { ne: "आफू भलो त जगत् भलो।", ro: "aaphu bhalo ta jagat bhalo.", en: "Be good and the world will be good to you." }
    ] },
    { h: "Grammar inside proverbs" },
    { p: "Proverbs drop verbs and use paired words (<b>jasto … ustai</b>, <b>jahaan … tyahaan</b>). This correlative pattern from formal Nepali is alive in everyday sayings: <b>jati … uti</b> (the more … the more), <b>jun … tyahi</b> (whichever … that very one)." },
    { warn: "Use proverbs sparingly and with a smile. One at the right moment is charming; three in a conversation sounds like a textbook." }
  ],
  quiz: [
    { q: "Someone blames the bad Wi-Fi for losing a game they were bad at. Proverb:", a: "naachna najaanne, aangan tedho", o: ["jasto desh, ustai bhesh", "hune biruwaako chillo paat"], why: "Blaming the courtyard for bad dancing." },
    { q: "You adapt to local customs. Proverb:", a: "jasto desh, ustai bhesh", o: ["saano mukh, thulo kuraa", "jahaan ichchhaa, tyahaan upaaya"], why: "As the country, so the dress." },
    { q: "A child shows early talent. Proverb:", a: "hune biruwaako chillo paat", o: ["aaphu bhalo ta jagat bhalo", "naachna najaanne, aangan tedho"], why: "A promising plant has shiny leaves." }
  ] }
);
})();
