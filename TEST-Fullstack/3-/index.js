
fetch('https://api.shrtco.de/v2/shorten?url=example.org/very/long/link.html',{method:"POST"})
.then(response=> response.json())
.then(data => console.log(data));