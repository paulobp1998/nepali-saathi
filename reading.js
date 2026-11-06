// Read Nepali: the Devanagari script in seven small groups. Each letter: l (letter), r (sound), and an example word ne/ro/en.
(function () {
const C = window.COURSE;
C.reading = [
  { id: "vow", title: "Vowels", sub: "The 11 vowel letters", intro: "These are used at the start of a word or syllable. Inside words, vowels are written as signs attached to consonants (group 6). Long and short i and u (इ/ई, उ/ऊ) sound almost the same in Nepali.",
    items: [
      { l: "अ", r: "a", ne: "अनार", ro: "anaar", en: "pomegranate" },
      { l: "आ", r: "aa", ne: "आमा", ro: "aamaa", en: "mother" },
      { l: "इ", r: "i", ne: "इनार", ro: "inaar", en: "well (water)" },
      { l: "ई", r: "i (long)", ne: "ईश्वर", ro: "ishwar", en: "god" },
      { l: "उ", r: "u", ne: "उखु", ro: "ukhu", en: "sugarcane" },
      { l: "ऊ", r: "u (long)", ne: "ऊन", ro: "un", en: "wool" },
      { l: "ऋ", r: "ri", ne: "ऋषि", ro: "rishi", en: "sage" },
      { l: "ए", r: "e", ne: "एक", ro: "ek", en: "one" },
      { l: "ऐ", r: "ai", ne: "ऐना", ro: "ainaa", en: "mirror" },
      { l: "ओ", r: "o", ne: "ओठ", ro: "oth", en: "lip" },
      { l: "औ", r: "au", ne: "औँला", ro: "aunlaa", en: "finger" }
    ] },
  { id: "k", title: "Consonants 1: back and palate", sub: "क ख ग घ ङ · च छ ज झ ञ", intro: "Consonants come in rows by where they're made in the mouth. Each row has plain, breathy (with a puff of air, written h) and nasal sounds. Every consonant carries a built-in short a: क is ka.",
    items: [
      { l: "क", r: "ka", ne: "कलम", ro: "kalam", en: "pen" },
      { l: "ख", r: "kha", ne: "खरायो", ro: "kharaayo", en: "rabbit" },
      { l: "ग", r: "ga", ne: "गाई", ro: "gaai", en: "cow" },
      { l: "घ", r: "gha", ne: "घर", ro: "ghar", en: "house" },
      { l: "ङ", r: "nga", ne: "रङ", ro: "rang", en: "colour" },
      { l: "च", r: "cha", ne: "चिया", ro: "chiyaa", en: "tea" },
      { l: "छ", r: "chha", ne: "छाता", ro: "chhaataa", en: "umbrella" },
      { l: "ज", r: "ja", ne: "जुत्ता", ro: "juttaa", en: "shoes" },
      { l: "झ", r: "jha", ne: "झोला", ro: "jholaa", en: "bag" },
      { l: "ञ", r: "nya", ne: "चञ्चल", ro: "chanchal", en: "lively, restless" }
    ] },
  { id: "t", title: "Consonants 2: the two t's and d's", sub: "ट ठ ड ढ ण · त थ द ध न", intro: "The first row is made with the tongue curled back (retroflex), the second with the tongue against the teeth. English t and d sit in between, so practise hearing the difference: it changes meaning.",
    items: [
      { l: "ट", r: "ta (curled)", ne: "टोपी", ro: "topi", en: "cap" },
      { l: "ठ", r: "tha (curled)", ne: "ठाउँ", ro: "thaaun", en: "place" },
      { l: "ड", r: "da (curled)", ne: "डाक्टर", ro: "daaktar", en: "doctor" },
      { l: "ढ", r: "dha (curled)", ne: "ढोका", ro: "dhokaa", en: "door" },
      { l: "ण", r: "na (curled)", ne: "बाण", ro: "baan", en: "arrow" },
      { l: "त", r: "ta (teeth)", ne: "तारा", ro: "taaraa", en: "star" },
      { l: "थ", r: "tha (teeth)", ne: "थाल", ro: "thaal", en: "plate" },
      { l: "द", r: "da (teeth)", ne: "दाल", ro: "daal", en: "lentils" },
      { l: "ध", r: "dha (teeth)", ne: "धन्यवाद", ro: "dhanyabaad", en: "thank you" },
      { l: "न", r: "na", ne: "नाक", ro: "naak", en: "nose" }
    ] },
  { id: "p", title: "Consonants 3: lips and the rest", sub: "प फ ब भ म · य र ल व · श ष स ह", intro: "Nepali pronounces व mostly as b (or w), and श ष स all as s or sh. Spelling keeps the old Sanskrit distinctions.",
    items: [
      { l: "प", r: "pa", ne: "पानी", ro: "paani", en: "water" },
      { l: "फ", r: "pha", ne: "फूल", ro: "phul", en: "flower" },
      { l: "ब", r: "ba", ne: "बाटो", ro: "baato", en: "road" },
      { l: "भ", r: "bha", ne: "भात", ro: "bhaat", en: "rice" },
      { l: "म", r: "ma", ne: "माछा", ro: "maachhaa", en: "fish" },
      { l: "य", r: "ya", ne: "यात्रा", ro: "yaatraa", en: "journey" },
      { l: "र", r: "ra", ne: "रातो", ro: "raato", en: "red" },
      { l: "ल", r: "la", ne: "लामो", ro: "laamo", en: "long" },
      { l: "व", r: "wa / ba", ne: "वन", ro: "ban", en: "forest" },
      { l: "श", r: "sha", ne: "शान्ति", ro: "shaanti", en: "peace" },
      { l: "ष", r: "sha", ne: "भाषा", ro: "bhaashaa", en: "language" },
      { l: "स", r: "sa", ne: "सगरमाथा", ro: "sagarmaathaa", en: "Everest" },
      { l: "ह", r: "ha", ne: "हिमाल", ro: "himaal", en: "snow mountain" }
    ] },
  { id: "m", title: "Vowel signs", sub: "का कि की कु कू के कै को कौ", intro: "Inside a word, a vowel is written as a sign on the consonant. Note that ि is written before the consonant but pronounced after it: कि = ki.",
    items: [
      { l: "का", r: "kaa", ne: "काम", ro: "kaam", en: "work" },
      { l: "कि", r: "ki", ne: "किताब", ro: "kitaab", en: "book" },
      { l: "की", r: "ki (long)", ne: "कीर्तन", ro: "kirtan", en: "devotional singing" },
      { l: "कु", r: "ku", ne: "कुकुर", ro: "kukur", en: "dog" },
      { l: "कू", r: "ku (long)", ne: "कूटनीति", ro: "kutniti", en: "diplomacy" },
      { l: "कृ", r: "kri", ne: "कृपया", ro: "kripayaa", en: "please (formal)" },
      { l: "के", r: "ke", ne: "केरा", ro: "keraa", en: "banana" },
      { l: "कै", r: "kai", ne: "कैँची", ro: "kainchi", en: "scissors" },
      { l: "को", r: "ko", ne: "कोठा", ro: "kothaa", en: "room" },
      { l: "कौ", r: "kau", ne: "कौवा", ro: "kauwaa", en: "crow" }
    ] },
  { id: "x", title: "Special signs and joined letters", sub: "ँ ं ् · क्ष त्र ज्ञ", intro: "A few marks change sounds: ँ and ं make a vowel nasal, ् removes the built-in a. Two consonants written together make a conjunct: स + त = स्त (st).",
    items: [
      { l: "ँ", r: "nasal vowel", ne: "हाँस", ro: "haans", en: "duck" },
      { l: "ं", r: "n / m sound", ne: "संसार", ro: "sansaar", en: "world" },
      { l: "्", r: "no vowel", ne: "गर्नुहोस्", ro: "garnuhos", en: "please do" },
      { l: "स्त", r: "sta", ne: "नमस्ते", ro: "namaste", en: "hello" },
      { l: "क्ष", r: "chhya / ksha", ne: "क्षमा", ro: "chhyamaa", en: "forgiveness" },
      { l: "त्र", r: "tra", ne: "त्रिशूल", ro: "trishul", en: "trident" },
      { l: "ज्ञ", r: "gya", ne: "ज्ञान", ro: "gyaan", en: "knowledge" },
      { l: "र्", r: "r (on top)", ne: "गर्मी", ro: "garmi", en: "heat, summer" }
    ] },
  { id: "num", title: "Numerals", sub: "० १ २ ३ ४ ५ ६ ७ ८ ९", intro: "Nepali has its own digits, used on prices, buses, calendars and in the news. Western digits are common too.",
    items: [
      { l: "०", r: "0", ne: "शून्य", ro: "shunya", en: "zero" },
      { l: "१", r: "1", ne: "एक", ro: "ek", en: "one" },
      { l: "२", r: "2", ne: "दुई", ro: "dui", en: "two" },
      { l: "३", r: "3", ne: "तीन", ro: "tin", en: "three" },
      { l: "४", r: "4", ne: "चार", ro: "chaar", en: "four" },
      { l: "५", r: "5", ne: "पाँच", ro: "paanch", en: "five" },
      { l: "६", r: "6", ne: "छ", ro: "chha", en: "six" },
      { l: "७", r: "7", ne: "सात", ro: "saat", en: "seven" },
      { l: "८", r: "8", ne: "आठ", ro: "aath", en: "eight" },
      { l: "९", r: "9", ne: "नौ", ro: "nau", en: "nine" }
    ] }
];
})();
