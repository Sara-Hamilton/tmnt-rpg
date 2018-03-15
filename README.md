# Teenage Mutant Ninja Turtles

#### JavaScript RPG game where users can select a teenage mutant ninja turtle to play and progress through levels fighting enemies and bosses. 3/15/2018.

#### _By Bryce Frazier and Sara Hamilton_

## Description
_This is an Epicodus practice project for week 1 of the JavaScript course. Its purpose is to demonstrate understanding of npm, and testing with Karma and Jasmine._

#### _Game Summary_
* Storyline: April O'Neil is kidnapped by Shredder.  The objective is to rescue April O'Neil.  Many enemies and bosses must be fought to get to April O'Neil.  Shredder must be fought and defeated in order to rescue April.  
* Player selects one of four turtles to be.
  * Raphael
    * weapon - sai
  * Michelangelo
   * weapon - nunchaku
  * Donatello
    * weapon - bo
  * Leonardo
    * weapon - twin katana
* Attributes of health, speed, recovery, and power are set to defaults.  
* Points start at 0.
* Player has 3 lives.
* Game starts at level 1.
* Points are acquired by attacking enemies.
* Health goes down if turtle is attacked or hit by an enemy.
* Health goes up by eating pizza.  Health also goes up as game progresses and player's points increase.
* Power, speed, and recovery diminish over the course of a level.
* Power goes up if dumbbells are acquired.
* Speed goes up if shoes with wings are acquired.
* Recovery goes up if energy drink is acquired.
* To attack an enemy or boss, a turtle can kick or use their weapon.
* Over the course of a level, a certain number of enemies must be defeated before fighting the boss.
* If health reaches 0, number of lives is reduced by one and level restarts.
* If number of lives reaches 0, the game is over.
* Progress to next level after defeating a boss.  
* Game is over and won when Shredder is defeated and April is rescued.

### Known Bugs
* This is an unfinished game.  The development focus is on backend logic and testing.  


## Setup/Installation Requirements

* _Clone this GitHub repository_

```
git clone https://github.com/Sara-Hamilton/tmnt-rpg.git
```

* _Move into the directory_

```
cd tmnt-rpg
```

* _Install npm_

```
npm install
```
* _Run the program_

```
npm run start
```
* _Follow the prompts_

## Testing

* _Run tests_

```
npm run test
```

## Support and Contact Details

_To suggest changes, submit a pull request in the GitHub repository._

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Karma
* Jasmine
* Node JS
* ES Lint
* Webpack
* Babel

### License

*MIT License*

Copyright (c) 2018 **_Sara Hamilton and Bryce Frazier_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
