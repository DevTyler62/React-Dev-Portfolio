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

const BuggyDesc = `A two semester senior capstone group project that followed all of the
elements of the software development life cycle. The group went
through the analysis, design, development, and testing phases of the
project. Buggy is a bug tracking system that was taking issues
currently found within current bug tracking softwares and
implmentating them into our software. Thoses issues we discovered as a
team were that users of other bug tracking systems found the
interfaces to be diffcult to navigate as well as the fact that there
was no colloaboration possible on a given ticket. With those issues
documented we then incorportated an intuitive user interface as well
as having a disscusion board for each bug report that came through to
allow for more developer communcation. This project put us in real
working world enviroment that was was meet with plently of challenges
along the way. Most notable challenges were that at the beginning the
group consited of 4 people but one memeber had to leave due to medical
issues. The group also dealt with being the first class to work in a
fully remote enviroment for the enitre length of the project. Having
to deal with each indivuduals schedule while trying to provides the
best communication possible was demanding. Unfortunaly due to the fact
that some resources used in the development of buggy that would need
to be paid for at this point, buggy is no longer a live active site.
The code is still avaibale to view at the button above. Buggy was
built using modern technoligies such as HTML, CSS, JavaScript, PHP,
MySQL, and Hostinger.`;

const ChurchDesc = `A local church origazation which I do attend did not have a website
for itself. I saw this as an opportunity to create something for them.
I also used this project as a way to expermient with some new ideas.
Instead of using CSS I used SCSS and I found nice icons on undraw and
animated parts of the SVG images. I also implemented some site
animations as well to learn about them more. This is the second
version of this site and as I learn more I can make changes that
better improve the site. This church wesbite was built using HTML,
SCSS, JavaScript, and PHP.`;

const DatafyDesc = `Datafy is a Spotify Data Visualization software. This project was
completed in one semester that compremised of a group of 3 people. The
goal of this class was to produce a rapid prototype of some type of
software. Datafy allows Spotify users to view different graphical
representations of there listening history. This project invloved the
use of the Spotify API. The API was used in order to authenticate each
user into there personal Spotify account using Spotify's OAuth 2
authentication method. Once authenticated a user is then able to view
details on there top artists, and tracks they listen to, analyze a
playlist they created, and even interact with a player within the
application. All of these features make requests to Spotify's API in
order to return all of the necessary information to display back to
the user. Datafy was built using HTML, CSS, and React. It also used
the following services, Spotify's API, Chart JS, and Heroku.`;

const SkywindDesc = `SkyWind is a weather app that was built for more development into
APIs. Search for a city located anywhere in the world to get the
current weather at that location. Along with the current temperature
and condition being diplayed the next few hours, every 3, are also
displayed. Depending on a users geogrpahical location they may use
differnt units of measument, so I included a toggle switch in order to
switch between farenhite and celecuis. In order to get the weather
data I used openweathermaps API service. I wanted to go a step further
with this project and change the background based on the time in the
location searched for. The response I got from openweathermaps did not
include a time for the location but it did include a longitude and
latitude for that location. I was able to pull out that data and then
use Googles time zone API service in order to get the exact time of
that location. This allowed for a dynamic background change based on
location searched for. As of now SkyWind was specifically made for
mobile devices so you will either need to view it on a mobile device
or inspect the page and go to the responsive section for a mobile
device to view it properly. SkyWind was built using HTML, CSS, Vanilia
JavaScript, and hosted on Netilfy.`;

const TictactoeDesc = `I have created a Tic Tac Toe game that both includes the functions to
be able to play with either two people or play against a computer. The
computers code is written in a way to look at the users selections for
picking a spot in order to block them from winning while also having a
random spot selection aspect to the game as well. I figured that if
the computer did not have some random spot picking then a game would
most likely end in a tie most games. Upon either a tie or a winning
game the pop ups that appear come from a cool add on known as
Sweetalert2. Using this allowed me to have some nice pop up boxes that
match the UI I was going for. This project was built using HTML, CSS,
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
