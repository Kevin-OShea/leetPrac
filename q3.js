var lengthOfLongestSubstring = function(s) {
  let longest = "";
  let array = [];
  let length = -1;

  if(s.length > 0)
  {
    if(s.length == 1)
    {
      return 1;
    } else {

      for(let i = 0; i < s.length - 1; i ++)
      {
        longest = s.substring(i, i+1);
          for(let j = i + 1; j < s.length; j++)
          {
            if(!longest.includes(s.substring(j, j + 1)))
            {
              longest = longest + s.substring(j , j + 1);
            } else {
                array.push(longest);
                break;
            }
          }
          array.push(longest);
      }

      console.log(array.length);
      for(let i = 0; i < array.length; i ++)
      {
        if(array[i].length > length)
        {
          console.log(array[i]);
          length = array[i].length;
        }
      }
      return length;


    }
  } else {
    return 0;
  }
};

let word = "au";
console.log(lengthOfLongestSubstring(word));
