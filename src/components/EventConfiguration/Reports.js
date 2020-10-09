import React from 'react'
import { Field,formValueSelector , reduxForm } from 'redux-form'
import { connect } from "react-redux";

const colors = [ { color: 'Red', value: 'ff0000' },
  { color: 'Green', value: '00ff00' },
  { color: 'Blue', value: '0000ff' } ]

const test = (props) => {
  console.log(11, props.reportType);
}

const EventConfigForm = props => {
  const { reportType, handleSubmit, pristine, reset, submitting } = props
  return (
    <>
    <div className="content">
    <form onSubmit={handleSubmit(val=>console.log(val))}>
          <Field name="reportType" component="select" onSelect={test}>
            <option>Select a Report</option>
            <option value="DOWNLOAD_BROCHURE">Brochure Report</option>
            <option value="DOWNLOAD_BOOTH">Booth Report</option>
          </Field>

      <div style={{marginTop: '20px'}}>
        <button type="button" disabled={pristine || submitting} onClick={test(props)}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
         Reset
        </button>
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

const selector = formValueSelector('simple');
export default connect((state)=>{
  const reportType = selector(state, 'reportType')
  return {
    reportType
  }
},{})(eventForm)
