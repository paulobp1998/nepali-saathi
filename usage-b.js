// Which word, when? (see usage-a.js for the format). This file: A2.
(function () {
const C = window.COURSE;
C.usage = (C.usage || []).concat([

{ id: "w-i", level: "A2", unit: "past", title: "“I” and “me”: ma, maile or malaai?", sub: "ma (plain subject), maile (doer of a past action with an object), malaai (to me: feelings, needs, must)",
  words: ["maile", "malaai"],
  blocks: [
    { p: "English changes “I” only to “me”. Nepali has three forms, and the choice depends on the verb and the tense, not on where the word stands in the sentence." },
    { table: { head: ["Form", "Use it when", "Example"], rows: [
      ["<b>ma</b>", "plain subject: present and future, and the past of verbs with no object (go, come, sleep)", "<b>ma</b> jaanchhu · <b>ma</b> bajaar gaen"],
      ["<b>maile</b>", "you did something <i>to something</i> in the past: eat, see, buy, do (full rule in the chapter on -le)", "<b>maile</b> khaanaa khaaen"],
      ["<b>malaai</b>", "something happens to you: likes, needs, feelings, hunger, “have to”; also “me” as the object", "<b>malaai</b> bhok laagyo · <b>malaai</b> jaanuparchha"]
    ] } },
    { rule: "Is it happening <i>to</i> me? → <b>malaai</b>. Am I doing it, in the past, to something (could you add “something” after the verb)? → <b>maile</b>. Otherwise → <b>ma</b>." },
    { ex: [
      { ne: "म हिजो बजार गएँ।", ro: "ma hijo bajaar gaen.", en: "I went to the market yesterday.", note: "jaanu has no object: plain ma." },
      { ne: "मैले साथीलाई भेटेँ।", ro: "maile saathilaai bheten.", en: "I met a friend.", note: "You met someone: maile." },
      { ne: "मलाई भोक लाग्यो।", ro: "malaai bhok laagyo.", en: "I'm hungry.", note: "Hunger happens to you: malaai, past or not." },
      { ne: "अब मलाई जानुपर्छ।", ro: "aba malaai jaanuparchha.", en: "I have to go now." }
    ] },
    { warn: "<b>ma bhaat khaaen</b> (for “I ate rice”) is a mistake Nepalis notice, and <b>ma bhok laagyo</b> does not work at all: hunger is not something you do. Polite “you” follows the same pattern: <b>tapaain</b> kahile aaunubhayo? · <b>tapaainle</b> ke bhannubhayo? · <b>tapaainlaai</b> kasto chha?" }
  ],
  quiz: [
    { q: "“I went home.”", a: "ma ghar gaen", o: ["maile ghar gaen", "malaai ghar gaen"], why: "<b>jaanu</b> has no object (home is where, not what) → plain <b>ma</b>." },
    { q: "“I bought a SIM card yesterday.”", a: "maile hijo sim kaard kinen", o: ["ma hijo sim kaard kinen", "malaai hijo sim kaard kinen"], why: "Past, and you bought <i>something</i> → <b>maile</b>." },
    { q: "“I'm thirsty.”", a: "malaai tirkhaa laagyo", o: ["ma tirkhaa laagyo", "maile tirkhaa laagyo"], why: "Thirst happens to you → <b>malaai</b>. Nobody “does” thirst." },
    { q: "“He phoned me.”", a: "usle malaai phon garyo", o: ["usle maile phon garyo", "usle ma phon garyo"], why: "“Me” as the person on the receiving end → <b>malaai</b>. He is the doer, so he takes -le: <b>usle</b>." }
  ] },

{ id: "w-lastnext", level: "A2", unit: "past", title: "“Last” and “next”: gaeko, aaune, arko", sub: "gaeko (last: gone), aaune (next: coming), arko (the next one, another), hijo / bholi (single days)",
  words: ["gaeko haptaa", "gaeko mahinaa", "gaeko barsha", "aaune haptaa", "asti", "parsi"],
  blocks: [
    { p: "English has one word for “last” and one for “next”. Nepali has no such pair: it says whether the time has <i>gone</i> or is <i>coming</i>, and the nearest days have their own words." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>gaeko</b>", "last: the week, month or year that has gone (literally “gone”)", "<b>gaeko</b> haptaa · <b>gaeko</b> barsha"],
      ["<b>aaune</b>", "next: the one that is coming", "<b>aaune</b> haptaa · <b>aaune</b> mahinaa"],
      ["<b>arko</b>", "the next one along, another one; also “next time”", "<b>arko</b> haptaa · <b>arko</b> patak"],
      ["<b>asti, hijo</b> / <b>bholi, parsi</b>", "single days: no “last” or “next” needed", "<b>hijo</b> raati (last night) · <b>parsi</b> (the day after tomorrow)"]
    ] } },
    { rule: "Has it gone? → <b>gaeko</b>. Is it coming? → <b>aaune</b> or <b>arko</b>. For days, use the day words: <b>asti, hijo, aaja, bholi, parsi</b>." },
    { ex: [
      { ne: "म गएको हप्ता आइपुगेँ।", ro: "ma gaeko haptaa aaipugen.", en: "I arrived last week." },
      { ne: "आउने हप्ता म पोखरा जाँदै छु।", ro: "aaune haptaa ma pokharaa jaandai chhu.", en: "Next week I'm going to Pokhara.", note: "arko haptaa means the same here." },
      { ne: "हिजो राति धेरै पानी पर्‍यो।", ro: "hijo raati dherai paani paryo.", en: "It rained a lot last night.", note: "“Last night” is simply “yesterday night”." },
      { ne: "अर्को पटक म फेरि आउँछु।", ro: "arko patak ma pheri aaunchhu.", en: "Next time I'll come again." }
    ] },
    { warn: "Don't look for one fixed word. <b>antim</b> is “last” only in the sense of “final”: <b>antim bas</b> is the last bus of the day, and <b>antim haptaa</b> the final week of something, not last week. “Last time” is <b>gaeko patak</b>, “next time” <b>arko patak</b>." }
  ],
  quiz: [
    { q: "“Last month I went to Pokhara.”", a: "gaeko mahinaa ma pokharaa gaen", o: ["aaune mahinaa ma pokharaa gaen", "antim mahinaa ma pokharaa gaen"], why: "The month has gone → <b>gaeko</b>. <b>antim</b> means final, not previous." },
    { q: "“Next year I'll come again.”", a: "aaune barsha ma pheri aaunchhu", o: ["gaeko barsha ma pheri aaunchhu", "antim barsha ma pheri aaunchhu"], why: "The year is coming → <b>aaune</b> (or <b>arko barsha</b>)." },
    { q: "Today is Wednesday. Your friend arrived on Monday. She arrived:", a: "asti", o: ["hijo", "parsi"], why: "The day before yesterday → <b>asti</b>. <b>parsi</b> is the day after tomorrow." },
    { q: "“I'll do it next time.”", a: "arko patak garchhu", o: ["gaeko patak garchhu", "antim patak garchhu"], why: "Next time → <b>arko patak</b>. <b>antim patak</b> would be the very last time." }
  ] },

{ id: "w-before", level: "A2", unit: "future", title: "Before, after, in front, behind: pahile, aghi, pachhi, agaadi, pachhaadi", sub: "pahile (first, earlier), aghi (ago), pachhi (after, later), agaadi (in front), pachhaadi (behind)",
  words: ["pahile", "aghi", "pachhi", "agaadi", "pachhaadi"],
  blocks: [
    { p: "English uses “before” and “after” for both time and place (before the meal, before the gate). Nepali mostly keeps time words and place words apart." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>pahile</b>", "time: first, before anything else; earlier, in the past", "<b>pahile</b> khaanaa khaaun, ani jaaun"],
      ["<b>aghi</b>", "time: ago, counted back from now; earlier today", "dui din <b>aghi</b> · <b>aghi</b> bhannubhayo (you said earlier)"],
      ["<b>pachhi</b>", "time: after, later; in (so much time)", "dui din <b>pachhi</b> · ma <b>pachhi</b> phon garchhu"],
      ["<b>agaadi</b>", "place: in front of, ahead", "hotalko <b>agaadi</b>"],
      ["<b>pachhaadi</b>", "place: behind, at the back", "gharko <b>pachhaadi</b>"]
    ] } },
    { rule: "Ask: <i>when</i> or <i>where</i>? When → <b>pahile / aghi</b> (before) and <b>pachhi</b> (after). Where → <b>agaadi</b> (in front) and <b>pachhaadi</b> (behind)." },
    { ex: [
      { ne: "म दुई दिन पछि पोखरा जान्छु।", ro: "ma dui din pachhi pokharaa jaanchhu.", en: "I'm going to Pokhara in two days." },
      { ne: "उहाँ एक घण्टा अघि आउनुभयो।", ro: "uhaan ek ghantaa aghi aaunubhayo.", en: "He came an hour ago." },
      { ne: "होटलको अगाडि भेटौँ।", ro: "hotalko agaadi bhetaun.", en: "Let's meet in front of the hotel." },
      { ne: "पहिले खाना खाऔँ, अनि जाऔँ।", ro: "pahile khaanaa khaaun, ani jaaun.", en: "Let's eat first, then go." }
    ] },
    { warn: "<b>hotalko pachhi</b> for “behind the hotel” sounds like “after the hotel”, in time: behind is <b>hotalko pachhaadi</b>, and for “later” use <b>pachhi</b>, never <b>pachhaadi</b>. In speech you will also hear <b>dui din pahile</b> or <b>dui din agaadi</b> for “two days ago”. Before or after an <i>action</i> (<b>jaanubhandaa agaadi</b>, <b>khaaepachhi</b>) comes later, in the chapter on when, before and after." }
  ],
  quiz: [
    { q: "“Let's meet in front of the temple.”", a: "mandirko agaadi bhetaun", o: ["mandirko pachhi bhetaun", "mandirko pachhaadi bhetaun"], why: "A place, in front → <b>agaadi</b>. <b>pachhi</b> is time; <b>pachhaadi</b> is behind." },
    { q: "“I'll call you in two days.”", a: "dui din pachhi phon garchhu", o: ["dui din pachhaadi phon garchhu", "dui din aghi phon garchhu"], why: "Later in time → <b>pachhi</b>. <b>aghi</b> counts back (ago); <b>pachhaadi</b> is a place." },
    { q: "“I came to Nepal three months ago.”", a: "ma tin mahinaa aghi nepaal aaen", o: ["ma tin mahinaa pachhi nepaal aaen", "ma tin mahinaa pachhaadi nepaal aaen"], why: "Counted back from now → <b>aghi</b> (<b>pahile</b> also works)." },
    { q: "“The toilet is behind the house.”", a: "charpi gharko pachhaadi chha", o: ["charpi gharko pachhi chha", "charpi gharko agaadi chha"], why: "A place, behind → <b>pachhaadi</b>. <b>pachhi</b> would put it “after the house” in time." }
  ] },

