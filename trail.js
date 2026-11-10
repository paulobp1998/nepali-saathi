// The trek: each lesson is a stop on a real trail. Reaching a stop = earning the lesson's "Spoken" flag.
(function () {
const C = window.COURSE;
C.regions = [
  { level: "A1", name: "Kathmandu Valley to Pokhara", blurb: "Temples, bazaars and lakes. Learn to survive in Nepali." },
  { level: "A2", name: "The Annapurna Circuit", blurb: "Over the Thorong La pass at 5,416 m. Learn to handle everyday life." },
  { level: "B1", name: "The Everest trail", blurb: "From Lukla's tiny airstrip to Everest Base Camp. Learn to talk about anything familiar." },
  { level: "B2", name: "The Langtang valley", blurb: "North of Kathmandu, up to glaciers and a sacred lake. Learn to speak with ease and colour." },
  { level: "C1", name: "Upper Mustang", blurb: "The walled kingdom of Lo, behind the Himalaya. Learn to sound natural, whether formal or casual." },
  { level: "C2", name: "Sagarmatha, 8,849 m", blurb: "From the Western Cwm to the top of the world. Learn the fine shades that only natives notice." },
  { level: "B2+", name: "Real-world Nepali", blurb: "Lessons get you up the mountain; living the language keeps you there. Podcasts, films, friends: log your hours on Your path." }
];
C.trail = {
  greet:   { place: "Thamel", alt: 1400, fact: "Kathmandu's busy traveller quarter: trekking shops, prayer flags and momo stalls on every corner." },
  intro:   { place: "Swayambhunath", alt: 1420, fact: "The \"Monkey Temple\" on a hill over Kathmandu, one of the oldest religious sites in the valley." },
  help:    { place: "Boudhanath", alt: 1360, fact: "One of the largest stupas in the world. Walk around it clockwise, as everyone does." },
  num:     { place: "Patan", alt: 1330, fact: "A city of Newar craftsmen, famous for metalwork, carved windows and its Durbar Square." },
  food:    { place: "Bhaktapur", alt: 1400, fact: "Home of juju dhau, the \"king of yoghurts\", served in clay pots." },
  shop:    { place: "Nagarkot", alt: 2175, fact: "A ridge famous for sunrise over the Himalaya. On a clear day you can see Everest." },
  move:    { place: "Dhulikhel", alt: 1550, fact: "An old Newar trading town on the road east, with wide mountain views." },
  fam:     { place: "Bandipur", alt: 1030, fact: "A hilltop bazaar town where cars are kept out of the main street." },
  time:    { place: "Pokhara", alt: 820, fact: "A lakeside city and the gateway to the Annapurnas. Boats drift on Phewa Lake." },
  feel:    { place: "Sarangkot", alt: 1600, fact: "Paragliders launch from here and circle over Phewa Lake." },
  verbs:   { place: "World Peace Pagoda", alt: 1100, fact: "A white stupa on a ridge above the lake, built by Japanese Buddhist monks." },
  past:    { place: "Besisahar", alt: 760, fact: "The classic starting point of the Annapurna Circuit." },
  future:  { place: "Chame", alt: 2670, fact: "The headquarters of Manang district, with natural hot springs by the river." },
  weather: { place: "Pisang", alt: 3200, fact: "A stone village facing the snowy wall of Annapurna II." },
  routine: { place: "Manang", alt: 3540, fact: "Trekkers rest here a day to get used to the altitude. Slow down, like your Nepali." },
  describe:{ place: "Yak Kharka", alt: 4020, fact: "The name means \"yak pasture\". You'll see why." },
  phone:   { place: "Thorong Phedi", alt: 4450, fact: "Phedi means \"foot of the hill\". Trekkers leave before dawn to cross the pass." },
  hobby:   { place: "Thorong La", alt: 5416, fact: "One of the highest trekking passes in the world. Prayer flags snap in the wind." },
  clinic:  { place: "Muktinath", alt: 3710, fact: "A temple sacred to both Hindus and Buddhists, with 108 water spouts." },
  culture: { place: "Kagbeni", alt: 2810, fact: "A medieval village of mud-brick houses, the gateway to Upper Mustang." },
  compare: { place: "Jomsom", alt: 2720, fact: "A windy town in the Kali Gandaki valley. Nearby Marpha is famous for apples." },
  opinion: { place: "Lukla", alt: 2860, fact: "Its short, sloping airstrip is one of the most famous in the mountains." },
  tell:    { place: "Phakding", alt: 2610, fact: "The first night on the Everest trail, beside the Dudh Koshi, the \"milk river\"." },
  work:    { place: "Namche Bazaar", alt: 3440, fact: "The Sherpa market town, built in a horseshoe-shaped bowl in the mountains." },
  health:  { place: "Tengboche", alt: 3867, fact: "The largest monastery in the Khumbu, with a view straight at Ama Dablam." },
  solve:   { place: "Dingboche", alt: 4410, fact: "Stone-walled fields of barley and potatoes, high above the tree line." },
  ifthen:  { place: "Lobuche", alt: 4940, fact: "Just past the climbers' memorials at Thukla Pass." },
  emotion: { place: "Gorak Shep", alt: 5164, fact: "The last lodges before base camp, on a sandy old lakebed." },
  news:    { place: "Everest Base Camp", alt: 5364, fact: "You made it. In Nepali, Everest is Sagarmatha: \"forehead of the sky\"." },
  b2favour:  { place: "Syabrubesi", alt: 1503, fact: "The trailhead of the Langtang trek, a long bus ride north of Kathmandu." },
  b2service: { place: "Lama Hotel", alt: 2480, fact: "Not one hotel but a cluster of lodges in thick forest beside the Langtang river." },
  b2rules:   { place: "Langtang village", alt: 3430, fact: "Buried by an avalanche in the 2015 earthquake and since rebuilt nearby." },
  b2feel:    { place: "Kyanjin Gompa", alt: 3870, fact: "An old monastery and a small cheese factory, set up with Swiss help in the 1950s." },
  b2respect: { place: "Kyanjin Ri", alt: 4773, fact: "A steep viewpoint above Kyanjin, face to face with Langtang Lirung and its glaciers." },
  b2ideas:   { place: "Gosaikunda", alt: 4380, fact: "A sacred lake that draws thousands of pilgrims at the August full moon, Janai Purnima." },
  c1casual:  { place: "Chele", alt: 3050, fact: "One of the first villages of Upper Mustang, perched above the Kali Gandaki gorge." },
  c1formal:  { place: "Ghami", alt: 3520, fact: "Known for one of the longest mani walls in Nepal." },
  c1idiom:   { place: "Tsarang", alt: 3560, fact: "Its red monastery and old palace stand above fields of barley and buckwheat." },
  c1precise: { place: "Lo Manthang", alt: 3810, fact: "The walled capital of the former kingdom of Lo, opened to foreign visitors only in 1992." },
  c2echo:    { place: "Camp 2", alt: 6400, fact: "Advanced base camp in the Western Cwm, a silent valley of ice above the Khumbu Icefall." },
  c2nuance:  { place: "South Col", alt: 7906, fact: "The last camp, on a windswept saddle between Everest and Lhotse." },
  c2proverb: { place: "The summit", alt: 8849, fact: "Sagarmatha. In 2020 Nepal and China jointly announced its height: 8,848.86 m." }
};

// Habre the red panda (habre is Nepali for red panda) cheers you on in Nepali.
C.cheers = {
  good: [
    { ne: "स्याबास!", ro: "syaabaas!", en: "Well done!" },
    { ne: "एकदम राम्रो!", ro: "ekdam raamro!", en: "Excellent!" },
    { ne: "वाह, कमाल!", ro: "waah, kamaal!", en: "Wow, amazing!" },
    { ne: "धेरै राम्रो!", ro: "dherai raamro!", en: "Very good!" },
    { ne: "ठ्याक्कै मिल्यो!", ro: "thyaakkai milyo!", en: "Spot on!" }
  ],
  bad: [
    { ne: "केही छैन, फेरि प्रयास गरौँ।", ro: "kehi chhaina, pheri prayaas garaun.", en: "No problem, let's try again." },
    { ne: "हिम्मत नहार्नुहोस्!", ro: "himmat nahaarnuhos!", en: "Don't give up!" },
    { ne: "अलिकति मात्र बाँकी छ!", ro: "alikati maatra baanki chha!", en: "Almost there!" }
  ],
  hello: [
    { ne: "नमस्ते! आज के सिक्ने?", ro: "namaste! aaja ke sikne?", en: "Hello! What shall we learn today?" },
    { ne: "आउनुहोस्, अलिकति अभ्यास गरौँ।", ro: "aaunuhos, alikati abhyaas garaun.", en: "Come on, let's practise a little." },
    { ne: "फेरि भेट भयो! खुसी लाग्यो।", ro: "pheri bhet bhayo! khusi laagyo.", en: "We meet again! I'm happy." }
  ]
};

// Bargain Bazaar: the shopkeeper's lines and the prices you have to catch by ear.
C.bazaar = {
  items: [
    { name: "Pashmina shawl", start: 2000, min: 1100 },
    { name: "Singing bowl", start: 1800, min: 1000 },
    { name: "Thangka painting", start: 2000, min: 1300 },
    { name: "Wooden mask", start: 1200, min: 600 },
    { name: "Box of Ilam tea", start: 900, min: 500 },
    { name: "Dhaka cloth topi (hat)", start: 800, min: 400 }
  ],
  prices: {
    300: "तीन सय रुपैयाँ", 400: "चार सय रुपैयाँ", 500: "पाँच सय रुपैयाँ", 600: "छ सय रुपैयाँ", 700: "सात सय रुपैयाँ",
    800: "आठ सय रुपैयाँ", 900: "नौ सय रुपैयाँ", 1000: "एक हजार रुपैयाँ", 1100: "एघार सय रुपैयाँ", 1200: "बाह्र सय रुपैयाँ",
    1300: "तेह्र सय रुपैयाँ", 1400: "चौध सय रुपैयाँ", 1500: "पन्ध्र सय रुपैयाँ", 1600: "सोह्र सय रुपैयाँ", 1700: "सत्र सय रुपैयाँ",
    1800: "अठार सय रुपैयाँ", 1900: "उन्नाइस सय रुपैयाँ", 2000: "दुई हजार रुपैयाँ"
  },
  priceRo: { 300: "tin saya", 400: "chaar saya", 500: "paanch saya", 600: "chha saya", 700: "saat saya", 800: "aath saya", 900: "nau saya", 1000: "ek hajaar", 1100: "eghaara saya", 1200: "baahra saya", 1300: "tehra saya", 1400: "chaudha saya", 1500: "pandhra saya", 1600: "sohra saya", 1700: "satra saya", 1800: "athaara saya", 1900: "unnaais saya", 2000: "dui hajaar" },
  say: {
    open:     { ne: "आउनुहोस्! यो हेर्नुहोस्, एकदम राम्रो छ।", ro: "aaunuhos! yo hernuhos, ekdam raamro chha.", en: "Come in! Look at this, it's really good." },
    price:    { ne: "यसको दाम", ro: "yasko daam", en: "The price is" },
    lower:    { ne: "ल, तपाईंका लागि मात्र", ro: "la, tapaainkaa laagi maatra", en: "OK, just for you" },
    last:     { ne: "योभन्दा सस्तो हुँदैन।", ro: "yobhandaa sasto hundaina.", en: "It can't go any cheaper than this." },
    callback: { ne: "ए, पर्खनुहोस्, पर्खनुहोस्!", ro: "e, parkhanuhos, parkhanuhos!", en: "Hey, wait, wait!" },
    deal:     { ne: "धन्यवाद! फेरि आउनुहोला।", ro: "dhanyabaad! pheri aaunuhola.", en: "Thank you! Do come again." },
    bye:      { ne: "हुन्छ, फेरि आउनुहोला।", ro: "hunchha, pheri aaunuhola.", en: "All right, come again some time." }
  },
  you: [
    { id: "exp", ne: "धेरै महँगो भयो।", ro: "dherai mahango bhayo.", en: "That's too expensive." },
    { id: "che", ne: "अलि सस्तो गर्नुहोस् न।", ro: "ali sasto garnuhos na.", en: "Make it a bit cheaper, please." },
    { id: "ok",  ne: "ठिक छ, दिनुहोस्।", ro: "thik chha, dinuhos.", en: "OK, I'll take it." },
    { id: "no",  ne: "मलाई चाहिँदैन।", ro: "malaai chaahindaina.", en: "I don't need it." }
  ]
};
})();
