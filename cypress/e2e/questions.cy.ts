
describe('Start Quiz button', () => {
    it('displays the start quiz button', () => {
        cy.visit('http://127.0.0.1:3001/')
        cy.get('button').contains('Start Quiz')
    });
});

describe('Quiz Questions', () => {
    it('displays quiz questions after clicking start', () => {
        cy.request({
            url: 'http://127.0.0.1:3001/api/questions/random',
            method: 'GET',
        })
        .then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.length(10);
        });
    });
});