// Which word, when? (see usage-a.js for the format). This file: B1 and up, then the notes on reading Devanagari (shown to learners who have the script switched on).
(function () {
const C = window.COURSE;
C.usage = (C.usage || []).concat([

{ id: "w-think", level: "B1", unit: "opinion", title: "“I think”: malaai laagchha, mero bichaarmaa or sochnu?", sub: "malaai laagchha (it seems to me), mero bichaarmaa (in my view), jasto laagchha (it feels as if), sochnu (to think something over)",
  words: ["malaai laagchha", "bichaarmaa", "soch-"],
  blocks: [
    { p: "English “I think” covers both an opinion and the act of thinking. Nepali gives an opinion as something that <i>strikes you</i> (<b>malaai laagchha</b>) and keeps <b>sochnu</b> for real mental work." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>malaai laagchha</b>", "the everyday way to give an opinion: “it seems to me”", "<b>malaai laagchha</b>, yo thik ho · tapaainlaai ke <b>laagchha</b>?"],
      ["<b>mero bichaarmaa</b>", "a considered view, in a discussion or a meeting", "<b>mero bichaarmaa</b> yo niyam raamro chha"],
      ["<b>… jasto laagchha</b>", "an impression or soft guess: “it feels as if, it looks like”", "paani parchha <b>jasto laagchha</b>"],
      ["<b>sochnu</b>", "the activity: think about, ponder, consider", "ma <b>sochdai chhu</b> (I'm thinking about it)"]
    ] } },
    { rule: "If you could say “it seems to me”, use <b>laagchha</b>, with the person in <b>-laai</b>. If you could say “ponder” or “think it over”, use <b>sochnu</b>." },
    { ex: [
      { ne: "मलाई लाग्छ, यो योजना राम्रो छ।", ro: "malaai laagchha, yo yojanaa raamro chha.", en: "I think this plan is good." },
      { ne: "मेरो विचारमा सरकारले यो नियम बदल्नुपर्छ।", ro: "mero bichaarmaa sarkaarle yo niyam badalnuparchha.", en: "In my view the government should change this rule." },
      { ne: "आज पानी पर्छ जस्तो लाग्छ।", ro: "aaja paani parchha jasto laagchha.", en: "It looks as if it's going to rain today." },
      { ne: "म अझै सोच्दै छु।", ro: "ma ajhai sochdai chhu.", en: "I'm still thinking about it." }
    ] },
    { warn: "<b>ma sochchhu ki yo raamro chha</b> copies English “I think that…” word for word. It is understood, but it sounds translated; for an opinion say <b>malaai laagchha</b>. Keep <b>sochnu</b> for real thinking: <b>sochera bhanchhu</b> = I'll think about it and let you know. To disagree, negate the clause, not the thinking: <b>tyasto hoina jasto laagchha</b> = I don't think it's like that." }
  ],
  quiz: [
    { q: "A colleague asks your view of a new plan. “I think it's good.”", a: "malaai laagchha, raamro chha", o: ["malaai sochchha, raamro chha", "ma laagchhu, raamro chha"], why: "An opinion “strikes” you: <b>malaai laagchha</b>. <b>sochnu</b> never takes <b>malaai</b>, and <b>laagnu</b> never takes <b>ma</b> as its subject." },
    { q: "Someone wants an answer now; you need time. “I'm thinking about it.”", a: "ma sochdai chhu", o: ["malaai laagdai chha", "mero bichaarmaa chhu"], why: "The activity of thinking → <b>sochnu</b>: <b>ma sochdai chhu</b>." },
    { q: "Asking for someone's opinion: “What do you think?”", a: "tapaainlaai ke laagchha?", o: ["tapaainlaai ke sochchha?", "tapaain ke laagnuhunchha?"], why: "The opinion question mirrors the answer: <b>tapaainlaai ke laagchha?</b>" },
    { q: "You glance at the clouds. “It looks as if it's going to rain.”", a: "paani parchha jasto laagchha", o: ["paani parchha jasto sochchhu", "malaai paani parchha sochchha"], why: "An impression → <b>… jasto laagchha</b>. <b>sochnu</b> is deliberate thinking, not an impression." }
  ] },

{ id: "w-right", level: "B1", unit: "opinion", title: "Right, true, sure: thik, sahi, saancho, pakkaa", sub: "thik (fine, OK), sahi (correct), saancho (true, not a lie), pakkaa (certain), galat (wrong)",
  words: ["sahi", "saancho", "jhuto", "pakkaa", "galat"],
  blocks: [
    { p: "English “right” can mean acceptable, correct, true or certain. Nepali has a word for each, and they are not interchangeable." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>thik</b>", "fine, OK, acceptable; “you're right” in conversation", "<b>thik</b> chha · tapaainle <b>thik</b> bhannubhayo"],
      ["<b>sahi</b> / <b>galat</b>", "the correct or wrong one: an answer, a road, a method, a number", "<b>sahi</b> jawaaf · <b>galat</b> nambar"],
      ["<b>saancho</b> / <b>jhuto</b>", "true or false as a statement: honest or a lie", "yo kuraa <b>saancho</b> ho? · u <b>jhuto</b> bolchha"],
      ["<b>pakkaa</b>", "certain, definite, fixed", "<b>pakkaa</b> ho? (are you sure?) · ma <b>pakkaa</b> aaunchhu"]
    ] } },
    { rule: "Ask what is being judged: is it acceptable (<b>thik</b>), is it the correct one (<b>sahi</b> / <b>galat</b>), is it honest (<b>saancho</b> / <b>jhuto</b>), or how sure is someone (<b>pakkaa</b>)?" },
    { ex: [
      { ne: "यो सही बाटो हो?", ro: "yo sahi baato ho?", en: "Is this the right road?" },
      { ne: "यो कुरा साँचो हो?", ro: "yo kuraa saancho ho?", en: "Is this true?" },
      { ne: "पक्का हो? भोलि बिदा हो?", ro: "pakkaa ho? bholi bidaa ho?", en: "Are you sure? Is tomorrow a holiday?" },
      { ne: "माफ गर्नुहोस्, नम्बर गलत भयो।", ro: "maaf garnuhos, nambar galat bhayo.", en: "Sorry, wrong number." }
    ] },
    { warn: "Using <b>saancho</b> for a correct answer: <b>tapaainko jawaaf saancho ho</b> sounds as if the question was whether you were lying. A correct answer is <b>sahi</b> (or simply <b>thik</b>). Two homonyms worth knowing: <b>sahi garnus</b> = please sign (sahi is also a signature), and <b>saancho</b> is also the everyday word for a key. “Really?” is <b>saanchchai?</b>" }
  ],
  quiz: [
    { q: "A friend claims he had tea with the prime minister. You doubt it: “Is that true?”", a: "saancho ho?", o: ["thik chha?", "sahi garnus?"], why: "Honest or not → <b>saancho</b>. <b>thik chha?</b> asks whether something is OK; <b>sahi garnus</b> asks him to sign." },
    { q: "The teacher looks at your answer and says: “Correct.”", a: "sahi", o: ["saancho", "pakkaa"], why: "The correct one among possible answers → <b>sahi</b> (<b>thik</b> would also do)." },
    { q: "A colleague says the meeting has moved to Friday. “Are you sure?”", a: "pakkaa ho?", o: ["jhuto ho?", "galat ho?"], why: "How certain someone is → <b>pakkaa</b>. <b>jhuto ho?</b> accuses him of lying." },
    { q: "A stranger answers the phone. “Sorry, wrong number.”", a: "maaf garnuhos, nambar galat bhayo", o: ["maaf garnuhos, nambar jhuto bhayo", "maaf garnuhos, nambar saancho bhayo"], why: "Not the correct one → <b>galat</b>. <b>jhuto</b> is for lies, not mistakes." }
  ] },

{ id: "w-find", level: "B1", unit: "tell", title: "Look for, find, get, meet: khojnu, bhettaaunu, paaunu, bhetnu", sub: "khojnu (search), bhettaaunu (find, come across), paaunu (get, obtain), bhetnu (meet a person)",
  words: ["khoj-", "bhettaa-", "paaen", "paaina", "paainchha", "paauna"],
  blocks: [
    { p: "English “find” hides two moments, the search and the result, and also covers getting hold of things. Nepali splits them, and meeting people has its own verb." },
    { table: { head: ["Verb", "Use it when", "Example"], rows: [
      ["<b>khojnu</b>", "you are searching, whether or not you succeed", "ma kothaa <b>khojdai chhu</b>"],
      ["<b>bhettaaunu</b>", "it turns up: you find what you looked for, or come across it", "chaabi <b>bhettaaen</b>"],
      ["<b>paaunu</b>", "you get it: receive, obtain, manage to get", "kaam <b>paaen</b> · yo kahaan <b>paainchha</b>?"],
      ["<b>bhetnu</b>", "you meet a person", "saathilaai <b>bheten</b>"]
    ] } },
    { rule: "Still searching → <b>khojnu</b>. It turned up → <b>bhettaaunu</b>. You got hold of it → <b>paaunu</b>. A person → <b>bhetnu</b>." },
    { ex: [
      { ne: "म दुई घण्टादेखि चाबी खोज्दै छु।", ro: "ma dui ghantaadekhi chaabi khojdai chhu.", en: "I've been looking for the key for two hours." },
      { ne: "अन्त्यमा झोलामै भेट्टाएँ।", ro: "antyamaa jholaamai bhettaaen.", en: "In the end I found it in my bag." },
      { ne: "ठमेलमा राम्रो कोठा पाएँ।", ro: "thamelmaa raamro kothaa paaen.", en: "I found a good room in Thamel.", note: "Found = managed to get → paaunu." },
      { ne: "बाटोमा पुरानो साथीलाई भेटेँ।", ro: "baatomaa puraano saathilaai bheten.", en: "I ran into an old friend on the way." }
    ] },
    { warn: "<b>maile chaabi khojen</b> says only that you looked: <b>khojen, tara paaina</b> (I looked but didn't find it) is a normal sentence. Keep <b>bhetnu</b> for people; for a lost thing that turns up, say <b>bhettaaen</b>, or <b>bhetiyo</b> (it was found). And “I find it hard” is not a finding verb at all: <b>malaai gaahro laagchha</b>." }
  ],
  quiz: [
    { q: "In a shop: “I'm looking for a charger.”", a: "ma chaarjar khojdai chhu", o: ["ma chaarjar bhettaaundai chhu", "ma chaarjar bhetdai chhu"], why: "The search itself → <b>khojnu</b>." },
    { q: "“I met your brother yesterday.”", a: "hijo maile tapaainko bhaailaai bheten", o: ["hijo maile tapaainko bhaailaai khojen", "hijo maile tapaainko bhaailaai paaen"], why: "Meeting a person → <b>bhetnu</b>. <b>khojen</b> = I looked for him." },
    { q: "Your missing phone turns up under the sofa. “Found it.”", a: "bhettaaen", o: ["khojen", "khojdai chhu"], why: "The search is over and it turned up → <b>bhettaaunu</b>. <b>khojen</b> only says you looked." },
    { q: "“Where can I get a SIM card?”", a: "sim kaard kahaan paainchha?", o: ["sim kaard kahaan khojchha?", "sim kaard kahaan bhetchha?"], why: "Getting hold of something → <b>paaunu</b>: <b>kahaan paainchha?</b> = where can one get it?" }
  ] },

{ id: "w-forwhy", level: "B1", unit: "work", title: "“For” and “because of”: -laai, -ko laagi, -le gardaa", sub: "-laai (to a person), -ko laagi (for a purpose or someone's benefit), -le gardaa (because of)",
  words: ["laagi"],
  blocks: [
    { p: "English “for” can point forwards to a purpose (for work) or name a recipient (a call for you), and “because of” points back to a cause. Nepali uses a different ending for each." },
    { table: { head: ["Ending", "Use it for", "Example"], rows: [
      ["<b>-laai</b>", "the person who receives or is affected", "<b>tapaainlaai</b> phon aayo (there's a call for you)"],
      ["<b>-ko laagi</b>", "purpose or benefit: what or whom it is meant for", "<b>kaamko laagi</b> aaen · yo <b>tapaainko laagi</b> ho"],
      ["<b>-le gardaa</b>", "the cause, usually of something unwanted", "<b>paanile gardaa</b> dhilo bhayo"],
      ["<b>kinabhane</b> / <b>tyasaile</b>", "because / so, joining whole clauses (chapter <i>Joining ideas</i>)", "biraami thien, <b>tyasaile</b> aaina"]
    ] } },
    { rule: "Forwards to a purpose → <b>-ko laagi</b>. Back to a cause → <b>-le gardaa</b>. A person who simply receives → <b>-laai</b>." },
    { ex: [
      { ne: "म कामको लागि नेपाल आएँ।", ro: "ma kaamko laagi nepaal aaen.", en: "I came to Nepal for work." },
      { ne: "तपाईंलाई फोन आयो।", ro: "tapaainlaai phon aayo.", en: "There's a call for you." },
      { ne: "पानीले गर्दा म अफिस ढिलो पुगेँ।", ro: "paanile gardaa ma aphis dhilo pugen.", en: "I got to the office late because of the rain." },
      { ne: "हडतालले गर्दा आज कार्यालय बन्द छ।", ro: "hadtaalle gardaa aaja kaaryaalaya banda chha.", en: "The office is closed today because of the strike." }
    ] },
    { warn: "Using <b>-ko laagi</b> for a cause: <b>paaniko laagi dhilo bhayo</b> sounds as if you were late in order to get water. A cause takes <b>-le gardaa</b> (or <b>-ko kaaranle</b>). In writing and formal speech you will also meet <b>-kaa laagi</b>: same meaning. And “for two hours” needs no “for” at all: <b>dui ghantaa</b>." }
  ],
  quiz: [
    { q: "“This room is for meetings.”", a: "yo kothaa baithakko laagi ho", o: ["yo kothaa baithakle gardaa ho", "yo kothaa baithaklaai ho"], why: "What the room is meant for → <b>-ko laagi</b>." },
    { q: "“The road is closed because of the landslide.”", a: "pahirole gardaa baato banda chha", o: ["pahiroko laagi baato banda chha", "pahirolaai baato banda chha"], why: "The cause → <b>-le gardaa</b>. <b>pahiroko laagi</b> would make the landslide the purpose." },
    { q: "At reception: “There's a parcel for you.”", a: "tapaainlaai paarsal aaeko chha", o: ["tapaainle gardaa paarsal aaeko chha", "tapaainko kaaranle paarsal aaeko chha"], why: "You are the recipient → <b>-laai</b>. The other two make you the cause of the parcel." },
    { q: "“I bought tea for everyone.”", a: "maile sabaiko laagi chiyaa kinen", o: ["maile sabaile gardaa chiyaa kinen", "maile sabaiko kaaranle chiyaa kinen"], why: "For their benefit → <b>-ko laagi</b>. <b>-le gardaa</b> and <b>-ko kaaranle</b> would blame them for it." }
  ] },