{ id: "w-soon", level: "A2", unit: "future", title: "Soon, fast, early, late: chaandai, chhito, saberai, dhilo", sub: "chaandai (soon), chhito (fast; hurry), turuntai (right away), saberai (early), dhilo (late; slow)",
  words: ["chaandai", "chhito", "turuntai", "saberai", "dhilo"],
  blocks: [
    { p: "English “soon”, “quick” and “early” overlap, and learners tend to put <b>chhito</b> everywhere. Nepali separates <i>speed</i>, <i>how soon</i> and <i>time of day</i>." },
    { table: { head: ["Word", "Means", "Example"], rows: [
      ["<b>chaandai</b>", "soon: before long", "<b>chaandai</b> bhetaunlaa (see you soon)"],
      ["<b>chhito</b>", "fast, quickly; hurry", "<b>chhito</b> garnus (please hurry)"],
      ["<b>turuntai</b>", "immediately, at once", "ma <b>turuntai</b> aaunchhu"],
      ["<b>saberai</b>", "early, especially early in the morning", "bholi <b>saberai</b> jaaun"],
      ["<b>dhilo</b>", "late; slow (a bus, a clock, the internet)", "<b>dhilo</b> bhayo (it's late / I'm late)"]
    ] } },
    { rule: "Speed → <b>chhito</b>. How soon it will happen → <b>chaandai</b> (or <b>turuntai</b>, at once). Early or late on the clock → <b>saberai</b> or <b>dhilo</b>." },
    { ex: [
      { ne: "चाँडै भेटौँला।", ro: "chaandai bhetaunlaa.", en: "See you soon." },
      { ne: "छिटो गर्नुहोस्, बस छुट्छ।", ro: "chhito garnuhos, bas chhutchha.", en: "Please hurry, or we'll miss the bus." },
      { ne: "भोलि बिहान सबेरै जाऔँ।", ro: "bholi bihaan saberai jaaun.", en: "Let's leave early tomorrow morning." },
      { ne: "माफ गर्नुहोस्, ढिलो भयो।", ro: "maaf garnuhos, dhilo bhayo.", en: "Sorry I'm late." }
    ] },
    { warn: "<b>chhito</b> leans towards speed and <b>chaandai</b> towards “before long”, but the two overlap in speech: you will hear <b>chhito aaunus</b> (come quickly, come early) and <b>chaando garnus</b> (hurry up). When you mean “soon”, <b>chaandai</b> is the safe choice (or <b>chhittai</b>, as in <b>chhittai niko hos</b>, get well soon). And <b>dhilo</b> is late, behind time: for doing something slowly say <b>bistaarai</b>, as in <b>bistaarai bolnuhos na</b>." }
  ],
  quiz: [
    { q: "Taking leave of a friend: “See you soon.”", a: "chaandai bhetaunlaa", o: ["dhilo bhetaunlaa", "saberai bhetaunlaa"], why: "Before long → <b>chaandai</b>. <b>saberai</b> is early in the day, not soon." },
    { q: "“Please speak slowly.”", a: "bistaarai bolnus", o: ["dhilo bolnus", "chhito bolnus"], why: "Slowly, of an action → <b>bistaarai</b>. <b>dhilo bolnus</b> would be “speak late”." },
    { q: "Your friend is dawdling and the bus is leaving: “Hurry up.”", a: "chhito garnus", o: ["dhilo garnus", "saberai garnus"], why: "Speed → <b>chhito</b>. <b>saberai</b> is early in the day, and <b>dhilo</b> is the opposite of what you want." },
    { q: "“Tomorrow we leave early in the morning.”", a: "bholi bihaan saberai jaanchhaun", o: ["bholi bihaan chaandai jaanchhaun", "bholi bihaan dhilo jaanchhaun"], why: "Early on the clock → <b>saberai</b>. <b>dhilo</b> is the opposite." }
  ] },

