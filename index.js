function receivesAFunction(cb) {
   return cb();
}
function returnsANamedFunction() {
    const fn = () => console.log("named function");
    return fn;
}
function returnsAnAnonymousFunction() {
    return () => console.log("anonymous fn");
}