{ id: "w-lose", level: "B1", unit: "solve", title: "Lose, forget, miss, leave: haraaunu, birsanu, chhutnu, chhodnu", sub: "haraaunu (be lost), birsanu (forget), chhutnu (be missed, left behind), chhodnu (leave on purpose)",
  words: ["haraa-", "birs-", "chhutyo", "chhutchha", "chhutechha", "chhod-"],
  blocks: [
    { p: "English “lose”, “forget”, “miss” and “leave” overlap (“I left my umbrella on the bus”). Nepali sorts them by what actually happened." },
    { table: { head: ["Verb", "Use it when", "Example"], rows: [
      ["<b>haraaunu</b>", "it is lost: you don't know where it is", "mero phon <b>haraayo</b>"],
      ["<b>birsanu</b>", "your memory failed; also leaving something behind by forgetting", "naam <b>birsen</b> · chhaataa basmaa <b>birsen</b>"],
      ["<b>chhutnu</b>", "missed, too late, or left behind", "bas <b>chhutyo</b> · phon gharmai <b>chhutyo</b>"],
      ["<b>chhodnu</b>", "you leave it on purpose: drop off, quit, let go", "malaai yahin <b>chhodnuhos</b>"]
    ] } },
    { rule: "Don't know where it is → <b>haraayo</b>. Your memory failed → <b>birsen</b>. Too late, or it stayed behind → <b>chhutyo</b>. You chose to leave it → <b>chhodnu</b>." },
    { ex: [
      { ne: "मेरो फोन हरायो।", ro: "mero phon haraayo.", en: "I've lost my phone." },
      { ne: "मैले कोठाको चाबी कोठाभित्रै बिर्सेँ।", ro: "maile kothaako chaabi kothaabhitrai birsen.", en: "I've left the room key inside the room." },
      { ne: "आज बिहानको बस छुट्यो।", ro: "aaja bihaanko bas chhutyo.", en: "I missed the morning bus today." },
      { ne: "मलाई यहीँ छोड्नुहोस्।", ro: "malaai yahin chhodnuhos.", en: "Please drop me here." }
    ] },
    { warn: "<b>haraayo</b> and <b>chhutyo</b> make the thing the subject: “the phone got lost”, “the bus got missed”. That is the normal way to report a problem and it blames no one; <b>maile phon haraaen</b> (I lost my phone) is also correct but owns the mistake. Don't use <b>haraaunu</b> for a bus: <b>bas haraayo</b> sounds as if the bus vanished. Missing a person is another verb again: <b>samjhanu</b>, <b>yaad aaunu</b>." }
  ],
  quiz: [
    { q: "You run to the stop, but the bus has gone. “I missed the bus.”", a: "bas chhutyo", o: ["bas haraayo", "maile bas birsen"], why: "Too late → <b>chhutyo</b>. <b>bas haraayo</b> = the bus has disappeared." },
    { q: "At reception, with no idea where it went: “I've lost my passport.”", a: "mero raahadaani haraayo", o: ["mero raahadaani chhutyo", "maile raahadaani chhoden"], why: "Whereabouts unknown → <b>haraayo</b>. <b>chhutyo</b> = it was left somewhere; <b>chhoden</b> = I left it on purpose." },
    { q: "“I've forgotten his name.”", a: "maile usko naam birsen", o: ["maile usko naam haraaen", "maile usko naam chhoden"], why: "Your memory failed → <b>birsanu</b>." },
    { q: "“I've given up smoking.” (churot = cigarette)", a: "maile churot chhoden", o: ["maile churot birsen", "mero churot haraayo"], why: "Giving something up on purpose → <b>chhodnu</b>." }
  ] },

{ id: "w-broken", level: "B1", unit: "solve", title: "“Broken”: bigriyo, bhaanchiyo, phutyo, chyaatiyo", sub: "bigriyo (stopped working), bhaanchiyo (snapped), phutyo (shattered, burst), chyaatiyo (tore)",
  words: ["bigri-", "bhaanch-", "phutyo", "chyaat-"],
  blocks: [
    { p: "English says “broken” for a phone, a leg, a glass and a plan. Nepali names what happened to the thing." },
    { table: { head: ["Verb", "Use it for", "Example"], rows: [
      ["<b>bigriyo</b>", "stopped working or went wrong: phone, machine, plan; food gone off", "mero phon <b>bigriyo</b>"],
      ["<b>bhaanchiyo</b>", "something long and rigid snapped: bone, stick, branch", "khuttaa <b>bhaanchiyo</b>"],
      ["<b>phutyo</b>", "shattered, cracked or burst: glass, cup, screen, pipe, tyre", "gilaas <b>phutyo</b>"],
      ["<b>chyaatiyo</b>", "tore: cloth, paper, a bag", "kaagaj <b>chyaatiyo</b>"]
    ] } },
    { rule: "Picture it: stopped working → <b>bigriyo</b>; snapped in two → <b>bhaanchiyo</b>; burst into pieces → <b>phutyo</b>; ripped → <b>chyaatiyo</b>." },
    { ex: [
      { ne: "कोठाको टिभी बिग्रियो।", ro: "kothaako tibhi bigriyo.", en: "The TV in the room has stopped working." },
      { ne: "हिजो लडेर मेरो हात भाँचियो।", ro: "hijo ladera mero haat bhaanchiyo.", en: "I fell yesterday and broke my arm." },
      { ne: "माफ गर्नुहोस्, एउटा गिलास फुट्यो।", ro: "maaf garnuhos, eutaa gilaas phutyo.", en: "Sorry, a glass got broken.", note: "The glass is the subject: no one is blamed." },
      { ne: "बाटोमा मेरो झोला च्यातियो।", ro: "baatomaa mero jholaa chyaatiyo.", en: "My bag tore on the way." }
    ] },
    { warn: "One verb for everything: <b>gilaas bigriyo</b> or <b>haat bigriyo</b> sounds as if the glass had stopped working. A phone is <b>bigriyo</b>, unless the screen cracked: <b>skrin phutyo</b>. Each has a partner for doing it to something: <b>bigaarnu</b>, <b>bhaanchnu</b>, <b>phutaaunu</b>, <b>chyaatnu</b> (<b>maile gilaas phutaaen</b> = I broke a glass)." }
  ],
  quiz: [
    { q: "Your laptop won't switch on any more.", a: "mero lyaaptap bigriyo", o: ["mero lyaaptap phutyo", "mero lyaaptap bhaanchiyo"], why: "Stopped working → <b>bigriyo</b>." },
    { q: "The mirror fell off the wall and smashed.", a: "ainaa phutyo", o: ["ainaa bigriyo", "ainaa chyaatiyo"], why: "Glass shatters → <b>phutyo</b>." },
    { q: "The doctor looks at your X-ray: “The bone is broken.”", a: "haad bhaanchiyo", o: ["haad phutyo", "haad bigriyo"], why: "A bone snaps → <b>bhaanchiyo</b>." },
    { q: "Your shirt caught on a nail and ripped.", a: "kamij chyaatiyo", o: ["kamij bhaanchiyo", "kamij bigriyo"], why: "Cloth tears → <b>chyaatiyo</b>." }
  ] },

{ id: "w-bhannu", level: "B1", unit: "ifthen", title: "The many lives of bhannu: bhane, bhanera, bhaneko, bhanne", sub: "bhane (if; as for), bhanera (saying, thinking, so as to), bhaneko (what was said; means), bhanne (called; that)",
  words: ["bhane", "bhanera", "bhaneko", "bhanne"],
  blocks: [
    { p: "Several small English words, “if”, “that”, “called”, “means”, come out in Nepali as forms of <b>bhannu</b>, to say. The forms look alike, so learners lose track of which does which job. This is the map; the chapters <i>If</i> and <i>Reported speech</i> have the details." },
    { table: { head: ["Form", "Job", "Example"], rows: [
      ["<b>bhane</b>", "after a past verb: if (chapter <i>If</i>); after a noun: as for, on the other hand", "paani paryo <b>bhane</b> · ma <b>bhane</b> chiyaa khaanchhu"],
      ["<b>bhanera</b>", "closes a quote or a thought before the next verb: saying, thinking, intending", "dhilo hunchhu <b>bhanera</b> phon garen"],
      ["<b>bhaneko</b>", "what someone said; <b>X bhaneko</b> = what X means", "tapaainle <b>bhaneko</b> kuraa · dashain <b>bhaneko</b> ke ho?"],
      ["<b>bhanne</b>", "before a noun: called, named; the claim or news that", "raam <b>bhanne</b> maanchhe · u aaunchha <b>bhanne</b> kuraa"]
    ] } },
    { rule: "Look at what follows. A verb → <b>bhanera</b>. A noun it names or labels → <b>bhanne</b>; something actually said → <b>bhaneko</b>. A condition, or a contrast after a noun → <b>bhane</b>." },
    { ex: [
      { ne: "तपाईं कफी खानुहुन्छ? म भने चिया खान्छु।", ro: "tapaain kaphi khaanuhunchha? ma bhane chiyaa khaanchhu.", en: "You're having coffee? I'll have tea, though.", note: "bhane after a noun = as for." },
      { ne: "बस छुट्छ भनेर म चाँडै निस्केँ।", ro: "bas chhutchha bhanera ma chaandai nisken.", en: "I left early, thinking I'd miss the bus." },
      { ne: "दशैँ भनेको के हो?", ro: "dashain bhaneko ke ho?", en: "What is Dashain?" },
      { ne: "राम भन्ने मान्छेलाई चिन्नुहुन्छ?", ro: "raam bhanne maanchhelaai chinnuhunchha?", en: "Do you know a man called Ram?" }
    ] },
    { warn: "The classic slip is <b>bhanera</b> before a noun: <b>raam bhanera maanchhe</b> is wrong; before a noun it must be <b>bhanne</b>. The reverse also happens: a quote that leads into a verb ends in <b>bhanera</b> (or the verb itself), never <b>bhanne</b>: <b>aaunchhu bhanera gayo</b> = he left saying he'd come." }
  ],
  quiz: [
    { q: "“A man called Hari came.”", a: "hari bhanne maanchhe aayo", o: ["hari bhanera maanchhe aayo", "hari bhane maanchhe aayo"], why: "Naming, before a noun → <b>bhanne</b>." },
    { q: "“What does ‘jutho’ mean?”", a: "jutho bhaneko ke ho?", o: ["jutho bhanera ke ho?", "jutho bhane ke ho?"], why: "<b>X bhaneko ke ho?</b> = what is X, what does X mean?" },
    { q: "“I came early because I thought it would be crowded.”", a: "bhid hunchha bhanera chaandai aaen", o: ["bhid hunchha bhanne chaandai aaen", "bhid hunchha bhaneko chaandai aaen"], why: "A thought leading into the next verb → <b>bhanera</b>." },
    { q: "Everyone orders tea; you'd rather have coffee. “I'll have coffee, though.”", a: "ma bhane kaphi khaanchhu", o: ["ma bhanera kaphi khaanchhu", "ma bhanne kaphi khaanchhu"], why: "After a noun or pronoun, <b>bhane</b> = as for, on the other hand." }
  ] },

{ id: "w-happy", level: "B1", unit: "emotion", title: "Happy, fun, content: khusi, ramaailo, majaa, sukhi", sub: "khusi (glad: your mood), ramaailo (enjoyable: the event), majaa (the fun you have), sukhi (content in life)",
  words: ["khusi", "ramaailo", "majaa", "sukhi"],
  blocks: [
    { p: "English uses “happy” and “fun” loosely. Nepali separates how <i>you</i> feel from what the <i>event</i> was like." },
    { table: { head: ["Word", "Describes", "Example"], rows: [
      ["<b>khusi</b>", "a person's mood: glad, pleased", "ma <b>khusi</b> chhu · bhetera <b>khusi</b> laagyo"],
      ["<b>ramaailo</b>", "the thing: an event, a place, a time that is enjoyable", "yaatraa <b>ramaailo</b> bhayo"],
      ["<b>majaa</b>", "the fun you get out of it, with aaunu or garnu", "<b>majaa</b> aayo (I enjoyed it) · <b>majaa</b> garnus"],
      ["<b>sukhi</b>", "a life or a family: content, comfortable over time", "<b>sukhi</b> pariwaar"]
    ] } },
    { rule: "Is it about you (<b>khusi</b>), about the event (<b>ramaailo</b>), or about the fun you had (<b>majaa aayo</b>)? Use <b>sukhi</b> for a whole life, not a mood." },
    { ex: [
      { ne: "नतिजा सुनेर म धेरै खुसी भएँ।", ro: "natijaa sunera ma dherai khusi bhaen.", en: "I was very happy to hear the result." },
      { ne: "हिजोको भोज रमाइलो भयो।", ro: "hijoko bhoj ramaailo bhayo.", en: "Yesterday's party was fun." },
      { ne: "पोखरामा धेरै मजा आयो।", ro: "pokharaamaa dherai majaa aayo.", en: "We had a great time in Pokhara." },
      { ne: "उनीहरू गरिब छन्, तर सुखी छन्।", ro: "uniharu garib chhan, tara sukhi chhan.", en: "They are poor, but content." }
    ] },
    { warn: "<b>ma ramaailo chhu</b> describes you, not your evening: it sounds like “I am an entertaining person”. Say <b>malaai ramaailo laagyo</b> or <b>majaa aayo</b>. The opposites: <b>dukhi</b> (unhappy: a person), <b>naramaailo</b> (unpleasant, a pity: <b>naramaailo laagyo</b> = I felt bad about it), <b>dikka laagyo</b> (I got bored or fed up)." }
  ],
  quiz: [
    { q: "After a trek: “I really enjoyed it.”", a: "dherai majaa aayo", o: ["ma dherai ramaailo bhaen", "ma dherai majaa chhu"], why: "The fun you had → <b>majaa aayo</b>. <b>ma ramaailo bhaen</b> = I became entertaining." },
    { q: "“The festival was fun.”", a: "chaad ramaailo bhayo", o: ["chaad khusi bhayo", "chaad sukhi bhayo"], why: "Describing the event → <b>ramaailo</b>. A festival can't be in a mood." },
    { q: "“I'm very happy today.”", a: "aaja ma dherai khusi chhu", o: ["aaja ma dherai ramaailo chhu", "aaja malaai dherai sukhi chha"], why: "Your mood → <b>khusi</b>." },
    { q: "“They are poor, but content.”", a: "garib chhan, tara sukhi chhan", o: ["garib chhan, tara ramaailo chhan", "garib chhan, tara majaa aayo"], why: "Contentment in life → <b>sukhi</b> (<b>khusi</b> also works). <b>ramaailo chhan</b> = they are fun to be with." }
  ] },

{ id: "w-people", level: "B1", unit: "news", title: "People: maanchhe, maanis, byakti, janataa", sub: "maanchhe (person: everyday), maanis (person: written), byakti (an individual: official), janataa (the public), janaa (the counter)",
  words: ["maanchhe", "maanis", "byakti", "janataa"],
  blocks: [
    { p: "English “people” is a person in the plural, the public, and a counted group. In the news you will meet several Nepali words where conversation uses one." },
    { table: { head: ["Word", "Use it for", "Example"], rows: [
      ["<b>maanchhe</b>", "person, people: the everyday spoken word", "bajaarmaa dherai <b>maanchhe</b> thie"],
      ["<b>maanis</b>", "the same, in writing, speeches and the news", "dherai <b>maanis</b> bidesh gae"],
      ["<b>byakti</b>", "an individual, in official or news language", "ek janaa <b>byakti</b> pakrau pare"],
      ["<b>janataa</b>", "the public, a country's people as a body", "nepaali <b>janataa</b>"],
      ["<b>janaa</b>", "the counter after a number or kati, with no -haru (chapter <i>Counting</i>)", "tin <b>janaa</b> (maanchhe)"]
    ] } },
    { rule: "Speaking → <b>maanchhe</b>; reading → <b>maanis</b>, or <b>byakti</b> for one individual. The nation as a whole → <b>janataa</b>. After a number → <b>janaa</b>." },
    { ex: [
      { ne: "त्यो मान्छे को हो?", ro: "tyo maanchhe ko ho?", en: "Who is that man?" },
      { ne: "बाढीमा दुई जना मानिसको मृत्यु भयो।", ro: "baadhimaa dui janaa maanisko mrityu bhayo.", en: "Two people died in the flood." },
      { ne: "सरकारले जनताको कुरा सुन्नुपर्छ।", ro: "sarkaarle janataako kuraa sunnuparchha.", en: "The government must listen to the people." },
      { ne: "कति जना आउनुहुन्छ?", ro: "kati janaa aaunuhunchha?", en: "How many people are coming?" }
    ] },
    { warn: "<b>tin maanchheharu</b> carries the English plural over: after a number Nepali uses the counter and no plural, <b>tin janaa maanchhe</b> or just <b>tin janaa</b>. And <b>janataa</b> is never one person or a small group: the people at a party are <b>maanchhe</b>, the people of Nepal are <b>janataa</b>." }
  ],
  quiz: [
    { q: "A news report: “Five people were injured in the accident.”", a: "durghatanaamaa paanch janaa ghaaite bhae", o: ["durghatanaamaa paanch maanchheharu ghaaite bhae", "durghatanaamaa paanch janataa ghaaite bhae"], why: "After a number → <b>janaa</b>, no -haru. <b>janataa</b> is the whole public." },
    { q: "In a speech: “The government must listen to the people.”", a: "sarkaarle janataako kuraa sunnuparchha", o: ["sarkaarle janaako kuraa sunnuparchha", "sarkaarle byaktiko kuraa sunnuparchha"], why: "The people as citizens → <b>janataa</b>. <b>janaa</b> only counts; <b>byakti</b> is one individual." },
    { q: "Chatting with a friend: “Who is that man?”", a: "tyo maanchhe ko ho?", o: ["tyo janataa ko ho?", "tyo janaa ko ho?"], why: "One person, in speech → <b>maanchhe</b>." },
    { q: "“How many people are coming to the meeting?”", a: "baithakmaa kati janaa aaunuhunchha?", o: ["baithakmaa kati maanchheharu aaunuhunchha?", "baithakmaa kati janataa aaunuhunchha?"], why: "Counting people → <b>kati janaa</b>." }
  ] },

