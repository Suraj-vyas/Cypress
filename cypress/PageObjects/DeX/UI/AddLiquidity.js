class Dex_AddLiquidity {
    Dex_block = "//p[text()='Dex']/parent::div";
    Dex_title = "//p[text()='Dex']";
    Dex_img = "//img[@alt='Dex']";
    Dex_img_scr = "/_next/static/media/Dex.39183226.svg";
    Dex_TradeNow_btn = "//p[text()='Dex']/parent::div//div[text()='TRADE NOW']";

    WebElements = {
        Dex_block: () => cy.xpath(this.Dex_block),
        Dex_title: () => cy.xpath(this.Dex_title),
        Dex_img: () => cy.xpath(this.Dex_img),
        Dex_TradeNow_btn: () => cy.xpath(this.Dex_TradeNow_btn)
    }
    validate_Block() {
        this.WebElements.Dex_block().should('exist')
        this.WebElements.Dex_block().should('be.visible')
    }

    validate_title() {
        this.WebElements.Dex_title().should('exist')
        this.WebElements.Dex_title().should('be.visible')
        this.WebElements.Dex_title().should('have.text', 'Dex')
    }

    validate_img() {
        this.WebElements.Dex_img().should('exist')
        this.WebElements.Dex_img().should('be.visible')
        this.WebElements.Dex_img().should('have.attr', 'src')
        this.WebElements.Dex_img().invoke('attr', 'src').should('equal', this.Dex_img_scr)
    }
    validate_tradeNowBtn() {
        this.WebElements.Dex_TradeNow_btn().should('exist')
        this.WebElements.Dex_TradeNow_btn().should('be.visible')
        this.WebElements.Dex_TradeNow_btn().should('have.text', 'TRADE NOW')
    }

}
module.exports = new Dex