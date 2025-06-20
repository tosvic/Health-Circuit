import { body, validationResult } from 'express-validator'

export const createUserValidate = [
    body("fullname").escape().isLength({ min:3 }).withMessage('Name should be more than 3 alphabets').isAlpha().notEmpty().withMessage('Name should only be alphabet'),
    body('email').normalizeEmail().isEmail().notEmpty().withMessage('Invalid email'),
    body('phoneNumber').escape().isNumeric().isLength({ min:11, max:11}).withMessage('Invalid number. Number should be at least 11 digits'),
    body('password').escape().notEmpty().isLength({ min:6 }).withMessage('Password should be minimum of 6').isAlphanumeric().withMessage('Strong password consist of number and alphabet')
]


export const validateResultMiddleware = (req, res, next) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422)
        .json({ 
            status: false, 
            message: 'validation failed', 
            errors: errors.array()})
    }
    next()
}