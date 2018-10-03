import Express from 'express';
import cookieParser from 'cookie-parser';
import cookieSession from 'cookie-session';
import React from 'react';

const app = new Express();
app.use(
  cookieSession({
    maxAge: 2 * 24 * 60 * 60 * 1000,
    keys: 'slhasdkjhfksdhfaaaskdhflsaldahwqeieiqrhwiree'
  })
);