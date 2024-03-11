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
    { name: 'Nama Ikon 1', path: 'path/ikon1.webp' },
    { name: 'Nama Ikon 2', path: 'path/ikon2.webp' },
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