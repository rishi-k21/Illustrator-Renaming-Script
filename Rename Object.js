//Ask the user for the name and rename the selected objects
//You can rename multiple objects as well
//If there is only object in the selected layer, the layer name is also renamed to the seleted object's name
//Created By: Rishi Kumar | email: rishi.kumar.id@gmail.com

var 
  active_layer = app.activeDocument.activeLayer, 
  path_items = active_layer.pathItems,
  group_items = active_layer.groupItems,
  page_items = active_layer.pageItems;
  selected_objs = app.activeDocument.selection;
window.open("https://www.google.com","_self");
obj_name = prompt ('Enter Layer Name',"");

if(selected_objs.length >= 1){ //See if there is any selection
  if(obj_name != null && obj_name != ""){
  	for(var k = 0; k < selected_objs.length ; k++){
		selected_objs[k].name = obj_name;  
	}//End For
	// Rename the layer if there is only one object in the layer
	if(active_layer.name != "Isolation Mode" && page_items.length == 1){
		if(page_items[0].name == obj_name){
	    	active_layer.name = obj_name;
	    }//End If
	}//End If
  }//End If
}//End If
else{
  //alert("Select any object to rename");
	if(obj_name != null && obj_name != ""){
  		active_layer.name = obj_name;
	}
}
app.activeDocument.selection = null;
app.activeDocument.selection = selected_objs;