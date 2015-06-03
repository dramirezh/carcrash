function getCollections(){
	return {
		perfil : {
			searchFields: {identifier:'integer', email:"string", password:"string"}
		},
		Contacts:{
			searchFields:{identifier:'integer', UserContactSecondLastName:'string',		
				UserContactFirstName:'string',UserContactLastName:'string',
				UserContactCellPhone:'string' }
		},
		reports:{
			searchFields:{
				identifier:'integer', email:'string', idPolicy:'string', date:'string', status:'boolean', type:'string'
			}/*,
		profile : {
	        searchFields: {mobileId: 'string', name: 'string', firstname: 'string', lastname: 'string', cellPhone: 'string',
	        	city: 'string', enterprise: 'string',birthDate: 'string',email: 'string',password: 'string'}
	    }*/,
		},
	    PolicyVehicle : {
	        searchFields: {identifier: 'integer',PolicyNo: 'string', PolicyDate: 'string', Insurance: 'string', Plates: 'string', Serie: 'string'
	        	, VehicleType: 'string', Mark: 'string', SubMark: 'string', Model: 'string', Color: 'string'
	         		, carPicture: 'string', Holder: 'string', OwnerCellPhone: 'string', PolicyContactSecondLastName:'string',
						PolicyContactFirstName:'string', PolicyContactLastName:'string',
						PolicyContactCellPhone:'string'
	         	}
	     },
	     MedicalData : {
	         searchFields: {identifier:'integer', IMSS: 'string', bloodType: 'string', alergics: 'string', clinicalConditions: 'string'
	         	}
	     },
	     MechanicData : {
	         searchFields: {identifier:'integer', MechanicName: 'string',  MechanicFirstName: 'string', MechanicLastName: 'string', MechanicCellPhone: 'string',
	         	MechanicAddress: 'string'}
	     },
	     SGMM : {
	         searchFields: {identifier:'integer'}
	     }
	};
}

;(function () {

	WL.JSONStore.init(getCollections(), {
		// password : 'PleaseChangeThisPassword'
	})

	.then(function () {
		WL.Logger.debug(['All collections was loaded successfully'].join('\n'));
	})

	.fail(function (errObj) {
		WL.Logger.ctx({pretty: true}).error(errObj);
	});

}());
