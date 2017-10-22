import express from 'express';
import User from './Models/user';

const router = express.Router();

router.post('/', (req, res) => {
  const { credentials } = req.body;
  const { email, password } = credentials;
  User.findOne({ email }).then(user => {
    if (user && user.isValidPassword(password))
      res.status(200).json({ user: user.toAuthJson() });
    else res.status(400).json({ errors: { global: 'Invalid Credentials' } });
  });
});
export default router;
