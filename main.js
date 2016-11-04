ig.module(
    'game.main'
)
.requires(
    'impact.game',
    'impact.font',
    'plugins.camera',
    'game.entities.reaper',
    'game.levels.level1'
)
.defines(function() {

  MyGame = ig.Game.extend({
    
    // Load a font
    font: new ig.Font('media/04b03.font.png'),
    
    init: function() {
      ig.input.bind(ig.KEY.UP_ARROW, 'up');
      ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
      ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
      ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
      this.loadLevel(LevelLevel1);
    },
    
    update: function() {
      this.parent();
      
      // Add your own, additional update code here
    },
    
    draw: function() {
      // Draw all entities and backgroundMaps
      this.parent();
      this.camera.follow(this.player);
    },
      
    loadLevel: function(data) {
      this.parent(data);
      ig.game.sortEntitiesDeferred();
      this.player = this.getEntitiesByType(EntityReaper)[0];
      this.camera = new ig.Camera(ig.system.width/3, ig.system.height/3, 3);
      this.camera.trap.size.x = ig.system.width/10;
      this.camera.trap.size.y = ig.system.height/3;
    
      this.camera.lookAhead.x = ig.system.width/6;
    
      this.camera.max.x = this.collisionMap.pxWidth - ig.system.width;
      this.camera.max.y = this.collisionMap.pxHeight - ig.system.height;
      this.camera.set(this.player);
      
      // Add your own drawing code here
      var x = ig.system.width/2,
          y = ig.system.height/2;
    }
  });


  // Start the Game with 60fps, a resolution of 320x240, scaled
  // up by a factor of 2
  ig.main( '#canvas', MyGame, 60, 320, 240, 3 );

});
