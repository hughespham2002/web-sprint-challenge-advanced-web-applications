import React from 'react';
import '@testing-library/jest-dom';

import userEvent from '@testing-library/user-event';


import Article from './Article';
import { render, screen, waitFor } from '@testing-library/react';


const fakeTestArticle = {
id: 'MyTest', 
headline: "headline", 
createdOn: Date.time, 
summary: "summary", 
body: "body",
author: "author" 
}

const fakeTestArticle2 = {
    id: 'MyTest', 
    headline: "headline", 
    createdOn: Date.time, 
    summary: "summary", 
    body: "body" 
    }

test('renders component without errors', ()=> {
    render(<Article article={fakeTestArticle}/>)
});

test('renders headline, author from the article when passed in through props', ()=> {
    render(<Article article={fakeTestArticle}/>)

    const headline = screen.getByText("headline")
    const author = screen.getByText("By author")

    expect(headline).toBeInTheDocument()
    expect(author).toBeInTheDocument()
});

test('renders "Associated Press" when no author is given', ()=> {
    render(<Article article={fakeTestArticle2}/>)

    const author = screen.getByText("By Associated Press")

    expect(author).toBeInTheDocument()
});

test('executes handleDelete when the delete button is pressed', async ()=> {
    const displayFunc = jest.fn()
    
    render(<Article article={fakeTestArticle} handleDelete={displayFunc}/>)

    
    const button = screen.getByTestId("deleteButton")
    userEvent.click(button)

    await waitFor( () => {
        expect(displayFunc).toHaveBeenCalled()
    })

});

// test('renders headline, author from the article when passed in through props', ()=> {
// });

// test('renders "Associated Press" when no author is given', ()=> {
// });

// test('executes handleDelete when the delete button is pressed', ()=> {
// });

//Task List:
//1. Complete all above tests. Create test article data when needed.