/* ---------- B2 ---------- */
{ id: "w-finish", level: "B2", unit: "b2favour", title: "Finish, be over, run out: saknu, sakinu, siddhinu, puraa garnu", sub: "saknu (finish something), sakinu (be over, run out), siddhinu (be used up), puraa garnu (complete in full), -isaknu (already)",
  words: ["-isaken", "-isakyo", "sakiepachhi"],
  blocks: [
    { p: "English “finish” is one verb whether you finish the work or the work finishes. Nepali splits the two, and it uses the same root <b>saknu</b> for “can”, which is where learners slip." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>saknu</b>", "you finish something: it needs an object, and <b>-le</b> in the past", "maile kaam <b>saken</b>"],
      ["<b>sakinu</b>", "it is over, or it has run out, by itself", "baithak <b>sakiyo</b> · paisaa <b>sakiyo</b>"],
      ["<b>siddhinu</b>", "be used up, come to an end, often for good", "chini <b>siddhiyo</b> · chaamal <b>siddhiyo</b>"],
      ["<b>puraa garnu</b>", "complete in full: a course, a form, a number of years", "padhaai <b>puraa garen</b>"],
      ["verb + <b>-isaknu</b>", "already: the helper that says the action is complete", "khaa<b>isaken</b> · ga<b>isakyo</b>"]
    ] } },
    { rule: "You finish it → <b>saknu</b>. It finishes or runs out → <b>sakinu</b> or <b>siddhinu</b>. After <b>-na</b>, saknu means “can” (<b>garna sakchhu</b>); after <b>-i</b>, it means “already” (<b>garisaken</b>)." },
    { ex: [
      { ne: "मैले गृहकार्य सकेँ।", ro: "maile grihakaarya saken.", en: "I've finished my homework." },
      { ne: "बैठक कति बजे सकिन्छ?", ro: "baithak kati baje sakinchha?", en: "What time does the meeting finish?" },
      { ne: "ग्यास सिद्धियो, नयाँ सिलिन्डर ल्याउनुपर्छ।", ro: "gyaas siddhiyo, nayaan silindar lyaaunuparchha.", en: "The gas has run out; we need to get a new cylinder." },
      { ne: "उसले पढाइ पूरा गरिसक्यो।", ro: "usle padhaai puraa garisakyo.", en: "He has already completed his studies." }
    ] },
    { warn: "For the plain statement “the work is finished”, with no doer in mind, say <b>kaam sakiyo</b>. <b>kaam sakyo?</b> is heard too, but it asks whether someone has finished it. Keep the two helpers apart as well: <b>jaana sakina</b> = I couldn't go, <b>gaisaken</b> = I've already gone. In shops, <b>sakiyo</b> is the usual “sold out, none left”." }
  ],
  quiz: [
    { q: "You hand in a report. “I've finished the work.”", a: "maile kaam saken", o: ["maile kaam sakiyo", "ma kaam sakinchhu"], why: "You are the doer and there is an object → <b>saknu</b> with <b>maile</b>: <b>maile kaam saken</b>." },
    { q: "At a shop: “The milk has run out.”", a: "dudh sakiyo", o: ["dudh sakyo", "dudhle sakyo"], why: "Nobody finishes it; it is simply gone → <b>sakinu</b>: <b>dudh sakiyo</b>." },
    { q: "Your host offers lunch. “I've already eaten.”", a: "maile khaaisaken", o: ["maile khaana saken", "ma khaana sakiyo"], why: "“Already” is <b>-isaknu</b> on the verb stem: <b>khaaisaken</b>. <b>khaana saken</b> would mean “I was able to eat”." },
    { q: "“What time does the film finish?”", a: "philim kati baje sakinchha?", o: ["philim kati baje sakaaunchha?", "philim kati baje puraa garchha?"], why: "The film ends by itself → <b>sakinchha</b>. The other two need someone who finishes something." }
  ] },

{ id: "w-help", level: "B2", unit: "b2favour", title: "“Help”: maddat, sahayog, sahaayataa, guhaar", sub: "maddat (a helping hand), sahayog (support, cooperation), sahaayataa (aid), guhaar (a cry for help), -idinu (do it for me)",
  words: ["maddat", "sahayog", "-idinuhos"],
  blocks: [
    { p: "English uses “help” for a hand with a suitcase, for cooperation at work and for emergency aid. Nepali has a word for each, and for small favours it often needs no word at all: the verb takes <b>-idinu</b>." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>maddat</b> garnu", "everyday help, one person to another", "malaai <b>maddat</b> garnuhos"],
      ["<b>sahayog</b> garnu", "support, cooperation, a contribution; a little formal, and the word used in thanks", "<b>sahayog</b>ko laagi dhanyabaad"],
      ["<b>sahaayataa</b>", "aid and assistance from an organisation or a government", "aarthik <b>sahaayataa</b> (financial aid)"],
      ["<b>guhaar</b>", "a cry for help in danger", "<b>guhaar! guhaar!</b>"],
      ["verb + <b>-idinu</b>", "a small favour: no “help” word needed", "jholaa bok<b>idinuhos</b> na"]
    ] } },
    { rule: "A favour: put <b>-idinu</b> on the verb. Help in general: <b>maddat</b> in conversation, <b>sahayog</b> when it is formal or when you thank. Aid from an institution: <b>sahaayataa</b>." },
    { ex: [
      { ne: "मलाई अलिकति मद्दत गर्नुहुन्छ?", ro: "malaai alikati maddat garnuhunchha?", en: "Could you give me a bit of help?" },
      { ne: "तपाईंको सहयोगका लागि धन्यवाद।", ro: "tapaainko sahayogkaa laagi dhanyabaad.", en: "Thank you for your support." },
      { ne: "भूकम्पपछि धेरै देशले सहायता पठाए।", ro: "bhukampapachhi dherai deshle sahaayataa pathaae.", en: "After the earthquake many countries sent aid." },
      { ne: "यो झोला बोकिदिनुहोस् न।", ro: "yo jholaa bokidinuhos na.", en: "Could you carry this bag for me?" }
    ] },
    { warn: "The person you help takes <b>-laai</b>: <b>uslaai maddat garen</b> = I helped him. English “Can I help you?” is usually just <b>ke chaahiyo?</b> (what do you need?) or <b>ma garidiun?</b> (shall I do it for you?). Keep <b>guhaar</b> for real danger: shouted over a heavy bag, it would alarm the street." }
  ],
  quiz: [
    { q: "Your suitcase is heavy and a young man is standing nearby. “Could you carry this for me?”", a: "yo bokidinuhos na", o: ["yo guhaar garnuhos na", "yo sahaayataa boknuhos na"], why: "A small favour needs no “help” word: add <b>-idinu</b> to the verb: <b>bokidinuhos</b>." },
    { q: "Closing a formal email: “Thank you for your support.”", a: "sahayogko laagi dhanyabaad", o: ["guhaarko laagi dhanyabaad", "bokidinuko laagi dhanyabaad"], why: "In thanks and in formal settings the word is <b>sahayog</b>." },
    { q: "A news line: “The government gave aid to the flood victims.”", a: "sarkaarle baadhipiditlaai sahaayataa diyo", o: ["sarkaarle baadhipiditlaai guhaar diyo", "sarkaarle baadhipiditlaai maddat bokyo"], why: "Institutional aid is <b>sahaayataa</b> (also <b>raahat</b>, relief)." },
    { q: "Someone has fallen into the river. What do people shout?", a: "guhaar! guhaar!", o: ["sahayog! sahayog!", "sahaayataa! sahaayataa!"], why: "<b>guhaar</b> is the cry for help in danger." }
  ] },

{ id: "w-make", level: "B2", unit: "b2service", title: "Make, repair, prepare, sort out: banaaunu, marmat garnu, tayaar garnu, milaaunu", sub: "banaaunu (make, build, cook, repair), marmat garnu (repair: formal), tayaar garnu (get ready), milaaunu (adjust, tidy, arrange)",
  words: ["banaa-", "milaa-", "marmat"],
  blocks: [
    { p: "<b>banaaunu</b> is one of the busiest verbs in Nepali: you “make” tea, a house, a plan, a passport and a broken watch. English needs make, build, cook, get issued and repair. Three neighbours take over where banaaunu stops." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>banaaunu</b>", "make, build, cook, have issued, and repair", "chiyaa <b>banaaunu</b> · ghar <b>banaaunu</b> · ghadi <b>banaaunu</b>"],
      ["<b>marmat garnu</b>", "repair: the word on signs and bills", "saaikal <b>marmat</b> · baato <b>marmat</b>"],
      ["<b>tayaar garnu</b> / <b>paarnu</b>", "get something ready, prepare", "kaagaj <b>tayaar garnu</b>"],
      ["<b>milaaunu</b>", "adjust, tidy, arrange, make fit; also settle a price or a quarrel", "kothaa <b>milaaunu</b> · samaya <b>milaaunu</b>"],
      ["<b>bannu</b>", "be made, be ready, become: no doer", "khaanaa <b>banyo</b> · u daaktar <b>banyo</b>"]
    ] } },
    { rule: "Creating or fixing → <b>banaaunu</b>. Putting in order what already exists → <b>milaaunu</b>. Getting ready → <b>tayaar garnu</b>. When someone else does the fixing, you <b>banaauna dinu</b>: give it to be repaired." },
    { ex: [
      { ne: "आमाले खाना बनाउँदै हुनुहुन्छ।", ro: "aamaale khaanaa banaaundai hunuhunchha.", en: "Mother is cooking." },
      { ne: "मैले मोबाइल बनाउन दिएको छु।", ro: "maile mobaail banaauna dieko chhu.", en: "I've taken my phone in for repair." },
      { ne: "कोठा मिलाएर राख्नुहोस्।", ro: "kothaa milaaera raakhnuhos.", en: "Please tidy the room." },
      { ne: "खाना तयार भयो, आउनुहोस्।", ro: "khaanaa tayaar bhayo, aaunuhos.", en: "The food is ready, come." }
    ] },
    { warn: "English “make” + person (“he made me wait”) is never <b>banaaunu</b>: use the causative (<b>kuraayo</b>) or <b>lagaaunu</b>. And “make a mistake”, “make a phone call”, “make a decision” all take <b>garnu</b>: <b>galti garnu</b>, <b>phon garnu</b>, <b>nirnaya garnu</b>." }
  ],
  quiz: [
    { q: "At a repair stall, handing over your watch: “Please repair this watch.”", a: "yo ghadi banaaidinuhos", o: ["yo ghadi milaaera garnuhos", "yo ghadi tayaar hunuhos"], why: "Repairing is <b>banaaunu</b> (or <b>marmat garnu</b>); <b>-idinuhos</b> makes it a favour." },
    { q: "The meeting clashes with your class. “Let's find a time that fits.”", a: "samaya milaaun", o: ["samaya banaaun", "samaya marmat garaun"], why: "Arranging things so that they fit is <b>milaaunu</b>." },
    { q: "“I made a mistake.”", a: "maile galti garen", o: ["maile galti banaaen", "maile galti milaaen"], why: "Mistakes, calls and decisions take <b>garnu</b>, not banaaunu." },
    { q: "You come home hungry. “Is the food ready?”", a: "khaanaa tayaar bhayo?", o: ["khaanaa marmat bhayo?", "khaanaa milaayo?"], why: "Ready = <b>tayaar</b>. <b>khaanaa banyo?</b> works too." }
  ] },

{ id: "w-wait", level: "B2", unit: "b2service", title: "Wait, hold on, keep waiting: kurnu, parkhanu, ek chhin, kuraaunu", sub: "kurnu (wait for), parkhanu (wait, hold on), ek chhin (just a moment), kuraaunu (keep someone waiting), pratikshaa garnu (formal)",
  words: ["kuraayo", "kurnuhos", "kurdai", "parkha-"],
  blocks: [
    { p: "“Wait” looks simple, but Nepali separates waiting for someone (<b>kurnu</b>), holding on a moment (<b>parkhanu</b>, <b>ek chhin</b>) and making someone wait (<b>kuraaunu</b>). The last one looks just like the noun <b>kuraa</b> (talk, matter): only the sentence tells them apart." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>kurnu</b>", "wait for a person or a thing; a person awaited takes <b>-laai</b>", "ma tapaainlaai <b>kurdai</b> chhu"],
      ["<b>parkhanu</b>", "wait, hold on; common as a request", "ek chhin <b>parkhanuhos</b>"],
      ["<b>ek chhin</b>", "“just a moment”, on its own", "<b>ek chhin</b> hai"],
      ["<b>kuraaunu</b>", "keep someone waiting: the causative of kurnu", "usle malaai <b>kuraayo</b>"],
      ["<b>pratikshaa garnu</b>", "await: writing and announcements", "kripayaa <b>pratikshaa</b> garnuhos"]
    ] } },
    { rule: "Waiting for someone → <b>kurnu</b>. Asking someone to hold on → <b>ek chhin</b> or <b>parkhanuhos</b>. Making someone wait → <b>kuraaunu</b>." },
    { ex: [
      { ne: "म बस कुर्दै छु।", ro: "ma bas kurdai chhu.", en: "I'm waiting for the bus." },
      { ne: "एक छिन पर्खनुहोस्, म आइहालेँ।", ro: "ek chhin parkhanuhos, ma aaihaalen.", en: "Hold on a moment, I'll be right there." },
      { ne: "कुराएकोमा माफ गर्नुहोस्।", ro: "kuraaekomaa maaf garnuhos.", en: "Sorry to have kept you waiting." },
      { ne: "म तपाईंलाई गेटमा कुर्छु।", ro: "ma tapaainlaai getmaa kurchhu.", en: "I'll wait for you at the gate." }
    ] },
    { warn: "<b>kuraa</b> (talk, thing) and <b>kuraaunu</b> (make wait) only look alike: <b>usle kuraa garyo</b> = he talked, <b>usle kuraayo</b> = he kept me waiting. On the phone, “hold on” is <b>ek chhin hai</b>. A bare <b>parkha!</b> is a blunt “wait!” for children and close friends." }
  ],
  quiz: [
    { q: "On the phone, you need to fetch a pen. “Hold on a moment.”", a: "ek chhin hai", o: ["ek chhin kuraa hai", "ek chhin kuraaunuhos"], why: "<b>ek chhin</b> alone does the job; <b>hai</b> softens it." },
    { q: "You arrive twenty minutes late. “Sorry I kept you waiting.”", a: "kuraaekomaa maaf garnuhos", o: ["kurekomaa maaf garnuhos", "kuraa garekomaa maaf garnuhos"], why: "You <i>made</i> them wait → the causative <b>kuraaunu</b>. <b>kurekomaa</b> would mean “for having waited”." },
    { q: "“I'm waiting for my friend.”", a: "ma saathilaai kurdai chhu", o: ["ma saathilaai kuraaundai chhu", "ma saathiko kuraa gardai chhu"], why: "You are the one waiting → <b>kurnu</b>, and the person awaited takes <b>-laai</b>." },
    { q: "A sign at a bank counter: “Please wait.”", a: "kripayaa pratikshaa garnuhos", o: ["kripayaa kuraaunuhos", "kripayaa kuraa garnuhos"], why: "Notices prefer the formal <b>pratikshaa garnu</b>; in speech you would hear <b>parkhanuhos</b>." }
  ] },

