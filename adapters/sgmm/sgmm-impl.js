var selectStatement = WL.Server.createSQLStatement("select * from sgmm where Email=?");

	/************************************************************************
	 * Implementation code for procedure - 'getSGMMData'
	 *
	 * @param - sgmm json from js/sgmm/sgmm.js
	 * @return - invocationResult
	 */

function getSGMMData(oData) {
	var result = WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : [oData.email]
	});
	var oReturn = [];
	if(result.resultSet!=undefined){
	for(var i = 0; i < result.resultSet.length; i++){
		var data = {
				identifier: result.resultSet[i].Identifier, 
				email: result.resultSet[i].Email, 
				Institution:result.resultSet[i].Institution,
				Certificate:result.resultSet[i].sgmmCertificate, 
				FullName:result.resultSet[i].FullName
				};
		
	
		oReturn.push(data);
	}
	}
	return {data: oReturn};
}


function SGMMSaveSP(sgmmData){ 
	 return WL.Server.invokeSQLStoredProcedure({
		procedure : "sp_saveSGMM",
		parameters : [  sgmmData.email, sgmmData.identifier, sgmmData.Institution, 
		                sgmmData.Certificate, sgmmData.FullName	              
		                ]
	});

}


