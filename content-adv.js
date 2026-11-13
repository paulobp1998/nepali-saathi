// B2, C1 and C2 lessons, with their conversations and stories. Each lesson practises one chapter of the
// advanced grammar course (see gplan in daily-content.js). Same shapes as in content.js.
// A story's `unit` is the lesson whose last daily session plays it (finale() in daily.js).
(function () {
const C = window.COURSE;
C.units.push(
  {
    id: "b2favour", level: "B2", title: "Favours and finishing", sub: "Do it for me, already done, go ahead",
    tips: [
      "<b>-idinu</b> adds \"for someone\": <b>garidinuhos</b> = please do it for me. It is the warmest way to ask a favour.",
      "<b>-isaknu</b> = already, completely: <b>khaaisaken</b> = I've already eaten.",
      "<b>-ihaalnu</b> = go ahead, right away. <b>-iraakhnu</b> = in advance, for later."
    ],
    phrases: [
      { id: "b2favour-1", ne: "यो फारम भरिदिनुहोस् न।", ro: "yo phaaram bharidinuhos na.", en: "Could you fill in this form for me?" },
      { id: "b2favour-2", ne: "ढोका खोलिदिनुहोस्।", ro: "dhokaa kholidinuhos.", en: "Please open the door for me." },
      { id: "b2favour-3", ne: "म त खाइसकेँ, तपाईं खानुहोस्।", ro: "ma ta khaaisaken, tapaain khaanuhos.", en: "I've already eaten; you go ahead." },
      { id: "b2favour-4", ne: "बस गइसक्यो।", ro: "bas gaisakyo.", en: "The bus has already left." },
      { id: "b2favour-5", ne: "ढिलो नगर्नुहोस्, भनिहाल्नुहोस्।", ro: "dhilo nagarnuhos, bhanihaalnuhos.", en: "Don't put it off, just say it." },
      { id: "b2favour-6", ne: "मैले टिकट किनिराखेको छु।", ro: "maile tikat kiniraakheko chhu.", en: "I've bought the tickets in advance." },
      { id: "b2favour-7", ne: "उसले मेरो कुरा सुनिदिएन।", ro: "usle mero kuraa sunidiena.", en: "He wouldn't hear me out." },
      { id: "b2favour-8", ne: "म तपाईंलाई बाटो देखाइदिन्छु।", ro: "ma tapaainlaai baato dekhaaidinchhu.", en: "I'll show you the way." },
      { id: "b2favour-9", ne: "बिर्सनुअघि लेखिराख्नुहोस्।", ro: "birsanuaghi lekhiraakhnuhos.", en: "Write it down before you forget." },
      { id: "b2favour-10", ne: "काम सकिएपछि मलाई भनिदिनुहोस्।", ro: "kaam sakiepachhi malaai bhanidinuhos.", en: "Let me know once the work is finished." }
    ]
  },
  {
    id: "b2service", level: "B2", title: "Getting things done", sub: "Have it made, repaired, sent",
    tips: [
      "<b>-aaunu</b> turns \"do\" into \"make do\": <b>siknu</b> (learn) → <b>sikaaunu</b> (teach), <b>dekhnu</b> (see) → <b>dekhaaunu</b> (show).",
      "<b>kataaunu</b>, <b>banaaunu</b>, <b>garaaunu</b>: you didn't do it yourself, you had it done. <b>kapaal kataaen</b> = I got my hair cut.",
      "A verb in <b>-na</b> + <b>lagaaunu</b> = get someone to do it: <b>pathaauna lagaaunu</b> = have it sent."
    ],
    phrases: [
      { id: "b2service-1", ne: "मैले कपाल कटाएँ।", ro: "maile kapaal kataaen.", en: "I got my hair cut." },
      { id: "b2service-2", ne: "यो घडी बनाउन कति लाग्छ?", ro: "yo ghadi banaauna kati laagchha?", en: "How much does it cost to repair this watch?", note: "banaaunu means both make and repair." },
      { id: "b2service-3", ne: "मैले दर्जीलाई कमिज सिउन लगाएँ।", ro: "maile darjilaai kamij siuna lagaaen.", en: "I had the tailor sew a shirt." },
      { id: "b2service-4", ne: "बच्चालाई बिस्तारै खुवाउनुहोस्।", ro: "bachchaalaai bistaarai khuwaaunuhos.", en: "Feed the child slowly." },
      { id: "b2service-5", ne: "मलाई त्यो फोटो देखाउनुहोस् न।", ro: "malaai tyo photo dekhaaunuhos na.", en: "Show me that photo, would you?" },
      { id: "b2service-6", ne: "उहाँले हामीलाई धेरै हँसाउनुभयो।", ro: "uhaanle haamilaai dherai hansaaunubhayo.", en: "He made us laugh a lot." },
      { id: "b2service-7", ne: "म भोलि सामान पठाउन लगाउँछु।", ro: "ma bholi saamaan pathaauna lagaaunchhu.", en: "I'll have the goods sent tomorrow." },
      { id: "b2service-8", ne: "उसले मलाई एक घण्टा कुरायो।", ro: "usle malaai ek ghantaa kuraayo.", en: "He kept me waiting for an hour." },
      { id: "b2service-9", ne: "कृपया मलाई छ बजे उठाइदिनुहोस्।", ro: "kripayaa malaai chha baje uthaaidinuhos.", en: "Please wake me at six." },
      { id: "b2service-10", ne: "यो कुरा उहाँलाई बुझाउन गाह्रो छ।", ro: "yo kuraa uhaanlaai bujhaauna gaahro chha.", en: "It's hard to explain this to him." }
    ]
  },
  {
    id: "b2rules", level: "B2", title: "Rules and notices", sub: "It is done, it's not allowed, they say",
    tips: [
      "<b>-inchha</b> makes \"it is done\": <b>bolinchha</b> = is spoken, <b>paainchha</b> = is available.",
      "<b>paaindaina</b> = not allowed, not available. A verb in <b>-nu</b> + <b>hundaina</b> = must not.",
      "Notices and news like the passive: <b>banda garieko chha</b> = has been closed."
    ],
    phrases: [
      { id: "b2rules-1", ne: "यहाँ गाडी राख्न पाइँदैन।", ro: "yahaan gaadi raakhna paaindaina.", en: "Parking is not allowed here." },
      { id: "b2rules-2", ne: "नेपालमा बायाँतिर गाडी चलाइन्छ।", ro: "nepaalmaa baayaantira gaadi chalaainchha.", en: "In Nepal people drive on the left." },
      { id: "b2rules-3", ne: "यो शब्द कसरी लेखिन्छ?", ro: "yo shabda kasari lekhinchha?", en: "How is this word written?" },
      { id: "b2rules-4", ne: "मन्दिरभित्र छालाको सामान लैजानु हुँदैन।", ro: "mandirbhitra chhaalaako saamaan laijaanu hundaina.", en: "You mustn't take leather items into the temple." },
      { id: "b2rules-5", ne: "टिकट कहाँ पाइन्छ?", ro: "tikat kahaan paainchha?", en: "Where can you get tickets?" },
      { id: "b2rules-6", ne: "आज कार्यालय बन्द गरिएको छ।", ro: "aaja kaaryaalaya banda garieko chha.", en: "The office has been closed today." },
      { id: "b2rules-7", ne: "भनिन्छ, यो मन्दिर हजार वर्ष पुरानो हो।", ro: "bhaninchha, yo mandir hajaar barsha puraano ho.", en: "They say this temple is a thousand years old." },
      { id: "b2rules-8", ne: "तपाईंको नाम सूचीमा भेटिएन।", ro: "tapaainko naam suchimaa bhetiena.", en: "Your name wasn't found on the list." },
      { id: "b2rules-9", ne: "यो फारम कालो मसीले भर्नुपर्छ।", ro: "yo phaaram kaalo masile bharnuparchha.", en: "This form must be filled in with black ink." },
      { id: "b2rules-10", ne: "बैठक भोलिसम्म सारिएको छ।", ro: "baithak bholisamma saarieko chha.", en: "The meeting has been postponed until tomorrow." }
    ]
  },
  {
    id: "b2feel", level: "B2", title: "Laagnu and parnu", sub: "Seems, takes, costs, has to, happens",
    tips: [
      "<b>laagnu</b> covers feeling, seeming, cost and time: <b>bhok laagyo</b>, <b>raamro laagyo</b>, <b>kati laagchha?</b>",
      "<b>parnu</b> covers falling, having to and befalling: <b>paani paryo</b>, <b>jaanuparchha</b>, <b>samasyaa paryo</b>.",
      "<b>man laagnu</b> = feel like it right now. <b>man parnu</b> = like it in general."
    ],
    phrases: [
      { id: "b2feel-1", ne: "काठमाडौंबाट पोखरा पुग्न कति समय लाग्छ?", ro: "kaathmaadaunbaata pokharaa pugna kati samaya laagchha?", en: "How long does it take to get from Kathmandu to Pokhara?" },
      { id: "b2feel-2", ne: "मलाई यो ठाउँ असाध्यै राम्रो लाग्यो।", ro: "malaai yo thaaun asaadhyai raamro laagyo.", en: "I found this place really beautiful." },
      { id: "b2feel-3", ne: "आज मलाई कतै जान मन लागेन।", ro: "aaja malaai katai jaana man laagena.", en: "I didn't feel like going anywhere today." },
      { id: "b2feel-4", ne: "उसलाई रुघा लागेको छ।", ro: "uslaai rughaa laageko chha.", en: "He's caught a cold." },
      { id: "b2feel-5", ne: "मलाई ठूलो समस्या पर्‍यो।", ro: "malaai thulo samasyaa paryo.", en: "I've run into a big problem." },
      { id: "b2feel-6", ne: "तपाईंलाई के पर्‍यो?", ro: "tapaainlaai ke paryo?", en: "What's the matter with you?" },
      { id: "b2feel-7", ne: "यो काम आजै सक्नुपर्छ।", ro: "yo kaam aajai saknuparchha.", en: "This work has to be finished today." },
      { id: "b2feel-8", ne: "भोलि बिदा परेको छ।", ro: "bholi bidaa pareko chha.", en: "Tomorrow happens to be a holiday." },
      { id: "b2feel-9", ne: "उनीहरू कुरा गर्न लागे।", ro: "uniharu kuraa garna laage.", en: "They started talking." },
      { id: "b2feel-10", ne: "मलाई लाग्छ, उहाँ आज आउनुहुन्न।", ro: "malaai laagchha, uhaan aaja aaunuhunna.", en: "I think he won't come today." }
    ]
  },
  {
    id: "b2respect", level: "B2", title: "Respect in practice", sub: "Hajur, timi, and who gets which",
    tips: [
      "<b>hajur</b> is the most polite \"you\". It also means \"yes?\" and \"pardon?\".",
      "<b>timi</b> is for friends, younger people and children. Its verbs end in <b>-au</b>: <b>timi kahaan baschhau?</b>",
      "Talking about someone you respect uses <b>uhaan</b> and <b>-nuhunchha</b>, even when they are not there."
    ],
    phrases: [
      { id: "b2respect-1", ne: "हजुर, भन्नुहोस्।", ro: "hajur, bhannuhos.", en: "Yes, please go ahead." },
      { id: "b2respect-2", ne: "हजुरको शुभनाम के हो?", ro: "hajurko shubhanaam ke ho?", en: "May I know your name?", note: "Very polite: shubhanaam is \"good name\"." },
      { id: "b2respect-3", ne: "तिमी कहाँ बस्छौ?", ro: "timi kahaan baschhau?", en: "Where do you live?", note: "To a friend or someone younger." },
      { id: "b2respect-4", ne: "तिमीले खाना खायौ?", ro: "timile khaanaa khaayau?", en: "Have you eaten?", note: "To a friend or someone younger." },
      { id: "b2respect-5", ne: "तिमी भने हुन्छ।", ro: "timi bhane hunchha.", en: "You can call me timi." },
      { id: "b2respect-6", ne: "बुबा अहिले आराम गर्दै हुनुहुन्छ।", ro: "bubaa ahile aaraam gardai hunuhunchha.", en: "Father is resting at the moment." },
      { id: "b2respect-7", ne: "गुरुले भन्नुभएको कुरा मान्नुपर्छ।", ro: "gurule bhannubhaeko kuraa maannuparchha.", en: "You should follow what the teacher has said." },
      { id: "b2respect-8", ne: "भाइ, यता आऊ त।", ro: "bhaai, yataa aau ta.", en: "Little brother, come here." },
      { id: "b2respect-9", ne: "बस्नुहोस् न, हजुर।", ro: "basnuhos na, hajur.", en: "Do sit down, please." },
      { id: "b2respect-10", ne: "तपाईंलाई कष्ट दिएँ।", ro: "tapaainlaai kashta dien.", en: "I've put you to trouble.", note: "A polite way to thank someone for their effort." }
    ]
  },
  {
    id: "b2ideas", level: "B2", title: "Talking about doing", sub: "Walking is good, a place to stay, what I said",
    tips: [
      "The <b>-nu</b> form works as a noun: <b>bihaan hindnu raamro ho</b> = walking in the morning is good.",
      "<b>-ne</b> says what something is for or does: <b>khaane kuraa</b> = things to eat, <b>basne thaaun</b> = a place to stay.",
      "<b>-eko</b> says what has been done: <b>maile bhaneko kuraa</b> = the thing I said."
    ],
    phrases: [
      { id: "b2ideas-1", ne: "बिहान हिँड्नु स्वास्थ्यका लागि राम्रो हो।", ro: "bihaan hindnu swaasthyakaa laagi raamro ho.", en: "Walking in the morning is good for your health." },
      { id: "b2ideas-2", ne: "यहाँ बस्ने ठाउँ पाइन्छ?", ro: "yahaan basne thaaun paainchha?", en: "Is there a place to stay here?" },
      { id: "b2ideas-3", ne: "खाने कुरा के-के छ?", ro: "khaane kuraa ke-ke chha?", en: "What is there to eat?" },
      { id: "b2ideas-4", ne: "मैले भनेको कुरा बुझ्नुभयो?", ro: "maile bhaneko kuraa bujhnubhayo?", en: "Did you understand what I said?" },
      { id: "b2ideas-5", ne: "तपाईंले पठाएको सन्देश पाएँ।", ro: "tapaainle pathaaeko sandesh paaen.", en: "I got the message you sent." },
      { id: "b2ideas-6", ne: "नेपाली सिक्ने सबैभन्दा राम्रो उपाय बोल्नु हो।", ro: "nepaali sikne sabaibhandaa raamro upaaya bolnu ho.", en: "The best way to learn Nepali is to speak." },
      { id: "b2ideas-7", ne: "मलाई ढिलो हुने डर छ।", ro: "malaai dhilo hune dar chha.", en: "I'm afraid of being late." },
      { id: "b2ideas-8", ne: "जाने बेला भयो।", ro: "jaane belaa bhayo.", en: "It's time to go." },
      { id: "b2ideas-9", ne: "उहाँ आउनुभएको मलाई थाहा थिएन।", ro: "uhaan aaunubhaeko malaai thaahaa thiena.", en: "I didn't know he had come." },
      { id: "b2ideas-10", ne: "गर्नुपर्ने काम धेरै छ।", ro: "garnuparne kaam dherai chha.", en: "There's a lot of work that needs doing." }
    ]
  },
  {
    id: "c1casual", level: "C1", title: "Among friends", sub: "Short forms, fillers and street Nepali",
    tips: [
      "Friends shorten almost everything: <b>bhayo</b> → <b>bho</b>, <b>bhaneko</b> → <b>bhanyaa</b>, <b>jaaun</b> → <b>jaam</b>.",
      "<b>yaar</b> (mate), <b>khoi</b> (no idea), <b>la</b> (OK then) and <b>haina</b> (hang on) fill every conversation.",
      "Use these only with people your own age or younger. With elders, keep the full forms."
    ],
    phrases: [
      { id: "c1casual-1", ne: "के छ यार? के गर्दै छौ?", ro: "ke chha yaar? ke gardai chhau?", en: "What's up, mate? What are you doing?" },
      { id: "c1casual-2", ne: "खासै केही छैन।", ro: "khaasai kehi chhaina.", en: "Nothing much." },
      { id: "c1casual-3", ne: "कता हिँडेको?", ro: "kataa hindeko?", en: "Where are you off to?" },
      { id: "c1casual-4", ne: "ल ल, पछि कुरा गरौँला।", ro: "la la, pachhi kuraa garaunlaa.", en: "OK, OK, we'll talk later." },
      { id: "c1casual-5", ne: "खोइ, मलाई त थाहा भएन।", ro: "khoi, malaai ta thaahaa bhaena.", en: "No idea, I really don't know." },
      { id: "c1casual-6", ne: "हैन, के भन्या तिमीले?", ro: "haina, ke bhanyaa timile?", en: "Hang on, what did you say?" },
      { id: "c1casual-7", ne: "भो, भो, पुग्यो।", ro: "bho, bho, pugyo.", en: "Enough, enough, that'll do." },
      { id: "c1casual-8", ne: "अनि के भो त?", ro: "ani ke bho ta?", en: "And then what happened?" },
      { id: "c1casual-9", ne: "आज त गाह्रो भो यार।", ro: "aaja ta gaahro bho yaar.", en: "Today was rough, mate." },
      { id: "c1casual-10", ne: "जाम् जाम्, ढिलो भइसक्यो।", ro: "jaam jaam, dhilo bhaisakyo.", en: "Let's go, let's go, it's already late." }
    ]
  },
  {
    id: "c1formal", level: "C1", title: "Formal Nepali", sub: "Speeches, letters, announcements",
    tips: [
      "Formal Nepali swaps everyday words for Sanskrit ones: <b>thap</b> for <b>aru</b> (more), <b>aawashyak</b> for <b>chaahine</b> (needed), <b>upasthit</b> for <b>aaeko</b> (present).",
      "<b>-nechha</b> is the formal future and <b>gardachhu</b> the formal \"I do\": <b>kaaryakram suru hunechha</b>.",
      "Letters open with <b>aadaraniya</b> (respected) and close with <b>bhawadiya</b> (yours)."
    ],
    phrases: [
      { id: "c1formal-1", ne: "यहाँहरू सबैलाई हार्दिक स्वागत छ।", ro: "yahaanharu sabailaai haardik swaagat chha.", en: "A warm welcome to you all." },
      { id: "c1formal-2", ne: "कार्यक्रम अब सुरु हुनेछ।", ro: "kaaryakram aba suru hunechha.", en: "The programme will now begin." },
      { id: "c1formal-3", ne: "सहयोगका लागि हार्दिक धन्यवाद व्यक्त गर्दछु।", ro: "sahayogkaa laagi haardik dhanyabaad byakta gardachhu.", en: "I express my sincere thanks for your support." },
      { id: "c1formal-4", ne: "कृपया मोबाइल बन्द गरिदिनुहुन अनुरोध छ।", ro: "kripayaa mobaail banda garidinuhuna anurodh chha.", en: "You are kindly requested to switch off your mobile phones." },
      { id: "c1formal-5", ne: "यस विषयमा थप जानकारी आवश्यक छ।", ro: "yas bishayamaa thap jaankaari aawashyak chha.", en: "Further information is needed on this matter." },
      { id: "c1formal-6", ne: "आदरणीय महोदय", ro: "aadaraniya mahodaya", en: "Dear Sir", note: "The opening line of a formal letter." },
      { id: "c1formal-7", ne: "निवेदन स्वीकृत भएको जानकारी गराइन्छ।", ro: "nibedan swikrit bhaeko jaankaari garaainchha.", en: "You are informed that the application has been approved." },
      { id: "c1formal-8", ne: "समयमै उपस्थित हुनुहोला।", ro: "samayamai upasthit hunuholaa.", en: "Kindly be present on time.", note: "-nuholaa is the formal polite request." },
      { id: "c1formal-9", ne: "यो निर्णय सर्वसम्मतिले गरिएको हो।", ro: "yo nirnaya sarbasammatile garieko ho.", en: "This decision was taken unanimously." },
      { id: "c1formal-10", ne: "भवदीय", ro: "bhawadiya", en: "Yours faithfully", note: "The closing line of a formal letter." }
    ]
  },
  {
    id: "c1idiom", level: "C1", title: "Idioms in action", sub: "Nose, ears, heart and stomach",
    tips: [
      "Many idioms use the body: <b>naak</b> (nose) is honour, <b>man</b> is the heart and mind, <b>pet</b> (stomach) holds hidden thoughts.",
      "Idioms keep normal grammar. The person affected takes <b>-ko</b> or <b>-laai</b> as usual.",
      "Learn each one as a whole phrase. Word by word they make no sense."
    ],
    phrases: [
      { id: "c1idiom-1", ne: "उसले मेरो नाक काट्यो।", ro: "usle mero naak kaatyo.", en: "He disgraced me.", note: "Literally: he cut my nose." },
      { id: "c1idiom-2", ne: "त्यो सुनेर मेरो मन रोयो।", ro: "tyo sunera mero man royo.", en: "Hearing that, my heart wept." },
      { id: "c1idiom-3", ne: "उसको मुख मीठो छ, तर पेटमा अर्कै कुरा छ।", ro: "usko mukh mitho chha, tara petmaa arkai kuraa chha.", en: "He talks sweetly, but he means something else.", note: "Literally: there is something else in his stomach." },
      { id: "c1idiom-4", ne: "मेरो टाउको नखाऊ।", ro: "mero taauko nakhaau.", en: "Stop pestering me.", note: "Literally: don't eat my head." },
      { id: "c1idiom-5", ne: "उसको कुरा सुन्दा-सुन्दा कान पाक्यो।", ro: "usko kuraa sundaa-sundaa kaan paakyo.", en: "I'm sick of listening to him.", note: "Literally: my ears have ripened." },
      { id: "c1idiom-6", ne: "आँखा चिम्लेर विश्वास नगर्नुहोस्।", ro: "aankhaa chimlera bishwaas nagarnuhos.", en: "Don't trust blindly.", note: "Literally: with your eyes shut." },
      { id: "c1idiom-7", ne: "ऊ हात धोएर मेरो पछि लाग्यो।", ro: "u haat dhoera mero pachhi laagyo.", en: "He's been relentlessly after me.", note: "Literally: he washed his hands and came after me." },
      { id: "c1idiom-8", ne: "त्यो खबरले मेरो होस उड्यो।", ro: "tyo khabarle mero hos udyo.", en: "That news left me stunned.", note: "Literally: my senses flew away." },
      { id: "c1idiom-9", ne: "उनको मन ठूलो छ।", ro: "unko man thulo chha.", en: "She is big-hearted." },
      { id: "c1idiom-10", ne: "हामी पेट मिची-मिची हाँस्यौँ।", ro: "haami pet michi-michi haansyaun.", en: "We laughed till our sides hurt.", note: "Literally: rubbing our stomachs." }
    ]
  },
  {
    id: "c1precise", level: "C1", title: "The right word", sub: "Near-synonyms that Nepalis keep apart",
    tips: [
      "<b>thaahaa hunu</b> = know a fact. <b>chinnu</b> = know a person or place. <b>aaunu</b> = know how to do something.",
      "<b>hernu</b> is to look; <b>dekhnu</b> is to see. <b>sodhnu</b> is to ask; <b>bhannu</b> is to tell.",
      "<b>saknu</b> = be able. <b>paaunu</b> = get the chance or the permission."
    ],
    phrases: [
      { id: "c1precise-1", ne: "म उहाँलाई चिन्छु, तर उहाँको घर थाहा छैन।", ro: "ma uhaanlaai chinchhu, tara uhaanko ghar thaahaa chhaina.", en: "I know him, but I don't know where he lives." },
      { id: "c1precise-2", ne: "मलाई गाडी चलाउन आउँछ।", ro: "malaai gaadi chalaauna aaunchha.", en: "I know how to drive." },
      { id: "c1precise-3", ne: "मैले हेरेँ, तर केही देखिनँ।", ro: "maile heren, tara kehi dekhina.", en: "I looked, but I didn't see anything." },
      { id: "c1precise-4", ne: "मैले आज जान पाइनँ।", ro: "maile aaja jaana paaina.", en: "I didn't get the chance to go today." },
      { id: "c1precise-5", ne: "म थाकेकाले जान सकिनँ।", ro: "ma thaakekaale jaana sakina.", en: "I couldn't go because I was tired." },
      { id: "c1precise-6", ne: "उसले झूट बोल्यो कि गल्ती गर्‍यो?", ro: "usle jhut bolyo ki galti garyo?", en: "Did he lie, or did he make a mistake?" },
      { id: "c1precise-7", ne: "घर पुरानो हुन्छ, मान्छे बूढो हुन्छ।", ro: "ghar puraano hunchha, maanchhe budho hunchha.", en: "A house gets old; a person gets old.", note: "puraano for things, budho for people." },
      { id: "c1precise-8", ne: "पानी तातो छ, तर आज दिन गर्मी छ।", ro: "paani taato chha, tara aaja din garmi chha.", en: "The water is hot, but today the weather is hot.", note: "taato for things you touch, garmi for weather." },
      { id: "c1precise-9", ne: "मैले उसलाई सोधेँ, उसले मलाई भन्यो।", ro: "maile uslaai sodhen, usle malaai bhanyo.", en: "I asked him; he told me." },
      { id: "c1precise-10", ne: "उहाँ बित्नुभयो।", ro: "uhaan bitnubhayo.", en: "He passed away.", note: "The respectful word. marnu is blunt." }
    ]
  },
  {
    id: "c2echo", level: "C2", title: "Echo and rhythm", sub: "Chiyaa-siyaa, ko-ko, bistaarai-bistaarai",
    tips: [
      "An echo word repeats the noun with a new first sound, usually <b>s-</b>: <b>khaanaa-saanaa</b> = food and such.",
      "Doubling a question word asks for a list: <b>ke-ke</b>, <b>ko-ko</b>, <b>kahaan-kahaan</b>.",
      "Doubling an adverb or a verb in <b>-dai</b> adds rhythm: <b>ali-ali</b>, <b>haansdai-haansdai</b>."
    ],
    phrases: [
      { id: "c2echo-1", ne: "खाना-साना खाएर जानुहोस्।", ro: "khaanaa-saanaa khaaera jaanuhos.", en: "Have something to eat before you go." },
      { id: "c2echo-2", ne: "उसको पैसा-सैसा केही छैन।", ro: "usko paisaa-saisaa kehi chhaina.", en: "He has no money or anything." },
      { id: "c2echo-3", ne: "बिहेमा को-को आए?", ro: "bihemaa ko-ko aae?", en: "Who all came to the wedding?" },
      { id: "c2echo-4", ne: "नेपालमा कहाँ-कहाँ घुम्नुभयो?", ro: "nepaalmaa kahaan-kahaan ghumnubhayo?", en: "Which places did you visit in Nepal?" },
      { id: "c2echo-5", ne: "सानातिना कुरामा नरिसाउनुहोस्।", ro: "saanaatinaa kuraamaa narisaaunuhos.", en: "Don't get angry over little things." },
      { id: "c2echo-6", ne: "ऊ हाँस्दै-हाँस्दै आयो।", ro: "u haansdai-haansdai aayo.", en: "He came along laughing." },
      { id: "c2echo-7", ne: "घर-घरमा बत्ती बलेको छ।", ro: "ghar-gharmaa batti baleko chha.", en: "Lights are lit in every house." },
      { id: "c2echo-8", ne: "अलि-अलि गर्दै धेरै हुन्छ।", ro: "ali-ali gardai dherai hunchha.", en: "Little by little it adds up." },
      { id: "c2echo-9", ne: "गफगाफ गर्दै समय बित्यो।", ro: "gaphgaaph gardai samaya bityo.", en: "The time passed in chit-chat." },
      { id: "c2echo-10", ne: "लुगा-सुगा मिलाएर राख।", ro: "lugaa-sugaa milaaera raakha.", en: "Tidy your clothes and things away.", note: "Said to a child or a friend." }
    ]
  },
  {
    id: "c2nuance", level: "C2", title: "Fine shades", sub: "Po, re, kyaare, ni, hai, ta",
    tips: [
      "<b>po</b> marks a surprise or a correction: <b>tapaain po!</b> = oh, it's you!",
      "<b>re</b> = they say. <b>kyaare</b> = I think, if I remember rightly. <b>ni</b> = you know, of course.",
      "<b>hai</b> softens a request and asks for agreement. <b>ta</b> sets up a contrast."
    ],
    phrases: [
      { id: "c2nuance-1", ne: "ए, तपाईं पो हुनुहुँदो रहेछ!", ro: "e, tapaain po hunuhundo rahechha!", en: "Oh, so it's you!" },
      { id: "c2nuance-2", ne: "उहाँ भोलि आउनुहुन्छ रे।", ro: "uhaan bholi aaunuhunchha re.", en: "They say he's coming tomorrow." },
      { id: "c2nuance-3", ne: "उसको नाम हरि हो क्यारे।", ro: "usko naam hari ho kyaare.", en: "His name is Hari, I think." },
      { id: "c2nuance-4", ne: "मैले भनेको थिएँ नि!", ro: "maile bhaneko thien ni!", en: "I told you so!" },
      { id: "c2nuance-5", ne: "बिस्तारै जानुहोस् है।", ro: "bistaarai jaanuhos hai.", en: "Go carefully, won't you?" },
      { id: "c2nuance-6", ne: "पैसा त छ, समय चाहिँ छैन।", ro: "paisaa ta chha, samaya chaahin chhaina.", en: "Money I have; time is what I don't have." },
      { id: "c2nuance-7", ne: "ऊ आउँछ होला नि।", ro: "u aaunchha holaa ni.", en: "He'll come, I expect." },
      { id: "c2nuance-8", ne: "खानै पर्छ र?", ro: "khaanai parchha ra?", en: "Do I really have to eat it?" },
      { id: "c2nuance-9", ne: "जे होस्, काम त सकियो।", ro: "je hos, kaam ta sakiyo.", en: "Be that as it may, the work is done." },
      { id: "c2nuance-10", ne: "भन्न त भनेँ, तर उसले मानेन।", ro: "bhanna ta bhanen, tara usle maanena.", en: "I did tell him, but he wouldn't listen." }
    ]
  },
  {
    id: "c2proverb", level: "C2", title: "Proverbs at work", sub: "Old sayings for everyday moments",
    tips: [
      "A proverb is an <b>ukhaan</b>. Nepalis drop them into ordinary talk, often just the first half.",
      "Many are about animals, food and farming: village life is the shared reference.",
      "Introduce one with <b>bhanchhan ni</b> (as they say)."
    ],
    phrases: [
      { id: "c2proverb-1", ne: "हुने हार, दैव नटार।", ro: "hune haar, daiba nataar.", en: "What will be, will be." },
      { id: "c2proverb-2", ne: "नपत्याउने खोलाले बगाउँछ।", ro: "napatyaaune kholaale bagaaunchha.", en: "It's the stream you underestimate that sweeps you away." },
      { id: "c2proverb-3", ne: "आकाशको फल आँखा तरी मर्।", ro: "aakaashko phal aankhaa tari mar.", en: "Fruit in the sky: stare and die.", note: "Said of wanting what you can never have." },
      { id: "c2proverb-4", ne: "बाँदरको हातमा नरिवल।", ro: "baandarko haatmaa nariwal.", en: "A coconut in a monkey's hand.", note: "A fine thing given to someone who can't use it." },
      { id: "c2proverb-5", ne: "एक हातले ताली बज्दैन।", ro: "ek haatle taali bajdaina.", en: "You can't clap with one hand.", note: "It takes two to quarrel, or to cooperate." },
      { id: "c2proverb-6", ne: "आफ्नो आङको भैँसी देख्दैन, अर्काको आङको जुम्रा देख्छ।", ro: "aaphno aangko bhainsi dekhdaina, arkaako aangko jumraa dekhchha.", en: "He can't see the buffalo on his own back, but sees the louse on someone else's." },
      { id: "c2proverb-7", ne: "काम कुरो एकातिर, कुम्लो बोकी ठिमीतिर।", ro: "kaam kuro ekaatira, kumlo boki thimitira.", en: "The job is one way; he shoulders his bundle and heads for Thimi.", note: "Said of someone who goes off at a tangent." },
      { id: "c2proverb-8", ne: "जसको शक्ति, उसको भक्ति।", ro: "jasko shakti, usko bhakti.", en: "People worship whoever holds power." },
      { id: "c2proverb-9", ne: "भन्छन् नि, जहाँ इच्छा, त्यहाँ उपाय।", ro: "bhanchhan ni, jahaan ichchhaa, tyahaan upaaya.", en: "As they say, where there's a will, there's a way." },
      { id: "c2proverb-10", ne: "अचानोको पीर खुकुरीले जान्दैन।", ro: "achaanoko pir khukurile jaandaina.", en: "The khukuri doesn't know the chopping block's pain.", note: "The powerful don't feel what the weak suffer." }
    ]
  }
);
C.dialogues.push(
  {
    id: "d31", unit: "b2favour", title: "Help with a form",
    scene: "You need help with a form at the ward office.",
    lines: [
      { who: "B", ne: "नमस्ते। यो फारम भर्न गाह्रो भयो। अलि हेरिदिनुहुन्छ कि?", ro: "namaste. yo phaaram bharna gaahro bhayo. ali heridinuhunchha ki?", en: "Hello. I'm finding this form hard to fill in. Could you have a look?" },
      { who: "A", ne: "हुन्छ, देखाउनुहोस्। नाम र ठेगाना लेखिसक्नुभयो?", ro: "hunchha, dekhaaunuhos. naam ra thegaanaa lekhisaknubhayo?", en: "Sure, show me. Have you already written your name and address?" },
      { who: "B", ne: "लेखिसकेँ। यहाँ के लेख्ने?", ro: "lekhisaken. yahaan ke lekhne?", en: "I have. What do I write here?" },
      { who: "A", ne: "त्यहाँ राहदानी नम्बर लेख्नुहोस्। अनि फोटो टाँसिदिनुहोस्।", ro: "tyahaan raahadaani nambar lekhnuhos. ani photo taansidinuhos.", en: "Write your passport number there. And stick on a photo." },
      { who: "B", ne: "फोटो त ल्याउन बिर्सेछु!", ro: "photo ta lyaauna birsechhu!", en: "Oh, I've forgotten to bring a photo!" },
      { who: "A", ne: "केही छैन, भोलि ल्याइदिनुहोस्। म फारम राखिदिन्छु।", ro: "kehi chhaina, bholi lyaaidinuhos. ma phaaram raakhidinchhu.", en: "No problem, bring it tomorrow. I'll keep the form for you." },
      { who: "B", ne: "तपाईंले धेरै सहयोग गरिदिनुभयो। धन्यवाद!", ro: "tapaainle dherai sahayog garidinubhayo. dhanyabaad!", en: "You've been a great help. Thank you!" }
    ]
  },
  {
    id: "d32", unit: "b2rules", title: "At the museum gate",
    scene: "A guard stops you at the entrance.",
    lines: [
      { who: "A", ne: "माफ गर्नुहोस्, भित्र झोला लैजान पाइँदैन।", ro: "maaf garnuhos, bhitra jholaa laijaana paaindaina.", en: "Sorry, bags aren't allowed inside." },
      { who: "B", ne: "झोला कहाँ राखिन्छ?", ro: "jholaa kahaan raakhinchha?", en: "Where are bags kept?" },
      { who: "A", ne: "त्यहाँ काउन्टरमा राख्न सकिन्छ।", ro: "tyahaan kaauntarmaa raakhna sakinchha.", en: "You can leave it at the counter there." },
      { who: "B", ne: "भित्र फोटो खिच्न पाइन्छ?", ro: "bhitra photo khichna paainchha?", en: "Is photography allowed inside?" },
      { who: "A", ne: "पाइन्छ, तर फ्ल्यास बाल्नु हुँदैन।", ro: "paainchha, tara phlyaas baalnu hundaina.", en: "It is, but you mustn't use the flash." },
      { who: "B", ne: "टिकट यहीँ काटिन्छ?", ro: "tikat yahin kaatinchha?", en: "Are tickets sold right here?" },
      { who: "A", ne: "हो। विदेशीका लागि पाँच सय रुपैयाँ लाग्छ।", ro: "ho. bideshikaa laagi paanch saya rupaiyaan laagchha.", en: "Yes. For foreigners it's five hundred rupees." }
    ]
  },
  {
    id: "d33", unit: "c1casual", title: "Old friends",
    scene: "You bump into a friend you haven't seen for years.",
    lines: [
      { who: "A", ne: "ओहो, के छ यार? कति भयो नभेटेको!", ro: "oho, ke chha yaar? kati bhayo nabheteko!", en: "Hey, how's things, mate? It's been ages!" },
      { who: "B", ne: "ठिकै छ। तिम्रो के छ?", ro: "thikai chha. timro ke chha?", en: "Not bad. How about you?" },
      { who: "A", ne: "खासै केही छैन। काम, घर, काम।", ro: "khaasai kehi chhaina. kaam, ghar, kaam.", en: "Nothing much. Work, home, work." },
      { who: "B", ne: "अनि बिहे-सिहे गर्ने होइन?", ro: "ani bihe-sihe garne hoina?", en: "And aren't you getting married or anything?" },
      { who: "A", ne: "खोइ, आमा त सधैँ भन्नुहुन्छ।", ro: "khoi, aamaa ta sadhain bhannuhunchha.", en: "Who knows. Mum goes on about it all the time." },
      { who: "B", ne: "ल, जाम् चिया खान। गफ गरौँ।", ro: "la, jaam chiyaa khaana. gaph garaun.", en: "Come on, let's go for tea. Let's have a chat." }
    ]
  },
  {
    id: "d34", unit: "c2nuance", title: "Office gossip",
    scene: "A colleague leans over with news.",
    lines: [
      { who: "A", ne: "सुन्यौ? हरिले जागिर छोड्यो रे।", ro: "sunyau? harile jaagir chhodyo re.", en: "Did you hear? Apparently Hari has quit his job." },
      { who: "B", ne: "हो र? मैले त बढुवा भएको भन्ठानेको।", ro: "ho ra? maile ta badhuwaa bhaeko bhanthaaneko.", en: "Really? I thought he'd been promoted." },
      { who: "A", ne: "बढुवा त भएको थियो नि, तर हाकिमसँग झगडा पर्‍यो क्यारे।", ro: "badhuwaa ta bhaeko thiyo ni, tara haakimsanga jhagadaa paryo kyaare.", en: "He had been promoted, yes, but he fell out with the boss, I think." },
      { who: "B", ne: "अब के गर्छ होला?", ro: "aba ke garchha holaa?", en: "What will he do now, I wonder?" },
      { who: "A", ne: "विदेश जाने रे।", ro: "bidesh jaane re.", en: "Going abroad, they say." },
      { who: "B", ne: "जे होस्, राम्रै होस्।", ro: "je hos, raamrai hos.", en: "Whatever happens, I hope it goes well." }
    ]
  },
  {
    id: "d35", unit: "b2feel", title: "How was the trek?",
    scene: "A friend asks about your trek to Poon Hill.",
    lines: [
      { who: "A", ne: "पुन हिल कस्तो लाग्यो?", ro: "pun hil kasto laagyo?", en: "How did you like Poon Hill?" },
      { who: "B", ne: "असाध्यै राम्रो लाग्यो। तर उकालो चढ्दा सास फुल्यो।", ro: "asaadhyai raamro laagyo. tara ukaalo chadhdaa saas phulyo.", en: "I loved it. But climbing uphill I got out of breath." },
      { who: "A", ne: "पुग्न कति दिन लाग्यो?", ro: "pugna kati din laagyo?", en: "How many days did it take to get there?" },
      { who: "B", ne: "दुई दिन लाग्यो। दोस्रो दिन पानी पर्‍यो।", ro: "dui din laagyo. dosro din paani paryo.", en: "It took two days. On the second day it rained." },
      { who: "A", ne: "जुका लागेन?", ro: "jukaa laagena?", en: "Didn't you get leeches?" },
      { who: "B", ne: "लाग्यो नि! खुट्टाभरि जुका लागेर आपत पर्‍यो।", ro: "laagyo ni! khuttaabhari jukaa laagera aapat paryo.", en: "I did! Leeches all over my legs: I was in a real fix." },
      { who: "A", ne: "फेरि जान मन लाग्छ त?", ro: "pheri jaana man laagchha ta?", en: "So do you feel like going again?" },
      { who: "B", ne: "लाग्छ। अर्को पटक तपाईं पनि जानुपर्छ।", ro: "laagchha. arko patak tapaain pani jaanuparchha.", en: "I do. Next time you have to come too." }
    ]
  },
  {
    id: "d36", unit: "b2respect", title: "Meeting a friend's grandfather",
    scene: "Your friend Bikash takes you home. His grandfather is sitting on the veranda.",
    lines: [
      { who: "A", ne: "आउनुहोस्, आउनुहोस्। बस्नुहोस् न।", ro: "aaunuhos, aaunuhos. basnuhos na.", en: "Come in, come in. Do sit down." },
      { who: "B", ne: "नमस्कार, हजुरबुबा। हजुरलाई सन्चै छ?", ro: "namaskaar, hajurbubaa. hajurlaai sanchai chha?", en: "Greetings, Grandfather. Are you keeping well?" },
      { who: "A", ne: "सन्चै छु। तिमी कहाँबाट आएको?", ro: "sanchai chhu. timi kahaanbaata aaeko?", en: "I'm well. Where have you come from?" },
      { who: "B", ne: "म पोर्चुगलबाट आएको हुँ, हजुर।", ro: "ma porchugalbaata aaeko hun, hajur.", en: "I'm from Portugal, sir." },
      { who: "A", ne: "ए, धेरै टाढाबाट! नेपाली कहाँ सिक्यौ?", ro: "e, dherai taadhaabaata! nepaali kahaan sikyau?", en: "Oh, from so far away! Where did you learn Nepali?" },
      { who: "B", ne: "विकासले सिकाइदिएको हो। अझै सिक्दै छु, हजुर।", ro: "bikaasle sikaaidieko ho. ajhai sikdai chhu, hajur.", en: "Bikash taught me. I'm still learning, sir." },
      { who: "A", ne: "राम्रो बोल्छौ। खाना खाएर मात्र जानू है।", ro: "raamro bolchhau. khaanaa khaaera maatra jaanu hai.", en: "You speak well. Don't leave without eating, will you?" },
      { who: "B", ne: "हजुरलाई कष्ट हुन्छ कि?", ro: "hajurlaai kashta hunchha ki?", en: "Wouldn't that be a trouble for you?" },
      { who: "A", ne: "के को कष्ट! पाहुना भनेका देवता हुन्।", ro: "ke ko kashta! paahunaa bhanekaa debataa hun.", en: "What trouble! Guests are gods." }
    ]
  },
  {
    id: "d37", unit: "b2ideas", title: "Looking for a room",
    scene: "You ask a tea-shop owner in Patan about a place to rent.",
    lines: [
      { who: "B", ne: "दिदी, यता बस्ने कोठा पाइन्छ?", ro: "didi, yataa basne kothaa paainchha?", en: "Excuse me, is there a room to rent around here?" },
      { who: "A", ne: "पाइन्छ। कति जना बस्ने?", ro: "paainchha. kati janaa basne?", en: "There is. For how many people?" },
      { who: "B", ne: "म एक्लै बस्ने हो। खाना पकाउने ठाउँ चाहिन्छ।", ro: "ma eklai basne ho. khaanaa pakaaune thaaun chaahinchha.", en: "Just me. I need somewhere to cook." },
      { who: "A", ne: "माथिल्लो तलामा भर्खर खाली भएको कोठा छ। भान्सा पनि छ।", ro: "maathillo talaamaa bharkhar khaali bhaeko kothaa chha. bhaansaa pani chha.", en: "There's a room upstairs that has just become free. It has a kitchen too." },
      { who: "B", ne: "भाडा कति तिर्नुपर्ने हो?", ro: "bhaadaa kati tirnuparne ho?", en: "How much is the rent?" },
      { who: "A", ne: "महिनाको बाह्र हजार। बत्ती-पानीको छुट्टै लाग्छ।", ro: "mahinaako baahra hajaar. batti-paaniko chhuttai laagchha.", en: "Twelve thousand a month. Electricity and water are extra." },
      { who: "B", ne: "हेर्ने बेला कहिले मिल्छ?", ro: "herne belaa kahile milchha?", en: "When would be a good time to see it?" },
      { who: "A", ne: "अहिल्यै हेर्नुहोस् न, साँचो मसँगै छ।", ro: "ahilyai hernuhos na, saancho masangai chha.", en: "See it right now; I have the key with me." }
    ]
  },
  {
    id: "d38", unit: "c1idiom", title: "Letting off steam",
    scene: "Over tea, a friend complains about a new boss. Answer in the same idiomatic style.",
    lines: [
      { who: "A", ne: "त्यो नयाँ हाकिमले त मेरो टाउको खायो।", ro: "tyo nayaan haakimle ta mero taauko khaayo.", en: "That new boss is driving me mad." },
      { who: "B", ne: "किन, के भयो?", ro: "kina, ke bhayo?", en: "Why, what happened?" },
      { who: "A", ne: "मुखले मीठो बोल्छ, तर पेटमा अर्कै कुरा छ।", ro: "mukhle mitho bolchha, tara petmaa arkai kuraa chha.", en: "He talks sweetly, but he means something else." },
      { who: "B", ne: "आँखा चिम्लेर विश्वास नगर न त।", ro: "aankhaa chimlera bishwaas nagara na ta.", en: "Then don't trust him blindly." },
      { who: "A", ne: "हिजो सबैको अगाडि मेरो नाक काट्यो।", ro: "hijo sabaiko agaadi mero naak kaatyo.", en: "Yesterday he humiliated me in front of everyone." },
      { who: "B", ne: "त्यो सुनेर मेरो पनि मन दुख्यो।", ro: "tyo sunera mero pani man dukhyo.", en: "Hearing that hurts me too." },
      { who: "A", ne: "उसको गनगन सुन्दा-सुन्दा कान पाकिसक्यो।", ro: "usko gangan sundaa-sundaa kaan paakisakyo.", en: "I'm sick to death of listening to his grumbling." },
      { who: "B", ne: "मन ठूलो बनाऊ, यार। यो पनि बितेर जान्छ।", ro: "man thulo banaau, yaar. yo pani bitera jaanchha.", en: "Be big-hearted, mate. This too will pass." }
    ]
  },
  {
    id: "d39", unit: "c1precise", title: "Know, can, may",
    scene: "A colleague wants to visit Ramesh, a mutual acquaintance. Choose your verbs with care.",
    lines: [
      { who: "A", ne: "तपाईं रमेशजीलाई चिन्नुहुन्छ?", ro: "tapaain rameshjilaai chinnuhunchha?", en: "Do you know Ramesh?" },
      { who: "B", ne: "चिन्छु, तर उहाँको घर कहाँ हो, थाहा छैन।", ro: "chinchhu, tara uhaanko ghar kahaan ho, thaahaa chhaina.", en: "I know him, but I don't know where his house is." },
      { who: "A", ne: "मैले हिजो फोन गरेँ, उहाँले उठाउनुभएन।", ro: "maile hijo phon garen, uhaanle uthaaunubhaena.", en: "I phoned yesterday; he didn't pick up." },
      { who: "B", ne: "सुन्नुभएन होला। उहाँ अलि कम सुन्नुहुन्छ।", ro: "sunnubhaena holaa. uhaan ali kam sunnuhunchha.", en: "He probably didn't hear. He's a little hard of hearing." },
      { who: "A", ne: "म भोलि भेट्न जान सक्दिनँ, बिदा पाइनँ।", ro: "ma bholi bhetna jaana sakdina, bidaa paaina.", en: "I can't go to see him tomorrow; I didn't get leave." },
      { who: "B", ne: "म सोधिदिन्छु, अनि तपाईंलाई भन्छु।", ro: "ma sodhidinchhu, ani tapaainlaai bhanchhu.", en: "I'll ask for you and then tell you." },
      { who: "A", ne: "तपाईंलाई मोटरसाइकल चलाउन आउँछ? सँगै जाऔँ न।", ro: "tapaainlaai motarsaaikal chalaauna aaunchha? sangai jaaun na.", en: "Do you know how to ride a motorbike? Let's go together." },
      { who: "B", ne: "आउँछ, तर यहाँ चलाउन पाइँदैन, लाइसेन्स छैन।", ro: "aaunchha, tara yahaan chalaauna paaindaina, laaisens chhaina.", en: "I do, but I'm not allowed to ride here; I have no licence." }
    ]
  },
  {
    id: "d40", unit: "c2echo", title: "Packing for the village",
    scene: "You are off to a friend's village for Dashain. His mother checks that you are ready.",
    lines: [
      { who: "A", ne: "लुगा-सुगा सबै हाल्यौ?", ro: "lugaa-sugaa sabai haalyau?", en: "Have you packed your clothes and things?" },
      { who: "B", ne: "हालेँ। अरू के-के लानुपर्छ?", ro: "haalen. aru ke-ke laanuparchha?", en: "I have. What else do I need to take?" },
      { who: "A", ne: "बाटोमा खाजा-साजा पाइँदैन, केही बोकेर जानू।", ro: "baatomaa khaajaa-saajaa paaindaina, kehi bokera jaanu.", en: "You won't find snacks or anything on the way; take something with you." },
      { who: "B", ne: "बिस्कुट-सिस्कुट किनिसकेँ। गाउँमा को-को हुनुहुन्छ?", ro: "biskut-siskut kinisaken. gaaunmaa ko-ko hunuhunchha?", en: "I've already bought biscuits and so on. Who is there in the village?" },
      { who: "A", ne: "हजुरबा, हजुरआमा, काका-काकी सबै। घर-घरमा पिङ हालेका होलान्।", ro: "hajurbaa, hajuraamaa, kaakaa-kaaki sabai. ghar-gharmaa ping haalekaa holaan.", en: "Grandfather, grandmother, uncle and aunt, everyone. There'll be swings put up at every house." },
      { who: "B", ne: "कति रमाइलो! म बिस्तारै-बिस्तारै सबैसँग चिनजान गर्छु।", ro: "kati ramaailo! ma bistaarai-bistaarai sabaisanga chinjaan garchhu.", en: "What fun! I'll get to know everyone bit by bit." },
      { who: "A", ne: "ल, हाँस्दै-खेल्दै जाऊ। पुगेपछि फोन-सोन गर्नू है।", ro: "la, haansdai-kheldai jaau. pugepachhi phon-son garnu hai.", en: "Right, off you go and enjoy yourselves. Give us a ring or something when you get there." }
    ]
  }
);
C.stories.push(
  {
    id: "s10", level: "B2", unit: "b2favour", title: "Getting the roof fixed",
    intro: "A family story about a storm and two builders. Listen for the -idinu forms.",
    lines: [
      { ne: "गएको हप्ताको हावाहुरीले हाम्रो छानो बिगारिदियो।", ro: "gaeko haptaako haawaahurile haamro chhaano bigaaridiyo.", en: "Last week's storm damaged our roof." },
      { ne: "बुबाले तुरुन्तै मिस्त्री बोलाउनुभयो।", ro: "bubaale turuntai mistri bolaaunubhayo.", en: "Father called a builder straight away." },
      { ne: "मिस्त्रीले तीन दिनमा बनाइदिन्छु भन्यो।", ro: "mistrile tin dinmaa banaaidinchhu bhanyo.", en: "The builder said he would fix it in three days." },
      { ne: "तर एक हप्ता बितिसक्दा पनि काम सकिएन।", ro: "tara ek haptaa bitisakdaa pani kaam sakiena.", en: "But even after a week had passed, the work wasn't finished." },
      { ne: "पानी पर्दा कोठाभित्रै भाँडा थाप्नुपर्‍यो।", ro: "paani pardaa kothaabhitrai bhaandaa thaapnuparyo.", en: "When it rained we had to put out pots inside the room." },
      { ne: "अन्त्यमा छिमेकीले अर्को मिस्त्री खोजिदिनुभयो।", ro: "antyamaa chhimekile arko mistri khojidinubhayo.", en: "In the end a neighbour found us another builder." },
      { ne: "उसले एकै दिनमा काम सकिदियो।", ro: "usle ekai dinmaa kaam sakidiyo.", en: "He finished the job in a single day." }
    ],
    questions: [
      { q: "What damaged the roof?", a: "A storm", o: ["An earthquake", "A fire", "Monkeys"] },
      { q: "How long did the first builder say it would take?", a: "Three days", o: ["One day", "A week", "A month"] },
      { q: "Who found the second builder?", a: "A neighbour", o: ["Father", "The first builder", "An uncle"] }
    ]
  },
  {
    id: "s13", level: "B2", unit: "b2rules", title: "The trekking permit",
    intro: "A trekker explains the rules for the Annapurna area. Listen for what is needed and what is not allowed.",
    lines: [
      { ne: "अन्नपूर्ण क्षेत्रमा जान अनुमतिपत्र लिनुपर्छ।", ro: "annapurna kshetramaa jaana anumatipatra linuparchha.", en: "To go into the Annapurna area you have to get a permit." },
      { ne: "अनुमतिपत्र पोखराको कार्यालयमा पाइन्छ।", ro: "anumatipatra pokharaako kaaryaalayamaa paainchha.", en: "The permit is available at the office in Pokhara." },
      { ne: "त्यसका लागि दुईवटा फोटो र राहदानी चाहिन्छ।", ro: "tyaskaa laagi duiwataa photo ra raahadaani chaahinchha.", en: "For it you need two photos and your passport." },
      { ne: "विदेशीलाई तीन हजार रुपैयाँ लाग्छ।", ro: "bideshilaai tin hajaar rupaiyaan laagchha.", en: "For foreigners it costs three thousand rupees." },
      { ne: "बाटोमा ठाउँ-ठाउँमा अनुमतिपत्र जाँचिन्छ।", ro: "baatomaa thaaun-thaaunmaa anumatipatra jaanchinchha.", en: "Along the trail the permit is checked at various places." },
      { ne: "जङ्गलमा आगो बाल्न र फोहोर फाल्न पाइँदैन।", ro: "jangalmaa aago baalna ra phohor phaalna paaindaina.", en: "Lighting fires and dropping litter in the forest are not allowed." },
      { ne: "नियम नमान्नेले जरिवाना तिर्नुपर्छ।", ro: "niyam namaannele jariwaanaa tirnuparchha.", en: "Anyone who breaks the rules has to pay a fine." }
    ],
    questions: [
      { q: "Where do you get the permit?", a: "At the office in Pokhara", o: ["At the airport", "On the trail", "In the forest"] },
      { q: "How much does it cost for foreigners?", a: "3,000 rupees", o: ["300 rupees", "2,000 rupees", "5,000 rupees"] },
      { q: "What is not allowed in the forest?", a: "Lighting fires and dropping litter", o: ["Taking photos", "Walking alone", "Camping"] }
    ]
  },
  {
    id: "s14", level: "B2", unit: "b2respect", title: "A visit to my old teacher",
    intro: "A former student visits a retired teacher. Notice the respect forms on every verb about him.",
    lines: [
      { ne: "हिजो म आफूलाई पढाउनुभएको गुरुलाई भेट्न गएँ।", ro: "hijo ma aaphulaai padhaaunubhaeko gurulaai bhetna gaen.", en: "Yesterday I went to see the teacher who taught me." },
      { ne: "उहाँ अवकाश पाएर गाउँमा बस्दै हुनुहुन्छ।", ro: "uhaan abakaash paaera gaaunmaa basdai hunuhunchha.", en: "He has retired and is living in the village." },
      { ne: "मलाई देख्नेबित्तिकै उहाँले चिन्नुभयो।", ro: "malaai dekhnebittikai uhaanle chinnubhayo.", en: "He recognised me the moment he saw me." },
      { ne: "गुरुआमाले आफैँले पकाउनुभएको खाना खुवाउनुभयो।", ro: "guruaamaale aaphainle pakaaunubhaeko khaanaa khuwaaunubhayo.", en: "His wife served me food she had cooked herself." },
      { ne: "उहाँले सिकाउनुभएका कुरा म अझै सम्झन्छु।", ro: "uhaanle sikaaunubhaekaa kuraa ma ajhai samjhanchhu.", en: "I still remember the things he taught." },
      { ne: "फर्कने बेलामा उहाँले आशीर्वाद दिनुभयो।", ro: "pharkane belaamaa uhaanle aashirbaad dinubhayo.", en: "When it was time to leave, he gave me his blessing." },
      { ne: "गुरुलाई भेट्न पाउनु मेरा लागि ठूलो खुसीको कुरा हो।", ro: "gurulaai bhetna paaunu meraa laagi thulo khusiko kuraa ho.", en: "Being able to see my teacher is a great joy for me." }
    ],
    questions: [
      { q: "Where does the teacher live now?", a: "In the village", o: ["In Kathmandu", "Abroad", "At the school"] },
      { q: "Who cooked the food?", a: "The teacher's wife", o: ["The narrator", "The teacher", "A neighbour"] },
      { q: "What did the teacher give when the visitor left?", a: "His blessing", o: ["A book", "Money", "A letter"] }
    ]
  },
  {
    id: "s11", level: "C1", unit: "c1formal", title: "The headteacher's speech",
    intro: "A short formal speech at a school prize day. Notice the formal vocabulary.",
    lines: [
      { ne: "आदरणीय अभिभावकज्यू, शिक्षक साथीहरू र प्यारा विद्यार्थी भाइबहिनीहरू।", ro: "aadaraniya abhibhaawakjyu, shikshak saathiharu ra pyaaraa bidyaarthi bhaaibahiniharu.", en: "Respected parents, fellow teachers and dear students." },
      { ne: "आजको यस कार्यक्रममा यहाँहरूलाई हार्दिक स्वागत गर्दछु।", ro: "aajako yas kaaryakrammaa yahaanharulaai haardik swaagat gardachhu.", en: "I warmly welcome you to today's programme." },
      { ne: "यस वर्ष हाम्रो विद्यालयको नतिजा उत्कृष्ट रह्यो।", ro: "yas barsha haamro bidyaalayako natijaa utkrishta rahyo.", en: "This year our school's results were excellent." },
      { ne: "यो सफलता शिक्षकहरूको मिहिनेत र अभिभावकको सहयोगले सम्भव भएको हो।", ro: "yo saphalataa shikshakharuko mihinet ra abhibhaawakko sahayogle sambhab bhaeko ho.", en: "This success was made possible by the teachers' hard work and the parents' support." },
      { ne: "आगामी वर्ष नयाँ पुस्तकालय निर्माण गरिनेछ।", ro: "aagaami barsha nayaan pustakaalaya nirmaan garinechha.", en: "Next year a new library will be built." },
      { ne: "अन्त्यमा, सबैलाई पुनः धन्यवाद दिँदै बिदा हुन चाहन्छु।", ro: "antyamaa, sabailaai punah dhanyabaad dindai bidaa huna chaahanchhu.", en: "Finally, thanking everyone once again, I would like to take my leave." }
    ],
    questions: [
      { q: "Who does the speaker address first?", a: "The parents", o: ["The students", "The minister", "The teachers"] },
      { q: "How were the school's results this year?", a: "Excellent", o: ["Average", "Worse than last year", "Not yet known"] },
      { q: "What will be built next year?", a: "A library", o: ["A playground", "A canteen", "A new classroom block"] }
    ]
  },
  {
    id: "s15", level: "C1", unit: "c1casual", title: "A voice message",
    intro: "A friend's voice message, in the short forms friends use. Listen for bho, bhanyaa and khoi.",
    lines: [
      { ne: "ओइ, के छ यार? धेरै भो कुरा नभएको।", ro: "oi, ke chha yaar? dherai bho kuraa nabhaeko.", en: "Hey, how's it going, mate? It's been ages since we talked." },
      { ne: "हिजो तिमीलाई फोन गर्‍या थिएँ, उठाएनौ त।", ro: "hijo timilaai phon garyaa thien, uthaaenau ta.", en: "I rang you yesterday; you didn't pick up." },
      { ne: "शनिबार हामी सबै जना नगरकोट जाने भन्या छ।", ro: "shanibaar haami sabai janaa nagarkot jaane bhanyaa chha.", en: "On Saturday we're all planning to go to Nagarkot." },
      { ne: "गाडी-साडीको टेन्सन नलेऊ, रमेशले मिलाइहाल्छ।", ro: "gaadi-saadiko tensan naleu, rameshle milaaihaalchha.", en: "Don't stress about transport and all that; Ramesh will sort it out." },
      { ne: "खोइ, पानी पर्छ कि भन्ने डर चाहिँ छ।", ro: "khoi, paani parchha ki bhanne dar chaahin chha.", en: "Dunno, I am a bit afraid it might rain, though." },
      { ne: "ल, आउने भए आजै भन है। पछि कुरा गरौँला।", ro: "la, aaune bhae aajai bhana hai. pachhi kuraa garaunlaa.", en: "Right, if you're coming, tell me today, OK? Talk later." }
    ],
    questions: [
      { q: "Where are the friends going on Saturday?", a: "Nagarkot", o: ["Pokhara", "Bhaktapur", "Chitwan"] },
      { q: "Who will sort out the transport?", a: "Ramesh", o: ["The speaker", "The listener", "A travel agent"] },
      { q: "What is the speaker a little worried about?", a: "Rain", o: ["The cost", "The traffic", "Getting leave"] }
    ]
  },
  {
    id: "s16", level: "C1", unit: "c1idiom", title: "The interview",
    intro: "A young man tells his sister about a job interview. Listen for the heart, the nose and the right word for “know”.",
    lines: [
      { ne: "आज मेरो अन्तर्वार्ता थियो, दिदी।", ro: "aaja mero antarbaartaa thiyo, didi.", en: "I had my interview today, sister." },
      { ne: "सुरुमा त डरले मुटु ढुकढुक भयो।", ro: "surumaa ta darle mutu dhukdhuk bhayo.", en: "At first my heart was pounding with fear." },
      { ne: "एउटा प्रश्नको जवाफ मलाई आएन, झूट बोल्न पनि मन लागेन।", ro: "eutaa prashnako jawaaph malaai aaena, jhut bolna pani man laagena.", en: "There was one question I couldn't answer, and I didn't feel like lying either." },
      { ne: "त्यसैले थाहा छैन भनेर सीधै भनिदिएँ।", ro: "tyasaile thaahaa chhaina bhanera sidhai bhanidien.", en: "So I told them straight that I didn't know." },
      { ne: "हाकिमले मेरो कुरा मन पराउनुभयो जस्तो लाग्यो।", ro: "haakimle mero kuraa man paraaunubhayo jasto laagyo.", en: "The boss seemed to like what I said." },
      { ne: "जागिर पाएँ भने बुबाको नाक राख्न पाउँछु।", ro: "jaagir paaen bhane bubaako naak raakhna paaunchhu.", en: "If I get the job, I'll be able to do Father proud." },
      { ne: "नतिजा भोलि थाहा हुन्छ रे।", ro: "natijaa bholi thaahaa hunchha re.", en: "They say the result will be known tomorrow." }
    ],
    questions: [
      { q: "How did he feel at the start?", a: "Very nervous", o: ["Bored", "Confident", "Angry"] },
      { q: "What did he do about the question he couldn't answer?", a: "Said honestly that he didn't know", o: ["Made up an answer", "Asked for more time", "Changed the subject"] },
      { q: "When will he know the result?", a: "Tomorrow", o: ["Today", "Next week", "In a month"] }
    ]
  },
  {
    id: "s17", level: "C2", unit: "c2echo", title: "Dashain in the village",
    intro: "Memories of Dashain in the village, full of echo words and doubled words.",
    lines: [
      { ne: "दसैँ आउनुअघि घर-घरमा लिपपोत गरिन्छ।", ro: "dasain aaunuaghi ghar-gharmaa lippot garinchha.", en: "Before Dashain every house is given a fresh coat of mud and clay." },
      { ne: "केटाकेटीहरू नयाँ लुगा-सुगा लगाएर यता-उता दौडन्छन्।", ro: "ketaaketiharu nayaan lugaa-sugaa lagaaera yataa-utaa daudanchhan.", en: "The children put on their new clothes and things and run here and there." },
      { ne: "आफन्तहरू टाढा-टाढाबाट आउँछन्।", ro: "aaphantaharu taadhaa-taadhaabaata aaunchhan.", en: "Relatives come from far and wide." },
      { ne: "खानपिन, नाचगान र गफगाफले रात बित्छ।", ro: "khaanpin, naachgaan ra gaphgaaphle raat bitchha.", en: "The night passes in eating and drinking, singing and dancing, and chit-chat." },
      { ne: "ठूलाबडाले टीका लगाइदिँदै आशीर्वाद दिनुहुन्छ।", ro: "thulaabadaale tikaa lagaaidindai aashirbaad dinuhunchha.", en: "The elders put on the tika and give their blessing." },
      { ne: "अलि-अलि दक्षिणा पाउँदा केटाकेटी मख्ख पर्छन्।", ro: "ali-ali dakshinaa paaundaa ketaaketi makkha parchhan.", en: "Getting a little gift of money each, the children are thrilled." }
    ],
    questions: [
      { q: "What is done to the houses before Dashain?", a: "They are freshly plastered", o: ["They are locked up", "They are sold", "They are painted blue"] },
      { q: "How does the night pass?", a: "Eating, singing, dancing and chatting", o: ["In silence and prayer", "Watching television", "Working in the fields"] },
      { q: "What thrills the children?", a: "A little gift of money", o: ["A day off school", "A trip to town", "A new bicycle"] }
    ]
  },
  {
    id: "s18", level: "C2", unit: "c2nuance", title: "The rumour",
    intro: "A rumour goes round the village and turns out differently. Listen for re, kyaare, po and rahechha.",
    lines: [
      { ne: "गाउँमा नयाँ डाक्टर आउनुभएको छ रे।", ro: "gaaunmaa nayaan daaktar aaunubhaeko chha re.", en: "They say a new doctor has come to the village." },
      { ne: "उहाँ विदेशमा पढेर आउनुभएको हो क्यारे।", ro: "uhaan bideshmaa padhera aaunubhaeko ho kyaare.", en: "He studied abroad, I think." },
      { ne: "कसैले भने, उहाँ त एक महिना मात्र बस्नुहुन्छ रे।", ro: "kasaile bhane, uhaan ta ek mahinaa maatra basnuhunchha re.", en: "Some said he would only stay a month." },
      { ne: "म आफैँ भेट्न गएँ; उहाँ त हाम्रै गाउँको छोरा पो हुनुहुँदो रहेछ!", ro: "ma aaphain bhetna gaen; uhaan ta haamrai gaaunko chhoraa po hunuhundo rahechha!", en: "I went to meet him myself; he turned out to be a son of our own village!" },
      { ne: "एक महिना होइन, सधैँका लागि फर्कनुभएको रहेछ।", ro: "ek mahinaa hoina, sadhainkaa laagi pharkanubhaeko rahechha.", en: "Not for a month: it turns out he has come back for good." },
      { ne: "हल्ला त हल्लै हो नि; आफैँले नबुझी पत्याउनु हुँदैन।", ro: "hallaa ta hallai ho ni; aaphainle nabujhi patyaaunu hundaina.", en: "A rumour is just a rumour, you know; you shouldn't believe things without finding out for yourself." }
    ],
    questions: [
      { q: "What was the first rumour?", a: "A new doctor had come", o: ["The clinic was closing", "A road would be built", "A teacher had left"] },
      { q: "Who did the doctor turn out to be?", a: "A son of the village", o: ["A foreigner", "The narrator's brother", "A government inspector"] },
      { q: "How long is he staying?", a: "For good", o: ["One month", "One year", "Until Dashain"] }
    ]
  },
  {
    id: "s12", level: "C2", unit: "c2proverb", title: "Grandmother's proverbs",
    intro: "A grandchild looks back on a grandmother's sayings. Listen for po and kyaare.",
    lines: [
      { ne: "हजुरआमा कुरैपिच्छे उखान हाल्नुहुन्छ।", ro: "hajuraamaa kuraipichchhe ukhaan haalnuhunchha.", en: "Grandmother drops a proverb into everything she says." },
      { ne: "भाइसँग झगडा पर्दा, एक हातले ताली बज्दैन भन्नुभयो।", ro: "bhaaisanga jhagadaa pardaa, ek haatle taali bajdaina bhannubhayo.", en: "When I quarrelled with my brother, she said you can't clap with one hand." },
      { ne: "सानो काम भनेर हेला गर्दा, नपत्याउने खोलाले बगाउँछ नि भन्नुभयो।", ro: "saano kaam bhanera helaa gardaa, napatyaaune kholaale bagaaunchha ni bhannubhayo.", en: "When I looked down on a job as too small, she said it's the stream you underestimate that sweeps you away." },
      { ne: "सुरुमा त मलाई ती कुरा पुराना जस्ता लाग्थे।", ro: "surumaa ta malaai ti kuraa puraanaa jastaa laagthe.", en: "At first those sayings seemed old-fashioned to me." },
      { ne: "अहिले पो बुझ्दैछु, हरेक उखानमा जीवनको अनुभव लुकेको हुँदो रहेछ।", ro: "ahile po bujhdaichhu, harek ukhaanmaa jiwanko anubhab lukeko hundo rahechha.", en: "Only now am I realising that every proverb has a lifetime of experience hidden in it." },
      { ne: "आजकाल म आफैँ साथीहरूलाई उखान सुनाउँछु क्यारे।", ro: "aajakal ma aaphain saathiharulaai ukhaan sunaaunchhu kyaare.", en: "These days I seem to be the one quoting proverbs to my friends." }
    ],
    questions: [
      { q: "What does grandmother add to everything she says?", a: "A proverb", o: ["A joke", "A complaint", "A blessing"] },
      { q: "What did she say about the quarrel?", a: "You can't clap with one hand", o: ["What will be, will be", "Where there's a will, there's a way", "A coconut in a monkey's hand"] },
      { q: "How does the narrator see the proverbs now?", a: "As full of life experience", o: ["As old-fashioned", "As hard to understand", "As only for children"] }
    ]
  }
);
// Culture article and grammar chapter shown on each lesson's page.
Object.assign(C.unitLinks = C.unitLinks || {}, {
  b2favour: { c: "etiquette", g: "compound" },
  b2service: { c: "people", g: "caus" },
  b2rules: { c: "hinduism", g: "pass" },
  b2feel: { c: "himalaya", g: "workhorse" },
  b2respect: { c: "family", g: "honor" },
  b2ideas: { c: "valley", g: "noun" },
  c1casual: { c: "people", g: "spoken" },
  c1formal: { c: "history", g: "formal" },
  c1idiom: { c: "food", g: "idiom" },
  c1precise: { c: "buddhism", g: "words" },
  c2echo: { c: "festivals", g: "echo" },
  c2nuance: { c: "calendar", g: "nuance" },
  c2proverb: { c: "history", g: "proverb" }
});
})();
