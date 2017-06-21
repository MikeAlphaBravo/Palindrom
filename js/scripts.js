//Back-end Logic


function palindrome(str) {
    var len = str.length;
    for ( var i = 0; i < Math.floor(len/2); i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

// var checkPalindrom = function(palindrom) {
//
//     for( var i = palindrom.length; i > 0; i-- ) {
//       return 1;
//     } if( palindrom[i] = palindrom.charAt(palindrom.length)-1 ) {
//         document.write('the word is palindrome.');
//     } else {
//         document.write('the word is not palindrome!');
//     }
// };

//checkPalindrom('wordthatwillbechecked');

//Front-end Logic

$(document).ready(function() {
  $("form#palinCalc").submit(function(event) {
    event.preventDefault();
    var string = parseInt($("input#palindrom").val());
//    var result = palindrom(string);

    $(".answer").text(result);

    $("#result").show();
  });
});
