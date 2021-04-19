function votingToggle(){
    var body = document.getElementById("body");
    if(body.classList.contains("toggledCursor")){
        body.classList.remove("toggledCursor");
    }else{
        body.classList.add("toggledCursor");
    }
}
