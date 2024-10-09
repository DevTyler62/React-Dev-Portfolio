import BuggyWork from "../../assets/buggy-work.png";
import ChurchWork from "../../assets/church-work.png";
import DatafyWork from "../../assets/datafy-work.png";
import SkyWindWork from "../../assets/skywind-work.png";
import TicTacToeWork from "../../assets/tictactoe.png";
import CSS from "../../assets/css-3.png";
import Heroku from "../../assets/heroku.png";
import Hostinger from "../../assets/hostinger.png";
import HTML from "../../assets/html.png";
import JavaScript from "../../assets/javascript.png";
import MYSQL from "../../assets/mysql.png";
import PHP from "../../assets/php.png";
import ReactJS from "../../assets/react.png";
import Sass from "../../assets/sass.png";

const BuggyDesc = `A senior capstone group project that followed all
elements of the software development life cycle. The project consisted 
of the analysis, design, development, and testing phases. Buggy is a 
bug-tracking system that takes issues that currently exist within bug-tracking 
softwares and improves them in our software. One issue that was discovered was
that users of other bug-tracking systems found the interfaces difficult to navigate. 
Some systems were also lacking the ability to collaborate on a given ticket. 
With those issues documented, an intuitive user interface was incorporated as well as a 
discussion board for each bug report that came through to
allow for more developer communication. This project provided a real-world situation 
that had plenty of challenges throughout. The most notable of those challenges was at the beginning of the project. The group 
initially consisted of four students, but one member had to leave due to personal reasons. 
We were also the first class to work in a fully remote environment for the entire length of the project due to the pandemic at the time. 
Having to work around each individual's schedule in order to communicate properly proved to be challenging. 
These obstacles created experience on how to handle working within a team toward a common goal. Unfortunately, 
since some resources that were used in the development of Buggy would need to be paid for at this point, 
Buggy is no longer an active site. The code is still available to view on GitHub. Buggy was
built using modern technologies such as HTML, CSS, JavaScript, PHP,
MySQL, and Hostinger.`;

const ChurchDesc = `A local church organization, which I do attend, did not have a website
for itself. I saw this as an opportunity to create one.
I also used this project as a way to experiment with some new ideas.
Instead of using CSS I used SCSS and used icons found on undraw. With the icons, 
I animated parts of the SVG elements to add some liveliness to the site. 
Alongside the animated icons are some site-wide animations as well. This church website was built using HTML,
SCSS, JavaScript, and PHP.`;

const DatafyDesc = `Datafy is a Spotify Data Visualization web app. This project was
completed in one semester and was done in a group of 3. The
goal of this class was to produce a rapid prototype of a type of
software. Datafy allows Spotify users to view different graphical
representations of their listening history. This project involved the
use of the Spotify API. The API was used to authenticate each
user into their personal Spotify account using Spotify's OAuth 2
authentication method. Once authenticated, a user is then able to view
details on their top artists, tracks they listen to, analyze a
playlist they created, and even interact with a music player control within the
application. All of these features make requests to Spotify's API to return 
all of the necessary information to display back to the user. Datafy was built 
using HTML, CSS, and React. It also used the following services, Spotify's API, Chart JS, and Heroku. 
Heroku was the service that was used at the time for hosting, but I have since moved the project to be hosted using Vercel.`;

const SkywindDesc = `SkyWind is a weather app that was built for more development into
APIs. It allows users to search for a city located anywhere in the world to get the
current weather at that location. The data will return the current temperature 
alongside other conditions for the next few hours. Depending on a user's geographical 
location they may use different units of measurement, so I included a toggle switch to
change between Fahrenheit and Celsius. To obtain weather
data I used OpenWeatherMap's API service. I wanted to go a step further
with this project and change the background based on the time of day it was for the 
location searched for. The response I got from OpenWeatherMap did not
include a time for the location but it did include a longitude and
latitude for that location. I was able to pull out that data and then
use Google's time zone API service to get the exact time of
that location. This allowed for a dynamic background change based on
the location searched for. As of now, SkyWind was specifically made for
mobile devices so you will either need to view it on a mobile device
or inspect the page and go to the responsive section for a mobile
device to view it properly. SkyWind was built using HTML, CSS, JavaScript, and hosted on Netilfy.`;

const TictactoeDesc = `I have created a Tic Tac Toe game that includes the ability to play 
with two people or play against a computer. The computer's code is written in a way to 
look at the user's spot selection to block them from winning, while also including
random spot selection. I figured that if
the computer did not have some random spot picking then a game would
most likely end in a tie in most cases. Upon either a tie or a winning
game, the pop-ups that appear come from an add-on known as
Sweetalert2. Using this allowed me to have some nice pop-up boxes that
matched the UI I was going for. This project was built using HTML, CSS,
and JavaScript.`;

export {
  BuggyWork,
  ChurchWork,
  DatafyWork,
  SkyWindWork,
  TicTacToeWork,
  CSS,
  Heroku,
  Hostinger,
  HTML,
  JavaScript,
  MYSQL,
  PHP,
  ReactJS,
  Sass,
  BuggyDesc,
  ChurchDesc,
  DatafyDesc,
  SkywindDesc,
  TictactoeDesc,
};
