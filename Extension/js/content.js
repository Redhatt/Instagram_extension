// window.addEventListener("scroll", function(event) {
// 	var article_name = document.getElementsByClassName(
// 		'_8Rm4L M9sTE L_LMM SgTZ1 ePUX4');
// 	var img_dis = document.getElementsByClassName('FFVAD');
// 	var profile_pic_name = document.getElementsByClassName(
// 		"sqdOP yWX7d     _8A5w5   ZIAjV ");
// 	var edit_pic = document.getElementsByClassName("_97aPb");
// 	var div_con_pic = document.getElementsByClassName("KL4Bh");
// 	var keyArray = Object.keys(article_name);
// 	var len = keyArray.length;
// 	chrome.runtime.sendMessage(len);
// 	if (img_dis[len-3] != null) {
//     //chrome.runtime.sendMessage("YEAH !");
window.addEventListener("scroll", function(event) {
var article_name = document.getElementsByClassName(
	'_8Rm4L M9sTE L_LMM SgTZ1 ePUX4');
var img_dis = document.getElementsByClassName('FFVAD');
var profile_pic_name = document.getElementsByClassName(
	"sqdOP yWX7d     _8A5w5   ZIAjV ");
var edit_pic = document.getElementsByClassName("_97aPb");
var div_con_pic = document.getElementsByClassName("KL4Bh");
var keyArray = Object.keys(article_name);
keyArray.forEach(function(key) {
	if (img_dis[key] != null) {
		chrome.runtime.sendMessage(img_dis[key].alt);
		var discription = img_dis[key].alt;
		var list = ['corona', 'janta', 'curfew', 'single', 'best friend',
			'quarantine', 'heart', 'life style', 'tiktok', 'tag', 'love',
			'did you know', 'heart break', 'date', 'cricket', 'dhoni', 'mahi',
			 'kohli', 'respect', 'isolation', 'lockdown', 'ramayan', 'mahabharat',
		 'bestie', 'best friend'];
		var i = 0;
		for (i; i < list.length; i++) {
			var regexConstructor = new RegExp(list[i]);
			if (regexConstructor.test(discription.toLocaleLowerCase())) {
				//edit_pic[key].style.visibility = 'hidden';
				div_con_pic[key].innerHTML = discription;
				// ---appending discription
				// var newDiv = document.createElement("div");
				// var newContent = document.createTextNode(discription);
				// newDiv.appendChild(newContent);
				// div_con_pic[key].append(newDiv);
				//----
				// ---to add reson for discarding
				const name = profile_pic_name[key].innerHTML;
				profile_pic_name[key].innerHTML = `${name}--> EDITTED Due to ${regexConstructor}!`;
				//---
				chrome.runtime.sendMessage(article_name[key]);
				break;
			}
		}
	}
});
});
// });
