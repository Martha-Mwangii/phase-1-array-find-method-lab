// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
  
    { year: "1960", result: "N/A"}
  ]
  function superbowlWin(record){
    let winResult = record.find(function(record){
      return record.result ==="W";
    })
    if(winResult){
      return winResult.year;
      
    }
    
  }
