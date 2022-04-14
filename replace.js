let replacing = {
	"дь":"ď",
	"ть":"ť",
	"нь":"ň",
	"А":"A",
	"Б":"B",
	"В":"V",
	"Г":"H",
	"Ґ":"G",
	"Д":"D",
	"Е":"E",
	"Є":"Je",
	"Ж":"Ž",
	"З":"Z",
	"И":"Y",
	"І":"I",
	"Ї":"Ji",
	"К":"K",
	"Л":"L",
	"М":"M",
	"Н":"N",
	"О":"O",
	"П":"P",
	"Р":"R",
	"С":"S",
	"Т":"T",
	"У":"U",
	"Ф":"F",
	"Х":"Ch",
	"Ц":"C",
	"Ч":"Č",
	"Ш":"Š",
	"Щ":"Šč",
	"Ь":"'",
	"Ю":"Ju",
	"Я":"Ja",
	"а":"a",
	"б":"b",
	"в":"v",
	"г":"h",
	"ґ":"g",
	"д":"d",
	"е":"e",
	"є":"je",
	"ж":"ž",
	"з":"z",
	"и":"y",
	"і":"i",
	"ї":"ji",
	"й":"j",
	"к":"k",
	"л":"l",
	"м":"m",
	"н":"n",
	"о":"o",
	"п":"p",
	"р":"r",
	"с":"s",
	"т":"t",
	"у":"u",
	"ф":"f",
	"х":"ch",
	"ц":"c",
	"ч":"č",
	"ш":"š",
	"щ":"šč",
	"ь":"'",
	"ю":"ju",
	"я":"ja",
	"Й":"J"
}


let newBody = document.body.innerHTML


const reg = /([ \n\r>]+|$|^)([а-яА-ЯЁёіIїЇєЄґҐ'']{2,})([ \n\r<.,]+|$|^)/gi

console.log(newBody.match(reg))

document.body.innerHTML = newBody.replace(reg, "$1 <span class='cyrillicum-transcribed' title=$2> $2 </span> $3")

for (let cyril of document.getElementsByClassName('cyrillicum-transcribed')){
    // console.log(cyril.innerHTML)
    for (let [chars, repl] of Object.entries(replacing)){
	// console.log(chars, repl)
        cyril.innerHTML = cyril.innerHTML.replace(chars, repl)
    }
}
