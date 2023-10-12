const surahName = JSON.parse(surahNames).surat;


function surahNamesMainFunc() {
    const surahNamesList = document.querySelector(`.surahNamesList`);
   
    surahNamesList.innerHTML = `${surahName.map((values, index) => {
        return `<div class="pointer" onclick="runfullSurah()">
                <div class="surahNamber"><p>${values.surah}</p></div>
                <div class="singleSurahName">سورة ${values.name}</div>
            </div>`;
    }).join(``)}`
}


const ayats = JSON.parse(allAyats);

function runfullSurah(name) {

    const allAyats = document.querySelector(`.allAyats`);

    allAyats.innerHTML = `${ayats[1]
      .map((values) => {
        return `<p> ${values.text} ${values.verse}</p>`;
      })
      .join(``)}`;
}

surahNamesMainFunc()
