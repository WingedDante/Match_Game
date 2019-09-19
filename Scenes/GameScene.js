class GameScene extends Phaser.Scene {
    constructor ()
    {
        super();
    }
    create ()
    {
        this.add.text(200, 500, 'Game Scene', { fill: '#ffffff' });
        this.input.on('pointerdown', () => {
            this.scene.start(game_over_scene);
            this.scene.stop(game_scene);
        });
    }
}

module.exports = GameScene;