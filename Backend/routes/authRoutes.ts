import { Router } from 'express';
import passport from 'passport';

const router = Router();

// Redirect user to Google
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Callback URL after login
router.get(
    '/google/callback',
    passport.authenticate('google', {
        successRedirect: 'http://localhost:5173/dashboard',
        failureRedirect: '/',
    })
);

// Logout route
router.get('/logout', (req, res) => {
    req.logout(() => {
        res.redirect('http://localhost:5173');
    });
});

// Get current user info
router.get('/user', (req, res) => {
    res.send(req.user);
});

export default router;
