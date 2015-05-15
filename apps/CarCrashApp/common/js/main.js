function wlCommonInit(){
	/*
	 * Use of WL.Client.connect() API before any connectivity to a MobileFirst Server is required. 
	 * This API should be called only once, before any other WL.Client methods that communicate with the MobileFirst Server.
	 * Don't forget to specify and implement onSuccess and onFailure callback functions for WL.Client.connect(), e.g:
	 *    
	 *    WL.Client.connect({
	 *    		onSuccess: onConnectSuccess,
	 *    		onFailure: onConnectFailure
	 *    });
	 *     
	 */
	
	// Common initialization code goes here
	
	//WL.JSONStore.destroy();
	
	var pages = getPages(); //pages object
	$.each(pages, function(idx, obj){
		$.get(obj.url, function(data){
			var pageContent = data.replace("{id}",obj.id);
			$('body').append(pageContent); //load page inside index.html
			
			if(obj.leftPanel && obj.leftPanel != "false")
			{
				$.get(obj.leftPanel.url, function(data){
					$("#" + obj.id).append(data.replace("{id}", obj.leftPanel.id));
				});
			}
			
			if(obj.header && obj.header != "false")
			{
				$.get(obj.header.url, function(data){
					var headerHTML = data.replace("{left}",obj.header.left).replace("{center}",obj.header.center).replace("{right}",obj.header.right);
					if(obj.leftPanel)
					{
						$("#" + obj.id).append(headerHTML.replace("{leftPanel}", "#" + obj.leftPanel.id));
					}
					else
					{
						$("#" + obj.id).append(headerHTML);
					}
				});
			}
			if(obj.popup && obj.popup != "false")
			{
				$.each(obj.popup, function(idx, popup){
					$.get(popup.url,function(data){
						$("#" + obj.id).append(
								data.replace("{id}", popup.id).
								replace("{header}", popup.header).
								replace("{title}", popup.title).
								replace("{content}", popup.content).
								replace("{ok_action}", popup.okButton.action).
								replace("{ok_location}", popup.okButton.location).
								replace("{ok_text}", popup.okButton.text).
								replace("{cn_action}", popup.cancelButton.action).
								replace("{cn_location}", popup.cancelButton.location).
								replace("{cn_text}", popup.cancelButton.text)
								);
					});
				});
			}
		});
	});
	
	setTimeout("initializeData();", 700);
}

function initializeData()
{
	//$('a').attr('data-transition','slide');	//general app transition
	
	initLanguage();
	location.href="#profile";
}

