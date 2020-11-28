import React, { useContext, useState } from "react";
import { ExpenseContext } from "../GlobalState";
import {
    Form as BTForm,
    Label,
    Col,
    Input,
    Button,
    FormGroup
} from "reactstrap";
import { v4 as uuid } from "uuid";

export const Form = (props) => {
    const [state, dispatch] = useContext(ExpenseContext)
    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)


    const handleSubmitForm = (event) => {
        event.preventDefault();

        if (name !== '' && amount > 0) {
            dispatch({
                type: "ADD_EXPENSE",
                payload: { id: uuid(), name, amount }
            })

            setName('');
            setAmount(0);
        } else {
            console.log("Invalid expense name or the amount");
        }
    }

    const handleName = (event) => {
        setName(event.target.value)
    }

    const handleAmount = (event) => {
        setAmount(event.target.value);
    }


    return (<>
        <BTForm style={{ margin: 10 }} onSubmit={handleSubmitForm}>
            <FormGroup className={"row"}>
                <Label for="exampleEmail" sm={2}>
                    Name Of Expense
                </Label>
                <Col sm={4}>
                    <Input
                        type={"text"}
                        name={"name"}
                        id={"expenseName"}
                        placeholder={"NameOfExpense"}
                        value={name}
                        onChange={handleName}
                    >
                    </Input>
                </Col>
            </FormGroup>
            <FormGroup className={"row"}>
                <Label for="exampleEmail" sm={2}>
                    Amount Of Expense
                </Label>
                <Col sm={4}>
                    <Input
                        type={"text"}
                        name={"amount"}
                        id={"expenseAmount"}
                        placeholder={"AmountOfExpense"}
                        value={amount}
                        onChange={handleAmount}
                    >
                    </Input>
                </Col>
            </FormGroup>
            <Button type={"submit"} color={"primary"}>
                Add
            </Button>
        </BTForm>
    </>);
}