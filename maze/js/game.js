import {Maze} from '../js/Maze.js'

// game el, width line, color grid, color player, color exit
const game = new Maze(document.getElementById('maze'), 2, '#8c82ba', '#f9d950', '#4f486d');
// game.start
game.start(20)

const levels = document.querySelectorAll('[data-level]')

levels.forEach((level) => {
  level.addEventListener('click', (e) =>{
    game.start(+e.target.dataset.level)
  })
})
