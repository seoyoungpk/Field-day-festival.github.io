
            const artistContainer = document.getElementById('artist-container');
        
            const artists = [
                {
                    name: "Cassian",
                    time: "17:00-18:00",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Cassian is a live electronic musician currently based in Los Angeles. An accomplished producer, DJ, and mixing engineer, he has cemented his name as one of the most versatile talents to emerge from Sydney’s flourishing electronic scene.",
                    imageUrl: "images/cassian.jpg"
                },
                {
                    name: "Central Cee",
                    time: "20:15-21:00",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Central Cee is a British rapper from Shepherd’s Bush, London. Central Cee achieved further success with his single “Doja” in July 2022, which peaked at number two on the UK Singles Chart and eventually became the most streamed UK rap song on Spotify.",
                    imageUrl: "images/centralcee.jpg"
                },
                {
                    name: "claptone",
                    time: "15:55-16:55",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Claptone is a German DJ and producer who specializes in house and tech house genres. He is recognizable by the plague doctor-style golden masks, which serve to intrigue the public as well as keeping his identity hidden.",
                    imageUrl: "images/claptone.jpg"
                },
                {
                    name: "Cobrah",
                    time: "21:00-21:45",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "Cobrah is a Swedish rapper, singer, songwriter and producer. The queer performer makes electronic bangers heavily influenced both by her experience in the kink, vogue, and punk communities.",
                    imageUrl: "images/cobrah.jpg"
                },
                {
                    name: "Conducta",
                    time: "17:55-18:55",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "Conducta is a British DJ, producer and label-head.His original tracks are smooth and soulful with an undeniably British feel. His work has attracted the attention of some big guns in and out of dance music, with everyone from Jorja Smith to J Hus tapping him for a remix.",
                    imageUrl: "images/conducta.jpg"
                },
                {
                    name: "Dameeeela",
                    time: "15:50-16:45",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "Dameeeela is a Yuggera woman and Brisbane-based DJ. Her music mixes bursting with electric passion and rife with experimentation, combined with ongoing reminders of club music’s origins in Black culture.",
                    imageUrl: "images/dameeeela.jpg"
                },
                {
                    name: "Destroy Lonely",
                    time: "17:10-17:50",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Destroy Lonely, is an American rapper and singer song writer from Atlanta, Georgia. His unique blend of classic and modern styles makes him stand out from other producers in the genre. His collaborations with some of the biggest names in the industry have helped to spread his sound even further across the globe.",
                    imageUrl: "images/destroylonely.jpg"
                },
                {
                    name: "F*KHED",
                    time: "13:50-14:45",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "F*khed is an Australian music artist known for blending elements of electronic, hip-hop, and experimental genres. His music often explores deep, atmospheric soundscapes, mixing edgy beats with a variety of sonic textures. Fukhed's work tends to lean towards an underground, niche appeal, resonating with listeners who appreciate avant-garde music that pushes the boundaries of conventional genres.",
                    imageUrl: "images/fukhed.jpg"
                },
                {
                    name: "G Flip",
                    time: "16:10-16:55",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "G Flip, is an Australian singer, songwriter, instrumentalist and producer from Melbourne, Victoria. He want to make the album that my kid self dreamed of, a hybrid of pop and rock but with drums out the front.",
                    imageUrl: "images/gflip.jpg"
                },
                {
                    name: "Genesis Owusu",
                    time: "18:05-18:55",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Genesis Owusu is a Ghanaian-Australian rapper and singer from Canberra. His music defies a clear genre, drawing on elements from hip-hop, EDM, soul, funk, and rock. “Leaving the Light” showcases hip-hop vocals above a driving EDM bassline.",
                    imageUrl: "images/genesisowusu.jpg"
                },
                {
                    name: "Isoxo",
                    time: "19:55-20:45",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "Isoxo is a young artist from San Diego native, emerging onto the scene just two years ago. He has consistently pushed boundaries by seamlessly blending different genres into his tracks. His rapid rise in popularity is bringing trap back into the spotlight, suggesting that it’s here to stay.",
                    imageUrl: "images/isoxo.jpg"
                },
                {
                    name: "J-Milla",
                    time: "13:00-13:30",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "J-Milla is an Aboriginal Australian hip hop musician. He was born as Jacob Nichaloff in Darwin in the Northern Territory. Over the course of five studio albums, Miller evolved into one of the most eclectic artists of the 2010s, delving into alt-rap, soul and R&B with equal fervor.",
                    imageUrl: "images/jmilla.jpg"
                },
                {
                    name: "JessB",
                    time: "15:55-16:55",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Jess Bourke, better known as JessB, is a rapper and former professional netballer from Auckland, New Zealand. She has released two EPs and won Best New Zealand Act at the 2019 MTV Europe Music Awards. JessB’s debut studio album is scheduled for release in July 2024.",
                    imageUrl: "images/jessb.jpg"
                },
                {
                    name: "Kinder",
                    time: "21:00-21:45",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Kinder is a Ghanaian-Australian singer, songwriter and producer sibling duo Kinder (aka Savannah and Briony Osei). Showcasing the pair’s unique interwoven dual vocals for the first time, the track reached 8 million streams on Spotify and held positions on Brazil’s iTunes Electronic Chart.",
                    imageUrl: "images/kinder.jpg"
                },
                {
                    name: "Knock2",
                    time: "17:55-18:55",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "Knock2 is an American DJ and producer known for his energetic and bass-heavy electronic music. With a unique blend of genres such as house, bass house, and trap, Knock2 has been gaining recognition for his hard-hitting tracks and high-energy performances.",
                    imageUrl: "images/knock2.jpg"
                },
                {
                    name: "Logic1000",
                    time: "15:50-16:45",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Logic1000 and formerly known as DJ Logic, is an Australian musician. She is signed to Because Music.",
                    imageUrl: "images/logic1000.jpg"
                },
                {
                    name: "Luude",
                    time: "17:10-17:50",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Luud is an Australian electronic dance music producer hails from Perth, Australia, and who is particularly well-known for his work in the drum and bass genre. His songs are the ideal blend of driving sounds and upbeat lyrics that send the listener on an emotional whirlwind.",
                    imageUrl: "images/luude.jpg"

                },
                {
                    name: "Mall Grab",
                    time: "16:10-16:55",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Mall Grab is a 23 year-old producer from Newcastle, Australia. Now based in London, England. Heavily influenced by the working-class steelworks of his hometown, his music explores the roots of house and techno keeping things stripped back and minimal, yet atmospheric.",
                    imageUrl: "images/mallgrab.jpg"
                },
                {
                    name: "Mell Hall",
                    time: "13:10-14:00",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Hailing from Melbourne, Mell is already the goto DJ for some of the worlds best touring in the disco/funk/house realm Disclosure, Basement Jaxx, Crazy P, Norman Jay, Todd Terry, Late Nite Tuff Guy and Weiss - just to name a few!",
                    imageUrl: "images/mellhall.jpg"
                },
                {
                    name: "Mowgli may",
                    time: "12:00-12:50",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Mowgli May is a DJ, radio presenter & artist living on Gadigal land in so-called Sydney. With selections as hot as her iconic hot pink hair, Mowgli can be trusted to start any party & have crowds eating from the palm of her hand with her triple threat crowd reading, stage presence & eclectic arsenal of gend-re bending and blending.",
                    imageUrl: "images/mowglimay.jpg"
                },
            
                {
                    name: "Notion",
                    time: "16:50-17:50",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "Notion is a one of bassline’s most prominent new-generation artists who’s been steadily denting the game with wounders and weapons since 2015 on the likes of White Peach, 877, Four40, Crucast and his 2017-launched own label N Music.",
                    imageUrl: "images/notion.jpg"
                },
                {
                    name: "Riton",
                    time: "14:55-15:55",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Riton is a British DJ, music producer, and electronic music artist known for his work in house, dance, and electronic genres. He rose to prominence with a mix of club-ready tracks and high-profile collaborations that cemented his reputation in the global music scene.",
                    imageUrl: "images/riton.jpg"
                },
                {
                    name: "Romy",
                    time: "19:25-20:25",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Romy Madley Croft, who releases solo music as Romy, is an English musician. She is a member of the xx, and she released a solo album, Mid Air, in 2023, which peaked at No. 15 on the UK Albums Chart. She was nominated for the Brit Award for British Dance Act at the 2024 Brit Awards.",
                    imageUrl: "images/romy.jpg"
                },
                {
                    name: "Ross From Friends",
                    time: "18:05-19:05",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Ross From Friends, AKA British producer Felix Clary Weatherall, released his first single in nearly two years, ‘The One’, in April 2023 via his own imprint Scarlet Tiger.",
                    imageUrl: "images/ross.jpg"
                },
                {
                    name: "RÜFÜS DU SOL",
                    time: "21:30-22:45",
                    stage: "Centre Field",
                    stageColor: "#78E86E",
                    description: "Rüfüs Du Sol are an Australian alternative dance group from Sydney, that consists of Tyrone Lindqvist, Jon George and James Hunt. With their melodic blend of drums, keyboard, guitar and vocals, RÜFÜS DU SOL’s live performances are a breath of fresh air in a genre that is increasingly filled with one-dimensional acts.",
                    imageUrl: "images/rufus.jpg"

                },
                {
                    name: "Stacie Fields",
                    time: "12:10-13:00",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Stacie Fields is an Australian DJ and producer renowned for her energetic and feel-good house music. Drawing inspiration from the 1990s underground house scene, her style features groovy basslines, acid synths, swinging percussion, and playful vocals.",
                    imageUrl: "images/staciefields.jpg"
                },
                {
                    name: "Sub Focus",
                    time: "21:35-22:35",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "Sub Focus, is a Scottish English DJ, record producer, songwriter, musician and sound engineer. His music features drum and bass tracks. But also there also have tracks showcasing dubstep, electro, house, breakbeat and trance music elements.",
                    imageUrl: "images/subfocus.jpg"
                },
                {
                    name: "Swim",
                    time: "14:50-15:45",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "Swim has been making waves in the business for many years with a passion for producing house music that connects with listeners all around the world. SWIM’s music fuses traditional house beats with cutting-edge electronic elements, drawing inspiration from artists like Daft Punk and Justice.",
                    imageUrl: "images/swim.jpg"
                },
                {
                    name: "Willo",
                    time: "14:05-14:55",
                    stage: "The Island",
                    stageColor: "#F25752",
                    description: "DJ, producer and artist, WILLO was introduced to Sydney’s clubbing scene in 2015 having spent formative years in California via her homeland New Zealand. The change of scene inspired her to master the craft of DJ’ing and to develop her sound. ",
                    imageUrl: "images/willo.jpg"
                },
                {
                    name: "TRIPLE J UNEARTHED WINNER",
                    time: "13:00-13:40",
                    stage: "Left Field",
                    stageColor: "#7BDDFF",
                    description: "Unearthed is triple j’s award-winning initiative for discovering and sharing the best new Australian music. Triple junearthed which hasn’t been revealed yet winners will perform.",
                    imageUrl: "images/triplej-artist.png"
                }
     
            ];
        
     // 반복적으로 콘텐츠 추가
