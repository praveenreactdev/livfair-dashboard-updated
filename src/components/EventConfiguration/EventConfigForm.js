import React ,{Fragment} from 'react'
import { Field,FieldArray, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { Input, FormFeedback, FormText,Button } from 'reactstrap';

const renderField = ({ input, label, type,custom,warning, meta: { touched, error } }) => (
  <div style={{marginBottom:'4px'}}>
    <label>{label}</label>
    {/* <div>
      <input {...input} type={type} placeholder={label} style={{width:'100%',borderRadius:'4px',border:'0.5px solid grey',height:'40px'}} />
      {touched && error && <span>{error}</span>}         
    </div> */}
    <Fragment>
        <Input {...(touched ? { valid: !error } : {})} {...input} {...custom} />
        {error && <FormFeedback>{error}</FormFeedback>}
        {!error && warning && <FormText>{warning}</FormText>}
    </Fragment>
  </div>
);
const renderSelectField = ({ input,label, meta: { touched, error }, children, ...custom }) => (
  <div>
    <label>{label}</label>
  <Input type="select" {...(touched ? { valid: !error } : {})} {...input} {...custom}>
      {children}
  </Input>
  </div>
);
const renderMedia = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul style={{listStyle:'none',padding:'0px'}}>
    <li>
      {/* <button type="button" className="add-button" onClick={() => fields.push({})}>Add Media</button> */}
      <Button color="info" className="btn-round" size="sm" onClick={() => fields.push({})}>
        Add Media
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((media, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Media"
          onClick={() => fields.remove(index)}
        />
        <h4 style={{color:'white'}}>Media #{index + 1}</h4>
        <Field
          name={`${media}.name`}
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name={`${media}.url`}
          type="text"
          component={renderField}
          label="URL"
        />
        {/* <Field
          name={`${media}.type`}
          type="text"
          component={renderField}
          label="Type"
        /> */}
         <div style={{marginBottom:"4px"}}>
        <div >
          <Field label="Type" name={`${media}.type`} component={renderSelectField} style={{width:'100%',borderRadius:'4px',border:'0.5px solid grey',height:'40px'}}>
            <option value="Choose">Choose</option>
            <option value="Banner">Banner</option>
            <option value="Option2">Option2</option>
          </Field>
        </div>
      </div>
        <Field
          name={`${media}.category`}
          type="text"
          component={renderField}
          label="Category"
        />
      </li>
    ))}
  </ul>
);

const renderSpotlight = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul style={{listStyle:'none',padding:'0px'}}>
    <li>
      {/* <button type="button" className="add-button" onClick={() => fields.push({})}>Add Spotlight</button> */}
      <Button color="info" className="btn-round" size="sm" onClick={() => fields.push({})}>
        Add Spotlight
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((media, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Media"
          onClick={() => fields.remove(index)}
        />
        <h4 style={{color:'white'}}>Spotlight #{index + 1}</h4>
        <Field
          name={`${media}.name`}
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name={`${media}.description`}
          type="text"
          component={renderField}
          label="Description"
        />
        <Field
          name={`${media}.url`}
          type="text"
          component={renderField}
          label="URL"
        />
        <Field
          name={`${media}.type`}
          type="text"
          component={renderField}
          label="Type"
        />
        <Field
          name={`${media}.category`}
          type="text"
          component={renderField}
          label="Category"
        />
      </li>
    ))}
  </ul>
);

const EventConfigForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <>
    <div className="content">
    <form onSubmit={handleSubmit(val=>console.log(val))}>
      <Field
        name="name"
        type="text"
        component={renderField}
        label="Event Name"
      />
      <Field
        name="eventId"
        type="text"
        component={renderField}
        label="Event ID"
      />
      <Field
        name="type"
        type="text"
        component={renderField}
        label="Event Type"
      />
      <Field
        name="description"
        type="text"
        component={renderField}
        label="Description"
      />
      <Field
        name="logo"
        type="text"
        component={renderField}
        label="Logo URL"
      />
      <Field
        name="tagline"
        type="text"
        component={renderField}
        label="Event Tagline"
      />
      <Field
        name="layout.layoutName"
        type="text"
        component={renderField}
        label="Layout Name"
      />
      <Field
        name="layout.noOfBooths"
        type="text"
        component={renderField}
        label="No of Booths"
      />
      <FieldArray name="metadata.media" component={renderMedia}/>
      <FieldArray name="activities.spotlight" component={renderSpotlight}/>
      <div>
      <Button className="btn-fill" color="primary" type="submit" disabled={pristine || submitting}>
                    Submit
      </Button>
        {/* <button type="submit" disabled={pristine || submitting}>
          Submit
        </button> */}
        {/* <button type="button" disabled={pristine || submitting} onClick={reset}>
         Reset
        </button> */}
        <Button
                            className="btn-fill"
                            color="success"
                            color="primary"
                            id="tooltip324367706"
                            disabled={pristine || submitting} onClick={reset}
                          >
                            <i className="tim-icons icon-refresh-01" />
                          </Button>
      </div>
    </form>
  
    </div>
    </>
    )
}

// const mapStateToProps = (state) => ({
//   dashboard: state.dashboard,
//   initialValues : state.dashboard.initialValues
// });
const eventForm = reduxForm({
  form: 'simple' ,
  enableReinitialize:true
})(EventConfigForm)

export default connect((state)=>{return {}},{})(eventForm)
