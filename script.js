function sayHelloWorld() {
    // let toChange = document.getElementById("toChange").innerHTML
    document.getElementById("toChange").innerHTML = "Hello world!";
    setTimeout(() => {
        document.getElementById("toChange").innerHTML = "Hello?";
    }, 1000);
}