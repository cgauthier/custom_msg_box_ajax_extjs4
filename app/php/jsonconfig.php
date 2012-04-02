<?php
	$username = trim($_POST['username']);
	$password = $_POST['password'];
	$success = true;
	$errorMsg = '';
	$cfg = '';
	if(strtolower($username) == 'admin' || $username == '') {
		$success = false;
		$errorMsg = "Error: Invalid Username/Password";
	}
	else {
		// construct ExtJS cfg here
		$panel = array(
			'xtype' => 'panel',
			'title' => 'Welcome',
			'region' => 'center',
			'html' => ('Hello ' . $username)
		);
		
		$viewport = array(		
			'layout' => 'border',
			'items' => array( $panel )
		);
	}
	$response = array('success' => $success, 'username' => $username, 'errorMsg' => $errorMsg, 'cfg' => $viewport);
	echo json_encode($response);
	
?> 
