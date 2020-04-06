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
app.use(express.json())
app.use(cookieParser())

const sess = {
  secret: process.env.SESSION_SECRET || 'QEJWF!.BASLFBGASKJFD134raq3',
  cookie: {},
  resave: false,
  saveUninitialized: false
}
if (app.get('env') === 'production') {
  app.set('trust proxy', 1)
  sess.cookie.secure = true
}
app.use(session(sess))

app.use((req, res, next) => {
  if (typeof req.session.user_data === 'undefined') {
    req.session.user_data = {}
  }
  next()
})

app.use(sapper.middleware({
  session: (req, res) => ({
    user_data: req.session.user_data  // this key in the object needs to match prefetch destructure!
  })
}))

app.listen(PORT, err => {
  if (err) console.log('error', err);
});
