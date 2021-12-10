/* 
  Given a string that may have extra spaces at the start and the end,
  return a new string that has the extra spaces at the start and the end trimmed (removed)
  do not remove any other spaces.
*/

const str1 = "   hello world     ";
const expected1 = "hello world";

/**
 * Trims any leading or trailing white space from the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {string} The given string with any leading or trailing white space
 *    stripped.
 */
//1. Create empty var newStr
//2. iterate through string
//2. check if index == " "
//3.    check if both preceeding and succeeding characters != ' '
//4.        If that's the case, push the space to newStr. Otherwise keep looping
//5. If not a space, push character to newStr.
//6. Return (and console log) newStr.
function trim(str) {
    let newStr = '';
    for(let i = 0;i < str.length; i++){
        if(str[i] == ' '){
            if(str[i-1] != ' ' && str[i+1] != ' '){
                newStr += str[i];
            }
        } else {
            newStr += str[i];
        }
    }
    return newStr;
    }
    console.log(trim(str1));

/*****************************************************************************/