{ id: "w-hotcold", level: "A2", unit: "weather", title: "Hot and cold: taato or garmi, chiso or jaado?", sub: "taato / chiso (to the touch: tea, water, food), garmi / jaado (the weather, and how you feel)",
  words: ["taato", "chiso", "garmi", "jaado"],
  blocks: [
    { p: "English “hot” and “cold” cover tea, weather and how you feel. Nepali has one pair for things you touch and another for the air around you." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>taato</b>", "hot to the touch: tea, water, food", "<b>taato</b> paani · <b>taato</b> chiyaa"],
      ["<b>chiso</b>", "cold to the touch: drinks, food gone cold; also a cold wind", "<b>chiso</b> paani · <b>chiso</b> haawaa"],
      ["<b>garmi</b>", "hot weather, and feeling hot", "aaja <b>garmi</b> chha · malaai <b>garmi</b> bhayo"],
      ["<b>jaado</b>", "cold weather, and feeling cold", "aaja <b>jaado</b> chha · malaai <b>jaado</b> laagyo"],
      ["<b>ghaam</b>", "sunshine, the warmth of the sun", "<b>ghaam</b> laageko chha"]
    ] } },
    { rule: "Can you touch it? → <b>taato / chiso</b>. Is it the day, the air, or you? → <b>garmi / jaado</b>." },
    { ex: [
      { ne: "आज धेरै गर्मी छ।", ro: "aaja dherai garmi chha.", en: "It's very hot today." },
      { ne: "मलाई जाडो लाग्यो।", ro: "malaai jaado laagyo.", en: "I'm cold." },
      { ne: "एक गिलास चिसो पानी दिनुहोस्।", ro: "ek gilaas chiso paani dinuhos.", en: "A glass of cold water, please." },
      { ne: "चिया तातो छ, बिस्तारै पिउनुहोस्।", ro: "chiyaa taato chha, bistaarai piunuhos.", en: "The tea is hot; drink it slowly." }
    ] },
    { warn: "<b>aaja taato chha</b> is not how Nepalis talk about the weather: <b>taato</b> is for things you touch, so say <b>aaja garmi chha</b>. The cold side is looser: <b>aaja chiso chha</b> is common for a chilly day. Feeling cold is not something you are, either: not <b>ma jaado chhu</b> but <b>malaai jaado laagyo</b>. <b>garmi</b> and <b>jaado</b> are also the hot and cold seasons: <b>jaadomaa</b> (in winter)." }
  ],
  quiz: [
    { q: "“It's hot today.” (the weather)", a: "aaja garmi chha", o: ["aaja taato chha", "aaja taato laagyo"], why: "Weather → <b>garmi</b>. <b>taato</b> is for tea, water, food." },
    { q: "At a tea shop: “Cold water, please.”", a: "chiso paani dinuhos", o: ["jaado paani dinuhos", "garmi paani dinuhos"], why: "Something you touch or drink → <b>chiso</b>." },
    { q: "You come in from the snow, shivering. “I'm cold.”", a: "malaai jaado laagyo", o: ["ma jaado chhu", "ma chiso chhu"], why: "Feeling cold happens to you → <b>malaai jaado laagyo</b>." },
    { q: "Your host hands you a cup and warns you: “It's hot.”", a: "taato chha", o: ["garmi chha", "garmi bhayo"], why: "The cup and the tea are hot to the touch → <b>taato</b>." }
  ] },

{ id: "w-weather", level: "A2", unit: "weather", title: "Weather verbs: no “it rains” in Nepali", sub: "paani parchha (rain falls), ghaam laagchha (the sun shines), baadal laagchha (clouds come), haawaa chalchha (wind blows)",
  words: ["paani par-", "hiun par-", "ghaam laag-", "baadal laag-", "haawaa chal-"],
  blocks: [
    { p: "English weather needs an empty “it”: it rains, it's sunny. Nepali has no such “it”: it names the rain, the sun or the wind and gives each its own verb." },
    { table: { head: ["English", "Nepali", "Example"], rows: [
      ["it rains", "<b>paani parchha</b> (water falls)", "barkhaamaa dherai paani <b>parchha</b>"],
      ["it snows", "<b>hiun parchha</b> (snow falls)", "himaalmaa hiun <b>parchha</b>"],
      ["the sun shines", "<b>ghaam laagchha</b> (the sun strikes)", "aaja ghaam <b>laageko chha</b>"],
      ["it's cloudy", "<b>baadal laagchha</b> (clouds come over)", "baadal <b>laageko chha</b>"],
      ["the wind blows", "<b>haawaa chalchha</b> (the wind moves)", "haawaa <b>chaleko chha</b>"]
    ] } },
    { rule: "Name the thing and give it its verb: rain and snow <b>fall</b> (<b>parnu</b>), sun and cloud <b>strike</b> (<b>laagnu</b>), wind <b>moves</b> (<b>chalnu</b>). No “it”." },
    { list: [
      "In general: barkhaamaa paani <b>parchha</b> (it rains in the monsoon).",
      "It happened: hijo paani <b>paryo</b> (it rained yesterday).",
      "Right now: paani <b>pardai chha</b> (it's raining); for sun, cloud and wind, the state: ghaam <b>laageko chha</b>, haawaa <b>chaleko chha</b>."
    ] },
    { ex: [
      { ne: "पानी पर्दै छ, छाता लिएर जानुहोस्।", ro: "paani pardai chha, chhaataa liera jaanuhos.", en: "It's raining; take an umbrella." },
      { ne: "हिजो राति हिउँ पर्‍यो।", ro: "hijo raati hiun paryo.", en: "It snowed last night." },
      { ne: "आज बादल लागेको छ, हिमाल देखिँदैन।", ro: "aaja baadal laageko chha, himaal dekhindaina.", en: "It's cloudy today; you can't see the mountains." },
      { ne: "बेलुकातिर जाडो बढ्छ।", ro: "belukaatira jaado badhchha.", en: "It gets colder towards evening." }
    ] },
    { warn: "<b>aaja paani chha</b> means “there is water today” (the tap is running), not rain: rain needs its verb, <b>paani parchha</b>. Cold and heat just are or grow: <b>jaado chha</b> (it's cold), <b>jaadomaa jaado hunchha</b> (it's cold in winter), <b>jaado badhyo</b> (it's got colder)." }
  ],
  quiz: [
    { q: "Looking out of the window: “It's raining.”", a: "paani pardai chha", o: ["paani chha", "paani hunchha"], why: "Rain <i>falls</i>, right now → <b>pardai chha</b>. <b>paani chha</b> is “there is water”." },
    { q: "“It snowed yesterday.”", a: "hijo hiun paryo", o: ["hijo hiun bhayo", "hijo hiun chalyo"], why: "Snow falls → <b>paryo</b>. <b>chalnu</b> is for wind." },
    { q: "“It's windy today.”", a: "aaja haawaa chaleko chha", o: ["aaja haawaa pareko chha", "aaja haawaa bhaeko chha"], why: "Wind moves → <b>chalnu</b>, as a state right now: <b>chaleko chha</b>." },
    { q: "“It's sunny.”", a: "ghaam laageko chha", o: ["ghaam pareko chha", "ghaam chaleko chha"], why: "The sun strikes → <b>laagnu</b>: <b>ghaam laageko chha</b>." }
  ] },

