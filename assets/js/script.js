/* Author:Aniket */

// Get accordion Heading & accordion Content
  var accHead = document.getElementsByClassName('panelHead');
  var accContent = document.getElementsByClassName('panelContent');
  
// Accordion Function Started
  function Accordion(accHead,accContent) {
// assign click function to every accordion head
  for (i = 0; i < accHead.length; i++) {
      accHead[i].addEventListener('click', openItem);
  }
// open accordion function
    function openItem() {
    for(var head in accHead) {
      if(head == 'length') {
        break;
      }
      // if accordion already opened close it on self click
      var accordionActive = this.classList.contains('active');
      var accordionOpen = this.nextElementSibling.classList.contains('open');
      if(accordionActive === true && accordionOpen === true) {
      this.nextElementSibling.classList.remove('open');
      this.nextElementSibling.classList.add('close');
      this.classList.remove('active');
      return false;
      }
    }
    // if accordion already opened close it on click
    var panelIsOpen = this.parentNode.classList.contains('close');
    var panelIsClosed = this.parentNode.classList.contains('panel');
    for (i = 0; i < accContent.length; i++) {
      // make every accordion heading to be inactive
      accHead[i].classList.remove('active');
      // make clicked accordion heading only active
      this.classList.add('active');
      // make every accordion content to be close
      accContent[i].classList.remove('open');
      // make clicked accordion heading to be opened
      accContent[i].classList.add('close');
    }
    // if accordion already closed open it on click
    if (panelIsClosed || panelIsOpen) {
      this.nextElementSibling.classList.remove('close');
      this.nextElementSibling.classList.add('open');
    }
  }
}
// call Accordion Function
Accordion(accHead,accContent);