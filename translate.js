document.getElementById("b").onclick=func;
document.getElementById("b1").onclick=func1;

//input...output

function func(){

    const encodedParams = new URLSearchParams();
encodedParams.append("q", document.getElementById("i1").value);
encodedParams.append("target", document.getElementById("choose").value);
encodedParams.append("source", "en");

const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
		'X-RapidAPI-Key': '5fb6cd0eaemsh07d74ba41c1436bp17ee3bjsnc0ce62eebc04'
	},
	body: encodedParams
};

fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
	.then(response => response.json())
	.then(response => {console.log(response)
    document.getElementById("answer").innerHTML=response['data']['translations'][0]['translatedText'];}
    )
	.catch(err => console.error(err));
          
    }



        //languages        

        function func1(){
        
        const options = {
            method: 'GET',
            headers: {
                'Accept-Encoding': 'application/gzip',
                'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
                'X-RapidAPI-Key': '5fb6cd0eaemsh07d74ba41c1436bp17ee3bjsnc0ce62eebc04'
            }
        };
        
        fetch('https://google-translate1.p.rapidapi.com/language/translate/v2/languages', options)
            .then(response => response.json())
            .then(response => {

                var languages = response['data']['languages']

                const p = [];

                for(let i=0;i<languages.length;i++){
                  p.push(languages[i]['language']);
                }
                // console.log(p); 
              
                var select=document.getElementById("choose");
                for (var i = 0; i < p.length; i++) {
                    var optn = p[i];
                    var el = document.createElement("option");
                    el.textContent = optn;
                    el.value = optn;
                    select.appendChild(el);
                }

}).catch(err => console.error(err));
        
           
        }