import React from 'react'
import { connect } from "react-redux";
import {ReactComponent as AddLogo } from '../../assets/img/plus.svg'
import {loadEvents} from '../../store/actions/dashboardActions'
import { NavLink, Link } from "react-router-dom";

import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    Row,
    Col  } from "reactstrap";
class ManageEvents extends React.Component {

    componentDidMount(){
        this.props.loadEvents()
    }
    isValidUrl = (string)=> {
        try {
          new URL(string);
        } catch (_) {
          return false;  
        }
      
        return true;
      }

      navigateToCreateEvent = ()=>{
        console.log('add new clicked')
        this.props.history.push("/admin/create-event")
      }
    render(){
        console.log(this.props)
        return (
            <>
            <div className="content">
                <Row>
                            <Col lg="4" xs="12">
                                <Card className="card-chart" style={{height:'100%'}}>
                                    <CardHeader>
                                        <h5 className="card-category">Add New</h5>
                                         <CardTitle tag="h3" style={{marginTop:'40px'}}>
                                                    <AddLogo style={{width:'100%',height:'100px'}} onClick={this.navigateToCreateEvent}>
                                                        
                                                    </AddLogo>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardBody>

                                    </CardBody>
                                </Card>
                            </Col>
                    {
                    //this.props.dashboard.events.length > 0 ? 
                     this.props.dashboard.events.map(d=>{
                        return (
                            <Col lg="4" xs="12" key={d.name}>
                                <Card className="card-chart" style={{height:'100%'}}>
                                    <CardHeader>
                                        <h5 className="card-category">{d.name}</h5>
                                         <CardTitle tag="h3">
                                             <Row>
                                                 <Col xs="6" lg="6">
                                                 {
                                                this.isValidUrl(d.logo) ? (
                                                    <img src={d.logo}/>
                                                ) : (<span></span>)
                                            }
                                                 </Col>
                                                 <Col xs="6" lg="6">
                                                    {
                                                        d.description
                                                    }
                                                 </Col>
                                             </Row>
                                            
                                            
                                        </CardTitle>
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                    caret
                                                    className="btn-icon"
                                                    color="link"
                                                    data-toggle="dropdown"
                                                    type="button"
                                                    >
                                                    <i className="tim-icons icon-settings-gear-63" />
                                                    </DropdownToggle>
                                                    <DropdownMenu aria-labelledby="dropdownMenuLink" right>
                                                    <DropdownItem
                                                        href="#pablo"
                                                        onClick={e => {e.preventDefault()}}
                                                    >
                                                        Edit Event
                                                    </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                    </CardHeader>
                                    <CardBody>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                    
                   
                </Row>
            </div>
            </>
        )
    }
}

const mapStateToProps = (state)=>({
    dashboard:state.dashboard
})


export default connect(mapStateToProps,{loadEvents})(ManageEvents)