'use strict';

// Lektion
// const pokemonArray = [];

// async function fetchPokemon(pokeApiString) {
//     console.log('fetchPokemons()');
//     // const pokeApiString = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

//     try {
//         const response = await fetch(pokeApiString);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }

//     // fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
//     // .then(response => {
//     //     console.log(response);
//     //     if(response.status !== 200) {
//     //         throw 'Request rejected!'
//     //     }
//     //     return response.json();
//     // })
//     // .then(data => {
//     //     console.log(data);
//     //     console.log(data.count);
//     //     console.log(data.results[102].name);
//     // })
//     // .catch(error => {
//     //     console.log(error);
//     // });
// }

// async function hund() {
//     const pokemons = await fetchPokemon('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
//     console.log(pokemons);

//     // console.log(typeof pokemons.results);

//     pokemons.results.forEach(pokemon => pokemonArray.push(pokemon));

//     // pokemonArray.forEach(pokemon => {
//     //     console.log(pokemon.url);
//     // })


//     const bulbasaur = await fetchPokemon(pokemonArray[0].url);
//     console.log(bulbasaur);

//     const mainRef = document.querySelector('main');

//     bulbasaur.moves.forEach(move => {
//         const pRef = document.createElement('p');
//         pRef.textContent = move.move.name;
//         mainRef.appendChild(pRef);
//     })
// }

// hund();





// Övning 1
// const pokemonArray = [];

// async function fetchPok(pokeApiString) {
//     // const pokeApiString = 'https://santosnr6.github.io/Data/pokemons.json';
//     // console.log(pokeApiString);

//     try {
//         const response = await fetch(pokeApiString);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }


// async function readPok() {
//     const pokemon = await fetchPok('https://santosnr6.github.io/Data/pokemons.json');

//     pokemon.forEach(pokemon => pokemonArray.push(pokemon));
//     console.log(pokemonArray);

//     const mainRef = document.querySelector('main');

//     pokemon.forEach(pokemon => {
//         const pRef = document.createElement('p');
//         pRef.textContent = pokemon.name;
//         mainRef.appendChild(pRef);
//     })

// }

// readPok();



// async function readPok() {
//     const pokemon = fetchPok('https://santosnr6.github.io/Data/pokemons.json');

//     pokemonArray.forEach(pokemon => {
//         console.log(pokemon);
//     })
// }

// readPok();


// window.addEventListener('DOMContentLoaded', () => {
//     console.log('DOM loaded');

//     // uppgift1();
// })

// function uppgift1() {
//     fetch('https://santosnr6.github.io/Data/pokemons.json')
//         .then(response => {
//             return response.json();
//         })
//         .then(data => {
//             console.log(data);
//             data.map(pokemon => console.log(pokemon.name));
//             const mainRef = document.querySelector('main');
//             data.map(pokemon => {
//                 const headRef = document.createElement('h1');
//                 headRef.textContent = pokemon.name;
//                 mainRef.appendChild(headRef);
//             })
//         })
// }




// Övning 2
// const dogArray = [];

// async function fetchDog(dogApiString) {
//     // const pokeApiString = 'https://santosnr6.github.io/Data/pokemons.json';
//     // console.log(pokeApiString);

//     try {
//         const response = await fetch(dogApiString);
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//         return null;
//     }
// }


// async function readDog() {
//     const dog = await fetchDog('https://santosnr6.github.io/Data/dogs.json');

//     dog.forEach(dog => dogArray.push(dog));
//     console.log(dogArray);

//     const mainRef = document.querySelector('main');

//     dog.forEach(dog => {
//         const pRef = document.createElement('p');
//         pRef.textContent = dog.name;
//         mainRef.appendChild(pRef);
//     })

// }

// readDog();





// Övning 3
const bookArray = [];

async function fetchBook(bookApiString) {
    // const pokeApiString = 'https://santosnr6.github.io/Data/pokemons.json';
    // console.log(pokeApiString);

    try {
        const response = await fetch(bookApiString);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
        return null;
    }
}


async function readBook() {
    const book = await fetchBook('https://santosnr6.github.io/Data/books.json');

    book.forEach(book => bookArray.push(book));
    console.log(bookArray);

    const mainRef = document.querySelector('main');

    book.filter(book => book.pages < 500).forEach(book => {
        const pRef = document.createElement('p');
        pRef.textContent = `Title: ${book.title}, pages: ${book.pages}`;
        mainRef.appendChild(pRef);
    })

}

// readBook();





// Övning 4
// const visitorsArray = [];

// async function fetchVisitors(visitorsApiString) {

//     try {
//         const response = await fetch(visitorsApiString);

//         if(!response.ok) {
//             throw new 'Something is wrong...';
//         }
//         const data = await response.json();
//         return data;
//     } catch(error) {
//         console.log(error);
//         return null;
//     };
// }

// async function getVisitors() {
//     const visitors = await fetchVisitors('https://santosnr6.github.io/Data/attendees.json');

//     visitors.forEach((visitor) => visitorsArray.push(visitor));
//     console.log(visitorsArray);

//     const mainRef = document.querySelector('main');

//     visitorsArray
//     .filter((visitor) => visitor.attending === true && visitor.allergies.length > 0)
//     .forEach((visitor) => {
//         const pRef = document.createElement('p');
//         pRef.textContent = `${visitor.name} is coming to event! Mind their allergies!`;
//         mainRef.appendChild(pRef);
//     })
// }

