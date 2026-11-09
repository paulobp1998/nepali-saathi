// A2 and B1 lessons, extra conversations, and listening stories.
(function () {
const C = window.COURSE;
C.units.forEach(u => { u.level = u.level || "A1"; });

C.units.push(
  /* ---------------- A2 ---------------- */
  { id: "past", level: "A2", title: "Yesterday", sub: "Talking about the past",
    tips: [
      "Past with <b>ma</b> (I): the verb ends in <b>-en</b>. <b>gaen</b> = I went, <b>khaaen</b> = I ate.",
      "With most action verbs in the past, \"I\" becomes <b>maile</b>: <b>maile saathilaai bheten</b> = I met a friend.",
      "Polite \"you\" in the past: <b>-nubhayo</b>. <b>ke garnubhayo?</b> = what did you do? Negative: <b>-ina</b>, <b>maile garina</b> = I didn't do it."
    ],
    phrases: [
      { id: "pa1", ne: "हिजो के गर्नुभयो?", ro: "hijo ke garnubhayo?", en: "What did you do yesterday?" },
      { id: "pa2", ne: "म बजार गएँ।", ro: "ma bajaar gaen.", en: "I went to the market." },
      { id: "pa3", ne: "मैले साथीलाई भेटेँ।", ro: "maile saathilaai bheten.", en: "I met a friend." },
      { id: "pa4", ne: "हामीले सँगै खाना खायौँ।", ro: "haamile sangai khaanaa khaayaun.", en: "We ate together." },
      { id: "pa5", ne: "म राम्रोसँग सुतेँ।", ro: "ma raamrosanga suten.", en: "I slept well." },
      { id: "pa6", ne: "म घरमै बसेँ।", ro: "ma gharmai basen.", en: "I stayed at home." },
      { id: "pa7", ne: "मैले केही गरिनँ।", ro: "maile kehi garina.", en: "I didn't do anything." },
      { id: "pa8", ne: "तपाईं कहिले आइपुग्नुभयो?", ro: "tapaain kahile aaipugnubhayo?", en: "When did you arrive?" },
      { id: "pa9", ne: "म गएको हप्ता आइपुगेँ।", ro: "ma gaeko haptaa aaipugen.", en: "I arrived last week." },
      { id: "pa10", ne: "तपाईं पहिले नेपाल आउनुभएको छ?", ro: "tapaain pahile nepaal aaunubhaeko chha?", en: "Have you been to Nepal before?" },
      { id: "pa11", ne: "यो मेरो पहिलो पटक हो।", ro: "yo mero pahilo patak ho.", en: "This is my first time." },
      { id: "pa12", ne: "हिजो धेरै पानी पर्‍यो।", ro: "hijo dherai paani paryo.", en: "It rained a lot yesterday." }
    ] },
  { id: "future", level: "A2", title: "Plans", sub: "Tomorrow, next week, have to",
    tips: [
      "The present often means the future: <b>ma bholi aaunchhu</b> = I'll come tomorrow.",
      "<b>-ne bichaarmaa chhu</b> = I'm thinking of (doing). <b>-dai chhu</b> = I'm going to / I'm (doing).",
      "<b>-nuparchha</b> = have to: <b>malaai jaanuparchha</b> = I have to go."
    ],
    phrases: [
      { id: "fu1", ne: "भोलि के गर्ने?", ro: "bholi ke garne?", en: "What shall we do tomorrow?" },
      { id: "fu2", ne: "अर्को हप्ता म पोखरा जाँदैछु।", ro: "arko haptaa ma pokharaa jaandaichhu.", en: "Next week I'm going to Pokhara." },
      { id: "fu3", ne: "म हिमाल हेर्न जाने विचारमा छु।", ro: "ma himaal herna jaane bichaarmaa chhu.", en: "I'm thinking of going to see the mountains." },
      { id: "fu4", ne: "तपाईंको के योजना छ?", ro: "tapaainko ke yojanaa chha?", en: "What's your plan?" },
      { id: "fu5", ne: "मैले काम गर्नुपर्छ।", ro: "maile kaam garnuparchha.", en: "I have to work." },
      { id: "fu6", ne: "अब मलाई जानुपर्छ।", ro: "aba malaai jaanuparchha.", en: "I have to go now." },
      { id: "fu7", ne: "म पक्का आउँछु।", ro: "ma pakkaa aaunchhu.", en: "I'll definitely come." },
      { id: "fu8", ne: "सायद।", ro: "saayad.", en: "Maybe." },
      { id: "fu9", ne: "हेरौँ न।", ro: "heraun na.", en: "Let's see." },
      { id: "fu10", ne: "म अर्को वर्ष फेरि आउनेछु।", ro: "ma arko barsha pheri aaunechhu.", en: "I will come again next year.", note: "-nechhu is a more formal, certain future." },
      { id: "fu11", ne: "कति बजे भेट्ने?", ro: "kati baje bhetne?", en: "What time shall we meet?" },
      { id: "fu12", ne: "सात बजे भेटौँ।", ro: "saat baje bhetaun.", en: "Let's meet at seven." }
    ] },
  { id: "weather", level: "A2", title: "Weather & seasons", sub: "Sun, rain, monsoon, snow",
    tips: [
      "Rain \"falls\": <b>paani parchha</b> (literally water falls). Sun \"strikes\": <b>ghaam laagchha</b>.",
      "<b>-eko chha</b> describes a state right now: <b>baadal laageko chha</b> = it's cloudy.",
      "The monsoon (<b>barkhaa</b>) runs roughly June to September. Autumn (<b>sharad</b>) has the clearest mountain views."
    ],
    phrases: [
      { id: "wx1", ne: "आज मौसम कस्तो छ?", ro: "aaja mausam kasto chha?", en: "What's the weather like today?" },
      { id: "wx2", ne: "आज घाम लागेको छ।", ro: "aaja ghaam laageko chha.", en: "It's sunny today." },
      { id: "wx3", ne: "पानी पर्दैछ।", ro: "paani pardaichha.", en: "It's raining." },
      { id: "wx4", ne: "आज धेरै जाडो छ।", ro: "aaja dherai jaado chha.", en: "It's very cold today." },
      { id: "wx5", ne: "आज गर्मी छ।", ro: "aaja garmi chha.", en: "It's hot today." },
      { id: "wx6", ne: "बादल लागेको छ।", ro: "baadal laageko chha.", en: "It's cloudy." },
      { id: "wx7", ne: "हिउँ पर्‍यो।", ro: "hiun paryo.", en: "It snowed." },
      { id: "wx8", ne: "हावा चलेको छ।", ro: "haawaa chaleko chha.", en: "It's windy." },
      { id: "wx9", ne: "बर्खामा धेरै पानी पर्छ।", ro: "barkhaamaa dherai paani parchha.", en: "It rains a lot in the monsoon." },
      { id: "wx10", ne: "हिमाल देखिन्छ?", ro: "himaal dekhinchha?", en: "Can you see the mountains?" },
      { id: "wx11", ne: "छाता लिएर जानुहोस्।", ro: "chhaataa liera jaanuhos.", en: "Take an umbrella." },
      { id: "wx12", ne: "शरद ऋतु सबैभन्दा राम्रो हो।", ro: "sharad ritu sabaibhandaa raamro ho.", en: "Autumn is the best season." }
    ] },
  { id: "routine", level: "A2", title: "My day", sub: "Daily routine, always, sometimes",
    tips: [
      "Time + <b>baje</b> = at (time): <b>chha baje</b> = at six o'clock.",
      "<b>sadhain</b> = always, <b>kahilekaahin</b> = sometimes, <b>kahilyai</b> + negative verb = never.",
      "Saturday (<b>shanibaar</b>) is the weekly day off in Nepal, not Sunday."
    ],
    phrases: [
      { id: "ro1", ne: "म बिहान छ बजे उठ्छु।", ro: "ma bihaan chha baje uthchhu.", en: "I get up at six in the morning." },
      { id: "ro2", ne: "म नुहाउँछु।", ro: "ma nuhaaunchhu.", en: "I have a wash / shower." },
      { id: "ro3", ne: "म नौ बजे काममा जान्छु।", ro: "ma nau baje kaammaa jaanchhu.", en: "I go to work at nine." },
      { id: "ro4", ne: "दिउँसो म खाजा खान्छु।", ro: "diunso ma khaajaa khaanchhu.", en: "In the afternoon I have a snack." },
      { id: "ro5", ne: "बेलुका म खाना पकाउँछु।", ro: "belukaa ma khaanaa pakaaunchhu.", en: "In the evening I cook." },
      { id: "ro6", ne: "म राति एघार बजे सुत्छु।", ro: "ma raati eghaara baje sutchhu.", en: "I go to bed at eleven at night." },
      { id: "ro7", ne: "म सधैँ चिया पिउँछु।", ro: "ma sadhain chiyaa piunchhu.", en: "I always drink tea." },
      { id: "ro8", ne: "म कहिलेकाहीँ दौडन्छु।", ro: "ma kahilekaahin daudanchhu.", en: "I sometimes go running." },
      { id: "ro9", ne: "म कहिल्यै ढिलो उठ्दिनँ।", ro: "ma kahilyai dhilo uthdina.", en: "I never get up late." },
      { id: "ro10", ne: "आज म व्यस्त छु।", ro: "aaja ma byasta chhu.", en: "I'm busy today." },
      { id: "ro11", ne: "मसँग समय छैन।", ro: "masanga samaya chhaina.", en: "I don't have time.", note: "masanga = with me. This is how Nepali says \"I have\"." },
      { id: "ro12", ne: "शनिबार म आराम गर्छु।", ro: "shanibaar ma aaraam garchhu.", en: "On Saturday I rest." }
    ] },
  { id: "describe", level: "A2", title: "Describing", sub: "People, places, things",
    tips: [
      "Adjectives ending in <b>-o</b> change to <b>-i</b> for women and girls: <b>raamro</b> → <b>raamri</b>, <b>mero</b> → <b>meri</b>.",
      "<b>uhaan</b> = he/she (respectful). Use it for anyone older or anyone you don't know well.",
      "<b>ki</b> in a question means \"or\": <b>nayaan ho ki puraano?</b> = new or old?"
    ],
    phrases: [
      { id: "de1", ne: "उहाँ को हुनुहुन्छ?", ro: "uhaan ko hunuhunchha?", en: "Who is he / she?" },
      { id: "de2", ne: "उहाँ मेरो साथी हुनुहुन्छ।", ro: "uhaan mero saathi hunuhunchha.", en: "He / she is my friend." },
      { id: "de3", ne: "मेरो भाइ अग्लो छ।", ro: "mero bhaai aglo chha.", en: "My younger brother is tall." },
      { id: "de4", ne: "मेरी बहिनी धेरै राम्री छे।", ro: "meri bahini dherai raamri chhe.", en: "My younger sister is very pretty.", note: "chhe is the feminine of chha, used for girls and younger women you are close to. In casual speech many people just say chha." },
      { id: "de5", ne: "उहाँ धेरै दयालु हुनुहुन्छ।", ro: "uhaan dherai dayaalu hunuhunchha.", en: "He / she is very kind." },
      { id: "de6", ne: "यो कोठा सफा छ।", ro: "yo kothaa saphaa chha.", en: "This room is clean." },
      { id: "de7", ne: "त्यो होटल फोहोर छ।", ro: "tyo hotal phohor chha.", en: "That hotel is dirty." },
      { id: "de8", ne: "यो घर नयाँ हो कि पुरानो?", ro: "yo ghar nayaan ho ki puraano?", en: "Is this house new or old?" },
      { id: "de9", ne: "उसको कपाल लामो छ।", ro: "usko kapaal laamo chha.", en: "His / her hair is long." },
      { id: "de10", ne: "तपाईं थाकेको जस्तो देखिनुहुन्छ।", ro: "tapaain thaakeko jasto dekhinuhunchha.", en: "You look tired." },
      { id: "de11", ne: "कस्तो राम्रो!", ro: "kasto raamro!", en: "How nice!" },
      { id: "de12", ne: "नेपाली सजिलो छैन, तर रमाइलो छ।", ro: "nepaali sajilo chhaina, tara ramaailo chha.", en: "Nepali isn't easy, but it's fun." }
    ] },
  { id: "phone", level: "A2", title: "On the phone", sub: "Calls, messages, bad signal",
    tips: [
      "Phone calls are the hardest listening: no faces, poor sound. These phrases help you control the call.",
      "<b>aaena</b> = didn't come. <b>aawaaj aaena</b> = I can't hear you.",
      "Many modern words are English: <b>phon</b>, <b>myaasej</b>, <b>netwark</b>, <b>byaatri</b>."
    ],
    phrases: [
      { id: "ph1", ne: "हेलो, को बोल्नुभएको?", ro: "helo, ko bolnubhaeko?", en: "Hello, who's speaking?" },
      { id: "ph2", ne: "म पाउलो बोल्दैछु।", ro: "ma paulo boldaichhu.", en: "This is Paulo speaking." },
      { id: "ph3", ne: "राम हुनुहुन्छ?", ro: "raam hunuhunchha?", en: "Is Ram there?" },
      { id: "ph4", ne: "उहाँ अहिले हुनुहुन्न।", ro: "uhaan ahile hunuhunna.", en: "He's not here now." },
      { id: "ph5", ne: "म पछि फोन गर्छु।", ro: "ma pachhi phon garchhu.", en: "I'll call later." },
      { id: "ph6", ne: "आवाज आएन।", ro: "aawaaj aaena.", en: "I can't hear you." },
      { id: "ph7", ne: "अलि ठूलो स्वरले बोल्नुहोस्।", ro: "ali thulo swarle bolnuhos.", en: "Please speak a bit louder." },
      { id: "ph8", ne: "तपाईंको फोन नम्बर के हो?", ro: "tapaainko phon nambar ke ho?", en: "What's your phone number?" },
      { id: "ph9", ne: "मलाई म्यासेज पठाउनुहोस्।", ro: "malaai myaasej pathaaunuhos.", en: "Send me a message." },
      { id: "ph10", ne: "नेटवर्क छैन।", ro: "netwark chhaina.", en: "There's no signal." },
      { id: "ph11", ne: "मेरो फोनको ब्याट्री सकियो।", ro: "mero phonko byaatri sakiyo.", en: "My phone battery is dead." },
      { id: "ph12", ne: "भोलि कुरा गरौँला।", ro: "bholi kuraa garaunlaa.", en: "Let's talk tomorrow." }
    ] },
  { id: "hobby", level: "A2", title: "Free time", sub: "Hobbies, music, sport",
    tips: [
      "<b>malaai</b> + verb in <b>-na</b> + <b>man parchha</b> = I like doing: <b>malaai padhna man parchha</b> = I like reading.",
      "<b>aaundaina</b> = doesn't come: <b>malaai naachna aaundaina</b> = I can't dance.",
      "<b>phursad</b> = free time. <b>phursad chha?</b> = are you free?"
    ],
    phrases: [
      { id: "hb1", ne: "फुर्सदमा के गर्नुहुन्छ?", ro: "phursadmaa ke garnuhunchha?", en: "What do you do in your free time?" },
      { id: "hb2", ne: "मलाई गीत सुन्न मन पर्छ।", ro: "malaai git sunna man parchha.", en: "I like listening to music." },
      { id: "hb3", ne: "मलाई किताब पढ्न मन पर्छ।", ro: "malaai kitaab padhna man parchha.", en: "I like reading books." },
      { id: "hb4", ne: "मलाई ट्रेकिङ गर्न मन पर्छ।", ro: "malaai treking garna man parchha.", en: "I like trekking." },
      { id: "hb5", ne: "मलाई नाच्न आउँदैन।", ro: "malaai naachna aaundaina.", en: "I can't dance." },
      { id: "hb6", ne: "तपाईंलाई कुन खेल मन पर्छ?", ro: "tapaainlaai kun khel man parchha?", en: "Which sport do you like?" },
      { id: "hb7", ne: "मलाई फुटबल हेर्न मन पर्छ।", ro: "malaai phutbal herna man parchha.", en: "I like watching football." },
      { id: "hb8", ne: "म गितार बजाउँछु।", ro: "ma gitaar bajaaunchhu.", en: "I play the guitar." },
      { id: "hb9", ne: "तपाईंलाई नेपाली गीत मन पर्छ?", ro: "tapaainlaai nepaali git man parchha?", en: "Do you like Nepali songs?" },
      { id: "hb10", ne: "मलाई फोटो खिच्न मन पर्छ।", ro: "malaai photo khichna man parchha.", en: "I like taking photos." },
      { id: "hb11", ne: "सँगै जाऔँ न!", ro: "sangai jaaun na!", en: "Let's go together!" },
      { id: "hb12", ne: "कति रमाइलो!", ro: "kati ramaailo!", en: "What fun!" }
    ] },
  { id: "clinic", level: "A2", title: "At the clinic", sub: "Symptoms, since when, medicine",
    tips: [
      "<b>-dekhi</b> = since / for: <b>tin dindekhi</b> = for three days.",
      "Symptoms often use <b>laagchha</b> or <b>aaeko chha</b>: <b>jwaro aaeko chha</b> = (I) have a fever.",
      "Health workers are addressed with respect: <b>daaktar saab</b>, <b>sistar</b> for a nurse."
    ],
    phrases: [
      { id: "dr1", ne: "कहाँ दुख्छ?", ro: "kahaan dukhchha?", en: "Where does it hurt?" },
      { id: "dr2", ne: "यहाँ दुख्छ।", ro: "yahaan dukhchha.", en: "It hurts here." },
      { id: "dr3", ne: "कहिलेदेखि?", ro: "kahiledekhi?", en: "Since when?" },
      { id: "dr4", ne: "तीन दिनदेखि।", ro: "tin dindekhi.", en: "For three days." },
      { id: "dr5", ne: "ज्वरो आएको छ?", ro: "jwaro aaeko chha?", en: "Do you have a fever?" },
      { id: "dr6", ne: "मलाई रुघाखोकी लागेको छ।", ro: "malaai rughaakhoki laageko chha.", en: "I have a cold and a cough." },
      { id: "dr7", ne: "मलाई वाकवाकी लाग्छ।", ro: "malaai waakwaaki laagchha.", en: "I feel sick (nauseous)." },
      { id: "dr8", ne: "कुनै औषधिसँग एलर्जी छ?", ro: "kunai aushadhisanga elarji chha?", en: "Are you allergic to any medicine?" },
      { id: "dr9", ne: "गहिरो सास फेर्नुहोस्।", ro: "gahiro saas phernuhos.", en: "Take a deep breath." },
      { id: "dr10", ne: "रगत जाँच गर्नुपर्छ।", ro: "ragat jaanch garnuparchha.", en: "We need to do a blood test." },
      { id: "dr11", ne: "यो औषधि खाना खाएपछि खानुहोस्।", ro: "yo aushadhi khaanaa khaaepachhi khaanuhos.", en: "Take this medicine after eating.", note: "Nepali says \"eat\" medicine, not \"take\" it." },
      { id: "dr12", ne: "आराम गर्नुहोस्, अनि धेरै पानी पिउनुहोस्।", ro: "aaraam garnuhos, ani dherai paani piunuhos.", en: "Rest, and drink plenty of water." }
    ] },
  { id: "culture", level: "A2", title: "Festivals & customs", sub: "Wishes, manners, temples",
    tips: [
      "<b>... ko shubhakaamanaa!</b> = best wishes for ...! Works for any festival or birthday.",
      "<b>jutho</b>: food or a cup that has touched someone's mouth is impure. Don't offer it to others or drink from a shared bottle with your lips.",
      "Use your right hand to eat, give and receive. <b>milchha?</b> = is it allowed / OK?"
    ],
    phrases: [
      { id: "cu1", ne: "दसैँको शुभकामना!", ro: "dasainko shubhakaamanaa!", en: "Happy Dashain!", note: "The biggest festival, in autumn. Families gather and elders give tika." },
      { id: "cu2", ne: "तिहारको शुभकामना!", ro: "tihaarko shubhakaamanaa!", en: "Happy Tihar!", note: "The festival of lights, with marigold garlands." },
      { id: "cu3", ne: "नयाँ वर्षको शुभकामना!", ro: "nayaan barshako shubhakaamanaa!", en: "Happy New Year!", note: "The Nepali new year falls in mid-April." },
      { id: "cu4", ne: "जन्मदिनको शुभकामना!", ro: "janmadinko shubhakaamanaa!", en: "Happy birthday!" },
      { id: "cu5", ne: "टीका लगाउन आउनुहोस्।", ro: "tikaa lagaauna aaunuhos.", en: "Come and receive tika." },
      { id: "cu6", ne: "जुत्ता बाहिर खोल्नुहोस्।", ro: "juttaa baahira kholnuhos.", en: "Please take your shoes off outside." },
      { id: "cu7", ne: "दाहिने हातले खानुहोस्।", ro: "daahine haatle khaanuhos.", en: "Eat with your right hand." },
      { id: "cu8", ne: "फोटो खिच्न मिल्छ?", ro: "photo khichna milchha?", en: "May I take a photo?" },
      { id: "cu9", ne: "मन्दिरभित्र जान मिल्छ?", ro: "mandirbhitra jaana milchha?", en: "Is it OK to go inside the temple?" },
      { id: "cu10", ne: "बधाई छ!", ro: "badhaai chha!", en: "Congratulations!" },
      { id: "cu11", ne: "स्वागत छ!", ro: "swaagat chha!", en: "Welcome!" },
      { id: "cu12", ne: "जुठो नगर्नुहोस्।", ro: "jutho nagarnuhos.", en: "Don't make it jutho (don't touch it with your mouth)." }
    ] },
  { id: "compare", level: "A2", title: "Comparing", sub: "Cheaper, better, the best",
    tips: [
      "<b>bhandaa</b> = than. Put it after the thing you compare with: <b>yo tyo bhandaa sasto chha</b> = this is cheaper than that.",
      "<b>sabaibhandaa</b> = the most (literally: than all).",
      "Adjectives in <b>-o</b> become <b>-aa</b> for plurals: <b>raamro</b> → <b>raamraa</b>."
    ],
    phrases: [
      { id: "co1", ne: "यो त्यो भन्दा सस्तो छ।", ro: "yo tyo bhandaa sasto chha.", en: "This is cheaper than that." },
      { id: "co2", ne: "कुन राम्रो छ?", ro: "kun raamro chha?", en: "Which one is better?" },
      { id: "co3", ne: "यो सबैभन्दा राम्रो हो।", ro: "yo sabaibhandaa raamro ho.", en: "This is the best." },
      { id: "co4", ne: "काठमाडौं पोखराभन्दा ठूलो छ।", ro: "kaathmaadaun pokharaabhandaa thulo chha.", en: "Kathmandu is bigger than Pokhara." },
      { id: "co5", ne: "मलाई चियाभन्दा कफी मन पर्छ।", ro: "malaai chiyaabhandaa kaphi man parchha.", en: "I prefer coffee to tea." },
      { id: "co6", ne: "दुवै राम्रा छन्।", ro: "duwai raamraa chhan.", en: "Both are good." },
      { id: "co7", ne: "कुनै पनि हुन्छ।", ro: "kunai pani hunchha.", en: "Either one is fine." },
      { id: "co8", ne: "चिनी अलि कम हाल्नुहोस्।", ro: "chini ali kam haalnuhos.", en: "Put in a bit less sugar." },
      { id: "co9", ne: "यति धेरै?", ro: "yati dherai?", en: "This much?" },
      { id: "co10", ne: "पुग्छ?", ro: "pugchha?", en: "Is it enough?" },
      { id: "co11", ne: "पुग्दैन।", ro: "pugdaina.", en: "It's not enough." },
      { id: "co12", ne: "म यो लिन्छु।", ro: "ma yo linchhu.", en: "I'll take this one." }
    ] },

  /* ---------------- B1 ---------------- */
  { id: "opinion", level: "B1", title: "Opinions", sub: "I think, I agree, it depends",
    tips: [
      "<b>malaai laagchha</b> = I think (literally: it strikes me). Very common in conversation.",
      "<b>jasto laagchha</b> = it seems like: <b>tyasto hoina jasto laagchha</b> = I don't think it's like that.",
      "Nepalis often disagree softly. <b>ek hisaable, ho</b> (in a way, yes) is polite disagreement."
    ],
    phrases: [
      { id: "op1", ne: "तपाईंलाई के लाग्छ?", ro: "tapaainlaai ke laagchha?", en: "What do you think?" },
      { id: "op2", ne: "मलाई लाग्छ, यो ठिक हो।", ro: "malaai laagchha, yo thik ho.", en: "I think this is right." },
      { id: "op3", ne: "मेरो विचारमा नेपाली खाना संसारकै मीठो हो।", ro: "mero bichaarmaa nepaali khaanaa sansaarkai mitho ho.", en: "In my opinion Nepali food is the tastiest in the world." },
      { id: "op4", ne: "म सहमत छु।", ro: "ma sahamat chhu.", en: "I agree." },
      { id: "op5", ne: "म सहमत छैनँ।", ro: "ma sahamat chhaina.", en: "I don't agree." },
      { id: "op6", ne: "तपाईंले ठिक भन्नुभयो।", ro: "tapaainle thik bhannubhayo.", en: "You're right." },
      { id: "op7", ne: "त्यस्तो होइन जस्तो लाग्छ।", ro: "tyasto hoina jasto laagchha.", en: "I don't think it's like that." },
      { id: "op8", ne: "यो परिस्थितिमा निर्भर गर्छ।", ro: "yo paristhitimaa nirbhar garchha.", en: "It depends on the situation." },
      { id: "op9", ne: "एक हिसाबले, हो।", ro: "ek hisaable, ho.", en: "In a way, yes." },
      { id: "op10", ne: "मलाई पक्का थाहा छैन।", ro: "malaai pakkaa thaahaa chhaina.", en: "I'm not sure." },
      { id: "op11", ne: "मेरो कुरा सुन्नुहोस् त।", ro: "mero kuraa sunnuhos ta.", en: "Hear me out." },
      { id: "op12", ne: "यसको फाइदा र बेफाइदा दुवै छन्।", ro: "yasko phaaidaa ra bephaaidaa duwai chhan.", en: "It has both advantages and disadvantages." }
    ] },
  { id: "tell", level: "B1", title: "Telling a story", sub: "First, then, because, suddenly",
    tips: [
      "Story connectors: <b>pahile</b> (first), <b>tyaspachhi</b> (after that), <b>ani</b> (and then), <b>tara</b> (but), <b>kinabhane</b> (because), <b>tyasaile</b> (so).",
      "Habitual past: <b>-thyo / -then</b>. <b>ma gaaunmaa basthen</b> = I used to live in a village.",
      "<b>-na thaalyo</b> = started to: <b>paani parna thaalyo</b> = it started to rain."
    ],
    phrases: [
      { id: "st1", ne: "पहिले हामी बस चढ्यौँ।", ro: "pahile haami bas chadhyaun.", en: "First we got on the bus." },
      { id: "st2", ne: "त्यसपछि बाटो बन्द भयो।", ro: "tyaspachhi baato banda bhayo.", en: "After that the road was blocked." },
      { id: "st3", ne: "अनि हामीले दुई घण्टा कुर्‍यौँ।", ro: "ani haamile dui ghantaa kuryaun.", en: "And we waited two hours." },
      { id: "st4", ne: "किनभने पहिरो गएको थियो।", ro: "kinabhane pahiro gaeko thiyo.", en: "Because there had been a landslide." },
      { id: "st5", ne: "तर अन्त्यमा हामी समयमै पुग्यौँ।", ro: "tara antyamaa haami samayamai pugyaun.", en: "But in the end we arrived on time." },
      { id: "st6", ne: "जब म सानो थिएँ, म गाउँमा बस्थेँ।", ro: "jaba ma saano thien, ma gaaunmaa basthen.", en: "When I was little, I lived in a village." },
      { id: "st7", ne: "त्यतिबेला बिजुली थिएन।", ro: "tyatibelaa bijuli thiena.", en: "Back then there was no electricity." },
      { id: "st8", ne: "अचानक पानी पर्न थाल्यो।", ro: "achaanak paani parna thaalyo.", en: "Suddenly it started to rain." },
      { id: "st9", ne: "मलाई अझै याद छ।", ro: "malaai ajhai yaad chha.", en: "I still remember." },
      { id: "st10", ne: "के भयो थाहा छ?", ro: "ke bhayo thaahaa chha?", en: "Do you know what happened?" },
      { id: "st11", ne: "पछि मात्र मैले बुझेँ।", ro: "pachhi maatra maile bujhen.", en: "Only later did I understand." },
      { id: "st12", ne: "त्यसैले म फेरि त्यहाँ गइनँ।", ro: "tyasaile ma pheri tyahaan gaina.", en: "That's why I didn't go there again." }
    ] },
  { id: "work", level: "B1", title: "Work & study", sub: "Your job, research, meetings",
    tips: [
      "<b>-dekhi ... -samma</b> = from ... until: <b>naudekhi paanch bajesamma</b> = from nine to five.",
      "<b>-dai aaeko chhu</b> = have been doing (for a while): <b>dherai barshadekhi gardai aaeko chhu</b> = I've been doing it for years.",
      "<b>-haru</b> makes plurals: <b>bidyaarthi</b> (student) → <b>bidyaarthiharu</b> (students)."
    ],
    phrases: [
      { id: "wk1", ne: "म विश्वविद्यालयमा पढाउँछु।", ro: "ma bishwabidyaalayamaa padhaaunchhu.", en: "I teach at a university." },
      { id: "wk2", ne: "म नर्सिङका विद्यार्थीहरूलाई पढाउँछु।", ro: "ma narsingkaa bidyaarthiharulaai padhaaunchhu.", en: "I teach nursing students." },
      { id: "wk3", ne: "म अनुसन्धान गर्छु।", ro: "ma anusandhaan garchhu.", en: "I do research." },
      { id: "wk4", ne: "तपाईं कहाँ काम गर्नुहुन्छ?", ro: "tapaain kahaan kaam garnuhunchha?", en: "Where do you work?" },
      { id: "wk5", ne: "मेरो कामको समय नौदेखि पाँच बजेसम्म हो।", ro: "mero kaamko samaya naudekhi paanch bajesamma ho.", en: "My working hours are nine to five." },
      { id: "wk6", ne: "आज बैठक छ।", ro: "aaja baithak chha.", en: "There's a meeting today." },
      { id: "wk7", ne: "मलाई बिदा चाहियो।", ro: "malaai bidaa chaahiyo.", en: "I need some time off." },
      { id: "wk8", ne: "यो काम कहिलेसम्म सक्नुपर्छ?", ro: "yo kaam kahilesamma saknuparchha?", en: "By when does this need to be finished?" },
      { id: "wk9", ne: "म यसमा काम गर्दैछु।", ro: "ma yasmaa kaam gardaichhu.", en: "I'm working on it." },
      { id: "wk10", ne: "तपाईंले के पढ्नुभयो?", ro: "tapaainle ke padhnubhayo?", en: "What did you study?" },
      { id: "wk11", ne: "मैले जीवविज्ञान पढेँ।", ro: "maile jiwabigyaan padhen.", en: "I studied biology." },
      { id: "wk12", ne: "म यो काम धेरै वर्षदेखि गर्दै आएको छु।", ro: "ma yo kaam dherai barshadekhi gardai aaeko chhu.", en: "I've been doing this job for many years." }
    ] },
  { id: "health", level: "B1", title: "Health care", sub: "Vaccines, infection, hygiene",
    tips: [
      "Formal health words come from Sanskrit (<b>sankraman</b> = infection, <b>raktachaap</b> = blood pressure). Patients often use English ones instead: <b>presar</b>, <b>sugar</b>.",
      "<b>-nuparchha</b> gives instructions politely: <b>raktachaap naapnuparchha</b> = we need to measure your blood pressure.",
      "<b>nalinuhos / nagarnuhos</b>: <b>na-</b> + polite verb = please don't."
    ],
    phrases: [
      { id: "he1", ne: "रोग प्रतिरोधात्मक क्षमता", ro: "rog pratirodhaatmak kshamataa", en: "Immunity (the immune system's strength)" },
      { id: "he2", ne: "खोप लगाउनुभएको छ?", ro: "khop lagaaunubhaeko chha?", en: "Have you been vaccinated?" },
      { id: "he3", ne: "बच्चालाई खोप लगाउनुपर्छ।", ro: "bachchaalaai khop lagaaunuparchha.", en: "The child needs to be vaccinated." },
      { id: "he4", ne: "यो संक्रमण हो।", ro: "yo sankraman ho.", en: "This is an infection." },
      { id: "he5", ne: "घाउ सफा राख्नुहोस्।", ro: "ghaau saphaa raakhnuhos.", en: "Keep the wound clean." },
      { id: "he6", ne: "हात साबुन पानीले धुनुहोस्।", ro: "haat saabun paanile dhunuhos.", en: "Wash your hands with soap and water." },
      { id: "he7", ne: "रक्तचाप नाप्नुपर्छ।", ro: "raktachaap naapnuparchha.", en: "We need to measure your blood pressure." },
      { id: "he8", ne: "तपाईंको तौल कति छ?", ro: "tapaainko taul kati chha?", en: "How much do you weigh?" },
      { id: "he9", ne: "दिनको दुई पटक, सात दिनसम्म खानुहोस्।", ro: "dinko dui patak, saat dinsamma khaanuhos.", en: "Take it twice a day for seven days." },
      { id: "he10", ne: "यसको कुनै नराम्रो असर हुन्छ?", ro: "yasko kunai naraamro asar hunchha?", en: "Does it have any side effects?" },
      { id: "he11", ne: "बिरामीलाई अस्पताल लैजानुपर्छ।", ro: "biraamilaai aspataal laijaanuparchha.", en: "The patient must be taken to hospital." },
      { id: "he12", ne: "चिन्ता नलिनुहोस्, यो गम्भीर छैन।", ro: "chintaa nalinuhos, yo gambhir chhaina.", en: "Don't worry, it's not serious." }
    ] },
  { id: "solve", level: "B1", title: "Sorting out problems", sub: "Complaints, refunds, favours",
    tips: [
      "<b>ke tapaain ... saknuhunchha?</b> = could you ...? The most polite way to ask for help.",
      "<b>sakinchha?</b> = is it possible? (literally: can it be done?)",
      "<b>thulo upakaar bhayo</b> (that's a great favour) is a warm thank-you for real help."
    ],
    phrases: [
      { id: "sv1", ne: "के तपाईं मलाई मद्दत गर्न सक्नुहुन्छ?", ro: "ke tapaain malaai maddat garna saknuhunchha?", en: "Could you help me?" },
      { id: "sv2", ne: "एउटा समस्या छ।", ro: "eutaa samasyaa chha.", en: "There's a problem." },
      { id: "sv3", ne: "मेरो झोला हरायो।", ro: "mero jholaa haraayo.", en: "My bag is lost." },
      { id: "sv4", ne: "कोठाको बत्ती बलेन।", ro: "kothaako batti balena.", en: "The light in the room doesn't work." },
      { id: "sv5", ne: "तातो पानी आउँदैन।", ro: "taato paani aaundaina.", en: "There's no hot water." },
      { id: "sv6", ne: "यो मैले मगाएको होइन।", ro: "yo maile magaaeko hoina.", en: "This isn't what I ordered." },
      { id: "sv7", ne: "पैसा फिर्ता पाउन सकिन्छ?", ro: "paisaa phirtaa paauna sakinchha?", en: "Can I get a refund?" },
      { id: "sv8", ne: "कसलाई सोध्नुपर्छ?", ro: "kaslaai sodhnuparchha?", en: "Who should I ask?" },
      { id: "sv9", ne: "म अलि हतारमा छु।", ro: "ma ali hataarmaa chhu.", en: "I'm in a bit of a hurry." },
      { id: "sv10", ne: "कुनै उपाय छ?", ro: "kunai upaaya chha?", en: "Is there any way to fix it?" },
      { id: "sv11", ne: "तपाईंलाई दुःख दिएँ, माफ गर्नुहोस्।", ro: "tapaainlaai dukha dien, maaf garnuhos.", en: "Sorry to trouble you." },
      { id: "sv12", ne: "ठूलो उपकार भयो।", ro: "thulo upakaar bhayo.", en: "Thank you, that's a big favour." }
    ] },
  { id: "ifthen", level: "B1", title: "If and even if", sub: "Conditions, would, before, after",
    tips: [
      "<b>... bhane</b> = if: <b>paani paryo bhane</b> = if it rains. The verb before it is usually in the past form (<b>paryo bhane</b>), but the present also works (<b>milchha bhane</b>).",
      "Unreal \"would\": <b>-eko bhae ... -thyo/-then</b>. <b>paisaa bhaeko bhae, ma kinthen</b> = if I had money, I would buy.",
      "<b>-epachhi</b> = after, <b>-nuaghi</b> = before, <b>bhae pani</b> = even if."
    ],
    phrases: [
      { id: "if1", ne: "पानी पर्‍यो भने म आउँदिनँ।", ro: "paani paryo bhane ma aaundina.", en: "If it rains, I won't come." },
      { id: "if2", ne: "समय भयो भने फोन गर्नुहोस्।", ro: "samaya bhayo bhane phon garnuhos.", en: "If you have time, give me a call." },
      { id: "if3", ne: "मसँग पैसा भएको भए, म घर किन्थेँ।", ro: "masanga paisaa bhaeko bhae, ma ghar kinthen.", en: "If I had money, I would buy a house." },
      { id: "if4", ne: "तपाईं नआउनुभएको भए, म एक्लै हुन्थेँ।", ro: "tapaain naaaunubhaeko bhae, ma eklai hunthen.", en: "If you hadn't come, I would have been alone." },
      { id: "if5", ne: "मिल्छ भने भोलि भेटौँ।", ro: "milchha bhane bholi bhetaun.", en: "If it suits you, let's meet tomorrow." },
      { id: "if6", ne: "जति छिटो, त्यति राम्रो।", ro: "jati chhito, tyati raamro.", en: "The sooner the better." },
      { id: "if7", ne: "तपाईंले भन्नुभएजस्तै गर्छु।", ro: "tapaainle bhannubhaejastai garchhu.", en: "I'll do as you said." },
      { id: "if8", ne: "तपाईंको ठाउँमा म भएको भए, त्यसो गर्दिनथेँ।", ro: "tapaainko thaaunmaa ma bhaeko bhae, tyaso gardinathen.", en: "If I were you, I wouldn't do that." },
      { id: "if9", ne: "नेपाल पुगेपछि म्यासेज गर्नुहोस्।", ro: "nepaal pugepachhi myaasej garnuhos.", en: "Send a message once you reach Nepal." },
      { id: "if10", ne: "खाना खानुअघि हात धुनुहोस्।", ro: "khaanaa khaanuaghi haat dhunuhos.", en: "Wash your hands before eating." },
      { id: "if11", ne: "जे भए पनि म आउँछु।", ro: "je bhae pani ma aaunchhu.", en: "Whatever happens, I'll come." },
      { id: "if12", ne: "नेपाली गाह्रो भए पनि म छोड्दिनँ।", ro: "nepaali gaahro bhae pani ma chhoddina.", en: "Even if Nepali is hard, I won't give up." }
    ] },
  { id: "emotion", level: "B1", title: "Emotions", sub: "Missing home, anger, pride, care",
    tips: [
      "Most emotions \"strike\" you: <b>malaai dar laagchha</b> = I'm scared, <b>laaj laagyo</b> = I felt embarrassed.",
      "<b>yaad aayo</b> = (the memory) came: <b>gharko yaad aayo</b> = I miss home.",
      "<b>-iraheko chhu</b> = keep doing / have been doing: <b>samjhiraheko chhu</b> = I keep thinking of (you)."
    ],
    phrases: [
      { id: "em1", ne: "म तपाईंलाई सम्झिरहेको छु।", ro: "ma tapaainlaai samjhiraheko chhu.", en: "I've been thinking of you." },
      { id: "em2", ne: "मलाई घरको याद आयो।", ro: "malaai gharko yaad aayo.", en: "I miss home." },
      { id: "em3", ne: "म धेरै खुसी छु।", ro: "ma dherai khusi chhu.", en: "I'm very happy." },
      { id: "em4", ne: "मलाई दुःख लाग्यो।", ro: "malaai dukha laagyo.", en: "I'm sad / I'm sorry to hear that." },
      { id: "em5", ne: "मलाई रिस उठ्यो।", ro: "malaai ris uthyo.", en: "I got angry." },
      { id: "em6", ne: "मलाई डर लाग्छ।", ro: "malaai dar laagchha.", en: "I'm scared." },
      { id: "em7", ne: "मलाई लाज लाग्यो।", ro: "malaai laaj laagyo.", en: "I felt embarrassed." },
      { id: "em8", ne: "अचम्म लाग्यो!", ro: "achamma laagyo!", en: "What a surprise!" },
      { id: "em9", ne: "तपाईं मेरो मिल्ने साथी हुनुहुन्छ।", ro: "tapaain mero milne saathi hunuhunchha.", en: "You're my close friend." },
      { id: "em10", ne: "चिन्ताको कुरा केही छैन।", ro: "chintaako kuraa kehi chhaina.", en: "There's nothing to worry about." },
      { id: "em11", ne: "मलाई तपाईंप्रति गर्व छ।", ro: "malaai tapaainprati garba chha.", en: "I'm proud of you." },
      { id: "em12", ne: "आफ्नो ख्याल राख्नुहोस्।", ro: "aaphno khyaal raakhnuhos.", en: "Take care of yourself." }
    ] },
  { id: "news", level: "B1", title: "News & society", sub: "Government, prices, migration",
    tips: [
      "News Nepali is more formal and fast. These are words you'll hear on every bulletin.",
      "<b>-le</b> marks who does an action in the past: <b>sarkaarle niyam lyaayo</b> = the government brought a rule.",
      "<b>-anusaar</b> = according to."
    ],
    phrases: [
      { id: "nw1", ne: "आजको समाचार सुन्नुभयो?", ro: "aajako samaachaar sunnubhayo?", en: "Did you hear today's news?" },
      { id: "nw2", ne: "सरकारले नयाँ नियम ल्यायो।", ro: "sarkaarle nayaan niyam lyaayo.", en: "The government introduced a new rule." },
      { id: "nw3", ne: "चुनाव कहिले हुन्छ?", ro: "chunaab kahile hunchha?", en: "When is the election?" },
      { id: "nw4", ne: "महँगी बढ्दैछ।", ro: "mahangi badhdaichha.", en: "Prices are going up." },
      { id: "nw5", ne: "बाढी र पहिरोले धेरै क्षति भयो।", ro: "baadhi ra pahirole dherai kshati bhayo.", en: "Floods and landslides caused a lot of damage." },
      { id: "nw6", ne: "धेरै युवा विदेश जाँदैछन्।", ro: "dherai yuwaa bidesh jaandaichhan.", en: "Many young people are going abroad." },
      { id: "nw7", ne: "पर्यटन बढेको छ।", ro: "paryatan badheko chha.", en: "Tourism has grown." },
      { id: "nw8", ne: "मौसम पूर्वानुमानअनुसार भोलि पानी पर्छ।", ro: "mausam purwaanumaananusaar bholi paani parchha.", en: "According to the forecast, it will rain tomorrow." },
      { id: "nw9", ne: "यो विषयमा धेरै बहस भइरहेको छ।", ro: "yo bishayamaa dherai bahas bhairaheko chha.", en: "There's a lot of debate about this." },
      { id: "nw10", ne: "सडक बन्द भएको छ।", ro: "sadak banda bhaeko chha.", en: "The road is closed." },
      { id: "nw11", ne: "विद्यार्थीहरूले आन्दोलन गरे।", ro: "bidyaarthiharule aandolan gare.", en: "The students held a protest." },
      { id: "nw12", ne: "स्थिति सामान्य छ।", ro: "sthiti saamaanya chha.", en: "The situation is normal." }
    ] }
);

C.dialogues.push(
  { id: "d9", unit: "past", title: "The weekend", scene: "A colleague asks about your Saturday.",
    lines: [
      { who: "A", ne: "शनिबार के गर्नुभयो?", ro: "shanibaar ke garnubhayo?", en: "What did you do on Saturday?" },
      { who: "B", ne: "म साथीहरूसँग स्वयम्भू गएँ।", ro: "ma saathiharusanga swayambhu gaen.", en: "I went to Swayambhu with friends." },
      { who: "A", ne: "ओहो, कस्तो लाग्यो?", ro: "oho, kasto laagyo?", en: "Oh, how was it?" },
      { who: "B", ne: "धेरै राम्रो लाग्यो। त्यहाँबाट पूरै काठमाडौं देखिन्छ।", ro: "dherai raamro laagyo. tyahaanbaata purai kaathmaadaun dekhinchha.", en: "I loved it. You can see all of Kathmandu from there." },
      { who: "A", ne: "बाँदर देख्नुभयो?", ro: "baandar dekhnubhayo?", en: "Did you see the monkeys?" },
      { who: "B", ne: "देखेँ! एउटाले मेरो केरा खोस्यो।", ro: "dekhen! eutaale mero keraa khosyo.", en: "I did! One of them snatched my banana." },
      { who: "A", ne: "हाहा! त्यहाँ सधैँ त्यस्तै हुन्छ।", ro: "haahaa! tyahaan sadhain tyastai hunchha.", en: "Haha! That always happens there." }
    ] },
  { id: "d10", unit: "clinic", title: "Seeing a doctor", scene: "You visit a clinic in Lalitpur with a fever.",
    lines: [
      { who: "A", ne: "नमस्ते, के समस्या छ?", ro: "namaste, ke samasyaa chha?", en: "Hello, what's the problem?" },
      { who: "B", ne: "मलाई तीन दिनदेखि ज्वरो आएको छ।", ro: "malaai tin dindekhi jwaro aaeko chha.", en: "I've had a fever for three days." },
      { who: "A", ne: "अरू के-के हुन्छ?", ro: "aru ke-ke hunchha?", en: "What else is happening?" },
      { who: "B", ne: "टाउको दुख्छ, अनि खोकी पनि लागेको छ।", ro: "taauko dukhchha, ani khoki pani laageko chha.", en: "My head hurts, and I have a cough too." },
      { who: "A", ne: "कुनै औषधिसँग एलर्जी छ?", ro: "kunai aushadhisanga elarji chha?", en: "Are you allergic to any medicine?" },
      { who: "B", ne: "छैन।", ro: "chhaina.", en: "No." },
      { who: "A", ne: "रगत जाँच गरौँ। आराम गर्नुहोस्, धेरै पानी पिउनुहोस्।", ro: "ragat jaanch garaun. aaraam garnuhos, dherai paani piunuhos.", en: "Let's do a blood test. Rest, and drink plenty of water." },
      { who: "B", ne: "धन्यवाद, डाक्टर साब।", ro: "dhanyabaad, daaktar saab.", en: "Thank you, doctor." }
    ] },
  { id: "d11", unit: "opinion", title: "Going abroad", scene: "Talking with a friend about young people leaving Nepal.",
    lines: [
      { who: "A", ne: "धेरै युवा विदेश जाँदैछन्। तपाईंलाई के लाग्छ?", ro: "dherai yuwaa bidesh jaandaichhan. tapaainlaai ke laagchha?", en: "Many young people are going abroad. What do you think?" },
      { who: "B", ne: "मलाई लाग्छ, यसको फाइदा र बेफाइदा दुवै छन्।", ro: "malaai laagchha, yasko phaaidaa ra bephaaidaa duwai chhan.", en: "I think it has both advantages and disadvantages." },
      { who: "A", ne: "कस्तो फाइदा?", ro: "kasto phaaidaa?", en: "What kind of advantages?" },
      { who: "B", ne: "उनीहरू पैसा कमाउँछन्, नयाँ सीप सिक्छन्।", ro: "uniharu paisaa kamaaunchhan, nayaan sip sikchhan.", en: "They earn money and learn new skills." },
      { who: "A", ne: "तर गाउँमा त बूढाबूढी मात्र बाँकी छन्।", ro: "tara gaaunmaa ta budhaabudhi maatra baanki chhan.", en: "But only old people are left in the villages." },
      { who: "B", ne: "तपाईंले ठिक भन्नुभयो। त्यो ठूलो समस्या हो।", ro: "tapaainle thik bhannubhayo. tyo thulo samasyaa ho.", en: "You're right. That's a big problem." }
    ] },
  { id: "d12", unit: "solve", title: "A problem at the hotel", scene: "You go down to reception.",
    lines: [
      { who: "B", ne: "माफ गर्नुहोस्, एउटा समस्या छ।", ro: "maaf garnuhos, eutaa samasyaa chha.", en: "Excuse me, there's a problem." },
      { who: "A", ne: "भन्नुहोस् न, के भयो?", ro: "bhannuhos na, ke bhayo?", en: "Go ahead, what happened?" },
      { who: "B", ne: "मेरो कोठामा तातो पानी आउँदैन।", ro: "mero kothaamaa taato paani aaundaina.", en: "There's no hot water in my room." },
      { who: "A", ne: "ओहो, माफ गर्नुहोस्। म अहिल्यै मान्छे पठाउँछु।", ro: "oho, maaf garnuhos. ma ahilyai maanchhe pathaaunchhu.", en: "Oh, I'm sorry. I'll send someone right now." },
      { who: "B", ne: "कति समय लाग्छ? म अलि हतारमा छु।", ro: "kati samaya laagchha? ma ali hataarmaa chhu.", en: "How long will it take? I'm in a bit of a hurry." },
      { who: "A", ne: "दस मिनेटमा ठिक हुन्छ।", ro: "das minetmaa thik hunchha.", en: "It'll be fixed in ten minutes." },
      { who: "B", ne: "ठूलो उपकार भयो, धन्यवाद।", ro: "thulo upakaar bhayo, dhanyabaad.", en: "That's very kind, thank you." }
    ] }
);

// Listening stories: one voice, played sentence by sentence, then questions.
C.stories = [
  { id: "s1", level: "A2", title: "Sita's day", intro: "Listen to a day in a teacher's life. Note: verbs for women end in -chhin.",
    lines: [
      { ne: "सीता बिहान पाँच बजे उठ्छिन्।", ro: "sitaa bihaan paanch baje uthchhin.", en: "Sita gets up at five in the morning." },
      { ne: "पहिले उनी चिया बनाउँछिन्।", ro: "pahile uni chiyaa banaaunchhin.", en: "First she makes tea." },
      { ne: "त्यसपछि उनी मन्दिर जान्छिन्।", ro: "tyaspachhi uni mandir jaanchhin.", en: "Then she goes to the temple." },
      { ne: "नौ बजे उनी स्कुलमा पढाउन जान्छिन्।", ro: "nau baje uni skulmaa padhaauna jaanchhin.", en: "At nine she goes to teach at school." },
      { ne: "बेलुका उनी परिवारसँग दाल भात खान्छिन्।", ro: "belukaa uni pariwaarsanga daal bhaat khaanchhin.", en: "In the evening she eats dal bhat with her family." },
      { ne: "राति उनी नेपाली गीत सुन्दै सुत्छिन्।", ro: "raati uni nepaali git sundai sutchhin.", en: "At night she falls asleep listening to Nepali songs." }
    ],
    questions: [
      { q: "When does Sita get up?", a: "At five", o: ["At six", "At nine", "At seven"] },
      { q: "What does she do first?", a: "Makes tea", o: ["Goes to the temple", "Teaches", "Listens to music"] },
      { q: "What is her job?", a: "Teacher", o: ["Nurse", "Shopkeeper", "Driver"] }
    ] },
  { id: "s2", level: "A2", title: "A trip to Pokhara", intro: "Someone tells you about last week's trip.",
    lines: [
      { ne: "गएको हप्ता म पोखरा गएँ।", ro: "gaeko haptaa ma pokharaa gaen.", en: "Last week I went to Pokhara." },
      { ne: "काठमाडौंबाट बसमा सात घण्टा लाग्यो।", ro: "kaathmaadaunbaata basmaa saat ghantaa laagyo.", en: "By bus from Kathmandu it took seven hours." },
      { ne: "बाटोमा धेरै पानी पर्‍यो।", ro: "baatomaa dherai paani paryo.", en: "It rained a lot on the way." },
      { ne: "तर भोलिपल्ट बिहान घाम लाग्यो।", ro: "tara bholipalta bihaan ghaam laagyo.", en: "But the next morning it was sunny." },
      { ne: "तालबाट माछापुच्छ्रे हिमाल सफा देखियो।", ro: "taalbaata maachhaapuchhre himaal saphaa dekhiyo.", en: "From the lake, Machhapuchhre mountain was clearly visible." },
      { ne: "म डुङ्गा चढेँ, अनि मैले धेरै फोटो खिचेँ।", ro: "ma dungaa chadhen, ani maile dherai photo khichen.", en: "I went on a boat, and I took lots of photos." },
      { ne: "अर्को वर्ष म फेरि जानेछु।", ro: "arko barsha ma pheri jaanechhu.", en: "Next year I will go again." }
    ],
    questions: [
      { q: "How long was the bus journey?", a: "Seven hours", o: ["Three hours", "Ten hours", "One hour"] },
      { q: "What was the weather like on the way?", a: "Rainy", o: ["Snowy", "Sunny", "Windy"] },
      { q: "What did they do at the lake?", a: "Went on a boat and took photos", o: ["Went swimming", "Went fishing", "Slept"] }
    ] },
  { id: "s3", level: "B1", title: "Growing up in Ilam", intro: "A man remembers his childhood in the tea hills of eastern Nepal.",
    lines: [
      { ne: "जब म सानो थिएँ, म इलामको एउटा सानो गाउँमा बस्थेँ।", ro: "jaba ma saano thien, ma ilaamko eutaa saano gaaunmaa basthen.", en: "When I was little, I lived in a small village in Ilam." },
      { ne: "त्यतिबेला गाउँमा बिजुली थिएन।", ro: "tyatibelaa gaaunmaa bijuli thiena.", en: "Back then the village had no electricity." },
      { ne: "हामी टुकीको उज्यालोमा पढ्थ्यौँ।", ro: "haami tukiko ujyaalomaa padhthyaun.", en: "We studied by the light of an oil lamp." },
      { ne: "स्कुल पुग्न एक घण्टा हिँड्नुपर्थ्यो।", ro: "skul pugna ek ghantaa hindnuparthyo.", en: "We had to walk an hour to get to school." },
      { ne: "मेरा आमाबुबा चिया बगानमा काम गर्नुहुन्थ्यो।", ro: "meraa aamaabubaa chiyaa bagaanmaa kaam garnuhunthyo.", en: "My parents worked on a tea estate." },
      { ne: "अहिले गाउँमा सडक र इन्टरनेट दुवै छन्।", ro: "ahile gaaunmaa sadak ra intaranet duwai chhan.", en: "Now the village has both a road and the internet." },
      { ne: "तर धेरै युवा विदेश गएकाले गाउँ अलि सुनसान भएको छ।", ro: "tara dherai yuwaa bidesh gaekaale gaaun ali sunsaan bhaeko chha.", en: "But because many young people have gone abroad, the village has become rather quiet." }
    ],
    questions: [
      { q: "Where was the village?", a: "Ilam", o: ["Pokhara", "Chitwan", "Mustang"] },
      { q: "How did the children study at night?", a: "By an oil lamp", o: ["With electric light", "On phones", "They didn't study"] },
      { q: "Why is the village quiet now?", a: "Many young people went abroad", o: ["There was a flood", "There is no road", "The tea estate closed"] }
    ] },
  { id: "s4", level: "B1", title: "The health camp", intro: "A villager describes a free health camp.",
    lines: [
      { ne: "गएको महिना हाम्रो गाउँमा निःशुल्क स्वास्थ्य शिविर लाग्यो।", ro: "gaeko mahinaa haamro gaaunmaa nihshulka swaasthya shibir laagyo.", en: "Last month there was a free health camp in our village." },
      { ne: "काठमाडौंबाट डाक्टर र नर्सहरू आउनुभयो।", ro: "kaathmaadaunbaata daaktar ra narsharu aaunubhayo.", en: "Doctors and nurses came from Kathmandu." },
      { ne: "उहाँहरूले बच्चाहरूलाई खोप लगाउनुभयो।", ro: "uhaanharule bachchaaharulaai khop lagaaunubhayo.", en: "They vaccinated the children." },
      { ne: "बूढाबूढीको रक्तचाप र सुगर जाँच गरियो।", ro: "budhaabudhiko raktachaap ra sugar jaanch gariyo.", en: "Elderly people had their blood pressure and blood sugar checked." },
      { ne: "धेरैलाई आफूलाई मधुमेह भएको थाहै थिएन।", ro: "dherailaai aaphulaai madhumeha bhaeko thaahai thiena.", en: "Many didn't even know they had diabetes." },
      { ne: "एक जना नर्सले सबैलाई हात धुने सही तरिका सिकाउनुभयो।", ro: "ek janaa narsle sabailaai haat dhune sahi tarikaa sikaaunubhayo.", en: "A nurse taught everyone the right way to wash their hands." },
      { ne: "गाउँलेहरू अर्को वर्ष पनि शिविर होस् भन्ने चाहन्छन्।", ro: "gaaunleharu arko barsha pani shibir hos bhanne chaahanchhan.", en: "The villagers want there to be a camp next year too." }
    ],
    questions: [
      { q: "Who came to the village?", a: "Doctors and nurses", o: ["Teachers", "Police", "Politicians"] },
      { q: "What did the children receive?", a: "Vaccines", o: ["Books", "Food", "Money"] },
      { q: "What did many elderly people not know?", a: "That they had diabetes", o: ["That the camp was free", "The nurse's name", "How to read"] }
    ] }
];

// Levels, and the path beyond the lessons.
C.levels = [
  { id: "A1", name: "A1 · Survival", can: "Greet people, introduce yourself, order food, ask prices and directions, and keep a conversation going when you don't understand." },
  { id: "A2", name: "A2 · Everyday life", can: "Talk about your day, your past and your plans, describe people, handle a doctor's visit or a phone call, and follow simple stories." },
  { id: "B1", name: "B1 · Independent", can: "Give opinions, tell what happened, discuss work and health, sort out problems, and follow slow news on familiar topics." },
  { id: "B2", name: "B2 · Confident", can: "Follow most TV and radio, talk for a long time on many topics, and argue a point. Reached with daily real-world listening, conversation, and the Devanagari script." },
  { id: "C1", name: "C1 · Fluent", can: "Understand fast speech, jokes and podcasts without effort, and speak spontaneously at work. Needs hundreds of hours of native media and regular conversation." },
  { id: "C2", name: "C2 · Near-native", can: "Understand virtually everything, including dialects and nuance. In practice this means living, working or studying in Nepali for years." }
];
C.resources = [
  { level: "A2", title: "Language exchange partner", body: "Free on HelloTalk or Tandem. One 30-minute call a week (half Nepali, half your language) is the single biggest boost to speaking.", url: "https://www.hellotalk.com/" },
  { level: "A2", title: "Peace Corps Nepali course", body: "A free, complete beginner course with audio, written for volunteers living in Nepal.", url: "https://www.livelingua.com/project/peace-corps/Nepali" },
  { level: "B1", title: "BBC News Nepali", body: "Short news videos and radio-style bulletins on familiar world topics. Start with one story a day; replay it until you catch the gist.", url: "https://www.bbc.com/nepali" },
  { level: "B1", title: "Nepali songs with lyrics", body: "Search YouTube for \"Nepali song lyrics\". Sing along: it trains rhythm and memory together.", url: "https://www.youtube.com/results?search_query=nepali+song+lyrics" },
  { level: "B2", title: "Nepali podcasts", body: "Long, natural conversations by Nepali hosts, for example The Sushant Pradhan Podcast on YouTube. Listen while commuting; you won't understand everything, and that's fine.", url: "https://www.youtube.com/results?search_query=sushant+pradhan+podcast" },
  { level: "B2", title: "TV news on YouTube", body: "Nepali TV channels post full news bulletins daily. Formal, fast and clear: ideal for training your ear at B2.", url: "https://www.youtube.com/results?search_query=kantipur+tv+news" },
  { level: "C1", title: "Nepali films and TV series", body: "Watch with Nepali subtitles once you can read Devanagari. Comedies are the hardest and the best for C1.", url: "https://www.youtube.com/results?search_query=nepali+full+movie" },
  { level: "C1", title: "Kantipur and Onlinekhabar", body: "Kantipur is a national daily and Onlinekhabar a major news site. Reading the news every day makes the leap from C1 to C2.", url: "https://ekantipur.com/" }
];
})();
