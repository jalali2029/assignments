var chai = require("chai");
var assert = chai.assert;
describe("A Palindrome Finder", function () {
    it("should Identify a basic Palindrome", function () {
        assert.isTrue(isPalindrome("abba"));
        assert.isTrue(isPalindrome("aba"));
        assert.isTrue(isPalindrome("abc"));
        assert.isTrue(isPalindrome("a"));
        
       
       
        // should work even when ther are spaces capitals and symbols
    });
    it("should identfy a palindrome even with spaces", function(){
        assert.isTrue(isPalindrome("Star Rats"));
        assert.isTrue(isPalindrome("Starr ats"));
        assert.isFalse(isPalindrome("i have a space"));
    });
    it("should identfy a palindrome even with capitals", function(){
        assert.isTrue(isPalindrome("star!rts..."));
    });
    it("should identfy a palindrome even with symbols", function(){
        assert.isTrue(isPalindrome("!dad!"));
    });
    it("should identfy a palindrome even with spaces capitals symbols", function(){

    });
});