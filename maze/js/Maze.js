export class Maze {
  constructor(el, widthLine, colorGrid, colorPlayer, colorExit) {
    this.size = el.offsetWidth
    this.map = el.querySelector('[data-el="map"]')
    this.player = el.querySelector('[data-el="player"]')
    this.colorGrid = colorGrid
    this.colorPlayer = colorPlayer
    this.colorExit = colorExit
    this.gridWidth = widthLine
  }
  start(grid) {
    this.grid = grid
    this.createGrid(this.grid)
    this.createRoad()
    this.createPlayer()
  }

  createGrid(grid) {
    this.map.width = this.size
    this.map.height = this.size
    this.cell = this.size / this.grid

    const ctx = this.map.getContext('2d')
    ctx.clearRect(0, 0, this.size, this.size);
    ctx.strokeStyle = this.colorGrid
    ctx.lineWidth = this.gridWidth

    for (let i = 0; i < grid; i++) {
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

  createRoad() {
    this.mapCell = []
    this.mapCellHistory = []

    for (let i = 0; i < this.grid; i++) {
      for (let j = 0; j < this.grid; j++) {
        this.mapCell.push(`${i}.${j}.${true}`)
      }
    }

    this.computedRoad(this.randomInt(this.grid), this.randomInt(this.grid))
  }

  computedRoad(x, y) {
    const side = []

    if (this.mapCell.includes(`${x}.${y}.${true}`)) {
      this.mapCell[this.mapCell.indexOf(`${x}.${y}.${true}`)] = `${x}.${y}.${false}`
      this.mapCellHistory.push([x, y])
    }

    if (this.mapCell.includes(`${x}.${y - 1}.${true}`)) {
      side.push('top')
    }

    if (this.mapCell.includes(`${x}.${y + 1}.${true}`)) {
      side.push('bottom')
    }

    if (this.mapCell.includes(`${x - 1}.${y}.${true}`)) {
      side.push('left')
    }

    if (this.mapCell.includes(`${x + 1}.${y}.${true}`)) {
      side.push('right')
    }

    if (side.length == 0) {
      if (this.mapCellHistory.length > 0) {
        const history = this.mapCellHistory.pop()
        this.computedRoad(history[0], history[1])
      } else {
        this.drawBorder()
        return
      }
    }

    const goSide = side[this.randomInt(side.length)]

    if (goSide === 'top') {
      this.drawRoad('top', x, y)
      this.computedRoad(x, y - 1)
    }

    if (goSide === 'bottom') {
      this.drawRoad('bottom', x, y)
      this.computedRoad(x, y + 1)
    }

    if (goSide === 'left') {
      this.drawRoad('left', x, y)
      this.computedRoad(x - 1, y)
    }

    if (goSide === 'right') {
      this.drawRoad('right', x, y)
      this.computedRoad(x + 1, y)
    }
  }

  drawRoad(position, x, y) {
    const ctx = this.map.getContext('2d')
    x = (x * this.cell) + (this.gridWidth / 2)
    y = (y * this.cell) + (this.gridWidth / 2)
    const size = this.cell - this.gridWidth

    if (position == 'top') {
      ctx.clearRect(x, y - this.gridWidth, size, size + this.gridWidth)
    }
    if (position == 'bottom') {
      ctx.clearRect(x, y, size, size + this.gridWidth)
    }
    if (position == 'left') {
      ctx.clearRect(x - this.gridWidth, y, size + this.gridWidth, size)
    }
    if (position == 'right') {
      ctx.clearRect(x, y, size + this.gridWidth, size)
    }
  }

  drawBorder() {
    const ctx = this.map.getContext('2d')
    ctx.lineWidth = this.gridWidth
    ctx.strokeRect(0, 0, this.size, this.size);
  }

  randomInt(int) {
    return Math.floor(Math.random() * (int));
  }

  createPlayer() {
    this.player.width = this.size
    this.player.height = this.size
    this.playerPosition = {
      x: 0,
      y: this.randomInt(this.grid)
    }
    this.playerExit = {
      x: this.grid - 1,
      y: this.randomInt(this.grid)
    }

    this.drawPlayer(this.playerPosition.x, this.playerPosition.y)
    this.drawExit(this.playerExit.x, this.playerExit.y)

    document.addEventListener('keydown', this.eventPlayer)
  }

  eventPlayer = (e) => {
    if (e.code == 'ArrowUp') {
      if (this.checkGrid('top')) {
        this.playerPosition.y -= 1
        this.drawPlayer(this.playerPosition.x, this.playerPosition.y)
      }
    }

    if (e.code == 'ArrowDown') {
      if (this.checkGrid('bottom')) {
        this.playerPosition.y += 1
        this.drawPlayer(this.playerPosition.x, this.playerPosition.y)
      }
    }

    if (e.code == 'ArrowRight') {
      if (this.checkGrid('right')) {
        this.playerPosition.x += 1
        this.drawPlayer(this.playerPosition.x, this.playerPosition.y)
      }
    }

    if (e.code == 'ArrowLeft') {
      if (this.checkGrid('left')) {
        this.playerPosition.x -= 1
        this.drawPlayer(this.playerPosition.x, this.playerPosition.y)
      }
    }

    if (this.playerPosition.x == this.playerExit.x && this.playerPosition.y == this.playerExit.y) {
      this.win()
    }
  }

  drawPlayer(x, y) {
    x = x * this.cell + this.gridWidth / 2
    y = y * this.cell + this.gridWidth / 2

    const ctx = this.player.getContext('2d')
    ctx.clearRect(0, 0, this.size, this.size);
    ctx.beginPath()
    ctx.fillStyle = this.colorPlayer
    ctx.arc(x + this.cell / 2, y + this.cell / 2, this.cell / 3, 0, 2 * Math.PI);
    ctx.fill()
  }

  drawExit(x, y) {
    x = x * this.cell + this.gridWidth / 2
    y = y * this.cell + this.gridWidth / 2

    const ctx = this.map.getContext('2d')
    ctx.fillStyle = this.colorExit
    ctx.fillRect(x, y, this.cell - this.gridWidth, this.cell - this.gridWidth);
  }

  checkGrid(side) {
    const ctx = this.map.getContext('2d')

    if (side == 'top') {
      const px = ctx.getImageData(this.playerPosition.x * this.cell + this.gridWidth, this.playerPosition.y * this.cell, 1, 1)
      if (this.rgbToHex(px.data[0], px.data[1], px.data[2]) !== this.colorGrid) {
        return true
      }
    }

    if (side == 'bottom') {
      const px = ctx.getImageData(this.playerPosition.x * this.cell + this.gridWidth, (this.playerPosition.y * this.cell) + (this.cell - 1), 1, 1)
      if (this.rgbToHex(px.data[0], px.data[1], px.data[2]) !== this.colorGrid) {
        return true
      }
    }

    if (side == 'right') {
      const px = ctx.getImageData((this.playerPosition.x * this.cell) + (this.cell - 1), this.playerPosition.y * this.cell + this.gridWidth, 1, 1)
      if (this.rgbToHex(px.data[0], px.data[1], px.data[2]) !== this.colorGrid) {
        return true
      }
    }

    if (side == 'left') {
      const px = ctx.getImageData(this.playerPosition.x * this.cell, this.playerPosition.y * this.cell + this.gridWidth, 1, 1)
      if (this.rgbToHex(px.data[0], px.data[1], px.data[2]) !== this.colorGrid) {
        return true
      }
    }
  }

  win() {
    document.removeEventListener('keydown', this.eventPlayer)
    return this.start(this.grid)
  }

  rgbToHex(r, g, b) {
    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
  }

}
