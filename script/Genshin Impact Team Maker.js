//window.location.host + window.location.pathname
const $ = e => document.querySelector(e);
const $$ = e => document.querySelectorAll(e);
const character = [{
    //When more elements are unlocked for the Travelers, or multiple for some characters, I'll add them manually here, instead of using 'All'.
        name: 'Aether',
        card: 'Aether_c',
        portrait: 'Aether_p',
        vision: 'None',
        weapon: 'Sword'
    },
    {
        name: 'Albedo',
        card: 'Albedo_c',
        portrait: 'Albedo_p',
        vision: 'Geo',
        weapon: 'Sword'
    },
    {
        name: 'Amber',
        card: 'Amber_c',
        portrait: 'Amber_p',
        vision: 'Pyro',
        weapon: 'Bow'
    },
    /*{
        name: 'Ayaka',
        card: 'Ayaka_c',
        portrait: 'Ayaka_p',
        vision: 'Cryo',
        weapon: 'Sword'
    },*/
    {
        name: 'Barbara',
        card: 'Barbara_c',
        portrait: 'Barbara_p',
        vision: 'Hydro',
        weapon: 'Catalyst'
    },
    {
        name: 'Beidou',
        card: 'Beidou_c',
        portrait: 'Beidou_p',
        vision: 'Electro',
        weapon: 'Claymore'
    },
    {
        name: 'Bennett',
        card: 'Bennet_c',
        portrait: 'Bennett_p',
        vision: 'Pyro',
        weapon: 'Sword'
    },
    {
        name: 'Chongyun',
        card: 'Chongyun_c',
        portrait: 'Chongyun_p',
        vision: 'Cryo',
        weapon: 'Claymore'
    },
    {
        name: 'Diluc',
        card: 'Diluc_c',
        portrait: 'Diluc_p',
        vision: 'Pyro',
        weapon: 'Claymore'
    },
    {
        name: 'Diona',
        card: 'Diona_c',
        portrait: 'Diona_p',
        vision: 'Cryo',
        weapon: 'Bow'
    },
    {
        name: 'Fischl',
        card: 'Fischl_c',
        portrait: 'Fischl_p',
        vision: 'Electro',
        weapon: 'Bow'
    },
    /*{
        name: 'Ganyu',
        card: 'Ganyu_c',
        portrait: 'Ganyu_p',
        vision: 'Cryo',
        weapon: 'Bow'
    },*/
    /*{
        name: 'Hu Tao',
        card: 'HuTao_c',
        portrait: 'HuTao_p',
        vision: 'Pyro',
        weapon: 'Polearm'
    },*/    
    {
        name: 'Jean',
        card: 'Jean_c',
        portrait: 'Jean_p',
        vision: 'Anemo',
        weapon: 'Sword'
    },
    {
        name: 'Kaeya',
        card: 'Kaeya_c',
        portrait: 'Kaeya_p',
        vision: 'Cryo',
        weapon: 'Sword'
    },
    {
        name: 'Keqing',
        card: 'Keqing_c',
        portrait: 'Keqing_p',
        vision: 'Electro',
        weapon: 'Sword'
    },
    {
        name: 'Klee',
        card: 'Klee_c',
        portrait: 'Klee_p',
        vision: 'Pyro',
        weapon: 'Catalyst'
    },
    {
        name: 'Lisa',
        card: 'Lisa_c',
        portrait: 'Lisa_p',
        vision: 'Electro',
        weapon: 'Catalyst'
    },
    {
        name: 'Lumine',
        card: 'Lumine_c',
        portrait: 'Lumine_p',
        vision: 'None',
        weapon: 'Sword'
    },
    {
        name: 'Mona',
        card: 'Mona_c',
        portrait: 'Mona_p',
        vision: 'Hydro',
        weapon: 'Catalyst'
    },
    {
        name: 'Ningguang',
        card: 'Ningguang_c',
        portrait: 'Ningguang_p',
        vision: 'Geo',
        weapon: 'Catalyst'
    },
    {
        name: 'Noelle',
        card: 'Noelle_c',
        portrait: 'Noelle_p',
        vision: 'Geo',
        weapon: 'Claymore'
    },
    {
        name: 'Qiqi',
        card: 'Qiqi_c',
        portrait: 'Qiqi_p',
        vision: 'Cryo',
        weapon: 'Sword'
    },
    {
        name: 'Razor',
        card: 'Razor_c',
        portrait: 'Razor_p',
        vision: 'Electro',
        weapon: 'Claymore'
    },
    /*{
        name: 'Rosaria',
        card: 'Rosaria_c',
        portrait: 'Rosaria_p',
        vision: 'Cryo',
        weapon: 'Polearm'
    },*/
    {
        name: 'Sucrose',
        card: 'Sucrose_c',
        portrait: 'Sucrose_p',
        vision: 'Anemo',
        weapon: 'Catalyst'
    },
    {
        name: 'Tartaglia',
        card: 'Tartaglia_c',
        portrait: 'Tartaglia_p',
        vision: 'Hydro',
        weapon: 'Bow'
    },
    {
        name: 'Venti',
        card: 'Venti_c',
        portrait: 'Venti_p',
        vision: 'Anemo',
        weapon: 'Bow'
    },
    {
        name: 'Xiangling',
        card: 'Xiangling_c',
        portrait: 'Xiangling_p',
        vision: 'Pyro',
        weapon: 'Polearm'
    },
    /*{
        name: 'Xiao',
        card: 'Xiao_c',
        portrait: 'Xiao_p',
        vision: 'Anemo',
        weapon: 'Polearm'
    },*/
    {
        name: 'Xingqiu',
        card: 'Xinqiu_c',
        portrait: 'Xingqiu_p',
        vision: 'Hydro',
        weapon: 'Sword'
    },
    {
        name: 'Xinyan',
        card: 'Xinyan_c',
        portrait: 'Xinyan_p',
        vision: 'Pyro',
        weapon: 'Claymore'
    },
    {
        name: 'Zhongli',
        card: 'Zhongli_c',
        portrait: 'Zhongli_p',
        vision: 'Geo',
        weapon: 'Polearm'
    }
]
const teamPosition = {
    first: 0,
    second: 1,
    third: 2,
    fourth: 3
}

