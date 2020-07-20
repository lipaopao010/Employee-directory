import React from 'react';
import { Form } from 'react-bootstrap';


export default function SearchInput(props) {
    return(
<Form >
  <Form.Group controlId="booktitle">
    <Form.Label>search here</Form.Label>
    <Form.Control 

     placeholder="search" 
     onChange={props.onSearch}
        />
  </Form.Group>

</Form>
    )
}
