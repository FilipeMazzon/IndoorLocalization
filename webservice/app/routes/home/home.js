module.exports = function (application){

	//clientes
	application.get('/',function(req,res){
		application.app.controllers.home.index.load(application,req,res);
	});
}
