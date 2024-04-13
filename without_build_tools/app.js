/**
 * const example = React.createElement(
 *          html_element,
 *          {attributes},
 *          [content1,content2]
 *      )
 */

import React from 'react';
import ReactDOM from 'react-dom';


const heading = React.createElement(//create element creates an object
    'h1', 
    {id:'heading'},               //we specify the attributes here
    'Without build tools'
);

const parent = React.createElement(
    'div',
    {id:'parent'},
    [React.createElement(
        'div',
        {id:'child'},
        [React.createElement(
            'h2',
            {id:'innerchild'},
            'Iam a inner child'
        ),React.createElement(
            'h3',
            {id:'sibling'},
            'Iam a second child'
        )]
    ),
    React.createElement(
        'div',
        {id:'child2'},
        [React.createElement(
            'h2',
            {id:'innerchild2'},
            'Iam a inner child'
        ),React.createElement(
            'h3',
            {id:'sibling2'},
            'Iam a second child'
        )]
    )]

)
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById('root'));
const content = ReactDOM.createRoot(document.getElementById('content'))
root.render(heading); // render creates the html element from the object and attach it in the browser DOM
content.render(parent)

////// using jsx.........................

const jsxHeading = <h1 id='idName'> jsx example</h1>;
const jsxroot = ReactDOM.createRoot(document.getElementById('jsx'));
jsxroot.render(jsxHeading);

// react functional component
const Title = ()=>(
    <h1>
        component inside component
    </h1>
)
const number = 1000
const FunctionalComponent = () => (
     <div>
        <Title/>
        <Title></Title>
        {Title()}
        <h1>
            {number}
            React component
        </h1>
    </div>
)

const FunctionalRoot = ReactDOM.createRoot(document.getElementById('functionalComp'));
FunctionalRoot.render(<FunctionalComponent/>)