{ id: "w-onoff", level: "B2", unit: "b2rules", title: "Open, close, on, off: kholnu, banda garnu, baalnu, nibhaaunu", sub: "kholnu / khulnu (open), banda garnu / hunu (close, switch off, be closed), baalnu (light, switch on a lamp), nibhaaunu (put out), chalaaunu (run a machine)",
  words: ["banda", "baalnu", "nibhaa-"],
  blocks: [
    { p: "English switches things “on” and “off” and opens and closes them. Nepali opens taps and fans, lights lamps, and uses <b>banda</b> for shut, switched off, closed for the day and on strike." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>kholnu</b> / <b>khulnu</b>", "open something / be open: doors, shops, taps, bottles, also fans and the TV", "dhokaa <b>kholnuhos</b> · pasal <b>khulyo</b>"],
      ["<b>banda garnu</b> / <b>banda hunu</b>", "close, switch off / be closed, be off", "mobaail <b>banda garnuhos</b> · baato <b>banda chha</b>"],
      ["<b>baalnu</b> / <b>balnu</b>", "light, switch on (lamps, fire, stove) / be lit", "batti <b>baalnuhos</b>"],
      ["<b>nibhaaunu</b> / <b>nibhnu</b>", "put out (lamp, fire, candle) / go out", "batti <b>nibhaaunuhos</b>"],
      ["<b>chalaaunu</b> / <b>chalnu</b>", "run, operate / be running, work", "pankhaa <b>chalaaunuhos</b> · net <b>chaldaina</b>"]
    ] } },
    { rule: "Lights and fire: <b>baalnu</b> on, <b>nibhaaunu</b> off. Machines: <b>kholnu</b> or <b>chalaaunu</b> on, <b>banda garnu</b> off. Each verb has a twin with no doer: <b>khulyo</b>, <b>banda bhayo</b>, <b>balyo</b>, <b>nibhyo</b>." },
    { ex: [
      { ne: "बत्ती बालिदिनुहोस् न।", ro: "batti baalidinuhos na.", en: "Could you switch the light on?" },
      { ne: "सुत्नुअघि बत्ती निभाउनुहोस्।", ro: "sutnuaghi batti nibhaaunuhos.", en: "Turn the light off before you go to sleep." },
      { ne: "यो पसल कति बजे खुल्छ?", ro: "yo pasal kati baje khulchha?", en: "What time does this shop open?" },
      { ne: "आज नेपाल बन्द छ, गाडी चल्दैन।", ro: "aaja nepaal banda chha, gaadi chaldaina.", en: "There's a general strike today; no vehicles are running." }
    ] },
    { warn: "Lights prefer <b>baalnu</b> and <b>nibhaaunu</b>: <b>batti kholnu</b> sounds foreign, and <b>batti banda garnu</b>, though heard, is less natural. <b>banda</b> is also a noun: a <b>banda</b> is a strike that shuts shops and roads. When the power itself is cut, say <b>batti gayo</b> (the light went), and <b>batti aayo</b> when it comes back." }
  ],
  quiz: [
    { q: "It is getting dark in the room. “Please switch on the light.”", a: "batti baalnuhos", o: ["batti kholnuhos", "batti chalaaera garnuhos"], why: "Lamps and fire are lit with <b>baalnu</b>." },
    { q: "Before the film: “Please switch off your phones.”", a: "mobaail banda garnuhos", o: ["mobaail nibhaaunuhos", "mobaail baalnuhos"], why: "Machines go off with <b>banda garnu</b>; <b>nibhaaunu</b> is for flames and lamps." },
    { q: "“The shop is closed today.”", a: "aaja pasal banda chha", o: ["aaja pasal nibheko chha", "aaja pasal banda garchha"], why: "A state with no doer → <b>banda chha</b>." },
    { q: "The power is cut. What do people say?", a: "batti gayo", o: ["batti banda garyo", "batti khulyo"], why: "A power cut is <b>batti gayo</b>, literally “the light went”." }
  ] },

{ id: "w-trouble", level: "B2", unit: "b2feel", title: "Problem, trouble, hassle: samasyaa, dukha, jhanjhat, aapat", sub: "samasyaa (a problem to solve), dukha (hardship; trouble given or taken), jhanjhat (hassle), aapat (a real fix), gaahro (difficult)",
  words: ["samasyaa", "jhanjhat", "aapat"],
  blocks: [
    { p: "“I have a problem”, “sorry to trouble you”, “what a hassle”, “I'm in trouble”: four different Nepali words, and the verb is usually <b>parnu</b> (to befall) or <b>hunu</b>, not “have”." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>samasyaa</b>", "a problem that needs a solution", "<b>samasyaa</b> paryo · <b>samasyaa</b> chhaina"],
      ["<b>dukha</b>", "hardship, suffering; the trouble you give someone", "<b>dukha</b> dien, maaf garnuhos"],
      ["<b>jhanjhat</b>", "hassle, bother, red tape", "bhisaako <b>jhanjhat</b>"],
      ["<b>aapat</b>", "a real fix, an emergency", "<b>aapat</b> paryo"],
      ["<b>gaahro</b>", "difficult; with hunu or parnu: to find it hard", "malaai <b>gaahro</b> bhayo"]
    ] } },
    { rule: "Something to solve → <b>samasyaa</b>. Something to put up with → <b>dukha</b> or <b>jhanjhat</b>. Something urgent → <b>aapat</b>. Trouble “falls” on you: <b>malaai … paryo</b>." },
    { ex: [
      { ne: "केही समस्या परे मलाई फोन गर्नुहोस्।", ro: "kehi samasyaa pare malaai phon garnuhos.", en: "If you have any problem, call me." },
      { ne: "तपाईंलाई दुःख दिएँ, माफ गर्नुहोस्।", ro: "tapaainlaai dukha dien, maaf garnuhos.", en: "Sorry to have troubled you." },
      { ne: "कागजपत्र बनाउन धेरै झन्झट छ।", ro: "kaagajpatra banaauna dherai jhanjhat chha.", en: "Getting the paperwork done is a real hassle." },
      { ne: "आपत पर्दा साथी चिनिन्छ।", ro: "aapat pardaa saathi chininchha.", en: "You find out who your friends are when trouble strikes." }
    ] },
    { warn: "<b>mero samasyaa chha</b> is possible, but when something has just gone wrong Nepalis say <b>malaai samasyaa paryo</b>. <b>dukha</b> is also sorrow: <b>dukha laagyo</b> = I felt sad. And “no problem!” is <b>kehi chhaina</b> or <b>samasyaa chhaina</b>, never <b>dukha chhaina</b>." }
  ],
  quiz: [
    { q: "You phone a colleague late at night for a favour, then say: “Sorry to trouble you.”", a: "dukha dien, maaf garnuhos", o: ["samasyaa dien, maaf garnuhos", "aapat dien, maaf garnuhos"], why: "The trouble you put someone to is <b>dukha</b>: <b>dukha dinu</b>." },
    { q: "Your flight is cancelled and your visa runs out tomorrow. “I'm in real trouble.”", a: "malaai aapat paryo", o: ["malaai jhanjhat laagyo", "ma dukha chhu"], why: "An urgent fix is <b>aapat</b>, and it “falls” on you: <b>aapat paryo</b>." },
    { q: "“Extending the visa is such a hassle.”", a: "bhisaa thapna dherai jhanjhat chha", o: ["bhisaa thapna dherai aapat chha", "bhisaa thapna dherai dukha dinchhu"], why: "Tedious bother and red tape → <b>jhanjhat</b>." },
    { q: "The receptionist asks whether the room is all right. “No problem at all.”", a: "kehi samasyaa chhaina", o: ["kehi dukha dina", "kehi aapat pardaina"], why: "“No problem” is <b>samasyaa chhaina</b> or simply <b>kehi chhaina</b>." }
  ] },

{ id: "w-nothanks", level: "B2", unit: "b2respect", title: "“No, thank you”: pardaina, bhaihaalyo, pugyo, kashta nagarnuhos", sub: "pardaina (no need), bhaihaalyo (I'm fine, leave it), pugyo (that's enough), kashta nagarnuhos (please don't trouble yourself)",
  words: ["kashta", "pardaina", "bhaihaalyo"],
  blocks: [
    { p: "Hosts in Nepal offer again and again, and a bare <b>hoina</b> or <b>chaahindaina</b> lands like a slap. There is no direct “no, thank you”: you say there is no need, or that you have had enough, and you say it warmly." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>pardaina</b>", "no need: the standard polite refusal of an offer", "<b>pardaina</b>, dhanyabaad"],
      ["<b>bhaihaalyo</b> / <b>bhayo</b>", "I'm fine, that will do, leave it", "<b>bhaihaalyo</b>, ma aaphain garchhu"],
      ["<b>pugyo</b>", "enough: for food and drink being served", "<b>pugyo, pugyo</b>, dherai bhayo"],
      ["<b>kashta nagarnuhos</b>", "please don't go to any trouble: to an elder or a host", "<b>kashta nagarnuhos</b>, ma thikai chhu"],
      ["<b>pachhi</b>", "later: refusing without refusing", "<b>pachhi</b> khaanchhu"]
    ] } },
    { rule: "Refuse the need, not the person: <b>pardaina</b> for offers, <b>pugyo</b> for second helpings, <b>kashta nagarnuhos</b> when someone is going out of their way. Expect to be asked again, and repeat it with a smile." },
    { ex: [
      { ne: "पर्दैन, म आफैँ बोक्छु।", ro: "pardaina, ma aaphain bokchhu.", en: "No need, I'll carry it myself." },
      { ne: "पुग्यो, पुग्यो, धेरै भयो।", ro: "pugyo, pugyo, dherai bhayo.", en: "That's enough, that's plenty." },
      { ne: "कष्ट नगर्नुहोस्, म ट्याक्सीमा जान्छु।", ro: "kashta nagarnuhos, ma tyaaksimaa jaanchhu.", en: "Please don't trouble yourself, I'll take a taxi." },
      { ne: "भइहाल्यो, चिया भर्खरै खाएँ।", ro: "bhaihaalyo, chiyaa bharkharai khaaen.", en: "I'm fine, I've only just had tea." }
    ] },
    { warn: "<b>malaai chaahindaina</b> (I don't want it) is for touts and street sellers, not for a host. A first <b>pardaina</b> is often heard as mere politeness, not as a real no: if you truly cannot eat more, cover your plate with your hand and say <b>saanchchai pugyo</b> (really, that's enough)." }
  ],
  quiz: [
    { q: "Your host lifts the ladle for a third helping of rice.", a: "pugyo, pugyo", o: ["chaahindaina", "hoina, nakhaane"], why: "For food being served, <b>pugyo</b> (enough) is the warm way to stop it." },
    { q: "An elderly neighbour starts getting up to make you tea. “Please don't trouble yourself.”", a: "kashta nagarnuhos", o: ["jhanjhat nagarnuhos", "dukha nadinuhos"], why: "<b>kashta</b> is the respectful word for trouble taken on your behalf. <b>dukha nadinuhos</b> would mean “don't make me suffer”." },
    { q: "A colleague offers to carry your laptop bag. “No need, thanks.”", a: "pardaina, dhanyabaad", o: ["pugyo, dhanyabaad", "hundaina, dhanyabaad"], why: "An offer of help is declined with <b>pardaina</b> (it isn't needed). <b>pugyo</b> is for quantities; <b>hundaina</b> means “it's not allowed”." },
    { q: "A street seller follows you with singing bowls. A firm but civil refusal:", a: "malaai chaahindaina", o: ["kashta nagarnuhos", "pugyo, pugyo"], why: "With sellers the plain <b>chaahindaina</b> (I don't need it) is right; the softer forms invite another try." }
  ] },

{ id: "w-fear", level: "B2", unit: "b2ideas", title: "Fear and worry: dar, chintaa, pir, traas, tanaab", sub: "dar (fear), chintaa (worry), pir (a care that weighs on you), traas (dread, terror), tanaab (stress)",
  words: ["dar", "chintaa", "tanaab"],
  blocks: [
    { p: "English says “I'm afraid I'll be late” for something closer to worry than to fear. Nepali keeps fear, worry and stress apart, and each takes its own verb." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>dar</b> laagnu", "fear of something: dogs, heights, exams", "malaai kukursanga <b>dar laagchha</b>"],
      ["<b>chintaa</b> garnu / laagnu", "worry about how something will turn out", "<b>chintaa</b> nagarnuhos"],
      ["<b>pir</b> garnu / parnu", "a care that weighs on the heart; homelier and warmer than chintaa", "<b>pir</b> nagara"],
      ["<b>traas</b>", "dread, terror: news and stories", "bhukampako <b>traas</b>"],
      ["<b>tanaab</b>", "stress, tension (many people just say <b>tension</b>)", "kaamko <b>tanaab</b>"]
    ] } },
    { rule: "Afraid <i>of</i> → <b>-sanga</b> or <b>-ko dar laagchha</b>. Worried <i>about</i> → <b>-ko chintaa</b> or <b>pir</b>. The polite “I'm afraid that…” is not fear at all: say <b>maaf garnuhos</b>." },
    { ex: [
      { ne: "मलाई उचाइसँग डर लाग्छ।", ro: "malaai uchaaisanga dar laagchha.", en: "I'm afraid of heights." },
      { ne: "चिन्ता नगर्नुहोस्, सबै ठिक हुन्छ।", ro: "chintaa nagarnuhos, sabai thik hunchha.", en: "Don't worry, everything will be fine." },
      { ne: "आमालाई छोराको पीर छ।", ro: "aamaalaai chhoraako pir chha.", en: "The mother is anxious about her son." },
      { ne: "आजकाल कामको तनाव धेरै छ।", ro: "aajakaal kaamko tanaab dherai chha.", en: "There's a lot of stress at work these days." }
    ] },
    { warn: "<b>ma daraaen</b> (I got scared) uses the verb <b>daraaunu</b>; <b>ma dar chhu</b> is not Nepali: fear “strikes” you, so the person takes <b>-laai</b>. What you fear takes <b>-sanga</b>, <b>-dekhi</b> or <b>-ko</b>: <b>saapsanga dar</b> or <b>saapko dar</b>, fear of snakes. And “I'm afraid I can't come” is simply <b>maaf garnuhos, ma aauna sakdina</b>." }
  ],
  quiz: [
    { q: "“I'm afraid of dogs.”", a: "malaai kukursanga dar laagchha", o: ["ma kukurko dar chhu", "malaai kukurko chintaa laagchha"], why: "Fear “strikes” you: <b>malaai … dar laagchha</b>, never <b>ma … dar chhu</b>. <b>chintaa</b> is worry, not fear." },
    { q: "Your friend has an exam tomorrow. “Don't worry.”", a: "chintaa nagara", o: ["dar nagara", "traas nagara"], why: "Worry about an outcome → <b>chintaa</b> (or the homelier <b>pir nagara</b>)." },
    { q: "Declining an invitation: “I'm afraid I can't come.”", a: "maaf garnuhos, ma aauna sakdina", o: ["malaai dar laagchha, ma aauna sakdina", "malaai traas chha, ma aauna sakdina"], why: "The polite English “I'm afraid” is an apology: <b>maaf garnuhos</b>." },
    { q: "“My job is very stressful.”", a: "mero kaammaa dherai tanaab chha", o: ["mero kaammaa dherai dar chha", "mero kaammaa dherai traas chha"], why: "Pressure from work is <b>tanaab</b>." }
  ] },

