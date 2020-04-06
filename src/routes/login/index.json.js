export function post(req, res, next) {
  req.session.user_data = { user: { email: req.body.email } }
  res.json(req.session.user_data).end()
}