class createError extends Error{
    constructor(message, statusCode){
        super(message);

        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = createError;

// SECRET_KEY = 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
// DATABASE_URL = mongodb+srv://sankaranarayananit002:FCsR1J3kHd4dYtmW@vsbec-vechile.zinj7.mongodb.net/
 