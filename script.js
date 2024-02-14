const navMenuBtn = document.querySelector(".nav-menu-btn");
const navMenu = document.querySelector(".nav-menu");

navMenuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.toggle("active");
});

function changeChara(characterData) {
  const charaImg = document.getElementById("chara-img");
  const charaVa = document.getElementById("charaVa");
  const icon1 = document.getElementById("icon-1");
  const icon2 = document.getElementById("icon-2");
  const icon3 = document.getElementById("icon-3");
  const icon4 = document.getElementById("icon-4");
  const icon5 = document.getElementById("icon-5");
  const charaName = document.getElementById("chara-name");
  const charaDesc = document.getElementById("charaDesc");

  charaImg.src = characterData.imageSrc;
  charaVa.innerHTML = `<span class="text-sm">VA: </span>${characterData.voiceActor}</h3>`;
  icon1.src = characterData.icon1;
  icon2.src = characterData.icon2;
  icon3.src = characterData.icon3;
  icon4.src = characterData.icon4;
  icon5.src = characterData.icon5;
  charaName.innerHTML = characterData.name;
  charaDesc.innerHTML = characterData.description;
}

const terakomariData = {
  description: `Daughter of the noble Gandesblood family, Komari spent the last 3 years enjoying the life of a recluse before being suddenly appointed Crimson Lord by the Empress of Mulnite. Despite being a vampire, she hates drinking blood and as a result she cannot use magic and she has stopped growing. Her favorite food is omelette rice.`,
  imageSrc: "assets/img/character-detail-img01A.png",
  icon1: "assets/img/character-detail-img01B.png",
  icon2: "assets/img/character-detail-img01C.png",
  icon3: "assets/img/character-detail-img01D.png",
  icon4: "assets/img/character-detail-img01E.png",
  icon5: "assets/img/character-detail-img01F.png",
  name: `Terakomari <br class="md:hidden lg:block" />Gandesblood`,
  voiceActor: "Tomori Kusunoki",
};

const villhazeData = {
  description: `Komari's personal maid, assigned as part of her position as a Crimson Lord. While generally following Komari's orders, Villhaze will sometimes take the initiative to "handle" Komari in various ways when she tries to run away. She loves physical contact but often gets carried away when it comes to Komari, sometimes bordering on harassment.`,
  imageSrc: "assets/img/character-detail-img02A.png",
  icon1: "assets/img/character-detail-img02B.png",
  icon2: "assets/img/character-detail-img02C.png",
  icon3: "assets/img/character-detail-img02D.png",
  icon4: "assets/img/character-detail-img02C.png",
  icon5: "assets/img/character-detail-img02B.png",
  name: "Villhaze",
  voiceActor: "Sayumi Suzushiro",
};

const karenData = {
  description: `Empress of the Mulnite Empire. Hard to read and wanton in nature, she appoints the reclusive Komari as a Crimson Lord. She is very friendly with Komari and seems to like her rather a lot, apparently having gone so far as giving her a kiss while she was sleeping.`,
  imageSrc: "assets/img/character-detail-img03A.png",
  icon1: "assets/img/character-detail-img03B.png",
  icon2: "assets/img/character-detail-img03C.png",
  icon3: "assets/img/character-detail-img03D.png",
  icon4: "assets/img/character-detail-img03C.png",
  icon5: "assets/img/character-detail-img03B.png",
  name: "Karen Helvetius",
  voiceActor: "Yoko Hikasa",
};

const sakunaData = {
  description: `A fellow Mulnite Empire Crimson Lord who is also under orders to investigate terrorists alongside Komari. Timid and quiet in nature, she was appointed Crimson Lord after accidentally defeating a previous Crimson Lord.`,
  imageSrc: "assets/img/character-detail-img04A.png",
  icon1: "assets/img/character-detail-img04B.png",
  icon2: "assets/img/character-detail-img04C.png",
  icon3: "assets/img/character-detail-img04D.png",
  icon4: "assets/img/character-detail-img04C.png",
  icon5: "assets/img/character-detail-img04B.png",
  name: "Sakuna Memoir",
  voiceActor: "Manaka Iwami",
};

