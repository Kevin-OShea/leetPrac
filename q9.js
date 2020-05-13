var isPalindrome = function(x) {
    let s = x.toString();
    let rs = s.split("");
    console.log(rs)
    rs = rs.reverse();
    rs = rs.join("");
    console.log(rs + " rs || " + s)
    if(rs == s)
    {
      return true;
    }
    return false;
};

let x = 121;
console.log(isPalindrome(x));