{ id: "w-way", level: "B2", unit: "b2ideas", title: "“Way”: baato, upaaya, tarikaa, yasari", sub: "baato (road, route), upaaya (a way out, a solution), tarikaa (method), kisim (kind), yasari (this way, like this)",
  words: ["upaaya", "tarikaa", "yasari"],
  blocks: [
    { p: "“Way” in English is a road, a method, a solution, a manner and a direction. Nepali has a separate word for each, and “this way” is usually not a noun at all." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>baato</b>", "road, path, route: the way you walk or drive", "pokharaa jaane <b>baato</b>"],
      ["<b>upaaya</b>", "a way out: a means, a solution", "arko <b>upaaya</b> chhaina"],
      ["<b>tarikaa</b>", "method, technique: how something is done", "pakaaune <b>tarikaa</b>"],
      ["<b>kisim</b> / <b>prakaar</b>", "kind, sort", "yo <b>kisimko</b> kaam"],
      ["<b>yasari</b> / <b>tyasari</b> · <b>yataa</b> / <b>utaa</b>", "“this way, that way” as manner · as direction", "<b>yasari</b> garnuhos · <b>yataa</b> aaunuhos"]
    ] } },
    { rule: "On the ground → <b>baato</b>. Out of a difficulty → <b>upaaya</b>. Step by step → <b>tarikaa</b>. “Like this” → <b>yasari</b>. “Over here” → <b>yataa</b>." },
    { ex: [
      { ne: "बसपार्क जाने बाटो कुन हो?", ro: "baspaark jaane baato kun ho?", en: "Which is the way to the bus park?" },
      { ne: "यो समस्याको कुनै उपाय छैन?", ro: "yo samasyaako kunai upaaya chhaina?", en: "Is there no way out of this problem?" },
      { ne: "मलाई मोमो बनाउने तरिका सिकाउनुहोस्।", ro: "malaai momo banaaune tarikaa sikaaunuhos.", en: "Teach me how to make momos." },
      { ne: "यसरी समात्नुहोस्।", ro: "yasari samaatnuhos.", en: "Hold it this way." }
    ] },
    { warn: "<b>baato</b> is a road first; for a method say <b>tarikaa</b> or <b>yasari</b>: <b>yo baatomaa garnuhos</b> for “do it this way” is wrong. “No way!” as surprise is <b>ho ra?</b>, and “by the way” is <b>ani</b> or <b>saanchchai</b> at the start of the sentence." }
  ],
  quiz: [
    { q: "Showing a child how to hold a pencil: “Do it this way.”", a: "yasari gara", o: ["yo baatomaa gara", "yo upaayamaa gara"], why: "“This way” as manner is the adverb <b>yasari</b>." },
    { q: "You have tried everything to get a ticket. “There's no other way.”", a: "arko upaaya chhaina", o: ["arko kisim chhaina", "arko yasari chhaina"], why: "A way out of a difficulty is an <b>upaaya</b>." },
    { q: "“Which is the way to the temple?”", a: "mandir jaane baato kun ho?", o: ["mandir jaane tarikaa kun ho?", "mandir jaane upaaya kun ho?"], why: "A route on the ground is <b>baato</b>." },
    { q: "Your friend's daal tastes better than yours. “Teach me your method.”", a: "malaai tapaainko tarikaa sikaaunuhos", o: ["malaai tapaainko baato sikaaunuhos", "malaai tapaainko kisim sikaaunuhos"], why: "How something is done, step by step, is the <b>tarikaa</b>." }
  ] },

/* ---------- C1 ---------- */
{ id: "w-mate", level: "C1", unit: "c1casual", title: "Friend, mate, guy: saathi, yaar, mitra, keto, keti", sub: "saathi (friend), yaar (mate: how friends address each other), mitra (friend: formal), keto / keti (guy, girl), saathibhaai (one's circle)",
  words: ["yaar", "mitra"],
  blocks: [
    { p: "<b>saathi</b> is the safe word for “friend” at any level. What changes at C1 is how friends <i>call</i> each other, and those words are fine among equals and rude one step up the age ladder." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>saathi</b>", "friend, companion; also colleague or comrade. Neutral, any age", "mero <b>saathi</b> · <b>saathi</b>haru"],
      ["<b>yaar</b>", "mate: said <i>to</i> a close friend your own age, usually at the end of the sentence", "ke chha <b>yaar</b>?"],
      ["<b>mitra</b>", "friend, in writing and speeches", "priya <b>mitra</b> (dear friend)"],
      ["<b>keto</b> / <b>keti</b>", "boy, guy / girl; also boyfriend / girlfriend", "tyo <b>keto</b> ko ho?"],
      ["<b>saathibhaai</b>", "one's circle of friends", "<b>saathibhaai</b>sanga ghumna gaen"]
    ] } },
    { rule: "Talking <i>about</i> a friend → <b>saathi</b>. Talking <i>to</i> a close friend your own age → <b>yaar</b>. Writing or a speech → <b>mitra</b>. To anyone older, go back to <b>daai</b>, <b>didi</b> or the name with <b>-ji</b>." },
    { ex: [
      { ne: "ऊ मेरो मिल्ने साथी हो।", ro: "u mero milne saathi ho.", en: "He's a close friend of mine." },
      { ne: "छोड् न यार, भइहाल्यो।", ro: "chhod na yaar, bhaihaalyo.", en: "Drop it, mate, never mind." },
      { ne: "त्यो केटो मेरो कक्षाको हो।", ro: "tyo keto mero kakshaako ho.", en: "That guy is from my class." },
      { ne: "प्रिय मित्र, नमस्कार।", ro: "priya mitra, namaskaar.", en: "Dear friend, greetings." }
    ] },
    { warn: "<b>yaar</b> to a teacher, a boss or anyone you call <b>tapaain</b> is a real misstep. <b>mero keti saathi</b> can be heard as “my girlfriend”; for a female friend say <b>mero saathi</b> and let the name do the rest. A close friend is a <b>milne saathi</b>, literally a friend you get on with." }
  ],
  quiz: [
    { q: "Introducing a colleague to your mother: “This is my friend.”", a: "uhaan mero saathi hunuhunchha", o: ["uhaan mero yaar hunuhunchha", "uhaan mero keto hunuhunchha"], why: "Talking <i>about</i> a friend, in any company → <b>saathi</b>." },
    { q: "Greeting an old classmate in the street: “What's up, mate?”", a: "ke chha yaar?", o: ["ke chha mitra?", "ke chha keto?"], why: "<b>yaar</b> is how close friends of the same age address each other." },
    { q: "Opening a letter to a friend abroad: “Dear friend,”", a: "priya mitra", o: ["priya yaar", "priya keto"], why: "Writing takes the formal <b>mitra</b>." },
    { q: "Your professor, twenty years older, asks how you are. Which answer fits?", a: "thik chha sar, tapaainlaai kasto chha?", o: ["thik chha yaar, timilaai kasto chha?", "khaasai kehi chhaina yaar"], why: "<b>yaar</b> and <b>timi</b> are for equals; an older person gets a title and <b>tapaain</b>." }
  ] },

{ id: "w-pardon", level: "C1", unit: "c1casual", title: "“What did you say?”, from polite to street: hajur?, ke bhannubhayo?, ke re?, ke bhanyaa?", sub: "hajur? (pardon?), ke bhannubhayo? (what did you say?), ke re? (what was that?), ke bhanyaa? (casual), haina? (hang on, what?)",
  words: ["bhanyaa"],
  blocks: [
    { p: "Asking someone to repeat is where register shows first. The same question runs from one respectful word to a clipped street form, and the wrong one can sound cold or cheeky." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>hajur?</b>", "pardon? The safest: to anyone, above all to elders", "<b>hajur?</b> pheri bhannuhos na"],
      ["<b>ke bhannubhayo?</b>", "what did you say? Polite and complete", "maaf garnuhos, <b>ke bhannubhayo?</b>"],
      ["<b>ke re?</b>", "what was that? Neutral among equals", "<b>ke re?</b> maile sunina"],
      ["<b>ke bhanyaa?</b>", "what d'you say? Friends only: short for <b>ke bhaneko?</b>", "<b>ke bhanyaa</b> timile?"],
      ["<b>haina?</b> / <b>e?</b>", "hang on, what? Surprise more than a question", "<b>haina</b>, ke bho?"]
    ] } },
    { rule: "Up the ladder: <b>hajur?</b>. Level: <b>ke re?</b>. Among close friends: <b>ke bhanyaa?</b>. When unsure, <b>hajur?</b> is never wrong." },
    { ex: [
      { ne: "हजुर? फेरि भन्नुहोस् न।", ro: "hajur? pheri bhannuhos na.", en: "Pardon? Could you say that again?" },
      { ne: "के रे? मैले सुनिनँ।", ro: "ke re? maile sunina.", en: "What was that? I didn't hear." },
      { ne: "के भन्या? ठूलो स्वरले भन् न।", ro: "ke bhanyaa? thulo swarle bhan na.", en: "What d'you say? Speak up." },
      { ne: "माफ गर्नुहोस्, के भन्नुभयो?", ro: "maaf garnuhos, ke bhannubhayo?", en: "Sorry, what did you say?" }
    ] },
    { warn: "<b>ke?</b> on its own, the reflex of English “what?”, sounds abrupt to an elder. <b>ke re?</b> has a second life: it also asks what a third person said (<b>usle ke re?</b> = what did he say?). And <b>hajur</b> with a falling tone means “yes”, with a rising tone “pardon?”." }
  ],
  quiz: [
    { q: "Your friend's grandmother says something you don't catch.", a: "hajur?", o: ["ke bhanyaa?", "ke re?"], why: "To an elder the respectful <b>hajur?</b> is the only safe choice." },
    { q: "In a noisy bar your best friend mumbles something. Which sounds natural?", a: "ke bhanyaa?", o: ["ke bhannubhayo hajur?", "kripayaa pheri bhannuhos"], why: "With a close friend the short form is natural; the long polite ones would sound like a joke." },
    { q: "Your flatmate comes back from a call with the landlord. “What did he say?”", a: "ke re?", o: ["hajur?", "ke bhanyaa uhaan?"], why: "<b>ke re?</b> also asks what someone else said: <b>re</b> marks reported speech." },
    { q: "On the phone to an office, the line crackles. “Sorry, what did you say?”", a: "maaf garnuhos, ke bhannubhayo?", o: ["haina, ke bhanyaa?", "ke re yaar?"], why: "With a stranger in an office, use the full polite form." }
  ] },

{ id: "w-request", level: "C1", unit: "c1formal", title: "Request, application, order, invitation: anurodh, nibedan, aagraha, aadesh, nimto", sub: "anurodh (request), nibedan (application, a request made upwards), aagraha (urging), aadesh (order), nimto / nimantranaa (invitation)",
  words: ["anurodh", "nibedan", "aadesh"],
  blocks: [
    { p: "Everyday Nepali asks with <b>-nuhos</b>. Formal Nepali names the act instead: a request, an application, an order. Which noun you choose says who stands above whom." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>anurodh</b> garnu", "request: between equals, or from an institution to the public", "sahayogko <b>anurodh</b> gardachhu"],
      ["<b>nibedan</b> dinu / garnu", "application; a request made upwards, to an office or a superior", "bidaako <b>nibedan</b>"],
      ["<b>aagraha</b> garnu", "urge, press, insist warmly", "basna <b>aagraha</b> garnubhayo"],
      ["<b>aadesh</b> dinu", "order, from above: courts, bosses, officers", "adaalatko <b>aadesh</b>"],
      ["<b>nimto</b> / <b>nimantranaa</b>", "invitation (everyday / formal)", "bihemaa <b>nimto</b> aayo"]
    ] } },
    { rule: "Upwards → <b>nibedan</b>. Sideways or to the public → <b>anurodh</b>. Downwards → <b>aadesh</b>. An invitation is a <b>nimto</b> that you “give”: <b>nimto dinu</b>." },
    { ex: [
      { ne: "मैले बिदाका लागि निवेदन दिएँ।", ro: "maile bidaakaa laagi nibedan dien.", en: "I submitted an application for leave." },
      { ne: "सबैलाई समयमै आउन अनुरोध गर्दछु।", ro: "sabailaai samayamai aauna anurodh gardachhu.", en: "I request everyone to come on time." },
      { ne: "अदालतले जग्गा फिर्ता गर्न आदेश दियो।", ro: "adaalatle jaggaa phirtaa garna aadesh diyo.", en: "The court ordered the land to be returned." },
      { ne: "उहाँले हामीलाई बिहेमा निम्तो दिनुभयो।", ro: "uhaanle haamilaai bihemaa nimto dinubhayo.", en: "He invited us to the wedding." }
    ] },
    { warn: "A letter to an office or a superior is always a <b>nibedan</b>, never an <b>aadesh</b>, and it closes with <b>nibedak</b> (the applicant) above your name. Inside it you may still “request”: <b>swikrit garidinuhuna anurodh gardachhu</b> (I request you to approve it) is the standard last line. In the other direction, an office that “requests” you with <b>anurodh</b> often means that you must." }
  ],
  quiz: [
    { q: "You write to the campus chief asking for a transcript. Your letter is a…", a: "nibedan", o: ["aadesh", "nimto"], why: "A request made upwards, to an office, is a <b>nibedan</b>." },
    { q: "On a flight: “Passengers are requested to fasten their seat belts.”", a: "yaatruharulaai peti baandhna anurodh garinchha", o: ["yaatruharulaai peti baandhna nibedan garinchha", "yaatruharulaai peti baandhna nimto garinchha"], why: "From an institution to the public → <b>anurodh</b>." },
    { q: "“The court ordered the factory to close.”", a: "adaalatle kaarkhaanaa banda garna aadesh diyo", o: ["adaalatle kaarkhaanaa banda garna nibedan diyo", "adaalatle kaarkhaanaa banda garna aagraha garyo"], why: "From above, with authority → <b>aadesh</b>." },
    { q: "Your host presses you again and again to stay for dinner. He is making an…", a: "aagraha", o: ["aadesh", "nibedan"], why: "Warm insistence is <b>aagraha</b>." }
  ] },

