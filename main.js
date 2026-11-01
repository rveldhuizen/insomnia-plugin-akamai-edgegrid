const EdgeGrid = require('akamai-edgegrid');

module.exports.requestHooks = [
    context => {
        // Use dummy header to trigger generation of Akamai API Authorization header
        if (context.request.hasHeader('EdgeAuthorization')) {
            context.request.removeHeader('EdgeAuthorization');

            // Get edgerc settings from environment
            const clientToken = context.request.getEnvironmentVariable("client_token");
            const clientSecret = context.request.getEnvironmentVariable("client_secret");
            const accessToken = context.request.getEnvironmentVariable("access_token");
            const baseUri = "https://" + context.request.getEnvironmentVariable("host") + "/";

            const headers = context.request.getHeaders();
            
            // Generate headers with akamai-edgegrid
            const eg = new EdgeGrid(clientToken, clientSecret, accessToken, baseUri);
            const parsedUrl = new URL(context.request.getUrl());
            const parameterArray = context.request.getParameters();
            const parameters = parameterArray.reduce( (obj, item) => Object.assign(obj, { [item.name]: item.value }), {});
            eg.auth({
                path: parsedUrl.pathname,
                method: context.request.getMethod(),
                headers: headers,
                qs: parameters,
                body: context.request.getBodyText()
            });

            // Set header on current request
            context.request.setHeader('Authorization', eg.request.headers.Authorization);
        }
    }
]
