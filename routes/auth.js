const express = require("express");
const passport = require('passport');
const router = express.Router();
const User = require("../models/User");
const { ensureLoggedIn } = require("connect-ensure-login");
const ccxt = require('ccxt');

// Bcrypt to encrypt passwords
const bcrypt = require("bcrypt");
const bcryptSalt = 10;


router.get("/login", (req, res, next) => {
  res.render("auth/login", { "message": req.flash("error") });
});

router.post("/login", passport.authenticate("local", {
  successRedirect: "/",
  failureRedirect: "/auth/login",
  failureFlash: true,
  passReqToCallback: true
}));

router.get("/profile", ensureLoggedIn({redirectTo:'/auth/login'}), (req, res) => {
	res.render("profile", {
		user: req.user,
	})
})

router.get('/:user_id/delete', (req, res, next) => {
 
	User.findByIdAndRemove({ _id: req.params.user_id }, function(error, user) {
		if (error) {
			next(error);
		} else {
			res.redirect('/');
		}
	});
});


router.get('/:user_id/edit', (req, res, next) => {
	User.findById(req.params.user_id, (error, user) => {
		if (error) {
			next(error);
		} else {
			res.render('update', { user });
		}
	});
});

// POST => save updates in the database
router.post('/edit/:user_id', (req, res, next) => {
	User.findById(req.params.user_id, (error, user) => {
		if (error) { 
      next(error); 
    } else {
			user.username = req.body.username;
      user.email = req.body.email;
      
			user.save(error => {
				if (error) { 
					next(error); 
				} else { 
					res.redirect("/auth/profile"); 
				}
			});
		}
	});
});



router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

router.post("/signup", (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password; 
  const email  = req.body.email;

  if (username === "" || password === "") {
    res.render("auth/signup", { message: "Indicate username and password" });
    return;
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.render("auth/signup", { message: "The username already exists" });
      return;
    }

    const salt = bcrypt.genSaltSync(bcryptSalt);
    const hashPass = bcrypt.hashSync(password, salt);

    const newUser = new User({
      username,
      password: hashPass,
      email,
    });

    newUser.save()
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.render("auth/signup", { message: "Something went wrong" });
    })
  });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
