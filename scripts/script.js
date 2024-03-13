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

// Fungsi untuk menambahkan ikon dan data-attribut ke konten
function tambahkanIkonDataKeContent(contentId, icons) {
  var content = document.getElementById(contentId);
  if (content) {
    var paragraphs = content.querySelectorAll('p');
    paragraphs.forEach(function(paragraph, index) {
      var iconSpan = document.createElement('span');
      iconSpan.classList.add('icon');
      iconSpan.style.backgroundImage = 'url(' + icons[index].path + ')';
      paragraph.insertBefore(iconSpan, paragraph.firstChild);

      // Tambahkan data-attribut
      var attribSpan = document.createElement('span');
      attribSpan.classList.add('attrib');
      attribSpan.textContent = icons[index].attrib;
      paragraph.appendChild(attribSpan);

      // Tambahkan data-resep jika ada
      if (icons[index].resep) {
        var resepSpan = document.createElement('span');
        resepSpan.classList.add('resep');
        resepSpan.textContent = "Resep: " + icons[index].resep;
        paragraph.appendChild(resepSpan);
      }
    });
  } else {
    console.error("Elemen dengan id '" + contentId + "' tidak ditemukan.");
  }
}

// Array ikon untuk content1
var icons1 = [
  { name: 'B.F. Sword',            path: '../icon/bf-sword.webp', attrib: '+10 Attack Damage' },
  { name: 'Chain Vest',            path: '../icon/chain-vest.webp', attrib: '+20 Armor' },
  { name: 'Giant\'s Belt',         path: '../icon/giants-belt.webp', attrib: '+200 Health' },
  { name: 'Needlessly Large Rod',  path: '../icon/needlessly-large-rod.webp', attrib: '+20 Ability Power' },
  { name: 'Negatron Cloak',        path: '../icon/negatron-cloak.webp', attrib: '+20 Magic Resist' },
  { name: 'Recurve Bow',           path: '../icon/recurve-bow.webp', attrib: '+15% Attack Speed' },
  { name: 'Sparring Gloves',       path: '../icon/sparring-gloves.webp', attrib: 'Random Champion' },
  { name: 'Spatula',               path: '../icon/spatula.png', attrib: 'Unique Utility Item' },
  { name: 'Tear of the Goddess',   path: '../icon/tear-of-the-goddess.png', attrib: '+15 Mana' }
  // Tambahkan nama dan path ikon lainnya di sini
];

// Memanggil fungsi untuk menambahkan ikon dan data-attribut ke content1
tambahkanIkonDataKeContent('content1', icons1);

// Array ikon untuk content2
var icons2 = [
  { name: '8-Bit Emblem', path: '../icon/8bitemblem.webp', attrib: '+10 Attack Damage', resep: 'B.F. Sword + Chain Vest' },
  { name: 'Adaptive Helm', path: '../icon/adaptive-helm.png', attrib: '+10 Attack Damage', resep: 'B.F. Sword + Negatron Cloak' },
  { name: 'Archangel\'s Staff', path: '../icon/archangels staff', attrib: '+15 Mana' }
  // Tambahkan ikon-ikon baru di sini
];

// Memanggil fungsi untuk menambahkan ikon dan data-attribut ke content2
tambahkanIkonDataKeContent('content2', icons2);