const neliaData = {
  description: `One of the Gerra-Aruka Republic's ”Eight Illustrious Generals", also known as the "Moonpeach Princess". Sharing Komari's ambitions of world domination, Nelia tries to enlist Komari into her plans. Taught by Komari's mother, Yurin, when she was a child, Nelia seems to be familiar with Komari...`,
  imageSrc: "assets/img/character-detail-img05A.png",
  icon1: "assets/img/character-detail-img05B.png",
  icon2: "assets/img/character-detail-img05C.png",
  icon3: "assets/img/character-detail-img05D.png",
  icon4: "assets/img/character-detail-img05C.png",
  icon5: "assets/img/character-detail-img05B.png",
  name: "Nelia Cunningham",
  voiceActor: "Ai Fairouz",
};

const karlaData = {
  description: `One of Heavenly Paradise's "Five Imperial Sabers". Renowned as one of the world's most powerful fighters, Karla is actually a pacifist and always speaks politely. She visits the Mulnite Empire as an emissary to seek an alliance between the two nations.`,
  imageSrc: "assets/img/character-detail-img06A.png",
  icon1: "assets/img/character-detail-img06B.png",
  icon2: "assets/img/character-detail-img06C.png",
  icon3: "assets/img/character-detail-img06D.png",
  icon4: "assets/img/character-detail-img06C.png",
  icon5: "assets/img/character-detail-img06B.png",
  name: "Karla Amatsu",
  voiceActor: "Miyuri Shimabukuro",
};
const bluenightData = {
  description: `A member of the terrorist organization "Inverted Moon". Harboring an unusual animosity towards Komari, she is the alleged culprit behind the attack on the Imperial Academy 3 years ago. It was at this time that Komari became a recluse — perhaps there is a connection between the two...?`,
  imageSrc: "assets/img/character-detail-img07A.png",
  icon1: "assets/img/character-detail-img07B.png",
  icon2: "assets/img/character-detail-img07B.png",
  icon3: "assets/img/character-detail-img07B.png",
  icon4: "assets/img/character-detail-img07B.png",
  icon5: "assets/img/character-detail-img07B.png",
  name: "Millicent Bluenight",
  voiceActor: "Sora Amamiya",
};
const tianoData = {
  description: `Reporter for the Six Countries, a newspaper considered by some to be untrustworthy. Always quick to sniff out a scoop, when she heard Komari had become a new Crimson Lord, she interviewed her immediately and wrote an article so embellished that Komari flipped out.`,
  imageSrc: "assets/img/character-detail-img08A.png",
  icon1: "assets/img/character-detail-img08B.png",
  icon2: "assets/img/character-detail-img08B.png",
  icon3: "assets/img/character-detail-img08B.png",
  icon4: "assets/img/character-detail-img08B.png",
  icon5: "assets/img/character-detail-img08B.png",
  name: "Melka Tiano",
  voiceActor: "Reina Ueda",
};
const flatData = {
  description: `Rookie reporter at the Six Countries newspaper. Partnered with Melka, she mostly handles photography. Compared to Melka who will put her life on the line for a scoop, Thio is a relatively sensible and level-headed person who often gets pushed around by Melka's antics. She specializes in magic that can be used to detect scents and smells.`,
  imageSrc: "assets/img/character-detail-img09A.png",
  icon1: "assets/img/character-detail-img09B.png",
  icon2: "assets/img/character-detail-img09B.png",
  icon3: "assets/img/character-detail-img09B.png",
  icon4: "assets/img/character-detail-img09B.png",
  icon5: "assets/img/character-detail-img09B.png",
  name: "Thio Flat",
  voiceActor: "Saku Mizuno",
};

const characters = [terakomariData, villhazeData, karenData, sakunaData, neliaData, karlaData, bluenightData, tianoData, flatData];
let currentIndex = 0;

function updateCharacter() {
  const currentCharacter = characters[currentIndex];
  changeChara(currentCharacter);
}

function prevCharacter() {
  currentIndex = (currentIndex - 1 + characters.length) % characters.length;
  updateCharacter();
}

function nextCharacter() {
  currentIndex = (currentIndex + 1) % characters.length;
  updateCharacter();
}

updateCharacter();