const geoCount = character => {
    if (character.vision = 'Geo'){
        geoCount+1;
    }
}
const pyroCount = character => {
    if (character.vision = 'Pyro'){
        pyroCount+1;
    }
}
const hydroCount = character => {
    if (character.vision = 'Hydro'){
        hydroCount+1;
    }
}
const anemoCount = character => {
    if (character.vision = 'Anemo'){
        anemoCount+1;
    }
}
const electroCount = character => {
    if (character.vision = 'Electro'){
        electroCount+1;
    }
}
const cryoCount = character => {
    if (character.vision = 'Cryo'){
        cryoCount+1;
    }
}
/*const dendroCount = character => {
    if (character.vision = 'Dendro'){
        dendroCount+1;
    }
}*/

const travelerCount = character => teamPosition => {
    if (/*character.Aether == teamPosition.first  || character.Aether == teamPosition.second || character.Aether == teamPosition.third || character.Aether == teamPosition.fouth || character.Lumine == teamPosition.first || character.Lumine == teamPosition.second || character.Lumine == teamPosition.third || character.Lumine == teamPosition.fourth*/
        character.vision = 'None'){
        geoCount+1;
        pyroCount+1;
        hydroCount+1;
        anemoCount+1;
        electroCount+1;
        cryoCount+1;
        //dendroCount+1;
    }
}

const elementalResonance = {
    Unique4: 'Protective Canopy',
    Geo2: 'Enduring Rock',
    Pyro2: 'Fervent Flames',
    Hydro2: 'Soothing Waters',
    Anemo2: 'Impetuous Winds',
    Electro2: 'High Voltage',
    Cryo2: 'Shattering Ice',
    //Dendro2: 'Leafy',
    Geo2Pyro2: 'Enduring Rock & Fervant Flames',
    Geo2Hydro2: 'Enduring Rock & Soothing Waters',
    Geo2Anemo2: 'Enduring Rock & Impetuous Winds',
    Geo2Electro2: 'High Voltage & Enduring Rock',
    Geo2Cryo2: 'Enduring Rock & Shattering Ice',
    //Geo2Dendro2: 'Enduring Rock & Leafy',
    Pyro2Hydro2: 'Fervant Flames & Soothing Waters',
    Pyro2Anemo2: 'Fervent Flames & Impetuous Winds',
    Pyro2Electro2: 'High Voltage & Fervant Flames',
    Pyro2Cryo2: 'Fervant Flames & Shattering Ice',
    //Pyro2Dendro2: 'Fervent Flames & Leafy',
    Hydro2Anemo2: 'Soothing Waters & Impetuous Winds',
    Hydro2Electro2: 'Soothing Waters & High Voltage',
    Hydro2Cryo2: 'Soothing Waters & Shattering Ice',
    //Hydro2Dendro2: 'Soothing Waters & Leafy',
    Anemo2Electro2: 'High Voltage & Impetuous Winds',
    Anemo2Cryo2: 'Impetuous Winds & Shattering Ice',
    //Anemo2Dendro2: 'Impetuous Winds & Leafy',
    Electro2Cryo2: 'Shattering Ice & High Voltage',
    //Electro2Dendro2: 'High Voltage & Leafy',
    //Cryo2Dendro2: 'Shattering Ice & Leafy'
}

