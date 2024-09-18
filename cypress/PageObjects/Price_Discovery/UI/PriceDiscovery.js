class priceDiscovery{
    PD_block="//p[text()='Price Discovery']/parent::div";
    PD_title="//p[text()='Price Discovery']";
    PD_img="//img[@alt='PriceDiscovery']";
    PD_img_src="/_next/static/media/PriceDiscovery.38d0369b.svg";
    PD_TradeNow_btn="//p[text()='Price Discovery']/parent::div//div[text()='TRADE NOW']";

    WebElements = {
        PD_block: () => cy.xpath(this.PD_block),
        PD_title: () => cy.xpath(this.PD_title),
        PD_img: () => cy.xpath(this.PD_img),
        PD_TradeNow_btn: () => cy.xpath(this.PD_TradeNow_btn)
    }

    validate_Block() {
        this.WebElements.PD_block().should('exist')
        this.WebElements.PD_block().should('be.visible')
    }

    validate_title() {
        this.WebElements.PD_title().should('exist')
        this.WebElements.PD_title().should('be.visible')
        this.WebElements.PD_title().should('have.text','Price Discovery')
    }

    validate_img() {
        this.WebElements.PD_img().should('exist')
        this.WebElements.PD_img().should('be.visible')
        this.WebElements.PD_img().should('have.attr','src')
        this.WebElements.PD_img().invoke('attr','src').should('equal',this.PD_img_src)
    }
    validate_tradeNowBtn() {
        this.WebElements.PD_TradeNow_btn().should('exist')
        this.WebElements.PD_TradeNow_btn().should('be.visible')
        this.WebElements.PD_TradeNow_btn().should('have.text','TRADE NOW')
    }

}

module.exports = new priceDiscovery();