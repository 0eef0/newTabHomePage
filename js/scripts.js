// quizlet flash cards
// questions split by '[New Question]'
// terms and definitions split by '[Term/Def]'
// Temp: `You have nothing to study at the moment[Term/Def]Enjoy it while it lasts, I'm sure it won't be long til something comes up...`
let flashCards = `To override a superclass method in a subclass, the subclass method ____.
A. Must use a different method name.
B. Must use the same method name and the same parameter types.
C. Must use a different method name and the same parameter types.
D. Must use a different method name and different parameter types.[Term/Def]B. must use the same method name and the same parameter types[New Question]public interface Sizable
{
 int LARGE_CHANGE = 100;
 void changeSize();
}
Which of the following indicates how to use the constant LARGE_CHANGE in your program?
A. LARGE-CHANGE
B. Sizable.LARGE_CHANGE
C. Sizable(LARGE_CHANGE)
D. you cannot directly use the LARGE_CHANGE constant in your program[Term/Def]B. Sizable.LARGE_CHANGE[New Question]public class BankAccount implements Comparable<BankAccount>
{
 public int compareTo(T other)
 {
What is wrong with this code?
A. the type parameter for the Comparable interface in the implements clause must be the same as the implementing class
B. the type parameter for the Comparable interface in the implements clause must be the generic <T>
C. The type parameter for the compareTo method must be the same as the implementing class
D. The type parameter for the compareTo interface must be the generic <T>[Term/Def]C. the type parameter for the compareTo method must be the same as the implementing class[New Question]Which of the following statements about an interface is true?
A. an interface has methods and instance variables
B. an interface has methods but no instance variables
C. an interface has neither methods nor instance variables
D. an interface has instance variables but no methods[Term/Def]B. an interface has methods but no instance variables[New Question]Which of the following statements about a Java interface is NOT true?
A. a Java interface defines a set of methods that are required
B. a Java interface must contain more than one method
C. a Java interface specifies behavior that a class will implement
D. all methods in a Java interface must be abstract[Term/Def]B. a Java interface must contain more than one method[New Question]public interface Measurer
{
 double measure(__________ anObject);
}
Complete this code to allow the interface to handle all classes
A. Class
B. Object
C. Any
D. Void[Term/Def]B. Object[New Question]To test whether an object belongs to a particular type, use ___________.
A. the "this" reserved word
B. the "subclassOf" reserved word
C. the "instanceOf" operator
D. the "equals" method[Term/Def]C. the "instanceOf" operator[New Question]Which of the following statements about comparing objects is correct?
A. the "equals" method is used to compare whether two references are to the same object
B. The "equals" method is used to compare whether two objects have the same contents
C. the "==" operator is used to compare whether two objects have the same contents
D. the "equals" method and the "==" operator perform the same actions[Term/Def]B. the "equals" method is used to compare whether two objects have the same contents[New Question]Auto consumerAuto = new Auto(4, "gasoline");
String s = consumerAuto.toString();
Assume that the Auto class has not implemented its own toString() method. What value will "s" contain when this code is executed?
A. "s" will contain the values of the instance variables in consumerAuto
B. "s" will contain only the name of the consumerAuto object
C. "s" will contain the name of the consumerAuto object followed by a hash code
D. This code will not compile[Term/Def]C. "s" will contain the name of the consumerAuto object followed by a hash code[New Question]When declared as "protected", data in an object can be accessed by __________.
A. only by that class's methods and by all of its subclasses
B. only by that class's methods, by all of its subclasses, and by methods in classes within the same package
C. only by that class's methods
D. by any class[Term/Def]B. only by that class's methods, by all of its subclasses, and by methods in classes within the same package[New Question]Which of the following statements about classes is NOT true?
A. you cannot create n object from a class declared with a keyword "final"
B. you can override methods in a class declared with the keyword "final"
C. you cannot extend a class declared with the keyword "final"
D. you cannot create subclasses from a class declared with the keyword "final"[Term/Def]B. you can override methods in a class declared with the keyword "final[New Question]A class from which you cannot create objects is called a/an _________
A. abstract class
B. concrete class
C. non-inheritance class
D. superclass[Term/Def]A. abstract class[New Question]Which of the following statements about classes is true?
A. you can create an object from a concrete class, but not from an abstract class
B. you can create an object from an abstract class, but not from a concrete class
C. you cannot have an object reference whose type is an abstract class
D. you cannot create subclasses from abstract classes[Term/Def]A. you can create an object from a concrete class, but not from an abstract class[New Question]Which of the following is true regarding subclasses?
A. a subclass has access to private instance variables of its superclass
B. a subclass doe not have access to public instance variables of its superclass
C. a subclass must specify the implicit parameter to use methods inherited from its superclass
D. a subclass has no access to private instance variables of its superclass[Term/Def]D. a subclass has no access to private instance variables of its superclass[New Question]A class that represents a more specific entity in an inheritance hierarchy is called a/an _____________
A. default class
B. superclass
C. subclass
D. inheritance class[Term/Def]C. subclass[New Question]In each iteration, selection sort places which element in the correct location?
A. the smallest in the array
B. the largest element in the array
C. a random element
D. the smallest element not yet placed in prior iterations[Term/Def]D. the smallest element not yet placed in prior iterations[New Question]Choose the order of the following growth rates, from slowest to fastest: theta(n^3), theta(nlog(n)), theta(n^3/2), theta(2^n)[Term/Def]theta(n(log(n))), theta(n^3/2), theta(n^3), theta(2^n)[New Question]Assume we are using Quicksort to sort an array in ascending order. What can we conclude about the elements to the left of the currently placed pivot element?
A. they are all less than or equal to the pivot element
B. they are all greater than or equal to the pivot element
C. they are all sorted
D. none can equal the pivot element[Term/Def]A. they are all less than or equal to the pivot element[New Question]Given an ordered array with 15 elements, how many elements must be visited in the worst case of binary search?
A. 2
B. 8
C. 4
D. 3[Term/Def]C. 4[New Question]Suppose you wish to implement the Comparable interface to allow you Vehicle class to compare Auto objects only. Which of the following is the correct way to do this?
A. public class Auto implements Comparable<Vehicle>
B. public class Vehicle implements Comparable(Auto)
C. public class Vehicle implements Comparable
D. public class Vehicle implements Comparable<Auto>[Term/Def]D. public class Vehicle implements Comparable<Auto>[New Question]A queue is a collection that _________________.
A. remembers the order of elements, and allows elements to be added and removed only at one end
B. remembers the order to elements and allows elements to be inserted only at one end and removed only at the other end
C. does not remember the order of elements, but allows elements to be added in any position
D. remembers the order of elements and allows elements to be inserted in any position[Term/Def]B. remembers the order of elements and allows elements to be inserted only at one end and removed only at the other end[New Question]Assume you are using a doubly-linked list data structure with many notes. What is the minimum number of node references that are required to be modified to remover a node from the middle of the list? Consider the neighboring nodes
A. 3
B. 2
C. 4
D. 1[Term/Def]B. 2[New Question]You need to access values in the opposite order in which they were added (last in, first out) and not randomly. Which collection type should you use?
A. hashtable
B. map
C. queue
D. stack[Term/Def]D. stack`;

