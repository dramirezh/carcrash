//update user email in all tables
function SPUpdateAccount(sgmmData){ 
	 return WL.Server.invokeSQLStoredProcedure({
		procedure : "sp_updateAccountEmail",
		parameters : [  sgmmData.email, sgmmData.newEmail	              
		                ]
	});

}
