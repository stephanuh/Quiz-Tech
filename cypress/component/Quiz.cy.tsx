import Quiz from '../../client/src/components/Quiz';

describe('< Quiz />', () => {
    it('render the start button', () => {
        cy.intercept('GET', '/api/questions/random', {
            statusCode: 200,
            body: [{
                "_id": "67d9f8489f6d0a8da7d32ea6",
                "question": "How do you start a comment in Python?",
                "answers": [
                    {
                        "text": "//",
                        "isCorrect": false,
                        "_id": "67d9f8489f6d0a8da7d32ea7"
                    },
                    {
                        "text": "/*",
                        "isCorrect": false,
                        "_id": "67d9f8489f6d0a8da7d32ea8"
                    },
                    {
                        "text": "#",
                        "isCorrect": true,
                        "_id": "67d9f8489f6d0a8da7d32ea9"
                    },
                    {
                        "text": "<!--",
                        "isCorrect": false,
                        "_id": "67d9f8489f6d0a8da7d32eaa"
                    }
                ]
            },
            {
                "_id": "67d9f8489f6d0a8da7d32e92",
                "question": "How do you create a tuple in Python?",
                "answers": [
                    {
                        "text": "[]",
                        "isCorrect": false,
                        "_id": "67d9f8489f6d0a8da7d32e93"
                    },
                    {
                        "text": "{}",
                        "isCorrect": false,
                        "_id": "67d9f8489f6d0a8da7d32e94"
                    },
                    {
                        "text": "()",
                        "isCorrect": true,
                        "_id": "67d9f8489f6d0a8da7d32e95"
                    },
                    {
                        "text": "tuple[]",
                        "isCorrect": false,
                        "_id": "67d9f8489f6d0a8da7d32e96"
                    }
                ]
            }]
        }).as('getQuestions');
        cy.mount(<Quiz />);
        cy.get('.test-btn').click();
        cy.wait('@getQuestions');
        cy.get('.test-card').should('exist');
    })
});