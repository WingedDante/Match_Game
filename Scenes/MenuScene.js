class MenuScene extends Phaser.Scene{
    constructor ()
    {
        super('menuScene');
    }
    create ()
    {
        

        const rotateButton = this.add.text(200, 500, 'Menu Scene', { fill: '#ffffff' });
        // .setInteractive()
        this.input.on('pointerdown', () => {
            console.log('click');
            this.scene.start(game_scene);
        });
    }
    update ()
    {
    }
}

module.exports = MenuScene;