import React from "react";
const Hoc = (Component) =>{
    const sayHello = () =>{
      alert("Hello")
    }
    
    function InnerComponent(props){
       return(
           <div className="doFlex"> 
               <div className="leftSide"></div>
               <Component clickfunc={sayHello} {...props} />
               <div className="rightSide"></div>
           </div>
       )
   }
   return InnerComponent
}
export default Hoc


