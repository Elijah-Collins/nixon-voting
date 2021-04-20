function votingToggle(){
    var body = document.getElementById("body");
    if(body.classList.contains("toggledCursor")){
        this.body.classList.remove("toggledCursor");
    }else{
        this.body.classList.add("toggledCursor");
    }
}
function submitVoteNixon(){
    var ballotBoxes = document.getElementsByClassName("ballotBox");
    var body = document.getElementById("body");
    var nixonBox = document.getElementById("Nixon_Ballot");
    
    if(body.classList.contains("toggledCursor")){
        if(ballotBoxes = nixonBox){
            alert("Thank you for voting for President Richard Nixon.");
        }
    }else{
        alert("Please pick up a ballot and continue.");
    }
}
function submitVoteMcGovern(){
    var ballotBoxes = document.getElementsByClassName("ballotBox");
    var body = document.getElementById("body");
    var mcgovernBox = document.getElementById("McGovern_Ballot");
    
    if(body.classList.contains("toggledCursor")){
        if(ballotBoxes = mcgovernBox){
            alert("This ballot is closed at this time, please try again later.");
        }
    }else{
        alert("Please pick up a ballot and continue.");
    }
}

function welcomingPopup(){
    var ;
}