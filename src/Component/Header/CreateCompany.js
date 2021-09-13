import React from 'react'
import './CreateCompany.css'
import CreateCompanyScreen from './CreateCompanyScreen'
import * as Yup from "yup";


const initialValues = {
    businessName: "",
    businessAddress: "",
    businessType: "",
    businessCategory: "",
    businessDescription: "",
    email: "",
    phoneNo: "",
  };


const CreateCompany = () => {

    const validationSchema = Yup.object({
        businessName: Yup.string().required("Required"),
        phoneNo: Yup.number()
          .positive("A phone number can't start with a minus")
          .integer("A phone number can't include a decimal point")
          .required("Required"),
      });
    
      const onSubmit =(values) => {
        console.log("Create Company data", values)
      };

    return (
        <>
        <CreateCompanyScreen  onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}/>
       </>
    )
}

export default CreateCompany
