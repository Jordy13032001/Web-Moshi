import React from 'react';
import '../lyrics.css';

const lyricsData = [
  "Nal seuchineun geudaeui yeoteun geu moksori",
  "Nae ireumeul han beonman deo bulleojuseyo",
  "Eoreobeorin noeul arae meomchwo seoitjiman",
  "Geudae hyanghae han georeumssik georeogallaeyo",
  "Still With You",
  "",
  "Eoduun bang jomyeong hana eopsi",
  "Iksukhaejimyeon an doeneunde",
  "Geuge tto iksukhae",
  "Najimagi deullineun i eeokeon sori",
  "Igeo rado eopseumyeon na jeongmal muneojil geot gata",
  "Hamkke utgo, hamkke ulgo",
  "I dansunhan gamjeongdeuri naegen modeun geosieonneunde",
  "",
  "Eonjejjeumilkka",
  "Dasi geudael majuhandamyeon",
  "Nuneul bogo malhallaeyo",
  "Bogo sipeosseoyo",
  "",
  "Hwangholhaetdeon gieok soge",
  "Na hollo chumchwodo biga naerijana",
  "I angaega geochil ttaejjeum",
  "Jeujeun ballo dallyeogal ge",
  "Geuttae nal anajwo"
];

const FloatingLyrics = () => {
  return (
    <div className="floating-lyrics-container">
      <div className="floating-lyrics-title">
        <div className="music-wave">
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
          <div className="wave-bar"></div>
        </div>
        Still With You
      </div>
      
      <div className="lyrics-window-scrollable">
        {lyricsData.map((line, index) => (
          <p key={index} className="static-lyric-line">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default FloatingLyrics;
