var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create: create, update: update});

function preload(){
  game.load.spritesheet('player', '/img/run.png', 44, 46);
  game.load.image('background', '/img/bg1.jpg');

}

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0,0,'background');

}

function update(){

}

// build Player

var Player = function(game){
  var player = game.add.sprite(0, 0, 'player');

  this.health = 100;
  this.damage = 2;

  game.physics.arcade.enable(player);
  player.animations.add('left', [6,7,8,9, 8]);
  player.animations.add('right', [6,7,8,9], 8);
  player.animations.add('attack', [20,21,22,23,24],2 ,true);
  player.anchor.setTo(0.5, 0.5);

  keyboard = game.input.keyboard.createCursorKeys();

  this.update = function(){
    game.physics.arcade.collide(player, game.platforms);
    game.physics.arcade.collide(game.enemies, function(a,b){
      
    });
  };

};