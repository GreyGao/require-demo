require.config({
    paths: {
        jquery: 'jquery.min'
    }
});

requirejs(["hello"], function(hello) {
    var text = JSON.stringify(hello);
    var content = document.createElement("div");
    content.innerHTML = text;
    document.body.appendChild(content);

    var sayHi = hello.sayHi;
    var hi = document.createElement("div");
    hi.innerHTML = sayHi;
    document.body.appendChild(hi);
});

