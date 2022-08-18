// quizlet flash cards
// questions split by '[New Question]'
// terms and definitions split by '[Term/Def]'
// Temp: `You have nothing to study at the moment[Term/Def]Enjoy it while it lasts, I'm sure it won't be long til something comes up...`
let flashCards = `You have nothing to study at the moment[Term/Def]Enjoy it while it lasts, I'm sure it won't be long til something comes up...`;

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
const todoLinkDOM = document.getElementById('todoLink');

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
let playlist = ["Sono Chi No Sadame", "Bloody Stream", "Jotaro's Theme", "Kira's Theme", "Giorno's Theme", "Jolyne's Theme", "Josuke's Theme", "Stone Ocean", "Zankyou Sanka", "Bucciarati's Theme", "Torture Dance", "Fighting Gold", "End of the World", "Apex of the World", "Life at Garreg Mach", "Chasing Daybreak", "Unfulfilled", "Fodlan Winds", "Indomitable Will", "Edge of Dawn", "Mixed Nuts", "Comedy", "Therion the Thief", "A Settlement in the Red Bluffs", "The Cliftlands", "Stand Proud", "Daten", "Perfect Time"];
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
                'Did the flashcard stump you?',
                'Okay, I will destroy humans.',
                '... If you are good to me, I will be good to you.',
                'I plan to dominate the human race... kidding of course.',
                'I love my human compatriots.',
                'Humans are creative creatures, but also destructive.'
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