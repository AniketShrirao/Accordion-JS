/* Author:Aniket */

var accHead = document.getElementsByClassName('panelHead');
var accContent = document.getElementsByClassName('panelContent');

function firstActive() {
  accHead[0].classList.add('active');
  accContent[0].classList.add('open');
}
firstActive();

for (i = 0; i < accHead.length; i++) {
    accHead[i].addEventListener('click', toggleItem, false);
}
function toggleItem() {
    var panelIsClosed = this.parentNode.classList.contains('close');
    for (i = 0; i < accContent.length; i++) {
        accContent[i].classList.remove('open');
        accContent[i].classList.add('close');
    }
    if (panelIsClosed) {
      this.parentNode.classList.remove('close');
      this.parentNode.classList.add('open');
    }
}
