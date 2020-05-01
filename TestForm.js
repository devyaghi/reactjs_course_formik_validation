import React from "react";
import {Formik,Field,ErrorMessage} from "formik";
import  * as Yup from "yup";
export default class TestForm extends React.Component{

    constructor(props) {
        super(props);
    }

    onsubmit=(values)=>{
        console.log(values)
    }


    first_name_error_message=()=> {
        return (<span>First name is mandatory</span>)
    }

    last_name_error_message=()=> {
        return (<span>Last name is mandatory</span>)
    }

    form_code=(props)=>{
        return <form onSubmit={props.handleSubmit}>


                 <label>First name</label>
                 <Field name={'first_name'}/>
                 <ErrorMessage name={'first_name'} render={this.first_name_error_message} />

                 <br/>

                 <label>Last name</label>
                 <Field name={'last_name'}/>
                 <ErrorMessage name={'last_name'} render={this.last_name_error_message} />

            <br/>

                <label>Major</label>
                <Field name={'major'} component={'select'}>
                     <option value={'CS'}>CS</option>
                     <option value={'CE'}>CE</option>
                 </Field>

            <br/>
                 <label>swimming</label>
                 <Field name={'swimming'} type={'checkbox'}/>
                 <label>Reading</label>
                 <Field name={'reading'} type={'checkbox'}/>

            <br/>

                 <label>Sex</label>
                 <Field type={'radio'} name={'sex'} value={'male'}/> male
                 <Field type={'radio'} name={'sex'} value={'female'}/> female
            <br/>
                 <button type={'submit'}>Send</button>
              </form>
    }

    form_schema=()=>{
        const schema=Yup.object().shape({
            first_name:Yup.string().required(),
            last_name:Yup.string().required()
        });
        return schema;
    }

    render() {
        return(
            <Formik
            initialValues={{first_name:'',last_name:'',swimming:false,reading:true,sex:'female'}}
            onSubmit={this.onsubmit}
            children={this.form_code}
            validationSchema={this.form_schema}
            />

        )
    }

}