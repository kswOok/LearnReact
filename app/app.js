/**
 * Created by kswook on 12/02/2017.
 */

import $ from 'jquery';
import React from 'react';
import {render} from 'react-dom';
import NewsList from './NewsList.js';
import './app.css'
//
// class HelloWorld extends React.Component {
//     render() {
//         return (
//             <div>Hello World</div>
//         );
//     }
// }

render(<NewsList />, $('#content')[0]);