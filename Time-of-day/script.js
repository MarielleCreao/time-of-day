function load() {
    var message = window.document.getElementById('message')
    var image = window.document.getElementById('img') 
    var day = new Date()
    var hour = day.getHours()
    var minutes = day.getMinutes()
   // message.innerHTML = `Now it's ${hour}h${minutes}! Have a nice day !`

    if(hour >= 0 && hour < 12) {
        // GOOD MORNING!
        image.src  = 'image/morning.jpg'
        document.body.style.background = 'linear-gradient(to top, #f3e7e9 0%, #e3eeff 99%, #e3eeff 100%)';
        message.innerHTML = `Now it's ${hour}h${minutes}! Have a nice day !`

    } else if (hour >= 12 && hour <= 18) {
        //GOOD AFTERNOON!
        image.src ='image/afternoon.jpg'
        document.body.style.background = 'linear-gradient(to right, #f83600 0%, #f9d423 100%)';
        message.innerHTML = `Now it's ${hour}h${minutes}! Have a wonderful afternoon !`

    }else {
        //GOOD NIGHT!
        image.src='image/night.jpg'
        document.body.style.background= 'linear-gradient(to top, #09203f 0%, #537895 100%)';
        message.innerHTML = `Now it's ${hour}h${minutes}! Good Night !`

    }

}