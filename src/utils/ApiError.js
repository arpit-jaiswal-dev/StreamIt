class ApiError extends Error{ // extends Error means ApiError inherits all the features of JavaScript's built-in Error class
    constructor(
       statusCode,
       message="Something went wrong",
       errors = [],
       statck = ""

    ){
        super(message) 
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(statck){
            this.stack = statck
        } else{
            Error.captureStackTrace(this ,this.
                constructor)
        }
    }
}

export {ApiError}