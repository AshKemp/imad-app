// console.log('Loaded!');


// var element = document.getElementById("main-text");

// element.innerHTML = "This is a new value";


// var img = document.getElementById("madi");
// var marginLeft = 0;
// function moveRight() {
//     marginLeft = marginLeft+1;
//     img.style.marginLeft = marginLeft+'px';
// }
// img.onclick = function() {
//     var interval = setInterval(moveRight,50);
// }

var button = document.getElementById("counter");
button.onclick = function(){
    
    // Create the request 
    var request = new XMLHTTPRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE) {
            // Take some action 
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById("count");
                span.innerHTML = counter.toString();
            }
        }
    };
    // Make the request
    request.open("GET","http://kmuraliashwin.imad.hasura-app.io/counter",true);
    request.send(null);
};