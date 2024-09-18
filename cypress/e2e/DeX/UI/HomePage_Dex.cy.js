import DeX_HomePage from "../../../PageObjects/DeX/UI/DeX_HomePage";

describe('DeX Homepage Validation', () => {
    let data

    beforeEach('Navigation to Application', () => {
        cy.fixture('appData.json').then((x) => {
            data = x
        cy.visit(data.appURL)
        })

    });

    it('DeX title Validation', () => {

        DeX_HomePage.validate_title();

    });

    it('DeX Image Validation', () => {

        DeX_HomePage.validate_img();

    });

    it('DeX button Validation', () => {

        DeX_HomePage.validate_tradeNowBtn();

    });

});