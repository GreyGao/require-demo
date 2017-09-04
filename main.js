require.config({
    paths: {
        jquery: 'jquery.min'
    }
});

requirejs(["hello"], function(content) {
    var text = JSON.stringify(content);
    var div = document.createElement("div");
    div.innerHTML = text;
    document.body.appendChild(div);
});

