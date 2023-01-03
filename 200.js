var isIsomorphic = function(s, t) {
  var isIsomorphic = function(s, t) {
    if(s.length !== t.length){
        return false
    }
    for(let i = 0 ; i < s.length ; i++ ){
        if (s[i].match(/\w/) !== null){
           s = s.replaceAll(s[i], "*")
           t = t.replaceAll(t[i], "*")
           console.log(s)
           console.log(t)
        }
    }
    return s === t ? true : false
  }
}
