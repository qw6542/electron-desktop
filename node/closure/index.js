process.env.ENV = 'local';
process.env.MYS1_DB_CONNECTION_STRING = 'postgresql://postgres:password@localhost:5432/pxreturns';
const { restFhirErrorResponse } = require('@bsa/mys-errors');
const { Service} = require('@bsa/mys-px-db-services');



async function run(){
    try{
        const { validator } = new Service(process.env.ENV, process.env.MYS1_DB_CONNECTION_STRING);

        await validator.dmsPostRules('FAAAA', 202001, 'SONX');

    }catch(error){
        console.log(error);

        console.log(restFhirErrorResponse(error));

    }
}

run();