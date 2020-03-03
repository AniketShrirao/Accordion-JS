/* Author:Aniket */

function Accordion() {
  var accHead = document.getElementsByClassName('panelHead');
  var accContent = document.getElementsByClassName('panelContent');
  var j = 0;
  var previousActive;

  function firstActive() {
    accHead[0].classList.add('active');
    accContent[0].classList.add('open');
  }
  firstActive();

  for (i = 0; i < accHead.length; i++) {
      accHead[i].addEventListener('click', toggleItem, false);
  }
    function toggleItem() {
    for(var head in accHead) {
      if(head == 'length') {
        break;
      }
      accHead[head].classList.remove('active');
    }
    var panelIsOpen = this.parentNode.classList.contains('close');
    var panelIsClosed = this.parentNode.classList.contains('panel');
    for (i = 0; i < accContent.length; i++) {
      if(previousActive) {
        accHead[i].classList.remove('active');        
      }
      this.classList.add('active');
      accContent[i].classList.remove('open');
      accContent[i].classList.add('close');
    }
    if (panelIsClosed || panelIsOpen) {
      this.nextElementSibling.classList.remove('close');
      this.nextElementSibling.classList.add('open');
    }
  }
}
Accordion();