artists.forEach(artist => {
    const artistDiv = document.createElement('div');
    artistDiv.classList.add('artist');

    // 아티스트 이름을 기반으로 id 설정 (공백을 없애고 소문자로 변경)
    artistDiv.id = artist.name.toLowerCase().replace(/\s+/g, '').replace(/\*/g, 'u');

    artistDiv.innerHTML = `
        <div class="pic-and-info">
            <div class="pic"></div>
            <div>
                <h1>${artist.name}</h1>
                <h2>${artist.time}</h2>
                <div class="stage" style="background-color: ${artist.stageColor};">${artist.stage}</div>
            </div>
            </div>
        </div>
        <p>${artist.description}</p>
    `;

    // `pic`에 이미지 추가
    const picDiv = artistDiv.querySelector('.pic');
    picDiv.style.backgroundImage = `url(${artist.imageUrl})`;
    picDiv.style.backgroundSize = "cover";
    picDiv.style.backgroundPosition = "center";

    artistContainer.appendChild(artistDiv);
});



    const targetElements = document.querySelectorAll('#mowglimay, #j-milla, #jessb, #kinder, #riton, #gflip, #destroylonely, #genesisowusu, #luude, #centralcee, #rüfüsdusol, #staciefields, #mellhall, #willo, #logic1000, #claptone, #cassian, #rossfromfriends, #romy,  #mallgrab, #subfocus, #triplejunearthedwinner, #fukhed, #swim, #dameeeela, #notion, #conducta, #knock2, #isoxo, #cobrah');

     // right 영역을 가져오기
     const rightArea = document.querySelector('.right');

     // 클릭 이벤트 설정
     targetElements.forEach(target => {
         target.addEventListener('click', function() {
             // 클릭된 요소의 id를 가져옴
             const targetId = target.id;
 
             // right 영역 안에서 동일한 id를 가진 요소 찾기
             const targetElement = rightArea.querySelector(`#${targetId}`);
 
             if (targetElement) {
                 // right 영역 내에서 스크롤 이동
                 rightArea.scrollTo({
                     top: targetElement.offsetTop - rightArea.offsetTop, // 스크롤 위치
                     behavior: 'smooth' // 부드러운 스크롤
                 });
             }
         });
     });   


     // mobile-menu 요소와 close-icon 요소, 그리고 메뉴를 여는 버튼 선택
const mobileMenu = document.getElementById('mobile-menu');
const closeIcon = document.getElementById('close-icon');
const mobileIcon = document.getElementById('mobile-icon');

// close-icon 클릭 시 mobile-menu 숨기기
closeIcon.addEventListener('click', function() {
    mobileMenu.classList.remove('open'); // open 클래스 제거로 메뉴 숨김
});

// mobileIcon 클릭 시 mobile-menu 열기
mobileIcon.addEventListener('click', function() {
    mobileMenu.classList.add('open'); // open 클래스 추가로 메뉴 열기
});