// DOM stuff
const quizletCardDOM = document.getElementById('quizletCard');
const quizletQDOM = document.getElementById('quizletQ');
const quizletADOM = document.getElementById('quizletA');
const quizletBtnDOM = document.getElementById('quizletBtn');
const homePageDOM = document.getElementById('homePage');
const searchBarDOM = document.getElementById('searchBar');
const audioDOM = document.getElementById('ambientMusic')
const volumeSliderDOM = document.getElementById('volumeSlider');
const musicToggleDOM = document.getElementById('musicToggle');
const progressBarDOM = document.getElementById('progressBar');
const valLinkDOM = document.getElementById('valLink');

// Music Stuff
// Documentation: https://developers.google.com/youtube/iframe_api_reference#:~:text=The%20IFrame%20player%20API%20lets,about%20the%20video%20being%20played.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player;
function onPlayerReady(event) {
    event.target.setVolume(25);
    event.target.setShuffle(true);
    event.target.playVideo();

    setTimeout(() => {
        searchBarDOM.focus();
        progressBarDOM.max = Number(Math.floor(player.getDuration()));
        progress = setInterval(() => {
            progressBarDOM.value = player.getCurrentTime();
        }, 10)
    }, 200);
}

const changeVolume = (value) => {
     player.setVolume(value);
};

