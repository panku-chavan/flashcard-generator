import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";


// NavBar Route
jest.mock("./Components/1-NavBar/NavBar", () => {
    return {
        NavBar: () => <div data-testid='navbar'>Create Flashcard</div>
    };
})
test('When user is in index route(/) then render NavBar component', () => {
    window.history.pushState({}, "", "/");
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
});


//CreateFlashCard Route
jest.mock("./Components/2-CreateFlashcard/CreateFlashCard", () => {
    return {
        CreateFlashCard: () => <div data-testid='create-flashcard'>Create Flashcard</div>
    };
})
test('When user is in index route(/) then render CreateFlashCard component', () => {
    window.history.pushState({}, "", "/");
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByTestId('create-flashcard')).toBeInTheDocument();
});

//MyFlashcard Route
jest.mock("./Components/3-MyFlashcard/MyFlashCard", () => {
    return {
        MyFlashCard: () => <div data-testid='my-flashcard'>My Flashcard</div>
    };
})

test('When user is in ("/myflashcard") route then render MyFlashCard component', () => {
    window.history.pushState({}, "", "/myflashcard");
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByTestId('my-flashcard')).toBeInTheDocument();
});



//FlashCardDetails routes
jest.mock("./Components/4-Details/FlashCardDetails", () => {
    return {
        FlashCardDetails: () => <div data-testid='flashcard-details'>My Flashcard</div>
    };
})

test('When user is in ("/flascard-details/:groupId") route then render MyFlashCard component', () => {
    window.history.pushState({}, "", "/flascard-details/:groupId");
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
    expect(screen.getByTestId('flashcard-details')).toBeInTheDocument();
});