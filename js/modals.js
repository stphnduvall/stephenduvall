// Variables for the modal, heading, content, and close elements.
var modal = document.getElementById('modal');
var headingElement = document.getElementById('modal-heading');
var contentElement = document.getElementById('modal-text');
var closeElement = document.getElementsByClassName('close')[0];

var headingText;
var contentHtml;

// Will switch between different content depending on which
// button was pressed
function createModal(type) {
  console.log(type);
  switch(type) {
    case '1':
      headingText = 'PC Specs & Hardware';
      contentHtml = '<p>I custom build my gaming computer 5 years ago. Find the specs here on <a href="https://pcpartpicker.com/user/Display1/saved/#view=DR4tt6">pcpartpicker</a>. The new computer I want to build features an <b>i7-8700</b>, <b>16GB of RAM</b>, and a <b>GTX 1080Ti</b>. <a href="https://pcpartpicker.com/user/Display1/saved/#view=bDsV6h">(pcpartpicker)</a> </p>';
      break;
    case '2':
      headingText = '2nd Modal Heading';
      contentHtml = '<p>2nd modal content</p>';
      break;
    case '3':
      headingText = '3rd Modal Heading';
      contentHtml = '<p>3rd modal content</p>';
      break;
    case '4':
      headingText = '4th Modal Heading';
      contentHtml = '<p>4th Modal Content</p>';
      break;

  }

  // Sets the elements to the correct content
  headingElement.textContent = headingText;
  contentElement.innerHTML = contentHtml;

  // Displays the modal
  modal.style.display = "block";
}

// Closes the modal
closeElement.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
