Feature: Airbnb tests
    Background: 
        Given the user navigates to the home page with cookies handling

    Scenario: Verify Scroller
        Given the user see the 1 scroller
        And the user get the last card
        Then last card is not visible
        When the user scrolls right
        Then last card is visible
        When the user scrolls left
        Then last card is not visible

    Scenario: Verify Card favorite
        Given the user see the 1 scroller
        And the user get the 1 card
        When the user favorites the card
        Then the modal title is 'Увійдіть або зареєструйтеся'
