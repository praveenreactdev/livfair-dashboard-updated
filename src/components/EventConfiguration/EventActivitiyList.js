import React, { Component } from 'react'
import {loadEvents,loadExhibitors,editExhibitor,getEventActivities} from '../../store/actions/dashboardActions'
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
class EventActivityList extends Component {

    
    componentDidMount() {
        const { eventId } = this.props;
        console.log(this.props)
        this.props.getEventActivities(eventId)
      }

    render() {
        return (
            <div className="content">
                    <Row>
                    <Col md="12">
              <Card>
                <CardHeader>
                  <div className="tools float-right">
                        <Button color="info" onClick={()=>{this.props.history.push('/admin/create-eventActivity/'+this.props.eventId)}}>Add</Button>
                  </div>
        <CardTitle tag="h4">{`Event Activity List`}</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th className="text-center">#</th>
                        <th>Name</th>
                        <th>Type</th>
                        <th className="text-center">Hall</th>
                        <th className="text-right">Status</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                          this.props.dashboard.eventActivities.length > 0 ? (

                            this.props.dashboard.eventActivities.map((exhibitor,key)=>{
                                return (
                                    <tr key={exhibitor.name+exhibitor.type}>
                        <td className="text-center">
                          <div className="photo">
                            {/* <img
                              alt="..."
                              src={exhibitor.logo}
                            /> */}
                            {key+1}
                          </div>
                        </td>
                                <td>{exhibitor.name}</td>
                        <td>{exhibitor.type}</td>
                                <td className="text-center">{exhibitor.hall}</td>
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
                            Edit Activity
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
                            Remove Activity
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


export default connect(mapStateToProps,{loadExhibitors,editExhibitor,getEventActivities})(EventActivityList)