const ResonanceCalc = elementalResonance => geoCount => pyroCount => hydroCount => anemoCount => electroCount => cryoCount => /*dendroCount =>*/ {
    if(geoCount < 2 && pyroCount < 2 && hydroCount < 2 && anemoCount < 2 && electroCount < 2 && cryoCount < 2 /*&& dendroCount < 2*/) return elementalResonance.Unique4
    if(geoCount >= 2) return elementalResonance.Geo2
    if(pyroCount >= 2) return elementalResonance.Pyro2
    if(hydroCount >= 2 ) return elementalResonance.Hydro2
    if(anemoCount >= 2) return elementalResonance.Anemo2
    if(electroCount >= 2) return elementalResonance.Electro2
    if(cryoCount >= 2) return elementalResonance.Cryo2
    //if(dendroCount >= 2) return elementalResonance.Dendro2
    if(geoCount >= 2 && pyroCount >= 2) return elementalResonance.Geo2Pyro2
    if(geoCount >= 2 && hydroCount >= 2) return elementalResonance.Geo2Hydro2
    if(geoCount >= 2 && anemoCount >= 2) return elementalResonance.Geo2Anemo2
    if(geoCount >= 2 && electroCount >= 2) return elementalResonance.Geo2Electro2
    if(geoCount >= 2 && cryoCount >= 2) return elementalResonance.Geo2Cryo2
    //if(geocount >= 2 && dendroCount >= 2) return elementalResonance.Geo2Dendro2
    if(pyroCount >= 2 && hydroCount >= 2) return elementalResonance.Pyro2Hydro2
    if(pyroCount >= 2 && anemoCount >= 2) return elementalResonance.Pyro2Anemo2
    if(pyroCount >= 2 && electroCount >= 2) return elementalResonance.Pyro2Electro2
    if(pyroCount >= 2 && cryoCount >= 2) return elementalResonance.Pyro2Cryo2
    //if(pyroCount >= 2 && dendroCount >= 2) return elementalResonance.Pyro2Dendro2
    if(hydroCount >= 2 && anemoCount >= 2) return elementalResonance.Hydro2Anemo2
    if(hydroCount >= 2 && electroCount >= 2) return elementalResonance.Hydro2Electro2
    if(hydroCount >= 2 && cryoCount >= 2) return elementalResonance.Hydro2Cryo2
    //if(hydroCount >= 2 && dendroCount >= 2) return elementalResonance.Hydro2Dendro2
    if(anemoCount >= 2 && electroCount >= 2) return elementalResonance.Anemo2Electro2
    if(anemoCount >= 2 && CryoCount >= 2) return elementalResonance.Anemo2Cryo2
    //if(geoCount >= 2 && pyroCount >= 2) return elementalResonance.Anemo2Dendro2
    if(electroCount >= 2 && cryoCount >= 2) return elementalResonance.Electro2Cryo2
    //if(electroCount >= 2 && dendroCount >= 2) return elementalResonance.Electro2Dendro2
    //if(cryoCount >= 2 && dendroCount >= 2) return elementalResonance.Cryo2Dendro2
}

const action = {
    next: '+',
    prev: '-'
}

window.addEventListener('load', () => {
    $('body').classList.add('loaded')
    //load();
});

const generateSrc = (character, rendersDir, imgExt) => `./${rendersDir}/${character.card}.${imgExt}`;

