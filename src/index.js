
//variables
//create an empty array called topTracksArray
//get the element with the id searchBar and set it to the variable searchBar

//get the element with the id song-list and set it to the variable songsList

//create a function called displayTracks that takes in a parameter tracks

  //map through the paramter tracks returing the html code shown in github set this to the variable htmlString
  










  //set the innerHTML property of songsList to the variable htmlString
  
//end of displayTracks function

//create an async function called getArtists

  //create a try catch statement outlined in the resource below (for the catch simply console.log(err))
  //https://www.w3schools.com/js/js_errors.asp
  
    //write your fetch call using the url with your API key and artist set to the variable res
   


    //take your variable from your fetch and return the json data using .json() and set it to the variable repsonse
    
    //write console.log(response) so you can see what your response from the LastFM API looks like
    //the response from this topSongs method returns a topTracks object that contains a property called track that is an array containing our song names, playCounts etc.
    
    //set the topTracksArray the tracks array from the response
    
    //call the displayTracks function and pass the paramter topTracksArray
    
  
    


//add an onload event to the window calling the getArtists function

//add an eventListener action "keyup" to the variable searchBar with an anonymous function (pass e in your anonymous function parameter)

  //set e.target.value.toLowerCase() to the variable searchString

  //using the filter array method filter the topTracksArray to find the song that either exactly mathches the searchString or where the track.name includes the searchString



  //call the displayTracks function and pass the paramter filteredTracks
 


