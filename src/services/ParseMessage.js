const ParseMessage = {

    parseResponse: function(responseToParse) {
        return JSON.parse(responseToParse);
    },

    extractTransactionInfo: function(response) {
        console.log(this);
        return this.parseResponse(response);
    }


};

export default ParseMessage;
