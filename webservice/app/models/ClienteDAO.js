function ClienteDAO(connection){
	this._connection = connection;
}
ClienteDAO.prototype.getClientes = function(callback){
	this._connection.query('select * from clientes',callback);
}
ClienteDAO.prototype.getCliente = function(callback){
	this._connection.query('select * from clientes where id =22',callback);
}
ClienteDAO.prototype.salvarCliente = function(cliente,callback){
	this._connection.query('insert into clientes set ? ',cliente,callback);
}
module.exports = function(){

	return ClienteDAO;
}