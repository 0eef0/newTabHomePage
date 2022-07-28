// quizlet flash cards
let flashCards = `===[Term/Def]The values being compared are equal in both data and data type.[New Question]onchange[Term/Def]Specifies the code that executes after the user makes a selection. Only occurs if selection changed from default. (Mostly used for forms)[New Question]onblur[Term/Def]Specifies the code that executes when the mouse is moved away from an object. (Mostly used for forms)[New Question]onfocus[Term/Def]Specifies code to execute the moment an element gets focus. (Mostly used for forms)[New Question]onselect[Term/Def]Specifies code to execute when text is selected in an element. (Mostly used for forms)[New Question]onsubmit[Term/Def]Specifies code to execute on form submission. (Mostly used for forms)[New Question]onclick[Term/Def]Specifies code to execute when a button is clicked.[New Question]onmousedown[Term/Def]Specifies code to execute when a mouse button is pressed down on an element.[New Question]onmouseover[Term/Def]Specifies the code to execute when the mouse pointer moves over an element.[New Question]onmouseout[Term/Def]Specifies the code to execute when the mouse pointer moves out of an element.[New Question]onload[Term/Def]Specifies code to execute after the page is finished loading.[New Question]navigator[Term/Def]Window DOM. Used to obtain user's web browser. 

object properties:
userAgent, platform, appName, onLine, language(deprecated HTML 4.0), geolocation, cookieEnabled[New Question]What are the main window object methods?[Term/Def]alert(), prompt(), confirm(), open(), close()[New Question]open()[Term/Def]Opens a new browser window.[New Question]close()[Term/Def]Closes current browser window.[New Question]focus()[Term/Def]Sets focus to the current window.[New Question]What is the syntax used to create a conditional using the ternary operator?[Term/Def](condition) ? Value_if_true: value_if_false; 
(i.e. myVar = (3>5) ? 3: 5; validates to false).[New Question]What is the basic syntax for creating a function?[Term/Def]function myFunction() { return value; }[New Question]onunload[Term/Def]Specifies the code to execute when a browser window is closed.[New Question]What is the <noscript> tag used for?[Term/Def]To redirect browsers to an alternative page if user is using an older browser or a non-traditional browser like a mobile device.[New Question]What is the default data type prompt() returns?[Term/Def]Strings. (Unless otherwise specified).[New Question]What is null?[Term/Def]A JavaScript keyword meaning no value. Different from undefined. If a user does not enter input, this sets the data type to a null value.[New Question]What would you call to test if a radio button is checked in a form named myForm if the radio button had an id of "radio1"?[Term/Def]document.getElementById("radio1").checked[New Question]Mary had a little lamb

What will alert(nurseryRhyme.substring(3, 12)); extract from the above sentence?[Term/Def]y had a l

Uses zero-based counting. First index position is how many letters in you want to go using zero-based counting.
Second index position is one character past where you want the count to end.[New Question]What is the best statement to determine if a browser supports flash?[Term/Def]navigator.plugins[New Question]what is charAt() used for?[Term/Def]to find a character at a specific position.
(i.e. var nurseryRhyme = "Mary had a little lamb";
nurseryRhyme.charAt(6) will equal d).[New Question]How can you check to see if a browser supports the document.images object?[Term/Def]if (document.images) will return false if .images is not supported by the browser.[New Question]What is instantiation?[Term/Def]Creating a new instance of an object using the "new" constructor.
(i.e. var myShirt = new objShirt();)[New Question]What does the unshift Array method do?[Term/Def]Adds a value to the beginning of the array changing its value.[New Question]How do you go back or forward a page using the go() method?[Term/Def]history.go(s) to go back
history.go(t) to go forward. 
s = integer in number of pages to go back (i.e. -1 to go back one page).
t = integer in number of pages to go forward( i.e. 1 to go forward a page).[New Question]What does the pop Array method do?[Term/Def]Removes the last element of an array and returns that element.[New Question]What window.location method will redirect the browser window to another page?[Term/Def]href
example: window.location.href="http://www.CIWcertified.com";[New Question]What objects is the prototype property available to?[Term/Def]All JavaScript objects.[New Question]What does the push Array method do?[Term/Def]Adds values to the end of the array and returns the length.[New Question]What does the join Array method do?[Term/Def]Joins the elements in an array to a string and returns that string.[New Question]What does the getElementsByName() method return?[Term/Def]All elements with the corresponding name.[New Question]What are the event handlers for the JavaScript button object?[Term/Def]Only one: onclick[New Question]What are two common practices can help to make JavaScript code more secure? And help to prevent XSS attacks?[Term/Def]Output encoding and input validation[New Question]What is it called when one frame in a frameset redirects a URL but the browser's address bar still displays the URL for the frameset document instead of the URL of the target page?[Term/Def]Cloaking[New Question]What is Frame-to-frame URL changing?[Term/Def]A technique in which one frame in a frameset directs the URL in another frame to display a different page. Creates security concerns.[New Question]What technique can be used to prevent users from accessing pages directly instead of through related web pages?[Term/Def]Same origin policy. Can be bypassed by cloaking.[New Question]What does \W match?[Term/Def]Non-alphanumeric characters[New Question]What does \S match?[Term/Def]Non-whitespace[New Question]What does \s match?[Term/Def]Whitespace characters[New Question]What does \w match?[Term/Def]Alphanumeric characters[New Question]Which type of cross-site scripting (XSS) occurs when an attacker posts a malicious script in a forum on the server and later displayed to other users?[Term/Def]Persistent[New Question]What is responseText in an AJAX transaction?[Term/Def]A XMLHttpRequest response type sent in plain text regardless of whether it was understood by XML.[New Question]In an AJAX transaction, which readyState value indicates that the XMLHttpRequest has been sent but no response has been received yet?[Term/Def]readyState 2[New Question]Why is JavaScript essential in an AJAX/SQL transaction?[Term/Def]It provides the commands that send and receive the requests, and that places the data for formatting.[New Question]What is a Partial response in AJAX-based requests?[Term/Def]The sending of information as it becomes available.[New Question]`;

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
const todoLinkDOM = document.getElementById('todoLink')