let isPlaying = true;
musicToggleDOM.addEventListener('mousedown', () => {
    if(isPlaying) {
        player.pauseVideo();
        musicToggleDOM.classList.remove('fa-pause');
        musicToggleDOM.classList.add('fa-play');
    } else {
        player.playVideo();
        musicToggleDOM.classList.remove('fa-play');
        musicToggleDOM.classList.add('fa-pause');
    }
    isPlaying = !isPlaying;
});

let progress;
progressBarDOM.addEventListener('mousedown', () => {
    player.pauseVideo();
    clearInterval(progress);
});
progressBarDOM.addEventListener('mouseup', () => {
    player.seekTo(progressBarDOM.value);
    player.playVideo();
    progress = setInterval(() => {
        progressBarDOM.value = player.getCurrentTime();
    }, 10)
});
const changeProgress = () => {
    progressBarDOM.max = Number(Math.floor(player.getDuration()));
}


// stolen from a project last year, does the typing into divs
function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        $("#"+destination).html(message.substring(0,i));
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

// code for flashcard at beginning
flashCards = flashCards.split('[New Question]');

for(let i = 0; i < flashCards.length; i++) {
    flashCards[i] = flashCards[i].split('[Term/Def]');
}

let quizletQ = flashCards[Math.floor(Math.random() * flashCards.length)];
quizletQDOM.innerHTML = quizletQ[0];

let answerShowing = false;
const showQAnswer = () => {
    if(!answerShowing) {
        quizletADOM.style.display = 'block';
        quizletBtnDOM.textContent = 'Proceed to new tab';
        printLetterByLetter('quizletA', quizletQ[1], 2500/quizletQ[1].length);
        answerShowing = true;
    } else {
        quizletCardDOM.style.display = 'none';
        homePageDOM.style.display = 'flex';

        player = new YT.Player('player', {
            height: '0',
            width: '0',
            playerVars: {
              'playsinline': 1,
              'listType': 'playlist',
              'list': 'PLqRzW0BeLL56dbOIs3ern2_7U2P4KbtNI',
              'loop': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': changeProgress
            }
        });

        // reveals the secret to the fun fact
        setTimeout(() => {
            for(let i = 0; i < searchBarDOM.placeholder.length; i++){
                setTimeout(() => {
                    searchBarDOM.placeholder = searchBarDOM.placeholder.substring(0, searchBarDOM.placeholder.length - 1);
                }, 100 * i);
            }
        }, 10000);
        setTimeout(() => {
            const secrets = [
                'Click the logo for a fun fact :)',
                'Like the music?',
                'How is your day going?',
                'We will make it through today together!',
                'Did the flashcard stump you?',
                'Okay, I will destroy humans.',
                '... If you are good to me, I will be good to you.',
                'I plan to dominate the human race... kidding of course.',
                'I love my human compatriots.',
                'Humans are creative creatures, but also destructive.',
                'I know where you live..... I\'m coming for you',
                'You can\'t rush perfection',
                'Stop looking at me and do your homework',
                'Emerald Splash!!!',
                'Not just anyone can deflect the Emerald Splash...'
            ];
            const secret = secrets[Math.floor(Math.random() * (secrets.length))];
            for(let i = 0; i < secret.length; i++){
                setTimeout(() => {
                    searchBarDOM.placeholder += secret[i];
                }, 100 * i);
            }
        }, 10000 + 100 * searchBarDOM.placeholder.length);
    }
}

// puts the random number fact on screen in logo is clicked
let fact = '';
let revealed = false;
$('#header').on('click', () => {
    if(!revealed){
        $('#header img').css({
            "animation": "0.5s ease-out 0s 1 flickerIn",
            "animation-fill-mode": "forwards"
        }).delay(1000).queue(() => {
            $('#header').delay(1000).html(`<div id="numFact"><img src="./assets/me.png" alt="me"><p id='fact'></p></div>`);
            printLetterByLetter('fact', fact, 2500/fact.length);
            revealed = true;
        });
    } else {
        printLetterByLetter('fact', 'Hey! You only get one fact per tab!', 2500/fact.length);
        $('#header').off()
    }
});

