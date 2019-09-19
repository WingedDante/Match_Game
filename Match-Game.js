const MenuScene = require('./Scenes/MenuScene');
const GameScene = require('./Scenes/GameScene');
const GameOverScene = require('./Scenes/GameOverScene');

var game_scene = new GameScene();
let menu_scene = new MenuScene();
var game_over_scene = new GameOverScene();

var config = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'match-game',
    scene: [menu_scene, game_scene, game_over_scene]
};

var game = new Phaser.Game(config);