{ id: "w-again", level: "A2", unit: "routine", title: "Again, still, more: pheri, ajhai, aru", sub: "pheri (again), ajhai (still; more of the same), aru (other, else), arko (another one)",
  words: ["pheri", "ajhai", "aru"],
  blocks: [
    { p: "“Again”, “still” and “more” are separate words in English, but learners grab whichever Nepali word they met first. Each has one clear job." },
    { table: { head: ["Word", "Means", "Example"], rows: [
      ["<b>pheri</b>", "again, once more: the action is repeated", "<b>pheri</b> bhannuhos ta"],
      ["<b>ajhai</b>", "still; more of the same; even (more)", "malaai <b>ajhai</b> yaad chha · <b>ajhai</b> alikati · <b>ajhai</b> raamro"],
      ["<b>aru</b>", "other, else, more besides", "<b>aru</b> kehi? (anything else?) · <b>aru</b> maanchhe (other people)"],
      ["<b>arko</b>", "another one, a different one", "<b>arko</b> rang chha?"],
      ["<b>ajhai</b> + negative", "not yet", "bas <b>ajhai</b> aaeko chhaina"]
    ] } },
    { rule: "The action happens once more → <b>pheri</b>. The same thing goes on, or you want more of it → <b>ajhai</b>. Something different or extra → <b>aru</b> (or <b>arko</b> for one other)." },
    { ex: [
      { ne: "म अझै नेपालमा छु।", ro: "ma ajhai nepaalmaa chhu.", en: "I'm still in Nepal." },
      { ne: "अझै अलिकति दिनुहोस्।", ro: "ajhai alikati dinuhos.", en: "A little more, please." },
      { ne: "बस अझै आएको छैन।", ro: "bas ajhai aaeko chhaina.", en: "The bus hasn't come yet." },
      { ne: "म अर्को वर्ष फेरि आउँछु।", ro: "ma arko barsha pheri aaunchhu.", en: "I'll come again next year." }
    ] },
    { warn: "<b>ma pheri nepaalmaa chhu</b> means “I'm back in Nepal”, not “I'm still in Nepal” (<b>ajhai</b>). For “more tea” say <b>ajhai chiyaa</b> or <b>aru chiyaa</b>: <b>dherai chiyaa</b> is “a lot of tea”. You will also read <b>thap</b> (additional): it belongs to formal Nepali; in speech say <b>aru</b>." }
  ],
  quiz: [
    { q: "“Please say it again.”", a: "pheri bhannuhos ta", o: ["ajhai bhannuhos ta", "aru bhannuhos ta"], why: "The same action once more → <b>pheri</b>. <b>aru bhannuhos</b> asks for something else." },
    { q: "“I still remember.”", a: "malaai ajhai yaad chha", o: ["malaai pheri yaad chha", "malaai aru yaad chha"], why: "The same state goes on → <b>ajhai</b>." },
    { q: "“The bus hasn't come yet.”", a: "bas ajhai aaeko chhaina", o: ["bas pheri aaeko chhaina", "bas aru aaeko chhaina"], why: "Not yet → <b>ajhai</b> + negative." },
    { q: "Your host wants to give you more rice. She asks:", a: "ajhai bhaat diun?", o: ["dherai bhaat diun?", "arko bhaat diun?"], why: "More of the same → <b>ajhai</b>. <b>dherai</b> is “a lot”; <b>arko</b> would be a different rice." }
  ] },

{ id: "w-always", level: "A2", unit: "routine", title: "Always, usually, sometimes, never", sub: "sadhain (always), dheraijaso (usually), kahilekaahin (sometimes), kahilyai + negative verb (never)",
  words: ["sadhain", "dheraijaso", "kahilekaahin", "kahilyai"],
  blocks: [
    { p: "English “never” carries the negative by itself. In Nepali the negative goes on the verb, and the word for “never” really means “ever”." },
    { table: { head: ["Word", "Means", "Example"], rows: [
      ["<b>sadhain</b>", "always", "ma <b>sadhain</b> chiyaa piunchhu"],
      ["<b>dheraijaso</b>", "mostly, usually", "ma <b>dheraijaso</b> gharmai khaanchhu"],
      ["<b>kahilekaahin</b>", "sometimes", "ma <b>kahilekaahin</b> daudanchhu"],
      ["<b>kahilyai</b> + negative verb", "never", "ma <b>kahilyai</b> dhilo uthdina"],
      ["<b>harek din</b> / <b>dinahun</b>", "every day", "ma <b>harek din</b> nepaali padhchhu"]
    ] } },
    { rule: "Put the word early, straight after the subject: <b>ma sadhain …</b>, <b>ma kahilekaahin …</b>. For “never”, make the verb negative: <b>kahilyai … -dina</b>." },
    { ex: [
      { ne: "म सधैँ बिहान चिया पिउँछु।", ro: "ma sadhain bihaan chiyaa piunchhu.", en: "I always drink tea in the morning." },
      { ne: "म धेरैजसो घरमै खाना खान्छु।", ro: "ma dheraijaso gharmai khaanaa khaanchhu.", en: "I usually eat at home." },
      { ne: "शनिबार म कहिलेकाहीँ साथीहरूसँग घुम्न जान्छु।", ro: "shanibaar ma kahilekaahin saathiharusanga ghumna jaanchhu.", en: "On Saturdays I sometimes go out with friends." },
      { ne: "म कहिल्यै चुरोट खाँदिनँ।", ro: "ma kahilyai churot khaandina.", en: "I never smoke.", note: "You “eat” a cigarette: churot khaanu." }
    ] },
    { warn: "<b>ma kahilyai churot khaanchhu</b> is not “I never smoke”: without a negative verb the sentence falls apart. Keep three look-alikes apart: <b>kahile</b> (when?), <b>kahilekaahin</b> (sometimes), <b>kahilyai</b> (ever, never). For experiences, the perfect: <b>ma kahilyai sagarmaathaa gaeko chhaina</b> (I've never been to Everest)." }
  ],
  quiz: [
    { q: "“I never eat meat.”", a: "ma kahilyai maasu khaandina", o: ["ma kahilyai maasu khaanchhu", "ma kahile maasu khaandina"], why: "“Never” = <b>kahilyai</b> + a negative verb. <b>kahile</b> means “when?”." },
    { q: "“I sometimes cook.”", a: "ma kahilekaahin khaanaa pakaaunchhu", o: ["ma kahilyai khaanaa pakaaunchhu", "ma kahile khaanaa pakaaunchhu"], why: "Sometimes → <b>kahilekaahin</b>. <b>kahilyai</b> needs a negative verb; <b>kahile</b> asks when." },
    { q: "“I usually get up at six.”", a: "ma dheraijaso chha baje uthchhu", o: ["ma dherai chha baje uthchhu", "ma kahilyai chha baje uthchhu"], why: "Usually → <b>dheraijaso</b>. <b>dherai</b> alone means “a lot”." },
    { q: "“He never comes on time.”", a: "u kahilyai samayamaa aaundaina", o: ["u kahilyai samayamaa aaunchha", "u kahile samayamaa aaundaina"], why: "<b>kahilyai</b> with the negative <b>aaundaina</b>. With a positive verb it doesn't mean “never”." }
  ] },

