// open a single window
var win = Ti.UI.createWindow({
	backgroundColor:'white'
});

var launcher = require('com.kangacoders.launcher');

win.addEventListener("open", function(){
	launcher.openPackage("com.facebook.katana");
});

win.open();
