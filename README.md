# The Game Quiz - Milestone Project 2

The purpose of this project is to act as an examining project for Code Institutes Full Stack Development course in JavaScript and interactive frontend development.

The site itself offers a small quiz-game where the user get to test their skill and knowledge of classical video-games. The user will find a single start-button
that opens up a series of questions where the user will get a point for every correct answer. After answering the last question the user will get a summary 
of the points scored and an opportunity to play again in order to improve the score and bragging-status.

*NOTE! Upon submission of this project, the website is not yet functional in the reagrd as it is intended. For more information view section "Bugs and issues not adressed".

## User Experience

* To intuitevly understand how to start and play the game.
* To have a seamless experience in starting, playing and finishing the game.
* To offer the user a challange and a fun way to test their skills in the stated subject.

#### Mockups
- ![Start](https://github.com/Blajde/MilestoneProject2/blob/main/assets/images/Starting%20Page.png)
- ![Questions correct answer](https://github.com/Blajde/MilestoneProject2/blob/main/assets/images/Question%20correct%20answer.png)
- ![Questions wrong answer](https://github.com/Blajde/MilestoneProject2/blob/main/assets/images/Question%20wrong%20answer.png)
- ![End of game](https://github.com/Blajde/MilestoneProject2/blob/main/assets/images/End%20of%20game.png)

## Features

### Existing features:

1. When loaded to the browser, the game will have a big, modal-button that starts the game, with a simple message "Start game".
2. After clicking the "start game"-button, the first question will be loaded, along with four different alternatives for each question.
3. When clicking an alternative the game responds by making the button green for correct answer, or red for incorrect answer.
4. For each correct answer the score is incremented by one (+1) for each correct answer
5. After answering, the user clicks the next question button at the lower right corner of the game-area to load the next question.
6. There are ten questions to be answered. After the last question have been answered a new modal is loaded with the total score of the player.
7. On the modal will also be a button named "Try again" that reloads the game and the player gets a new try.

### Features left to implement:

* Interactive reactions to emerge the user even more in the retro-game style of the quiz.
* A feature to save the score and compete with other users.
* Additional questions.

## Technologies used:

For this project most programs that were used worked as support to implement the correct JavaScript programming, as well as lend style
and functionality to the game.

* HTML5	- One of the main languages to add structure to this project.
* CSS3	- The other main language to add style and improve user experience.
* JavaScript - The language used for interactivity and workflow of the page.
* [Bootstrap](https://getbootstrap.com/) - This framework has been used to add styles, positioning and effects throughout the pages.
* [Font Awesome](https://fontawesome.com/) - Provided icons and decorations to improve user experience.
* [Google Fonts](https://fonts.google.com/) - The main library for adding fonts and text-styles.
* [Github](https://github.com/) - The site for hosting the website and storing the code.
* [Gitpod](https://www.gitpod.io/) - The tool in which the coding was created.
* [Balsamiq Wireframes](https://balsamiq.com/wireframes/?gclid=CjwKCAjwsNiIBhBdEiwAJK4khu9EQ27ygdRJvQUFqBQkoBzQp0AZfQ3EvyJtonmeiEpHCB4mxe1IYRoCRg4QAvD_BwE) - The tool in which the mockups and wireframes for this site were created.
* [w3schools](https://www.w3schools.com/)  - Inspiration, codesearch and troubleshooting.


## Testing
NOTE! As this site is not yet functional to a satisfactory degree, some of the testing has yet to be adressed in order to have a functional website.

During development of this game, functionality was tested as development progressed, mainly via GitPod's browser preview to check JavaScript functionality and overall look. 
Google Chrome's desktop inspect function was used mostly to check responsivity between JavaScript functions in the terminal and also page responsivity to different screen-
sizes.

Systems:

* [Google Chrome](https://www.google.com/intl/sv/chrome/) - The main web browser when testing the code along with Google Chromes "Inspect"-utility
* [Microsoft Edge](https://www.microsoft.com/sv-se/edge) - Additional web browser used to test funtionality and look.
* [Apple IOS v. 13.7](iPad 5th gen) - A md-screen size test funtionality and look.
* [Android v. 10](Huawei P20) - An xs-screen for testing look and funtionality.

#### Manual testing - functionality

	1. Start game
		i. Open web-browser
		ii. Make sure the "Start game" - button appears
		iii. After clicking the "Start game" - button the first question and associated alternatives appear

	2. Play game
		i. Click one of the associated alternatives for the current question.
		ii. If correct answer, button turns green and score is incremented by one (+1)
		iii. If incorrect answer, button turns red and score remains unaffected.
		iv. When clicking "Next Question" - button a new question and alternatives should appear.

	3. End game
		i. After the tenth question have been answered a modal containing total score should appear.
		ii. On the same modal a button named "Try again" shuold be embedded in the modal.
		iii. When clicked, the "Try again" - button should restart the game from the first question with a score of 0.

#### Manual testing - responsiveness

	1. Desktop
		i. Open the webpage in Google Chrome
		ii. Right-click on the page and select "inspect"
		iii. Modify the screen size and see if the program adjusts accordingly and stays usable/readable.

	2. Medium Screen (e.g Ipad)
		i. Open a web browser.
		ii. Click the start button and make sure that you get the first quesion and associated answer-alternatives.
		iii. Click the "Next" - button and make sure that you recieve new questions.
		vi. Go through all the questions and make sure you get a game-over screen with your total score.
		v. Click the "try again and make sure the game starts over".

	3. Small screen (Smartphone)
		i. Open a web browser.
		ii. Click the start button and make sure that you get the first quesion and associated answer-alternatives.
		iii. Click the "Next" - button and make sure that you recieve new questions.
		vi. Go through all the questions and make sure you get a game-over screen with your total score.
		v. Click the "try again and make sure the game starts over".	

### Bugs and issues not adressed

This initial deployment fell short in regards of funtionality and responsivness of the webpage. This is due to a difficulty 
understanding the working mechanisms and how to access those mechanisms with JavaScript from the developers side. As of first 
submission to Code Institute this project will not in anyway have achieved the goals that has been set and a lot remains to be
done in case of a resubmission at a later time. Several issues remain because of the aforementioned lack of understanding and
some features remains to be added due to lack of time on the styling.

Therefore:
* The page will not load any other questions than the first one.
* The alternatives will not show up when starting the game. Only the placeholders will appear.
* The answer-buttons will not react when clicked, more than the visual click associated with the html-button element.
* The next question button will not load additional questions.
* The game will not progress in anyway beyond the first question-view.
* The points will not increment.
* The end-of-the-game menu has not been added.
* The final score will not appear.
* The page is not yet responsive for mobile-first development.
* Several styling-features remain to be added.


## Deployment

This project was deployed via [GitHub pages] (https://github.com/Blajde/MilestoneProject2/settings).

The local repository was regularly saved and pushed to GitHub with delevopment made in GitPod.io.

## Credits

* Acknowledgements

	Thank you to:
	- Code Institute - For providing basic knowledge and support.
	- Oscar Blide - Family member whom I could consult in several of the challanges I faced in this development.
	- Magnus Johansson - Friend whom I could consult in several of the challanges I faced in this development.
	
	- Chris Quinn - My newly appointed mentor who showed patience and understanding from the start, as well as guidance, in this challanging project. 
	Even though i couldn't follow through completely.

	- Code Institute Slack community - For giving quick answers to all issues concerning project and coding.
	- Code Institute Tutor Assistance - I admire how they're all able to answer questions without giving out the answers.
	

