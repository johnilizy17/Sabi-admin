import React from 'react';
import { Button } from "reactstrap";
import {
  InputGroup,
  Input,
} from "reactstrap";
  
export default function Draft(){
    return(
        <div>
            <InputGroup>
                <Input
                  id="search-input-2"
                  type="textarea"
                  placeholder="Type your push notification here"
                  className="input-transparent"
                  style={{height: "20vh"}}
                />
            </InputGroup>
            <div>
                <p className="mb-3">
                  <Button
                    color="primary"
                    id="show-info-message"
                  >
                      Save to draft
                  </Button>
                </p>
                <p className="mb-3">
                  <Button
                    color="danger"
                    id="show-error-message"
                  >
                    Clear
                  </Button>
                </p>
                <p>
                  <Button
                    color="success"
                    id="show-success-message"
                  >
                    Send
                  </Button>
                </p> 
              </div>
        </div>
    )
}