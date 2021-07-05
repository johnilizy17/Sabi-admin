import React from "react";
import { Row, Col, Button } from "reactstrap";
import {
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Input,
} from "reactstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uuid from "uuid/v4";
import Widget from "../../components/Widget";
import s from "./Notifications.module.scss";

class Notifications extends React.Component {
  state = {
    options: {
      position: "top-right",
      autoClose: 5000,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
    },
  };

  componentDidMount() {
    toast.success("Welcome to the notification section!", {
      position: "bottom-right",
      autoClose: 5000,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }

  addSuccessNotification = () =>
    toast.success(
      "Showing success message was successful!",
      this.state.options
    );

  toggleLocation = (location) => {
    this.setState((prevState) => ({
      options: {
        ...prevState.options,
        position: location,
      },
    }));
  };

  addInfoNotification = () => {
    let id = uuid();
    toast(
      <div>
        The message as been saved in the draft
        <Button
          onClick={() => this.launchNotification(id)}
          outline
          size="xs"
          className="width-100 mb-xs mr-xs mt-1"
        >
          Draft
        </Button>
      </div>,
      { 
        ...this.state.options,
        className: "Toastify__toast--primary",
        toastId: id
        }
    );
  };

  launchNotification = (id) =>
    toast.update(id, {
      ...this.state.options,
      render: "Thermonuclear war averted",
      type: toast.TYPE.SUCCESS,
    });

  addErrorNotification = () => {
    let id = uuid();
    toast.error(
      <div>
        The message as be cleared <br />
      </div>,
      { ...this.state.options, toastId: id }
    );
  };

  retryNotification = (id) =>
    toast.update(id, {
      ...this.state.options,
      render: "Alien planet destroyed!",
      type: toast.TYPE.SUCCESS,
    });

  render() {
    return (
      <div className={s.root}>
        <h1 className="page-title">
          Messages - <span className="fw-semi-bold">Notifications</span>
        </h1>

        <Widget title={<h6> Messenger </h6>} close collapse settings>
          <Row>
            <Col lg="4" xs="12">
              <h5 className="m-t-1">Push Notification</h5>
              <p>
                This notification will appear on the top of every IOS and Android user
              </p>
              <InputGroup>
                <Input
                  id="search-input-2"
                  type="textarea"
                  placeholder="Type your push notification here"
                  className="input-transparent"
                  onFocus={() => this.setState({ searchFocused: true })}
                  style={{height: "20vh"}}
                />
            </InputGroup>
            <div style={{display: "flex", flexDirection:"row", justifyContent:"space-around",marginTop:"10px"}}>
                <p className="mb-3">
                  <Button
                    color="primary"
                    id="show-info-message"
                    onClick={this.addInfoNotification}
                  >
                      Save to draft
                  </Button>
                </p>
                <p className="mb-3">
                  <Button
                    color="danger"
                    id="show-error-message"
                    onClick={this.addErrorNotification}
                  >
                    Clear
                  </Button>
                </p>
                <p>
                  <Button
                    color="success"
                    id="show-success-message"
                    onClick={this.addSuccessNotification}
                  >
                    Send
                  </Button>
                </p> 
              </div>
            </Col>

            <Col lg="4" xs="12">
              <h5 className="mt-0 mt-md-2 mt-lg-0">Notification Types</h5>
              <p>
               We have push notification on the left side and header notificaction right side
              </p>
              
            </Col>

            <Col lg="4" xs="12">
              <h5 className="m-t-1">Header notification</h5>
              <p>
                This notification will appear on the header of the app
              </p>
              <InputGroup
              className={`${s.navbarForm} ${
                this.state.searchFocused ? s.navbarFormFocused : ""
              }`}
            >
              <InputGroupAddon addonType="prepend" className={s.inputAddon}>
              </InputGroupAddon>
              <Input
                id="search-input-2"
                type="textarea"
                placeholder="Comment of voters registration: June 28th 2021!!!"
                className="input-transparent"
                onFocus={() => this.setState({ searchFocused: true })}
              />
            </InputGroup>
            <div style={{display: "flex", flexDirection:"row", justifyContent:"space-around",marginTop:"10px"}}>
              <p>
              <Button
                    color="primary"
                    id="show-info-message"
                    onClick={this.addInfoNotification}
                  >
                      Save to draft
                  </Button>
                </p>
                <p className="mb-3">
                  <Button
                    color="danger"
                    id="show-error-message"
                    onClick={this.addErrorNotification}
                  >
                    Clear
                  </Button>
                </p>
                <p>
                  <Button
                    color="success"
                    id="show-success-message"
                    onClick={this.addSuccessNotification}
                  >
                    Send
                  </Button>
                </p>
            </div>
            </Col>
          </Row>
        </Widget>
      </div>
    );
  }
}

export default Notifications;
