/*!

=========================================================
* Black Dashboard PRO React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import classnames from "classnames";
import { connect } from "react-redux";
import {login} from '../../store/actions/loginActions'
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col
} from "reactstrap";

class Login extends React.Component {
  state = {
    userId:'',
    password:'',
  };
  componentDidMount() {
    document.body.classList.toggle("login-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("login-page");
  }
  // {this.props.authentication.isAuthenticated ? this.props.history.push('/admin/dashboard') : ''}
  render() {
    return (
      <>
        {this.props.authentication.isAuthenticated ? this.props.history.push('/admin/dashboard') : ''}

        <div className="content">
          <Container>
            <Col className="ml-auto mr-auto" lg="4" md="6">
              <Form className="form">
                <Card className="card-login card-white">
                  <CardHeader>
                    <img
                      alt="..."
                      src={require("assets/img/card-primary.png")}
                    />
                    <CardTitle tag="h1">Log in</CardTitle>
                  </CardHeader>
                  <CardBody>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.emailFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-email-85" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Email"
                        type="email"
                        onFocus={e => this.setState({ emailFocus: true })}
                        onBlur={e => this.setState({ emailFocus: false })}
                        onChange={e => this.setState({userId:e.target.value})}
                      />
                    </InputGroup>
                    <InputGroup
                      className={classnames({
                        "input-group-focus": this.state.passFocus
                      })}
                    >
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="tim-icons icon-lock-circle" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        placeholder="Password"
                        type="password"
                        onFocus={e => this.setState({ passFocus: true })}
                        onBlur={e => this.setState({ passFocus: false })}
                        onChange={e => this.setState({password:e.target.value})}
                      />
                    </InputGroup>
                  </CardBody>
                  <CardFooter>
                    <Button
                      block
                      className="mb-3"
                      color="primary"
                      type="submit"
                      href="#pablo"
                      onClick={e => {e.preventDefault();console.log(this.props);
                       this.props.login(this.state)
                      }}
                      size="lg"
                    >
                      Login
                    </Button>
                    <div className="pull-left">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Create Account
                        </a>
                      </h6>
                    </div>
                    <div className="pull-right">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div>
                  </CardFooter>
                </Card>
              </Form>
            </Col>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state)=>({
  authentication:state.authentication
})

export default connect(mapStateToProps,{login}) (Login)
