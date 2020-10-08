import React, { Component } from 'react'
import {loadEvents,loadExhibitors,editExhibitor} from '../../store/actions/dashboardActions'
import { connect } from "react-redux";

import {
    BreadcrumbItem,
    Button,
    ButtonGroup,
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Label,
    FormGroup,
    Input,
    Progress,
    Table,
    Row,
    Col,
    UncontrolledTooltip
  } from "reactstrap";
import { textChangeRangeIsUnchanged } from 'typescript';
class ExhibitorsList extends Component {

    
    componentDidMount() {
        const { match: { params } } = this.props;
        this.props.loadExhibitors(params.eventId)
        console.log(params)
      }

    render() {
        return (
            <div className="content">
                    <Row>
                    <Col md="12">
              <Card>
                <CardHeader>
                  <div className="tools float-right">
                        <Button color="info" onClick={()=>{this.props.history.push('/admin/create-exhibitor')}}>Add</Button>
                  </div>
        <CardTitle tag="h4">{`Exhibitors List`}</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">#</th>
                        <th>Name</th>
                        <th>Website</th>
                        <th className="text-center">Exhibitor Id</th>
                        <th className="text-right">Status</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          this.props.dashboard.exhibitors.length > 0 ? (

                            this.props.dashboard.exhibitors.map(exhibitor=>{
                                return (
                                    <tr>
                        <td className="text-center">
                          <div className="photo">
                            <img
                              alt="..."
                              //src={require("assets/img/jana.jpg")}
                              src={exhibitor.logo}
                            />
                          </div>
                        </td>
                                <td>{exhibitor.name}</td>
                        <td>{exhibitor.website}</td>
                                <td className="text-center">{exhibitor.exhibitorId}</td>
                                <td className="text-right">{exhibitor.isActive == 'Y' ? (<p style={{color:'#2dd72d'}}>Active</p>) :(<p style={{color:'red'}}>InActive</p>)}</td>
                        <td className="text-right">
                          <Button
                            className="btn-link btn-icon btn-neutral"
                            color="success"
                            id="tooltip932549650"
                            size="sm"
                            onClick={e=>{this.props.history.push('/admin/edit-exhibitor/'+exhibitor.exhibitorId)}}
                          >
                            <i className="tim-icons icon-pencil" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip932549650"
                          >
                            Edit Exhibitor
                          </UncontrolledTooltip>
                          <Button
                            className="btn-link btn-neutral"
                            color="danger"
                            id="tooltip696208424"
                            size="sm"
                          >
                            <i className="tim-icons icon-simple-remove" />
                          </Button>
                          <UncontrolledTooltip
                            delay={0}
                            target="tooltip696208424"
                          >
                            Remove Exhibitor
                          </UncontrolledTooltip>
                        </td>
                      </tr>
                                )
                            })


                          ): (<span/>)
                      }
                      
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
            
                    </Row>
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    dashboard:state.dashboard
})


export default connect(mapStateToProps,{loadExhibitors,editExhibitor})(ExhibitorsList)