import { Given, When, Then, And, Before } from 'cypress-cucumber-preprocessor/steps'
import Payee from "../page_objects/payeeManagement_page"


Before({ tags: "@NavigatesToAddPayee" }, () => {
    Payee.navigatesToPayeePage()
    Payee.clickAddBuutonOnPayeePage()
});

Given('User has navigated to the client page', () => {
    Payee.navigatesToClientPage()
});

When('Click on `Payees` from `Menu` drop down', () => {
    Payee.clickOnMenuDropDown()
    Payee.clickOnPayee()
})

Then('{string} page should load', (pageName) => {
    Payee.verifyPayeePage(pageName)
})

Given('User has navigated to payee page', () => {
    Payee.navigatesToPayeePage()
})

When('Upon clicking add button enter mandatory payee details of payee name {string},account number with bank {string},branch {string},account {string},suffix {string} codes in payee form', (name, bank, branch, account, suffix) => {
    Payee.clickAddBuutonOnPayeePage()
    Payee.fillMandatoryPayeeDetails(name, bank, branch, account, suffix)
})

And('Click on add button on payee form', () => {
    Payee.clickOnAddButton()
})

Then('Verify {string} message displayed', (payeeAddedMessage) => {
    Payee.verifyPageeIsCreated(payeeAddedMessage)
})

And('Verify payee {string} added to the list', (payeeName) => {
    Payee.verifyPayeeAddedToList(payeeName)
})

When('Click on add button on payee page', () => {
    Payee.clickAddBuutonOnPayeePage()
})

Then('Verify the error {string}', (payeeNameError) => {
    Payee.verifyPayeeNameErrorDiaplyed(payeeNameError)
})

Given('{string} error has displayed', (payeeNameError) => {
    Payee.clickOnAddButton()
    Payee.verifyPayeeNameErrorDiaplyed(payeeNameError)
})

When('Populate mandatory fields of payee name {string},account number with bank {string},branch {string},account {string},suffix {string} codes', (name, bank, branch, account, suffix) => {
    Payee.fillMandatoryPayeeDetails(name, bank, branch, account, suffix);
})

Then('Verify the payee name error disapeared', () => {
    Payee.verifyPayeeNameErrorDisapeared()
})

Given('Payee name {string},account number with bank {string},branch {string},account {string},suffix {string} codes have added', (name, bank, branch, account, suffix) => {
    Payee.fillMandatoryPayeeDetails(name, bank, branch, account, suffix)
    Payee.clickOnAddButton()
})

And('Payee list has sorted in ascending order by default', () => {
    Payee.payeeAsendingSort()
})

When('Click Name header', () => {
    Payee.clickOnNameHeader()
})

Then('Verify list is sorted in descending order', () => {
    Payee.payeeDescSort()
})

Given('User has navigated to payement page', () => {
    Payee.navigatesToClientPage()
    Payee.clickOnMenuDropDown()
    Payee.clickOnPayOrTransferIcon()
})

When('Transfer {string} dollars from {string} account to {string} account', (amount, accType1, accType2) => {
    Payee.clickOnFromIconOnPaymentModal()
    Payee.serachEverydayAccount(accType1)
    Payee.selectEverydayAccount()
    Payee.clickOnToIconOnPaymentModal()
    Payee.serachBillsAccount(accType2)
    Payee.selectBillsAccount()
    Payee.enterAmount(amount)
    Payee.clickTransferButton()
})

And('{string} message displayed', (transferMessage) => {
    Payee.transferredMessage(transferMessage)
})

Then('Verify the current balance of Everyday account {string} and Bills account {string} are correct', (everydayBalance, billBalance) => {
    Payee.verifyBalanceEverydayAccount(everydayBalance)
    Payee.verifyBalanceBillsAccount(billBalance)
})