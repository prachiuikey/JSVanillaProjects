const text = "Hey there, How you doing?";

let index = 0;

function textWriter() {
    document.body.innerText = text.slice(0,index+1);
    index++;

    if(index > text.length-1)
        index = 0;
}

setInterval(textWriter, 200);