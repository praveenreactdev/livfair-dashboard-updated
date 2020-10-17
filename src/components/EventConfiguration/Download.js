import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from "react-redux";
import { loadReport } from 'store/actions/reportsActions';
import ReactExport from "react-export-excel";
import { Button } from 'reactstrap';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

const dataSet1 = [
    {
        name: "Johson",
        amount: 30000,
        sex: 'M',
        is_married: true
    },
    {
        name: "Monika",
        amount: 355000,
        sex: 'F',
        is_married: false
    },
    {
        name: "John",
        amount: 250000,
        sex: 'M',
        is_married: false
    },
    {
        name: "Josef",
        amount: 450500,
        sex: 'M',
        is_married: true
    }
];

const dataSet2 = [
    {
        name: "Johnson",
        total: 25,
        remainig: 16
    },
    {
        name: "Josef",
        total: 25,
        remainig: 7
    }
];

class Download extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <div style={{ display: 'inline' }} className="download-btn">
                    <ExcelFile>
                        <ExcelSheet data={this.props.data} name='abc'>
                            <ExcelColumn label="Event Name" value="eventName" />
                            <ExcelColumn label="User ID" value="userId" />
                            <ExcelColumn label="Booth Name" value="boothName" />
                            <ExcelColumn label="Data" value="activityData" />
                            <ExcelColumn label="Time" value="activityTime" />
                            <ExcelColumn label="Token" value="token" />
                        </ExcelSheet>
                    </ExcelFile>
                </div>

            </>
        );
    }
}
const mapStateToProps = (state) => {

    return {
        dashboard: state.dashboard,
        initialValues: state.dashboard.initialValues
    };
}


export default connect(mapStateToProps, { loadReport })(Download);
