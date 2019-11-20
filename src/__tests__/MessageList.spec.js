import React from 'react';
import {
    render,
    cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MessageList from '../MessageList';

describe('<MessageList />', () => {
    afterEach(cleanup);

    describe('on render', () => {
        let data = ['Hello how are you?']
        let getByText, container;
        beforeEach(() => {
            ({ container, getByText } = render(<MessageList data={data} />));
        });

        it('shows the sent messages', () => {
            expect(getByText('Hello how are you?')).toBeInTheDocument();
        })
    })
})