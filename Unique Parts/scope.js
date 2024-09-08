function scope(print) {
    if(print) {
        var insideIf = 12;
    }
    console.log(insideIf);
}

function letScope(print) {
    if(print) {
        let insideIf = 12;
    }
    console.log(insideIf);
}
letScope(true);