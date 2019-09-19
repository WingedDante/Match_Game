class GameOverScene extends Phaser.Scene{
    constructor ()
    {
        super('gameOverScene');
    }
    create ()
    {
        const rotateButton = this.add.text(200, 500, 'Game Over Scene', { fill: '#ffffff' });
        
        this.input.on('pointerdown', () => {
            console.log('click');
            this.scene.start(menu_scene);
        });

    }
    update ()
    {
    }
}

module.exports = GameOverScene;