{ id: "w-inform", level: "C1", unit: "c1formal", title: "Information, notice, news, announcement: jaankaari, suchanaa, khabar, samaachaar, ghoshanaa", sub: "jaankaari (information), suchanaa (a notice), khabar (news, word), samaachaar (the news), ghoshanaa (announcement)",
  words: ["jaankaari", "suchanaa", "ghoshanaa"],
  blocks: [
    { p: "English “information” and “news” each split in two in Nepali: what you are told versus the notice that tells you; word from a friend versus the news on the radio." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>jaankaari</b>", "information: what you know or are told about something", "thap <b>jaankaari</b> · <b>jaankaari</b> garaaunu (to inform)"],
      ["<b>suchanaa</b>", "a notice, on a board or in a paper", "<b>suchanaa</b> paati (noticeboard)"],
      ["<b>khabar</b>", "news, word of something; a message sent", "ke <b>khabar</b>? · <b>khabar</b> garnu (to let know)"],
      ["<b>samaachaar</b>", "the news as a broadcast or a genre", "aajako <b>samaachaar</b>"],
      ["<b>ghoshanaa</b>", "announcement, declaration: results, policies, dates", "natijaa <b>ghoshanaa</b>"]
    ] } },
    { rule: "Facts you hold → <b>jaankaari</b>. The paper that carries them → <b>suchanaa</b>. Word that reaches you → <b>khabar</b>. The eight o'clock programme → <b>samaachaar</b>." },
    { ex: [
      { ne: "यसबारे मलाई जानकारी छैन।", ro: "yasbaare malaai jaankaari chhaina.", en: "I have no information about this." },
      { ne: "सूचना पाटीमा नयाँ सूचना टाँसिएको छ।", ro: "suchanaa paatimaa nayaan suchanaa taansieko chha.", en: "A new notice has been put up on the noticeboard." },
      { ne: "पुगेपछि खबर गर्नुहोस् है।", ro: "pugepachhi khabar garnuhos hai.", en: "Let me know when you get there, won't you?" },
      { ne: "निर्वाचनको मिति घोषणा भयो।", ro: "nirbaachanko miti ghoshanaa bhayo.", en: "The date of the election has been announced." }
    ] },
    { warn: "“I have good news” is <b>raamro khabar chha</b>, not <b>raamro jaankaari</b>: jaankaari is what you know, not something that arrives. In speech <b>thaahaa</b> does most of the work of “information”: <b>malaai thaahaa chhaina</b>. <b>jaankaari chhaina</b> is the office version of the same sentence." }
  ],
  quiz: [
    { q: "You burst in: “I have good news!”", a: "raamro khabar chha!", o: ["raamro suchanaa chha!", "raamro ghoshanaa chha!"], why: "News that reaches someone is <b>khabar</b>." },
    { q: "A paper pinned on the office door about holiday hours is a…", a: "suchanaa", o: ["khabar", "ghoshanaa"], why: "A written notice is a <b>suchanaa</b>." },
    { q: "To a friend leaving on a night bus: “Let me know when you arrive.”", a: "pugepachhi khabar gara", o: ["pugepachhi ghoshanaa gara", "pugepachhi suchanaa taansa"], why: "To send word is <b>khabar garnu</b>." },
    { q: "An official letter: “You are hereby informed that…”", a: "… jaankaari garaainchha", o: ["… khabar sunaainchha", "… samaachaar garinchha"], why: "The set phrase of official letters is <b>jaankaari garaainchha</b>." }
  ] },

{ id: "w-heart", level: "C1", unit: "c1idiom", title: "Heart and mind: man, mutu, dimaag, chitta, hos", sub: "man (heart-and-mind: feelings, wishes), mutu (the heart itself; deep love), dimaag (brain, wits), chitta (inner satisfaction), hos (consciousness, care)",
  words: ["man royo", "mutu", "dimaag", "chitta", "hos"],
  blocks: [
    { p: "Where English divides heart (feeling) from mind (thinking), Nepali has <b>man</b> for both, and keeps <b>mutu</b>, <b>dimaag</b> and <b>chitta</b> for narrower jobs. Most everyday expressions of liking, wanting and deciding run on <b>man</b>." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>man</b>", "the seat of feelings, wishes and moods: heart-and-mind", "<b>man</b> parnu · <b>man</b> laagnu · <b>man</b> dukhnu"],
      ["<b>mutu</b>", "the heart as an organ; in songs, deep love and pain", "<b>mutu</b>ko rog · <b>mutu</b> chhune (touching)"],
      ["<b>dimaag</b>", "brain, intellect, wits", "<b>dimaag</b> chaldaina (my brain isn't working)"],
      ["<b>chitta</b>", "inner satisfaction: nearly always in <b>chitta bujhnu</b> (be satisfied) and <b>chitta dukhnu</b> (feel let down)", "<b>chitta</b> bujhena"],
      ["<b>hos</b>", "consciousness; care, attention", "<b>hos</b> garnuhos (be careful) · <b>hos</b> aayo (came round)"]
    ] } },
    { rule: "Feelings and wishes → <b>man</b>. Thinking power → <b>dimaag</b>. Medicine, poetry and heartbreak → <b>mutu</b>. Satisfied or not → <b>chitta bujhyo</b> / <b>bujhena</b>." },
    { ex: [
      { ne: "आज पढ्न मन छैन।", ro: "aaja padhna man chhaina.", en: "I don't feel like studying today." },
      { ne: "उहाँलाई मुटुको रोग छ।", ro: "uhaanlaai mutuko rog chha.", en: "He has heart disease." },
      { ne: "उसको जवाफले मेरो चित्त बुझेन।", ro: "usko jawaaphle mero chitta bujhena.", en: "His answer didn't satisfy me." },
      { ne: "बाटो काट्दा होस गर्नुहोस्।", ro: "baato kaatdaa hos garnuhos.", en: "Take care when you cross the road." }
    ] },
    { warn: "<b>mero dimaagmaa</b> for “in my opinion” and <b>mutu parchha</b> for “I like it” are both wrong: opinions and likings live in <b>man</b> (<b>mero bichaarmaa</b>, <b>man parchha</b>). <b>man</b> also holds what you keep to yourself (<b>manmaa raakhnu</b>), while the idioms of this lesson put hidden intentions in <b>pet</b>." }
  ],
  quiz: [
    { q: "After a long explanation from the bank you still feel short-changed. “I'm not satisfied.”", a: "mero chitta bujhena", o: ["mero dimaag bujhena", "mero mutu pugena"], why: "Being satisfied is <b>chitta bujhnu</b>." },
    { q: "At three in the morning before a deadline: “My brain has stopped working.”", a: "dimaag chalena", o: ["man chalena", "chitta chalena"], why: "Thinking power is <b>dimaag</b>." },
    { q: "A cardiologist is a doctor of the…", a: "mutu", o: ["man", "chitta"], why: "The organ is <b>mutu</b>; <b>man</b> is where feelings live." },
    { q: "“My heart isn't in this job.”", a: "yo kaammaa mero man chhaina", o: ["yo kaammaa mero mutu chhaina", "yo kaammaa mero hos chhaina"], why: "Wishes and inclination → <b>man</b>." }
  ] },

{ id: "w-die", level: "C1", unit: "c1precise", title: "“To die”, by degree of respect: marnu, bitnu, swargabaas hunu, nidhan hunu", sub: "marnu (die: plain, animals, blunt for people), bitnu (pass away), swargabaas hunu (go to heaven), nidhan / dehaanta hunu (news and formal writing)",
  words: ["bitnubhayo", "nidhan"],
  blocks: [
    { p: "Respect levels do not stop at death: the verb you choose shows your regard for the person. Using the plain verb for someone's parent is one of the few vocabulary mistakes that can really hurt." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>marnu</b>", "die: animals, plants, enemies, statistics; blunt for a person", "kukur <b>maryo</b> · bhokle <b>marnu</b>"],
      ["<b>bitnu</b>", "pass away: the normal respectful verb in speech (literally to pass, as time does)", "hajurbaa <b>bitnubhayo</b>"],
      ["<b>swargabaas hunu</b> / <b>swargiya</b>", "go to heaven / the late…: obituaries, formal talk", "<b>swargiya</b> pitaaji (my late father)"],
      ["<b>mrityu</b>", "death: the neutral noun, in news and statistics", "tin janaako <b>mrityu</b> bhayo"],
      ["<b>nidhan</b> / <b>dehaanta hunu</b>", "decease: respectful, in news and formal writing", "kabiko <b>nidhan</b> bhayo"]
    ] } },
    { rule: "For anyone you would call <b>tapaain</b> or <b>uhaan</b>, say <b>bitnubhayo</b>. Keep <b>marnu</b> for animals, numbers and figures of speech (<b>bhokle maren</b>, I'm starving)." },
    { ex: [
      { ne: "उहाँको बुबा गएको वर्ष बित्नुभयो।", ro: "uhaanko bubaa gaeko barsha bitnubhayo.", en: "His father passed away last year." },
      { ne: "दुर्घटनामा तीन जनाको मृत्यु भयो।", ro: "durghatanaamaa tin janaako mrityu bhayo.", en: "Three people died in the accident." },
      { ne: "हाम्रो कुकुर हिजो मर्‍यो।", ro: "haamro kukur hijo maryo.", en: "Our dog died yesterday." },
      { ne: "प्रसिद्ध गायकको निधन भएको छ।", ro: "prasiddha gaayakko nidhan bhaeko chha.", en: "The famous singer has died." }
    ] },
    { warn: "<b>tapaainko bubaa marnubhayo?</b> is grammatical and wounding: say <b>bitnubhayo</b>. Condolences are short: <b>dherai dukha laagyo</b> (I'm very sorry) or, formally, <b>haardik samabedanaa</b> (heartfelt condolences). <b>bitnu</b> is also “to pass” of time: <b>ek barsha bityo</b> = a year went by." }
  ],
  quiz: [
    { q: "A colleague explains why she was away. “My grandmother passed away.”", a: "hajuraamaa bitnubhayo", o: ["hajuraamaa marin", "hajuraamaa sakinubhayo"], why: "For a respected person the verb is <b>bitnu</b>, with the honorific ending." },
    { q: "A radio bulletin: “The former minister has died.”", a: "purba mantriko nidhan bhaeko chha", o: ["purba mantri mareko chha", "purba mantri sakieko chha"], why: "News language uses <b>nidhan</b> (or <b>dehaanta</b>)." },
    { q: "“I'm starving!” (literally: I'm dying of hunger)", a: "bhokle maren!", o: ["bhokle biten!", "bhokle nidhan bhayo!"], why: "Figures of speech keep the plain <b>marnu</b>." },
    { q: "Writing a condolence message:", a: "haardik samabedanaa", o: ["haardik badhaai", "haardik swaagat"], why: "<b>samabedanaa</b> = condolences. <b>badhaai</b> is congratulations and <b>swaagat</b> is welcome." }
  ] },

{ id: "w-mistake", level: "C1", unit: "c1precise", title: "Mistake, fault, lie, wrong: galti, bhul, dosh, jhut, galat", sub: "galti (a mistake), bhul (a slip, an oversight), dosh (blame, fault), kasur (an offence), jhut (a lie), galat (wrong)",
  words: ["galti", "jhut", "dosh"],
  blocks: [
    { p: "“It was my mistake”, “it's not my fault”, “he lied”, “that's wrong”: English moves between mistake, fault and wrong. Nepali chooses by who is to blame and how seriously." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>galti</b> garnu / hunu", "a mistake: the general word, from typos to bad decisions", "<b>galti</b> bhayo, maaf garnuhos"],
      ["<b>bhul</b>", "a slip or oversight, from <b>bhulnu</b> (to forget)", "saano <b>bhul</b> · <b>bhul</b>chuk"],
      ["<b>dosh</b>", "blame, fault: whose responsibility it is", "mero <b>dosh</b> hoina"],
      ["<b>kasur</b> / <b>aparaadh</b>", "an offence / a crime: legal language", "<b>kasur</b> swikaarnu (to admit the offence)"],
      ["<b>jhut</b> bolnu", "to tell a lie", "usle <b>jhut</b> bolyo"],
      ["<b>galat</b>", "wrong, incorrect: the adjective", "<b>galat</b> nambar"]
    ] } },
    { rule: "What you did wrong → <b>galti</b>. Who is to blame → <b>dosh</b>. Said knowing it was untrue → <b>jhut</b>. The standard adjective “wrong” is <b>galat</b>; <b>galti</b> is the noun." },
    { ex: [
      { ne: "गल्ती मेरो हो, माफ गर्नुहोस्।", ro: "galti mero ho, maaf garnuhos.", en: "The mistake is mine, I'm sorry." },
      { ne: "यसमा उसको कुनै दोष छैन।", ro: "yasmaa usko kunai dosh chhaina.", en: "He is not to blame for this at all." },
      { ne: "भुलचुक भए माफ गर्नुहोला।", ro: "bhulchuk bhae maaf garnuholaa.", en: "Please forgive any slips.", note: "A set phrase to close a speech or a letter." },
      { ne: "तपाईंले गलत नम्बरमा फोन गर्नुभयो।", ro: "tapaainle galat nambarmaa phon garnubhayo.", en: "You've dialled the wrong number." }
    ] },
    { warn: "In polite Nepali a mistake “happens”: <b>galti bhayo</b> (a mistake occurred) is the normal apology, softer than <b>maile galti garen</b>. <b>tapaain galat hunuhunchha</b> (“you are wrong”) is very direct; prefer <b>tyasto hoina holaa</b> (I don't think it's quite like that)." }
  ],
  quiz: [
    { q: "You sent the email to the wrong person. Apologising to your boss:", a: "galti bhayo, maaf garnuhos", o: ["dosh bhayo, maaf garnuhos", "jhut bhayo, maaf garnuhos"], why: "The normal apology: a mistake “happened”, <b>galti bhayo</b>." },
    { q: "The bus was late, so you missed the meeting. “It's not my fault.”", a: "mero dosh hoina", o: ["mero jhut hoina", "mero galat hoina"], why: "Blame and responsibility → <b>dosh</b>." },
    { q: "“That answer is wrong.”", a: "tyo jawaaph galat chha", o: ["tyo jawaaph bhul garchha", "tyo jawaaph dosh chha"], why: "The adjective is <b>galat</b>. <b>bhul</b> and <b>dosh</b> are nouns: a slip, and blame." },
    { q: "He said he was ill, but he was at the cinema. “He lied.”", a: "usle jhut bolyo", o: ["usle galti bolyo", "usle bhul bhanyo"], why: "A lie is “spoken”: <b>jhut bolnu</b>." }
  ] },

/* ---------- C2 ---------- */
{ id: "w-etc", level: "C2", unit: "c2echo", title: "“And so on”: chiyaa-siyaa, aadi, ityaadi, lagaayat, -haru", sub: "echo words (and such: casual), aadi / ityaadi (etc.: written), lagaayat (including), -haru (and company), wagairah (and the rest)",
  words: ["-saanaa", "-saisaa", "aadi", "lagaayat"],
  blocks: [
    { p: "Trailing off with “and stuff”, “etc.” or “and the others” is a choice of register in Nepali. The echo word is the spoken way; the Sanskrit words belong to writing; and a plural on a name means “and company”." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["echo word: <b>chiyaa-siyaa</b>", "…and such, …or something: casual speech, slightly offhand", "<b>khaanaa-saanaa</b> khaayau?"],
      ["<b>aadi</b> / <b>ityaadi</b>", "etc.: writing, lectures, news", "daal, bhaat, tarkaari <b>aadi</b>"],
      ["<b>lagaayat</b>", "including, among others: news style, after the noun", "pradhaanmantri <b>lagaayat</b>kaa netaaharu"],
      ["name + <b>-haru</b>", "X and family, X and friends", "<b>raamharu</b> aae"],
      ["<b>wagairah</b>", "and the rest: colloquial, from Hindi", "kaapi, kalam <b>wagairah</b>"]
    ] } },
    { rule: "Speaking with friends → echo word. Writing → <b>aadi</b>. Listing people in the news → <b>lagaayat</b>. A person and those with them → <b>-haru</b> on the name." },
    { ex: [
      { ne: "चिया-सिया खाने हो?", ro: "chiyaa-siyaa khaane ho?", en: "Shall we have tea or something?" },
      { ne: "बजारमा स्याउ, सुन्तला, केरा आदि पाइन्छ।", ro: "bajaarmaa syaau, suntalaa, keraa aadi paainchha.", en: "Apples, oranges, bananas and so on are available in the market." },
      { ne: "सीताहरू भोलि आउँदै छन्।", ro: "sitaaharu bholi aaundai chhan.", en: "Sita and her family are coming tomorrow." },
      { ne: "कार्यक्रममा मन्त्री लगायतका पाहुना उपस्थित थिए।", ro: "kaaryakrammaa mantri lagaayatkaa paahunaa upasthit thie.", en: "Guests including the minister were present at the programme." }
    ] },
    { warn: "An echo word about someone's own things can sound dismissive (<b>tapaainko kitaab-sitaab</b> = your books and whatnot), so avoid it for anything the listener values, and never use it in formal speech. In writing, <b>aadi</b> follows the list without <b>ra</b>: <b>A, B, C aadi</b>." }
  ],
  quiz: [
    { q: "Dropping in on a friend: “Have you eaten or anything?”", a: "khaanaa-saanaa khaayau?", o: ["khaanaa ityaadi khaayau?", "khaanaa lagaayat khaayau?"], why: "Casual talk between friends → the echo word." },
    { q: "In an essay: “Nepal exports tea, carpets, herbs, etc.”", a: "… chiyaa, galaichaa, jadibuti aadi …", o: ["… chiyaa, galaichaa, jadibuti-sadibuti …", "… chiyaa, galaichaa, jadibuti wagairah …"], why: "Writing takes <b>aadi</b>; echo words and <b>wagairah</b> are spoken style." },
    { q: "“Ram and his family have arrived.”", a: "raamharu aaipuge", o: ["raam aadi aaipugyo", "raam-saam aaipuge"], why: "A name + <b>-haru</b> = that person and those with them." },
    { q: "A news line: “Leaders including the prime minister attended.”", a: "pradhaanmantri lagaayatkaa netaaharu upasthit thie", o: ["pradhaanmantri-sradhaanmantri netaaharu upasthit thie", "pradhaanmantri wagairah netaaharu upasthit thie"], why: "News style marks “including” with <b>lagaayat</b>." }
  ] },

