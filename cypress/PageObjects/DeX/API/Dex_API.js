class Dex_API {

    Validate_GET_API(EndPoint, Params, Headers) {
        return cy.request({
            method: 'GET',
            url: EndPoint,
            qs: Params,
            headers: Headers,
            failOnStatusCode: false
        })
    }

    Raise_JiraIssue(Summary) {
        cy.request({
            method: 'POST',
            url: 'https://suraj-vyas.atlassian.net/rest/api/3/issue',
            auth: {
                // Pls use ur JIRA Usernmae
                user: 'username',
                //Pls pass ur JIRA API Token
                pass: 'API Token'
            },
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'user-agent': 'axios/0.27.2'
            },
            body: {
                "fields": {
                    "project": {
                        "key": "EN"
                    },
                    "summary": 'DeX API is working as expected Getting : ' + Summary.StatusCode+ ' Status Code for endpoint : '+Summary.EndPoint,
                    "issuetype": {
                        "name": "Task"
                    }
                }
            },
            failOnStatusCode: false
        })
    }

}

module.exports = new Dex_API