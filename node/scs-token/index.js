const { sign } = require('jsonwebtoken');
const crypto = require('crypto');
const { getSecretKey } = require('./get-secret-key');

const AZURE_AD_DISPENSER_CODE_PREFIX = 'MYS_External_ODS';

function getToken({odsCode = 'FAAAA', displayName = 'Alice Bob', email = 'example@email.com'}){

const privateKey = crypto.createPrivateKey({
  key: getSecretKey(),
  passphrase: 'changeit'
});

const options =     {
      algorithm: 'RS256',
      audience: 'ef806587-d4c3-4cf7-996b-7fda46d9ffb4',
      issuer:
        `https://login.microsoftonline.com/196c67b1-92a1-40a9-93d7-a43acd2ee314/v2.0`,
    };

const groupData = [{
  displayName: `${AZURE_AD_DISPENSER_CODE_PREFIX}_${odsCode}`,
}];

const payload = {
  displayName,
  email,
  groupData
};
    return  sign(payload,privateKey,options);
}


module.exports = { getToken }

