import Dex_Swap from "../../../PageObjects/DeX/UI/Dex_Swap";
import DeX_HomePage from "../../../PageObjects/DeX/UI/DeX_HomePage";

describe('DeX Swap page Validation', () => {
    let data

    before(() => {
        cy.fixture('appData.json').then((x) => {
            data = x
        });
    });

    beforeEach('Navigation to Application', () => {
        cy.visit(data.appURL)
        DeX_HomePage.WebElements.Dex_TradeNow_btn().click()

    });

    it("DeX 'from' tab Validation", () => {
        Dex_Swap.From(data.FromCoinName, data.FromAmountValue)

    });

    it("DeX 'to' tab Validation", () => {
        Dex_Swap.To(data.ToCoinName, data.ToAmountValue);

    });

    it("DeX 'From' button Validation", () => {

        Dex_Swap.validate_From_Coin_Selection(data.FromCoinName)

    });

});