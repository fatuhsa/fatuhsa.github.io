function toggleContent(menuNumber) {
  var contentId = "content" + menuNumber;
  var content = document.getElementById(contentId);
  var isOpen = content.style.display === "block";
  var allContents = document.querySelectorAll(".opsi");
  allContents.forEach(function(content) {
    content.style.display = "none";
  });
  if (!isOpen) {
    var menu = document.getElementById("menu");
    var menuPosition = menu.getBoundingClientRect();
    content.style.display = "block";
    content.style.position = "absolute";
    content.style.top = menuPosition.bottom + "px";
    content.style.left = menuPosition.left + "px";
    content.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    content.style.padding = "10px";
  }
}
var content1 = document.getElementById('content1');

if (content1) {
  var icons = [
    { name: 'B.F. Sword',            path: '../icon/bf-sword.webp' },
    { name: 'Chain Vest',            path: '../icon/chain-vest.webp' },
    { name: 'Giant\'s Belt',         path: '../icon/giants-belt.webp' },
    { name: 'Needlessly Large Rod',  path: '../icon/needlessly-large-rod.webp' },
    { name: 'Negatron Cloak',        path: '../icon/negatron-cloak.webp' },
    { name: 'Recurve Bow',           path: '../icon/recurve-bow.webp' },
    { name: 'Sparring Gloves',       path: '../icon/sparring-gloves.webp' },
    { name: 'Spatula',               path: '../icon/spatula.png' },
    { name: 'Tear of the Goddess',   path: '../icon/tear-of-the-goddess.png' }
    // Tambahkan nama dan path ikon lainnya di sini
  ];

  var paragraphs = content1.querySelectorAll('p');
  paragraphs.forEach(function(paragraph, index) {
    var iconSpan = document.createElement('span');
    iconSpan.classList.add('icon');
    iconSpan.style.backgroundImage = 'url(' + icons[index].path + ')';
    paragraph.insertBefore(iconSpan, paragraph.firstChild);
  });
} else {
  console.error("Elemen dengan id 'content1' tidak ditemukan.");
}

var content2 = document.getElementById('content2');

if (content2) {
  // Array untuk ikon-ikon baru
  var icons2 = [
    { name: '8-Bit Emblem', path: '../icon/8bitemblem.webp' },
    { name: 'Adaptive Helm', path: '../icon/adaptive-helm.png' },
    // Tambahkan ikon-ikon baru di sini
  ];

  var paragraphs2 = content2.querySelectorAll('p');
  paragraphs2.forEach(function(paragraph, index) {
    var iconSpan = document.createElement('span');
    iconSpan.classList.add('icon');
    iconSpan.style.backgroundImage = 'url(' + icons2[index].path + ')';
    paragraph.insertBefore(iconSpan, paragraph.firstChild);
  });
} else {
  console.error("Elemen dengan id 'content2' tidak ditemukan.");
}

var content3 = document.getElementById('content3');

if (content3) {
  var icons3 = [
    { name: 'Nama Ikon 1', path: 'path/ikon1.webp' },
    { name: 'Nama Ikon 2', path: 'path/ikon2.webp' },
    // Tambahkan ikon-ikon baru di sini
  ];

  var paragraphs3 = content3.querySelectorAll('p');
  paragraphs3.forEach(function(paragraph, index) {
    var iconSpan = document.createElement('span');
    iconSpan.classList.add('icon');
    iconSpan.style.backgroundImage = 'url(' + icons3[index].path + ')';
    paragraph.insertBefore(iconSpan, paragraph.firstChild);
  });
} else {
  console.error("Elemen dengan id 'content3' tidak ditemukan.");
}

var content4 = document.getElementById('content4');

if (content4) {
  var icons4 = [
    { name: 'Nama Ikon 1', path: 'path/ikon1.webp' },
    { name: 'Nama Ikon 2', path: 'path/ikon2.webp' },
    // Tambahkan ikon-ikon baru di sini
  ];

  var paragraphs4 = content4.querySelectorAll('p');
  paragraphs4.forEach(function(paragraph, index) {
    var iconSpan = document.createElement('span');
    iconSpan.classList.add('icon');
    iconSpan.style.backgroundImage = 'url(' + icons4[index].path + ')';
    paragraph.insertBefore(iconSpan, paragraph.firstChild);
  });
} else {
  console.error("Elemen dengan id 'content4' tidak ditemukan.");
}

var content5 = document.getElementById('content5');

if (content5) {
  var icons5 = [
    { name: 'Nama Ikon 1', path: 'path/ikon1.webp' },
    { name: 'Nama Ikon 2', path: 'path/ikon2.webp' },
    // Tambahkan ikon-ikon baru di sini
  ];

  var paragraphs5 = content5.querySelectorAll('p');
  paragraphs5.forEach(function(paragraph, index) {
    var iconSpan = document.createElement('span');
    iconSpan.classList.add('icon');
    iconSpan.style.backgroundImage = 'url(' + icons5[index].path + ')';
    paragraph.insertBefore(iconSpan, paragraph.firstChild);
  });
} else {
  console.error("Elemen dengan id 'content5' tidak ditemukan.");
}