{ id: "w-size", level: "A2", unit: "describe", title: "Big, long, tall, old: thulo, laamo, aglo, puraano, budho", sub: "thulo (big), laamo (long), aglo (tall), puraano (old: things), budho / budhi (old: people)",
  words: ["aglo", "hocho", "laamo", "puraano", "budho", "budhi"],
  blocks: [
    { p: "English “short” covers both length and height, and “old” covers both a house and a grandmother. Nepali has a separate word for each dimension and separate words for old things and old people." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>thulo</b> / <b>saano</b>", "overall size; in the family also older / younger", "<b>thulo</b> ghar · <b>thulo</b> daai (eldest brother) · <b>saano</b> bhaai (little brother)"],
      ["<b>laamo</b> / <b>chhoto</b>", "length: hair, roads, journeys, time", "usko kapaal <b>laamo</b> chha"],
      ["<b>aglo</b> / <b>hocho</b>", "height: people, buildings, trees, mountains", "mero bhaai <b>aglo</b> chha"],
      ["<b>puraano</b> / <b>nayaan</b>", "old / new: things, places, and how long you have known someone", "<b>puraano</b> ghar · <b>puraano</b> saathi (an old friend)"],
      ["<b>budho</b>, <b>budhi</b> / <b>jawaan</b>", "old / young: people (and animals); <b>tarun</b> is a more formal “young”", "<b>budho</b> maanchhe · ajhai <b>jawaan</b>"]
    ] } },
    { rule: "Ask what you are measuring: size (<b>thulo</b>), length (<b>laamo</b>) or height (<b>aglo</b>). For “old”, ask whether it has <i>existed</i> a long time (<b>puraano</b>) or <i>lived</i> a long time (<b>budho</b>)." },
    { ex: [
      { ne: "मेरो भाइ अग्लो छ, तर म होचो छु।", ro: "mero bhaai aglo chha, tara ma hocho chhu.", en: "My younger brother is tall, but I'm short." },
      { ne: "मेरो फोन पुरानो भयो, नयाँ किन्छु।", ro: "mero phon puraano bhayo, nayaan kinchhu.", en: "My phone has got old; I'll buy a new one." },
      { ne: "मेरो हजुरबुबा अब बूढो हुनुभयो।", ro: "mero hajurbubaa aba budho hunubhayo.", en: "My grandfather has grown old now.", note: "budho for a person, with the respectful verb." },
      { ne: "उहाँ अझै जवान हुनुहुन्छ।", ro: "uhaan ajhai jawaan hunuhunchha.", en: "She's still young." }
    ] },
    { warn: "With a person, <b>puraano</b> means long-standing, not elderly: <b>puraano saathi</b> is a friend of many years. And <b>thulo maanchhe</b> is an important or wealthy person, not a tall one: tall is <b>aglo</b>. <b>budho / budhi</b> is blunt said of someone present: address older people as <b>aamaa</b>, <b>bubaa</b>, <b>hajuraamaa</b>, and describe them gently as <b>paako umerko</b> (of mature years). For build: <b>moto</b> / <b>dublo</b> = fat / thin (<b>moto</b> also thick: moto kitaab)." }
  ],
  quiz: [
    { q: "“Their house is very tall.” (five floors)", a: "unko ghar dherai aglo chha", o: ["unko ghar dherai laamo chha", "unko ghar dherai budho chha"], why: "Height → <b>aglo</b>. <b>laamo</b> would be a long, low house; <b>budho</b> is only for living beings." },
    { q: "“An old temple, an old phone.”", a: "puraano mandir, puraano phon", o: ["budho mandir, budho phon", "budhi mandir, budhi phon"], why: "Things that have existed a long time → <b>puraano</b>. <b>budho / budhi</b> are for people." },
    { q: "“He is tall.” (polite)", a: "uhaan aglo hunuhunchha", o: ["uhaan thulo maanchhe hunuhunchha", "uhaan puraano maanchhe hunuhunchha"], why: "<b>aglo</b> = tall. <b>thulo maanchhe</b> is an important person; <b>puraano</b> with a person means long-standing." },
    { q: "“My eldest brother lives in Pokhara.”", a: "mero thulo daai pokharaamaa basnuhunchha", o: ["mero aglo daai pokharaamaa basnuhunchha", "mero budho daai pokharaamaa basnuhunchha"], why: "In the family <b>thulo / saano</b> = older / younger: <b>thulo daai</b>. <b>aglo daai</b> is just a tall brother." }
  ] },

{ id: "w-say", level: "A2", unit: "phone", title: "Say, speak, talk, ask: bhannu, bolnu, kuraa garnu, sodhnu", sub: "bhannu (say what), bolnu (speak: voice, language), kuraa garnu (talk with someone), sodhnu (ask a question), maagnu (ask for a thing)",
  words: ["bol-", "sodh-", "maag-", "kuraa gar-"],
  blocks: [
    { p: "English sorts these verbs by grammar: say <i>that</i>, tell <i>someone</i>, speak <i>a language</i>. Nepali sorts them by what you are doing: putting words across, using your voice, having a conversation, or asking." },
    { table: { head: ["Verb", "Use it for", "Example"], rows: [
      ["<b>bhannu</b>", "the words or the message: say, tell", "maaf garnuhos, ke <b>bhannubhayo</b>?"],
      ["<b>bolnu</b>", "the act of speaking: a language, loud or slow, who is on the line", "ali thulo swarle <b>bolnuhos</b> · ko <b>bolnubhaeko</b>?"],
      ["<b>kuraa garnu</b>", "talk, chat, have a conversation with someone", "bholi <b>kuraa garaunlaa</b>"],
      ["<b>sodhnu</b>", "ask a question", "kaslaai <b>sodhnuparchha</b>?"],
      ["<b>maagnu</b>", "ask for something: a thing, help, money", "maile paani <b>maagen</b>"]
    ] } },
    { rule: "<i>What</i> was said → <b>bhannu</b>. The voice or the language → <b>bolnu</b>. Two people talking → <b>kuraa garnu</b>. A question → <b>sodhnu</b>; a thing you want → <b>maagnu</b>." },
    { ex: [
      { ne: "माफ गर्नुहोस्, के भन्नुभयो?", ro: "maaf garnuhos, ke bhannubhayo?", en: "Sorry, what did you say?" },
      { ne: "उहाँ अंग्रेजी बोल्नुहुन्न, नेपाली मात्र बोल्नुहुन्छ।", ro: "uhaan angreji bolnuhunna, nepaali maatra bolnuhunchha.", en: "He doesn't speak English, only Nepali." },
      { ne: "म रामसँग फोनमा कुरा गर्दै छु।", ro: "ma raamsanga phonmaa kuraa gardai chhu.", en: "I'm talking to Ram on the phone." },
      { ne: "मैले उहाँलाई बाटो सोधेँ।", ro: "maile uhaanlaai baato sodhen.", en: "I asked him the way." }
    ] },
    { warn: "“Speak Nepali” is <b>nepaali bolnu</b>, never nepaali bhannu: <b>bhannu</b> needs something to say. Asking <i>for</i> something is <b>maagnu</b>; <b>sodhnu</b> is for questions. To tell someone a piece of information (the way, the time), Nepalis often use <b>bataaunu</b>: <b>baato bataaidinus</b>." }
  ],
  quiz: [
    { q: "“Do you speak Nepali?”", a: "tapaain nepaali bolnuhunchha?", o: ["tapaain nepaali bhannuhunchha?", "tapaain nepaali sodhnuhunchha?"], why: "Using a language → <b>bolnu</b>." },
    { q: "“Can I ask you something?”", a: "ma tapaainlaai eutaa kuraa sodhna sakchhu?", o: ["ma tapaainlaai eutaa kuraa maagna sakchhu?", "ma tapaainlaai eutaa kuraa bolna sakchhu?"], why: "A question → <b>sodhnu</b>. With <b>maagnu</b> you would be asking to be given something." },
    { q: "“I asked for the bill.”", a: "maile bil maagen", o: ["maile bil sodhen", "maile bil bhanen"], why: "Asking to be given a thing → <b>maagnu</b>." },
    { q: "End of a call: “Let's talk tomorrow.”", a: "bholi kuraa garaunlaa", o: ["bholi bhanaunlaa", "bholi sodhaunlaa"], why: "A conversation → <b>kuraa garnu</b>. <b>bhannu</b> needs a message, <b>sodhnu</b> a question." }
  ] },

