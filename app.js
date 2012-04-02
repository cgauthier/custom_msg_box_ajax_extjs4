Ext.Loader.setConfig({
	enabled: true,
	paths: {
		'App': 'app'
	}
	
});

Ext.require('App.msg.MessageBox');

Ext.onReady(function() {
	
	Ext.Msg.login("Login Sencha App", "Login", "Token", function(btn, username, password, cfg) {
		if(btn == "login") {
			Ext.Ajax.request({
			    url: 'app/php/jsonconfig.php',
			    params: {
			        username: username,
					password: password
			    },
			    success: function(response) {
					var r = Ext.decode(response.responseText);
					if(r.success == true) {
						Ext.create('Ext.container.Viewport', r.cfg);
						// test to check is errMsg is gone
						// Ext.Msg.login('testing', null, null, function() {});
					}
					else {
						Ext.Msg.setErrorMsg(r.errorMsg);
						Ext.Msg.show();
					}
			    },
				failure: function(response) {
					var msg = 'Status Error: ' + response.status + ' - ' + response.statusText + '. Call SysAdmin at 555-111-2222';
					Ext.Msg.alert('Login Error', msg);
				}
			});
		}
	}, this, "Type your Login", "Type your Token", true)
	
});