const changeData = (node, newSrc, newData) => {
    node.src = newSrc
    node.dataset.char = newData.name;
    $('.headerLogo  img').classList.add('loading');
    node.addEventListener('load', () => initializeData());
    //node.classList.add('swaped');
    // setTimeout(() => {
    //     node.classList.remove('swaped');
    // },300)
}

$('.uidCheckbox > label').addEventListener('click' , () => {
    const checkbox = $('.uidCheckbox > label input');
    const svg = $('.uidCheckbox label svg');
    checkbox.checked && svg.classList.add('checked')
    !(checkbox.checked) && svg.classList.remove('checked')
})
//Add more checkboxes once I check out the app in real-time
/*$('.visionsCheckbox > label').addEventListener('click' , () => {
    const checkbox = $('.assistsCheckbox > label input');
    const svg = $('.assistsCheckbox label svg');
    checkbox.checked && svg.classList.add('checked')
    !(checkbox.checked) && svg.classList.remove('checked')
})
$('.rankCheckbox > label').addEventListener('click' , () => {
    const checkbox = $('.rankCheckbox > label input');
    const svg = $('.rankCheckbox label svg');
    checkbox.checked && svg.classList.add('checked')
    !(checkbox.checked) && svg.classList.remove('checked')
})*/

const copy = url => {
      const el = document.createElement('textarea');
      el.value = url;
      el.setAttribute('readonly', '');
      el.style = {position: 'absolute', left: '-9999px', display: 'none'};
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      el.remove();
}

//const playAudio = audioSrc => (new Audio(audioSrc)).play();

const charIndex = (character, characterName) => character.map(character => character.name).indexOf(characterName);

const returnIndex = (character, dataset, action) => {
    let index = eval(`${charIndex(character, $(`img[data-position=${dataset.teamPosition}]`).dataset.char)} ${action[dataset.direction]} 1`);
    if (index >= character.length) return 0
    else if (index < 0) return character.length - 1
    else return index
}

const swapData = (character, pos, act) => {
    let newIndex = eval(`${teamPosition[pos]} ${action[act]} 1`);
    const length = Object.keys(teamPosition).length;
    if (newIndex >= length)  newIndex = 0
    else if (newIndex < 0)  newIndex = length - 1
    let newCharName = $$('img[data-position]')[newIndex];
    
    [newCharName.dataset.char, character.dataset.char] = [character.dataset.char, newCharName.dataset.char];
    changeData(character, generateSrc(character[charIndex(character, character.dataset.char)], 'card', 'png'), character[charIndex(character, character.dataset.char)]);
    changeData(newCharName, generateSrc(character[charIndex(character, newCharName.dataset.char)], 'card', 'png'), character[charIndex(character, newCharName.dataset.char)])
    $$('img[data-position]').forEach((img, i) => {
        $$('.character')[i].classList.add(img.dataset.assist)
    })
}

$$('.arrow').forEach(arrow => {
    arrow.addEventListener('click', e => {
        const {
            dataset
        } = e.currentTarget;
        let index = returnIndex(character, dataset, action);
        dataset.action === 'change' && changeData($(`img[data-position=${dataset.teamPosition}]`), generateSrc(character[index], 'card', 'png'), character[index])
        dataset.action === 'swap' && swapData($(`img[data-position=${dataset.teamPosition}]`), dataset.teamPosition, dataset.direction);
    })
})

$('.teamImg').addEventListener('click', () => {
    const elem = $('.teamContainer');
    $('body').classList.add('photoMode')
    // if (elem.requestFullscreen) {
    //     elem.requestFullscreen();
    // } else if (elem.webkitRequestFullscreen) {
    //     elem.webkitRequestFullscreen();
    // } else if (elem.msRequestFullscreen) {
    //     elem.msRequestFullscreen();
    // }
})

