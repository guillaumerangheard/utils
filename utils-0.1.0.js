(function(R){
	var _={};
	
	// [0.1.0]	Boolean		_.all ( Collection collection , Function test [ , Any context = root ] )
	//						-> Boolean test ( Variable item , Number index , Collection collection )
	_.all=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=-1,l=a.length;
			while(++i<l){
				if(!f.call(c,a[i],i,a){
					return false;
				}
			}
			return true;
		}
		return false;
	};
	
	// [0.1.0]	Boolean		_.all.right ( Collection collection , Function test [ , Any context = root ] )
	//						-> Boolean test ( Variable item , Number index , Collection collection )
	_.all.right=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=a.length;
			while(--i>-1){
				if(!f.call(c,a[i],i,a){
					return false;
				}
			}
			return true;
		}
		return false;
	};
	
	// [x.x.x]	Boolean		_.any ( Collection collection , Function test [ , Any context =root ] )
	//						-> Boolean test ( Variable item , Number index , Collection collection )
	_.any=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=-1,l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					return true;
				}
			}
		}
		return false;
	};
	
	// [0.1.0]	Boolean		_.any.right ( Collection collection , Function test [ , Any context =root ] )
	//						-> Boolean test ( Variable item , Number index , Collection collection )
	_.any.right=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=a.length;
			while(--i>-1){
				if(f.call(c,a[i],i,a)){
					return true;
				}
			}
		}
		return false;
	};
	
	// [x.x.x]	Function	_.arrow ( String expression )
	
	// [x.x.x]	Number		_.avg ( Collection collection [ , Function getter = _.identity ] )
	
	// [0.1.0]	Variable	_.const ( Any value )
	_["const"]=function(a){
		return function(){
			return a;
		};
	};
	
	// [0.1.0]	Number		_.count ( Collection collection , Function counter [ , Any context = root ] )
	_.count=function(a,f,c){
		var r=0;
		if(_.isCollection(a)){
			var i=-1,l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					r++;
				}
			}
		}
		return r;
	};
	
	// [x.x.x]	Void		_.each ( Collection collection , Function iterator [ , Any context = root ] )
	//						-> Boolean iterator ( Variable item , Number index , Collection collection )
	_.each=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=-1,l=a.length;
			while(++i<l){
				if(false===f.call(c,a[i],i,a)){
					break;
				}
			}
		}
	};
	
	// [x.x.x]	Void		_.each.key ( Object object , Function iterator [ , Any context = root ] )
	//						-> Boolean iterator ( Variable item , String index , Collection collection )
	
	// [x.x.x]	Void		_.each.right ( Collection collection , Function iterator [ , Any context = root ] )
	//						-> Boolean iterator ( Variable item , Number index , Collection collection )
	_.each.right=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=a.length;
			while(--i>-1){
				if(false===f.call(c,a[i],i,a)){
					break;
				}
			}
		}
	};
	
	// [x.x.x]	Void		_.extend ( Object extended , Object extender [ , Boolean preserve = false ] )
	
	// [x.x.x]	Boolean		_.false ( )
	_["false"]=function(){
		return false;
	};
	
	// [x.x.x]	Array		_.filter ( Collection collection , Function test [ , Anyh context = root ] )
	_.filter=function(a,f,c){
		var r=[];
		if(_.isCollection(a)){
			c=c||R;
			var i=-1,l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					r.push(a[i]);
				}
			}
		}
		return r;
	};
	
	// [x.x.x]	Array		_.filter.right ( Collection collection , Function test [ , Anyh context = root ] )
	_.filter.right=function(a,f,c){
		var r=[];
		if(_.isCollection(a)){
			c=c||R;
			var i=a.length;
			while(--i>-1){
				if(f.call(c,a[i],i,a)){
					r.push(a[i]);
				}
			}
		}
		return r;
	};
	
	// [0.1.0]	Variable	_.find ( Collection collection , Function test [ , Any context = root ] )
	//						-> test ( Variable value , Number index , Collection collection )
	_.find=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=-1,l=a.length;
			while(++i<l){
				if(f.call(c,a[i],i,a)){
					return a[i];
				}
			}
		}
	};
	
	// [x.x.x]	Variable	_.find.last ( Collection collection , Function test [ , Any context = root ] )
	_.find.last=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=a.length;
			while(--i>-1){
				if(f.call(c,a[i],i,a)){
					return a[i];
				}
			}
		}
	};
	
	// [x.x.x]	Variable	_.get ( Any value , Number index )
	// [x.x.x]	Variable	_.get ( Any value , String path )
	
	// [x.x.x]	Function	_.getter ( Function getter )
	// [x.x.x]	Function	_.getter ( Number index )
	// [x.x.x]	Function	_.getter ( String path )
	_.getter=function(a){
		switch(_.typeOf(a)){
			case"Function":return a;
			case"Number":return new Function("a","return a["+a+"];");
			case"String":return new Function("a","return a."+a+";");
			default:return _.identity;
		}
	};
	
	// [x.x.x]	Variable	_.identity ( Any value )
	_.identity=function(a){
		return a;
	};
	
	// [x.x.x]	Boolean		_.isArguments ( Any value )
	
	// [x.x.x]	Boolean		_.isArray ( Any value )
	
	// [x.x.x]	Boolean		_.isBoolean ( Any value )
	
	// [x.x.x]	Boolean		_.isCollection ( Any value )
	
	// [x.x.x]	Boolean		_.isDefined ( Any value )
	
	// [x.x.x]	Boolean		_.isError ( Any value )
	
	// [x.x.x]	Boolean		_.isFalsey ( Any value )
	
	// [x.x.x]	Boolean		_.isFunction ( Any value )
	
	// [x.x.x]	Boolean		_.isNaN ( Any value )
	
	// [x.x.x]	Boolean		_.isNull ( Any value )
	
	// [x.x.x]	Boolean		_.isNumber ( Any value )
	
	// [x.x.x]	Boolean		_.isObject ( Any value )
	
	// [x.x.x]	Boolean		_.isRegExp ( Any value )
	
	// [x.x.x]	Boolean		_.isString ( Any value )
	
	// [x.x.x]	Boolean		_.isTruthy ( Any value )
	
	// [x.x.x]	Boolean		_.isUndefined ( Any value )
	
	// [x.x.x]	Array		_.keys ( Object object )
	
	// [0.1.0]	Array		_.map ( Collection collection , Function mapper [ , Any context = root ] )
	_.map=function(a,f,c){
		var r=[];
		if(_.isCollection(a)){
			c=c||R;
			var i=-1,l=a.length;
			while(++i<l){
				r.push(f.call(c,a[i],i,a));
			}
		}
		return r;
	};
	
	// [0.1.0]	Array		_.map.right ( Collection collection , Function mapper [ , Any context = root ] )
	_.map.right=function(a,f,c){
		var r=[];
		if(_.isCollection(a)){
			c=c||R;
			var i=a.length;
			while(--i>-1){
				r.push(f.call(c,a[i],i,a));
			}
		}
		return r;
	};
	
	// [0.1.0]	Array		_.map.self ( Collection collection , Function mapper [ , Any context = root ] )
	_.map.self=function(a,f,c){
		if(_.isCollection(a)){
			c=c||R;
			var i=-1,l=a.length;
			while(++i<l){
				a[i]=f.call(c,a[i],i,a);
			}
		}
		return a;
	};
	
	// [x.x.x]	Array		_.map.right.self ( Collection collection , Function mapper [ , Any context = root ] )
	// [x.x.x]	Array		_.map.self.right ( Collection collection , Function mapper [ , Any context = root ] )
	
	// [0.1.0]	Void		_.noop ( )
	_.noop=function(){};
	
	// [x.x.x]	Number		_.now ( )
	
	// [0.1.0]	Variable	_.reduce ( Collection collection , Any memo , Function reducer [ , Any context = root ] )
	_.reduce=function(a,m,f,c){
		var r=m;
		if(_.isCollection(a)){
			c=c||R;
			var i=-1,l=a.length;
			while(++i<l){
				r=f.call(c,r,a[i],i,a);
			}
		}
		return r;
	};
	
	// [0.1.0]	Variable	_.reduce.right ( Collection collection , Any memo , Function reducer [ , Any context = root ] )
	_.reduce.right=function(a,m,f,c){
		var r=m;
		if(_.isCollection(a)){
			c=c||R;
			var i=a.length;
			while(--i>-1){
				r=f.call(c,r,a[i],i,a);
			}
		}
		return r;
	};
	
	// [x.x.x]	Object		_.transform ( Object transformed , Object transformer )
	
	// [0.1.0]	Boolean		_.true ( )
	_["true"]=function(){
		return true;
	};
	
	// [x.x.x]	String		_.typeOf ( Any value )
	
	// [0.1.0]	Number		_.zero ( )
	_.zero=function(){
		return 0;
	};
	
	R._=_;
})(this);
