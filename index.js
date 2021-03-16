async function handle(event){
    console.log("A form has arrived!");
    $("#emotion").html("Loading...");
    event.preventDefault();

    var myForm = document.getElementById("image-form");
    var payload = new FormData(myForm);

    var functionUrl = "https://timetoeat.azurewebsites.net/api/HttpTrigger1?code=zLD/jBqIBGhLEk1wP5aeJgexJtPXFefUHasxWp7pjTNPvHt10iVnag=="

    const resp = await fetch(functionUrl, {
        method: "POST",
        body: payload,
    });

    var data = await resp.json();
