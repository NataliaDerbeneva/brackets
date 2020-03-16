module.exports = function check(str, bracketsConfig) {
   
    let arr = new Array();
    for(let i=0; i<str.length; i++){
        for(let j=0; j<bracketsConfig.length; j++){
            if(str[i] == bracketsConfig[j][0]){
              if(bracketsConfig[j][0]==bracketsConfig[j][1] && arr[arr.length-1]==j){
                arr.pop();
                break;  
              }
              arr.push(j);
              break;
            } 
            
            if(str[i] == bracketsConfig[j][1]){
                if(arr[arr.length-1] == j) {
                  arr.pop();
                  break;
                } else return false;  
            }
        }
    }
  
    if(arr.length == 0) return true;  
    else return false;
}