{ id: "w-can", level: "A2", unit: "hobby", title: "“Can”: sakchhu, aaunchha, paainchha or hunchha?", sub: "sakchhu (able), aaunchha (know how), paainchha (can be had, allowed), hunchha (it's OK, permitted)",
  words: ["sakchhu", "sakdina", "saknuhunchha", "aaundaina", "paainchha"],
  blocks: [
    { p: "English “can” covers ability, skill, availability and permission. Nepali has a different verb for each. The grammar chapter “Must, can, may” gives the full set; this is the quick chooser." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>-na sakchhu</b>", "you are able: the strength, the time, the chance", "ma bholi aauna <b>sakchhu</b>"],
      ["malaai <b>-na aaunchha</b>", "you know how: a learned skill or a language", "malaai paudi khelna <b>aaunchha</b>"],
      ["<b>paainchha</b>", "it can be had: on sale, available; also “one is allowed”", "yahaan sim kaard <b>paainchha</b>?"],
      ["<b>-na hunchha?</b>", "is it OK, is it permitted?", "yahaan basna <b>hunchha</b>?"]
    ] } },
    { rule: "Ask: is it my <i>capacity</i> (<b>sakchhu</b>), a <i>skill</i> I learned (<b>aaunchha</b>), something one can <i>get</i> (<b>paainchha</b>), or <i>permission</i> (<b>hunchha</b>)?" },
    { ex: [
      { ne: "म आज साँझ आउन सक्दिनँ।", ro: "ma aaja saanjha aauna sakdina.", en: "I can't come this evening." },
      { ne: "मलाई गितार बजाउन आउँछ।", ro: "malaai gitaar bajaauna aaunchha.", en: "I can play the guitar." },
      { ne: "यहाँ नेपाली किताब पाइन्छ?", ro: "yahaan nepaali kitaab paainchha?", en: "Can you get Nepali books here?" },
      { ne: "यहाँ फोटो खिच्न हुन्छ?", ro: "yahaan photo khichna hunchha?", en: "Can I take photos here?" }
    ] },
    { warn: "For a skill you never learned, the natural choice is <b>malaai naachna aaundaina</b> (I can't dance). <b>ma naachna sakdina</b> sounds more like “I'm not able to”: today, physically, or because you won't. And to ask whether something is sold here, say <b>paainchha?</b>" }
  ],
  quiz: [
    { q: "“I can't dance.” (you never learned)", a: "malaai naachna aaundaina", o: ["malaai naachna hundaina", "malaai naachna paaindaina"], why: "A skill → malaai … <b>aaundaina</b>. <b>hundaina</b> and <b>paaindaina</b> would mean you are not allowed." },
    { q: "In a shop: “Can I get a SIM card here?”", a: "yahaan sim kaard paainchha?", o: ["yahaan sim kaard sakchha?", "yahaan sim kaard aaunchha?"], why: "Is it to be had → <b>paainchha</b>." },
    { q: "Outside a temple: “Can I go in?”", a: "bhitra jaana hunchha?", o: ["bhitra jaana aaunchha?", "bhitra jaanuparchha?"], why: "Permission → <b>-na hunchha?</b> (<b>paainchha?</b> also works). <b>aaunchha</b> is skill, <b>-nuparchha</b> is obligation." },
    { q: "A friend invites you for Saturday, but you're working. “I can't come.”", a: "ma aauna sakdina", o: ["malaai aauna aaundaina", "aauna hundaina"], why: "Not able this time → <b>sakdina</b>. <b>aaundaina</b> would say you never learned how to come." }
  ] },

{ id: "w-enjoy", level: "A2", unit: "hobby", title: "Like, feel like, enjoy: man parchha, man laagyo, ramaailo laagyo", sub: "man parchha (like, in general), man laagyo (feel like, now), ramaailo laagyo (enjoyed it), mitho laagyo (found it tasty)",
  words: ["man par-", "man laag-", "ramaailo laag-", "mitho laag-"],
  blocks: [
    { p: "English “like” covers tastes, wishes and experiences. Nepali uses a different phrase for each, and the person who likes takes <b>-laai</b>: <b>malaai</b> … ." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>man parchha</b>", "a lasting taste: you like something or doing something", "malaai kitaab padhna <b>man parchha</b>"],
      ["<b>man laagyo</b> / <b>man laagchha</b>", "you feel like doing something: a wish (<b>laagyo</b> for right now)", "malaai sutna <b>man laagyo</b>"],
      ["<b>ramaailo laagyo</b>", "you enjoyed it, it was fun", "malaai treking <b>ramaailo laagyo</b>"],
      ["<b>mitho laagyo</b>", "you found it tasty", "khaanaa <b>mitho laagyo</b>"],
      ["<b>man pardaina</b>", "you don't like it", "malaai piro <b>man pardaina</b>"]
    ] } },
    { rule: "A lasting taste → <b>man parchha</b>. A wish right now → <b>-na man laagyo</b>. Your reaction to something you did or ate → <b>ramaailo / mitho laagyo</b>." },
    { ex: [
      { ne: "मलाई पहाडमा हिँड्न मन पर्छ।", ro: "malaai pahaadmaa hindna man parchha.", en: "I like walking in the hills." },
      { ne: "आज मलाई बाहिर जान मन लागेन।", ro: "aaja malaai baahira jaana man laagena.", en: "I didn't feel like going out today." },
      { ne: "मलाई पोखरा धेरै रमाइलो लाग्यो।", ro: "malaai pokharaa dherai ramaailo laagyo.", en: "I really enjoyed Pokhara." },
      { ne: "दाल भात मीठो लाग्यो, धन्यवाद।", ro: "daal bhaat mitho laagyo, dhanyabaad.", en: "The daal bhaat was delicious, thank you.", note: "A natural thank-you after a meal." }
    ] },
    { warn: "<b>malaai chiyaa khaana man laagyo</b> = I feel like a tea now; <b>malaai chiyaa man parchha</b> = I like tea. Mix them up and you may get a cup you didn't ask for. And “play” depends on what you play: games and sports take <b>khelnu</b> (phutbal khelnu), instruments <b>bajaaunu</b> (gitaar bajaaunu), songs <b>gaaunu</b> (git gaaunu)." }
  ],
  quiz: [
    { q: "“I like Nepali food.” (in general)", a: "malaai nepaali khaanaa man parchha", o: ["malaai nepaali khaanaa man laagyo", "malaai nepaali khaanaa ramaailo laagyo"], why: "A lasting taste → <b>man parchha</b>. <b>man laagyo</b> would be a craving right now." },
    { q: "Tired after work: “I feel like sleeping.”", a: "malaai sutna man laagyo", o: ["malaai sutna man parchha", "malaai sutna ramaailo laagyo"], why: "A wish right now → <b>-na man laagyo</b>. <b>man parchha</b> would mean you enjoy sleeping in general." },
    { q: "Back from a festival: “It was great fun.”", a: "dherai ramaailo laagyo", o: ["dherai man laagyo", "dherai mitho laagyo"], why: "Enjoying an experience → <b>ramaailo laagyo</b>. <b>mitho</b> is for food." },
    { q: "“I play the guitar.”", a: "ma gitaar bajaaunchhu", o: ["ma gitaar khelchhu", "ma gitaar gaaunchhu"], why: "Instruments → <b>bajaaunu</b>. Games take khelnu, songs gaaunu." }
  ] },

