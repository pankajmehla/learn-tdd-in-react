import React from 'react';
import {
    render,
    fireEvent,
    cleanup,
    getByTestId
} from '@testing-library/react';
import NewMessageForm from '../NewMessageForm';

describe('<NewMessageForm />', () => {
    let getByTestId;

    afterEach(cleanup);

    describe('clicking the send button', () => {
        let sendHandler;
        beforeEach(() => {
            sendHandler = jest.fn();
            ({ getByTestId } = render(<NewMessageForm sendHandler={sendHandler} />));

            fireEvent.change(
                getByTestId('messageText'),
                {
                    target: {
                        value: 'New Message'
                    },
                },
            );

            fireEvent.click(getByTestId('sendButton'));
        });

        it('clears the message text', () => {
            expect(getByTestId('messageText').value).toEqual('');
        });

        it('calls the send handler', () => {
            expect(sendHandler).toHaveBeenCalledWith('New Message');
        });
    });

});