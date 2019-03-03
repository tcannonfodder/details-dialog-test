document.addEventListener('DOMContentLoaded', function(){
  var dynamicPopup = document.querySelector('.dynamically-loaded')
  dynamicPopup.addEventListener('toggle', function(event){
    var popupBody = event.target.getElementsByTagName('details-popover')[0]
    if(event.target.open){
      event.target.classList.add('loading')
      setTimeout(function(){
        event.target.classList.remove('loading')
        popupBody.innerHTML = "<h1>My new Body!</h1><p>Look at this!</p>"
        console.log("weiuhfiuhwef")
      }, 500)
    }
  })
})