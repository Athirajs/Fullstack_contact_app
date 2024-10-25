const constants = require("../constants")

const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode ? res.statusCode : 500 ;
    
    let errorTitle = "";

    switch(statusCode) {

        case constants.VALIDATION_ERROR:
            errorTitle = "Validation fields";
            break;
        case constants.NOT_FOUND:
            errorTitle = "Not Found "
            break;
        case constants.UNAUTHORIZED:
            errorTitle =" Unauthorized"
            break;
        case constants.FORBIDDEN:
            errorTitle = " Forbidden"
            break;
        case constants.SERVER_ERROR:
            errorTitle = " Server Error"
            break;
        default:
            errorTitle= "Unknown Error"
            break;
    }
     res.status(statusCode).json({
        title: errorTitle,
        messagae: err.messagae,
        stackTrace: err.stack
     })

}



module.exports = errorHandler