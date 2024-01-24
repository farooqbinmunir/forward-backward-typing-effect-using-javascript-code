/* Script starts */

/* Typing Effect */
var typingPlaceholder = document.querySelector('.fbm_typing_effect_text_item.fbm_show');
// typingPlaceholder.innerHTML = '';
const totalType = [];
const typeElements = document.querySelectorAll('.fbm_typing_effect_text_item');
typeElements.forEach(function(v, i, a){
	totalType.push(v.innerHTML);
});


const delayTyping_char = 100;
const delayErasing_text = 100;
const delayTyping_text = 1000;

let totalTypeIndex = 1;
let charIndex = 0;

function typeText() {
if (charIndex < totalType[totalTypeIndex].length) {
	typingPlaceholder.textContent += totalType[totalTypeIndex].charAt(charIndex);
	charIndex++;
	setTimeout(typeText, delayTyping_char);
}
else {
	setTimeout(eraseText, delayTyping_text);
}
}

function eraseText() {
if (charIndex > 0) {
	typingPlaceholder.textContent = totalType[totalTypeIndex].substring(0, charIndex-1);
	charIndex = charIndex-1;
	setTimeout(eraseText, delayErasing_text);
}
else {
	totalTypeIndex++;

	if (totalTypeIndex >= totalType.length)
		totalTypeIndex = 0;
		setTimeout(typeText, delayTyping_text);
	}
}

setTimeout(function(){
	if (totalType[totalTypeIndex].length) {
		typingPlaceholder.textContent = '';
		setTimeout(typeText, delayTyping_text);
	}
}, 1000);