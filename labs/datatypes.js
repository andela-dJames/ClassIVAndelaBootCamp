
var dataTypes = function( arg ){

switch(true){
  case (typeof arg=== "string"):
    {
      return arg.length;
    }
break;
case ( arg===null || arg===undefined ): {
  return ("no value");}
  break;
  
  
  case (typeof arg==="boolean"):{
  if(arg === true){
      return true;
    }
    else return false;
  }
  break;
  case (typeof arg ==  'object' ):
    {if(typeof arg[0]===undefined)
    {
      return "undefined";
    }
    else
    return (arg[2]);
  }
  break;
  case (arg===100):{
    return "equal to 100";
  }
  break;
  case (arg>100):{
    return "more than 100";
  }
  break;
  case (arg<100):{
    return "less than 100";
  }
  break;
  case (typeof arg ==='function'):{
    return arg(true);}
    break;
default:
console.log("ok");
  
}
  
};
