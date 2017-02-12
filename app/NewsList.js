/**
 * Created by kswook on 12/02/2017.
 */

import React from 'react';
import NewsHeader from './NewsHeader.js';
import NewsItem from './NewsItem.js';

export default class NewsList extends React.Component {
    render() {
        return (
            <div className="newsList">
                <NewsHeader />
                <NewsItem />
            </div>
        );
    }
}