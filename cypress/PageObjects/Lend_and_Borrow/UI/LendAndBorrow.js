class LendBorrow {
    //Page Locators
    LendBorrow_block = "//p[text()='Lend & Borrow']/parent::div";
    LendBorrow_title = "//p[text()='Lend & Borrow']";
    LendBorrow_img = "//img[@alt='LendBorrow']";
    LendBorrow_img_scr = "/_next/static/media/LendBorrow.612ab414.svg";
    LendBorrow_TradeNow_btn = "//p[text()='Lend & Borrow']/parent::div//div[text()='TRADE NOW']";

    //Page Objects
    WebElements = {
        LendBorrow_block: () => cy.xpath(this.LendBorrow_block),
        LendBorrow_title: () => cy.xpath(this.LendBorrow_title),
        LanLendBorrow_imgdB_img: () => cy.xpath(this.LendBorrow_img),
        LendBorrow_TradeNow_btn: () => cy.xpath(this.LendBorrow_TradeNow_btn)
    }

    validate_Block() {
        this.WebElements.LendBorrow_block().should('exist')
        this.WebElements.LendBorrow_block().should('be.visible')
    }

    validate_title() {
        this.WebElements.LendBorrow_title().should('exist')
        this.WebElements.LendBorrow_block().should('be.visible')
        this.WebElements.LendBorrow_title().should('have.text','Lend & Borrow')
    }

    validate_img() {
        this.WebElements.LanLendBorrow_imgdB_img().should('exist')
        this.WebElements.LanLendBorrow_imgdB_img().should('be.visible')
        this.WebElements.LanLendBorrow_imgdB_img().should('have.attr','src')
        this.WebElements.LanLendBorrow_imgdB_img().invoke('attr','src').should('equal',this.LendBorrow_img_scr)
    }
    validate_tradeNowBtn() {
        this.WebElements.LendBorrow_TradeNow_btn().should('exist')
        this.WebElements.LendBorrow_TradeNow_btn().should('be.visible')
        this.WebElements.LendBorrow_TradeNow_btn().should('have.text','TRADE NOW')
    }

}

module.exports = new LendBorrow();