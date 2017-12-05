 
import React, { Component } from 'react';
import './App.css';
import FilteredList from './FilteredList';


/*
    This list has all of the albums with 
    their names, band, year, and cover image url
*/
const albums = [
  {name: "Abbey Road", band: "The Beatles", year: "1969",
  genre: "Rock", 
  cover: "https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/styles/media_responsive_widest/public/tile/image/AbbeyRoad.jpg?itok=BgfH98zh"},
  {name: "Dark Side of the Moon", band: "Pink Floyd", year: "1973",
  genre: "Rock", 
  cover: "https://img.discogs.com/jKTmuxcsYe2TqcahU3QqVXJLssU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1873013-1471100381-3022.jpeg.jpg"},
  {name: "The Beatles", band: "The Beatles", year: "1968",
  genre: "Rock", 
  cover: "https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/styles/media_responsive_widest/public/tile/image/White-Album.jpg?itok=aT_dCE9n"},
  {name: "Let it Be", band: "The Beatles", year: "1970", 
  genre: "Rock", 
  cover: "https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg"},
  {name: "Sgt. Pepper's Lonely Hearts Club Band", band: "The Beatles", year: "1967", 
  genre: "Rock", cover: "https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg"},
  {name: "Revolver", band: "The Beatles", year: "1966", 
  genre: "Rock", 
  cover: "https://upload.wikimedia.org/wikipedia/en/thumb/1/16/Revolver.jpg/220px-Revolver.jpg"},
  {name: "Rubber Soul", band: "The Beatles", year: "1965", 
  genre: "Rock", 
  cover: "https://img.discogs.com/fUgSLFA04qPkOWyZMZB9bQPzOmU=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-4816760-1420395068-7023.jpeg.jpg"},
  {name: "Wish You Were Here", band: "Pink Floyd", year: "1975", 
  genre: "Rock", 
  cover: "https://images-na.ssl-images-amazon.com/images/I/71m0ofUWYXL._SL1300_.jpg"},
  {name: "Highway 61 Revisited", band: "Bob Dylan", year: "1965",
  genre: "Rock", 
  cover: "https://images-na.ssl-images-amazon.com/images/I/71kbAAdrzGL._SL1500_.jpg"},
  {name: "Blonde on Blonde", band: "Bob Dylan", year: "1966",
  genre: "Folk", 
  cover: "https://upload.wikimedia.org/wikipedia/en/3/38/Bob_Dylan_-_Blonde_on_Blonde.jpg"},
  {name: "Nashville Skyline", band: "Bob Dylan", year: "1969",
  genre: "Folk", 
  cover: "https://img.discogs.com/s506lD_Oc6DcbRpxGXFFfDgFmsk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1486272-1234519447.jpeg.jpg"},
  {name: "Bringing It All Back Home", band: "Bob Dylan", year: "1965",
  genre: "Folk", 
  cover: "https://upload.wikimedia.org/wikipedia/en/b/b1/Bob_Dylan_-_Bringing_It_All_Back_Home.jpg"},
  {name: "Animals", band: "Pink Floyd", year: "1977",
  genre: "Rock", 
  cover: "http://rockcult.ru/wp-content/uploads/2014/02/album_cover_pink_floyd_1977_animals.jpg"},
  {name: "The Free Wheelin' Bob Dylan", band: "Bob Dylan", year: "1963",
  genre: "Folk", 
  cover: "https://img.discogs.com/oz3HHFYrh7QARVbuSNh1GhOMPy4=/fit-in/600x599/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1596438-1301991747.jpeg.jpg"},
  {name: "Meddle", band: "Pink Floyd", year: "1971",
  genre: "Rock", 
  cover: "https://cps-static.rovicorp.com/3/JPG_500/MI0003/237/MI0003237418.jpg?partner=allrovi.com"},
];

/*
The main app class
*/
class App extends Component {
    render() {
        return (
            <div className="App">
                <FilteredList items={albums} />
            </div>
        );
    }
}

export default App;
