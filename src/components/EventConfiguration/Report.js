import React from "react";
import { connect } from "react-redux";
import { Field, formValueSelector, reduxForm } from "redux-form";
import { loadReport } from "store/actions/reportsActions";
import { Button } from 'reactstrap';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col
} from "reactstrap";
import Download from "./Download";
class Report extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedEvent: "",
      value: "",
      showDataTable: false,
    };
  }
  componentDidMount() {
  }
  showDataTable = (data) => {
    console.log(102);
    this.setState({ showDataTable: data });
  };
  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(100, this.state.value);
    this.props.loadReport(this.state.value, this.showDataTable);
  };
  change = (event) => {
    this.setState({ value: event.target.value });
    console.log(101, this.state.value);
  };
  render() {
    return (
      <>
        <div className="content">
          <form onSubmit={this.handleOnSubmit}>
            <select id="lang" onChange={this.change} value={this.state.value}>
              <option>Select a Report</option>
              <option value="DOWNLOAD_BROUCHER">Brochure Report</option>
              <option value="VIEW_BUSINESSCARD">Business card Report</option>
              <option value="VIEW_VIDEO">Video Report</option>
              <option value="VISIT_BOOTH">Booth Report</option>
              <option value="CHAT">Chat Report</option>
              <option value="CALLBACK">Callback Report</option>
            </select>

            <div style={{ marginTop: "20px" }}>
              < Button color="info" className="btn-round" size="sm" type="submit">Search</Button>

            </div>
          </form>
          <br></br>
          {this.state.showDataTable ? (
            <Row>
              <Col lg="12" md="12">
                <Card>
                  <CardHeader>
                    <CardTitle tag="h4">{this.props.reportType}</CardTitle>
                    <div className="tools float-right">
                      <Download className="download-btn" data={this.props.report.activities} reportName={this.props.reportType}></Download>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <Table className="tablesorter">
                      <thead className="text-primary">
                        <tr>
                          <th>Event Name</th>
                          <th>User ID</th>
                          <th>Booth Name</th>
                          <th>Data</th>
                          <th>Time</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.report.activities.map((listValue, index) => {
                          let d = new Date(listValue.activityTime);
                          let ds = d.toLocaleDateString() + " " + d.toLocaleTimeString();
                          let data = '';
                          if (listValue.activityType === 'DOWNLOAD_BROUCHER') {
                            data = "" + listValue.activityData;
                            let dataName = data.substring(data.lastIndexOf('/') + 1, data.length);
                            if (dataName.length > 35) {
                              dataName = dataName.substring(0, 31) + '...';
                            }
                            data = (<a href={listValue.activityData}>{dataName}</a>);
                          } else if (listValue.activityType === 'VIEW_VIDEO') {
                            data = listValue.activityData.substring(0, 30) + '...';
                          } else {
                            data = listValue.activityData;
                          }
                          let boothName = ''
                          if (listValue.boothName.length > 50) {
                            boothName = listValue.boothName.substring(0, 47) + '...';
                          } else {
                            boothName = listValue.boothName;
                          }
                          return (
                            <tr key={index}>
                              <td>{listValue.eventName}</td>
                              <td>{listValue.userId}</td>
                              <td>{boothName}</td>
                              <td>{data}</td>
                              <td>{ds}</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </Table>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          ) : undefined}
          {console.log(this.props.report.activities)}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dashboard: state.dashboard,
    initialValues: state.dashboard.initialValues,
    report: state.report
  };
};

export default connect(mapStateToProps, { loadReport })(Report);
