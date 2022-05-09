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
    const [foodWeight, setQuantity] = useState('');
    const [feedTime, setTime] = useState(new Date());
    
    const navigate = useNavigate();

    const [error, setError] = React.useState(null);

        async function handleSubmit(event) {
        event.preventDefault();
        let result = await postData();
        navigate('/redirect');
    
    }

    const handleView = () => {
        navigate('/view');
    }
    
    const postData = () => {
        axios.post(`https://feeder-application.herokuapp.com/feeder/save`, {
            food,
            place,
            numberOfDucks,
            foodType,
            foodWeight,
            feedTime
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
                    <DateTimePicker onChange={(e) => setTime(e.target.value)} value={feedTime}/>
                </FormGroup>
                <FormGroup>
                    <label className="text-center">Food </label>
                    <input placeholder='Food' onChange={(e) => setFood(e.target.value)} value={food}/>
                </FormGroup>
                <FormGroup>
                    <label>Place </label>
                    <input placeholder='Place' onChange={(e) => setPlace(e.target.value)} value={place}/>
                </FormGroup>
                <FormGroup>
                    <label>Number Of Ducks </label>
                    <input placeholder='Number Of Ducks' onChange={(e) => setNumber(e.target.value)} value={numberOfDucks}/>
                </FormGroup>
                <FormGroup>
                    <label>Type Of Food </label>
                    <input placeholder='Type Of Food' onChange={(e) => setType(e.target.value)} value={foodType}/>
                </FormGroup>
                <FormGroup>
                    <label>Quantity (In grams) </label>
                    <input placeholder='Quantity (In grams)' onChange={(e) => setQuantity(e.target.value)} value={foodWeight}/>
                </FormGroup>
                <Button color="primary" onClick={handleSubmit} type='submit'>Submit</Button>
                <Button color="secondary" onClick={handleView} type='view'>View</Button>
            </Form>
        </div>
    )
}
