import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>);

    const header = screen.getByText(/Checkout Form/i)
    expect(header).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>);

    const firstName = screen.getByLabelText(/first name/i)
    const lastName = screen.getByLabelText(/last name/i)
    const address = screen.getByLabelText(/address/i)
    const city = screen.getByLabelText(/city/i)
    const state = screen.getByLabelText(/state/i)
    const zip = screen.getByLabelText(/zip/i)

    fireEvent.change(firstName, {target: {value: 'Daniel'}});
    fireEvent.change(lastName, {target: {value: 'Gipson'}});
    fireEvent.change(address, {target: {value: '1234 Street St.'}});
    fireEvent.change(city, {target: {value: 'CityVille'}});
    fireEvent.change(state, {target: {value: 'Indiana'}});
    fireEvent.change(zip ,{target: {value: '1234'}});
    
    const checkout = screen.getByRole(/button/)

    fireEvent.click(checkout)

    const successMessage = screen.getByTestId('successMessage')
    expect(successMessage).toBeInTheDocument();
});
