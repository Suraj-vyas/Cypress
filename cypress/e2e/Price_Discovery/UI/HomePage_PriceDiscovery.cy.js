import PriceDiscovery from "../../../PageObjects/Price_Discovery/UI/PriceDiscovery";

describe('Price Discovery HomePage Validation', () => {
    let data


    beforeEach('Navigation to Application', () => {
        cy.fixture('appData.json').then((x) => {
            data = x
        cy.visit(data.appURL)

        })

    });

    it('Price Discovery title Validation', () => {

        PriceDiscovery.validate_title();

    });

    it('Price Discovery Image Validation', () => {

        PriceDiscovery.validate_img();

    });

    it('Price Discovery button Validation', () => {

        PriceDiscovery.validate_tradeNowBtn();

    });

});