function checked() {
let radioBtn = document.querySelectorAll('.radio-item input')
for(let test = 0; test< radioBtn.length-2; test++) {
if(radioBtn[test].name === radioBtn[test+1].name) {
radioBtn[test].checked = true
}
}
radioBtn[radioBtn.length-1].checked = true
}
function autoSubmit() {
document.querySelector('.btn-google').click()
}
(function() {
this.checked()
this.autoSubmit()
})()
