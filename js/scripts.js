// quizlet flash cards
// questions split by '[New Question]'
// terms and definitions split by '[Term/Def]'
// Temp: `You have nothing to study at the moment[Term/Def]Enjoy it while it lasts, I'm sure it won't be long til something comes up...`
let flashCards = `ako[Term/Def]I[New Question]ka / ikaw[Term/Def]you (singular)[New Question]siya[Term/Def]he / she[New Question]mo[Term/Def]your (singular)[New Question]wala[Term/Def]none / nothing[New Question]pa[Term/Def]yet / still[New Question]asawa[Term/Def]spouse[New Question]may / meron[Term/Def]have, there is / are[New Question]nakatira[Term/Def]reside / live[New Question]trabaho[Term/Def]job / work[New Question]nagtatrabaho[Term/Def]is working[New Question]guro, titser, maestra (feminine), maestro (masculine)[Term/Def]teacher[New Question]sa ibaba[Term/Def]downstairs[New Question]bahay[Term/Def]house[New Question]opisina[Term/Def]office[New Question]eskwelahan[Term/Def]school[New Question]taga[Term/Def]from place of origin[New Question]taon / anyos[Term/Def]year or age[New Question]maganda[Term/Def]beautiful[New Question]umaga[Term/Def]morning[New Question]tanghali[Term/Def]noon[New Question]hapon[Term/Def]afternoon[New Question]gabi[Term/Def]evening[New Question]rin[Term/Def]also / too[New Question]mabuti[Term/Def]fine, good[New Question]saan[Term/Def]where[New Question]pupunta[Term/Def]will go[New Question]galing[Term/Def]have been[New Question]diyan[Term/Def]there[New Question]lang[Term/Def]only, just[New Question]palengke[Term/Def]market[New Question]sige[Term/Def]okay[New Question]babay[Term/Def]bye, good-bye[New Question]Magandang umaga[Term/Def]Good morning![New Question]Magandang tanghali[Term/Def]Good afternoon (literally noon)[New Question]Magandang hapon[Term/Def]Good afternoon[New Question]Magandang gabi[Term/Def]Good evening[New Question]Magandang umaga rin.[Term/Def]Good morning also.[New Question]Kumasta ka?[Term/Def]How are you? (Informal)[New Question]Mabuti naman. Ikaw?[Term/Def]I'm fine and you?[New Question]Mabuti rin.[Term/Def]Fine also.[New Question]Saan ka pupunta?[Term/Def]Where are you going?[New Question]Diyan lang.[Term/Def]Only there.[New Question]Saan ka galing?[Term/Def]Where have you been?[New Question]Sige, babay.[Term/Def]Ok, good-bye.[New Question]paki-basa[Term/Def]please read[New Question]po / opo[Term/Def]respect showing[New Question]puti[Term/Def]white[New Question]ipis[Term/Def]cockroach[New Question]takip[Term/Def]cover[New Question]atay[Term/Def]liver[New Question]lamat[Term/Def]scar[New Question]kamay[Term/Def]hands[New Question]akin[Term/Def]ours[New Question]lamok[Term/Def]moquitos[New Question]relo[Term/Def]watch[New Question]oras[Term/Def]stars / time[New Question]lugar[Term/Def]place[New Question]timbang[Term/Def]weight[New Question]bangin[Term/Def]cliff[New Question]ngipin[Term/Def]teeth[New Question]pangalan[Term/Def]name[New Question]taga-saan[Term/Def]from where[New Question]ano[Term/Def]what[New Question]bakit[Term/Def]why[New Question]ilan[Term/Def]how (...many, much, old, etc.)[New Question]sino[Term/Def]who[New Question]na[Term/Def]already / now[New Question]sikreto[Term/Def]Secret (response when preferred not to give age)[New Question]Pero, may nopia ako sa America (sp)[Term/Def]My girlfriend is in America[New Question]guapo peren (sp)[Term/Def]still handsome (informal greeting)[New Question]magulain (sp)[Term/Def]very good[New Question]maraming salamat po[Term/Def]Thank you very much (many thanks)[New Question]oo[Term/Def]yeah (informal)[New Question]mag-ingat ka[Term/Def]be careful / take care[New Question]pamilya[Term/Def]family[New Question]magulang[Term/Def]parents[New Question]tatay[Term/Def]father[New Question]nanay[Term/Def]mother[New Question]anak[Term/Def]children[New Question]anak na lalake / babae[Term/Def]male child / female child[New Question]bunso[Term/Def]youngest child[New Question]panganay[Term/Def]oldest child[New Question]kapatid[Term/Def]sibling[New Question]kapatid na lalake / babae[Term/Def]sibling brother / sister[New Question]lolo[Term/Def]grandfather[New Question]lola[Term/Def]grandmother[New Question]aalis[Term/Def]will leave[New Question]uuwi[Term/Def]return home / go home[New Question]babalik[Term/Def]will return[New Question]kasama[Term/Def]buddies / companions[New Question]tsinelas[Term/Def]sandals / slippers[New Question]bibili[Term/Def]will buy[New Question]muna[Term/Def]for awhile[New Question]siguro[Term/Def]maybe[New Question]kasi[Term/Def]because[New Question]pera[Term/Def]money[New Question]magkano[Term/Def]how much (an amount)[New Question]barya[Term/Def]coins / change[New Question]buo[Term/Def]bills[New Question]sentimos[Term/Def]cents[New Question]piso[Term/Def]peso[New Question]isa[Term/Def]1 (uno)[New Question]dalawa[Term/Def]2 (dos)[New Question]tatlo[Term/Def]3 (tres)[New Question]apat[Term/Def]4 (kuwatro)[New Question]lima[Term/Def]5 (singko)[New Question]anim[Term/Def]6 (sais)[New Question]pito[Term/Def]7 (siyete)[New Question]walo[Term/Def]8 (otso)[New Question]siyam[Term/Def]9 (nuwebe)[New Question]sampu[Term/Def]10 (diyes)[New Question]ala / alas[Term/Def]time marker (before 1pm / after 1pm)[New Question]medya / trenta[Term/Def]half (30 mins / half hour)[New Question]Anong oras na[Term/Def]What time is it?[New Question]Ala una na[Term/Def]It's already one o'clock[New Question]Alas dos y medya / trenta[Term/Def]It's 2:30[New Question]bokya[Term/Def]zero (street language)[New Question]mangga[Term/Def]mango[New Question]mahal[Term/Def]expensive bill[New Question]puwede[Term/Def]possible / can[New Question]sukli[Term/Def]monatary change[New Question]tumawad[Term/Def]bargain / haggle[New Question]bayad[Term/Def]payment[New Question]...ng[Term/Def]connector if word ends in vowel[New Question]na[Term/Def]connector if word ends in consonant[New Question]Isang Piso[Term/Def]P1.00[New Question]Dalawang Piso[Term/Def]P2.00[New Question]Tatlong Piso[Term/Def]P3.00[New Question]Apat na Piso[Term/Def]P4.00[New Question]Limang Piso[Term/Def]P5.00[New Question]Anim na Piso[Term/Def]P6.00[New Question]Pitong Piso[Term/Def]P7.00[New Question]Walong Piso[Term/Def]P8.00[New Question]Siyam na Piso[Term/Def]P9.00[New Question]Sampu Piso[Term/Def]P10.00[New Question]isang sentimos[Term/Def].01[New Question]diyes sentimos[Term/Def].10[New Question]Buena Mano[Term/Def]first customer of the day[New Question]suki[Term/Def]repeat customer[New Question]dagdag[Term/Def]extra deal b/c haggling or Buena Mano[New Question]buhay parin[Term/Def]still alive (greeting)[New Question]lahat[Term/Def]all together (direction)[New Question]Pasa lubo[Term/Def]gift[New Question]busog na po ako[Term/Def]I'm full (of food)[New Question]pasensya po[Term/Def]I'm sorry[New Question]pangit[Term/Def]ugly[New Question]hindi po[Term/Def]formal no[New Question]saan ang ___?[Term/Def]where is ____?[New Question]masarap[Term/Def]delicious[New Question]mukhang bata[Term/Def]you look young[New Question]Binata pa po ako, at available[Term/Def]I'm not married, and available (joke)[New Question]At ikinagagalak ko po kayong makilala[Term/Def]It's nice meeting you all[New Question]May tanong?[Term/Def]Any questions?[New Question]Pwede bang magpakilala ka?[Term/Def]Can you introduce yourself?[New Question]Dahan dahan lang po[Term/Def]slow down please (slower talking)[New Question]pwede bang matonong?[Term/Def]Can I ask questions?[New Question]Ano sa Tagalog ang ___?[Term/Def]What is ____ in Tagalog?[New Question]Talaga?[Term/Def]Really?[New Question]Astig![Term/Def]Awesome[New Question]Ok lang[Term/Def]so-so[New Question]Hindi ko alam[Term/Def]I don't know[New Question]mahiuhin[Term/Def]modest[New Question]matamis[Term/Def]sweet[New Question]maingay[Term/Def]noisy[New Question]aso[Term/Def]dog[New Question]maalait[Term/Def]salty[New Question]tubig[Term/Def]water[New Question]pagkain[Term/Def]food[New Question]mainit[Term/Def]hot[New Question]temperatura[Term/Def]temperatura[New Question]malamig[Term/Def]cold[New Question]pawising[Term/Def]sweaty[New Question]Amerikano[Term/Def]American[New Question]mabaho[Term/Def]smelly[New Question]basa[Term/Def]wet[New Question]damit[Term/Def]shirt[New Question]karne[Term/Def]meat[New Question]marumi[Term/Def]dirty[New Question]mabait[Term/Def]nice (person)[New Question]masustansya[Term/Def]nutricious[New Question]sariwa[Term/Def]fresh[New Question]berde[Term/Def]green[New Question]siru[Term/Def]broken / going bad[New Question]tuyo[Term/Def]dry[New Question]pantalon[Term/Def]pants[New Question]maanghang[Term/Def]spicy[New Question]nakakatawa[Term/Def]funny[New Question]malayo[Term/Def]far[New Question]distansya[Term/Def]distance[New Question]biro[Term/Def]joke[New Question]bata[Term/Def]child[New Question]maliit[Term/Def]small[New Question]amusal[Term/Def]breakfast[New Question]paborito[Term/Def]favorite[New Question]gabihan[Term/Def]dinner[New Question]langgam[Term/Def]ants[New Question]puno[Term/Def]tree[New Question]dalisay[Term/Def]pure[New Question]langit[Term/Def]sky[New Question]musika[Term/Def]good[New Question]Ano ang masaabi mo tungkol sa ____?[Term/Def]What can you say about ____?[New Question]dito[Term/Def]here[New Question]journey[Term/Def]byahe[New Question]nakakainteresado[Term/Def]interesting[New Question]difficult[Term/Def]mahirap[New Question]gawa[Term/Def]task[New Question]maasim[Term/Def]sour[New Question]gatas[Term/Def]milk[New Question]bakhawan[Term/Def]mangroves[New Question]lusay[Term/Def]seagrass[New Question]bahuran[Term/Def]coral[New Question]lawa[Term/Def]lake[New Question]bundok[Term/Def]mountains / highlands[New Question]beach / baybayin[Term/Def]beach[New Question]takip-silim[Term/Def]sunset[New Question]lasing[Term/Def]drunk[New Question]baliw[Term/Def]crazy[New Question]matabang[Term/Def]tasteless[New Question]malandi[Term/Def]flirty[New Question]bisi[Term/Def]busy[New Question]iban[Term/Def]birds[New Question]maulan[Term/Def]rainy[New Question]panahon[Term/Def]weather[New Question]malaki[Term/Def]big[New Question]mobabaw[Term/Def]shallow[New Question]malalim[Term/Def]deep[New Question]gutom[Term/Def]hunger[New Question]gulay[Term/Def]vegtables[New Question]prutas[Term/Def]fruits[New Question]kamatis[Term/Def]tomato[New Question]abokado[Term/Def]avacado[New Question]ubas[Term/Def]grapes[New Question]buko[Term/Def]coconut[New Question]pakwan[Term/Def]cantalope / watermelon[New Question]matanda[Term/Def]old (person)[New Question]luma[Term/Def]old (object)[New Question]matalino[Term/Def]smart[New Question]mabilis[Term/Def]fast[New Question]isda[Term/Def]fish[New Question]nanganganib[Term/Def]endangered[New Question]matulungin[Term/Def]helpful[New Question]libro[Term/Def]book[New Question]labag na batas[Term/Def]illegal[New Question]____ ko[Term/Def]My ____[New Question]kalmado[Term/Def]calm[New Question]busy / abala[Term/Def]busy / hectic[New Question]masayasa[Term/Def]happy[New Question]malungkot[Term/Def]sad[New Question]sentro[Term/Def]centalized[New Question]manok[Term/Def]chicken[New Question]kanin[Term/Def]rice[New Question]Gusto ko ng ____[Term/Def]I want / like ____[New Question]Ayaw ko na ____[Term/Def]I don't want / like ___[New Question]paki-ulit[Term/Def]please repeat[New Question]walang anuman[Term/Def]You're welcome[New Question]tanghalian[Term/Def]lunch[New Question]aso[Term/Def]dog[New Question]maalait[Term/Def]salty[New Question]tubig[Term/Def]water`;

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
                        "https://static.wikia.nocookie.net/valorant/images/d/d6/UI_Icon_Modes_Competitive.png/revision/latest?cb=20200805002134"
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
                <p class="time"><span>${ Math.floor(curr.length / 1000 / 60 / 60) }:${ Math.round(curr.length / 1000 / 60) }</span> <span>(${ curr.rounds })</span></p>
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