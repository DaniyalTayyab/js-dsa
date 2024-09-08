let objOne = {
    name: "daniyal",
    age: 27
}
let objTwo = {
    name: "awais",
    age: 27
}

function isEquivalent(a,b) {
    let aProps = Object.getOwnPropertyNames(objOne);
    let bProps = Object.getOwnPropertyNames(objTwo);

    if(aProps.length != bProps.length) {
        return false;
    }

    for(let i = 0; i < aProps.length; i++) {
        propName = aProps[i];
        if(a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}

console.log(isEquivalent(objOne, objTwo));