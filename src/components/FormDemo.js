import { useState } from 'react';
import {Col, Row, FormControl, FormGroup, FormLabel, Container, Jumbotron, InputGroup} from 'react-bootstrap';

import CodeMirror from "./highlighter";

export default function FormDemo () {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('');
    const [style, setStyle] = useState(1);

    const [code1, setCode1] = useState('');
    const [language1, setLanguage1] = useState('');
    const [style1, setStyle1] = useState(1);

    return (
       <Jumbotron fluid>
           <Container className="justify-content-center">
               <Row>
                   <Col>
                       <h1>Syntax Highlighting 1</h1>

                       <div>
                           <br />
                           <InputGroup size="sm" className="mb-3">
                               <InputGroup.Prepend>
                                   <InputGroup.Text id="language">Language</InputGroup.Text>
                               </InputGroup.Prepend>

                               <FormControl
                                   value={language}
                                   onChange={(e) => setLanguage(e.target.value)}
                                   aria-label="Language"
                               />
                           </InputGroup>

                           <br />
                           <InputGroup size="sm" className="mb-3">
                               <InputGroup.Prepend>
                                   <InputGroup.Text id="style">Style</InputGroup.Text>
                               </InputGroup.Prepend>

                               <FormControl
                                   value={style}
                                   onChange={(e) => setStyle(Number(e.target.value))}
                                   aria-label="Style"
                               />
                           </InputGroup>

                           <br />
                           <FormGroup>
                               <FormLabel>Code:</FormLabel>

                               <FormControl
                                   as="textarea"
                                   rows={6}
                                   value={code}
                                   onChange={(e) => setCode(e.target.value)}
                                   aria-label="Code"
                               />
                           </FormGroup>

                           <br />
                           <CodeMirror title={1} style={style} language={language} code={code}/>
                       </div>
                   </Col>


                   <Col>
                       <h1>Syntax Highlighting 2</h1>

                       <div>
                           <br />
                           <InputGroup size="sm" className="mb-3">
                               <InputGroup.Prepend>
                                   <InputGroup.Text id="language">Language</InputGroup.Text>
                               </InputGroup.Prepend>

                               <FormControl
                                   value={language1}
                                   onChange={(e) => setLanguage1(e.target.value)}
                                   aria-label="Language"
                               />
                           </InputGroup>

                           <br />
                           <InputGroup size="sm" className="mb-3">
                               <InputGroup.Prepend>
                                   <InputGroup.Text id="style">Style</InputGroup.Text>
                               </InputGroup.Prepend>

                               <FormControl
                                   value={style1}
                                   onChange={(e) => setStyle1(Number(e.target.value))}
                                   aria-label="Style"
                               />
                           </InputGroup>

                           <br />
                           <FormGroup>
                               <FormLabel>Code:</FormLabel>

                               <FormControl
                                   as="textarea"
                                   rows={6}
                                   value={code1}
                                   onChange={(e) => setCode1(e.target.value)}
                                   aria-label="Code"
                               />
                           </FormGroup>

                           <br />
                           <CodeMirror title={1} style={style1} language={language1} code={code1}/>
                       </div>
                   </Col>
               </Row>
           </Container>
       </Jumbotron>
    );
}