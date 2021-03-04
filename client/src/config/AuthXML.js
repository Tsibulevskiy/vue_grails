export  const XML = function ({email, password}) {
    return `<?xml version="1.0" encoding="UTF-8"?>
            <note>
                <email>${email}</email>
                <password>${password}</password>
            </note>`
}