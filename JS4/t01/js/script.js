let allMovie = new Set();
let favoriteMovie = new Set();
class User {
    sayHi(){
        alert(this.name);
    }
}
class Movie {
    constructor(title, date, image, actors, information) {
       this.title = title;
       this.date = date;
       this.image = image;
       this.actors = actors;
       this.information = information;
       this.favorite = false;
    }
    addToFavorite(){
        this.favorite = true;
    }
    removeToFavorite(){
        this.favorite = false;
    }
}

allMovie.add(new Movie('The Lord of the Rings', "December 01, 2003", '"assets/images/Vlasteline.jpg" alt="vlasteline"', ['Elijah Wood', 'Ian McKellen', 'Viggo Mortensen', 'Sean Astin'], 'Two Hobbits, Sméagol and Déagol, are fishing when Déagol discovers the One Ring in the river. Sméagol is ensnared by the Ring, and kills his friend for it. He retreats into the Misty Mountains as the Ring twists his body and mind, until he becomes the creature Gollum.'));
allMovie.add(new Movie('Avengers: Endgame', 'April 22, 2019', '"assets/images/Advangers.jpg" alt="avengers"', ['Robert Downey Jr.', 'Chris Evans', 'Mark Ruffalo', 'Chris Hemsworth'], 'Twenty-three days after Thanos used the Infinity Gauntlet to disintegrate half of all life in the universe,[N 1] Carol Danvers rescues Tony Stark and Nebula from deep space and returns them to Earth, where they reunite with the remaining Avengers—Bruce Banner, Steve Rogers, Thor, Natasha Romanoff, and James Rhodes—and Rocket. Locating Thanos on an uninhabited planet, they plan to use the Infinity Stones to reverse "the Snap", but Thanos reveals he destroyed the Stones to prevent further use. Enraged, Thor decapitates Thanos.'));
allMovie.add(new Movie('Batman v Superman', 'March 19, 2016', '"assets/images/batman-v-superman.jpg" alt="batmanVSsuperman"', ['Ben Affleck', 'Henry Cavill', 'Amy Adams', 'Jesse Eisenberg'], 'In a flashback, Bruce Wayne falls into a cave while running from his parents\' funeral, where he has a memorable encounter with a legion of bats. Back in the present, eighteen months after the battle between Superman and General Zod in Metropolis,[N 1] Superman has become a controversial figure. Bruce is now a billionaire who has operated in Gotham City as the vigilante Batman for twenty years. Having witnessed the chaos of that battle in person, he sees Superman as an existential threat to humanity.'));
allMovie.add(new Movie('Fight Club', 'September 10, 1999', '"assets/images/fight-club.jpg" alt="fight-club"', ['Brad Pitt', 'Edward Norton', 'Meat Loaf Aday', 'Jared Leto'], 'The unnamed Narrator is an automobile recall specialist who is unfulfilled by his job and possessions, and suffers from chronic insomnia. He finds catharsis by attending support groups and posing as a sufferer of several diseases, curing his insomnia. His bliss is disturbed when another impostor, Marla Singer, also begins attending the same support groups. The two agree to split which groups they attend.'));
allMovie.add(new Movie('The Hobbit', 'December 1, 2014', '"assets/images/hobbit.jpg" alt="hobbit"', ['Ian McKellen', 'Martin Freeman', 'Richard Armitage', 'Luke Evans'], 'Bilbo and the Dwarves watch from the Lonely Mountain as the dragon Smaug sets Laketown ablaze. Bard breaks out of prison, and eventually kills Smaug with the black arrow brought to him by his son Bain. Smaug\'s falling body crushes the fleeing Master of Laketown and his cronies, who were escaping on a boat laden with the town\'s gold. Bard becomes the new leader of the people of Laketown, with the Master\'s conniving servant, Alfrid, acting as Bard\'s reluctant servant, as they seek refuge in the ruins of Dale, while Legolas travels to investigate Mount Gundabad with Tauriel.'));
allMovie.add(new Movie('Harry Potter', 'July 7, 2011', '"assets/images/Harry.jpg" "harry"', ['Daniel Radcliffe', 'Rupert Grint', 'Emma Watson', 'Michael Gambon'], 'After burying Dobby, Harry Potter asks the goblin Griphook to help him, along with Ron Weasley and Hermione Granger, break into Bellatrix Lestrange\'s vault at Gringotts bank, suspecting a Horcrux may be there. Griphook agrees, in exchange for the Sword of Gryffindor. Wandmaker Ollivander tells Harry that two wands taken from Malfoy Manor belonged to Bellatrix and Draco Malfoy, though Draco\'s has changed its allegiance to Harry'));

function renderLeftSite(movies){
    let leftSide = document.getElementById('leftSide');
    for (let item of movies){
        let itemMovie = document.createElement('div');
        itemMovie.classList.add('itemMovie');
        itemMovie.innerHTML = `<span>${item.title}</span>`
        leftSide.append(itemMovie);
    }
}
// function renderRightSite(movies){
//
//     let rightSide = document.getElementById('rightSide');
//     for (let item of movies){
//         let itemMovie = document.createElement('div');
//         itemMovie.classList.add('mainInformation');
//         itemMovie.innerHTML = `<div class="addFavoriteWrapper"><span class="favoriteIcon">&#9829;</span></div>
//                 <div class="nameMovieWrapper"><span>${item.title}</span></div>
//                 <div class="dateMovieWrapper"><span>${item.date}</span></div>
//                 <div class="actorsWrapper">
//                     ${item.actors.map(function (item){
//             return `<div class="mainActor">
//         <span>${item.slice(0, item.indexOf(' '))}</span><span>${item.slice(item.indexOf(' ') + 1)}</span>
//     </div> `
//         })}
//                 </div>
//                 <div class="aboutMovie"><span>${item.information}</span></div>
//             </div>`
//         rightSide.append(itemMovie);
//     }
// }
renderLeftSite(allMovie);
let
// renderRightSite(allMovie);
