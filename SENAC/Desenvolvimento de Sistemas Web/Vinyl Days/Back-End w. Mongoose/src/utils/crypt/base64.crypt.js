import * as JSBase64 from "js-base64";

const Base64 = {
    encode: (decodedString) => {
        return JSBase64.encode(decodedString, true);
    },
    decode: (encodedString) => {
        return JSBase64.decode(encodedString);
    },
    matches: (decodedString, encodedString) => {
        const decodedStringByBase64 = JSBase64.decode(encodedString);

        if(decodedString === decodedStringByBase64)
            return true;
        else
            return false;
    }
}

export { Base64 };