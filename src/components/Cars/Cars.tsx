import React, { useState } from 'react';
import { useGetData } from '../../custom-hooks';
import { Jumbotron, Button, Container, Card, Col, Row} from 'react-bootstrap';
import leaf from '../../assets/img/leaf.jpg'


export const Cars = () => {
    
    let { carData, getData } = useGetData();
    console.log(carData)

    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron>
                        <h1>Your Car Collection</h1>
                        <p>Here is your current collection of cars!</p>
		                    <Button>Create new Car</Button>
					</Jumbotron>
                </Col>
            </Row>
						
						{/* Row to display Data */}
            <Row>
                <Col>
                    <div>
                        {carData.map( (item:any) => (
                            <div key="item.id"> {/* can also type item.id with curly braces */}
                                <Card style={{ width: '18rem'}}>
                                    <Card.Img variant="top" src={leaf} />
                                    <Card.Body>
                                        <Card.Title>
                                            { item.price }
                                            {/* needs to be in curly braces so it can be displayed on page */}
                                        </Card.Title>
                                        <Card.Text>
                                            { item.year}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.make}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.model}
                                        </Card.Text>
                                        <Card.Text>
                                            {item.color}
                                        </Card.Text>

										<Button variant="danger">Delete</Button>
                                        <Button variant="primary">Update</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>

        </Container>
    )
}