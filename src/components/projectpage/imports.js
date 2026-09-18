import BuggyWork from "../../assets/buggy-work.png";
import ChurchWork from "../../assets/church-work.webp";
import DatafyWork from "../../assets/datafy-work.png";
import SkyWindWork from "../../assets/skywind-work.png";
import TicTacToeWork from "../../assets/new-tictactoe.png";
import TodoWork from "../../assets/todo.png";
import ProductivityWork from "../../assets/productivity-work.png";
import SparkshiftWork from "../../assets/sparkshift-work.png";
import CSS from "../../assets/css-3.png";
import Heroku from "../../assets/heroku.png";
import Hostinger from "../../assets/hostinger.png";
import HTML from "../../assets/html.png";
import JavaScript from "../../assets/javascript.png";
import MYSQL from "../../assets/mysql.png";
import PHP from "../../assets/php.png";
import ReactJS from "../../assets/react.png";
import Sass from "../../assets/sass.png";
import TailWind from "../../assets/Tailwind.png";
import Vercel from "../../assets/Vercel.png";
import WVercel from "../../assets/vercel-w.png";
import Nextjs from "../../assets/nextjs.png";
import WNextjs from "../../assets/next.js-w.png";
import TypeScript from "../../assets/typeScript.png";
import Motion from "../../assets/motion.png";
import GSAP from "../../assets/gsap.svg";
import Black_OpenAI from "../../assets/OpenAI-Blossom_Black.svg";
import White_OpenAI from "../../assets/OpenAI-Blossom_White.svg";

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

const ChurchDesc = `This project is for a local church organization in my area that did not have a website.
I used this opportunity to experiment and utilize OpenAI’s Codex coding agent. I did some research before
diving right in, as I wanted to see if it would make a website that had its own character to it. I used
the research to prompt it with a story about what I wanted the site to look like and the journey a user
is going to take as they scroll through. I used a skill called a taste skill, which would use actual design
references used in the real world to come up with a nice design for the site. Following the first draft of
the site, I prompted it to get better images that fit the copy and the mood the site would bring in. The
colors were adjusted after I added a DESIGN.md file to fit the proper scheme of the church's sign that is
out by the road next to the church building. I connected the site to Email.js to allow for email to be sent
via a form to the church's email. It connects to the YouTube channel and pulls in the latest sermon that is
uploaded every Sunday. For some extra creativity and content, I had it create a daily devotional section
that pulls in a new bible verse every day for viewers to see. The site already generated animations using
GSAP, but I thought it could use some more and to smooth out ones that were already existing. I verified
its responsive design and had it fix some issues that came up in certain sections. Some of the copy still
has to be added for placeholders, and I plan to refine it as it needs be. The project was built using Codex
with Next.js, Tailwind CSS, GSAP for animations, and is being hosted on Vercel.`;

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
with two people or play against a computer. After the first version, where I built the computer 
code to be rather simple and hard-coded, I decided to change it up to be more computerized. With 
assistance from ChatGPT, I utilized a min-max algorithm that has the computer look for all possible 
future moves, giving them a score based on a win, lose, or tie scenario. The computer then selects 
the best move at that time while also assuming its human opponent also makes the best move. This 
opened up the door for me to allow for a difficulty selection, as the min-max would be the hard 
difficulty. The other difficulties used similar components of the min-max algorithm but without 
using a score and being more randomized, allowing for wins to occur more often. A pop-up from 
Sweetalert2 is shown upon either a tie or a winning game. This project was built using HTML, CSS, 
and JavaScript with assistance from ChatGPT and is hosted on Vercel.
`;

const TodoDesc = `This is a React to-do list app with the features of a CRUD app. 
The app allows you to add new tasks to your task list. Once a task has been completed 
you can click on that task for it to be checked off. When you are fully done with the 
task you can click the trashcan icon to delete that task. The list is then updated to 
take the place of the deleted task. A pencil icon is present to allow the user to update 
a given task if need be. A pop-up using Sweetalert2 displays the text for that given task 
and allows the user to make any changes they want. An edit button is present to save the 
changes and a cancel button in the event an edit action was clicked by mistake. If the 
edit text field is left blank and an attempt is made to be saved, then a dialogue box 
will be present telling the user to input some text to be saved. This is so no task can 
be left empty. The last piece is that all of the data is stored within local storage. 
If you leave the app and come back the app will look to see if there is any data within 
local storage to then populate the list of tasks to be done. On a first load or any load 
when no tasks are in local storage then an empty state is present ready to be filled with 
any tasks the user inputs. The app was built using React with Vite, Tailwind CSS for the 
styles, SweetAlert2 for the pop-up, and hosted on Vercel.`;

const ProductivityDesc = `A landing page for a Software as a service company. This page 
showcases what problem this software will solve for your company. At the top is page 
navigation that will take you to the different sections on the page alongside a banner to
entice you to try the software. The navigation is sticky and will always stay at the top
of the page as you scroll. Following the navigation bar is the hero section which has an
image with the software name, a small description of the software solutions, and a call
to action button. Just below the hero section is a showcase of different company logos
that are all using the software. It is presented in a nice flowing side-to-side animation.
Below the logos is the product presentation section. Displayed is an image of the actual 
workings of the product itself. Following is the pricing section to lay out the cost of 
using the software and the benefits that come from the different tiers that are available. 
A small animation on the center price card to guide user attention to the most popular tier 
that is selected most often. The testimonials section follows where a scroll animation is 
present on columns displaying users' reviews of how the software has helped them or 
their business. Wrapping up is the summary call to action section to get you trying 
out the software. Followed lastly by the footer to get you to a different section of the 
page if need be and to signify you have reached the bottom of the page. This landing page 
was built using Next.js, TypeScript, Tailwind CSS for styling, Framer Motion for the animations, and hosted on Vercel.`;

const SparkshiftDesc = `Sparkshift is a concept marketing agency's landing page. This page
was built from a Figma design file that I had found on Envato. The Figma design file only had 
the desktop view provided, so I had to be sure it would be able to be responsive on other device
screens. The desktop view was set up in a pleasant format that made transitioning to the smaller
screens easier. Building this page allowed me to understand more about Typescript and its type
definitions. Without type definitions, the page may still function as intended, but errors would
show within the code and during deployment. Through the creation of the accordion piece, I was 
learning how to keep refactoring my previous code down to be more efficient. This section also 
used the different abilities within Framer Motion to animate the individual items once they were 
clicked on to either open or close. View the code on my Github using the Code button, or view the 
project using the Live Site button. This project was built off of a Figma design file using the 
technologies of Next.js, TypeScript, Tailwind CSS, Framer Motion, and hosted on Vercel. `;

export {
  BuggyWork,
  ChurchWork,
  DatafyWork,
  SkyWindWork,
  TicTacToeWork,
  TodoWork,
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
  TodoDesc,
  ProductivityDesc,
  ProductivityWork,
  SparkshiftWork,
  SparkshiftDesc,
  TailWind,
  Vercel,
  WVercel,
  Nextjs,
  WNextjs,
  TypeScript,
  Motion,
  GSAP,
  Black_OpenAI,
  White_OpenAI,
};
