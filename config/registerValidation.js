const Joi = require("joi");

const RegisterValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string()
            .min(6)
            .required()
            .email({
                minDomainSegments: 2,
            })
            .messages({
                "string.empty": "email cannot be an empty field",
                "string.email": "email must be a valid email",
                "string.required": "email is a required field",
            }),
            motPass: Joi.string()
            .min(8)
            .required()
            .pattern(
                new RegExp(
                    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
                )
            )
            .messages({
                "string.min": "Password length must be at least 8 characters",
                "string.pattern.base":
                    "The password must contain at least 1 lowercase, 1 uppercase, 1 numeric character, one special character",
                "string.required": "email is a required field",
            })
           
        
    });
    return schema.validate(data);
    
};

module.exports.RegisterValidation = RegisterValidation;