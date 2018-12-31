/*
_________        .__
\_   ___ \_______|__| _____   __________   ____
/    \  \/\_  __ \  |/     \ /  ___/  _ \ /    \
\     \____|  | \/  |  Y Y  \\___ (  <_> )   |  \
 \______  /|__|  |__|__|_|  /____  >____/|___|  /
        \/                \/     \/  Clyde    \/

Author: CrimsonClyde
Stardate: 35c3
Location: Somewhere deep in the assemblys

Module name: MagicMirrorModule - Ultimate Day Reminder
Description:
A module which will display what a special day currently is.
You can define it for yourself in udr-cal.txt file.
*/

// Register Module
Module.register("mmm-udr",{

	// Default module config.
	defaults: {
    updateInterval: 60*60*1000      //reads the file every 60 mins
	},

	// Initiate SocketNotifications
  start: function() {
        this.sendSocketNotification('START', this.config);
  },

	// Declare SocketNotifications
  socketNotificationReceived: function(notification, payload) {
    // Notificiation data from file
    if(notification === 'EVENT'){
			this.dataFile = payload;
      // Update after receiving notification
      this.updateDom();
    }
  },

  // Override dom generator
  getDom: function() {
    var wrapper = document.createElement("div");

    if(this.dataFile){
        wrapper.innerHTML = this.dataFile;
    } else {
        wrapper.innerHTML = 'Just a normal day';
    }
    return wrapper
  }
});
