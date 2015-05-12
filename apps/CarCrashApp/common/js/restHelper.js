function clsRestHelper(pAdapter, pProcedure, pParameters, pOnSuccess, pOnFailure)
{
	this.adapter = pAdapter;
	this.procedure = pProcedure;
	this.parameters = pParameters;
	this.onSuccess = pOnSuccess;
	this.onFailure = pOnFailure;
	
	this.callRestAdapter = _callRestAdapter;
}

function _callRestAdapter()
{
	var invokeData = {
			adapter : this.adapter,
            procedure : this.procedure,
            parameters : [this.parameters]
	};
	
	WL.Client.invokeProcedure(invokeData,{
		//on success
        onSuccess : this.onSuccess,
        //on failure
        onFailure : this.onFailure
    });
}