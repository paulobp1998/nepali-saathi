// More listening for A1 to B1: one conversation for each lesson that had none, and extra stories.
// Same shapes as in content.js and content-more.js. In conversations A is the other person, B is you.
(function () {
const C = window.COURSE;
C.dialogues.push(
  {
    id: "d13", unit: "greet", title: "Morning greeting",
    scene: "You pass your neighbour, an older woman, on the stairs.",
    lines: [
      { who: "A", ne: "नमस्ते! सन्चै हुनुहुन्छ?", ro: "namaste! sanchai hunuhunchha?", en: "Hello! Are you well?" },
      { who: "B", ne: "नमस्ते दिदी! सन्चै छु। तपाईंलाई कस्तो छ?", ro: "namaste didi! sanchai chhu. tapaainlaai kasto chha?", en: "Hello, sister! I'm well. How are you?" },
      { who: "A", ne: "मलाई पनि ठिक छ। चिया खानुभयो?", ro: "malaai pani thik chha. chiyaa khaanubhayo?", en: "I'm fine too. Have you had tea?" },
      { who: "B", ne: "खाएँ, धन्यवाद।", ro: "khaaen, dhanyabaad.", en: "I have, thank you." },
      { who: "A", ne: "ल, फेरि भेटौँला।", ro: "la, pheri bhetaunlaa.", en: "OK, see you again." },
      { who: "B", ne: "हुन्छ, फेरि भेटौँला!", ro: "hunchha, pheri bhetaunlaa!", en: "Sure, see you again!" }
    ]
  },
  {
    id: "d14", unit: "num", title: "Buying fruit",
    scene: "A fruit seller's cart in Patan.",
    lines: [
      { who: "B", ne: "दिदी, स्याउ कति हो?", ro: "didi, syaau kati ho?", en: "Sister, how much are the apples?" },
      { who: "A", ne: "एक किलोको तीन सय।", ro: "ek kiloko tin saya.", en: "Three hundred a kilo." },
      { who: "B", ne: "अनि केरा?", ro: "ani keraa?", en: "And the bananas?" },
      { who: "A", ne: "एक दर्जनको एक सय बीस।", ro: "ek darjanko ek saya bis.", en: "One hundred and twenty a dozen." },
      { who: "B", ne: "एक किलो स्याउ र एक दर्जन केरा दिनुहोस्।", ro: "ek kilo syaau ra ek darjan keraa dinuhos.", en: "One kilo of apples and a dozen bananas, please." },
      { who: "A", ne: "जम्मा चार सय बीस रुपैयाँ भयो।", ro: "jammaa chaar saya bis rupaiyaan bhayo.", en: "That's four hundred and twenty rupees in all." },
      { who: "B", ne: "लिनुहोस्, पाँच सय।", ro: "linuhos, paanch saya.", en: "Here you are, five hundred." }
    ]
  },
  {
    id: "d15", unit: "fam", title: "A family photo",
    scene: "Your friend Maya shows you a photo on her phone.",
    lines: [
      { who: "B", ne: "यो तपाईंको परिवार हो?", ro: "yo tapaainko pariwaar ho?", en: "Is this your family?" },
      { who: "A", ne: "हो। उहाँ मेरो बुबा, उहाँ मेरी आमा।", ro: "ho. uhaan mero bubaa, uhaan meri aamaa.", en: "Yes. That's my father, and that's my mother." },
      { who: "B", ne: "अनि यो को हो?", ro: "ani yo ko ho?", en: "And who is this?" },
      { who: "A", ne: "यो मेरो भाइ हो। ऊ दस वर्षको भयो।", ro: "yo mero bhaai ho. u das barshako bhayo.", en: "This is my younger brother. He is ten years old." },
      { who: "B", ne: "तपाईंको दिदी हुनुहुन्छ?", ro: "tapaainko didi hunuhunchha?", en: "Do you have an older sister?" },
      { who: "A", ne: "हुनुहुन्छ, एक जना। उहाँ पोखरामा बस्नुहुन्छ।", ro: "hunuhunchha, ek janaa. uhaan pokharaamaa basnuhunchha.", en: "Yes, one. She lives in Pokhara." }
    ]
  },
  {
    id: "d16", unit: "verbs", title: "Where are you going?",
    scene: "You meet a neighbour at the gate.",
    lines: [
      { who: "A", ne: "कहाँ जाँदै हुनुहुन्छ?", ro: "kahaan jaandai hunuhunchha?", en: "Where are you going?" },
      { who: "B", ne: "म बजार जाँदैछु। तपाईं नि?", ro: "ma bajaar jaandaichhu. tapaain ni?", en: "I'm going to the market. And you?" },
      { who: "A", ne: "म घर जान्छु। आउनुहोस्, चिया खाऔँ।", ro: "ma ghar jaanchhu. aaunuhos, chiyaa khaaun.", en: "I'm going home. Come, let's have tea." },
      { who: "B", ne: "आज सक्दिनँ। भोलि आउँछु।", ro: "aaja sakdina. bholi aaunchhu.", en: "I can't today. I'll come tomorrow." },
      { who: "A", ne: "हुन्छ। भोलि पक्का आउनुहोस् है।", ro: "hunchha. bholi pakkaa aaunuhos hai.", en: "All right. Do come tomorrow, won't you?" },
      { who: "B", ne: "पक्का आउँछु।", ro: "pakkaa aaunchhu.", en: "I definitely will." }
    ]
  },
  {
    id: "d17", unit: "future", title: "Planning a trek",
    scene: "A friend asks about your holiday.",
    lines: [
      { who: "A", ne: "बिदामा के गर्ने विचार छ?", ro: "bidaamaa ke garne bichaar chha?", en: "What are you planning for the holiday?" },
      { who: "B", ne: "म ट्रेकिङ जाने विचारमा छु।", ro: "ma treking jaane bichaarmaa chhu.", en: "I'm thinking of going trekking." },
      { who: "A", ne: "कहाँ जानुहुन्छ?", ro: "kahaan jaanuhunchha?", en: "Where will you go?" },
      { who: "B", ne: "पुन हिल। पाँच दिन लाग्छ।", ro: "pun hil. paanch din laagchha.", en: "Poon Hill. It takes five days." },
      { who: "A", ne: "कहिले जाँदै हुनुहुन्छ?", ro: "kahile jaandai hunuhunchha?", en: "When are you going?" },
      { who: "B", ne: "अर्को हप्ता। तपाईं पनि आउनुहोस् न!", ro: "arko haptaa. tapaain pani aaunuhos na!", en: "Next week. You come too!" },
      { who: "A", ne: "मैले काम गर्नुपर्छ। अर्को पटक जाऔँला।", ro: "maile kaam garnuparchha. arko patak jaaunlaa.", en: "I have to work. Let's go another time." }
    ]
  },
  {
    id: "d18", unit: "weather", title: "Will it rain?",
    scene: "In Pokhara, deciding whether to walk up to Sarangkot.",
    lines: [
      { who: "B", ne: "आज मौसम कस्तो छ?", ro: "aaja mausam kasto chha?", en: "What's the weather like today?" },
      { who: "A", ne: "अहिले घाम लागेको छ, तर दिउँसो पानी पर्छ होला।", ro: "ahile ghaam laageko chha, tara diunso paani parchha holaa.", en: "It's sunny now, but it will probably rain in the afternoon." },
      { who: "B", ne: "हिमाल देखिन्छ?", ro: "himaal dekhinchha?", en: "Can you see the mountains?" },
      { who: "A", ne: "बिहान देखिन्थ्यो। अहिले बादल लागेको छ।", ro: "bihaan dekhinthyo. ahile baadal laageko chha.", en: "You could this morning. Now it's cloudy." },
      { who: "B", ne: "त्यसो भए भोलि बिहानै जाऔँ।", ro: "tyaso bhae bholi bihaanai jaaun.", en: "In that case let's go early tomorrow morning." },
      { who: "A", ne: "हुन्छ। छाता लिएर जानुहोस् है।", ro: "hunchha. chhaataa liera jaanuhos hai.", en: "OK. Take an umbrella, won't you?" }
    ]
  },
  {
    id: "d19", unit: "routine", title: "A normal day",
    scene: "A colleague asks about your routine.",
    lines: [
      { who: "A", ne: "तपाईं बिहान कति बजे उठ्नुहुन्छ?", ro: "tapaain bihaan kati baje uthnuhunchha?", en: "What time do you get up in the morning?" },
      { who: "B", ne: "म छ बजे उठ्छु।", ro: "ma chha baje uthchhu.", en: "I get up at six." },
      { who: "A", ne: "कति चाँडो! अनि के गर्नुहुन्छ?", ro: "kati chaando! ani ke garnuhunchha?", en: "So early! And then what do you do?" },
      { who: "B", ne: "चिया पिउँछु, अनि कहिलेकाहीँ दौडन्छु।", ro: "chiyaa piunchhu, ani kahilekaahin daudanchhu.", en: "I drink tea, and sometimes I go running." },
      { who: "A", ne: "काममा कति बजे जानुहुन्छ?", ro: "kaammaa kati baje jaanuhunchha?", en: "What time do you go to work?" },
      { who: "B", ne: "नौ बजे। बेलुका म खाना पकाउँछु।", ro: "nau baje. belukaa ma khaanaa pakaaunchhu.", en: "At nine. In the evening I cook." }
    ]
  },
  {
    id: "d20", unit: "describe", title: "Looking for someone",
    scene: "At a bus park, you are looking for your friend's brother.",
    lines: [
      { who: "B", ne: "माफ गर्नुहोस्, म रामको भाइलाई खोज्दैछु।", ro: "maaf garnuhos, ma raamko bhaailaai khojdaichhu.", en: "Excuse me, I'm looking for Ram's brother." },
      { who: "A", ne: "ऊ कस्तो देखिन्छ?", ro: "u kasto dekhinchha?", en: "What does he look like?" },
      { who: "B", ne: "ऊ अग्लो छ, अनि उसको कपाल छोटो छ।", ro: "u aglo chha, ani usko kapaal chhoto chha.", en: "He's tall, and his hair is short." },
      { who: "A", ne: "कस्तो लुगा लगाएको छ?", ro: "kasto lugaa lagaaeko chha?", en: "What is he wearing?" },
      { who: "B", ne: "निलो ज्याकेट र कालो टोपी।", ro: "nilo jyaaket ra kaalo topi.", en: "A blue jacket and a black cap." },
      { who: "A", ne: "ए, ऊ त्यहाँ चिया पसलमा छ।", ro: "e, u tyahaan chiyaa pasalmaa chha.", en: "Ah, he's over there at the tea shop." }
    ]
  },
  {
    id: "d21", unit: "phone", title: "Calling the office",
    scene: "You phone Ram at work; a colleague answers.",
    lines: [
      { who: "A", ne: "हेलो, को बोल्नुभएको?", ro: "helo, ko bolnubhaeko?", en: "Hello, who's speaking?" },
      { who: "B", ne: "नमस्ते, म पाउलो बोल्दैछु। राम हुनुहुन्छ?", ro: "namaste, ma paulo boldaichhu. raam hunuhunchha?", en: "Hello, this is Paulo. Is Ram there?" },
      { who: "A", ne: "उहाँ अहिले बैठकमा हुनुहुन्छ।", ro: "uhaan ahile baithakmaa hunuhunchha.", en: "He's in a meeting at the moment." },
      { who: "B", ne: "आवाज आएन। अलि ठूलो स्वरले बोल्नुहोस् न।", ro: "aawaaj aaena. ali thulo swarle bolnuhos na.", en: "I can't hear you. Please speak a bit louder." },
      { who: "A", ne: "राम अहिले बैठकमा हुनुहुन्छ!", ro: "raam ahile baithakmaa hunuhunchha!", en: "Ram is in a meeting right now!" },
      { who: "B", ne: "ए, ठिक छ। म पछि फोन गर्छु।", ro: "e, thik chha. ma pachhi phon garchhu.", en: "Ah, OK. I'll call later." }
    ]
  },
  {
    id: "d22", unit: "hobby", title: "Free time",
    scene: "Chatting with a trekking guide in the evening.",
    lines: [
      { who: "A", ne: "फुर्सदमा के गर्नुहुन्छ?", ro: "phursadmaa ke garnuhunchha?", en: "What do you do in your free time?" },
      { who: "B", ne: "मलाई फोटो खिच्न र किताब पढ्न मन पर्छ। तपाईंलाई नि?", ro: "malaai photo khichna ra kitaab padhna man parchha. tapaainlaai ni?", en: "I like taking photos and reading books. And you?" },
      { who: "A", ne: "मलाई गीत गाउन मन पर्छ। म मादल पनि बजाउँछु।", ro: "malaai git gaauna man parchha. ma maadal pani bajaaunchhu.", en: "I like singing. I also play the madal drum." },
      { who: "B", ne: "कति रमाइलो! मलाई नेपाली गीत मन पर्छ।", ro: "kati ramaailo! malaai nepaali git man parchha.", en: "What fun! I like Nepali songs." },
      { who: "A", ne: "त्यसो भए आज बेलुका सँगै गाऔँ न।", ro: "tyaso bhae aaja belukaa sangai gaaun na.", en: "Then let's sing together this evening." },
      { who: "B", ne: "मलाई गाउन आउँदैन, तर म सुन्छु!", ro: "malaai gaauna aaundaina, tara ma sunchhu!", en: "I can't sing, but I'll listen!" }
    ]
  },
  {
    id: "d23", unit: "culture", title: "Invited for Dashain",
    scene: "A colleague invites you home for the festival.",
    lines: [
      { who: "A", ne: "दसैँमा हाम्रो घर आउनुहोस् है।", ro: "dasainmaa haamro ghar aaunuhos hai.", en: "Do come to our house at Dashain." },
      { who: "B", ne: "धन्यवाद! म के ल्याऊँ?", ro: "dhanyabaad! ma ke lyaaun?", en: "Thank you! What shall I bring?" },
      { who: "A", ne: "केही ल्याउनु पर्दैन। टीका लगाउन आउनुहोस्।", ro: "kehi lyaaunu pardaina. tikaa lagaauna aaunuhos.", en: "You don't need to bring anything. Come to receive tika." },
      { who: "B", ne: "जुत्ता बाहिर खोल्नुपर्छ?", ro: "juttaa baahira kholnuparchha?", en: "Should I take my shoes off outside?" },
      { who: "A", ne: "हो, ढोकाबाहिर खोल्नुहोस्।", ro: "ho, dhokaabaahira kholnuhos.", en: "Yes, take them off outside the door." },
      { who: "B", ne: "हुन्छ। दसैँको शुभकामना!", ro: "hunchha. dasainko shubhakaamanaa!", en: "All right. Happy Dashain!" }
    ]
  },
  {
    id: "d24", unit: "compare", title: "Which jacket?",
    scene: "A trekking shop in Thamel.",
    lines: [
      { who: "B", ne: "यो ज्याकेट र त्यो ज्याकेटमा कुन राम्रो छ?", ro: "yo jyaaket ra tyo jyaaketmaa kun raamro chha?", en: "Between this jacket and that one, which is better?" },
      { who: "A", ne: "यो त्यो भन्दा बाक्लो छ, तर अलि महँगो छ।", ro: "yo tyo bhandaa baaklo chha, tara ali mahango chha.", en: "This one is thicker than that one, but a bit more expensive." },
      { who: "B", ne: "सबैभन्दा सस्तो कुन हो?", ro: "sabaibhandaa sasto kun ho?", en: "Which is the cheapest?" },
      { who: "A", ne: "त्यो निलो। तर यो कालो सबैभन्दा न्यानो छ।", ro: "tyo nilo. tara yo kaalo sabaibhandaa nyaano chha.", en: "That blue one. But this black one is the warmest." },
      { who: "B", ne: "अलि ठूलो नाप छ?", ro: "ali thulo naap chha?", en: "Do you have a slightly bigger size?" },
      { who: "A", ne: "छ, यो लगाएर हेर्नुहोस्।", ro: "chha, yo lagaaera hernuhos.", en: "Yes, try this one on." },
      { who: "B", ne: "ठिक भयो। म यो लिन्छु।", ro: "thik bhayo. ma yo linchhu.", en: "It fits. I'll take this one." }
    ]
  },
  {
    id: "d25", unit: "tell", title: "What happened on the road",
    scene: "You arrive late; your host asks why.",
    lines: [
      { who: "A", ne: "किन यति ढिलो हुनुभयो?", ro: "kina yati dhilo hunubhayo?", en: "Why are you so late?" },
      { who: "B", ne: "बाटोमा पहिरो गएको थियो, त्यसैले बस रोकियो।", ro: "baatomaa pahiro gaeko thiyo, tyasaile bas rokiyo.", en: "There had been a landslide on the road, so the bus stopped." },
      { who: "A", ne: "ओहो! कति बेर कुर्नुपर्‍यो?", ro: "oho! kati ber kurnuparyo?", en: "Oh no! How long did you have to wait?" },
      { who: "B", ne: "तीन घण्टा। त्यसपछि हामी हिँडेर अर्को बस चढ्यौँ।", ro: "tin ghantaa. tyaspachhi haami hindera arko bas chadhyaun.", en: "Three hours. After that we walked on and got on another bus." },
      { who: "A", ne: "भोक लाग्यो होला। खाना तयार छ।", ro: "bhok laagyo holaa. khaanaa tayaar chha.", en: "You must be hungry. Dinner is ready." },
      { who: "B", ne: "धन्यवाद। अन्त्यमा पुगेँ, त्यही ठूलो कुरा हो।", ro: "dhanyabaad. antyamaa pugen, tyahi thulo kuraa ho.", en: "Thank you. I got here in the end, that's the main thing." }
    ]
  },
  {
    id: "d26", unit: "work", title: "Talking about work",
    scene: "At a dinner, someone asks what you do.",
    lines: [
      { who: "A", ne: "तपाईं के काम गर्नुहुन्छ?", ro: "tapaain ke kaam garnuhunchha?", en: "What work do you do?" },
      { who: "B", ne: "म विश्वविद्यालयमा पढाउँछु, अनि अनुसन्धान पनि गर्छु।", ro: "ma bishwabidyaalayamaa padhaaunchhu, ani anusandhaan pani garchhu.", en: "I teach at a university, and I also do research." },
      { who: "A", ne: "के विषय पढाउनुहुन्छ?", ro: "ke bishaya padhaaunuhunchha?", en: "What subject do you teach?" },
      { who: "B", ne: "जीवविज्ञान। म नर्सिङका विद्यार्थीहरूलाई पढाउँछु।", ro: "jiwabigyaan. ma narsingkaa bidyaarthiharulaai padhaaunchhu.", en: "Biology. I teach nursing students." },
      { who: "A", ne: "यो काम कति वर्षदेखि गर्दै हुनुहुन्छ?", ro: "yo kaam kati barshadekhi gardai hunuhunchha?", en: "How many years have you been doing this job?" },
      { who: "B", ne: "पाँच वर्षदेखि। मलाई यो काम धेरै मन पर्छ।", ro: "paanch barshadekhi. malaai yo kaam dherai man parchha.", en: "For five years. I like this job very much." }
    ]
  },
  {
    id: "d27", unit: "health", title: "Vaccination day",
    scene: "You are at a health post with a friend's baby.",
    lines: [
      { who: "A", ne: "नमस्ते। आज बच्चालाई खोप लगाउने दिन हो।", ro: "namaste. aaja bachchaalaai khop lagaaune din ho.", en: "Hello. Today is the baby's vaccination day." },
      { who: "B", ne: "खोप लगाएपछि ज्वरो आउँछ?", ro: "khop lagaaepachhi jwaro aaunchha?", en: "Will there be a fever after the vaccine?" },
      { who: "A", ne: "कहिलेकाहीँ अलिकति आउँछ। त्यो सामान्य हो।", ro: "kahilekaahin alikati aaunchha. tyo saamaanya ho.", en: "Sometimes a little. That's normal." },
      { who: "B", ne: "ज्वरो धेरै आयो भने के गर्ने?", ro: "jwaro dherai aayo bhane ke garne?", en: "What should I do if the fever is high?" },
      { who: "A", ne: "यो औषधि दिनुहोस्। दुई दिनमा ठिक भएन भने फेरि आउनुहोस्।", ro: "yo aushadhi dinuhos. dui dinmaa thik bhaena bhane pheri aaunuhos.", en: "Give this medicine. If it isn't better in two days, come back." },
      { who: "B", ne: "हुन्छ, धन्यवाद सिस्टर।", ro: "hunchha, dhanyabaad sistar.", en: "All right, thank you, sister." }
    ]
  },
  {
    id: "d28", unit: "ifthen", title: "If it rains",
    scene: "Planning Saturday with a friend.",
    lines: [
      { who: "A", ne: "शनिबार पिकनिक जाने हो?", ro: "shanibaar piknik jaane ho?", en: "Are we going on the picnic on Saturday?" },
      { who: "B", ne: "पानी परेन भने जाऔँ।", ro: "paani parena bhane jaaun.", en: "If it doesn't rain, let's go." },
      { who: "A", ne: "पानी पर्‍यो भने नि?", ro: "paani paryo bhane ni?", en: "And if it rains?" },
      { who: "B", ne: "पानी पर्‍यो भने मेरो घरमा खाना पकाऔँ।", ro: "paani paryo bhane mero gharmaa khaanaa pakaaun.", en: "If it rains, let's cook at my place." },
      { who: "A", ne: "राम्रो कुरा। गाडी भएको भए सजिलो हुन्थ्यो।", ro: "raamro kuraa. gaadi bhaeko bhae sajilo hunthyo.", en: "Good idea. If we had a car it would be easier." },
      { who: "B", ne: "केही छैन, बसमा गए पनि हुन्छ।", ro: "kehi chhaina, basmaa gae pani hunchha.", en: "Never mind, going by bus is fine too." }
    ]
  },
  {
    id: "d29", unit: "emotion", title: "Missing home",
    scene: "A Nepali friend who works abroad is feeling low.",
    lines: [
      { who: "B", ne: "के भयो? तपाईं दुःखी देखिनुहुन्छ।", ro: "ke bhayo? tapaain dukhi dekhinuhunchha.", en: "What's wrong? You look sad." },
      { who: "A", ne: "मलाई घरको याद आयो। आज आमाको जन्मदिन हो।", ro: "malaai gharko yaad aayo. aaja aamaako janmadin ho.", en: "I miss home. Today is my mother's birthday." },
      { who: "B", ne: "ए... फोन गर्नुभयो?", ro: "e... phon garnubhayo?", en: "Oh... Did you call?" },
      { who: "A", ne: "गरेँ। आमा रुनुभयो, मलाई पनि रुन मन लाग्यो।", ro: "garen. aamaa runubhayo, malaai pani runa man laagyo.", en: "I did. Mum cried, and I felt like crying too." },
      { who: "B", ne: "चिन्ता नगर्नुहोस्। दसैँमा त घर जानुहुन्छ नि।", ro: "chintaa nagarnuhos. dasainmaa ta ghar jaanuhunchha ni.", en: "Don't worry. You're going home at Dashain, after all." },
      { who: "A", ne: "हो। तपाईंसँग कुरा गरेर मन हलुका भयो।", ro: "ho. tapaainsanga kuraa garera man halukaa bhayo.", en: "True. Talking to you has made me feel lighter." }
    ]
  },
  {
    id: "d30", unit: "news", title: "Today's news",
    scene: "At a tea shop, the radio is on.",
    lines: [
      { who: "A", ne: "आजको समाचार सुन्नुभयो?", ro: "aajako samaachaar sunnubhayo?", en: "Did you hear today's news?" },
      { who: "B", ne: "सुनिनँ। के भयो?", ro: "sunina. ke bhayo?", en: "I didn't. What happened?" },
      { who: "A", ne: "बाढीले तराईमा धेरै क्षति भएछ।", ro: "baadhile taraaimaa dherai kshati bhaechha.", en: "Apparently the floods have caused a lot of damage in the Terai." },
      { who: "B", ne: "ओहो। सरकारले के गर्दैछ?", ro: "oho. sarkaarle ke gardaichha?", en: "Oh no. What is the government doing?" },
      { who: "A", ne: "राहत पठाउँदैछ रे, तर सडक बन्द भएको छ।", ro: "raahat pathaaundaichha re, tara sadak banda bhaeko chha.", en: "They say it's sending relief, but the road is closed." },
      { who: "B", ne: "गाह्रो छ। चाँडै स्थिति सामान्य होस्।", ro: "gaahro chha. chaandai sthiti saamaanya hos.", en: "That's hard. I hope things get back to normal soon." }
    ]
  }
);
C.stories.push(
  {
    id: "s5", level: "A1", title: "Ram's tea shop",
    intro: "A very short portrait. Listen for the place and the price.",
    lines: [
      { ne: "रामको एउटा सानो चिया पसल छ।", ro: "raamko eutaa saano chiyaa pasal chha.", en: "Ram has a small tea shop." },
      { ne: "पसल ठमेलमा छ।", ro: "pasal thamelmaa chha.", en: "The shop is in Thamel." },
      { ne: "एक कप चियाको तीस रुपैयाँ हो।", ro: "ek kap chiyaako tis rupaiyaan ho.", en: "A cup of tea is thirty rupees." },
      { ne: "रामको चिया धेरै मीठो छ।", ro: "raamko chiyaa dherai mitho chha.", en: "Ram's tea is very tasty." },
      { ne: "बिहान धेरै मान्छे आउँछन्।", ro: "bihaan dherai maanchhe aaunchhan.", en: "In the morning many people come." },
      { ne: "राम सबैलाई नमस्ते भन्छ।", ro: "raam sabailaai namaste bhanchha.", en: "Ram says namaste to everyone." }
    ],
    questions: [
      { q: "Where is the shop?", a: "In Thamel", o: ["In Pokhara", "In Patan", "In Bhaktapur"] },
      { q: "How much is a cup of tea?", a: "Thirty rupees", o: ["Three hundred rupees", "Twenty rupees", "Fifty rupees"] },
      { q: "When do many people come?", a: "In the morning", o: ["In the evening", "At night", "In the afternoon"] }
    ]
  },
  {
    id: "s6", level: "A1", title: "Maya's family",
    intro: "Maya introduces her family. Listen for who does what.",
    lines: [
      { ne: "मेरो नाम माया हो।", ro: "mero naam maayaa ho.", en: "My name is Maya." },
      { ne: "मेरो घर पोखरामा छ।", ro: "mero ghar pokharaamaa chha.", en: "My home is in Pokhara." },
      { ne: "मेरो परिवारमा पाँच जना छन्।", ro: "mero pariwaarmaa paanch janaa chhan.", en: "There are five people in my family." },
      { ne: "मेरो बुबा शिक्षक हुनुहुन्छ।", ro: "mero bubaa shikshak hunuhunchha.", en: "My father is a teacher." },
      { ne: "मेरी आमा पसलमा काम गर्नुहुन्छ।", ro: "meri aamaa pasalmaa kaam garnuhunchha.", en: "My mother works in a shop." },
      { ne: "मेरो एक जना दाइ र एक जना बहिनी छन्।", ro: "mero ek janaa daai ra ek janaa bahini chhan.", en: "I have one older brother and one younger sister." },
      { ne: "मलाई मेरो परिवार धेरै मन पर्छ।", ro: "malaai mero pariwaar dherai man parchha.", en: "I love my family very much." }
    ],
    questions: [
      { q: "Where is Maya's home?", a: "In Pokhara", o: ["In Kathmandu", "In Thamel", "In Ilam"] },
      { q: "How many people are in her family?", a: "Five", o: ["Three", "Four", "Six"] },
      { q: "What is her father's job?", a: "Teacher", o: ["Doctor", "Driver", "Shopkeeper"] }
    ]
  },
  {
    id: "s7", level: "A2", title: "The lost bag",
    intro: "Someone tells you what happened on a bus trip yesterday.",
    lines: [
      { ne: "हिजो म बसमा भक्तपुर गएँ।", ro: "hijo ma basmaa bhaktapur gaen.", en: "Yesterday I went to Bhaktapur by bus." },
      { ne: "बसमा धेरै भीड थियो।", ro: "basmaa dherai bhid thiyo.", en: "The bus was very crowded." },
      { ne: "भक्तपुर पुगेपछि मैले मेरो झोला खोजेँ।", ro: "bhaktapur pugepachhi maile mero jholaa khojen.", en: "After reaching Bhaktapur I looked for my bag." },
      { ne: "तर झोला थिएन!", ro: "tara jholaa thiena!", en: "But the bag wasn't there!" },
      { ne: "म फेरि बस बिसौनीमा गएँ।", ro: "ma pheri bas bisaunimaa gaen.", en: "I went back to the bus stop." },
      { ne: "एक जना दाइले मेरो झोला राख्नुभएको रहेछ।", ro: "ek janaa daaile mero jholaa raakhnubhaeko rahechha.", en: "It turned out a man had kept my bag for me." },
      { ne: "मैले उहाँलाई धेरै धन्यवाद भनेँ।", ro: "maile uhaanlaai dherai dhanyabaad bhanen.", en: "I thanked him very much." }
    ],
    questions: [
      { q: "Where did the speaker go?", a: "To Bhaktapur", o: ["To Pokhara", "To Patan", "To the airport"] },
      { q: "What was lost?", a: "A bag", o: ["A phone", "A ticket", "An umbrella"] },
      { q: "Who had kept it?", a: "A man at the bus stop", o: ["The police", "A friend", "Nobody"] }
    ]
  },
  {
    id: "s8", level: "B1", title: "The new road",
    intro: "A villager explains how a road changed village life.",
    lines: [
      { ne: "हाम्रो गाउँमा दुई वर्षअघि सडक आयो।", ro: "haamro gaaunmaa dui barshaaghi sadak aayo.", en: "A road reached our village two years ago." },
      { ne: "पहिले बजार पुग्न चार घण्टा हिँड्नुपर्थ्यो।", ro: "pahile bajaar pugna chaar ghantaa hindnuparthyo.", en: "Before, we had to walk four hours to reach the market." },
      { ne: "अहिले जिपमा एक घण्टामै पुगिन्छ।", ro: "ahile jipmaa ek ghantaamai puginchha.", en: "Now you get there in just an hour by jeep." },
      { ne: "किसानहरूले तरकारी बेचेर राम्रो पैसा कमाउन थालेका छन्।", ro: "kisaanharule tarkaari bechera raamro paisaa kamaauna thaalekaa chhan.", en: "Farmers have started to earn good money selling vegetables." },
      { ne: "तर सडकसँगै धुलो र फोहोर पनि आएको छ।", ro: "tara sadaksangai dhulo ra phohor pani aaeko chha.", en: "But along with the road, dust and rubbish have come too." },
      { ne: "बूढापाकाहरू पुरानो शान्त गाउँ सम्झन्छन्।", ro: "budhaapaakaaharu puraano shaanta gaaun samjhanchhan.", en: "The elders remember the old, quiet village." },
      { ne: "युवाहरू भने सडक नभएको भए गाउँ छोड्थ्यौँ भन्छन्।", ro: "yuwaaharu bhane sadak nabhaeko bhae gaaun chhodthyaun bhanchhan.", en: "The young, though, say that without the road they would have left the village." }
    ],
    questions: [
      { q: "When did the road arrive?", a: "Two years ago", o: ["Last month", "Ten years ago", "It hasn't yet"] },
      { q: "How long does it take to reach the market now?", a: "An hour by jeep", o: ["Four hours on foot", "Ten minutes", "A whole day"] },
      { q: "What do the young people say?", a: "Without the road they would have left", o: ["They miss the quiet village", "The road is too dusty", "They want to sell vegetables"] }
    ]
  },
  {
    id: "s9", level: "B1", title: "A brother in Qatar",
    intro: "A family with a son working abroad.",
    lines: [
      { ne: "मेरो दाइ तीन वर्षदेखि कतारमा काम गर्नुहुन्छ।", ro: "mero daai tin barshadekhi kataarmaa kaam garnuhunchha.", en: "My older brother has been working in Qatar for three years." },
      { ne: "उहाँ हरेक महिना घरमा पैसा पठाउनुहुन्छ।", ro: "uhaan harek mahinaa gharmaa paisaa pathaaunuhunchha.", en: "He sends money home every month." },
      { ne: "त्यही पैसाले हामीले नयाँ घर बनायौँ।", ro: "tyahi paisaale haamile nayaan ghar banaayaun.", en: "With that money we built a new house." },
      { ne: "तर आमा भन्नुहुन्छ, घरभन्दा छोरा ठूलो हो।", ro: "tara aamaa bhannuhunchha, gharbhandaa chhoraa thulo ho.", en: "But Mum says a son matters more than a house." },
      { ne: "दाइ पनि गर्मी धेरै छ, काम गाह्रो छ भन्नुहुन्छ।", ro: "daai pani garmi dherai chha, kaam gaahro chha bhannuhunchha.", en: "My brother, too, says it's very hot and the work is hard." },
      { ne: "अर्को वर्ष उहाँ फर्केर यहीँ पसल खोल्ने विचारमा हुनुहुन्छ।", ro: "arko barsha uhaan pharkera yahin pasal kholne bichaarmaa hunuhunchha.", en: "Next year he's thinking of coming back and opening a shop right here." },
      { ne: "हामी सबै त्यो दिन कुरिरहेका छौँ।", ro: "haami sabai tyo din kurirahekaa chhaun.", en: "We are all waiting for that day." }
    ],
    questions: [
      { q: "Where does the brother work?", a: "In Qatar", o: ["In Malaysia", "In Korea", "In India"] },
      { q: "What did the family do with the money?", a: "Built a new house", o: ["Bought a car", "Opened a shop", "Paid for a wedding"] },
      { q: "What is his plan for next year?", a: "Come back and open a shop", o: ["Move the family abroad", "Build another house", "Change jobs in Qatar"] }
    ]
  }
);
})();
