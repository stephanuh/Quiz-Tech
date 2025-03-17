import Quiz from '../../client/src/components/Quiz';

describe('< Quiz />', () => {
    it('render the start button', () => {
        cy.intercept('GET', '/api/questions/random', {
            statusCode: 200,
            body: []//continue for later
        }).as('getQuestions');
        cy.mount(<Quiz />)
        cy.get('.test-btn').click();
        cy.wait('@getQuestions');
        cy.get('test-card').should('exist');
    });
});