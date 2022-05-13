import react from "react"


const SimpleComponent = ({ requiredProps ,props}) => {


    return (
      <>
        {requiredProps ? ( <h1>this props is so intersting {requiredProps}</h1> ) : ( <h1>Ooops ! not att </h1> )
         }


         {props ?(<h1>this is so cool</h1>  ): (<h1>this is not cool</h1>)
         
         }
      </>
    );
   };
   export default SimpleComponent