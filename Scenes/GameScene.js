class GameScene extends Phaser.Scene {
    constructor ()
    {
        super('gameScene');
    }
    create ()
    {

        const rotateButton = this.add.text(200, 500, 'Game Scene', { fill: '#ffffff' });
        // .setInteractive()
        this.input.on('pointerdown', () => {
            console.log('click');
            this.scene.start(game_over_scene);
        });
    }
    update ()
    {
    }
}

module.exports = GameScene;