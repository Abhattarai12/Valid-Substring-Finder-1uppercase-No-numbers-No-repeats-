/* Task - Find a substring within a given string that will return a valid password.
Valid password rules - Must have at least 1 capital letter, No numbers allowed and no repeating characters.
*/

const a = function(string) {
  // Try with input "aa0Baa0aaBaa00aa0Ba"
  var re = /(?=[^\d]*[A-Z])[^\d]+/g;
  var str = string;
  var match;
  var len = 0;
  var longestSubString = null;
  do {
    match = re.exec(str);

    if (match != null) {
      if (match[0].length > len) {
        longestSubString = match;
        len = match[0].length;
      }
    }
  } while (match);
  if (len != 0) {
    return len;
  } else {
    return 0;
  }
}

