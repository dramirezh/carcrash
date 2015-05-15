var selectStatement = WL.Server.createSQLStatement("select * from Mechanic where Email=?");
var existStatement = WL.Server.createSQLStatement("select * from Mechanic where Email=?");

var addStatement = WL.Server.createSQLStatement(" insert into Mechanic(Identifier,Email,FirstName,LastName,SecondLastName,CellPhone,Address) values(?,?,?,?,?,?,?)" 
	);
var updateStatement = WL.Server.createSQLStatement(" update Mechanic set FirstName=?,LastName=?,SecondLastName=?,CellPhone=?,Address=? where Email=? ");


	/************************************************************************
	 * Implementation code for procedure - 'procedure2'
	 *
	 * @param - mechanic json from js/mechanicData.js
	 * @return - invocationResult
	 */

function getMechanic(oData) {
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
				MechanicFirstName:result.resultSet[i].FirstName,
				MechanicLastName:result.resultSet[i].LastName, 
				MechanicSecondLastName:result.resultSet[i].SecondLastName,
				MechanicCellPhone:result.resultSet[i].CellPhone,					
				MechanicAddress:result.resultSet[i].Address	
				};
		
	
		oReturn.push(data);
	}
	}
	return {data: oReturn};
}

function saveMechanic(param1) {
	var result = WL.Server.invokeSQLStatement({
		preparedStatement : existStatement,
		parameters : [param1.email]
	});
	
	if(result.resultSet!=undefined){
	if(result.resultSet.length>0){
		update(param1);
	}else{
		save(param1);
	}
	}		
		return {data: result};
}

function save(pMechanic){
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [  pMechanic.identifier, pMechanic.email,
		               pMechanic.MechanicFirstName, pMechanic.MechanicLastName, 
		               pMechanic.MechanicSecondLastName, pMechanic.MechanicCellPhone, pMechanic.MechanicAddress
		                ]
	});
}
function update(pMechanic){
	
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [pMechanic.MechanicFirstName, pMechanic.MechanicLastName, 
		               pMechanic.MechanicSecondLastName, pMechanic.MechanicCellPhone, pMechanic.MechanicAddress
		              , pMechanic.email ]
	});
}

