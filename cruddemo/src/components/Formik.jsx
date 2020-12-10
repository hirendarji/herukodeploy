import React from 'react';
import { useFormik } from 'formik';

const SignupForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
      
    initialValues: {
      email: '',
      pass:''
    },

    
    onSubmit: values => {
        console.log("data",formik.values);
        //alert("data shown in console")
        formik.resetForm();
         
    },
    validate:values=>{
        let error={};
        if(!values.email)
        {
            error.email='Required';
        }

        if(!values.pass)
        {
            error.pass='Required';
        }

        return error;
    }
  });
 
  return (
    <form onSubmit={formik.handleSubmit}>
        <div class="form-group">      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        class="form-control"
      />
      {formik.errors.email && formik.touched.email ? <p style={{color:'red'}}>{formik.errors.email}</p>:null }
     
     </div>
      <div className="form-group">      <label htmlFor="email">password</label>
      <input
        id="pass"
        name="pass"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.pass}
        className="form-control form-control-md-sm-lg"
      />
            {formik.errors.pass && formik.touched.pass ? <p style={{color:'red'}}>{formik.errors.pass    }</p>:null }
            </div>

      <button type="submit">Submit</button>
      

   </form>
  );
};
export default SignupForm;