// getVisitors();





// Övning 5, 6
let matchedCharacters = [];

document.addEventListener('DOMContentLoaded', (event) => {
    let pokemonsArray = [];
    let selectedIndex = -1;
    const inputRef = document.querySelector('#pokemonItem');
    const resultsContainer = document.querySelector('.results');

    async function fetchPokemons(pokemonsApiString) {
        try {
            const response = await fetch(pokemonsApiString);

            if (!response.ok) {
                throw 'Something weird happen...';
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function getPokemonDetails(pokemonUrl) {
        try {
            const response = await fetch(pokemonUrl);

            if (!response.ok) {
                throw 'It is impossible to get that pokemon at the moment...';
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.log(error);
            return null;
        }
    }

    async function getPokemon() {
        const resultsList = document.querySelector('.results-info__list');

        const pokemons = await fetchPokemons('https://santosnr6.github.io/Data/pokemons.json');

        pokemons.forEach((pokemon) => pokemonsArray.push(pokemon));
        console.log(pokemonsArray);

        const formRef = document.querySelector('#sForm');
        // const mainRef = document.querySelector('main');

        formRef.addEventListener('submit', async function (event) {
            event.preventDefault();

            const userInput = document.querySelector('#pokemonItem').value.toLowerCase();

            const foundPokemon = pokemonsArray.find((pokemon) => pokemon.name.toLowerCase() === userInput);

            resultsContainer.innerHTML = '';

            if (foundPokemon) {
                const pokemonDetails = await getPokemonDetails(foundPokemon.url);
                console.log(pokemonDetails);

                // const listItem = document.createElement('li');
                // listItem.textContent = `Name: ${foundPokemon.name}`;
                // resultsContainer.appendChild(listItem);

                renderPokemonDetails(foundPokemon.url);

                pokemonsArray = await fetchPokemons('https://santosnr6.github.io/Data/pokemons.json');
                console.log(pokemonsArray);


                resultsContainer.style.display = 'flex';

                matchedCharacters = pokemonsArray;

                // const aRef = document.createElement('a');

                // // aRef.textContent = `Here is the pokemon!`;
                // aRef.href = foundPokemon.url;
                // aRef.textContent = `Details`;
                // aRef.target = '_blank';

                // resultsContainer.appendChild(aRef);
            } else {
                console.log('Pokemon is not found!');
                resultsContainer.style.display = 'none';
            }
        })

    }

    getPokemon();

    inputRef.addEventListener('input', updateAutoCompleteList);
    document.addEventListener('keydown', (e) => handleKeyDown(e));

    async function renderPokemonDetails(url) {
        try {
            const data = await getPokemonDetails(url);

            let listRef = document.querySelector('.results-info__list');
            if (!listRef) {
                listRef = document.createElement('ul');
                listRef.classList.add('results-info__list');
                // Assuming you have a container element, replace '.container' with the actual selector
                document.querySelector('.results').appendChild(listRef);
            }

            const resultListContent = `
                <li class="results-info__list-item">Name: ${data.name}</li>
                <li class="results-info__list-item">Height: ${data.height} cm</li>
                <li class="results-info__list-item">Weight: ${data.weight} kg</li>
                <li class="results-info__list-item">Base expirience : ${data.base_experience}</li>
            `;

            listRef.innerHTML = resultListContent;
        }
        catch (error) {
            console.log(error);
        }
    }

    function updateAutoCompleteList(event) {
        console.log(event.target.value);

        const autoCompleteList = document.querySelector('#autocompleteList');
        const userInput = event.target.value.toLowerCase();

        if (userInput === '') {
            matchedCharacters = [];
            autoCompleteList.innerHTML = '';
            return;
        }

        matchedCharacters = pokemonsArray.filter(pokemon => pokemon.name.toLowerCase().includes(userInput)); 
        console.log(matchedCharacters.length);

        autoCompleteList.innerHTML = '';

        let maxCounter = 10;
        if (matchedCharacters.length < 10) {
            maxCounter = matchedCharacters.length;
        }

        for (let i = 0; i < maxCounter; i++) {
            const listItemRef = document.createElement('li');
            listItemRef.textContent = matchedCharacters[i].name;
            autoCompleteList.appendChild(listItemRef);

            listItemRef.addEventListener('click', () => {
                renderPokemonDetails(matchedCharacters[i].url);
                autoCompleteList.innerHTML = '';
            });
        }
    }

    function handleKeyDown(event, matchedCharacters) {
        const autoCompleteList = document.querySelector('#autocompleteList');
        const items = autoCompleteList.querySelectorAll('li');

        switch (event.key) {
            case 'ArrowUp':
                selectedIndex = Math.max(0, selectedIndex - 1);
                break;
            case 'ArrowDown':
                if (matchedCharacters && matchedCharacters.length > 0) {
                    selectedIndex = Math.min(matchedCharacters.length - 1, selectedIndex + 1);
                }
                break;
            case 'Enter':
                if (matchedCharacters && matchedCharacters.length > 0 && selectedIndex !== -1) {
                    renderPokemonDetails(matchedCharacters[selectedIndex].url);
                    autoCompleteList.innerHTML = '';
                }
                break;
        }

        items.forEach((item, index) => {
            item.classList.toggle('selected', index === selectedIndex);
        });
    }

    inputRef.addEventListener('keydown', (event) => handleKeyDown(event, matchedCharacters));
    document.querySelector('#pokemonItem').focus();
});