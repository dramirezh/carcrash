var globalMail = "";
function clsJsonStoreHelper(){
	this.collectionName = "";
	this.options = {};
	this.document = {};
	this.id = 0;
	this.email = globalMail;
	
	this.save = _saveData;
	this.remove = _removeData;
	this.get = _getData;
	this.count = _count;
	this.getFromServer = _getFromServer;
	this.saveToServer = _saveToServer;
	
	this.fnSuccess = function(){};
	this.fnFail = function(){};
}

function _saveData(useIdentifier, useMail){
	useIdentifier = typeof useIdentifier !== 'undefined' ? useIdentifier : true;
	useMail = typeof useMail !== 'undefined' ? useMail : true;
	
	var collectionName = this.collectionName;
	var document = this.document;
	var id = this.id;
	var fnSuccess = this.fnSuccess;
	var fnFail = this.fnFail;
	var data = document;
	
	WL.JSONStore.init(getCollections())
	.then(function(){
		if(id == 0){
			var oJS = new clsJsonStoreHelper();
			oJS.collectionName = collectionName;
			oJS.options = {sort:[{identifier:WL.constant.DESCENDING}], limit:1};
			oJS.fnSuccess = function(object){
				if(useIdentifier){
					if(object.length > 0){
						data["identifier"] = object[0].json.identifier +1;
					}else{
						data["identifier"] = 1;
					}
				}
				if(useMail){
					data["email"] = globalMail;
				}
				
				return WL.JSONStore.get(collectionName).add(data, {markDirty:true})
				.then(fnSuccess)
				.fail(fnFail);
			};
			oJS.fnFail = function(error){
				alert('fail to get next id '+ JSON.stringify(error) );
			};
			oJS.get();
		}else{
			if(useMail){
				data["email"] = globalMail;
			}
			
			var oJStr = new clsJsonStoreHelper();
			oJStr.collectionName = collectionName;
			oJStr.id = id;
			oJStr.fnSuccess = function(documentById){
				if(useIdentifier){
					data["identifier"] = documentById[0].json.identifier;
				}
				
				var docs = [{_id: parseInt(id), json: data}];
				
				WL.JSONStore.get(collectionName)
				.replace(docs, {markDirty:true})
					.then(fnSuccess)
					.fail(fnFail);
			};
			oJStr.fnFail = function(){
				
			};
			oJStr.get();
		}
	})
	.fail(function(){
		
	});
}

function _removeData(){
	var collectionName = this.collectionName;
	var id = this.id;
	var fnSuccess = this.fnSuccess;
	var fnFail = this.fnFail;
	
	//remove document
	var queries = [{_id: parseInt(id)}];
	var options = {exact: true, markDirty: true};
	
	WL.JSONStore.init(getCollections())
	.then(function(){
		WL.JSONStore.get(collectionName)
		.remove(queries, options)
			.then(fnSuccess)
			.fail(fnFail);
	})
	.fail(function(){
		
	});
}

function _getData(){
	var collectionName = this.collectionName;
	var options = this.options;
	var document = this.document;
	var fnSuccess = this.fnSuccess;
	var fnFail = this.fnFail;
	var id = parseInt(this.id);
	WL.JSONStore.init(getCollections())
	.then(function(){
		if(id == 0 || isNaN(id))
		{	
			var queryPart = WL.JSONStore.QueryPart();
			$(document).each(function(){
				switch(this.operator){
				case "equal":
					queryPart.equal(this.key, this.value);
					break;
				case "like":
					queryPart.like(this.key, this.value);
					break;
				}
			});
			WL.JSONStore.get(collectionName)
				.advancedFind([queryPart], options)
					.then(fnSuccess)
					.fail(fnFail);
		}else{
			WL.JSONStore.get(collectionName)
				.findById(parseInt(id))
					.then(fnSuccess)
					.fail(fnFail);
		}
	})
	.fail(function(){
		
	});
}

function _count(){
	var collectionName = this.collectionName;
	var fnSuccess = this.fnSuccess;
	var fnFail = this.fnFail;
	WL.JSONStore.init(getCollections())
	.then(function(){
		WL.JSONStore.get(collectionName).count({},{exact:true})
		.then(fnSuccess)
		.fail(fnFail);
	})
	.fail(function(error){
		
	});
}

function _saveToServer(pAdapter, pProcedure, id){
	var collectionName = this.collectionName;
	var fnSuccess = this.fnSuccess;
	var fnFail = this.fnFail;
	var dirtyDocs = [];
	WL.JSONStore.init(getCollections())
	.then(function(){
		WL.JSONStore.get(collectionName).getAllDirty()
		.then(function (arrayOfDirtyDocuments) {
		  dirtyDocs = arrayOfDirtyDocuments;
		  
		  if(id){
			  dirtyDocs = dirtyDocs.filter(function(x){return x._id == id;});
		  }
		  
		  $(dirtyDocs).each(function(idx, item){
			  item["email"] = globalMail;
		  });

		  var invocationData = {
		    adapter : pAdapter, 
		    procedure : pProcedure, 
		    parameters : [dirtyDocs],
		    compressResponse: true
		  };

		  return WL.Client.invokeProcedure(invocationData);
		})

		.then(function (responseFromAdapter) {
		  // Handle invokeProcedure success.

		  // You may want to check the response from the adapter
		  // and decide whether or not to mark documents as clean.
			if(fnSuccess(responseFromAdapter)){
				return WL.JSONStore.get(collectionName).markClean(dirtyDocs);
			}else{
				return;
			}
		})
		.fail(fnFail)

		.then(function () {
		  // Handle markClean success.
		})

		.fail(function (errorObject) {
		  // Handle failure.
		});
	})
	.fail(function(){
		
	});
}

function _getFromServer(pAdapter, pProcedure){
	var collectionName = this.collectionName;
	var fnSuccess = this.fnSuccess;
	var fnFail = this.fnFail;
	var invocationData = {
	  adapter : pAdapter, 
	  procedure : pProcedure, 
	  parameters : [{email:globalMail}],
	  compressResponse: true
	};
	WL.JSONStore.init(getCollections())
	.then(function(){
		WL.Client.invokeProcedure(invocationData)
		.then(function(response){
			var data = response.invocationResult.resultSet;
			data = typeof data !== 'undefined' ? data : response.invocationResult.data;
			var changeOptions = { 
				    // default will use all search fields
				    // and are part of the data that is received.
				    replaceCriteria : ['identifier'],

				    // Data that does not exist in the Collection will be added, default false.
				    addNew : true,

				    // Mark data as dirty (true = yes, false = no), default false.
				    markDirty : false
				  };
			return WL.JSONStore.get(collectionName).change(data, changeOptions);
		})
		.then(fnSuccess)
		.fail(fnFail);
	})
	.fail(function(){
		
	});
}