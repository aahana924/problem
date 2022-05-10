
var canvas = new fabric.Canvas('myCanvas');
var blockimgheight="";
blockimgheight=30;
var blockimgwidth="";
blockimgwidth=30;
var player_x=10;
var player_y=10;
var playerobject="";

function playerUpdate(){
   fabric.Image.fromURL("player.png", function(Img) {
      playerobject= Img;

      playerobject.scaleToWidth(150);
      playerobject.scaleToHeight(140);
      playerobject.set({
         top:player_y,
         left:player_x
      });
      canvas.add(playerobject);
   });

}
function newimage(getimage){
   fabric.Image.fromURL(getimage, function(Img){
    blockimageobject = Img;
    blockimageobject.scaleToWidth(blockimgwidth);
    blockimageobject.scaleToHeight(blockimgheight);
    blockimageobject.set({
       top:player_y,
       left:player_x
    });
    canvas.add(blockimageobject);
});
}