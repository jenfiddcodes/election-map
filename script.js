var candidateName=function(name, partyColor)// creates factory function
{
  var politician={};// new blank object
  politician.name=name;
  politician.electionResults=null;

  politician.tallyVotes = function()
  {
    this.totalVotes=0;

    for (var i=0; i< this.electionResults.length; i++ )
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };// end of tallyVotes function


  politician.partyColor=partyColor;

  return politician;

};// end of candidateName function

var setStateResults=function(state)
{
  theStates[state].winner = null;

  if (jen.electionResults[state] > mike.electionResults[state])
  {
    theStates[state].winner =jen;
  }
  else if(jen.electionResults[state] < mike.electionResults[state])
  {
    theStates[state].winner=mike;
  }


    var stateWinner=theStates[state].winner;

  if (stateWinner!=null)
    {
      theStates[state].rgbColor=stateWinner.partyColor;
    }
  else
    {
      theStates[state].rgbColor=[11, 32, 57];
    }

stateName.innerText=theStates[state].nameFull;
stateAbbr.innerText="(" +theStates[state].nameAbbrev + ")";
candidate1name.innerText=jen.name;
results1.innerText=jen.electionResults[state];
candidate2name.innerText=mike.name;
results2.innerText=mike.electionResults[state];

if (theStates[state].winner === null)
{
  winnersName.innerText = "DRAW";
}
  else
  {
    winnersName.innerText=theStates[state].winner.name;
  }

}; // end of setStateResults function


var jen=candidateName("Jersey Jen", [132, 17, 11]);
var mike=candidateName("Maryland Mike",  [245, 141, 136]);

console.log("Jen's color is: " + jen.partyColor);
console.log("Mike's color is: " + mike.partyColor);

jen.electionResults=[5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];
mike.electionResults=[4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

jen.electionResults[9]=1;
jen.electionResults[4]=17;
jen.electionResults[43]=11;

mike.electionResults[9]=28;
mike.electionResults[4]=38;
mike.electionResults[43]=27;
console.log(jen.electionResults);
console.log(mike.electionResults);

jen.tallyVotes();
mike.tallyVotes();

console.log("Jen's total votes are" + " "+jen.totalVotes);
console.log("Mike's total votes are" + " "+mike.totalVotes);

var winner={};

if (jen.totalVotes > mike.totalVotes)
{
  winner=jen.name;
}
else if (jen.totalVotes < mike.totalVotes)
{
  winner=mike.name;
}

 else winner="a draw";

console.log("AND THE WINNER IS..." + winner + "!!!");

 var countryInfoTable= document.getElementById('countryResults');
  countryInfoTable.children[0].children[0].children[0].innerText=jen.name;
  countryInfoTable.children[0].children[0].children[1].innerText=jen.totalVotes;
  countryInfoTable.children[0].children[0].children[2].innerText=mike.name;
  countryInfoTable.children[0].children[0].children[3].innerText=mike.totalVotes;
  countryInfoTable.children[0].children[0].children[5].innerText=winner;

var stateInfoTable = document.getElementById('stateResults');
var header = stateInfoTable.children[0].children[0];
var stateName = header.children[0];
var stateAbbr=header.children[1];
var body=stateInfoTable.children[1];
var candidate1name=body.children[0].children[0];
var results1=body.children[0].children[1];
var candidate2name=body.children[1].children[0];
var results2=body.children[1].children[1];
var winnersName=body.children[2].children[1];
