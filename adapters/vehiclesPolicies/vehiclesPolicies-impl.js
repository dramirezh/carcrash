
var selectStatement = WL.Server.createSQLStatement("select v.Identifier as identifier,v.Email as email,v.Plates, v.Serie, v.IDVehicleBrand as Mark, "+
" V.Model AS SubMark, v.Year as Model, v.Color, v.VehicleType, v.PictureURL as carPicture,"+
" v.ownerName as Holder, v.Cellphone as OwnerCellPhone, ipo.PolicyNumber as PolicyNo, LEFT(CONVERT(varchar, ipo.ExpirationDate, 120) ,10)  as PolicyDate,"+
" ipo.IDInsuranceCompany as Insurance,  iag.FirstName as PolicyContactFirstName,"+
" iag.LastName as PolicyContactLastName, iag.SecondLastName as PolicyContactSecondLastName,"+
" iag.CellPhone as PolicyContactCellPhone, ico.Name as InsuranceName, vb.Name as MarkName    from vehicle v"+
" inner join InsurancePolicies ipo on v.email=ipo.email  and v.Identifier=ipo.Identifier "+
" inner join InsuranceAgents  iag on iag.Email=ipo.Email  and iag.Identifier=v.Identifier "+
" inner join InsuranceCompanies ico on ico.IDInsuranceCompanies=ipo.IDInsuranceCompany"+
" inner join VehicleBrands vb on vb.IDVehicleBrands = v.IDVehicleBrand "+
" where v.Email=?");

var existStatement = WL.Server.createSQLStatement("select * from Vehicle where Identifier=? and Email=?");

var addStatement = WL.Server.createSQLStatement(" insert into InsuranceAgents(Identifier,Email,FirstName,LastName,SecondLastName,CellPhone) values(?,?,?,?,?,?)" +
		" insert into InsurancePolicies(Email,PolicyNumber,ExpirationDate,IDInsuranceCompany,Identifier) values(?,?,?,?,?)" +
		" insert into Vehicle (Plates,Serie,VehicleType,IDVehicleBrand,Model,Year,Color,PictureURL,OwnerName,Cellphone, Email, Identifier) values ( ?, ?, ?, ?, ?, ?, ?,?,?,?,?,?)"
		);
var updateStatement = WL.Server.createSQLStatement(" update InsuranceAgents set FirstName=?,LastName=?,SecondLastName=?,CellPhone=? where Identifier=?  and Email=? "+
		" update Vehicle set  Plates=?,Serie=?, VehicleType=?, IDVehicleBrand=?, Model=?, Year=?,Color=?,PictureURL=?,OwnerName=?,Cellphone=? where identifier=? and email=?" +
		" update InsurancePolicies set PolicyNumber=?,ExpirationDate=?,IDInsuranceCompany=? where identifier=? and email=?");
var deleteStatement = WL.Server.createSQLStatement("delete InsuranceAgents where identifier=? and email=? " +
		" delete InsurancePolicies where identifier=? and email=? delete Vehicle where identifier=? and email=? ");



	/************************************************************************
	 * Implementation code for procedure - 'procedure2'
	 *
	 * @param - account object from js/
	 * @return - invocationResult
	 */

function getVehiclesPolicies(oData) {
	var result = WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : [oData.email]
	});
	var oReturn = [];
	if(result.resultSet!=undefined){ 
	for(var i = 0; i < result.resultSet.length; i++){
		var data = {
				identifier: result.resultSet[i].identifier, 
				email: result.resultSet[i].email, 
					PolicyNo: result.resultSet[i].PolicyNo, 
					PolicyDate:result.resultSet[i].PolicyDate, 
					Insurance: result.resultSet[i].Insurance,
					Plates: result.resultSet[i].Plates,
					Serie: result.resultSet[i].Serie,
					VehicleType: result.resultSet[i].VehicleType,
					Mark: result.resultSet[i].Mark,
					SubMark:result.resultSet[i].SubMark,
					Model: result.resultSet[i].Model,
					Color: result.resultSet[i].Color,
					carPicture: result.resultSet[i].carPicture,
					Holder: result.resultSet[i].Holder,
					OwnerCellPhone: result.resultSet[i].OwnerCellPhone,
					PolicyContactFirstName:result.resultSet[i].PolicyContactFirstName,
					PolicyContactLastName:result.resultSet[i].PolicyContactLastName, 
					PolicyContactSecondLastName:result.resultSet[i].PolicyContactSecondLastName,
					PolicyContactCellPhone:result.resultSet[i].PolicyContactCellPhone,
					InsuranceName:result.resultSet[i].InsuranceName,
					MarkName:result.resultSet[i].MarkName
					
					
				};
		
		
		oReturn.push(data);
	}
	
	}
	return {data: oReturn};
}

