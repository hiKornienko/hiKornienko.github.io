class Maze{
  constructor(el){
    this.size = el.offsetWidth
    this.map = el.querySelector('[data-el="map"]')
    this.player = el.querySelector('[data-el="player"]')
  }
  start(grid,width){
    this.createGrid(grid,width)
    this.createRoad()
    this.createPlayer()
  }

  createGrid(grid,width){
    this.map.width = this.size
    this.map.height = this.size
    this.grid = grid
    this.gridWidth = width
    this.cell = this.size / this.grid

    const ctx = this.map.getContext('2d')
    ctx.clearRect(0, 0, this.size, this.size);
    ctx.lineWidth = this.gridWidth

    for(let i = 0; i < grid; i++){
      ctx.beginPath()
      ctx.moveTo(i * this.cell, 0)
      ctx.lineTo(i * this.cell, this.size)
      ctx.stroke()

      ctx.beginPath()
      ctx.moveTo(0, i * this.cell)
      ctx.lineTo(this.size, i * this.cell)
      ctx.stroke()
    }
  }

  createRoad(){
    this.mapCell = []
    this.mapCellHistory = []

    for(let i = 0; i < this.grid; i++){
      for(let j = 0; j < this.grid; j++){
        this.mapCell.push(`${i}.${j}.${true}`)
      }
    }

    this.computedRoad(this.randomInt(this.grid), this.randomInt(this.grid))
  }

  computedRoad(x,y){
    const side = []

    if(this.mapCell.includes(`${x}.${y}.${true}`)){
      this.mapCell[this.mapCell.indexOf(`${x}.${y}.${true}`)] = `${x}.${y}.${false}`
      this.mapCellHistory.push([x,y])
    }

    if(this.mapCell.includes(`${x}.${y - 1}.${true}`)){
      side.push('top')
    }

    if(this.mapCell.includes(`${x}.${y + 1}.${true}`)){
      side.push('bottom')
    }

    if(this.mapCell.includes(`${x - 1}.${y}.${true}`)){
      side.push('left')
    }

    if(this.mapCell.includes(`${x + 1}.${y}.${true}`)){
      side.push('right')
    }

    if(side.length == 0){
      if(this.mapCellHistory.length > 0){
        const history = this.mapCellHistory.pop()
        this.computedRoad(history[0], history[1])
      }
      else{
        this.drawBorder()
        return
      }
    }

    const goSide = side[this.randomInt(side.length)]

    if(goSide === 'top'){
      this.drawRoad('top', x, y)
      this.computedRoad(x, y - 1)
    }

    if(goSide === 'bottom'){
      this.drawRoad('bottom', x, y)
      this.computedRoad(x, y + 1)
    }

    if(goSide === 'left'){
      this.drawRoad('left', x, y)
      this.computedRoad(x - 1, y)
    }

    if(goSide === 'right'){
      this.drawRoad('right', x, y)
      this.computedRoad(x + 1, y)
    }
  }

  drawRoad(position, x, y){
    const ctx = this.map.getContext('2d')
    x = (x * this.cell) + (this.gridWidth / 2)
    y = (y * this.cell) + (this.gridWidth / 2)
    const size = this.cell - this.gridWidth

    if(position == 'top'){
      ctx.clearRect(x, y - this.gridWidth , size, size + this.gridWidth)
    }
    if(position == 'bottom'){
      ctx.clearRect(x, y, size, size + this.gridWidth)
    }
    if(position == 'left'){
      ctx.clearRect(x - this.gridWidth, y, size + this.gridWidth, size)
    }
    if(position == 'right'){
      ctx.clearRect(x, y, size + this.gridWidth, size)
    }
  }

  drawBorder(){
    const ctx = this.map.getContext('2d')
    ctx.lineWidth = this.gridWidth
    ctx.strokeRect(0, 0, this.size, this.size);
  }

  randomInt(int){
    return Math.floor(Math.random() * (int));
  }

  createPlayer(){
    this.player.width = this.size
    this.player.height = this.size
    this.playerPosition = {x: 0, y: this.randomInt(this.grid)}
    this.playerExit = {x: this.grid - 1, y: this.randomInt(this.grid)}
    this.mapComplite = ''

    this.drawPlayer(this.playerPosition.x,this.playerPosition.y)
    this.drawExit(this.playerExit.x,this.playerExit.y)

    this.checkGrid('top')

    document.addEventListener('keydown', (e) => {
      if(e.code == 'ArrowUp'){
        this.checkGrid('top')
        this.playerPosition.y -= 1
        this.drawPlayer(this.playerPosition.x,this.playerPosition.y)
      }

      if(e.code == 'ArrowDown'){
        this.playerPosition.y += 1
        this.drawPlayer(this.playerPosition.x,this.playerPosition.y)
      }

      if(e.code == 'ArrowRight'){
        this.playerPosition.x += 1
        this.drawPlayer(this.playerPosition.x,this.playerPosition.y)
      }

      if(e.code == 'ArrowLeft'){
        this.playerPosition.x -= 1
        this.drawPlayer(this.playerPosition.x,this.playerPosition.y)
      }
    })
  }

  drawPlayer(x,y){
    x = x * this.cell + this.gridWidth / 2
    y = y * this.cell + this.gridWidth / 2

    const ctx = this.player.getContext('2d')
    ctx.clearRect(0, 0, this.size, this.size);
    ctx.fillStyle = "pink"
    ctx.fillRect(x, y, this.cell - this.gridWidth, this.cell - this.gridWidth);
  }

  drawExit(x,y){
    x = x * this.cell + this.gridWidth / 2
    y = y * this.cell + this.gridWidth / 2

    const ctx = this.map.getContext('2d')
    ctx.fillStyle = "yellow"
    ctx.fillRect(x, y, this.cell - this.gridWidth, this.cell - this.gridWidth);
  }

  checkGrid(side){
    const ctx = this.map.getContext('2d')

    if(side == 'top'){
      // ctx.fillStyle = "red"
      // ctx.fillRect(this.playerPosition.x * this.cell + 1, (this.playerPosition.y * this.cell) - 1, 1, 1);

      const data = ctx.getImageData(this.playerPosition.x * this.cell + this.gridWidth, this.playerPosition.y * this.cell - 1, 1, 1)
      console.log(data)
    }
  }
}

const game = new Maze(document.getElementById('maze'));
game.start(15,2)

console.log(game)
