export function makeTitle(slug): string {  
    var words = slug.split('-');
    
    for (var i = 0; i < words.length; i++) {
        var word = words[i];
        words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    return words.join(' ');
}
    

export function numberWithCommas(x):string {
    x = x.toString();
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1,$2");
    return x;
}

export function stripTags(str):string {
    return str.replaceAll(/<\/?[^>]+(>|$)/gi, "")
}