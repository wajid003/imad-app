var button =document.getElementById('counter');
var counter = 0;
button.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status ==200){
                var counter = request.responseText;
    var span=document.getElementById('count');
    span.innerHTML = counter.toString();
            }
        }
};
request.open('GET','http://abdulwajid764.imad.hasura-app.io/counter',true);
request.send(null);
};
 var text = document.getElementById("text");
            var post = document.getElementById("post");
            post.onclick = function(){
                var request = new XMLHttpRequest();
                request.onreadystatechange = function(){
                  if(request.readyState == XMLHttpRequest.DONE){
                    if(request.status ==200){
                        var text2 = request.responseText;
                        text2 = JSON.parse(text2);
                        var print = document.getElementById("print");
                        print.innerHTML = text2.value;
            }
                  }
                };
                 var text1 = text.value;
                request.open('GET','http://abdulwajid764.imad.hasura-app.io/article.html' +text1,true);
                 request.send(null);
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function(){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE){
            if(request.status == 200){
                var names = request.responseText;
                names = JSON.parse(names);
var list = '';
for (var i=0; i< names.length; i++){
    list += '<li>' + names[i] + '</li>';
    
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
}
}
};
var nameInput = document.getElementById('name');
var name = nameInput.value;
request.open('GET', 'http://abdulwajid764.imad.hasura-app.io/submit-name?name?' +name , true);
request.send(null);
};