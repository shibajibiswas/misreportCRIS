import React, { Component, Fragment } from 'react';
import Table from 'react-bootstrap/Table'


class TableView extends Component {

    render(){
        const {reportdata} = this.props
        const renderTable = () => {
            return reportdata.map(rep => {
              return (
                <tr>
                  <td>{rep.location}</td>
                  <td>{rep.psgn}</td>
                  <td>{rep.erng}</td> 
                </tr>
              )
            })
          }

          return (
            <Fragment>
              <h1 id="title">PSGN ERNG DATA</h1>
              <hr/>
              <Table striped bordered hover size="sm"> 
                <thead>
                  <tr>
                    <th>Location</th>
                    <th>Psgn</th>
                    <th>Erng</th>
                  </tr>
                </thead>
                <tbody>{renderTable()}</tbody>
              </Table>
            </Fragment>
          )


        

    }
   
}

export default TableView;