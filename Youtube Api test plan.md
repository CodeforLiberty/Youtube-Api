Youtube Api test

Story : A user wants to search youtube with our app for a specific query

response: When the user clicks on the search button we send a get request to an api

risks:The default behavior of the button which can event.preventdefault()

Story: User adds a query to the input and clicks the search button

response: send the youtube api the request object

next: The youtube api will send back a JSON object  and give us the server status of 200

risk:We recieve a server status that isn't a 200

next:if we get back 200 then we render the JSON object's desired properties
