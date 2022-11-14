import Joi from "joi";

export const NewUserSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages({
      "string.email": "Correo electronico inválido",
      "string.empty": "Email requerido",
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
    .required()
    .messages({
      "string.pattern.base":
        "Contraseña inválida (6-30 cáracteres de longitud)",
      "string.empty": "Contraseña requerida",
    }),
  username: Joi.string().alphanum().min(4).max(30).required().messages({
    "string.empty": "Nombre de usuario requerido",
    "string.alphanum": "Nombre de usuario inválido (sólo letras y números)",
    "string.pattern.base":
      "Nombre de usuario inválido (4-30 cáracteres de longitud)",
    "string.min": "Nombre de usuario inválido (4-30 cáracteres de longitud)",
    "string.max": "Nombre de usuario inválido (4-30 cáracteres de longitud)",
  }),
});

export const UserSchema = Joi.object({
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    })
    .required()
    .messages({
      "string.email": "Ingreasa un correo electronico valido",
      "string.empty": "LLena el campo email",
    }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{6,30}$"))
    .required()
    .messages({
      "string.pattern.base": "Password con mas de 6-30 caracteres",
      "string.empty": "LLena el campo password",
    }),
});
