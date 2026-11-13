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
