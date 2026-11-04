// Course content. Each phrase: id (stable, used for progress), ne (Devanagari, used for audio
// and speech checking), ro (romanization: aa = long a, chh = छ, n after a vowel = nasal), en, note.
window.COURSE = {
  units: [
    {
      id: "greet", title: "Greetings", sub: "Hello, how are you, thank you",
      tips: [
        "<b>छ / chha</b> means \"is\". <b>छैन / chhaina</b> means \"is not\". You will hear them everywhere.",
        "Nepali uses respect levels. <b>tapaain</b> is the polite \"you\" for adults you don't know well.",
        "<b>namaste</b> works for hello and goodbye, any time of day. Say it with palms together."
      ],
      phrases: [
        { id: "g1", ne: "नमस्ते", ro: "namaste", en: "Hello / goodbye", note: "Respectful, any time of day." },
        { id: "g2", ne: "तपाईंलाई कस्तो छ?", ro: "tapaainlaai kasto chha?", en: "How are you?", note: "Literally: to you, how is it?" },
        { id: "g3", ne: "मलाई ठिक छ।", ro: "malaai thik chha.", en: "I'm fine.", note: "Literally: to me, it is fine." },
        { id: "g4", ne: "तपाईंलाई नि?", ro: "tapaainlaai ni?", en: "And you?" },
        { id: "g5", ne: "सन्चै हुनुहुन्छ?", ro: "sanchai hunuhunchha?", en: "Are you well?", note: "Very common polite greeting." },
        { id: "g6", ne: "सन्चै छु।", ro: "sanchai chhu.", en: "I'm well." },
        { id: "g7", ne: "धन्यवाद", ro: "dhanyabaad", en: "Thank you", note: "Nepalis say it less often than Europeans do; a smile often replaces it." },
        { id: "g8", ne: "हो", ro: "ho", en: "Yes / that's right" },
        { id: "g9", ne: "होइन", ro: "hoina", en: "No / that's not it" },
        { id: "g10", ne: "ठिक छ", ro: "thik chha", en: "OK / all right" },
        { id: "g11", ne: "माफ गर्नुहोस्", ro: "maaf garnuhos", en: "Sorry / excuse me" },
        { id: "g12", ne: "केही छैन", ro: "kehi chhaina", en: "No problem / it's nothing" },
        { id: "g13", ne: "फेरि भेटौँला", ro: "pheri bhetaunlaa", en: "See you again" }
      ]
    },
    {
      id: "intro", title: "About me", sub: "Name, home, work",
      tips: [
        "<b>ho</b> links two things: <b>mero naam Paulo ho</b> = my name is Paulo.",
        "<b>-ko</b> means \"of\": <b>tapaainko</b> = your, <b>mero</b> = my.",
        "Nepalis ask \"where is your home?\" (<b>ghar kahaan ho?</b>) to mean \"where are you from?\""
      ],
      phrases: [
        { id: "i1", ne: "तपाईंको नाम के हो?", ro: "tapaainko naam ke ho?", en: "What is your name?" },
        { id: "i2", ne: "मेरो नाम पाउलो हो।", ro: "mero naam paulo ho.", en: "My name is Paulo." },
        { id: "i3", ne: "तपाईंको घर कहाँ हो?", ro: "tapaainko ghar kahaan ho?", en: "Where are you from?", note: "Literally: where is your home?" },
        { id: "i4", ne: "म पोर्चुगलबाट आएको हुँ।", ro: "ma porchugalbaata aaeko hun.", en: "I'm from Portugal.", note: "Literally: I have come from Portugal." },
        { id: "i5", ne: "तपाईं के काम गर्नुहुन्छ?", ro: "tapaain ke kaam garnuhunchha?", en: "What work do you do?" },
        { id: "i6", ne: "म शिक्षक हुँ।", ro: "ma shikshak hun.", en: "I'm a teacher.", note: "hun = am (only with ma, I)." },
        { id: "i7", ne: "म वैज्ञानिक हुँ।", ro: "ma baigyaanik hun.", en: "I'm a scientist." },
        { id: "i8", ne: "मलाई नेपाली अलि-अलि आउँछ।", ro: "malaai nepaali ali-ali aaunchha.", en: "I speak a little Nepali.", note: "Literally: Nepali comes to me a little." },
        { id: "i9", ne: "म नेपाली सिक्दैछु।", ro: "ma nepaali sikdaichhu.", en: "I'm learning Nepali." },
        { id: "i10", ne: "तपाईंलाई भेटेर खुसी लाग्यो।", ro: "tapaainlaai bhetera khusi laagyo.", en: "Nice to meet you." },
        { id: "i11", ne: "मलाई पनि।", ro: "malaai pani.", en: "Me too." }
      ]
    },
    {
      id: "help", title: "When you're lost", sub: "Slow down, say it again, what does it mean?",
      tips: [
        "These are the most useful phrases in the course. Learn them first and you can keep any conversation going.",
        "<b>-nuhos</b> on a verb makes a polite request: <b>bolnuhos</b> = please speak, <b>bhannuhos</b> = please say.",
        "<b>na</b> and <b>ta</b> at the end soften a request, like \"would you?\""
      ],
      phrases: [
        { id: "h1", ne: "मैले बुझिनँ।", ro: "maile bujhina.", en: "I didn't understand." },
        { id: "h2", ne: "मैले बुझेँ।", ro: "maile bujhen.", en: "I understood." },
        { id: "h3", ne: "बिस्तारै बोल्नुहोस् न।", ro: "bistaarai bolnuhos na.", en: "Please speak slowly." },
        { id: "h4", ne: "फेरि भन्नुहोस् त।", ro: "pheri bhannuhos ta.", en: "Please say it again." },
        { id: "h5", ne: "के भन्नुभयो?", ro: "ke bhannubhayo?", en: "What did you say?" },
        { id: "h6", ne: "यसको अर्थ के हो?", ro: "yasko artha ke ho?", en: "What does this mean?" },
        { id: "h7", ne: "यसलाई नेपालीमा के भनिन्छ?", ro: "yaslaai nepaalimaa ke bhaninchha?", en: "What is this called in Nepali?" },
        { id: "h8", ne: "अंग्रेजी बोल्नुहुन्छ?", ro: "angreji bolnuhunchha?", en: "Do you speak English?" },
        { id: "h9", ne: "थाहा छैन।", ro: "thaahaa chhaina.", en: "I don't know." },
        { id: "h10", ne: "थाहा छ।", ro: "thaahaa chha.", en: "I know." },
        { id: "h11", ne: "एक छिन पर्खनुहोस्।", ro: "ek chhin parkhanuhos.", en: "Wait a moment, please." }
      ]
    },
    {
      id: "num", title: "Numbers & money", sub: "1 to 1000, how much?",
      tips: [
        "Prices are in rupees: <b>rupaiyaan</b>. <b>saya</b> = hundred, <b>hajaar</b> = thousand.",
        "Listen for the difference between <b>chha</b> (six) and <b>saat</b> (seven), and between <b>tin</b> (three) and <b>tis</b> (thirty).",
        "<b>kati?</b> = how much / how many?"
      ],
      phrases: [
        { id: "n1", ne: "एक", ro: "ek", en: "One" },
        { id: "n2", ne: "दुई", ro: "dui", en: "Two" },
        { id: "n3", ne: "तीन", ro: "tin", en: "Three" },
        { id: "n4", ne: "चार", ro: "chaar", en: "Four" },
        { id: "n5", ne: "पाँच", ro: "paanch", en: "Five" },
        { id: "n6", ne: "छ", ro: "chha", en: "Six", note: "Same word as \"is\". Context tells you which." },
        { id: "n7", ne: "सात", ro: "saat", en: "Seven" },
        { id: "n8", ne: "आठ", ro: "aath", en: "Eight" },
        { id: "n9", ne: "नौ", ro: "nau", en: "Nine" },
        { id: "n10", ne: "दस", ro: "das", en: "Ten" },
        { id: "n11", ne: "बीस", ro: "bis", en: "Twenty" },
        { id: "n12", ne: "तीस", ro: "tis", en: "Thirty" },
        { id: "n13", ne: "पचास", ro: "pachaas", en: "Fifty" },
        { id: "n14", ne: "सय", ro: "saya", en: "Hundred" },
        { id: "n15", ne: "हजार", ro: "hajaar", en: "Thousand" },
        { id: "n16", ne: "कति हो?", ro: "kati ho?", en: "How much is it?" },
        { id: "n17", ne: "तीन सय रुपैयाँ", ro: "tin saya rupaiyaan", en: "Three hundred rupees" }
      ]
    },
    {
      id: "food", title: "Food & tea", sub: "Eating, drinking, at a restaurant",
      tips: [
        "<b>khaanaa khaanubhayo?</b> (have you eaten?) is a friendly greeting, not an invitation.",
        "Feelings use <b>laagyo</b>: <b>bhok laagyo</b> = hunger struck, I'm hungry.",
        "<b>dinuhos</b> = please give. Add it to anything you want: <b>paani dinuhos</b> = water, please."
      ],
      phrases: [
        { id: "f1", ne: "खाना खानुभयो?", ro: "khaanaa khaanubhayo?", en: "Have you eaten?", note: "A common way to say hello." },
        { id: "f2", ne: "खाएँ।", ro: "khaaen.", en: "I've eaten." },
        { id: "f3", ne: "भोक लाग्यो।", ro: "bhok laagyo.", en: "I'm hungry." },
        { id: "f4", ne: "तिर्खा लाग्यो।", ro: "tirkhaa laagyo.", en: "I'm thirsty." },
        { id: "f5", ne: "पानी दिनुहोस्।", ro: "paani dinuhos.", en: "Water, please." },
        { id: "f6", ne: "एक कप चिया दिनुहोस्।", ro: "ek kap chiyaa dinuhos.", en: "One cup of tea, please." },
        { id: "f7", ne: "दाल भात", ro: "daal bhaat", en: "Lentils and rice", note: "The national meal, often eaten twice a day." },
        { id: "f8", ne: "मीठो छ!", ro: "mitho chha!", en: "It's delicious!" },
        { id: "f9", ne: "धेरै पिरो नहाल्नुहोस्।", ro: "dherai piro nahaalnuhos.", en: "Not too spicy, please.", note: "Literally: don't put in much spice." },
        { id: "f10", ne: "म मासु खाँदिनँ।", ro: "ma maasu khaandina.", en: "I don't eat meat." },
        { id: "f11", ne: "अझै अलिकति दिनुहोस्।", ro: "ajhai alikati dinuhos.", en: "A little more, please." },
        { id: "f12", ne: "पुग्यो, धन्यवाद।", ro: "pugyo, dhanyabaad.", en: "That's enough, thank you." },
        { id: "f13", ne: "बिल ल्याउनुहोस्।", ro: "bil lyaaunuhos.", en: "The bill, please." }
      ]
    },
    {
      id: "shop", title: "Shopping", sub: "Prices, bargaining, I want this",
      tips: [
        "Bargaining is normal in markets, not in supermarkets. Keep it friendly and smile.",
        "<b>chaahiyo</b> = (I) want/need. <b>chaahindaina</b> = (I) don't need it. The second one is very useful with street sellers.",
        "<b>bhayo</b> means \"became\". <b>dherai mahango bhayo</b> = it got too expensive."
      ],
      phrases: [
        { id: "s1", ne: "यो कति हो?", ro: "yo kati ho?", en: "How much is this?" },
        { id: "s2", ne: "धेरै महँगो भयो।", ro: "dherai mahango bhayo.", en: "That's too expensive." },
        { id: "s3", ne: "अलि सस्तो गर्नुहोस् न।", ro: "ali sasto garnuhos na.", en: "Make it a bit cheaper, please." },
        { id: "s4", ne: "मलाई यो चाहियो।", ro: "malaai yo chaahiyo.", en: "I want this one." },
        { id: "s5", ne: "मलाई चाहिँदैन।", ro: "malaai chaahindaina.", en: "I don't need it." },
        { id: "s6", ne: "अर्को रङ छ?", ro: "arko rang chha?", en: "Is there another colour?" },
        { id: "s7", ne: "ठूलो", ro: "thulo", en: "Big" },
        { id: "s8", ne: "सानो", ro: "saano", en: "Small" },
        { id: "s9", ne: "यहाँ सिम कार्ड पाइन्छ?", ro: "yahaan sim kaard paainchha?", en: "Can I get a SIM card here?" },
        { id: "s10", ne: "हेर्दै छु मात्र।", ro: "herdai chhu maatra.", en: "I'm just looking." }
      ]
    },
    {
      id: "move", title: "Getting around", sub: "Directions, taxis, buses",
      tips: [
        "Call a man of about your age <b>daai</b> (older brother) and a woman <b>didi</b> (older sister). Drivers, shopkeepers and waiters all expect it.",
        "<b>... kahaan chha?</b> = where is ...? Put any place in front.",
        "Agree the taxi fare before you get in: <b>kati laagchha?</b>"
      ],
      phrases: [
        { id: "m1", ne: "ट्वाइलेट कहाँ छ?", ro: "twaailet kahaan chha?", en: "Where is the toilet?" },
        { id: "m2", ne: "दाइ", ro: "daai", en: "Older brother (to address a man)" },
        { id: "m3", ne: "दिदी", ro: "didi", en: "Older sister (to address a woman)" },
        { id: "m4", ne: "दायाँ", ro: "daayaan", en: "Right" },
        { id: "m5", ne: "बायाँ", ro: "baayaan", en: "Left" },
        { id: "m6", ne: "सिधा", ro: "sidhaa", en: "Straight on" },
        { id: "m7", ne: "टाढा छ?", ro: "taadhaa chha?", en: "Is it far?" },
        { id: "m8", ne: "नजिकै छ।", ro: "najikai chha.", en: "It's nearby." },
        { id: "m9", ne: "ठमेल जान कति लाग्छ?", ro: "thamel jaana kati laagchha?", en: "How much to go to Thamel?" },
        { id: "m10", ne: "यहाँ रोक्नुहोस्।", ro: "yahaan roknuhos.", en: "Stop here, please." },
        { id: "m11", ne: "बिस्तारै चलाउनुहोस्।", ro: "bistaarai chalaaunuhos.", en: "Please drive slowly." },
        { id: "m12", ne: "बस कहिले आउँछ?", ro: "bas kahile aaunchha?", en: "When does the bus come?" },
        { id: "m13", ne: "म बाटो बिराएँ।", ro: "ma baato biraaen.", en: "I'm lost.", note: "Literally: I lost the way." }
      ]
    },
    {
      id: "fam", title: "Family & people", sub: "Who's who",
      tips: [
        "Nepali has separate words for older and younger siblings, and people care about the difference.",
        "<b>hunuhunchha</b> is the respectful \"is\", used for elders and people you respect.",
        "<b>janaa</b> counts people: <b>ek janaa</b> = one person."
      ],
      phrases: [
        { id: "p1", ne: "आमा", ro: "aamaa", en: "Mother" },
        { id: "p2", ne: "बुबा", ro: "bubaa", en: "Father" },
        { id: "p3", ne: "भाइ", ro: "bhaai", en: "Younger brother" },
        { id: "p4", ne: "बहिनी", ro: "bahini", en: "Younger sister" },
        { id: "p5", ne: "छोरा", ro: "chhoraa", en: "Son" },
        { id: "p6", ne: "छोरी", ro: "chhori", en: "Daughter" },
        { id: "p7", ne: "साथी", ro: "saathi", en: "Friend" },
        { id: "p8", ne: "श्रीमती", ro: "shrimati", en: "Wife" },
        { id: "p9", ne: "श्रीमान्", ro: "shrimaan", en: "Husband" },
        { id: "p10", ne: "तपाईंको परिवारमा को-को हुनुहुन्छ?", ro: "tapaainko pariwaarmaa ko-ko hunuhunchha?", en: "Who is in your family?" },
        { id: "p11", ne: "मेरो एक जना दाइ हुनुहुन्छ।", ro: "mero ek janaa daai hunuhunchha.", en: "I have one older brother." },
        { id: "p12", ne: "तपाईंको बिहे भएको छ?", ro: "tapaainko bihe bhaeko chha?", en: "Are you married?", note: "A normal question in Nepal, not a rude one." }
      ]
    },
    {
      id: "time", title: "Time & plans", sub: "Today, tomorrow, what time?",
      tips: [
        "<b>bajyo</b> means \"struck\" (like a clock): <b>tin bajyo</b> = it's three o'clock.",
        "<b>kahile?</b> = when? <b>ahile</b> = now. They sound alike, so listen closely.",
        "\"Nepali time\" is relaxed. <b>ek chhin</b> (a moment) can mean a long time."
      ],
      phrases: [
        { id: "t1", ne: "अहिले कति बज्यो?", ro: "ahile kati bajyo?", en: "What time is it now?" },
        { id: "t2", ne: "तीन बज्यो।", ro: "tin bajyo.", en: "It's three o'clock." },
        { id: "t3", ne: "आज", ro: "aaja", en: "Today" },
        { id: "t4", ne: "भोलि", ro: "bholi", en: "Tomorrow" },
        { id: "t5", ne: "हिजो", ro: "hijo", en: "Yesterday" },
        { id: "t6", ne: "बिहान", ro: "bihaana", en: "Morning" },
        { id: "t7", ne: "बेलुका", ro: "belukaa", en: "Evening" },
        { id: "t8", ne: "अहिले", ro: "ahile", en: "Now" },
        { id: "t9", ne: "पछि", ro: "pachhi", en: "Later" },
        { id: "t10", ne: "कहिले?", ro: "kahile?", en: "When?" },
        { id: "t11", ne: "भोलि भेटौँ।", ro: "bholi bhetaun.", en: "Let's meet tomorrow." },
        { id: "t12", ne: "आज कुन बार हो?", ro: "aaja kun baar ho?", en: "What day is it today?" }
      ]
    },
    {
      id: "feel", title: "Feelings & health", sub: "Tired, cold, unwell, help",
      tips: [
        "Many feelings are said as \"to me, X struck\": <b>malaai thakaai laagyo</b> = I'm tired.",
        "<b>dukhyo</b> = hurts: <b>mero taauko dukhyo</b> = my head hurts.",
        "<b>na-</b> in front of a verb makes it negative: <b>chintaa nagarnuhos</b> = don't worry."
      ],
      phrases: [
        { id: "e1", ne: "मलाई सन्चो छैन।", ro: "malaai sancho chhaina.", en: "I'm not feeling well." },
        { id: "e2", ne: "मेरो टाउको दुख्यो।", ro: "mero taauko dukhyo.", en: "I have a headache." },
        { id: "e3", ne: "मेरो पेट दुख्यो।", ro: "mero pet dukhyo.", en: "I have a stomach ache." },
        { id: "e4", ne: "मलाई जाडो भयो।", ro: "malaai jaado bhayo.", en: "I'm cold." },
        { id: "e5", ne: "मलाई गर्मी भयो।", ro: "malaai garmi bhayo.", en: "I'm hot." },
        { id: "e6", ne: "मलाई थकाइ लाग्यो।", ro: "malaai thakaai laagyo.", en: "I'm tired." },
        { id: "e7", ne: "मलाई निद्रा लाग्यो।", ro: "malaai nidraa laagyo.", en: "I'm sleepy." },
        { id: "e8", ne: "मलाई खुसी लाग्यो।", ro: "malaai khusi laagyo.", en: "I'm happy." },
        { id: "e9", ne: "चिन्ता नगर्नुहोस्।", ro: "chintaa nagarnuhos.", en: "Don't worry." },
        { id: "e10", ne: "डाक्टर चाहियो।", ro: "daaktar chaahiyo.", en: "I need a doctor." },
        { id: "e11", ne: "औषधि पसल कहाँ छ?", ro: "aushadhi pasal kahaan chha?", en: "Where is the pharmacy?" },
        { id: "e12", ne: "मद्दत गर्नुहोस्!", ro: "maddat garnuhos!", en: "Help, please!" }
      ]
    },
    {
      id: "verbs", title: "Everyday actions", sub: "Go, come, like, can",
      tips: [
        "Verbs go at the end: <b>ma ghar jaanchhu</b> = I home go.",
        "<b>-chhu</b> ends verbs with ma (I): <b>jaanchhu</b> = I go. <b>-dina</b> makes it negative: <b>jaandina</b> = I don't go.",
        "<b>-dai</b> means \"in the middle of\": <b>ke gardai hunuhunchha?</b> = what are you doing (right now)?"
      ],
      phrases: [
        { id: "v1", ne: "म घर जान्छु।", ro: "ma ghar jaanchhu.", en: "I'm going home." },
        { id: "v2", ne: "म भोलि आउँछु।", ro: "ma bholi aaunchhu.", en: "I'll come tomorrow." },
        { id: "v3", ne: "तपाईं कहाँ जाँदै हुनुहुन्छ?", ro: "tapaain kahaan jaandai hunuhunchha?", en: "Where are you going?" },
        { id: "v4", ne: "के गर्दै हुनुहुन्छ?", ro: "ke gardai hunuhunchha?", en: "What are you doing?" },
        { id: "v5", ne: "मलाई मन पर्छ।", ro: "malaai man parchha.", en: "I like it." },
        { id: "v6", ne: "मलाई मन पर्दैन।", ro: "malaai man pardaina.", en: "I don't like it." },
        { id: "v7", ne: "मलाई नेपाल धेरै मन पर्छ।", ro: "malaai nepaal dherai man parchha.", en: "I really like Nepal." },
        { id: "v8", ne: "म सक्छु।", ro: "ma sakchhu.", en: "I can." },
        { id: "v9", ne: "म सक्दिनँ।", ro: "ma sakdina.", en: "I can't." },
        { id: "v10", ne: "बस्नुहोस्।", ro: "basnuhos.", en: "Please sit down." },
        { id: "v11", ne: "जाऔँ।", ro: "jaaun.", en: "Let's go." },
        { id: "v12", ne: "आउनुहोस्।", ro: "aaunuhos.", en: "Please come (in)." }
      ]
    }
  ],

  // Dialogues: A is the other person, B is you. Linked to a unit for the progress flags.
  dialogues: [
    {
      id: "d1", unit: "intro", title: "Meeting someone",
      scene: "You meet Sita at a guesthouse in Pokhara.",
      lines: [
        { who: "A", ne: "नमस्ते! तपाईंलाई कस्तो छ?", ro: "namaste! tapaainlaai kasto chha?", en: "Hello! How are you?" },
        { who: "B", ne: "नमस्ते! मलाई ठिक छ। तपाईंलाई नि?", ro: "namaste! malaai thik chha. tapaainlaai ni?", en: "Hello! I'm fine. And you?" },
        { who: "A", ne: "मलाई पनि ठिक छ। तपाईंको नाम के हो?", ro: "malaai pani thik chha. tapaainko naam ke ho?", en: "I'm fine too. What's your name?" },
        { who: "B", ne: "मेरो नाम पाउलो हो। तपाईंको नि?", ro: "mero naam paulo ho. tapaainko ni?", en: "My name is Paulo. And yours?" },
        { who: "A", ne: "मेरो नाम सीता हो। तपाईंको घर कहाँ हो?", ro: "mero naam sitaa ho. tapaainko ghar kahaan ho?", en: "My name is Sita. Where are you from?" },
        { who: "B", ne: "म पोर्चुगलबाट आएको हुँ।", ro: "ma porchugalbaata aaeko hun.", en: "I'm from Portugal." },
        { who: "A", ne: "तपाईंलाई भेटेर खुसी लाग्यो।", ro: "tapaainlaai bhetera khusi laagyo.", en: "Nice to meet you." },
        { who: "B", ne: "मलाई पनि।", ro: "malaai pani.", en: "Me too." }
      ]
    },
    {
      id: "d2", unit: "help", title: "Asking them to slow down",
      scene: "A shopkeeper asks you a question too fast.",
      lines: [
        { who: "A", ne: "तपाईं नेपालमा कति दिन बस्नुहुन्छ?", ro: "tapaain nepaalmaa kati din basnuhunchha?", en: "How many days will you stay in Nepal?" },
        { who: "B", ne: "माफ गर्नुहोस्, मैले बुझिनँ। बिस्तारै बोल्नुहोस् न।", ro: "maaf garnuhos, maile bujhina. bistaarai bolnuhos na.", en: "Sorry, I didn't understand. Please speak slowly." },
        { who: "A", ne: "तपाईं नेपालमा कति दिन बस्नुहुन्छ?", ro: "tapaain nepaalmaa kati din basnuhunchha?", en: "How many days will you stay in Nepal?" },
        { who: "B", ne: "ओहो! दुई हप्ता।", ro: "oho! dui haptaa.", en: "Oh! Two weeks." },
        { who: "A", ne: "तपाईंको नेपाली राम्रो छ!", ro: "tapaainko nepaali raamro chha!", en: "Your Nepali is good!" },
        { who: "B", ne: "अलि-अलि मात्र। म सिक्दैछु।", ro: "ali-ali maatra. ma sikdaichhu.", en: "Only a little. I'm learning." }
      ]
    },
    {
      id: "d3", unit: "food", title: "At the tea shop",
      scene: "You stop at a roadside tea stall.",
      lines: [
        { who: "A", ne: "नमस्ते दाइ, के खानुहुन्छ?", ro: "namaste daai, ke khaanuhunchha?", en: "Hello brother, what will you have?" },
        { who: "B", ne: "एक कप दूध चिया दिनुहोस्।", ro: "ek kap dudh chiyaa dinuhos.", en: "One cup of milk tea, please." },
        { who: "A", ne: "चिनी हाल्ने?", ro: "chini haalne?", en: "Sugar?" },
        { who: "B", ne: "अलिकति मात्र।", ro: "alikati maatra.", en: "Just a little." },
        { who: "A", ne: "अरू केही?", ro: "aru kehi?", en: "Anything else?" },
        { who: "B", ne: "पुग्यो। कति भयो?", ro: "pugyo. kati bhayo?", en: "That's all. How much is it?" },
        { who: "A", ne: "तीस रुपैयाँ।", ro: "tis rupaiyaan.", en: "Thirty rupees." },
        { who: "B", ne: "धन्यवाद!", ro: "dhanyabaad!", en: "Thank you!" }
      ]
    },
    {
      id: "d4", unit: "food", title: "Dinner at a friend's home",
      scene: "A Nepali friend's family invites you in.",
      lines: [
        { who: "A", ne: "खाना खानुभयो?", ro: "khaanaa khaanubhayo?", en: "Have you eaten?" },
        { who: "B", ne: "अहिलेसम्म खाएको छैन।", ro: "ahilesamma khaaeko chhaina.", en: "Not yet." },
        { who: "A", ne: "आउनुहोस्, सँगै खाऔँ।", ro: "aaunuhos, sangai khaaun.", en: "Come, let's eat together." },
        { who: "B", ne: "धन्यवाद! दाल भात मीठो छ।", ro: "dhanyabaad! daal bhaat mitho chha.", en: "Thank you! The dal bhat is delicious." },
        { who: "A", ne: "अझै भात दिऊँ?", ro: "ajhai bhaat diun?", en: "Shall I give you more rice?" },
        { who: "B", ne: "पुग्यो, पुग्यो! पेट भरियो।", ro: "pugyo, pugyo! pet bhariyo.", en: "Enough, enough! I'm full." }
      ]
    },
    {
      id: "d5", unit: "move", title: "Taking a taxi",
      scene: "You need to get to Thamel in Kathmandu.",
      lines: [
        { who: "B", ne: "दाइ, ठमेल जाने?", ro: "daai, thamel jaane?", en: "Brother, are you going to Thamel?" },
        { who: "A", ne: "जाने।", ro: "jaane.", en: "Yes, I'll go." },
        { who: "B", ne: "कति लाग्छ?", ro: "kati laagchha?", en: "How much will it cost?" },
        { who: "A", ne: "पाँच सय।", ro: "paanch saya.", en: "Five hundred." },
        { who: "B", ne: "धेरै महँगो भयो। तीन सयमा जाऔँ न।", ro: "dherai mahango bhayo. tin sayamaa jaaun na.", en: "That's too expensive. Let's go for three hundred." },
        { who: "A", ne: "चार सय दिनुहोस्।", ro: "chaar saya dinuhos.", en: "Give me four hundred." },
        { who: "B", ne: "ठिक छ, जाऔँ।", ro: "thik chha, jaaun.", en: "OK, let's go." },
        { who: "B", ne: "यहाँ रोक्नुहोस्। धन्यवाद दाइ!", ro: "yahaan roknuhos. dhanyabaad daai!", en: "Stop here, please. Thanks, brother!" }
      ]
    },
    {
      id: "d6", unit: "shop", title: "Bargaining for a scarf",
      scene: "A pashmina shop in Bhaktapur.",
      lines: [
        { who: "A", ne: "आउनुहोस् दिदी, हेर्नुहोस्।", ro: "aaunuhos didi, hernuhos.", en: "Come in sister, have a look." },
        { who: "B", ne: "यो कति हो?", ro: "yo kati ho?", en: "How much is this?" },
        { who: "A", ne: "दुई हजार रुपैयाँ।", ro: "dui hajaar rupaiyaan.", en: "Two thousand rupees." },
        { who: "B", ne: "धेरै महँगो भयो। अलि सस्तो गर्नुहोस् न।", ro: "dherai mahango bhayo. ali sasto garnuhos na.", en: "That's too expensive. Make it a bit cheaper, please." },
        { who: "A", ne: "पन्ध्र सय दिनुहोस्।", ro: "pandhra saya dinuhos.", en: "Give me fifteen hundred." },
        { who: "B", ne: "अर्को रङ छ?", ro: "arko rang chha?", en: "Is there another colour?" },
        { who: "A", ne: "छ, यो हेर्नुहोस्।", ro: "chha, yo hernuhos.", en: "Yes, look at this one." },
        { who: "B", ne: "मलाई यो चाहियो।", ro: "malaai yo chaahiyo.", en: "I want this one." }
      ]
    },
    {
      id: "d7", unit: "feel", title: "At the pharmacy",
      scene: "You wake up with a headache and fever.",
      lines: [
        { who: "B", ne: "नमस्ते। मलाई सन्चो छैन।", ro: "namaste. malaai sancho chhaina.", en: "Hello. I'm not feeling well." },
        { who: "A", ne: "के भयो?", ro: "ke bhayo?", en: "What happened?" },
        { who: "B", ne: "मेरो टाउको दुख्यो, अनि ज्वरो पनि आयो।", ro: "mero taauko dukhyo, ani jwaro pani aayo.", en: "I have a headache, and a fever too." },
        { who: "A", ne: "यो औषधि दिनमा तीन पटक खानुहोस्।", ro: "yo aushadhi dinmaa tin patak khaanuhos.", en: "Take this medicine three times a day." },
        { who: "B", ne: "कति भयो?", ro: "kati bhayo?", en: "How much is it?" },
        { who: "A", ne: "एक सय बीस रुपैयाँ।", ro: "ek saya bis rupaiyaan.", en: "One hundred and twenty rupees." },
        { who: "B", ne: "धन्यवाद।", ro: "dhanyabaad.", en: "Thank you." }
      ]
    },
    {
      id: "d8", unit: "time", title: "Making plans",
      scene: "Your friend Ram wants to meet up.",
      lines: [
        { who: "A", ne: "भोलि के गर्दै हुनुहुन्छ?", ro: "bholi ke gardai hunuhunchha?", en: "What are you doing tomorrow?" },
        { who: "B", ne: "थाहा छैन। किन?", ro: "thaahaa chhaina. kina?", en: "I don't know. Why?" },
        { who: "A", ne: "सँगै चिया खाऔँ न।", ro: "sangai chiyaa khaaun na.", en: "Let's have tea together." },
        { who: "B", ne: "हुन्छ! कति बजे?", ro: "hunchha! kati baje?", en: "Sure! At what time?" },
        { who: "A", ne: "बिहान दस बजे।", ro: "bihaana das baje.", en: "At ten in the morning." },
        { who: "B", ne: "ठिक छ, भोलि भेटौँ।", ro: "thik chha, bholi bhetaun.", en: "OK, see you tomorrow." }
      ]
    }
  ],

  // Sound pairs for the ear-training page.
  sounds: [
    { title: "Breathy or not", body: "Many consonants come in pairs: plain and with a puff of air (aspirated). Hold your palm in front of your mouth: you should feel air only on the second word.",
      pairs: [ { ne: "काम", ro: "kaam", en: "work" }, { ne: "खाम", ro: "khaam", en: "envelope" }, { ne: "ताल", ro: "taal", en: "lake" }, { ne: "थाल", ro: "thaal", en: "plate" } ] },
    { title: "Breathy g, d, b", body: "Voiced sounds have breathy partners too. They sound like a g, d or b followed by a quick h.",
      pairs: [ { ne: "गर्नु", ro: "garnu", en: "to do" }, { ne: "घर", ro: "ghar", en: "home" }, { ne: "दाल", ro: "daal", en: "lentils" }, { ne: "धन्यवाद", ro: "dhanyabaad", en: "thank you" } ] },
    { title: "Teeth or curled tongue", body: "Nepali has two t's and two d's. One touches the back of the top teeth (softer than English). The other curls the tongue back to the roof of the mouth (harder, like American 't' in 'art').",
      pairs: [ { ne: "तपाईं", ro: "tapaain", en: "you (teeth t)" }, { ne: "टाउको", ro: "taauko", en: "head (curled t)" }, { ne: "दिदी", ro: "didi", en: "older sister (teeth d)" }, { ne: "डाक्टर", ro: "daaktar", en: "doctor (curled d)" } ] },
    { title: "ch and chh", body: "ch is like 'ts' or a soft English 'ch'. chh adds a puff of air.",
      pairs: [ { ne: "चार", ro: "chaar", en: "four" }, { ne: "छ", ro: "chha", en: "six / is" }, { ne: "चिया", ro: "chiyaa", en: "tea" }, { ne: "छोरी", ro: "chhori", en: "daughter" } ] },
    { title: "Short a and long aa", body: "Short a sounds like the 'u' in 'cup', a little rounded. Long aa is the 'a' in 'father'. They change meaning.",
      pairs: [ { ne: "म", ro: "ma", en: "I" }, { ne: "माफ", ro: "maaf", en: "sorry" }, { ne: "दस", ro: "das", en: "ten" }, { ne: "दाल", ro: "daal", en: "lentils" } ] },
    { title: "Nasal vowels", body: "A vowel can be said through the nose, like French 'bon'. In the romanization this is the n after a vowel.",
      pairs: [ { ne: "हो", ro: "ho", en: "yes / is" }, { ne: "हुँ", ro: "hun", en: "(I) am" }, { ne: "पाँच", ro: "paanch", en: "five" }, { ne: "कहाँ", ro: "kahaan", en: "where" } ] }
  ]
};
