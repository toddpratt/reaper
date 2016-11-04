ig.module('game.entities.reaper')
.requires('impact.animation',
          'impact.entity',
          'impact.input')
.defines(function() {
  EntityReaper = ig.Entity.extend({
    size: {x: 32, y: 64},
    maxVel: {x: 400, y: 800},
    friction: {x: 800, y: 0},
    type: ig.Entity.TYPE.A,
    health: 100,
    animSheet: new ig.AnimationSheet('media/reaper.png', 32, 64),
    init: function(x, y, settings) {
      this.addAnim('idle', 0.05, [0, 0, 0, 1, 1, 1, 2, 2, 3, 4, 5,
                                 6, 7, 7, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9,
                                 8, 8, 8, 7, 7, 6, 5, 4, 3, 2, 2,
                                 1, 1, 1]);
      this.vel.x = 0;
      this.vel.y = 0;
      this.parent(x, y, settings);
    },
    update: function() {
      this.currentAnim = this.anims.idle;
      this.vel.x = 0;
      this.vel.y= 0;
      if(ig.input.state('right')) {
        this.vel.x = 20;
      }
      if(ig.input.state('left')) {
        this.vel.x = -20;
      }
      if(ig.input.state('up')) {
        this.vel.y = -20;
      }
      if(ig.input.state('down')) {
        this.vel.y = 20;
      }
      this.parent();
    },
    receiveDamage: function(p, other) {
      this.parent();
    }
  });
});
