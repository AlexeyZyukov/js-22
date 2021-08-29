
// const r = fetch('https://pokeapi.co/api/v2/pokemon/2');
//     console.log(r);

// fetch('https://pokeapi.co/api/v2/pokemon/2')
//     .then(response => {
// ////         console.log(response.json());
//         console.log(response);

// ////         return response.json();
//     })
//     .catch (err => {
//     console.log(err)
// });
//     .then(pokemon => {
//         console.log(pokemon);
//     });
    
// fetch('https://pokeapi.co/api/v2/pokemon/2')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch (err => console.log(err));

fetch('https://pixabay.com/api/?key=22969480-c3583c2b4b1ca4646f49ed52f&image_type=photo')
     .then(response => response.json())
    .then(response => console.log(response))
    .then(data => console.log(data))
    .catch(err => console.log(err));
