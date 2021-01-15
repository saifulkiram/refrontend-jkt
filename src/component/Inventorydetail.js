import React from 'react'
import Axios from 'axios'

import {
    Table, Form, Button, Dropdown, DropdownButton
} from 'react-bootstrap'


class Inventorylist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            listProduk: [],
            selectedIndex: null
        }
    }

    componentDidMount() {
        Axios.get('http://localhost:2000/products')
            .then(res =>{ this.setState({ listProduk: res.data })})
            .catch((err) => console.log(err))
    }

    renderThead = () => {
        return (
            <thead style={{ textAlign: 'center' }}>
                <tr>
                    <th>No</th>
                    <th>Date</th>
                    <th>Name</th>
                    <th>SN</th>
                    <th>Category</th>
                    <th>Stock</th>
                    <th>Price</th>
                    <th>Action</th>
                </tr>
            </thead>
        )
    }

    renderTBody = () => {
        return (
            <tbody>
                {this.props.listProduk.map ((item, index) => {
                    if (this.state.selectedIndex === index) {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.date}</td>
                                <td><Form.Control type="text" placeholder="product name" name="editname"  /></td>
                                <td>{item.serial}</td>
                                <td>
                                    <DropdownButton id="dropdown-item-button" title="Dropdown button">
                                        <Dropdown.Item as="button" value="Electronic" >Electronic</Dropdown.Item>
                                        <Dropdown.Item as="button" value="Handphone">Handphone</Dropdown.Item>
                                        <Dropdown.Item as="button" value="Furniture">Furniture</Dropdown.Item>
                                        <Dropdown.Item as="button" value="Beauty">Beauty</Dropdown.Item>
                                        <Dropdown.Item as="button" value="Fashion">Fashion</Dropdown.Item>
                                        <Dropdown.Item as="button" value="Food & Drink">Food & Drink</Dropdown.Item>
                                    </DropdownButton>
                                </td>
                                <td><Form.Control type="number" name="editstock"  /></td>
                                <td><Form.Control type="text" name="editprice"  /> </td>
                                <td style={{ textAlign: "center" }}>
                                    <Button variant='success' onClick={() => this.handleSave(index)} style={{ marginRight: '15px' }}>Save</Button>
                                    <Button variant='danger' onClick={() => this.setState({ selectedIndex: null })}>Cancel</Button>
                                </td>
                            </tr>
                        )
                    }
                    return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.date}</td>
                            <td>{item.name}</td>
                            <td>{item.serial}</td>
                            <td>{item.category}</td>
                            <td>{item.stock}</td>
                            <td>{item.price}</td>
                            <td style={{ textAlign: "center" }}>
                                <Button variant='warning' onClick={() => this.setState({ selectedIndex: index, newQty: item.qty })} style={{ marginRight: '15px' }}>Edit</Button>
                                <Button variant='danger' onClick={() => this.handleDelete(index)}>Delete</Button>
                            </td>
                        </tr>
                    )
                })

                }
            </tbody>
        )
    }

    renderTBodyAdd = () => {
        return (
            <tr>
                <td>#</td>
                <td><Form.Control type="date" name="adddate"  /></td>
                <td><Form.Control type="text" placeholder="product name" name="addname"  /></td>
                <td></td>
                <td>
                    <DropdownButton id="dropdown-item-button" title="Dropdown button">
                        <Dropdown.Item as="button" value="Electronic" >Electronic</Dropdown.Item>
                        <Dropdown.Item as="button" value="Handphone">Handphone</Dropdown.Item>
                        <Dropdown.Item as="button" value="Furniture">Furniture</Dropdown.Item>
                        <Dropdown.Item as="button" value="Beauty">Beauty</Dropdown.Item>
                        <Dropdown.Item as="button" value="Fashion">Fashion</Dropdown.Item>
                        <Dropdown.Item as="button" value="Food & Drink">Food & Drink</Dropdown.Item>
                    </DropdownButton>
                </td>
                <td><Form.Control type="number" name="addstock"  /></td>
                <td><Form.Control type="text" name="addprice"  /></td>
                <td style={{ textAlign: "center" }}>
                    <Button variant='danger' onClick={() => this.handleAdd()}>Delete</Button>
                </td>
            </tr>
        )
    }
    render() {
        return (
            <Table striped bordered hover variant="dark">
                {this.renderThead()}
                {this.renderTBody()}
                {this.renderTBodyAdd()}
            </Table>
        )
    }
}





export default Inventorylist