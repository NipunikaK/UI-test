Feature: Payee Management

    Scenario: TC_01 Verify user can navigate to Payees page using the navigation menu
        Given User has navigated to the client page
        When Click on `Payees` from `Menu` drop down
        Then "Payee" page should load

    Scenario: TC_02 Verify user can add new payee in the Payees page
        Given User has navigated to payee page
        When Upon clicking add button enter mandatory payee details of payee name "Ann",account number with bank "11",branch "2222",account "3333333",suffix "00" codes in payee form
        And Click on add button on payee form
        Then Verify "Payee added" message displayed
        And Verify payee "Ann" added to the list

    Scenario: TC_03_1 Verify payee name is a required field
        Given User has navigated to payee page
        When Click on add button on payee page
        And Click on add button on payee form
        Then Verify the error "Payee Name is a required field. Please complete to continue."

    @NavigatesToAddPayee
    Scenario: TC_03_2 Verify payee name error disapeared after adding a name
        Given "Payee Name is a required field. Please complete to continue." error has displayed
        When Populate mandatory fields of payee name "Ann",account number with bank "11",branch "2222",account "3333333",suffix "00" codes
        Then Verify the payee name error disapeared

    Scenario: TC_04_1 Verify that payees are sorted ascending order by default
        Given User has navigated to payee page
        When Upon clicking add button enter mandatory payee details of payee name "Ann",account number with bank "11",branch "2222",account "3333333",suffix "00" codes in payee form
        Then Payee list has sorted in ascending order by default

    @NavigatesToAddPayee
    Scenario: TC_04_02 Verify that payees can be sorted by name
        Given Payee name "Ann",account number with bank "11",branch "2222",account "3333333",suffix "00" codes have added
        When Click Name header
        Then Verify list is sorted in descending order

    Scenario: TC_05 Verify user can transfer money in payment page
        Given User has navigated to payement page
        When Transfer "500" dollars from "Everyday" account to "Bills" account
        And "Transfer successful" message displayed
        Then Verify the current balance of Everyday account "2,000.00" and Bills account "920.00" are correct

