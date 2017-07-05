/**
 * Converts text to Discord emojis.
 * @param {String} text The text to convert.
 * @returns {String} The results.
 */
function toEmoji(text){
    var results = "";
    for (var i = 0; i < text.length; i++) {
        var character = text[i].toLowerCase();
        if (new RegExp("[a-zA-Z ]").test(character)){
            if (character == "  ") {
                results += "  ";
            } else {
                results += ":regional_indicator_" + character + ": ";
            }
        } else {
            results += character + " ";
        }
    }
    results = results.trim();
    return results;
}

module.exports = toEmoji;