{ id: "w-must", level: "A2", unit: "clinic", title: "Must, had to, needn't, mustn't: -nuparchha, -nupardaina, -nu hundaina", sub: "-nuparchha (must), -nuparyo (had to; need to now), -nupardaina (no need), -nu hundaina (must not)",
  words: ["-nuparchha", "-nuparyo", "-nupardaina", "hundaina"],
  blocks: [
    { p: "English “mustn't” and “don't have to” look alike but mean opposite things, and learners map them onto the wrong Nepali form. Nepali builds obligation on <b>parnu</b> and prohibition on <b>hundaina</b>. The grammar chapter “Must, can, may” has the full pattern." },
    { table: { head: ["Form", "Means", "Example"], rows: [
      ["<b>-nuparchha</b>", "must, have to", "ragat jaanch <b>garnuparchha</b>"],
      ["<b>-nuparyo</b>", "had to; also “I need to, now”", "hijo aspataal <b>jaanuparyo</b> · malaai charpi <b>jaanuparyo</b>"],
      ["<b>-nupardaina</b>", "no need, you don't have to", "bholi pheri <b>aaunupardaina</b>"],
      ["<b>-nu hundaina</b>", "must not: not allowed, or bad for you", "churot <b>khaanu hundaina</b>"],
      ["<b>-nuparthyo</b>", "used to have to; also “should have”", "chhito <b>aaunuparthyo</b> (you should have come sooner)"]
    ] } },
    { rule: "<b>-nupardaina</b> takes the duty away (relax); <b>-nu hundaina</b> forbids (stop). Ask: is the doctor saying “no need” or “don't”?" },
    { ex: [
      { ne: "दिनको तीन पटक खानुपर्छ।", ro: "dinko tin patak khaanuparchha.", en: "You have to take it three times a day." },
      { ne: "हिजो राति मलाई अस्पताल जानुपर्‍यो।", ro: "hijo raati malaai aspataal jaanuparyo.", en: "I had to go to hospital last night." },
      { ne: "भोलि फेरि आउनुपर्दैन।", ro: "bholi pheri aaunupardaina.", en: "You don't need to come back tomorrow." },
      { ne: "यो औषधि खाली पेटमा खानु हुँदैन।", ro: "yo aushadhi khaali petmaa khaanu hundaina.", en: "You mustn't take this medicine on an empty stomach." }
    ] },
    { warn: "<b>churot khaanupardaina</b> tells a patient there is no need to smoke, as if smoking had been prescribed; “you mustn't smoke” is <b>churot khaanu hundaina</b>. Note too that <b>-nuparyo</b> is not only past: <b>daaktarlaai dekhaaunuparyo</b> often means “I need to see a doctor (now)”." }
  ],
  quiz: [
    { q: "The doctor: “You mustn't drink alcohol.”", a: "raksi khaanu hundaina", o: ["raksi khaanupardaina", "raksi khaanuparchha"], why: "A prohibition → <b>-nu hundaina</b>. <b>-nupardaina</b> only removes an obligation." },
    { q: "The nurse: “You don't have to pay today.”", a: "aaja tirnupardaina", o: ["aaja tirnu hundaina", "aaja tirnuparyo"], why: "No need → <b>-nupardaina</b>. <b>tirnu hundaina</b> would forbid you to pay." },
    { q: "“I had to wait three hours yesterday.”", a: "hijo tin ghantaa kurnuparyo", o: ["hijo tin ghantaa kurnuparchha", "hijo tin ghantaa kurnu hundaina"], why: "A past obligation → <b>-nuparyo</b>." },
    { q: "In the middle of the night: “I need to go to the toilet.”", a: "malaai charpi jaanuparyo", o: ["malaai charpi jaanu hundaina", "malaai charpi jaanupardaina"], why: "An urgent need now → <b>-nuparyo</b>." }
  ] },

{ id: "w-pairs", level: "A2", unit: "clinic", title: "“Take a medicine”, “see a doctor”: learn the pair, not the verb", sub: "aushadhi khaanu (take medicine), daaktarlaai dekhaaunu (see a doctor), parikshaa dinu (take an exam), bas chadhnu (take the bus)",
  words: ["aushadhi", "dekhaau-", "parikshaa", "churot"],
  blocks: [
    { p: "English uses a few all-purpose verbs: you <i>take</i> a medicine, a photo, a bus and an exam. Nepali picks a verb to suit each noun, often not the one English would choose. Learn the pair, not the verb." },
    { table: { head: ["Pair", "English", "Literally"], rows: [
      ["<b>aushadhi khaanu</b>", "take medicine", "eat it: dinko tin patak <b>khaanuhos</b>"],
      ["<b>daaktarlaai dekhaaunu</b>", "see a doctor", "show (yourself) to the doctor"],
      ["<b>parikshaa dinu</b>", "take an exam", "give it"],
      ["<b>photo khichnu</b>", "take a photo", "pull it"],
      ["<b>bas chadhnu</b>", "take the bus", "climb onto it"]
    ] } },
    { list: [
      "<b>phon garnu</b>: phone someone (<b>saathilaai phon garnu</b>).",
      "<b>nuhaaunu</b>: have a shower or a bath; one verb, no noun.",
      "<b>churot khaanu</b>: smoke (also churot piunu)."
    ] },
    { rule: "When the English verb is “take”, “have” or “do”, don't translate the verb: start from the noun and learn the verb that goes with it." },
    { ex: [
      { ne: "यो औषधि दिनको दुई पटक खानुहोस्।", ro: "yo aushadhi dinko dui patak khaanuhos.", en: "Take this medicine twice a day." },
      { ne: "मलाई ज्वरो आयो, डाक्टरलाई देखाउनुपर्‍यो।", ro: "malaai jwaro aayo, daaktarlaai dekhaaunuparyo.", en: "I've got a fever; I need to see a doctor." },
      { ne: "मेरो भाइ भोलि परीक्षा दिन्छ।", ro: "mero bhaai bholi parikshaa dinchha.", en: "My brother is taking an exam tomorrow." },
      { ne: "हामी बस चढेर पोखरा गयौँ।", ro: "haami bas chadhera pokharaa gayaun.", en: "We took the bus to Pokhara." }
    ] },
    { warn: "<b>daaktarlaai dekhnu</b> would mean you caught sight of the doctor: you <i>show</i> yourself (<b>dekhaaunu</b>), and the doctor <b>hernuhunchha</b> (examines you). With exams the roles flip: the student <b>parikshaa dinchha</b>, the teacher or school <b>parikshaa linchha</b> (sets it). <b>aushadhi linu</b> exists but is formal; in speech you <b>khaanu</b> it." }
  ],
  quiz: [
    { q: "“Take this medicine after meals.”", a: "yo aushadhi khaanaa khaaepachhi khaanuhos", o: ["yo aushadhi khaanaa khaaepachhi laijaanuhos", "yo aushadhi khaanaa khaaepachhi dinuhos"], why: "Medicine is “eaten”: <b>aushadhi khaanu</b>. <b>laijaanuhos</b> = take it away." },
    { q: "“I need to see a doctor.”", a: "daaktarlaai dekhaaunuparyo", o: ["daaktar dekhnuparyo", "daaktarlaai hernuparyo"], why: "You show yourself: <b>daaktarlaai dekhaaunu</b>. <b>dekhnu</b> is to catch sight of, <b>hernu</b> to look at." },
    { q: "Your friend, a student: “She's taking her exam tomorrow.”", a: "uhaan bholi parikshaa dinuhunchha", o: ["uhaan bholi parikshaa linuhunchha", "uhaan bholi parikshaa khaanuhunchha"], why: "Students “give” exams: <b>parikshaa dinu</b>. <b>linu</b> is what the examiner does." },
    { q: "“We took the bus.”", a: "haami bas chadhyaun", o: ["haami bas liyaun", "haami bas laigayaun"], why: "You climb onto a bus: <b>bas chadhnu</b>. <b>bas laigayaun</b> would mean you drove off with it." }
  ] },