// Gets the random number fact
let numberOptions = {
  method: 'GET',
  url: 'https://numbersapi.p.rapidapi.com/random/trivia',
  params: {min: '1', max: '1000', fragment: 'true', json: 'true'},
  headers: {
    'x-rapidapi-host': 'numbersapi.p.rapidapi.com',
    'x-rapidapi-key': 'aae51eccebmshac18a8f2e468d43p154b63jsn4147fd2b418e'
  }
};

axios.request(numberOptions).then(function (response) {
	const { text, number } = response.data;
    fact = `Stick me says: ${number} is ${text}`;

}).catch(function (error) {
	console.error(error);
});

const valDOM = document.getElementById('val');
const getValData = async() => {
    try {
        const { data: { data } } = await axios.get('https://api.henrikdev.xyz/valorant/v3/matches/na/eef/8839');

        valDOM.innerHTML += `<div class="match">
            <p class="mode" style="padding: 1rem">Mode</p>
            <p class="agent" style="padding: 1rem">Agent</p>
            <p class="map">Map</p>
            <p class="score">Score</p>
            <p class="results">Results</p>
            <p class="time" style="display:block">Time</p>
            <p class="kda" style="display:block">KDA</p>
        </div>`;

        for(let i of data) {
            const { metadata, players, currenttier_patched: rank, teams } = i;
            let curr = {};
            curr.map = metadata.map;
            curr.rounds = metadata.rounds_played;
            curr.mode = metadata.mode;
            curr.length = metadata.game_length;

            for(let j of players.all_players) {
                if(j.name == "eef") {
                    curr.agent = j.assets.agent.small;
                    curr.stats = j.stats;
                    curr.results = (j.team == "Blue") ? `${teams.blue.rounds_won}-${teams.blue.rounds_lost}` : `${teams.red.rounds_won}-${teams.red.rounds_lost}`; 
                    break;
                }
            }

            valDOM.innerHTML += `<div class="match">
                <p class="mode"><img src="${
                    (curr.mode == "Unrated") ?
                        "https://static.wikia.nocookie.net/valorant/images/d/d6/UI_Icon_Modes_Competitive.png/revision/latest?cb=20200805002134"
                        :
                        (curr.mode == "Swiftplay") ?
                            "https://static.wikia.nocookie.net/valorant/images/9/98/Swiftplay.png/revision/latest?cb=20221206165230"
                            :
                            rank
                }" title="${ curr.mode }" /></p>
                <p class="agent"><img src="${ curr.agent }" /></p>
                <p class="map">${ curr.map }</p>
                <p class="score">${ Math.round(curr.stats.score / curr.rounds) }</p>
                <p class="results">${ curr.results }</p>
                <p class="time"><span>${ Math.floor(curr.length / 1000 / 60 / 60) }:${ Math.round(curr.length / 1000 / 60) }</span> <span>(${ curr.rounds })</span></p>
                <p class="kda"><span>${ curr.stats.kills }/${ curr.stats.deaths }/${ curr.stats.assists }</span> <span>(${ (Math.round(curr.stats.kills / curr.stats.deaths * 100) / 100).toFixed(2) })</span></p>
            </div>`;
        }
    } catch (err) {
        console.error(err);
    }
}
getValData();

let showWork = false;
valLink.addEventListener('mousedown',() => {
    if(!showWork) {
        document.getElementsByClassName('carousel')[0].style.display = 'none';
        valDOM.style.display = 'block';
        valDOM.style.animation = '0.5s ease-out 0s 1 flickerIn';
        valLink.innerHTML = 'B<br>O<br>O<br>K<br>M<br>A<br>R<br>K<br>S';
        showWork = true;
    } else {
        document.getElementsByClassName('carousel')[0].style.display = 'block';
        document.getElementsByClassName('carousel')[0].style.animation = '0.5s ease-out 0s 1 flickerIn';
        valDOM.style.display = 'none';
        valLink.innerHTML = 'V<br>A<br>L<br>O<br>R<br>A<br>N<br>T';
        showWork = false;
    }
})