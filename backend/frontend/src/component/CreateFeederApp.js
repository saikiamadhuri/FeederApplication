import React, { useState } from 'react';
import { Button, Form, FormGroup } from 'reactstrap'
import axios from 'axios';
import DateTimePicker from "react-datetime-picker";
import { useNavigate } from "react-router-dom";


export default function Create() {
    
    const [food, setFood] = useState('');
    const [place, setPlace] = useState('');
    const [numberOfDucks, setNumber] = useState('');
    const [foodType, setType] = useState('');
    const [quantity, setQuantity] = useState('');
    const [time, setTime] = useState(new Date());
    
    const navigate = useNavigate();

    const [error, setError] = React.useState(null);

        async function handleSubmit(event) {
        event.preventDefault();
        let result = await postData();
        navigate('/redirect');
    
    }
    
    const postData = () => {
        axios.post(`http://localhost:8080/feeder/save`, {
            food,
            place,
            numberOfDucks,
            foodType,
            quantity
        }).then((response) =>{
                console.log(response.data);
        }, (error) => {
            console.log(error);
        });
    }
    return (
        <div>
            <h2 className="main-header">Please fill in details : </h2>
            <Form className="create-form">
                <FormGroup>
                    <label className="text-center">Time Of Feed </label>
                    <DateTimePicker onChange={(e) => setTime(e.target.value)} value={time}/>
                </FormGroup>
                <FormGroup>
                    <label className="text-center">Food </label>
                    <input placeholder='Food' onChange={(e) => setFood(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <label>Place </label>
                    <input placeholder='Place' onChange={(e) => setPlace(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <label>Number Of Ducks </label>
                    <input placeholder='Number Of Ducks' onChange={(e) => setNumber(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <label>Type Of Food </label>
                    <input placeholder='Type Of Food' onChange={(e) => setType(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <label>Quantity (In grams) </label>
                    <input placeholder='Quantity (In grams)' onChange={(e) => setQuantity(e.target.value)}/>
                </FormGroup>
                <Button onClick={handleSubmit} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}
