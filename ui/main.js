var button = document.getElementById("counter");
button.onclick = function(){
    
    // Create the request 
    var request = new XMLHttpRequest();
    
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


var submit = document.getElementById("submitBtn");
submit.onclick = function() {
    // Make a request to the server and send the home
     // Create the request 
    var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function() {
        
        if(request.readyState === XMLHttpRequest.DONE) {
            // Take some action 
            if(request.status === 200) {
                // Capture the list of names and render it as a list
                //  var names = ["name1","name2","name3","name4"];
                var names = request.responseText;
                names = JSON.parse(names);
                 var list = '';
                 for(var i=0;i<names.length;i++) {
                    list += "<li>"+names[i]+"</li>";
                 }
                 var ul = document.getElementById("nameList");
                 ul.innerHTML = list;
            }
        }
    };
    // Make the request
    var nameInput = document.getElementById("name");
    var Name = nameInput.value;
    request.open("GET","http://kmuraliashwin.imad.hasura-app.io/submit-name?name="+Name,true);
    request.send(null);
    
}
