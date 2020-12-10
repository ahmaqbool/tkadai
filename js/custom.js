<!-- Google Analytics -->
window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
ga('create', 'UA-185276594-Y', 'auto');
ga('send', 'pageview');

function includeJs(jsFilePath) {
    var js = document.createElement("script");

    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
    console.log("agile new url");
}

includeJs("https://www.google-analytics.com/analytics.js")