//Pages array to load on index
function getPages()
{
	//add each page to view in app
	//Examples:
	//for adding a header:
	////"header":{
	////	"url":"pages/general/header.html",
	////	"left":"<a></a>",
	////	"center":"<a></a>",
	////	"right":"<a></a>"
	////}
	//for adding a panel:
	////"leftPanel":{
	////	"id":"nav-panel",
	////	"url":"pages/general/left_panel.html"
	////}
	//for adding dialogs, you can add more then one
	////"popup":[
	////        {
	////        	 "url":"pages/general/popup.html",
	////        	 "id":"dialog", 
	////        	 "header":"myHeader", 
	////        	 "title":"Hi Dialog!", 
	////        	 "content":"You have to insert your own content here", 
	////        	 "okButton":{"action":"alert('ok button action');","location":"#login","text":"OK"}, 
	////        	 "cancelButton":{"action":"alert('cancel button action');","location":"","text":"Cancel"}
	////         }
	////         ]
	return [
			{"id":"initial", "url":"pages/initial.html", 
				"header":{
			    	"url":"pages/general/header.html",
			    	"left":"<a></a>",
			    	"center":"<h2>Multipage Template</h2>",
			    	"right":"<a href='#'></a>"
			    }
			},
			{"id":"profile", "url":"pages/profile/profile.html", 
				"header":{
			    	"url":"pages/general/header.html",
			    	"left":"<a href='{leftPanel}' tag='a' class='ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left ui-btn-icon-notext'></a>",
			    	"center":"<h2>Perfil</h2>",
			    	"right":"<a  tag='a' id='save' onclick='validateProfile();' class='ui-btn ui-corner-all ui-icon-check ui-btn-icon-right ui-btn-icon-notext'></a>"
			    },			    
	        	"leftPanel":{
	        		"id":"profileNav",
	        		"url":"pages/general/left_panel.html"
	        	}
			},
			{"id":"mechanic", "url":"pages/profile/mechanic.html", 
				"header":{
			    	"url":"pages/general/header.html",
			    	"left":"<a href='{leftPanel}' tag='a' class='ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left ui-btn-icon-notext'></a>",
			    	"center":"<h2>Mecanico</h2>",
			    	"right":"<a tag='a' id='save' onclick='saveMechanicData();' class='ui-btn ui-corner-all ui-icon-check ui-btn-icon-right ui-btn-icon-notext'></a>"
			    },			    
	        	"leftPanel":{
	        		"id":"mechanicNav",
	        		"url":"pages/general/left_panel.html"
	        	}
			},
			{"id":"medical", "url":"pages/profile/medical.html", 
				"header":{
			    	"url":"pages/general/header.html",
			    	"left":"<a href='{leftPanel}' tag='a' class='ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left ui-btn-icon-notext'></a>",
			    	"center":"<h2>Medicos</h2>",
			    	"right":"<a  tag='a' id='save' onclick='saveUserMedicalData();' class='ui-btn ui-corner-all ui-icon-check ui-btn-icon-right ui-btn-icon-notext'></a>"
			    },			    
	        	"leftPanel":{
	        		"id":"medicalNav",
	        		"url":"pages/general/left_panel.html"
	        	}
			},
			{"id":"policiesContent", "url":"pages/policy/policiesContent.html", 
				"header":{
			    	"url":"pages/general/header.html",
			    	"left":"<a  tag='a' id='aBackPolicy' onClick='backPolicy();'  class='ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left'>Polizas</a>",
			    	"center":"<h2 id='h2PolicyTitle'>Poliza</h2>",
			    	"right":"<a  tag='a' id='save' onClick='savePolicy();'  class='ui-btn ui-corner-all ui-icon-check ui-btn-icon-right ui-btn-icon-notext'></a>" 
			    }
			},
			{"id":"showPolicies", "url":"pages/policy/showPolicies.html", 
				"header":{
			    	"url":"pages/general/header.html",
			    	"left":"<a href='{leftPanel}' tag='a' class='ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left ui-btn-icon-notext'></a>",
			    	"center":"<h2>Pólizas</h2>",
			    	"right":"<a onClick='validNewPolicy();' tag='a' id='save' class='ui-btn ui-corner-all ui-icon-plus ui-btn-icon-right ui-btn-icon-notext'></a>"
			    },			    
	        	"leftPanel":{
	        		"id":"policiesNav",
	        		"url":"pages/general/left_panel.html"
	        	}
			},
			{"id":"contactsContent", "url":"pages/contacts/contactsContent.html", 
				"header":{
			    	"url":"pages/general/header.html",
			    	"left":"<a href='#showContacts' tag='a'  class='ui-btn ui-corner-all ui-icon-arrow-l ui-btn-icon-left'>Contactos</a>",
			    	"center":"<h2>Contacto</h2>",
			    	"right":"<a tag='a' id='save' onclick='saveContact();' class='ui-btn ui-corner-all ui-icon-check ui-btn-icon-right ui-btn-icon-notext'></a>"
			    }
			}, 
			{"id":"showContacts", "url":"pages/contacts/showContacts.html", 
				"header":{
			    	"url":"pages/general/header.html",
			    	"left":"<a href='{leftPanel}' tag='a' class='ui-btn ui-corner-all ui-icon-bars ui-btn-icon-left ui-btn-icon-notext'></a>",
			    	"center":"<h2>Contactos</h2>",
			    	"right":"<a  tag='a' id='save' onClick='validNewContact();'  class='ui-btn ui-corner-all ui-icon-plus ui-btn-icon-right ui-btn-icon-notext'></a>"
			    },			    
	        	"leftPanel":{
	        		"id":"sContactsNav",
	        		"url":"pages/general/left_panel.html"
	        	}
			}
	        ];
	
}


function initLanguage(){
	 var locale = WL.App.getDeviceLocale();
	    var lang = WL.App.getDeviceLanguage();
	    WL.Logger.debug(">> Detected locale: " + locale);
	    WL.Logger.debug(">> Detected language: " + lang);

	    if (locale.indexOf("en")!=-1) languageChanged("english");
	    if (locale.indexOf("es")!=-1) languageChanged("spanish");
}

function languageChanged(lang) {		
    switch (lang){
    	case "english":
    		setEnglish();
    		break;
    	case "spanish":
    		setSpanish();
    		break;
    }
    
}




