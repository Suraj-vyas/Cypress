import Dex_API from "../../../PageObjects/DeX/API/Dex_API";

describe('DeX Rest APIs Validation', () => {

    let data
    let JiraSummaryData = {
        EndPoint: "",
        StatusCode: 0
    }

    //Load the fixture file data
    before(() => {
        cy.fixture('appData.json').then((x) => {
            data = x
        })
    });

    it('DeX GET ETH Price API Validation', () => {
        let parameter = {
            'asset': data.FromCoinName
        }
        let header = {
            'x-api-key': data.x_api_key
        }
        let endPoint = data.ApiBaseUrl + '/oracle/getprice'

        //Dex_API.Validate_GET_API(endPoint, parameter, header).its('status').should('equal',200).then((x) => {
        Dex_API.Validate_GET_API(endPoint, parameter, header).then((response) => {
            let statusCode = response.status
            if (statusCode == 200) {
                expect(statusCode).to.equal(200)
                expect(response.body).to.have.property('status')
                expect(response.body).to.have.property('msg')
                expect(response.body).to.have.property('data')
                expect(response.body.data).to.have.property('roundId')
                expect(response.body.data).to.have.property('answer')
                expect(response.body.data).to.have.property('startedAt')
                expect(response.body.data).to.have.property('updatedAt')
                expect(response.body.data).to.have.property('answeredInRound')
            }
            else{
                JiraSummaryData.StatusCode = statusCode
                JiraSummaryData.EndPoint = endPoint
            }

        })
    });

    it('GET DeX Price API Validation ', () => {
        let parameter = {
            'dexId': 1000,
            'chainId': 1,
            'path': '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2, 0x6B175474E89094C44Da98b954EedeAC495271d0F',
            'amountIn': 0
        }
        let header = {
            'x-api-key': data.x_api_key
        }
        let endPoint = data.ApiBaseUrl + '/dex/getprice'

        Dex_API.Validate_GET_API(endPoint, parameter, header).then((response) => {
            let statusCode = response.status
            if (statusCode == 200) {
                expect(statusCode).to.equal(200)
                expect(response.body).to.have.property('status')
                expect(response.body).to.have.property('msg')
                expect(response.body).to.have.property('data')
                expect(response.body.data).to.have.property('amountIn')
                expect(response.body.data).to.have.property('path')
                expect(response.body.data).to.have.property('amountsOut')
            }
            else{
                JiraSummaryData.StatusCode = statusCode
                JiraSummaryData.EndPoint = endPoint
            }
        });
    });

    afterEach(() => {
        if (parseInt(JiraSummaryData.StatusCode) >= 400) {
            if (data.autoDefect) {
                Dex_API.Raise_JiraIssue(JiraSummaryData)
            }
        }
        JiraSummaryData = {
            EndPoint: "",
            StatusCode: 0
        }

    });

});