{ id: "w-titles", level: "A2", unit: "culture", title: "Names and titles: -ji, sar, guru, daai", sub: "-ji (respectful, everyday), -jyu (formal), sar / myaadam (teachers, officials, customers), guruji (teacher), name + daai / didi",
  words: ["sar", "myaadam", "guruji"],
  blocks: [
    { p: "In English you can call almost anyone by their first name. In Nepal a bare first name is for friends your age and people younger than you; everyone else gets a respectful ending, a title or a kinship word." },
    { table: { head: ["Say", "To whom", "Example"], rows: [
      ["name + <b>-ji</b>", "everyday respect: colleagues, acquaintances, anyone you call tapaain; after a first name or a surname", "namaste, <b>sharmaaji</b>"],
      ["name + <b>-jyu</b>", "more formal: letters, speeches, ceremonies", "aadaraniya abhibhaawak<b>jyu</b> (respected guardians)"],
      ["<b>sar</b> / <b>myaadam</b>", "teachers, officials, bosses; staff to customers (at the clinic: <b>daaktar saab</b>)", "<b>sar</b>, maile bujhina"],
      ["<b>guru</b> / <b>guruji</b>", "a teacher, traditionally; you will also hear <b>guruji</b> for drivers", "<b>guruji</b>, yahaan roknuhos"],
      ["name + <b>daai</b> / <b>didi</b>", "someone a little older whom you know: warm and respectful", "<b>raam daai</b>, <b>sitaa didi</b>"]
    ] } },
    { rule: "Older than you, or someone you call tapaain → add something (<b>-ji</b>, <b>daai</b>, <b>didi</b>, a title). A friend your age or someone younger → the bare name is fine." },
    { ex: [
      { ne: "नमस्ते, शर्माजी। सन्चै हुनुहुन्छ?", ro: "namaste, sharmaaji. sanchai hunuhunchha?", en: "Hello, Mr Sharma. Are you well?" },
      { ne: "सर, मैले बुझिनँ।", ro: "sar, maile bujhina.", en: "Sir, I didn't understand.", note: "To a teacher." },
      { ne: "राम दाइ, भोलि भेटौँ है।", ro: "raam daai, bholi bhetaun hai.", en: "See you tomorrow, Ram.", note: "Ram is a friend, a little older." },
      { ne: "सीता, तिमी कहाँ जाँदै छौ?", ro: "sitaa, timi kahaan jaandai chhau?", en: "Sita, where are you off to?", note: "Bare name with timi: a friend or someone younger." }
    ] },
    { warn: "Calling an older colleague or your landlord by their bare first name sounds as if you were talking down to them, much as <b>timi</b> would. Never add the ending to your own name: you are <b>ma paulo hun</b>, not pauloji. The kinship words on their own (daai, didi, bhaai, bahini) are in the grammar chapter on pronouns." }
  ],
  quiz: [
    { q: "Your Nepali teacher, a man, at the language school. To get his attention you say:", a: "sar", o: ["bhaai", "keshab"], why: "Teachers are <b>sar</b> (or guruji). <b>bhaai</b> is for a younger man; a bare first name is for friends and juniors." },
    { q: "Which way of addressing Hari, an older colleague, would sound rude?", a: "hari", o: ["hariji", "hari daai"], why: "A bare first name is for friends your age and juniors. <b>-ji</b> or <b>daai</b> shows respect." },
    { q: "Introducing yourself: “I'm Paulo.”", a: "ma paulo hun", o: ["ma pauloji hun", "ma paulo daai hun"], why: "Respect endings are for other people, never for yourself." },
    { q: "Your neighbour's son, aged ten, is called Ramesh. You call him:", a: "ramesh", o: ["rameshji", "ramesh daai"], why: "A child or someone younger → the bare name (or <b>ramesh bhaai</b>). <b>-ji</b> and <b>daai</b> look up, not down." }
  ] },

{ id: "w-all", level: "A2", unit: "compare", title: "All, every, both, some, nobody: sabai, harek, duwai, kehi, kohi", sub: "sabai (all), harek (each, every), duwai (both), kehi (something, some), kunai (some or any one), kohi (someone)",
  words: ["duwai", "sabai", "harek", "pratyek", "kohi"],
  blocks: [
    { p: "English “some” and “any” work for people, things and amounts alike. Nepali splits them: <b>kohi</b> for people, <b>kehi</b> for things and amounts, <b>kunai</b> before a noun." },
    { table: { head: ["Word", "Means", "Example"], rows: [
      ["<b>sabai</b> / <b>duwai</b>", "all, everyone, everything / both", "<b>sabai</b> thik chha · <b>duwai</b> raamraa chhan"],
      ["<b>harek</b> / <b>pratyek</b>", "each, every (+ one noun); <b>pratyek</b> is more formal", "<b>harek</b> din"],
      ["<b>kehi</b>", "something, some, a few: things and amounts", "<b>kehi</b> chaahiyo? · <b>kehi</b> din"],
      ["<b>kunai</b>", "some or any one, before a noun", "<b>kunai</b> din (some day) · <b>kunai</b> pani hunchha"],
      ["<b>kohi</b>", "someone, anyone: people only", "<b>kohi</b> chha?"]
    ] } },
    { rule: "A person → <b>kohi</b>. A thing or an amount → <b>kehi</b>. Before a noun → <b>kunai</b>. For “nobody / nothing” add <b>pani</b> and make the verb negative: <b>kohi pani</b> … <b>chhaina</b>." },
    { ex: [
      { ne: "हामी दुवै शाकाहारी हौँ।", ro: "haami duwai shaakaahaari haun.", en: "We're both vegetarian." },
      { ne: "म हरेक बिहान चिया खान्छु।", ro: "ma harek bihaan chiyaa khaanchhu.", en: "I have tea every morning." },
      { ne: "ढोकामा कोही छ।", ro: "dhokaamaa kohi chha.", en: "There's someone at the door." },
      { ne: "मलाई केही पनि चाहिँदैन।", ro: "malaai kehi pani chaahindaina.", en: "I don't need anything.", note: "kehi pani + negative verb = nothing." }
    ] },
    { warn: "<b>kehi aayo</b> means “something came”; for “someone came” say <b>kohi aayo</b>: <b>kehi</b> is never a person. And “nobody” needs both halves, <b>kohi pani</b> and a negative verb: <b>kohi pani aaena</b>. Without the negative, <b>kohi pani</b> means “anyone at all”: <b>kohi pani aauna sakchha</b> (anyone can come)." }
  ],
  quiz: [
    { q: "You knock at a door: “Is anyone there?”", a: "kohi chha?", o: ["kehi chha?", "sabai chha?"], why: "A person → <b>kohi</b>. <b>kehi chha?</b> asks whether there is any<i>thing</i>." },
    { q: "“Nobody came.”", a: "kohi pani aaena", o: ["kohi pani aayo", "kehi pani aaena"], why: "Nobody = <b>kohi pani</b> + negative verb. <b>kehi pani aaena</b> = nothing came." },
    { q: "Choosing between two rooms: “Both are good.”", a: "duwai raamraa chhan", o: ["sabai raamraa chhan", "kohi raamraa chhan"], why: "Two of them → <b>duwai</b>. <b>kohi</b> is only for people." },
    { q: "“I study Nepali every day.”", a: "ma harek din nepaali padhchhu", o: ["ma kehi din nepaali padhchhu", "ma kunai din nepaali padhchhu"], why: "Every → <b>harek</b>. <b>kehi din</b> = for a few days, <b>kunai din</b> = some day." }
  ] }

]);
})();
