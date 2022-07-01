import { Scene } from 'phaser';
 
class PlayGame extends Scene {
    image!: Phaser.GameObjects.Image;
    emitter!: Phaser.GameObjects.Particles.ParticleEmitter;

    constructor() {
        super("PlayGame");
    }
    preload(): void {
        this.load.image('logo', 'assets/phaser-logo.png');    
    }
    create(): void {
        this.image = this.add.image(400, 300, 'logo');
        const particles = this.add.particles('blue');
        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0},
            blendMode: 'ADD',
        });
        this.emitter = emitter

        // emitter.startFollow(this.image, 100);
    }
    update(): void {
        this.image.rotation += 0.01;
        const t = this.image.getLeftCenter();
        this.emitter.setPosition(t.x, t.y);
        
    }
}
 
let configObject: Phaser.Types.Core.GameConfig = {
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'thegame',
        width: 800,
        height: 600
    },
    scene: PlayGame
};
 
new Phaser.Game(configObject);
