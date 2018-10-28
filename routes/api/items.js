const express = require("express");
const router = express.Router();
const passport = require('passport');
const bcrypt = require("bcrypt");
const Employee = require("../../models/EmployeeSchema.js");
const Jobpost = require("../../models/JobpostSchema.js");
const Register = require("../../models/Register.js");
const SeekerProvider = require("../../models/SeekerProviderSchema.js");

router.post("/register", (req, res) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(req.body.password, salt);

    Register({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        userType: req.body.userType,
        password: hash
    })
        .save()
        .then(item => res.json(item));
});

router.post("/login", passport.authenticate('local', {
    failureRedirect: '/api/login',
}), (req, res) => {
    res.json({
        uaid: req.user._id,
        firstName: req.user.firstName,
        lastName: req.user.lastName,
        userType: req.user.userType,
        username: req.user.username
    });
},
);
router.get('/logout', function (req, res) {
    req.logout();
    res.json({ success: 'You are successfully logged out' });
});
router.post("/profile", (req, res) => {
    if (req.isAuthenticated()) {
        Employee({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            gender: req.body.gender,
            date: req.body.date,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            alternatePhoneNumber: req.body.alternatePhoneNumber,
            address: req.body.address,
            grade: req.body.grade,
            school: req.body.school,
            education: req.body.education,
            field: req.body.field,
            typeOfJob: req.body.typeOfJob,
            experience: req.body.experience,
            avgSalary: req.body.avgSalary,
        })
            .save()
            .then(item => res.json(item));
    } else {
        res.status(401).json({ error: 'Please login to continue' });
    }
});

router.post("/jobpost", (req, res) => {
    Jobpost({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        contactPersonName: req.body.contactPersonName,
        companyName: req.body.companyName,
        jobTitle: req.body.jobTitle,
        vacancy: req.body.vacancy,
        jobDescription: req.body.jobDescription,
        minSalary: req.body.minSalary,
        maxSalary: req.body.maxSalary,
        city: req.body.city,
        locality: req.body.locality,
        experience: req.body.experience,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
    })
        .save()
        .then(item => res.json(item));
});
router.post("/applied", (req, res) => {
    SeekerProvider({
        seekerId: req.body.seekerId,
        providerId: req.body.providerId
    })
        .save().then(item => res.json(item));
});

router.post("/getuser/profile", (req, res) => {
    Employee.findOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.username,
    },
        (err, item) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(item)
        })
});
router.post("/getprovider/profile", (req, res) => {
    Jobpost.findOne({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.username
    },
        (err, item) => {
            if (err) return res.status(400).send(err)
            return res.status(200).send(item)
        })
});
router.post("/job/post/history", (req, res) => {
    Jobpost.find({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.username
    }).then(item => res.send({ item }));
});

router.get("/employee", (req, res) => {
    Employee.find().limit(10).then(item => res.send({ item }));
})

router.get("/getjob", (req, res) => {
    Jobpost.find().limit(10).then(item => res.send({ item }));
});

module.exports = router;
