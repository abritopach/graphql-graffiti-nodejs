// Import express and graphQHTTP .

import express from 'express';
import graffiti from '@risingstack/graffiti';
import { json } from 'body-parser';

import { serverConfig } from '../config/config';

import schema from '../graphql';

const app = express();

app.use(json());
app.use(graffiti.express({schema}));

// Start server.
var server = app.listen(serverConfig.port, () => {
    console.log('Listening at port', server.address().port);
});
