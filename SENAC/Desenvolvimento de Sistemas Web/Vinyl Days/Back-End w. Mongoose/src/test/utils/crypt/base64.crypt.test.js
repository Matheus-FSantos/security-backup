import { Base64 } from "../../../utils/crypt/base64.crypt.js";

describe("Application encryption system testing", () => {
    test("Encode", () => {
        const name = "Matheus Ferreira Santos";
        const encodedName = Base64.encode(name);
        expect(true).toBe(Base64.matches(name, encodedName));
    });

    test("Decode", () => {
        const encoded = "TWF0aGV1cyBGZXJyZWlyYSBTYW50b3M";
        expect(false).toBe(Base64.matches("ASIDUHASD", encoded));
    })
})