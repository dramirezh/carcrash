var selectStatement = WL.Server.createSQLStatement("select * from MedicalData where Email=?");

	/************************************************************************
	 * Implementation code for procedure - 'procedure2'
	 *
	 * @param - medicalData json from js/medicalData.js
	 * @return - invocationResult
	 */

function getMedicalData(oData) {
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
				IMSS:result.resultSet[i].InsuranceNumber,
				bloodType:result.resultSet[i].TypeBlood, 
				alergics:result.resultSet[i].Alergies,
				clinicalConditions:result.resultSet[i].Ailment
				};
		
	
		oReturn.push(data);
	}
	}
	return {data: oReturn};
}


function saveProcedure(pMedicalData){
	 return WL.Server.invokeSQLStoredProcedure({
		procedure : "sp_saveVehiclesPolicies",
		parameters : [  pMedicalData.email, pMedicalData.IMSS, pMedicalData.bloodType, 
			               pMedicalData.alergics, pMedicalData.clinicalConditions, pMedicalData.identifier		              
		                ]
	});

}