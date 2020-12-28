//Rename all layers based on their first item/object name.
//Helpful when "Release to layers(Sequence)" option is used
//Created By: Rishi Kumar | email: rishi.kumar.id@gmail.com

var layers = app.activeDocument.layers;
for(var l = 0; l < layers.length; l++){
  layers[l].name = layers[l].pageItems[0].name;
}