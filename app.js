window.onload = function(){
    
    var searchBtn = document.querySelector("button");
    var httpRequest;

    searchBtn.addEventListener('click',function(elem){
        elem.preventDefault();
        httpRequest = new XMLHttpRequest();

        var url = "superheroes.php";
        httpRequest.onreadystatechange = loadHeroes;
        httpRequest.open('GET',url);
        httpRequest.send();
    })

    function loadHeroes(){
        if(httpRequest.readyState ===XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                alert(response);
            }else{
                alert('there was a problem')
            }
        }
    }
}
