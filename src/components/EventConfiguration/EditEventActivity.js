import React, { Fragment,useEffect } from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { Input, FormFeedback, FormText, Button } from 'reactstrap';
import { editExhibitor,editEventActivity } from 'store/actions/dashboardActions';

const renderField = ({ input, label, type, custom, warning, meta: { touched, error } }) => (
  <div style={{ marginBottom: '4px' }}>
    <label>{label}</label>
    
    <Fragment>
      <Input {...(touched ? { valid: !error } : {})} {...input} {...custom} />
      {error && <FormFeedback>{error}</FormFeedback>}
      {!error && warning && <FormText>{warning}</FormText>}
    </Fragment>
  </div>
);

const renderEngagement = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul style={{ listStyle: 'none' }}>
    <li>
      <Button color="info" className="btn-round" size="sm" onClick={() => fields.push({})}>
        Add Engagement
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((media, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Engagement"
          onClick={() => fields.remove(index)}
        />
        <h4 style={{ color: 'white' }}>Engagement #{index + 1}</h4>
        <Field
          name={`${media}.name`}
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name={`${media}.id`}
          type="text"
          component={renderField}
          label="Id"
        />
        <Field
          name={`${media}.type`}
          type="text"
          component={renderField}
          label="Type"
        />
        <Field
          name={`${media}.question`}
          type="text"
          component={renderField}
          label="Question"
        />
        <Field
          name={`${media}.pollingType`}
          type="text"
          component={renderField}
          label="PollingType"
        />
        <FieldArray
          component={renderOptions}
          name={`${media}.options`}
        ></FieldArray>
      </li>
    ))}
  </ul>
);


const renderOptions = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul style={{ listStyle: 'none' }}>
    <li>
      <Button color="info" className="btn-round" size="sm" onClick={() => fields.push({})}>
        Add Option
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((media, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Option"
          onClick={() => fields.remove(index)}
        />
        <h4 style={{ color: 'white' }}>Option #{index + 1}</h4>
        <Field
          type="text"
          name={`${media}.name`}
          component={renderField}
          label="Value"
        />
      </li>
    ))}
  </ul>
);



const renderBooths = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul style={{ listStyle: 'none' }}>
    <li>
      <Button color="info" className="btn-round" size="sm" onClick={() => fields.push({})}>
        Add Booth
      </Button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((media, index) => (
      <li key={index}>
        <button
          type="button"
          title="Remove Booth"
          onClick={() => fields.remove(index)}
        />
        <h4 style={{ color: 'white' }}>Booth #{index + 1}</h4>
        <Field
          name={`${media}.id`}
          type="text"
          component={renderField}
          label="ID"
        />
        <Field
          name={`${media}.subvenue`}
          type="text"
          component={renderField}
          label="Sub Venue"
        />
        <Field
          name={`${media}.number`}
          type="text"
          component={renderField}
          label="number"
        />
        <Field
          name={`${media}.type`}
          type="text"
          component={renderField}
          label="Type"
        />
        <Field
          name={`${media}.model`}
          type="text"
          component={renderField}
          label="Model"
        />
        {/* <FieldArray name="amenities" component={renderAmenties}/> */}

      </li>
    ))}
  </ul>
);

const createEventActivity = (val) => {
  console.log(val)
  let { userEngagements } = val;
  if (Array.isArray(userEngagements) && userEngagements.length > 0) {
    userEngagements.map((ue, index) => {
      let { options } = ue;
      let tempOptions = [];
      if (Array.isArray(options) && options.length > 0) {
        options.map(opt => {
          tempOptions.push(opt['name'])
        })
      }
      userEngagements[index]['options'] = tempOptions;
    })
  }
  val['userEngagements'] = userEngagements


  console.log(val)

}

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
  <div>
    <label>{label}</label>
    <Input type="select" {...(touched ? { valid: !error } : {})} {...input} {...custom}>
      {children}
    </Input>
  </div>
);
const EditEventActivity = props => {
  const { handleSubmit, pristine, reset, submitting, match: { params },editEventActivity } = props
  console.log('initial values ',props.initialValues)
  useEffect(() => {
    console.log(params.eventActivityId)
      editEventActivity({name:params.eventActivityId})
  },[])
  return (
    <div className="content">
      <form onSubmit={handleSubmit(val => createEventActivity(val))}>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Name"
        />
        <Field
          name="eventId"
          type="text"
          component={renderField}
          label="Event ID"
         
        />
        <Field
          name="data"
          type="text"
          component={renderField}
          label="Data"
        />
        <div style={{ marginBottom: "4px" }}>
          <div >
            <Field label="Venue" name='hall' component={renderSelectField} style={{ width: '100%', borderRadius: '4px', border: '0.5px solid grey', height: '40px' }}>
              <option value="Choose" style={{color:'black'}}>Choose</option>
              <option value="HALL4" style={{color:'black'}}>HALL 4</option>
              <option value="AUDITORIUM" style={{color:'black'}}>AUDITORIUM</option>
            </Field>
          </div>
        </div>
        <div style={{ marginBottom: "4px" }}>
          <div >
            <Field label="Type" name='type' component={renderSelectField} style={{ width: '100%', borderRadius: '4px', border: '0.5px solid grey', height: '40px' }}>
              <option value="Choose" style={{color:'black'}}>Choose</option>
              <option value="RECORDED_VIDEO" style={{color:'black'}}>RECORDED_VIDEO</option>
            </Field>
          </div>
        </div>
        <Field
          name="emailId"
          type="text"
          component={renderField}
          label="Email ID"
        />
        <Field
          name="description"
          type="text"
          component={renderField}
          label="Description"
        />


        <FieldArray name="userEngagements" component={renderEngagement} />

        <div>
          <Button className="btn-fill" color="primary" type="submit" disabled={pristine || submitting}>
            Submit
      </Button>
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
  )
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  initialValues: state.dashboard.initialValues
});
const eventActivityForm = reduxForm({
  form: 'edit-eventactivity-form',
  enableReinitialize: true
})(EditEventActivity)

export default connect(mapStateToProps,{editEventActivity})(eventActivityForm)
