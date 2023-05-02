let teamAScore=0;
    let teamBScore=0;
    let teamAWickets=0;
    let teamBWickets=0;
    let currentTeam='A';
    let overs=0;
    let balls=0;
    function updateScore(runs){
        if(currentTeam =='A' && teamAWickets<10 && overs<=10.0){
            teamAScore+=runs;
            document.getElementById("teamAScore").textContent=`${teamAScore}/${teamAWickets}`;
            updateOver();
            
        }
        else if(currentTeam =='B'){
            teamBScore+=runs;
            document.getElementById("teamBScore").textContent=`${teamBScore}/${teamBWickets}`;
            updateOver();
            checkWinner();
        }
    }
    function updateOver(){
        if (currentTeam=="A"){
        balls++;
            if (balls>5){
                overs++;
                balls=0;
            }
            document.getElementById("teamAovers").textContent=`${overs}.${balls}`;
        }
        else{
            balls++;
            if (balls>5){
                overs++;
                balls=0;
            }
            document.getElementById("teamBovers").textContent=`${overs}.${balls}`; 
        }
        if (overs===10.0 && currentTeam=="A"){
            currentTeam="B";
            overs=0;
        }
        else if(overs===10.0 && currentTeam=="B"){
            checkWinner();
        }
    }
    function updateWickets(){
        if (currentTeam=="A"){
            teamAWickets++;
            document.getElementById("teamAScore").textContent=`${teamAScore}/${teamAWickets}`;
            if (teamAWickets>=10){
                currentTeam="B";
            }
        }
       else if(currentTeam=="B"){
            teamBWickets++;
            document.getElementById("teamBScore").textContent=`${teamBScore}/${teamBWickets}`;
            checkWinner();
       
    }
}
function checkWinner(){
    if (teamBWickets>=10 || teamBScore> teamAScore){
        if (teamBScore>teamAScore){
        document.getElementById("result").textContent="RCB Wins";
    }
    else {
        document.getElementById("result").textContent="CSK  Wins";
    }
let buttons=document.querySelectorAll('button');
buttons.forEach(button =>{button.disabled=true;});
}}