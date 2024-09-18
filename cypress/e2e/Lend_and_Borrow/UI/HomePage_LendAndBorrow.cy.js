import LendAndBorrow from "../../../PageObjects/Lend_and_Borrow/UI/LendAndBorrow";

describe('Lend And Borrow Homepage Validation', () => {
    let data


    beforeEach('Navigation to Application', () => {
        cy.fixture('appData.json').then((x) => {
            data = x
        cy.visit(data.appURL)

        })

    });

    it('Lend And Borrow title Validation', () => {

        LendAndBorrow.validate_title();

    });

    it('Lend And Borrow Image Validation', () => {

        LendAndBorrow.validate_img();

    });

    it('Lend And Borrow button Validation', () => {

        LendAndBorrow.validate_tradeNowBtn();

    });

});