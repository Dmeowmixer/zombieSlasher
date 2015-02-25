var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create: create, update: update});

function preload(){
  game.load.spritesheet('player', '/img/player.png', 15, 15);
  game.load.image('background', '/img/bg1.jpg', 200, 200);

}

var running = true;

function create(){
  game.physics.startSystem(Phaser.Physics.ARCADE);
  game.add.sprite(0,0,'background');

  platforms = game.add.group();
  platforms.enableBody = true;
  var ground = platforms.create( 0, game.world.height - 64);
  ground.scale.setTo(1,1);
  ground.body.immovable = true;

  game.bodies = [];

  game.player = new Player(game);

  game.bodies.push(game.player);


}

function update(){

}

// build Player

var Player = function(game){
  var player = game.add.sprite(32, game.world.height - 150, 'player');

  this.health = 100;
  this.damage = 2;

  game.physics.arcade.enable(player);
  player.body.gravity.y = 400;
  player.body.collideWorldBounds = true;
  player.animations.add('left', [6,7,8,9, 8]);
  player.animations.add('right', [6,7,8,9], 8);
  player.animations.add('attack', [20,21,22,23,24],2 ,true);
  player.anchor.setTo(0.5, 0.5);

  keyboard = game.input.keyboard.createCursorKeys();





  this.update = function(){
    game.physics.arcade.collide(player, game.platforms);
    // what will happen if player collides with enemies 
    
    // game.physics.arcade.collide(game.enemies, function(a,b){

    // });
      
    
    player.body.velocity.x = 0;
    if (keyboard.left.isDown) {
      player.body.velocity.x = -150;
      player.animations.play('left');
    }  

    else if (keyboard.right.isDown){
        player.body.velocity.x = 150;
        player.animations.play('right');    
    }
    else {
      player.animations.stop();
      player.frame = 2;
    }

  };
};