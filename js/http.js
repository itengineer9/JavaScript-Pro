

function loadText() {
    let xhr = new XMLHTTPRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status ===200){
            document.getElementById('content').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET', extern/gruss.txt, ture);
    xhr.send(null); // send the request without data
    }
    
    document.getElementById('senden'.addEventListener)

