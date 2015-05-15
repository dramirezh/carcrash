var selectStatement = WL.Server.createSQLStatement("select * from InsuranceCompanies");
/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 *
 * @return - invocationResult
 */
 
function getInsurances() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : []
	});
}

