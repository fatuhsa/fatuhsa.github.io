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

// Fungsi untuk menambahkan ikon ke konten
function tambahkanIkonKeContent(contentId, icons) {
  var content = document.getElementById(contentId);
  if (content) {
    var paragraphs = content.querySelectorAll('p');
    paragraphs.forEach(function(paragraph, index) {
      var iconSpan = document.createElement('span');
      iconSpan.classList.add('icon');
      iconSpan.style.backgroundImage = 'url(' + icons[index].path + ')';
      paragraph.insertBefore(iconSpan, paragraph.firstChild);
    });
  } else {
    console.error("Elemen dengan id '" + contentId + "' tidak ditemukan.");
  }
}

// Array ikon untuk content1
var icons1 = [
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

// Memanggil fungsi untuk menambahkan ikon ke content1
tambahkanIkonKeContent('content1', icons1);

// Array ikon untuk content2
// Fungsi untuk menambahkan ikon ke content2
var icons2 = [
  { name: '8-Bit Emblem', path: '../icon/8bitemblem.webp' },
  { name: 'Adaptive Helm', path: '../icon/adaptive-helm.png' },
  // Tambahkan ikon-ikon baru di sini
];

tambahkanIkonKeContent('content2', icons2);