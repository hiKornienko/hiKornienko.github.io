createMaze(){
  this.randomCell = [this.randomInt(this.grid), this.randomInt(this.grid)]
  this.arrayCell = new Array(this.grid)
      .fill(new Array(this.grid).fill(true))

  this.mapCell = new Map()

  this.createRoad(0,0)
}

// createRoad(x,y){
//   if(this.mapCell.size > this.gridWidth){
//     console.log('return')
//     return
//   }
//   this.mapCell.set(`${x}${y}`,true)
//   this.createRoad(x + 1,y + 1)
// }
createRoad(x,y){
  this.mapCell.set(`${x}${y}`, true)
  const side = {}

  //top
  if(this.mapCell.get(`${x}${y - 1}`) == undefined){
    if(y - 1 >= 0){
      this.mapCell.set(`${x}${y - 1}`, true)
      side.top = this.mapCell.get(`${x}${y - 1}`)
    }
  }else{
    side.top = this.mapCell.get(`${x}${y - 1}`)
  }

  //right
  if(this.mapCell.get(`${x + 1}${y}`) == undefined){
    if(this.grid > x + 1){
      this.mapCell.set(`${x + 1}${y}`, true)
      side.right = this.mapCell.get(`${x + 1}${y}`)
    }
  }else{
    side.right = this.mapCell.get(`${x + 1}${y}`)
  }

  //bottom
  if(this.mapCell.get(`${x}${y + 1}`) == undefined){
    if(y + 1 < this.grid){
      this.mapCell.set(`${x}${y + 1}`, true)
      side.bottom = this.mapCell.get(`${x}${y + 1}`)
    }
  }else{
    side.bottom = this.mapCell.get(`${x}${y + 1}`)
  }

  //left
  if(this.mapCell.get(`${x - 1}${y}`) == undefined){
    if(x - 1 >= 0){
      this.mapCell.set(`${x - 1}${y}`, true)
      side.left = this.mapCell.get(`${x - 1}${y}`)
    }
  }else{
    side.left = this.mapCell.get(`${x - 1}${y}`)
  }

  const sideKey = Object.keys(side)

  if(sideKey.length == 0){
    console.log('no Side')
    return
  }

  const ctx = this.map.getContext('2d')
  const goSide = sideKey[this.randomInt(sideKey.length - 1)]
  // console.log(goSide)
  if(goSide == 'top'){
    ctx.fillStyle = "red"
    ctx.fillRect(x * this.cell + (this.gridWidth / 2), y * this.cell - (this.gridWidth * 2), (this.cell - this.gridWidth), this.cell + this.gridWidth);
    this.mapCell.set(`${x}${y - 1}`, true)
    console.log('to top')
    this.createRoad(x, y - 1)
  }

  if(goSide == 'right'){
    ctx.fillStyle = "yellow"
    ctx.fillRect(x * this.cell + this.gridWidth, y * this.cell + (this.gridWidth / 2), this.cell + this.gridWidth, this.cell - this.gridWidth);
    this.mapCell.set(`${x + 1}${y}`, true)
    console.log('to right')
    this.createRoad(x + 1, y)
  }

  if(goSide == 'bottom'){
    ctx.fillStyle = "pink"
    ctx.fillRect(x * this.cell + this.gridWidth / 2, y * this.cell + this.gridWidth, (this.cell - this.gridWidth), this.cell + this.gridWidth);
    this.mapCell.set(`${x}${y + 1}`, true)
    console.log('to bottom')
    this.createRoad(x, y + 1)
  }

  if(goSide == 'left'){
    ctx.fillStyle = 'orange'
    ctx.fillRect(x * this.cell + (this.gridWidth / 2), y * this.cell + (this.gridWidth / 2), this.cell + this.gridWidth, this.cell - this.gridWidth);
    this.mapCell.set(`${x - 1}${y}`, true)
    console.log('to left')
    this.createRoad(x - 1, y)
  }
}
