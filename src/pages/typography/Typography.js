import React from "react";
import {
  Row,
  Col,
  Table,
  Badge,
} from "reactstrap";
import s from "./Static.module.scss";

import Widget from "../../components/Widget";

class Typography extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      tableStyles: [
        {
          id: 1,
          picture: require("../../assets/tables/1.png"), // eslint-disable-line global-require
          description: "Palo Alto",
          info: {
            type: "JPEG",
            dimensions: "200x150",
          },
          date: new Date("September 14, 2012"),
          size: "45.6 KB",
          progress: {
            percent: 29,
            colorClass: "success",
          },
        },
        {
          id: 2,
          picture: require("../../assets/tables/2.png"), // eslint-disable-line global-require
          description: "The Sky",
          info: {
            type: "PSD",
            dimensions: "2400x1455",
          },
          date: new Date("November 14, 2012"),
          size: "15.3 MB",
          progress: {
            percent: 33,
            colorClass: "warning",
          },
        },
        {
          id: 3,
          picture: require("../../assets/tables/3.png"), // eslint-disable-line global-require
          description: "Down the road",
          label: {
            colorClass: "primary",
            text: "INFO!",
          },
          info: {
            type: "JPEG",
            dimensions: "200x150",
          },
          date: new Date("September 14, 2012"),
          size: "49.0 KB",
          progress: {
            percent: 38,
            colorClass: "inverse",
          },
        },
        {
          id: 4,
          picture: require("../../assets/tables/4.png"), // eslint-disable-line global-require
          description: "The Edge",
          info: {
            type: "PNG",
            dimensions: "210x160",
          },
          date: new Date("September 15, 2012"),
          size: "69.1 KB",
          progress: {
            percent: 17,
            colorClass: "danger",
          },
        },
        {
          id: 5,
          picture: require("../../assets/tables/5.png"), // eslint-disable-line global-require
          description: "Fortress",
          info: {
            type: "JPEG",
            dimensions: "1452x1320",
          },
          date: new Date("October 1, 2012"),
          size: "2.3 MB",
          progress: {
            percent: 41,
            colorClass: "primary",
          },
        },
      ],
      checkboxes1: [false, true, false, false],
      checkboxes2: [false, false, false, false, false, false],
      checkboxes3: [false, false, false, false, false, false],
    };

    this.checkAll = this.checkAll.bind(this);
  }

  parseDate(date) {
    this.dateSet = date.toDateString().split(" ");

    return `${date.toLocaleString("en-us", { month: "long" })} ${
      this.dateSet[2]
    }, ${this.dateSet[3]}`;
  }

  checkAll(ev, checkbox) {
    const checkboxArr = new Array(this.state[checkbox].length).fill(
      ev.target.checked
    );
    this.setState({
      [checkbox]: checkboxArr,
    });
  }

  changeCheck(ev, checkbox, id) {
    //eslint-disable-next-line
    this.state[checkbox][id] = ev.target.checked;
    if (!ev.target.checked) {
      //eslint-disable-next-line
      this.state[checkbox][0] = false;
    }
    this.setState({
      [checkbox]: this.state[checkbox],
    });
  }

  render() {
    return (
      <div className={s.root}>
        <h2 className="page-title">
          <span className="fw-semi-bold">Proposed Solutions</span>
        </h2>
        <Row>
        <Col lg={6} md={12} sm={12}>
            <Widget
              title={
                <h5>
                  <span className="fw-semi-bold">Representative Legislature</span>
                </h5>
              }
              settings
              close
            >
              <div className={s.overFlow}>
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Number</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <a href="#">ottoto@example.com</a>
                      </td>
                      <td>
                        <Badge color="gray" className="text-secondary" pill>
                          Pending
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>
                        <a href="#">fat.thor@example.com</a>
                      </td>
                      <td>
                        <Badge color="gray" className="text-secondary" pill>
                          Unconfirmed
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>
                        <a href="#">larry@example.com</a>
                      </td>
                      <td>
                        <Badge color="primary" className="text-secondary" pill>
                          New
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Peter</td>
                      <td>Horadnia</td>
                      <td>
                        <a href="#">peter@example.com</a>
                      </td>
                      <td>
                        <Badge color="success" className="text-secondary" pill>
                          Active
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                  {/* eslint-enable */}
                </Table>
                </div>
            </Widget>
          </Col>
          <Col lg={6} md={12} sm={12}>
            <Widget
              title={
                <h5>
                 <span className="fw-semi-bold">Federal Legislature</span>
                </h5>
              }
              settings
              close
            >
              <div className={s.overFlow}>
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Number</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <a href="#">ottoto@example.com</a>
                      </td>
                      <td>
                        <Badge color="gray" className="text-secondary" pill>
                          Pending
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>
                        <a href="#">fat.thor@example.com</a>
                      </td>
                      <td>
                        <Badge color="gray" className="text-secondary" pill>
                          Unconfirmed
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>
                        <a href="#">larry@example.com</a>
                      </td>
                      <td>
                        <Badge color="primary" className="text-secondary" pill>
                          New
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Peter</td>
                      <td>Horadnia</td>
                      <td>
                        <a href="#">peter@example.com</a>
                      </td>
                      <td>
                        <Badge color="success" className="text-secondary" pill>
                          Active
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                  {/* eslint-enable */}
                </Table>
                </div>
            </Widget>
          </Col>
        </Row>
        <Row> 
          <Col lg={6} md={6} sm={12}>
            <Widget
              title={
                <h5>
                   <span className="fw-semi-bold">State Legislature</span>
                </h5>
              }
              settings
              close
            >
              <div className={s.overFlow}>
                <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email</th>
                      <th>Number</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <a href="#">ottoto@example.com</a>
                      </td>
                      <td>
                        <Badge color="gray" className="text-secondary" pill>
                          Pending
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>
                        <a href="#">fat.thor@example.com</a>
                      </td>
                      <td>
                        <Badge color="gray" className="text-secondary" pill>
                          Unconfirmed
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>
                        <a href="#">larry@example.com</a>
                      </td>
                      <td>
                        <Badge color="primary" className="text-secondary" pill>
                          New
                        </Badge>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Peter</td>
                      <td>Horadnia</td>
                      <td>
                        <a href="#">peter@example.com</a>
                      </td>
                      <td>
                        <Badge color="success" className="text-secondary" pill>
                          Active
                        </Badge>
                      </td>
                    </tr>
                  </tbody>
                  {/* eslint-enable */}
                </Table>
                </div>
            </Widget>
          </Col>
        </Row>
      </div>
    );
  }
}


export default Typography;
