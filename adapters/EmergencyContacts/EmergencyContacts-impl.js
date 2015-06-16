var selectStatement = WL.Server.createSQLStatement("select * from EmergencyContacts where Email=?");

var existStatement = WL.Server.createSQLStatement("select * from EmergencyContacts where Identifier=? and Email=?");

var addStatement = WL.Server.createSQLStatement(" insert into EmergencyContacts(Identifier,Email,FirstName,LastName,SecondLastName,CellPhone,ContactEmail) values(?,?,?,?,?,?,?)" 
	);
var updateStatement = WL.Server.createSQLStatement(" update EmergencyContacts set FirstName=?,LastName=?,SecondLastName=?,CellPhone=?, ContactEmail=? where Identifier=?  and Email=? ");
var deleteStatement = WL.Server.createSQLStatement("delete EmergencyContacts where identifier=? and email=? ");

var addVehicles=WL.Server.createSQLStatement(" insert into contactVehicles(ContactIdentifier,VehicleIdentifier) values(?,?)");

var deleteVehicles=WL.Server.createSQLStatement("DELETE c "+
" FROM contactVehicles c "+
" INNER JOIN EmergencyContacts e "+
  " ON e.Identifier=c.contactidentifier "+
" Where e.Email=? and c.contactidentifier=?");

var selectVehicles=WL.Server.createSQLStatement("select c.vehicleidentifier"+
" FROM contactVehicles c"+
" INNER JOIN EmergencyContacts e"+
" ON e.Identifier=c.contactidentifier"+
" Where e.Email=? and c.contactidentifier=?");
	/************************************************************************
	 * Implementation code for procedure - 'procedure2'
	 *
	 * @param - account object from js/
	 * @return - invocationResult
	 */

function getEmergencyContacts(oData) {
	var result = WL.Server.invokeSQLStatement({
		preparedStatement : selectStatement,
		parameters : [oData.email]
	});
	var oReturn = [];
	var data; 
	if(result.resultSet!=undefined){
	for(var i = 0; i < result.resultSet.length; i++){
				
		var vehicles = [];
		 
		var select= WL.Server.invokeSQLStatement({
		preparedStatement : selectVehicles,
		parameters : [  oData.email,result.resultSet[i].Identifier]
		});
		
		if(select.resultSet!=undefined){   
		for(var i2= 0; i2 < select.resultSet.length; i2++){	       
	      var data2= {IDVehicleType: select.resultSet[i2].vehicleidentifier};
	      vehicles.push(data2); 
	       }
		}
	
		
		 data = {
				identifier: result.resultSet[i].Identifier, 
				email: result.resultSet[i].Email, 
				UserContactFirstName:result.resultSet[i].FirstName,
				UserContactLastName:result.resultSet[i].LastName, 
				UserContactSecondLastName:result.resultSet[i].SecondLastName,
				UserContactCellPhone:result.resultSet[i].CellPhone,				
				UserContactEmail:result.resultSet[i].ContactEmail,
				vehicle:vehicles
				};
		
	
		oReturn.push(data);
	}
	}
	return {data: oReturn};
}

function saveEmergencyContacts(param1) {
	
	
	var contactsdocs = param1;
	var ret = [];
	for(var a = 0; a<contactsdocs.length; a++){
		var contact = contactsdocs[a];
		
		if(contact._operation!="remove"){
			
			 result = WL.Server.invokeSQLStatement({
					preparedStatement : existStatement,
					parameters : [contact.json.identifier,contact.json.email]
				});
				
				if(result.resultSet!=undefined){
				if(result.resultSet.length>0){
					
					ret.push(update(contact.json));
				}else{
					ret.push(save(contact.json));
				}
				}
		}else{
			ret.push(remove(contact.json));
		}		
		
	}
	return {data:ret};	
}

function save(pEmergencyContacts){
	var s;
	
	s= WL.Server.invokeSQLStatement({
		preparedStatement : addStatement,
		parameters : [  pEmergencyContacts.identifier, pEmergencyContacts.email,
		               ,pEmergencyContacts.UserContactFirstName, pEmergencyContacts.UserContactLastName, 
		               pEmergencyContacts.UserContactSecondLastName, pEmergencyContacts.UserContactCellPhone, pEmergencyContacts.UserContactEmail
		                ]
	});
	addVehiclesFun(s,pEmergencyContacts); 
	 
	 return s;
}
function update(pEmergencyContacts){
	var s;
	s= WL.Server.invokeSQLStatement({
		preparedStatement : updateStatement,
		parameters : [pEmergencyContacts.UserContactFirstName, pEmergencyContacts.UserContactLastName,  pEmergencyContacts.UserContactSecondLastName, 
		              pEmergencyContacts.UserContactCellPhone, pEmergencyContacts.UserContactEmail
		              ,pEmergencyContacts.identifier, pEmergencyContacts.email ]
	});
	
	if(s!=undefined){
		if(s.isSuccessful){
			
			var del;
				del= WL.Server.invokeSQLStatement({
				preparedStatement : deleteVehicles,
				parameters : [  pEmergencyContacts.email,pEmergencyContacts.identifier 
				                ]
			});
				if(del!=undefined){
					if(del.isSuccessful){
						var cont; 
						for(cont=0;cont<pEmergencyContacts.vehicle.length;cont++){				  	
						var	addV= WL.Server.invokeSQLStatement({
								preparedStatement : addVehicles,
								parameters : [  pEmergencyContacts.identifier, pEmergencyContacts.vehicle[cont].IDVehicleType 
								                ]
							});
					    }
					}
				}
		}		
	}
	
	return s;
}
function remove(pEmergencyContacts){
	var del;
	del= WL.Server.invokeSQLStatement({
	preparedStatement : deleteVehicles,
	parameters : [  pEmergencyContacts.email,pEmergencyContacts.identifier
	                ]
		});
	var s;
	if(del!=undefined){
		if(del.isSuccessful){
			s= WL.Server.invokeSQLStatement({
				preparedStatement : deleteStatement,
				parameters : [ pEmergencyContacts.identifier, pEmergencyContacts.email]
			});
		}
		}	

	 return s;
}

function addVehiclesFun(contact,pEmergencyContacts){
	if(contact!=undefined){
		if(contact.isSuccessful){
			var cont;
			for(cont=0;cont<pEmergencyContacts.vehicle.length;cont++){				  	
			var	addV= WL.Server.invokeSQLStatement({
					preparedStatement : addVehicles,
					parameters : [  pEmergencyContacts.identifier, pEmergencyContacts.vehicle[cont].IDVehicleType 
					                ]
				});
		    }
		}		
	}
	
}