{ id: "w-talk", level: "C2", unit: "c2echo", title: "Chat, conversation, discussion, debate, rumour: gaph, kuraakaani, chhalphal, bahas, hallaa", sub: "gaph (chat), kuraakaani (conversation, talks), chhalphal (discussion), bahas (debate), hallaa (noise; rumour)",
  words: ["gaphgaaph", "gaph", "hallaa", "chhalphal"],
  blocks: [
    { p: "<b>kuraa garnu</b> covers every kind of talking at A2. By C2 you need to say what kind: a chat, an exchange, a discussion, a debate or a rumour." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>gaph</b> / <b>gaphgaaph</b>", "chat, chit-chat; <b>gaph dinu</b> also means to tell tall stories", "chiyaa khaandai <b>gaph</b> garaun"],
      ["<b>kuraakaani</b>", "a conversation, an exchange; also talks between two sides", "phonmaa <b>kuraakaani</b> bhayo"],
      ["<b>chhalphal</b>", "discussion to reach a view or a decision: meetings, classrooms", "baithakmaa <b>chhalphal</b> bhayo"],
      ["<b>bahas</b>", "debate, argument of positions: courts, parliament, talk shows", "adaalatmaa <b>bahas</b>"],
      ["<b>hallaa</b>", "noise, din; and a rumour going round", "<b>hallaa</b> nagara · <b>hallaa</b> maatra ho"]
    ] } },
    { rule: "For pleasure → <b>gaph</b>. To exchange → <b>kuraakaani</b>. To decide → <b>chhalphal</b>. To win → <b>bahas</b>. Unconfirmed → <b>hallaa</b>." },
    { ex: [
      { ne: "हामीले चिया खाँदै गफ गर्‍यौँ।", ro: "haamile chiyaa khaandai gaph garyaun.", en: "We chatted over tea." },
      { ne: "यस विषयमा बैठकमा छलफल हुनेछ।", ro: "yas bishayamaa baithakmaa chhalphal hunechha.", en: "This matter will be discussed at the meeting." },
      { ne: "त्यो त हल्ला मात्र हो, पत्याउनु पर्दैन।", ro: "tyo ta hallaa maatra ho, patyaaunu pardaina.", en: "That's only a rumour; no need to believe it." },
      { ne: "दुई पक्षबीच कुराकानी सुरु भएको छ।", ro: "dui pakshabich kuraakaani suru bhaeko chha.", en: "Talks have begun between the two sides." }
    ] },
    { warn: "<b>gaph</b> has a sly side: <b>gaph nadeu</b> = stop making things up, and a <b>gaphaadi</b> is a windbag. <b>jhagadaa</b> is a quarrel, not a debate: calling a lively <b>chhalphal</b> a jhagadaa suggests that people fell out." }
  ],
  quiz: [
    { q: "“We chatted for two hours over tea.”", a: "haamile dui ghantaa gaph garyaun", o: ["haamile dui ghantaa bahas garyaun", "haamile dui ghantaa hallaa garyaun"], why: "Talking for pleasure is <b>gaph</b>." },
    { q: "The agenda says: “Discussion of the budget.”", a: "bajetbaare chhalphal", o: ["bajetbaare gaph", "bajetbaare hallaa"], why: "Talking in order to decide is <b>chhalphal</b>." },
    { q: "“Don't believe it, it's just a rumour.”", a: "napatyaaunuhos, hallaa maatra ho", o: ["napatyaaunuhos, chhalphal maatra ho", "napatyaaunuhos, kuraakaani maatra ho"], why: "Unconfirmed talk going round is <b>hallaa</b>." },
    { q: "In court, the two lawyers…", a: "bahas garchhan", o: ["gaph garchhan", "kuraakaani haalchhan"], why: "Arguing positions before a judge is <b>bahas</b>." }
  ] },

{ id: "w-really", level: "C2", unit: "c2nuance", title: "“Really?”: ho ra?, e ho?, saanchchai?, hagi?, ki kaso?", sub: "ho ra? (really? surely not?), e ho? (oh, is that so?), saanchchai? (truly?), hagi? (isn't it?), ki kaso? (or what do you say?)",
  words: ["parchha ra", "ho ra", "hagi", "saanchchai"],
  blocks: [
    { p: "A listener in Nepali is never silent: little questions show doubt, interest, surprise or a wish for agreement. They all translate as “really?” or “right?”, but they are not interchangeable." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>ho ra?</b>", "surprise or doubt, depending on the tone: “really?”, “surely not?”", "bholi bidaa? <b>ho ra?</b>"],
      ["<b>e ho?</b>", "new information accepted: “oh, is that so?”", "<b>e ho?</b> malaai thaahaa thiena"],
      ["<b>saanchchai?</b>", "real astonishment, glad or shocked: “truly?”", "<b>saanchchai?</b> badhaai chha!"],
      ["<b>hagi?</b>", "seeking agreement: “isn't it?”, “don't you think?”", "kasto raamro, <b>hagi?</b>"],
      ["<b>ki kaso?</b>", "“or what do you say?”: floats a proposal", "aaja jaaun, <b>ki kaso?</b>"]
    ] } },
    { rule: "You doubt it → <b>ho ra?</b>. You accept it → <b>e ho?</b>. You are amazed → <b>saanchchai?</b>. You want a yes → <b>hagi?</b>. You want an opinion → <b>ki kaso?</b>." },
    { ex: [
      { ne: "उसले जागिर छोड्यो? हो र?", ro: "usle jaagir chhodyo? ho ra?", en: "He quit his job? Surely not?" },
      { ne: "ए हो? मलाई त थाहै थिएन।", ro: "e ho? malaai ta thaahai thiena.", en: "Oh, is that so? I had no idea." },
      { ne: "आज कस्तो रमाइलो भयो, हगि?", ro: "aaja kasto ramaailo bhayo, hagi?", en: "Today was such fun, wasn't it?" },
      { ne: "अब घर फर्कौँ, कि कसो?", ro: "aba ghar pharkaun, ki kaso?", en: "Shall we head home now, or what do you say?" }
    ] },
    { warn: "The tone decides what <b>ho ra?</b> means: said flat, it questions what you were told; said warmly, often as <b>e ho ra?</b>, it is friendly surprise and goes well with good news (<b>e ho ra? badhaai chha!</b>). The <b>ra</b> here is not “and”: at the end of a sentence it turns a statement into a sceptical question, as in <b>khaanai parchha ra?</b>" }
  ],
  quiz: [
    { q: "Your friend announces she is getting married. You are delighted.", a: "saanchchai? badhaai chha!", o: ["hagi? badhaai chha!", "ki kaso? badhaai chha!"], why: "Glad astonishment → <b>saanchchai?</b>. <b>hagi?</b> and <b>ki kaso?</b> ask for agreement or an opinion; they do not react to news." },
    { q: "A colleague claims the office is closed tomorrow. You doubt it.", a: "ho ra?", o: ["hagi?", "e ho, dhanyabaad"], why: "Doubt → <b>ho ra?</b>, said flat." },
    { q: "Watching the sunrise at Sarangkot with a friend: “Beautiful, isn't it?”", a: "kasto raamro, hagi?", o: ["kasto raamro, ho ra?", "kasto raamro, ki kaso?"], why: "Inviting agreement → <b>hagi?</b>" },
    { q: "Proposing a plan and inviting a view: “Let's leave at six, or what do you think?”", a: "chha baje hindaun, ki kaso?", o: ["chha baje hindaun, ho ra?", "chha baje hindaun, saanchchai?"], why: "A proposal left open → <b>ki kaso?</b>" }
  ] },

{ id: "w-even", level: "C2", unit: "c2nuance", title: "“Even”: pani, samma, samet, jhan", sub: "pani (even, also), samma (even, as far as), samet (even, along with: written), jhan (even more), -e pani (even if)",
  words: ["jhan", "samet"],
  blocks: [
    { p: "English “even” has no single Nepali twin. The everyday choice is <b>pani</b>; <b>samma</b> marks an extreme that was reached; <b>jhan</b> compares; and a doubled verb says “not even once”." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>pani</b>", "even, also: the default; with a negative, “not even”", "bachchaale <b>pani</b> bujhchha · ek rupaiyaan <b>pani</b> chhaina"],
      ["<b>samma</b>", "even, as far as: an extreme limit reached", "usle naam<b>samma</b> sodhena"],
      ["<b>samet</b>", "even, together with: writing and news", "pariwaar <b>samet</b> aae"],
      ["<b>jhan</b>", "even more, all the more: with comparisons", "aaja <b>jhan</b> jaado chha"],
      ["verb in <b>-dai</b> + the same verb, negative", "not even, not at all", "usle her<b>dai</b> herena"]
    ] } },
    { rule: "Start with <b>pani</b>. If “even” means “as far as that”, use <b>samma</b>. If it means “even more”, use <b>jhan</b>. “Even if” and “even though” are <b>-e pani</b>: <b>paani pare pani jaanchhu</b>." },
    { ex: [
      { ne: "यो त बच्चाले पनि जान्दछ।", ro: "yo ta bachchaale pani jaandachha.", en: "Even a child knows this." },
      { ne: "उसले धन्यवादसम्म भनेन।", ro: "usle dhanyabaadsamma bhanena.", en: "He didn't even say thank you." },
      { ne: "औषधि खाएपछि झन् गाह्रो भयो।", ro: "aushadhi khaaepachhi jhan gaahro bhayo.", en: "After taking the medicine it got even worse." },
      { ne: "पानी परे पनि म आउँछु।", ro: "paani pare pani ma aaunchhu.", en: "Even if it rains, I'll come." }
    ] },
    { warn: "<b>pani</b> follows the word it highlights, so its place changes the meaning: <b>maile pani dekhen</b> = I too saw it; <b>maile tyo pani dekhen</b> = I saw even that. <b>jhan</b> without a comparison is a mistake: “even he came” is <b>u pani aayo</b>, not <b>jhan u aayo</b>." }
  ],
  quiz: [
    { q: "“He didn't even look at me.”", a: "usle malaai herdai herena", o: ["usle malaai jhan herena", "usle malaai samet heryo"], why: "“Not even” with a verb: the <b>-dai</b> form + the same verb in the negative." },
    { q: "“Today it's even hotter than yesterday.”", a: "aaja hijobhandaa jhan garmi chha", o: ["aaja hijobhandaa samma garmi chha", "aaja hijobhandaa samet garmi chha"], why: "“Even more” in a comparison → <b>jhan</b>." },
    { q: "“Even if it's expensive, I'll buy it.”", a: "mahango bhae pani kinchhu", o: ["mahango bhae jhan kinchhu", "mahango bhaesamma kinchhu"], why: "“Even if” is <b>-e pani</b>." },
    { q: "“I don't have even one rupee.”", a: "masanga ek rupaiyaan pani chhaina", o: ["masanga jhan ek rupaiyaan chhaina", "masanga ek rupaiyaan samet chha"], why: "“Not even” = <b>pani</b> + negative." }
  ] },

{ id: "w-saying", level: "C2", unit: "c2proverb", title: "Proverb, idiom, saying, riddle, tale: ukhaan, tukkaa, bhanaai, gaaunkhaane kathaa, dantyakathaa", sub: "ukhaan (proverb), tukkaa (idiom), bhanaai (a saying, what someone said), gaaunkhaane kathaa (riddle), dantyakathaa (folk tale)",
  words: ["ukhaan", "bhanchhan", "bhanaai"],
  blocks: [
    { p: "Nepali schoolbooks pair <b>ukhaan-tukkaa</b> as one subject, but they are different things, and neither is the same as someone's <b>bhanaai</b>. Knowing the labels lets you ask about what you hear: <b>yo ukhaan ho?</b>" },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>ukhaan</b>", "a proverb: a full sentence with a lesson", "<b>ukhaan</b> haalnu (to drop in a proverb)"],
      ["<b>tukkaa</b>", "an idiom: a phrase that means more than its words, like naak kaatnu", "<b>ukhaan-tukkaa</b>"],
      ["<b>bhanaai</b>", "a saying or statement: what a person or a tradition says", "buddhako <b>bhanaai</b>"],
      ["<b>gaaunkhaane kathaa</b>", "a riddle (literally a village-eating story)", "<b>gaaunkhaane kathaa</b> sodhnu"],
      ["<b>dantyakathaa</b> / <b>lokkathaa</b>", "a folk tale", "hajuraamaako <b>dantyakathaa</b>"]
    ] } },
    { rule: "A whole sentence of folk wisdom → <b>ukhaan</b>. A colourful phrase inside a sentence → <b>tukkaa</b>. Quoting anyone → <b>… bhanaai chha</b> or <b>bhanchhan ni</b>." },
    { ex: [
      { ne: "यसको बारेमा एउटा उखान छ।", ro: "yasko baaremaa eutaa ukhaan chha.", en: "There's a proverb about this." },
      { ne: "बुढापाकाको भनाइ छ, धैर्यको फल मीठो हुन्छ।", ro: "budhaapaakaako bhanaai chha, dhairyako phal mitho hunchha.", en: "As the elders say, the fruit of patience is sweet." },
      { ne: "एउटा गाउँखाने कथा सोधूँ?", ro: "eutaa gaaunkhaane kathaa sodhun?", en: "Shall I ask you a riddle?" },
      { ne: "हजुरबाले हामीलाई दन्त्यकथा सुनाउनुहुन्थ्यो।", ro: "hajurbaale haamilaai dantyakathaa sunaaunuhunthyo.", en: "Grandfather used to tell us folk tales." }
    ] },
    { warn: "<b>kathaa</b> alone is a story, <b>kahaani</b> a short story or one's own tale, and <b>kuraa</b> is just “what someone said”: don't call a proverb a <b>puraano kuraa</b>, which means “old news”. When you quote a proverb, frame it: <b>ukhaanai chha ni…</b> (there's even a proverb…) or <b>bhanchhan ni…</b>" }
  ],
  quiz: [
    { q: "<b>ek haatle taali bajdaina</b> (you can't clap with one hand) is…", a: "an ukhaan", o: ["a tukkaa", "a gaaunkhaane kathaa"], why: "A full sentence with a lesson is an <b>ukhaan</b>." },
    { q: "<b>naak kaatnu</b> (to disgrace someone) is…", a: "a tukkaa", o: ["an ukhaan", "a dantyakathaa"], why: "A phrase that means more than its words is a <b>tukkaa</b>." },
    { q: "“What walks on four legs in the morning, two at noon and three in the evening?” is…", a: "a gaaunkhaane kathaa", o: ["an ukhaan", "a bhanaai"], why: "A riddle is a <b>gaaunkhaane kathaa</b>." },
    { q: "Introducing a proverb in conversation: “As they say…”", a: "bhanchhan ni…", o: ["kathaa chha ni…", "tukkaa garchhan ni…"], why: "<b>bhanchhan ni</b> (they say, you know) is the usual frame." }
  ] },

