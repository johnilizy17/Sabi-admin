import React from 'react';
import {
    Table
  } from "reactstrap";
export default function Sent(){
    return (
        <div >
           <Table >
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  {/* eslint-disable */}
                  <tbody>
                    <tr>
                          <td>23/2/2021</td>
                            <td>Members of the Toptal network include peers from top companies and research institutes, published authors, and top open-source contributors.</td>
                          <td>
                        </td>
                    </tr>
                </tbody>
                  {/* eslint-enable */}
                </Table>
        </div>
    )
}