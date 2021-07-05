import React from 'react';
import {
  TabContent, TabPane, Nav, NavItem, NavLink, Row, Table, Badge, Col} from 'reactstrap';
import classnames from 'classnames';
import SearchIcon from "../../../components/Icons/HeaderIcons/SearchIcon";
import s from './Icons.module.scss';
import {
  InputGroupAddon,
  Input,
  InputGroupText,
} from "reactstrap";
import PageTable from './data';

class Icons extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {
    return (
      <section className={`${s.root} mb-4`}>
        <h1 className="page-title"> <span className="fw-semi-bold">Representative Legislature</span></h1>

        {/* tabs */}
        <Nav className="bg-transparent" tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }}
              //style={{marginBottom: "-1px !important"}}
            >
              <span>Search for Legislature</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggle('2'); }}
            >
              <span className="mr-xs">Abia</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('3'); }}
            >
              <span className="mr-xs">Adamawa</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '4' })}
              onClick={() => { this.toggle('4'); }}
            >
              <span>Akwa Ibom</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '5' })}
              onClick={() => { this.toggle('5'); }}
            >
              <span>Anambra</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '6' })}
              onClick={() => { this.toggle('6'); }}
            >
              <span>Bauchi</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '7' })}
              onClick={() => { this.toggle('7'); }}
            >
              <span>Bayelsa</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '8' })}
              onClick={() => { this.toggle('8'); }}
            >
              <span className="mr-xs">Add new Legislature</span>
            </NavLink>
          </NavItem>
        </Nav>

        {/* tab content */}

        <TabContent activeTab={this.state.activeTab}>

          <TabPane tabId="1">
            <div style={{display:"flex", flexDirection:"row"}}>
            <InputGroupAddon addonType="prepend">
                  <InputGroupText className={s.inputGroupText}>
                    <SearchIcon className={s.headerIcon} />
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  id="search-input"
                  className="input-transparent"
                  placeholder=" Search for the Representative legislature......."
                />
            </div>
          </TabPane>

          {/* tab #2 */}
          <TabPane tabId="2">
            <div>
            <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>Local</th>
                      <th>Email</th>
                      <th>Party</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <PageTable/>
                  </tbody>
                  {/* eslint-enable */}
                </Table>  
            </div>
          </TabPane>

          {/* tab #3 */}
          <TabPane tabId="3">
            <div>
            <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>Local</th>
                      <th>Email</th>
                      <th>Party</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <PageTable/>
                  </tbody>
                  {/* eslint-enable */}
                </Table>  
            
            </div>
          </TabPane>

          {/* tab #4 */}
          <TabPane tabId="4">
            <div>
            <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>Local</th>
                      <th>Email</th>
                      <th>Party</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <PageTable/>
                  </tbody>
                  {/* eslint-enable */}
                </Table>  
            </div>
          </TabPane>

          {/* tab #5 */}
          <TabPane tabId="5">
            <div>
            <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>Local</th>
                      <th>Email</th>
                      <th>Party</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <PageTable/>
                  </tbody>
                  {/* eslint-enable */}
                </Table>  
            
            </div>
          </TabPane>

          {/* tab #6 */}
          <TabPane tabId="6">
            <div>
              <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>Local</th>
                      <th>Email</th>
                      <th>Party</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <PageTable/>
                  </tbody>
                  {/* eslint-enable */}
                </Table>  
            
            </div>
          </TabPane>

          {/* tab #7 */}
          <TabPane tabId="7">
            <div>
            <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>Local</th>
                      <th>Email</th>
                      <th>Party</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <PageTable/>
                  </tbody>
                  {/* eslint-enable */}
                </Table>  
            </div>
          </TabPane>

          {/* tab #8 */}

          <TabPane tabId="8">
            <div>
            <Table className="table-hover">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>State</th>
                      <th>Local</th>
                      <th>Email</th>
                      <th>Party</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <PageTable/>
                  </tbody>
                  {/* eslint-enable */}
                </Table>  
                        </div>
          </TabPane>
        </TabContent>
      </section>
    );
  }
}

export default Icons;