{ id: "w-fate", level: "C2", unit: "c2proverb", title: "Fate, luck, chance: bhaagya, karma, daiba, sanyog, saait", sub: "bhaagya (fortune, luck), karma (what your deeds have earned), daiba (providence), sanyog (coincidence), saait (the auspicious moment)",
  words: ["daiba", "bhaagya", "sanyog"],
  blocks: [
    { p: "Luck in English is one idea. Nepali separates the fortune you are born with, what your deeds have earned, what heaven sends, pure coincidence, and the right moment chosen by the astrologer." },
    { table: { head: ["Say", "When", "Example"], rows: [
      ["<b>bhaagya</b>", "fortune, luck in life; <b>bhaagyamaani</b> = lucky", "<b>bhaagya</b>le baachen (I survived by luck)"],
      ["<b>karma</b>", "one's deeds and what they bring; also one's lot", "<b>karma</b>ko phal"],
      ["<b>daiba</b>", "providence, the hand of heaven: proverbs and laments", "<b>daiba</b>le saath diena (heaven did not help)"],
      ["<b>sanyog</b>", "coincidence, chance", "<b>sanyog</b>le bhet bhayo"],
      ["<b>saait</b>", "the auspicious moment for starting something", "bihe garne <b>saait</b>"]
    ] } },
    { rule: "Good or bad luck → <b>bhaagya</b>. Earned by what you did → <b>karma</b>. Sheer chance → <b>sanyog</b>. Nobody could have helped it → <b>daiba</b>. “Good luck!” as a wish is <b>shubhakaamanaa</b>." },
    { ex: [
      { ne: "उहाँ साँच्चै भाग्यमानी हुनुहुन्छ।", ro: "uhaan saanchchai bhaagyamaani hunuhunchha.", en: "He is truly fortunate." },
      { ne: "संयोगले हामी एउटै बसमा पर्‍यौँ।", ro: "sanyogle haami eutai basmaa paryaun.", en: "By coincidence we ended up on the same bus." },
      { ne: "जस्तो कर्म, उस्तै फल।", ro: "jasto karma, ustai phal.", en: "As the deed, so the fruit." },
      { ne: "यात्राको साइत भोलि बिहान छ।", ro: "yaatraako saait bholi bihaan chha.", en: "The auspicious time for the journey is tomorrow morning." }
    ] },
    { warn: "<b>bhaagya</b> is not something you wish people: “good luck with the exam” is <b>parikshaako laagi shubhakaamanaa</b>. <b>ke garne, karmai yastai</b> (what can you do, such is my lot) is resignation, not theology: you will hear it over a missed bus." }
  ],
  quiz: [
    { q: "Before a friend's interview: “Good luck!”", a: "shubhakaamanaa!", o: ["bhaagya!", "raamro sanyog!"], why: "The wish is <b>shubhakaamanaa</b> (best wishes)." },
    { q: "You bump into your old teacher in a foreign airport. “What a coincidence!”", a: "kasto sanyog!", o: ["kasto karma!", "kasto saait!"], why: "Sheer chance → <b>sanyog</b>." },
    { q: "The family asks an astrologer to fix the wedding hour. They are looking for the…", a: "saait", o: ["sanyog", "daiba"], why: "The auspicious moment is the <b>saait</b>." },
    { q: "The landslide spared one house. “They survived by luck.”", a: "uniharu bhaagyale baache", o: ["uniharu saaitle baache", "uniharu shubhakaamanaale baache"], why: "Luck in life → <b>bhaagya</b>." }
  ] },

/* ---------- reading the script ---------- */
{ id: "w-lookalike1", level: "Script", unit: "num", need: "script", title: "Look-alike letters (1): ब व, भ म, घ ध, प ष फ, य थ", sub: "Five sets that differ by one stroke: a bar inside, a gap in the top line, a curl on the stem",
  words: [],
  blocks: [
    { p: "Several letters differ by a single stroke, and at reading speed the eye fills in the one it expects. Check two places: the top line, and the inside of the left part." },
    { table: { head: ["Letters", "What differs", "Example"], rows: [
      ["<b>ब</b> / <b>व</b>", "ब has a short diagonal bar across the inside of its loop; व's loop is empty. Hook: ब has a <i>bar</i>, व is a <i>vacant</i> loop.", "<b>बाटो</b> baato (road) · <b>वन</b> ban (forest)"],
      ["<b>भ</b> / <b>म</b>", "म has an unbroken top line. In भ the top line covers only the stem; the left stroke curls up on its own. Hook: म is a room with a full roof, भ's roof is broken.", "<b>भात</b> bhaat (rice) · <b>माछा</b> maachhaa (fish)"],
      ["<b>घ</b> / <b>ध</b>", "The same trick: घ hangs from a full top line; in ध the line stops short and the left part ends in a curl. Hook: घ as in <b>घर</b>, a house that keeps its whole roof.", "<b>घर</b> ghar (house) · <b>धेरै</b> dherai (a lot)"],
      ["<b>प</b> / <b>ष</b> / <b>फ</b>", "Start from प. ष adds a diagonal across the inside; फ adds a small curl on the right of the stem. Hook: ष is प struck through, फ is प with a flag.", "<b>पानी</b> paani · <b>भाषा</b> bhaashaa · <b>फूल</b> phul"],
      ["<b>य</b> / <b>थ</b>", "थ has a small closed loop at the top left, with a gap in the top line above it; य has no loop and a full top line. Hook: थ wears a topknot.", "<b>यो</b> yo (this) · <b>थाहा</b> thaahaa (knowing)"]
    ] } },
    { rule: "First the top line: if it stops short over the left part, you have <b>भ</b>, <b>ध</b> or <b>थ</b>. Then the inside: a diagonal is <b>ब</b> or <b>ष</b>; a curl on the stem is <b>फ</b>." },
    { ex: [
      { ne: "भाषा", ro: "bhaashaa", en: "language", note: "भ with the broken roof, then ष: प struck through." },
      { ne: "घर", ro: "ghar", en: "house", note: "घ: full top line." },
      { ne: "धेरै", ro: "dherai", en: "a lot, very", note: "ध: the line stops short over the curl." },
      { ne: "थाहा", ro: "thaahaa", en: "knowing (thaahaa chha: I know)", note: "थ: the small loop at the top left." }
    ] },
    { warn: "In handwriting and some fonts the gap in the top line is small, so confirm with the left part: in <b>म</b> and <b>घ</b> it hangs from the line, in <b>भ</b> and <b>ध</b> it curls up by itself. Mixing up <b>ब</b> and <b>व</b> costs little when reading aloud, since Nepali reads व as b in most words; it matters for spelling." }
  ],
  quiz: [
    { q: "Which one is bha, as in bhaat (rice)?", a: "भ", o: ["म", "ब"], deva: true, why: "<b>भ</b>: the top line covers only the stem. <b>म</b> has the full line; <b>ब</b> is a loop with a bar inside." },
    { q: "Which one is dha, as in dherai?", a: "ध", o: ["घ", "थ"], deva: true, why: "<b>ध</b>: broken top line, curl on the left. <b>घ</b> has the full line; <b>थ</b> has the small loop at the top." },
    { q: "Which one is pha, as in phon?", a: "फ", o: ["प", "ष"], deva: true, why: "<b>फ</b> = प with a curl on the right of the stem. <b>ष</b> is प with a diagonal inside." },
    { q: "Which one is tha, as in thaahaa?", a: "थ", o: ["य", "ध"], deva: true, why: "<b>थ</b>: the small loop at the top left. <b>य</b> has none; <b>ध</b> ends in an open curl." }
  ] },

{ id: "w-lookalike2", level: "Script", unit: "shop", need: "script", title: "Look-alike letters (2): द ढ ड ङ, ख रव, त न, ट ठ, and vowels", sub: "A tail, a loop, a dot, a join: plus उ ऊ, ए ऐ, and श ष स that sound alike",
  words: [],
  blocks: [
    { p: "This set is told apart mostly at the bottom of the letter: whether it ends in a tail, closes into a loop, or carries a dot." },
    { table: { head: ["Letters", "What differs", "Example"], rows: [
      ["<b>द</b> / <b>ढ</b>", "Both hang a curve from the top line. द ends in a short tail that kicks out at the bottom left; ढ curls round into a small closed loop and has no tail.", "<b>दाल</b> daal (lentils) · <b>ढोका</b> dhokaa (door)"],
      ["<b>ड</b> / <b>ङ</b>", "The same open swirl; ङ adds a dot on the right.", "<b>डाक्टर</b> daaktar · <b>रङ</b> rang (colour)"],
      ["<b>ट</b> / <b>ठ</b>", "ट is an open curve, like a c with a flick at the end; ठ closes it into a ring. Hook: ठ is a full circle.", "<b>टोपी</b> topi (cap) · <b>ठाउँ</b> thaaun (place)"],
      ["<b>ख</b> / <b>रव</b>", "ख is one letter: its left hook is joined to the loop at the bottom. रव is two letters: र stands apart and ends in its own tail.", "<b>खाना</b> khaanaa (food) · <b>परवाह</b> parwaah (concern)"],
      ["<b>त</b> / <b>न</b>", "Both have an arm from the stem. त's arm curls down into a long tail; न's arm is a short straight bar ending in a small knob.", "<b>तपाईं</b> tapaain · <b>नाम</b> naam (name)"]
    ] } },
    { list: [
      "<b>उ</b> / <b>ऊ</b>: ऊ is उ with an extra tail swung out to the right. Both are u in Nepali (<b>उनी</b> uni, <b>ऊन</b> un), so this matters for spelling, not sound.",
      "<b>ए</b> / <b>ऐ</b>: ऐ adds one more stroke above the top line, and the sound changes: <b>एक</b> ek, <b>ऐना</b> ainaa. The vowel signs work the same way: के ke, कै kai.",
      "<b>श</b> / <b>ष</b> / <b>स</b>: easy to tell apart on the page (श has a small loop at the top left and a slanting tail; ष is प with a diagonal; स joins a hook to the stem with a bar), hard by ear, because in everyday speech they often sound alike. Learn each word's spelling as you meet it: <b>शिक्षक</b> shikshak, <b>भाषा</b> bhaashaa, <b>सात</b> saat."
    ] },
    { rule: "Read the bottom of the letter: a tail kicking out at the bottom left is <b>द</b>; a small closed loop is <b>ढ</b>; a ring is <b>ठ</b>; an open c is <b>ट</b>; an open swirl is <b>ड</b>, and with a dot <b>ङ</b>." },
    { ex: [
      { ne: "ढोका", ro: "dhokaa", en: "door", note: "ढ: closed loop, no tail." },
      { ne: "रङ", ro: "rang", en: "colour", note: "ङ: ड with a dot." },
      { ne: "खाना", ro: "khaanaa", en: "food, meal", note: "ख: the two halves join at the bottom." },
      { ne: "ठाउँ", ro: "thaaun", en: "place", note: "ठ: a closed ring." }
    ] },
    { warn: "The commonest misreading is <b>ख</b> as <b>र</b> + <b>व</b>, because in small print the join at the bottom is tiny: look for it before you read “rwa”. And <b>द</b> and <b>ड</b> are both “d” to an English ear: the tail at the bottom left marks <b>द</b>, the tongue-on-teeth d." }
  ],
  quiz: [
    { q: "Which one is nga, as in rang (colour)?", a: "ङ", o: ["ड", "द"], deva: true, why: "<b>ङ</b> = ड plus a dot on the right. <b>द</b> has a tail at the bottom left." },
    { q: "Which one is kha, as in khaanaa?", a: "ख", o: ["रव", "स"], deva: true, why: "<b>ख</b> is one letter, joined at the bottom. <b>रव</b> is र + व, and <b>स</b> joins its hook to the stem with a bar." },
    { q: "Which one is tha (curled), as in thaaun (place)?", a: "ठ", o: ["ट", "ढ"], deva: true, why: "<b>ठ</b> is a closed ring. <b>ट</b> is open; <b>ढ</b> has a curve on top of its loop." },
    { q: "Which one is da (teeth), as in daal?", a: "द", o: ["ड", "ढ"], deva: true, why: "<b>द</b> ends in a tail at the bottom left. <b>ड</b> is an open swirl; <b>ढ</b> closes into a loop." }
  ] },

{ id: "w-silent-a", level: "Script", unit: "time", need: "script", title: "The vowel you don't write, and when it goes silent", sub: "built-in a (spoken inside words), silent at the end (ghar), kept in short words (tara), ् and half letters (no vowel), ि (written first, read after)",
  words: [],
  blocks: [
    { p: "Devanagari writes every vowel but one: a consonant on its own already includes a short a (क = ka). Reading would be easy if that a were always spoken, but it is not, and the script does not always show when it drops." },
    { table: { head: ["Where", "The built-in a", "Examples"], rows: [
      ["Inside a word, nothing marked", "usually spoken", "<b>कलम</b> kalam (pen) · <b>पसल</b> pasal (shop)"],
      ["At the end of a word", "silent, and stays silent before an ending", "<b>घर</b> ghar · <b>घरमा</b> gharmaa · <b>कामको</b> kaamko"],
      ["One-letter words, a few short words, after a final conjunct", "spoken", "<b>छ</b> chha · <b>तर</b> tara · <b>गर्छ</b> garchha · <b>अन्त्यमा</b> antyamaa"],
      ["With ् or as a half letter", "none: the consonant is bare", "<b>गर्छु</b> garchhu · <b>बोल्नुस्</b> bolnus · <b>नमस्ते</b> namaste"],
      ["ि (short i)", "written before the consonant or cluster, read after it", "<b>दिदी</b> didi · <b>स्थिति</b> sthiti"]
    ] } },
    { rule: "Speak the a inside a word, drop it at the end, keep it in one-letter words (<b>म</b> ma, <b>न</b> na, <b>छ</b> chha) and after a final conjunct (<b>हुन्छ</b> hunchha). A ् or a half letter always means no vowel." },
    { ex: [
      { ne: "घरमा", ro: "gharmaa", en: "at home", note: "The a of र stays silent before -मा." },
      { ne: "तर", ro: "tara", en: "but", note: "One of the short words that keep both a's." },
      { ne: "हुन्छ", ro: "hunchha", en: "OK, will do", note: "न्छ is a conjunct, so the final a is spoken." },
      { ne: "स्थिति", ro: "sthiti", en: "situation", note: "ि sits before स्थ but is read after थ." }
    ] },
    { warn: "Learners tend to read every consonant with its a: <b>घरमा</b> as gharamaa, <b>बजारमा</b> as bajaaramaa, which sounds like spelling aloud. The opposite slip is dropping it in the short words (tar for <b>तर</b>). Learn the few short words that keep it as you meet them: <b>तर</b> tara, <b>अब</b> aba, <b>आज</b> aaja, <b>किन</b> kina. Some longer words also drop an unmarked a in the middle: <b>सरकार</b> sarkaar, <b>तरकारी</b> tarkaari. When in doubt, trust the recording." }
  ],
  quiz: [
    { q: "How is बोल्नुस् read?", a: "bolnus", o: ["bolanusa", "bolanus"], why: "The ् on ल and on स leaves both bare: <b>bolnus</b> (please speak)." },
    { q: "How is तर (but) read?", a: "tara", o: ["tar", "taar"], why: "A short word that keeps its final a: <b>tara</b>. There is no आ sign, so not taar." },
    { q: "How is दिन (day) read?", a: "din", o: ["idn", "dina"], why: "ि is written first but read after द, and the final a of न is silent: <b>din</b>." },
    { q: "How is बजारमा (in the market) read?", a: "bajaarmaa", o: ["bajaaramaa", "bjaarmaa"], why: "The a inside बजार is spoken (ba-), the a of final र stays silent before -मा: <b>bajaarmaa</b>." }
  ] }

]);
})();
