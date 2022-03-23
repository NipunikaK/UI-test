class Payee {

    static navigatesToClientPage() {
        cy.visit(Cypress.env('clientUrl'), { headers: { "Accept-Encoding": "gzip, deflate" } })
    }

    static clickOnMenuDropDown() {
        cy.get('.MenuButton').click();
    }

    static clickOnPayee() {
        cy.get('.js-main-menu-payees > .Button').click()
    }

    static verifyPayeePage(pageName) {
        cy.get('.Language__container').contains(pageName).should('be.visible')
    }

    static navigatesToPayeePage() {
        cy.visit(Cypress.env('payeeUrl'), { headers: { "Accept-Encoding": "gzip, deflate" } })
    }

    static clickAddBuutonOnPayeePage() {
        cy.get('.js-add-payee').click()
    }

    static fillMandatoryPayeeDetails(name, bank, branch, account, suffix) {
        cy.get('[id=ComboboxInput-apm-name]').type(name).type('{enter}')
        cy.get('[id=apm-bank]').type(bank)
        cy.get('[id=apm-branch]').type(branch)
        cy.get('[id=apm-account]').type(account)
        cy.get('[id=apm-suffix]').type(suffix)
    }

    static clickOnAddButton() {
        cy.get('.Button--primary').click()
    }

    static verifyPageeIsCreated(payeeAddedMessage) {
        cy.get('.js-notification').contains(payeeAddedMessage).should('be.visible')
    }

    static verifyPayeeAddedToList(payeeName) {
        cy.get('.Avatar > .Avatar-title > .js-payee-name')
            .then(elements => {
                const names = Cypress._.map(elements, e => e.textContent)
                expect(names).to.include(payeeName)
            })
    }

    static verifyPayeeNameErrorDiaplyed(payeeNameError) {
        cy.get('.js-tooltip-text').contains(payeeNameError)
    }

    static verifyPayeeNameErrorDisapeared() {
        cy.get('.error-header').should('not.exist');
    }

    static payeeAsendingSort() {
        cy.get('.Avatar > .Avatar-title > .js-payee-name')
            .then(elements => {
                const names = Cypress._.map(elements, e => e.textContent)
                const sorted = Cypress._.sortBy(names)
                expect(names.length).to.be.greaterThan(0)
                expect(names).to.deep.equal(sorted)
            })
    }

    static clickOnNameHeader() {
        cy.get('.js-payee-name-column > .Language__container').click()
    }

    static payeeDescSort() {
        cy.get('.Avatar > .Avatar-title > .js-payee-name')
            .then(elements => {
                const names = Cypress._.map(elements, e => e.textContent)
                const sorted = Cypress._.sortBy(names)
                expect(names.length).to.be.greaterThan(0)
                expect(names).not.to.equal(sorted)
            })
    }

    static clickOnPayOrTransferIcon() {
        cy.get('.js-main-menu-paytransfer > .Button').click()
    }

    static clickOnFromIconOnPaymentModal() {
        cy.get('[data-testid="from-account-chooser"]').click()
    }

    static serachEverydayAccount(accType1) {
        cy.get('.Input-component-155').type(accType1).type('{enter}')
    }

    static selectEverydayAccount() {
        cy.get('.button-1-1-60').click()
    }

    static clickOnToIconOnPaymentModal() {
        cy.get('[data-testid="to-account-chooser"]').click()
    }

    static serachBillsAccount(accType2) {
        cy.get('.Input-component-213').type(accType2).type('{enter}')
    }

    static selectBillsAccount() {
        cy.get('section > .list-1-1-76 > li > button').click()
    }

    static enterAmount(amount) {
        cy.get('#field-bnz-web-ui-toolkit-9').click().type(amount)
    }

    static clickTransferButton() {
        cy.get('.Button-component-106 > .Button-wrapper-98').click()
    }

    static transferredMessage(transferMessage) {
        cy.get('.message').contains(transferMessage).should('be.visible')
    }

    static verifyBalanceEverydayAccount(everydayBalance) {
        cy.get('#account-ACC-1 > .account-info > .account-balance').contains(everydayBalance).should('be.visible')
    }

    static verifyBalanceBillsAccount(billBalance) {
        cy.get('#account-ACC-5 > .account-info > .account-balance').contains(billBalance).should('be.visible')
    }

}
export default Payee