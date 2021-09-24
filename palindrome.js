function palindrome(str) {
  let reverse = []
  var punex = /[^a-zA-Z0-9]*/g
  str = str.toLowerCase()
  str = str.replace(punex, "")
  for (let i = str.length-1;i >-1; i--) {
    reverse.push(str[i])
  }
  reverse = reverse.join("")
  if (reverse === str){
  return true;
  } else {
    return false
  }
}

palindrome("A man, a plan, a canal. Panama");
