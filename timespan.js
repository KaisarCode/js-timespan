// Returns an extract of unix time that changes each S seconds
function timeSpan(S) {
    S = S || 1;
    if (isNaN(S)) S = 0;
    var ts = new Date().getTime() / 1000;
    return Math.round(ts / S);
}
