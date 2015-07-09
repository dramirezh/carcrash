/*******************************************************************************
 * Functions that correspond to JSONStore client operations
 * 
 */

var selectStatement = WL.Server.createSQLStatement(
	"SELECT R.Identifier AS identifier, R.Email AS email, R.IDInsurancePolicy AS idPolicy, LEFT(CONVERT(varchar, R.[Date], 120) ,10) AS date, " +
	"R.[Time] as [time], R.[Type] AS [type], R.[Status] AS [status], R.Lat AS lat, R.Lng AS lng, " +
	"RE.MedicalAssistance as medicalAssistance, RE.LegalAssistance as legalAssistance, RE.CraneService as craneService " +
	"FROM Reports R " +
	"LEFT JOIN ReportsExtra RE ON RE.Identifier = R.Identifier AND RE.Email = R.Email " +
	"WHERE R.Email = ?"
);
var selectPicsStatement = WL.Server.createSQLStatement("SELECT PictureURL AS url from ReportPictures WHERE Identifier = ? AND Email = ?");

var addStatement = WL.Server.createSQLStatement(
	"INSERT INTO Reports (Identifier, Email, IDInsurancePolicy, [Date], [Time], [Type], [Status], Lat, Lng) " +
	"VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)"
);
var addExtrasStatement = WL.Server.createSQLStatement(
	"INSERT INTO ReportsExtra (Identifier, Email, Severity) " +
	"VALUES(?,?,?)"
);
var addPicsStatement = WL.Server.createSQLStatement(
	"INSERT INTO ReportPictures (Identifier, Email, PictureURL) " +
	"VALUES(?,?,?)"
);
var updateStatement = WL.Server.createSQLStatement(
	"UPDATE Reports SET Status = ? WHERE Identifier = ? AND Email = ?"
);

var deleteStatement = WL.Server.createSQLStatement(
	"DELETE FROM Reports WHERE Identifier = ? AND Email = ?;"
);
var deleteExtrasStatement = WL.Server.createSQLStatement(
	"DELETE FORM ReportsExtra WHERE Identifier = ? AND Email = ?"
);
var deletePicsStatement = WL.Server.createSQLStatement(
	"DELETE FORM ReportPictures WHERE Identifier = ? AND Email = ?"
);

function getSinisters(oData) {
	var result = WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : [oData.email]
	});
	
	var oReturn = [];
	for(var i = 0; i < result.resultSet.length; i++){
		var data = {
					identifier: result.resultSet[i].identifier,
					email : result.resultSet[i].email,
					idPolicy: result.resultSet[i].idPolicy,
					date: result.resultSet[i].date,
					time: result.resultSet[i].time,
					type: result.resultSet[i].type,
					status: result.resultSet[i].status,
					location: {
						lat: result.resultSet[i].lat,
						lng: result.resultSet[i].lng
					},
					extras: {
						pictures: [],
						medicalAssistance: result.resultSet[i].medicalAssistance,
						legalAssistance: result.resultSet[i].legalAssistance,
						craneService: result.resultSet[i].craneService,
						comments: result.resultSet[i].comments
					}
				};
		var pics = WL.Server.invokeSQLStatement({
			preparedStatement : selectPicsStatement,
			parameters : [result.resultSet[i].identifier, result.resultSet[i].email]
		});
		for(var a = 0; a < pics.resultSet.length; a++){
			data.extras.pictures.push(pics.resultSet[a]);
		}
		
		oReturn.push(data);
	}
	return {data: oReturn};
}

function saveSinisters(param1) {
	var sinistersArray = param1;
	var ret = [];
	for(var a = 0; a<sinistersArray.length; a++){
		var sinister = sinistersArray[a];
		switch(sinister._operation){
		case "add":
			ret.push(save(sinister.json));
			break;
		case "replace":
			ret.push(update(sinister.json));
			break;
		case "remove":
			ret.push(remove(sinister.json));
			break;
		}
	}
	return {data:ret};
}

function save(sinister){
	var a, b, c = {};
	a = WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [sinister.identifier, sinister.email, sinister.idPolicy, sinister.date, sinister.time, sinister.type, sinister.status + 1, sinister.location.lat, sinister.location.lng]
	});
	if(sinister.type != "theft"){
		b = WL.Server.invokeSQLStatement({
			preparedStatement : addExtrasStatement,
			parameters : [sinister.identifier, sinister.email, sinister.severity]
		});
		
		c = [];
		for(var i = 0; i < sinister.extras.pictures.length; i++){
			 c.push(WL.Server.invokeSQLStatement({
				preparedStatement : addPicsStatement,
				parameters : [sinister.identifier, sinister.email, sinister.extras.pictures[i].url]
			}));
		}
		return [ {"a":a},{"b":b},{"c":c}];
	}
	else{
		return a;
	}
}
function update(sinister){
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [sinister.identifier, sinister.email, sinister.status]
	});
}
function remove(sinister){
	var a = WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement,
		parameters : [sinister.identifier, sinister.email]
	});
	
	var b = WL.Server.invokeSQLStatement({
		preparedStatement : deleteExtrasStatement,
		parameters : [sinister.identifier, sinister.email]
	});
	
	var c = WL.Server.invokeSQLStatement({
		preparedStatement : deletePicsStatement,
		parameters : [sinister.identifier, sinister.email]
	});
	
	return [a,b,c];
}
