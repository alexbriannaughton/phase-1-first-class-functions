function receivesAFunction(cb) {
    console.log(cb())
}

function returnsANamedFunction() {
    function namedFunction() {
        console.log('hey')
    }
    return namedFunction
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log('sup')
    }
}