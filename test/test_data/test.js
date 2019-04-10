/**
 * Created by jaya on 16/10/15.
 */

let userData = {};

userData = {
    "registerStudent": {
        data: {
            payload: {
                "teacher": "teacher2@example.com",
                "students": [
                    "student6@example.com"
                ]
            },
            method: "post",
            api: "STUDENT_REGISTER",
            meta: {
                code: 204,
                skip: false
            }
        },
        data1: {
            payload: {
                "teacher": "teacher2@example.com",
                "students": [
                    "student16@example.com"
                ]
            },
            method: "post",
            api: "STUDENT_REGISTER",
            meta: {
                code: 404,
                skip: false
            }
        }
    },

    "commonStudent": {
        data: {
            query: {
                "teacher": "teacher2@example.com",
            },
            method: "post",
            api: "COMMON_STUDENT",
            meta: {
                code: 200,
                skip: false
            }
        },
        data1: {
            query: {
                "teacher": ["teacher2@example.com", "teacher1@example.com"]
            },
            method: "post",
            api: "COMMON_STUDENT",
            meta: {
                code: 200,
                skip: false
            }
        }
    },

    "updateSuspend": {
        data: {
            payload: {
                "student": "student2@example.com"
            },
            method: "post",
            api: "SUSPEND_STUDENT",
            meta: {
                code: 204,
                skip: false
            }
        },
        data1: {
            payload: {
                "student": "student222@example.com"
            },
            method: "post",
            api: "SUSPEND_STUDENT",
            meta: {
                code: 404,
                skip: false
            }
        }
    },

    "retrieveNotification": {
        data: {
            payload: {
                "teacher": "teacher1@example.com",
                "notification": "hi @student5@example.com @student1@example.com "
            },
            method: "post",
            api: "UPDATE_SUSPEND",
            meta: {
                code: 200,
                skip: false
            }
        }
    }

}


module.exports = userData;
