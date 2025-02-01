import { HTTP_STATUS_CODE, HTTP_STATUS_CONSTANT, HttpStatusCodes } from "../types/http-status";

const httpStatusCodes:HttpStatusCodes = {
    "CONTINUE": {
        "code": 100,
        "text": "Continue"
    },
    "SWITCHING_PROTOCOLS": {
        "code": 101,
        "text": "Switching Protocols"
    },
    "PROCESSING": {
        "code": 102,
        "text": "Processing"
    },
    "OK": {
        "code": 200,
        "text": "OK"
    },
    "CREATED": {
        "code": 201,
        "text": "Created"
    },
    "ACCEPTED": {
        "code": 202,
        "text": "Accepted"
    },
    "NON_AUTHORITATIVE_INFORMATION": {
        "code": 203,
        "text": "Non Authoritative Information"
    },
    "NO_CONTENT": {
        "code": 204,
        "text": "No Content"
    },
    "RESET_CONTENT": {
        "code": 205,
        "text": "Reset Content"
    },
    "PARTIAL_CONTENT": {
        "code": 206,
        "text": "Partial Content"
    },
    "MULTI_STATUS": {
        "code": 207,
        "text": "Multi-Status"
    },
    "MULTIPLE_CHOICES": {
        "code": 300,
        "text": "Multiple Choices"
    },
    "MOVED_PERMANENTLY": {
        "code": 301,
        "text": "Moved Permanently"
    },
    "MOVED_TEMPORARILY": {
        "code": 302,
        "text": "Moved Temporarily"
    },
    "SEE_OTHER": {
        "code": 303,
        "text": "See Other"
    },
    "NOT_MODIFIED": {
        "code": 304,
        "text": "Not Modified"
    },
    "USE_PROXY": {
        "code": 305,
        "text": "Use Proxy"
    },
    "TEMPORARY_REDIRECT": {
        "code": 307,
        "text": "Temporary Redirect"
    },
    "PERMANENT_REDIRECT": {
        "code": 308,
        "text": "Permanent Redirect"
    },
    "BAD_REQUEST": {
        "code": 400,
        "text": "Bad Request"
    },
    "UNAUTHORIZED": {
        "code": 401,
        "text": "Unauthorized"
    },
    "PAYMENT_REQUIRED": {
        "code": 402,
        "text": "Payment Required"
    },
    "FORBIDDEN": {
        "code": 403,
        "text": "Forbidden"
    },
    "NOT_FOUND": {
        "code": 404,
        "text": "Not Found"
    },
    "METHOD_NOT_ALLOWED": {
        "code": 405,
        "text": "Method Not Allowed"
    },
    "NOT_ACCEPTABLE": {
        "code": 406,
        "text": "Not Acceptable"
    },
    "PROXY_AUTHENTICATION_REQUIRED": {
        "code": 407,
        "text": "Proxy Authentication Required"
    },
    "REQUEST_TIMEOUT": {
        "code": 408,
        "text": "Request Timeout"
    },
    "CONFLICT": {
        "code": 409,
        "text": "Conflict"
    },
    "GONE": {
        "code": 410,
        "text": "Gone"
    },
    "LENGTH_REQUIRED": {
        "code": 411,
        "text": "Length Required"
    },
    "PRECONDITION_FAILED": {
        "code": 412,
        "text": "Precondition Failed"
    },
    "REQUEST_TOO_LONG": {
        "code": 413,
        "text": "Request Entity Too Large"
    },
    "REQUEST_URI_TOO_LONG": {
        "code": 414,
        "text": "Request-URI Too Long"
    },
    "UNSUPPORTED_MEDIA_TYPE": {
        "code": 415,
        "text": "Unsupported Media Type"
    },
    "REQUESTED_RANGE_NOT_SATISFIABLE": {
        "code": 416,
        "text": "Requested Range Not Satisfiable"
    },
    "EXPECTATION_FAILED": {
        "code": 417,
        "text": "Expectation Failed"
    },
    "IM_A_TEAPOT": {
        "code": 418,
        "text": "I'm a teapot"
    },
    "INSUFFICIENT_SPACE_ON_RESOURCE": {
        "code": 419,
        "text": "Insufficient Space on Resource"
    },
    "METHOD_FAILURE": {
        "code": 420,
        "text": "Method Failure"
    },
    "MISDIRECTED_REQUEST": {
        "code": 421,
        "text": "Misdirected Request"
    },
    "UNPROCESSABLE_ENTITY": {
        "code": 422,
        "text": "Unprocessable Entity"
    },
    "LOCKED": {
        "code": 423,
        "text": "Locked"
    },
    "FAILED_DEPENDENCY": {
        "code": 424,
        "text": "Failed Dependency"
    },
    "PRECONDITION_REQUIRED": {
        "code": 428,
        "text": "Precondition Required"
    },
    "TOO_MANY_REQUESTS": {
        "code": 429,
        "text": "Too Many Requests"
    },
    "REQUEST_HEADER_FIELDS_TOO_LARGE": {
        "code": 431,
        "text": "Request Header Fields Too Large"
    },
    "UNAVAILABLE_FOR_LEGAL_REASONS": {
        "code": 451,
        "text": "Unavailable For Legal Reasons"
    },
    "INTERNAL_SERVER_ERROR": {
        "code": 500,
        "text": "Internal Server Error"
    },
    "NOT_IMPLEMENTED": {
        "code": 501,
        "text": "Not Implemented"
    },
    "BAD_GATEWAY": {
        "code": 502,
        "text": "Bad Gateway"
    },
    "SERVICE_UNAVAILABLE": {
        "code": 503,
        "text": "Service Unavailable"
    },
    "GATEWAY_TIMEOUT": {
        "code": 504,
        "text": "Gateway Timeout"
    },
    "HTTP_VERSION_NOT_SUPPORTED": {
        "code": 505,
        "text": "HTTP Version Not Supported"
    },
    "INSUFFICIENT_STORAGE": {
        "code": 507,
        "text": "Insufficient Storage"
    },
    "NETWORK_AUTHENTICATION_REQUIRED": {
        "code": 511,
        "text": "Network Authentication Required"
    }
};

export class HttpStatusCodeUtils {
    /**
     * Get the status code for a given constant.
     * @param constant The HTTP status constant, e.g., "NOT_FOUND".
     * @returns The associated status code or null if the constant is not found.
     */
    public static getCodeByConstant(constant: HTTP_STATUS_CONSTANT): HTTP_STATUS_CODE | null {
        return httpStatusCodes[constant]?.code || null;
    }

    /**
     * Get the status constant for a given code.
     * @param code The HTTP status code, e.g., 404.
     * @returns The associated status constant or null if the code is not found.
     */
    public static getConstantByCode(code: HTTP_STATUS_CODE): HTTP_STATUS_CONSTANT | null {
        return Object.keys(httpStatusCodes).find(constant => httpStatusCodes[constant as HTTP_STATUS_CONSTANT].code === code) as HTTP_STATUS_CONSTANT || null;
    }

    /**
     * Get the status text by either its code or constant.
     * @param codeOrConstant The HTTP status code (e.g., 404) or constant (e.g., "NOT_FOUND").
     * @returns The associated status text or null if the code/constant is not found.
     */
    public static getText(codeOrConstant: HTTP_STATUS_CODE | HTTP_STATUS_CONSTANT): string | null {
        if (typeof codeOrConstant === "string") {
            return httpStatusCodes[codeOrConstant]?.text || null;
        }
        const constant = HttpStatusCodeUtils.getConstantByCode(codeOrConstant);
        return constant ? httpStatusCodes[constant].text : null;
    }
}

export default httpStatusCodes;