

const Validation=(values)=> {
    let errors={};

    if(values.fullName){
        errors.fullName="Name is required."
    }
    if(values.MobileNo){
        errors.MobileNo="Mobile no required."
    }else if(values.Mobile&&values.Mobile.length< 10) {
          errors.Mobile="10 digit mobile Number."}

         if(values.PinCode){
        errors.PinCode="PinCode is required"
    }else if( values.PinCode&&values.PinCode.length< 5){
            errors.pinCode= "5digit."
        }
         
    if(values.CreatePassword){
        errors.CreatePassword=" password required"
    } else if(values.CreatePassword&&values.CreatePassword.length< 5){
            errors.CreatePassword="password 5 letter."
        
    }
    return errors;
      
    
}
export default Validation;