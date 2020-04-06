import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser'
import * as sapper from '@sapper/server';
import session from 'express-session'

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express()
app.use(compression({ threshold: 0 }))
app.use(sirv('static', { dev }))
app.use(sapper.middleware())
app.use(cookieParser())
app.use(session())

app.listen(PORT, err => {
  if (err) console.log('error', err);
});
