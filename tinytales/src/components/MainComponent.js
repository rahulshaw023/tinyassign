import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem,
            Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

class RenderForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            form :''

        };
    }
    render()
    {
        return(
            <div className="hey">
                <div className="container ">
                  <div className="row">
                    <div className="col md-9 col-12">
                        <Form>
                        <FormGroup row>
                        <Label htmlFor="Enter Number" md={2}>Enter Number</Label>
                                <Col md={10}>
                                    <Input type="text" id="enternumber" name="enter number"
                                        placeholder="Enter Number"
                                        value={this.state.form}
                                        onChange={this.handleInputChange} />
                                </Col>
                        </FormGroup>
                          <FormGroup row>
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="primary">
                                        Send Feedback
                                    </Button>
                                </Col>
                          </FormGroup>
                        </Form>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}
export default RenderForm;