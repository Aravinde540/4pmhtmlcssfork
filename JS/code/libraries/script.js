$('#btn').click(function ()
{
    $("#main").html(
			`<img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" height="50"/>`,
		)
})

var typed = new Typed("#text", {
	strings: ["Developer", "Trainer","Good boy"],
    typeSpeed: 30,
    loop: true,
    loopCount:Infinity
})