document.addEventListener('keydown', e => {
    if($('body').classList.contains('photoMode') && e.key === 'Escape') {
        $('body').classList.remove('photoMode')
        $('.characterContainer').classList.remove('hideAssists');
    }
})
// $('.teamTier').addEventListener('click', () => $('body').classList.remove('photoMode'))
$('.generate').addEventListener('click', e => {

    const randoms = {
        first: random(character.length, true),
        second: random(character.length, true),
        third: random(character.length, true),
        fourth: random(character.length, true)
    }

    let uniq= new Set([randoms.first, randoms.second, randoms.third, randoms.fourth]);
    while(uniq.size < 4) {
        randoms.first = random(character.length, true),
        randoms.second = random(character.length, true),
        randoms.third = random(character.length, true),
        randoms.fourth = random(character.length, true)
        uniq = new Set([randoms.first, randoms.second, randoms.third, randoms.fourth]);
    }
    $$('img[data-position]').forEach((img,i) => {
        changeData(img, generateSrc(character[randoms[img.dataset.teamPosition]],'card', 'png'),character[randoms[img.dataset.teamPosition]]);
        $('.headerLogo  img').classList.add('loading');
        img.addEventListener('load', () => $('.headerLogo  img').classList.remove('loading'))
        $$('.character')[i].classList.remove('a', 'b', 'c');

    })
    $$('img[data-position]').forEach((img, i) => {
        let pos = img.dataset.teamPosition;
        img.dataset.assist= assistType[assists[pos]];
    })
})

$('.link').addEventListener('click', () => {
    let chars = [];
    $$('img[data-position]').forEach((img, i) => {
         chars[i] = `${img.dataset.teamPosition[0]}=${charIndex(character, img.dataset.char)}-${img.dataset.assist}`
    })
    const link = `${window.location.host}${window.location.pathname}?${chars.join('&')}&name=${$('.gamerTag input').value}`;
    copy(link);
    $('.link').classList.remove('copied')
    $('.link').classList.add('copied')
    setTimeout(() => {
        $('.link').classList.remove('copied')
    }, 1000)
})

$$('.platform > div').forEach(platform => platform.addEventListener('click', e => {
    if(e.currentTarget.classList.contains('selectedPlatform')) {
        e.currentTarget.classList.remove('selectedPlatform')
        $('.uid .svg').innerHTML = '';
    } else {
        $$('.platform > div').forEach(div => div.classList.remove('selectedPlatform'))
        e.currentTarget.classList.add('selectedPlatform')
        $('.uid .svg').innerHTML = $('.selectedPlatform').innerHTML;
    }
}))

const updateUID = e => {
    $('.uid > p').textContent = e.target.value;
}

$('#uid').addEventListener('input', updateUID);

//Gotta figure out how to initialize later
const initializeData = () => {
    const char = $$('img[data-position]');
    const charContainer = $$('.charContainer');
    let charName = '';

    let total = (Array.from(char).map(character => tierZ[character[charIndex(character, character.dataset.char)].tier]).reduce((a,b) => a + b, 0));

    charContainer.forEach((container, index) => {
        let character = characterZ[charIndex(characterZ, charZ[index].dataset.char)];
        container.style.backgroundColor = character.color
        $$('.colors > div')[index].style.backgroundColor = character.color
        $$('.colors > div')[index].textContent = character.tier
    })

      $('.headerLogo  img').classList.remove('loading');
}

const getUrl = () => {
    const char = $$('img[data-position]');
    let charName = '';
    const url = new URL(window.location.href);
    
    let team = [url.searchParams.get('p'), url.searchParams.get('m'), url.searchParams.get('a')]
    let username = url.searchParams.get('name');
    if(team[0] && team[1] && team[2]) {
        team[0] = team[0].split('-');
        team[1] = team[1].split('-');
        team[2] = team[2].split('-');
        $('.gamerTag input').value = username
        $('.gamer > p').textContent = username
    }
}
initializeData();
getUrl();
$('.gamer > p').textContent = $('#uid').value;
// setInterval(() => {
//     $('body').classList.add('loaded');
// },2000)


// fetch(window.location.href, {
//     method: 'get'
// }).then(response => response.text())
//   .then(data => data && $('body').classList.add('loaded'))

function adjust(color, percent) {

    var R = parseInt(color.substring(1,3),16);
    var G = parseInt(color.substring(3,5),16);
    var B = parseInt(color.substring(5,7),16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R<255)?R:255;  
    G = (G<255)?G:255;  
    B = (B<255)?B:255;  

    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

    return "#"+RR+GG+BB;
}

// function adjust(color, amount) {
//     return '#' + color.replace(/^#/, '').replace(/../g, color => ('0'+Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));
// }

function random(n, p=undefined) {
    let plusOrMinus = Math.random() < 0.5 ? -1 : 1
    return p ? Math.floor(Math.random()*n) : Math.floor(Math.random()*n) * plusOrMinus
}

function load() {
    let images = [];
    character.forEach(char => images.push(new Image().src = generateSrc(char, 'card', 'png')))
}