// from stack overflow, for shuffle
//https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

// music stuff
let playlist = ["Sono Chi No Sadame", "Bloody Stream", "Jotaro's Theme", "Kira's Theme", "Giorno's Theme", "Jolyne's Theme", "Josuke's Theme", "Stone Ocean", "Zankyou Sanka", "Bucciarati's Theme", "Torture Dance"];
playlist.forEach((song, index) => {
    playlist[index] = {
        title: song,
        audio: `./assets/ambient${index+1}.mp3`
    }
});
playlist = shuffle(playlist);

$('#songTitle').toggle();
let currSong = 0;
const prevSong = () => {
    if(audioDOM.currentTime <= 3) {
        if(currSong > 0){
            currSong--;
        } else {
            currSong = playlist.length-1;
        }
        audioDOM.src = playlist[currSong].audio;
        setTimeout(() => {
            progressBarDOM.max = Number(Math.floor(audioDOM.duration) * 100);
        }, 100);
        $('#songTitle').html(playlist[currSong].title).toggle(500).delay(3000).toggle(500);
    } else {
        audioDOM.currentTime = 0;
    }
}
const nextSong = () => {
    if(currSong < playlist.length-1){
        currSong++;
    } else {
        currSong = 0;
    }
    audioDOM.src = playlist[currSong].audio;
    setTimeout(() => {
        progressBarDOM.max = Number(Math.floor(audioDOM.duration) * 100);
    }, 100);
    $('#songTitle').html(playlist[currSong].title).toggle(500).delay(3000).toggle(500);
};

const changeVolume = (value) => {
    audioDOM.volume = value / 100;
};
changeVolume(25);

musicToggleDOM.addEventListener('mousedown', () => {
    if(!audioDOM.paused) {
        audioDOM.pause();
        musicToggleDOM.classList.remove('fa-pause');
        musicToggleDOM.classList.add('fa-play');
    } else {
        audioDOM.play();
        musicToggleDOM.classList.remove('fa-play');
        musicToggleDOM.classList.add('fa-pause');
    }
});

let progress;
progressBarDOM.addEventListener('mousedown', () => {
    audioDOM.pause();
    clearInterval(progress);
});
progressBarDOM.addEventListener('mouseup', () => {
    audioDOM.currentTime = progressBarDOM.value / 100;
    audioDOM.play();
    progress = setInterval(() => {
        progressBarDOM.value = audioDOM.currentTime * 100;
    }, 10)
})


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
        audioDOM.src = playlist[0].audio;
        $('#songTitle').html(playlist[0].title).toggle(500).delay(3000).toggle(500);
        $('#ambientMusic').on('ended', () => {
            nextSong();
        })
        setTimeout(() => {
            searchBarDOM.focus();
            progressBarDOM.max = Number(Math.floor(audioDOM.duration) * 100);
            progress = setInterval(() => {
                progressBarDOM.value = audioDOM.currentTime * 100;
            }, 10)
        }, 200);
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
                'Did the flashcard stump you?'
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

const toDoDOM = document.getElementById('todo');
const getWork = async() => {
    try {
        const { data: { task } } = await axios.get('https://roldan-todo-list.herokuapp.com/api/v1/tasks');
        const sortedTasks = task.sort((a,b) => {return new Date(a.dueDate) - new Date(b.dueDate)});
        for(let i = 0; i < sortedTasks.length; i++) {
            const { task: taskName, dueTime, dueDate, subject } = task[i];

            const date = dueDate.split('-');
            const time = dueTime.split(':');
            const formattedTime = `${(time[0] > 12) ? time[0]-12 : parseInt(time[0])}:${time[1]}${(time[0] > 12) ? 'pm' : 'am'}`;
            const formattedDate = (new Date(`${date[1]}/${date[2]}/${date[0]}`)).toLocaleDateString("en-US");
            const today = (new Date()).toLocaleDateString("en-US");
            const tomorrow = (new Date(Date.now() + 86400000)).toLocaleDateString("en-US");
            const yesterday = (new Date(Date.now() - 86400000)).toLocaleDateString("en-US");

            toDoDOM.innerHTML += `
            <div class="task">
                <p class="subject">${subject}</p>
                <p class="taskName">${taskName}</p>
                <p class="taskDue">Due ${(formattedDate == today) ? 'today' : (formattedDate == tomorrow) ? 'tomorrow' : (formattedDate == yesterday) ? 'yesterday' : formattedDate} at ${formattedTime}</p>
            </div>`;
        }
    } catch (err) {
        console.error(err);
    }
}
getWork();

let showWork = false;
todoLinkDOM.addEventListener('mousedown',() => {
    if(!showWork) {
        document.getElementsByClassName('carousel')[0].style.display = 'none';
        toDoDOM.style.display = 'block';
        toDoDOM.style.animation = '0.5s ease-out 0s 1 flickerIn';
        todoLinkDOM.innerHTML = 'B<br>O<br>O<br>K<br>M<br>A<br>R<br>K<br>S';
        showWork = true;
    } else {
        document.getElementsByClassName('carousel')[0].style.display = 'block';
        document.getElementsByClassName('carousel')[0].style.animation = '0.5s ease-out 0s 1 flickerIn';
        toDoDOM.style.display = 'none';
        todoLinkDOM.innerHTML = 'T<br>O<br>D<br>O<br>-<br>L<br>I<br>S<br>T';
        showWork = false;
    }
})