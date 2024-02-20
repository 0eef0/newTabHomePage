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

window.addEventListener('resize', () => {
    document.getElementsByTagName('iframe')[0].width = window.innerWidth;
    document.getElementsByTagName('iframe')[0].height = window.innerHeight;
});


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

quizletQDOM.innerHTML = 'AimLab Time!';
let targets = 0;
let aimTimer;
let aimTime = 0;
let { currDate, scores } = JSON.parse(localStorage.getItem('aimDailyScores'));

if(currDate > new Date().getDate()) {
    currDate++;
    scores = [];
}

const showQAnswer = () => {
    if(targets == 0) {
        quizletBtnDOM.className = 'target';
        quizletBtnDOM.style.position = 'absolute';
        quizletBtnDOM.style.top = `${Math.random() * 70 + 10}vh`;
        quizletBtnDOM.style.left = `${Math.random() * 70 + 10}vw`;
        aimTimer = setInterval(() => {
            aimTime++;
            quizletQDOM.innerHTML = (aimTime / 100).toFixed(2);
        }, 10);
        targets++;
        quizletBtnDOM.textContent = targets;
    } else if(targets < 10) {
        quizletBtnDOM.style.top = `${Math.random() * 70 + 10}vh`;
        quizletBtnDOM.style.left = `${Math.random() * 70 + 10}vw`;
        targets++;
        quizletBtnDOM.textContent = targets;
    } else if(targets == 10) {
        clearInterval(aimTimer);

        scores.push(aimTime);
        let avg = 0;
        for(let i of scores) avg += i;
        avg /= scores.length;

        quizletQDOM.innerHTML = `You got ${aimTime / 100} seconds`;
        quizletADOM.style.display = 'block';
        if(aimTime < localStorage.getItem('aimHighScore')) {
            localStorage.setItem('aimHighScore', aimTime);
            quizletADOM.innerHTML = `New High Score! ${(aimTime / 100).toFixed(2)} seconds`;
        } else {
            quizletADOM.innerHTML = `High Score: ${(localStorage.getItem('aimHighScore') / 100).toFixed(2)} seconds`;
        }
        quizletADOM.innerHTML += `<br>Daily Average: ${ (avg / 100).toFixed(2) }`;
        quizletBtnDOM.className = '';
        quizletBtnDOM.textContent = 'Proceed to new tab';
        quizletBtnDOM.style.top = '77.5%';
        quizletBtnDOM.style.left = 'unset';
        quizletBtnDOM.style.display = 'block';
        targets++;

        localStorage.setItem('aimDailyScores', JSON.stringify({ currDate, scores }));
        console.log(JSON.stringify(localStorage.getItem('aimDailyScores')));
    } else {
        quizletCardDOM.style.display = 'none';
        homePageDOM.style.display = 'flex';

        player = new YT.Player('player', {
            height: window.innerHeight,
            width: window.innerWidth,
            playerVars: {
              'playsinline': 1,
              'listType': 'playlist',
              'list': 'PLD1OJzc3zWEwY6pX1lhKbZxyj0xSy8Z16',
              'loop': 1,
              'controls': 0,
              'rel': 0,
              'showInfo': 0,
              'cc_load_policy': 3,
              'iv_load_policy': 3,
              'modestbranding': 0
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
let kills = 0;
let deaths = 0;
let kd = 0;
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
                        "https://static.wikia.nocookie.net/valorant/images/9/9b/Plant_Defuse_Mode.png/revision/latest/thumbnail/width/360/height/360?cb=20200805002134"
                        :
                        (curr.mode == "Swiftplay") ?
                            "https://static.wikia.nocookie.net/valorant/images/9/98/Swiftplay.png/revision/latest?cb=20221206165230"
                            :
                            "https://assets.stickpng.com/images/5a2411fc6003f508dd5d5b37.png"
                }" title="${ curr.mode }" /></p>
                <p class="agent"><img src="${ curr.agent }" /></p>
                <p class="map">${ curr.map }</p>
                <p class="score">${ Math.round(curr.stats.score / curr.rounds) }</p>
                <p class="results">${ curr.results }</p>
                <p class="time"><span>
                ${ Math.floor(curr.length / 60 / 60) }:${ Math.round(curr.length / 60).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }) }</span> <span>(${ curr.rounds })</span></p>
                <p class="kda"><span>${ curr.stats.kills }/${ curr.stats.deaths }/${ curr.stats.assists }</span> <span>(${ (curr.stats.deaths != 0) ? (Math.round(curr.stats.kills / curr.stats.deaths * 100) / 100).toFixed(2) : curr.stats.kills })</span></p>
            </div>`;
            kills += curr.stats.kills;
            deaths += curr.stats.deaths;
        }
        kd = kills / deaths;
        if(Math.random() > 0.5) fact = `Stick me says: ${ (Math.round(kd * 100) / 100).toFixed(2) } KD in your last five games? ${((Math.round(kd * 100) / 100).toFixed(2) >= 1.5) ? "I guess that's good." : ((Math.round(kd * 100) / 100).toFixed(2) >= 1) ? "That's passable..." : "Kinda trash ngl..."}`;
    } catch (err) {
        console.error(err);
    }
}
getValData();

let showWork = false;
valLink.addEventListener('mousedown',() => {
    changeDisplay();
    showWork = !showWork;
});

const changeDisplay = () => {
    if(!showWork) {
        document.getElementsByClassName('carousel')[0].style.display = 'none';
        valDOM.style.display = 'block';
        valDOM.style.animation = '0.5s ease-out 0s 1 flickerIn';
        valLink.innerHTML = 'B<br>O<br>O<br>K<br>M<br>A<br>R<br>K<br>S';
    } else {
        document.getElementsByClassName('carousel')[0].style.display = 'block';
        document.getElementsByClassName('carousel')[0].style.animation = '0.5s ease-out 0s 1 flickerIn';
        valDOM.style.display = 'none';
        valLink.innerHTML = 'V<br>A<br>L<br>O<br>R<br>A<br>N<br>T';
    }
}

// Below is the function that changes the UI element visibility
let mode = Number(localStorage.getItem("currBrowserMode"));
const changeMode = () => {
    switch (mode) {
        case 0:
            document.getElementById('player').style.display = 'block';
            mode++;
            break;
        case 1:
            for(let i of document.getElementsByClassName('searchUI')) {
                i.style.display = 'none';
            }
            mode++;
            break;
        default:
            document.getElementById('player').style.display = 'none';
            for(let i of document.getElementsByClassName('searchUI')) {
                i.style.display = 'flex';
            }
            
            document.getElementsByClassName('carousel')[0].style.display = 'block';
            document.getElementsByClassName('carousel')[0].style.animation = '0.5s ease-out 0s 1 flickerIn';
            valDOM.style.display = 'none';
            valLink.innerHTML = 'V<br>A<br>L<br>O<br>R<br>A<br>N<br>T';

            mode = 0;
            break;
    }
    localStorage.setItem("currBrowserMode", mode);
}
mode--;
changeMode();