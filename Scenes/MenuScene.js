class MenuScene extends Phaser.Scene{
    constructor ()
    {
        super();
    }
    create ()
    {
        this.add.text(200, 500, 'Menu Scene', { fill: '#ffffff' })
        .setInteractive()
        .on('pointerdown', () => {
            this.scene.start(game_scene);
            this.scene.stop(menu_scene);
        });
    }
}

module.exports = MenuScene;