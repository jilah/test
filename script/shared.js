const button = document.getElementById('share');
button.addEventListener('click', function(evt){
  evt.preventDefault();
  if (navigator.share !== undefined) {
    navigator.share({
      title: 'Twibbon Generator',
      url  : ''
    })
    .then(() => console.log('Shared successfully'))
    .catch((error) => console.log('An error has occurred'));
  } else {
    console.log('Your browser doesn\'t support Web Share API');
  }
}, false)
