var newPaletteButton = document.querySelector('.buttons_new-palette')
var saveButton = document.querySelector('.buttons_save-palette');
var miniSavedPalettes = document.querySelector('.mini_palette');
var currentPaletteMini = document.querySelector('.mini');
var color0 = document.querySelector('#color0');
var color1 = document.querySelector('#color1');
var color2 = document.querySelector('#color2');
var color3 = document.querySelector('#color3');
var color4 = document.querySelector('#color4');
//Everything below is the parent of the color boxes above
var colorSection0 = document.querySelector('color-section1');
var colorSection1 = document.querySelector('color-section2');
var colorSection2 = document.querySelector('color-section3');
var colorSection3 = document.querySelector('color-section4');
var colorSection4 = document.querySelector('color-section5');

// Golbal Variables
var mainPalette = new Palette();
var savedPalettes = [];

//Event Listener
window.addEventListener('load', generateNewPalette);
newPaletteButton.addEventListener('click', generateNewPalette);
saveButton.addEventListener('click', savePalette);
palette0.addEventListener('click', )

function generateNewPalette() {
  mainPalette.replaceColor()
}

function savePalette() {

  var saveThisPalette = new Palette(mainPalette.colors);
  savedPalettes.push(saveThisPalette);

  miniSavedPalettes.innerHTML = '';

  for (var i = 0; i < savedPalettes.length; i++){
    for (var j = 0; j < savedPalettes[i].colors.length; j++) {

      savedPalettes[i].lockColor(j);

      miniSavedPalettes.innerHTML +=  `
        <section class="palettes_color" data-index="0">
        <section class="palettes_current mini locked" style="background-color:#${savedPalettes[i].colors[j].hex}";></section>
      `
    }
  }
}
