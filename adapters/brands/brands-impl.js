var selectStatement = WL.Server.createSQLStatement("select * from VehicleBrands");
/************************************************************************
 * Implementation code for procedure - 'getInsurances'
 *
 *
 * @return - invocationResult
 */
 
function getVehicleBrands() {
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : []
	});
}
