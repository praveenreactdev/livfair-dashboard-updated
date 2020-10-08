import React from "react";
import classNames from "classnames";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Row,
  Col
} from "reactstrap";
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4,
  chartExample5,
  chart1_2_options
} from "variables/charts.js";
import { getChartData } from "../store/actions/chartActions";
import { connect, useStore } from "react-redux";

class Dashboard extends React.Component {
  chartExample1 = {};
  chartExample2 = {};
  chartExample3 = {};
  chartExample4 = {};
  chartExample5 = {};
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
    this.props.getChartData();
  }
  componentDidMount() {
    this.chartExample1 = {
      data1: canvas => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        console.log(1, this.props.summary[0]);
        return {
          labels: this.props.summary[0].label,
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: "#1f8ef1",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#1f8ef1",
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#1f8ef1",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.props.summary[0].value
            }
          ]
        };
      }
    }

    this.chartExample2 = {
      data: canvas => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        return {
          labels: this.props.summary[1].label,
          datasets: [
            {
              label: "Data",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: "#1f8ef1",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#1f8ef1",
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#1f8ef1",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.props.summary[1].value
            }
          ]
        };
      },
      options: chart1_2_options
    };

    this.chartExample3 = {
      data: canvas => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(72,72,176,0.1)");
        gradientStroke.addColorStop(0.4, "rgba(72,72,176,0.0)");
        gradientStroke.addColorStop(0, "rgba(119,52,169,0)"); //purple colors
    
        return {
          labels: this.props.summary[2].label,
          datasets: [
            {
              label: "Countries",
              fill: true,
              backgroundColor: gradientStroke,
              hoverBackgroundColor: gradientStroke,
              borderColor: "#d048b6",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              data: this.props.summary[2].value
            }
          ]
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "rgba(225,78,202,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 60,
                suggestedMax: 120,
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                drawBorder: false,
                color: "rgba(225,78,202,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }
          ]
        }
      }
    };

    this.chartExample4 = {
      data: canvas => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(66,134,121,0.15)");
        gradientStroke.addColorStop(0.4, "rgba(66,134,121,0.0)"); //green colors
        gradientStroke.addColorStop(0, "rgba(66,134,121,0)"); //green colors
    
        return {
          labels: this.props.summary[4].label,
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              backgroundColor: gradientStroke,
              borderColor: "#00d6b4",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#00d6b4",
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#00d6b4",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              data: this.props.summary[4].value
            }
          ]
        };
      },
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
    
        tooltips: {
          backgroundColor: "#f5f5f5",
          titleFontColor: "#333",
          bodyFontColor: "#666",
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        responsive: true,
        scales: {
          yAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(29,140,248,0.0)",
                zeroLineColor: "transparent"
              },
              ticks: {
                suggestedMin: 50,
                suggestedMax: 125,
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }
          ],
    
          xAxes: [
            {
              barPercentage: 1.6,
              gridLines: {
                drawBorder: false,
                color: "rgba(0,242,195,0.1)",
                zeroLineColor: "transparent"
              },
              ticks: {
                padding: 20,
                fontColor: "#9e9e9e"
              }
            }
          ]
        }
      }
    };

    this.chartExample5 = {
      data: canvas => {
        let ctx = canvas.getContext("2d");
    
        let gradientStroke = ctx.createLinearGradient(0, 230, 0, 50);
    
        gradientStroke.addColorStop(1, "rgba(29,140,248,0.2)");
        gradientStroke.addColorStop(0.4, "rgba(29,140,248,0.0)");
        gradientStroke.addColorStop(0, "rgba(29,140,248,0)"); //blue colors
    
        console.log(1, this.props.summary[3]);
        return {
          labels: ["Total Users", "LoggedIn Users"],
          datasets: [
            {
              label: "My First dataset",
              fill: true,
              borderColor: "#1f8ef1",
              borderWidth: 2,
              borderDash: [],
              borderDashOffset: 0.0,
              pointBackgroundColor: "#1f8ef1",
              pointBorderColor: "rgba(255,255,255,0)",
              pointHoverBackgroundColor: "#1f8ef1",
              pointBorderWidth: 20,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,
              backgroundColor:["rgb(54, 162, 235)","#e14eca","rgba(119,52,169,0)"],
              data: [2000, 450]
            }
          ]
        };
      }
    }
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };


  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Total Users</h5>
                      <CardTitle tag="h2">Active Users</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={this.chartExample1['data1']}
                      options={chartExample1.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Total Booth Visits</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-square-pin text-info" />{" "}
                    {this.props.summary[1].total}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={this.chartExample2.data}
                      options={chartExample2.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Brochure Downloads</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-cart text-primary" />{" "}
                    {this.props.summary[2].total}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Bar
                      data={this.chartExample3.data}
                      options={chartExample3.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4">
              <Card className="card-chart">
                <CardHeader>
                  <h5 className="card-category">Exhibitor Interaction</h5>
                  <CardTitle tag="h3">
                    <i className="tim-icons icon-chat-33 text-success" /> {this.props.summary[4].total}
                  </CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Line
                      data={this.chartExample4.data}
                      options={chartExample4.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <CardTitle tag="h2">Total vs LoggedIn Users</CardTitle>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <div className="chart-area">
                    <Doughnut
                      data={this.chartExample5.data}
                      options={chartExample5.options}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  dashboard: state.dashboard,
  initialValues : state.dashboard.initialValues,
  summary: state.summary
});

export default connect(mapStateToProps, { getChartData })(Dashboard);
