// Romanization check: compares each ro: with what the app's own transliteration makes of ne:.
// The short "a" (which Devanagari doesn't write) and w/b are ignored; consonants and the other vowels must match.
// By hand:  node tools/check_ro.js [file ...]   (default: the "which word, when" files). Prints the pairs that differ.
const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "app.js"), "utf8");
const from = src.indexOf("const CONS ="), to = src.indexOf("\n}", src.indexOf("function translit(")) + 2;
const translit = new Function(src.slice(from, to) + "; return translit;")();
const norm = s => s.toLowerCase().replace(/[.?!,;:"“”'()…-]/g, " ").replace(/\s+/g, " ").trim().replace(/aa/g, "A").replace(/a/g, "").replace(/w/g, "b");
const files = process.argv.slice(2).length ? process.argv.slice(2) : ["usage-a.js", "usage-b.js", "usage-c.js"];
let n = 0, bad = 0;
for (const f of files) {
  if (!fs.existsSync(path.join(root, f))) continue;
  const t = fs.readFileSync(path.join(root, f), "utf8");
  for (const m of t.matchAll(/\bne: "([^"]+)",\s*ro: "([^"]*)"/g)) {
    n++; const ne = m[1].replace(/[‌‍]/g, "").replace(/नँ(?=$|[\s।?!,])/g, "न").replace(/ङ्ग/g, "ङ").replace(/ः/g, "");
    const want = norm(translit(ne)).replace(/ph/g, "f"), got = norm(m[2]).replace(/ph/g, "f");
    if (want !== got) { bad++; console.log(`${f}: ${m[1]}\n   written: ${m[2]}\n   app:     ${translit(m[1])}`); }
  }
}
console.log(`${n} pairs checked, ${bad} differ`);
