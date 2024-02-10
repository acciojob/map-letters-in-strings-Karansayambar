//your JS code here. If required.
function mapLetters(word){
	let obj = {};
	for(let i = 0; i < word.length; i++){
		let letter = word[i];
		if(obj[letter] === undefine){
			obj[letter] = [i];
		}else{
			obj[letter].push(i);
		}
	}
	return obj;
}
console.log(mapLetters("dodo"));