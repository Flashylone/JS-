function Person( name ){
	this.name = name;
};

Person.prototype.getName = function(){
	return this.name;
};

var objectFactory = function(){
	console.log('arguments: '+arguments);
	var obj = new Object(),
			Constructor = [].shift.call( arguments );
	console.log('Constructor: '+[].shift.call( arguments ));
	console.log('Constructor.prototype: '+Constructor.prototype);
	console.log('obj._proto_: ' + obj._proto_);
	obj._proto_ = Constructor.prototype;
	console.log('指向正确原型: ' + obj._proto_);
}

var a = new objectFactory(Person,'myu')