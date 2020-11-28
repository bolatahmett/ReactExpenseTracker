import React, { useContext } from "react";
import ListGroup from "reactstrap/lib/ListGroup";
import ListGroupItem from "reactstrap/lib/ListGroupItem";
import { ExpenseContext } from "../GlobalState";
import { Button } from "reactstrap";

export const List = (props) => {

    const [state, dispatch] = useContext(ExpenseContext);

    const handleRemove = (id) => {
        dispatch({
            type: "REMOVE_EXPENSE",
            payload: { id: id }
        })
    };

    const content = state &&
        <ListGroup>
            {
                state.expenses.map((item) => {
                    return <ListGroupItem id={item.id}>
                        {item.name} - ${item.amount} {<Button color={"primary"} label={"Remove"} onClick={() => handleRemove(item.id)}>-</Button>}
                    </ListGroupItem>
                })
            }
        </ListGroup>
    return (<>
        {content}
    </>);
}