(function(root,N,O,U){
	var _tP=function(a){
			return a.replace(/.[0-9]+/g,function(){return "["+x+"]";});
		},
		_tS=function(a){
			return O.prototype.toString.call(a);
		},
		_={};
	
	// [0.1.0] Boolean _.all ( Collection collection , Function test [ , Any context = root ] )
	// -> Boolean test ( Variable item , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.all=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(!f.call(c,a[i],i,a)){
					return false;
				}
			}
			return true;
		}
	};
	
	// [0.1.0] Boolean _.all.right ( Collection collection , Function test [ , Any context = root ] )
	// -> Boolean test ( Variable item , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.all.right=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=a.length;
			while(--i>-1){
				if(!f.call(c,a[i],i,a)){
					return false;
				}
			}
			return true;
		}
	};
	
	// [0.1.0] Boolean _.any ( Collection collection , Function test [ , Any context =root ] )
	// -> Boolean test ( Variable item , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.any=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					return true;
				}
			}
			return false;
		}
	};
	
	// [0.1.0] Boolean _.any.right ( Collection collection , Function test [ , Any context =root ] )
	// -> Boolean test ( Variable item , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.any.right=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=a.length;
			while(--i>-1){
				if(f.call(c,a[i],i,a)){
					return true;
				}
			}
			return false;
		}
		
	};
	
	// [x.x.x] Function _.arrow ( String expression )
	_.arrow=function(a){
		if(_.isString(a)){
			var b=a.split("=>");
			
		}
		return _.noop;
	};
	
	// [0.1.0] Number _.avg ( Collection collection [ , Function getter = _.identity ] )
	// [0.1.0] Number _.average ( Collection collection [ , Function getter = _.identity ] )
	//// Requires: _.identity , _.isArrayLike
	_.avg=_.average=function(a,b){
		var r=0;
		if(_.isArrayLike(a)){
			b=b||_.identity;
			var i=-1,
				l=a.length;
			while(++i<l){
				r+=b(a[i]);
			}
			r/=(0<l?l:1);
		}
		return r;
	}
	
	// [x.x.x] Void _.call ( Collection collection , Function callback [ , Array arguments = [] [ , Any context = root ] ] )
	
	// [0.1.0] Variable _.const ( Any value )
	// [0.1.0] Variable _.constant ( Any value )
	_["const"]=_.constant=function(a){
		return function(){
			return a;
		};
	};
	
	// Boolean _.contains ( Collection collection , Any value [ , Number fromIndex = 0 ] )
	
	// [0.1.0] Number _.count ( Collection collection , Function counter [ , Any context = root ] )
	// -> Boolean counter ( Variable item , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.count=function(a,f,c){
		var r=0;
		if(_.isArrayLike(a)){
			var i=-1,
				l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					r++;
				}
			}
		}
		return r;
	};
	
	// [0.1.0] Void _.each ( Collection collection , Function iterator [ , Any context = root ] )
	// -> Boolean iterator ( Variable item , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.each=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(false===f.call(c,a[i],i,a)){
					break;
				}
			}
		}
	};
	
	// [0.1.0] Void _.each.key ( Object object , Function iterator [ , Any context = root ] )
	// -> Boolean iterator ( Variable item , String index , Collection collection )
	//// Requires: _.keys
	_.each.key=function(a,f,c){
		c=c||root;
		var i=-1,
			k=_.keys(a),
			l=k.length;
		while(++i<l){
			if(false===f.call(c,a[k[i]],k[i],a)){
				break;
			}
		}
	};
	
	// [0.1.0] Void _.each.right ( Collection collection , Function iterator [ , Any context = root ] )
	// -> Boolean iterator ( Variable item , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.each.right=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=a.length;
			while(--i>-1){
				if(false===f.call(c,a[i],i,a)){
					break;
				}
			}
		}
	};
	
	// [0.1.0] Object _.extend ( Object extended , Object extender [ , Boolean preserve = false ] )
	//// Requires: _.each.key
	_.extend=(function(){
		var _e=function(k,v){this[k]=v;}
		return function(a,b,p){
			var r;
			if(p){
				r={};
				_.each.key(a,_e,r);
			}
			else{
				r=a;
			}
			_.each.key(b,_e,r);
			return r;
		};
	})();
	
	// [0.1.0] Boolean _.false ( )
	_["false"]=function(){
		return false;
	};
	
	// [0.1.0] Array _.filter ( Collection collection , Function test [ , Anyh context = root ] )
	// -> Boolean test ( Variable value , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.filter=function(a,f,c){
		var r=[];
		if(_.isArrayLike(a)){
			c=c||root;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					r.push(a[i]);
				}
			}
		}
		return r;
	};
	
	// [0.1.0] Array _.filter.right ( Collection collection , Function test [ , Anyh context = root ] )
	// -> Boolean test ( Variable value , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.filter.right=function(a,f,c){
		var r=[];
		if(_.isArrayLike(a)){
			c=c||root;
			var i=a.length;
			while(--i>-1){
				if(f.call(c,a[i],i,a)){
					r.push(a[i]);
				}
			}
		}
		return r;
	};
	
	// [0.1.0] Variable _.find ( Collection collection , Function test [ , Any context = root ] )
	// -> test ( Variable value , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.find=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=-1,
				l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					return a[i];
				}
			}
		}
	};
	
	// [0.1.0] Variable _.find.last ( Collection collection , Function test [ , Any context = root ] )
	// -> Boolean test ( Variable value , Number index , Collection collection )
	//// Requires: _.isArrayLike
	_.find.last=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=a.length;
			while(--i>-1){
				if(f.call(c,a[i],i,a)){
					return a[i];
				}
			}
		}
	};
	
	// [x.x.x] Variable _.get ( Any value , Number index )
	// [x.x.x] Variable _.get ( Any value , String path )
	
	// [x.x.x] Function _.getter ( Function getter )
	// [x.x.x] Function _.getter ( Number index )
	// [x.x.x] Function _.getter ( String expression )
	// [x.x.x] Function _.getter ( String path )
	//// Requires: _.typeOf
	_.getter=function(a){
		switch(_.typeOf(a)){
			case"function":return a;
			case"number":return new Function("a","return a["+a+"];");
			case"String":return -1<a.indexOf("=>")?_.arrow(a):new Function("a","return a."+_tP(a)+";");
			default:return _.identity
		}
	};
	
	// [x.x.x] Object _.group ( Collection collection , Function getter [ , Any context = root ] )
	// [x.x.x] Object _.group ( Collection collection , String path [ , Any context = root ] )
	
	// [0.1.0] Variable _.identity ( Any value )
	_.identity=function(a){
		return a;
	};
	
	// [0.1.0] Boolean _.isArguments ( Any value )
	//// Borrowed from is.js 0.9.0.
	_.isArguments=function(a){
		return "[object Arguments]"===_tS(a)||(a!=null && "object"===typeof a && "callee" in a);
	};
	
	// [0.1.0] Boolean _.isArray ( Any value )
	_.isArray=function(a){
		return "[object Array]"===_tS(a);
	};
	
	// [0.1.0] Boolean _.isArrayLike ( Any value )
	//// Requires: _.isNumber
	_.isArrayLike=function(a){
		return a&&_.isNumber(a.length);
	};
	
	// [0.1.0] Boolean _.isBoolean ( Any value )
	//// Borrowed from is.js 0.9.0.
	_.isBoolean=function(a){
		return true===a||false===a||"[object Boolean]"===_tS(a);
	};
	
	// [0.1.0] Boolean _.isDate ( Any value )
	_.isDate=function(a){
		return "[object Date]"===_tS(a);
	};
	
	// [0.1.0] Boolean _.isDefined ( Any value )
	//// Requires: _.isUndefined
	_.isDefined=function(a){
		return !_.isUndefined(a);
	};
	
	// [0.1.0] Boolean _.isError ( Any value )
	_.isError=function(a){
		return "[object Error]"===_tS(a);
	};
	
	// [0.1.0] Boolean _.isFalsey ( Any value )
	//// Borrowed from is.js 0.9.0.
	_.isFalsey=function(a){
		return !a;
	};
	
	// [0.1.0] Boolean _.isFunction ( Any value )
	//// Borrowed from is.js 0.9.0.
	_.isFunction=function(a){
		return "[object Function]"===_tS(a)||"function"===typeof a;
	};
	
	// [0.1.0] Boolean _.isNaN ( Any value )
	_.isNaN=N.isNaN|function(a){
		return a!==a;
	};
	
	// [x.x.x] Boolean _.isNil ( Any value )
	
	// [0.1.0] Boolean _.isNull ( Any value )
	_.isNull=function(a){
		return null===a;
	};
	
	// [0.1.0] Boolean _.isNumber ( Any value )
	//// Requires: _.isNaN
	_.isNumber=function(a){
		return !_.isNaN(a)&&"[object Number]"===_tS(a);
	};
	
	// [0.1.0] Boolean _.isObject ( Any value )
	//// Borrowed from is.js 0.9.0.
	_.isObject=function(a){
		return O(a)===a;
	};
	
	// [0.1.0] Boolean _.isRegExp ( Any value )
	_.isRegExp=function(a){
		return "[object RegExp]"===_tS(a);
	};
	
	// [0.1.0] Boolean _.isString ( Any value )
	_.isString=function(a){
		return "[object String]"===_tS(a);
	};
	
	// [0.1.0] Boolean _.isTruthy ( Any value )
	//// Requires: _.isFalsey
	_.isTruthy=function(a){
		return !_.isFalsey(a);
	};
	
	// [0.1.0] Boolean _.isUndefined ( Any value )
	//// Borrowed from is.js 0.9.0.
	_.isUndefined=function(a){
		return a===void 0;
	};
	
	// [0.1.0] Array _.keys ( Object object )
	_.keys=O.keys||function(a){
		var r=[];
		for(var k in a){
			if(a.hasOwnProperty(k)){
				r.push(k);
			}
		}
		return r;
	};
	
	// [0.1.0] Array _.map ( Collection collection , Function mapper [ , Any context = root ] )
	// [0.1.0] Array _.map ( Collection collection , Number mapper [ , Any context = root ] )
	// [0.1.0] Array _.map ( Collection collection , String mapper [ , Any context = root ] )
	//// Requires: _.isArrayLike
	_.map=function(a,f,c){
		var r=[];
		if(_.isArrayLike(a)){
			c=c||root;
			var i=-1,
				l=a.length;
			while(++i<l){
				r.push(f.call(c,a[i],i,a));
			}
		}
		return r;
	};
	
	// [0.1.0] Array _.map.right ( Collection collection , Function mapper [ , Any context = root ] )
	//// Requires: _.isArrayLike
	_.map.right=function(a,f,c){
		var r=[];
		if(_.isArrayLike(a)){
			c=c||root;
			var i=a.length;
			while(--i>-1){
				r.push(f.call(c,a[i],i,a));
			}
		}
		return r;
	};
	
	// [0.1.0] Array _.map.self ( Collection collection , Function mapper [ , Any context = root ] )
	//// Requires: _.isArrayLike
	_.map.self=function(a,f,c){
		if(_.isArrayLike(a)){
			c=c||root;
			var i=-1,
				l=a.length;
			while(++i<l){
				a[i]=f.call(c,a[i],i,a);
			}
		}
		return a;
	};
	
	// [x.x.x] Number _.max ( Collection collection [ , Function getter = _.identity ] )
	
	// [x.x.x] Number _.min ( Collection collection [ , Function getter = _.identity ] )
	
	// [0.1.0] Void _.noop ( )
	_.noop=function(){};
	
	// [x.x.x] Number _.now ( )
	
	// [x.x.x] Array _.pick ( Collection collection , String path )
	//// Cf. underscore's _.pluck.
	
	// [0.1.0] Variable _.reduce ( Collection collection , Any memo , Function reducer [ , Any context = root ] )
	//// Requires: _.isArrayLike
	_.reduce=function(a,m,f,c){
		var r=m;
		if(_.isArrayLike(a)){
			c=c||root;
			var i=-1,
				l=a.length;
			while(++i<l){
				r=f.call(c,r,a[i],i,a);
			}
		}
		return r;
	};
	
	// [0.1.0] Variable _.reduce.right ( Collection collection , Any memo , Function reducer [ , Any context = root ] )
	//// Requires: _.isArrayLike
	_.reduce.right=function(a,m,f,c){
		var r=m;
		if(_.isArrayLike(a)){
			c=c||root;
			var i=a.length;
			while(--i>-1){
				r=f.call(c,r,a[i],i,a);
			}
		}
		return r;
	};
	
	// [x.x.x] Array _.sort ( Collection collection , Function sorter [ , Any context = root ] )
	
	// [x.x.x] Object _.transform ( Object transformed , Object transformer [ , onlyExplicit = false ] )
	
	// [0.1.0] Boolean _.true ( )
	_["true"]=function(){
		return true;
	};
	
	// [x.x.x] String _.typeOf ( Any value )
	
	
	// [0.1.0] Number _.zero ( )
	_.zero=function(){
		return 0;
	};
	
	root._=_;
})(this,Number,Object);
