import express from 'express';
import User from './Models/user';
import ParseErrors from '../utils/parseErrors';

const router = express.Router();

router.post('/signup', (req, res) => {
  const { email, password } = req.body.user;
  const user = new User({ email });
  user.setPassword(password);
  user
    .save()
    .then(() => res.json({ user: user.toAuthJson() }))
    .catch(err => res.status(400).json({ errors: ParseErrors(err.errors) }));
});
export default router;
