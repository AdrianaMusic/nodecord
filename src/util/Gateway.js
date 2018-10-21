const p = require('phin').promisified;

exports.getGatewayBot = async (token) => {
    if (!token || typeof(token) != 'string' || token == '') throw new Error(`INVALID_OR_NO_TOKEN`);

    try {
        const { body } = await p({
            url: '',
            parse: 'json'
        });
    } catch(err) {
        throw new Error(err);
    }
}