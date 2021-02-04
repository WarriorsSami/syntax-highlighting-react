import Highlight from 'react-highlight';
import {FormLabel, FormGroup} from "react-bootstrap";

export default function CodeForm (props) {

    return (
        <FormGroup>
            <FormLabel>Output Code:</FormLabel>
            <Highlight language={props.language} className="rounded">
                {props.code}
            </Highlight>
        </FormGroup>
    );
}