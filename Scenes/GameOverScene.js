class GameOverScene extends Phaser.Scene{
    constructor ()
    {
        super();
    }
    create ()
    {
        this.add.text(200, 500, 'Game Over Scene', { fill: '#ffffff' });
        this.input.on('pointerdown', () => {
            this.scene.start(menu_scene);
            this.scene.stop(game_over_scene);
        });
    }
}

module.exports = GameOverScene;