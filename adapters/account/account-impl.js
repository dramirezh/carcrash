var addStatement = WL.Server.createSQLStatement("insert into Accounts (FirstName, BirthDate, Email, CellPhone, Password, FechaRegistro) values (?, ?, ?, ?, ?, GETDATE())");
var selectStatement = WL.Server.createSQLStatement(
		"select FirstName AS 'firstName', LastName As 'lastName', SecondLastName As 'secondLastName', " +
		"BirthDate As 'birthDate', Country, State, City AS 'city', " +
		"Email AS 'email', CellPhone AS 'cellPhone', Password AS 'password', StreetNumber AS 'streetNumber', " +
		"StreetName AS 'street', ZipCode AS 'postalCode', Company AS 'enterprise' " +
		"FROM Accounts " +
		"WHERE Email = ? AND Password = ?"
		);

var updateStatement = WL.Server.createSQLStatement(" update Accounts set FirstName=?,LastName=?,SecondLastName=?,Country=?,State=?,City=?,CellPhone=?,StreetNumber=?,StreetName=?,ZipCode=?,Company=? where Email=? ");
/************************************************************************
 * Implementation code for procedure - 'procedure1'
 *
 * @param - email and passwor to validate
 * @return - invocationResult
 */
function accessAccount(pData) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : [pData.email, pData.password]
	});
}

/************************************************************************
 * Implementation code for procedure - 'procedure2'
 *
 * @param - account object from js/account.js
 * @return - invocationResult
 */
function saveAccount(account) {
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [account.firstName, account.birthDate, account.email, account.cellPhone, account.password]
	});
}


function updateAccount(perfil){
	
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [perfil.firstName, perfil.lastName, perfil.secondLastName, 
		              perfil.Country,perfil.State, perfil.city, perfil.cellPhone,perfil.streetNumber,perfil.street,perfil.postalCode,perfil.enterprise, 
		              perfil.email ]
	});
}
