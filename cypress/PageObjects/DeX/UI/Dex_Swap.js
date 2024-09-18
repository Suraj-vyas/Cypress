class Dex_Swap {
    Swap = "//span[text()='Swap']/parent::a";
    Swap_From = "//span[text()='From']";
    Swap_From_btn = "//span[text()='From']/parent::div/button";
    Swap_From_txtBox = "//span[text()='From']/../..//input";
    Swap_To = "//span[text()='To']";
    Swap_To_btn = "//span[text()='To']/parent::div/button";
    Swap_To_txtBox = "//span[text()='From']/../..//input";
    Swap_Connect_Wallet_Btn = "//span[text()='Connect Wallet']/parent::button";
    Swap_Paywith_txtBox="//input[@placeholder='Search Your Coin by Name']";
    Swap_Paywith_txtBox_result="(//ul[@role='listbox']/li)[1]";
    Swap_From_Value_After_result="//span[text()='From']/parent::div/button/span";


    WebElements = {
        Swap: () => cy.xpath(this.Swap),
        Swap_From: () => cy.xpath(this.Swap_From),
        Swap_From_btn: () => cy.xpath(this.Swap_From_btn),
        Swap_From_txtBox: () => cy.xpath(this.Swap_From_txtBox),
        Swap_To: () => cy.xpath(this.Swap_To),
        Swap_To_btn: () => cy.xpath(this.Swap_To_btn),
        Swap_To_txtBox: () => cy.xpath(this.Swap_To_txtBox),
        Swap_Connect_Wallet_Btn: () => cy.xpath(this.Swap_Connect_Wallet_Btn),
        Swap_Paywith_txtBox: () => cy.xpath(this.Swap_Paywith_txtBox),
        Swap_Paywith_txtBox_result: () => cy.xpath(this.Swap_Paywith_txtBox_result),
        Swap_From_Value_After_result: () => cy.xpath(this.Swap_From_Value_After_result)
    }
    From(coinName, amount) {
        this.WebElements.Swap_From().should('exist')
        this.WebElements.Swap_From().should('be.visible')
        this.WebElements.Swap_From_btn().should('exist')
        this.WebElements.Swap_From_btn().should('be.visible')
        this.WebElements.Swap_From_txtBox().should('exist')
        this.WebElements.Swap_From_txtBox().should('be.visible')
        if (typeof (amount) === "number")
            this.WebElements.Swap_From_txtBox().clear().type(amount).should('have.value', amount);
        else {
            const intAmount=parseInt(amount,10)
            if (!isNaN(intAmount))
                this.WebElements.Swap_From_txtBox().clear().type(amount).should('have.value', intAmount);
            else
                this.WebElements.Swap_From_txtBox().clear().type(amount).should('have.value', '');

        }
    }

    To(coinName, amount) {
        this.WebElements.Swap_To().should('exist')
        this.WebElements.Swap_To().should('be.visible')
        this.WebElements.Swap_To_btn().should('exist')
        this.WebElements.Swap_To_btn().should('be.visible')
        this.WebElements.Swap_To_txtBox().should('exist')
        this.WebElements.Swap_To_txtBox().should('be.visible')
        if (typeof (amount) === "number")
            this.WebElements.Swap_To_txtBox().clear().type(amount).should('have.value', amount);
        else {
            const intAmount=parseInt(amount,10)
            if (!isNaN(intAmount))
                this.WebElements.Swap_To_txtBox().clear().type(amount).should('have.value', intAmount);
            else
                this.WebElements.Swap_To_txtBox().clear().type(amount).should('have.value', '');

        }
    }

    validate_From_Coin_Selection(coinName) {
        this.WebElements.Swap_From_btn().click()
        this.WebElements.Swap_Paywith_txtBox().should('exist')
        this.WebElements.Swap_Paywith_txtBox().should('be.visible')
        this.WebElements.Swap_Paywith_txtBox().clear().type(coinName).should('have.value',coinName)
        this.WebElements.Swap_Paywith_txtBox_result().should('exist')
        this.WebElements.Swap_Paywith_txtBox_result().should('be.visible')
        this.WebElements.Swap_Paywith_txtBox_result().click()
        this.WebElements.Swap_From_Value_After_result().should('exist')
        this.WebElements.Swap_From_Value_After_result().should('be.visible')
        this.WebElements.Swap_From_Value_After_result().should('contain.text',coinName)


    }

}

module.exports = new Dex_Swap