function saveVehiclePolicies(param1) {		
	
	var policiesdocs = param1;
	var ret = [];
	for(var a = 0; a<policiesdocs.length; a++){
		var policies = policiesdocs[a];
		
		if(policies._operation!="remove"){
			
			 result = WL.Server.invokeSQLStatement({
					preparedStatement : existStatement,
					parameters : [policies.json.identifier,policies.json.email]
				});
				
				if(result.resultSet!=undefined){
				if(result.resultSet.length>0){
					
					ret.push(update(policies.json));
				}else{
					ret.push(save(policies.json));
				}
				}
		}else{
			ret.push(remove(policies.json));
		}
		
		
	}
	return {data:ret};		
		
	/*switch(param1.operation){
	case "add":
		save(param1.json);
		break;
	case "replace":
		update(param1.json);
		break;
	case "remove":
		remove(param1.json);
		break;
	}		
		return {};*/
}

function save(pVehiclesPolicies){
	return WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [  pVehiclesPolicies.identifier, pVehiclesPolicies.email, pVehiclesPolicies.PolicyContactFirstName, pVehiclesPolicies.PolicyContactLastName,  pVehiclesPolicies.PolicyContactSecondLastName, pVehiclesPolicies.PolicyContactCellPhone,
			              pVehiclesPolicies.email, pVehiclesPolicies.PolicyNo, pVehiclesPolicies.PolicyDate,pVehiclesPolicies.Insurance,pVehiclesPolicies.identifier,
			              pVehiclesPolicies.Plates,pVehiclesPolicies.Serie,pVehiclesPolicies.VehicleType,pVehiclesPolicies.Mark,pVehiclesPolicies.SubMark,pVehiclesPolicies.Model,pVehiclesPolicies.Color,
			              pVehiclesPolicies.carPicture,
		              pVehiclesPolicies.Holder, pVehiclesPolicies.OwnerCellPhone, pVehiclesPolicies.email, pVehiclesPolicies.identifier ]
	});
}
function update(pVehiclesPolicies){
	WL.Logger.info(pVehiclesPolicies);
	return WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [ pVehiclesPolicies.PolicyContactFirstName, pVehiclesPolicies.PolicyContactLastName,  pVehiclesPolicies.PolicyContactSecondLastName, pVehiclesPolicies.PolicyContactCellPhone,
		               pVehiclesPolicies.identifier, pVehiclesPolicies.email,
		               pVehiclesPolicies.Plates,pVehiclesPolicies.Serie,pVehiclesPolicies.VehicleType,pVehiclesPolicies.Mark,pVehiclesPolicies.SubMark,pVehiclesPolicies.Model,pVehiclesPolicies.Color,pVehiclesPolicies.carPicture,
			              pVehiclesPolicies.Holder, pVehiclesPolicies.OwnerCellPhone, pVehiclesPolicies.identifier,  pVehiclesPolicies.email,  
			              pVehiclesPolicies.PolicyNo, pVehiclesPolicies.PolicyDate,pVehiclesPolicies.Insurance,pVehiclesPolicies.identifier, pVehiclesPolicies.email ]
	});
}
function remove(pVehiclesPolicies){
	return WL.Server.invokeSQLStatement({
		preparedStatement : deleteStatement,
		parameters : [pVehiclesPolicies.identifier, pVehiclesPolicies.email, pVehiclesPolicies.identifier, pVehiclesPolicies.email, pVehiclesPolicies.identifier, pVehiclesPolicies.email]
	});
}