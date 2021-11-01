window.onload = function(){
    
    var searchBtn = document.querySelector("button");
    var input = document.getElementById('heroname');
    var httpRequest;
    var letters = /^[a-zA-Z\s]*$/


    searchBtn.addEventListener('click',function(elem){
        elem.preventDefault();
        httpRequest = new XMLHttpRequest();

        if(input.value.match(letters)){
            var url = "http://localhost/info2180-lab4/superheroes.php?heroname="+document.getElementById('heroname').value;
            httpRequest.onreadystatechange = loadHeroes;
            httpRequest.open('GET',url);
            httpRequest.send();
            console.log(httpRequest)
            console.log(document.getElementById('heroname').value);
        }else{
            alert('Invalid Input.\nLetters Only!')
        }
    })


    function loadHeroes(){
        if(httpRequest.readyState ===XMLHttpRequest.DONE){
            if(httpRequest.status === 200){
                var response = httpRequest.responseText;
                console.log(response);
                document.getElementById('result').innerHTML = response;
               
            }else{
                alert('there was a problem')
            }
        }
    }
}
