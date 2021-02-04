import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco, dark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {FormLabel, FormGroup} from "react-bootstrap";

export default function CodeMirror (props) {

    return (
        <FormGroup>
            <FormLabel>Output Code Snippet {props.title}:</FormLabel>
            <SyntaxHighlighter language={props.language} style={props.style === 1 ? docco : dark}>
                {props.code}
            </SyntaxHighlighter>
        </FormGroup>
    );
}
