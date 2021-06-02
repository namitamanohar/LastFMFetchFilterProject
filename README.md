# LastFM Fetch and Filter Project

## Student Instructions

- For this project, you will be looking at the starter code and following the directions in the scripts.js file. This project is an extension on the Music CRUD application to allow you to understand the importance of using APIs. You will be creating a fetch call to retrieve song data from an external API calle LastFM and then rendering that data onto your webpage. You will also go through how to create a filter for the song names. 
- As mentioned in the overview since we are using an external API we will not be doing the actions of Create, Update or Delete. 

## Fetch Call 
-Here is an example fetch call 
```html 
    const res = await fetch(
      "YOUR URL HERE"
    );
```

## Resources

- https://www.w3schools.com/js/js_errors.asp
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter

## Code Snippet for var htmlString
```html
  `
    <div class="song-card">
      <h2>${track.name}</h2>
      <p>Playcount: ${track.playcount}</h2>
      <p>Listeners: ${track.listeners}</h2>
    </div>
    `;
```

## Instructions

1. Clone this repo using codesandbox
2. Open a new project at https://codesandbox.io/dashboard/home
3. Click Create Sandbox at the top right and select Import Project from the left side
4. Paste the url of this project and click Import and Fork
5. Click on the Github Cat on the left side
6. Under Export to new Github Repository: give your repo the name LastFMFetchFilterProject (your project will now be linked to your github)
7. Click Link to Sandbox
8. Follow the steps in the comments in the index.js code

## Video of Exemplar Project

![Static Template](https://user-images.githubusercontent.com/57641506/120548906-ebac3200-c3c0-11eb-9c09-e268b4d12df8.gif)

