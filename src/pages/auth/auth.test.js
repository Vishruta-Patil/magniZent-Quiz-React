import firebase from "../../firebase-config"

jest.mock('../../firebase-config', () => {
    return {
        auth: {
            currentUser: true,
            signOut() {
                return Promise.resolve("success");
            },
            signInWithEmailAndPassword(email, password) {
                return new Promise((resolve, reject) => {
                if (email === "test@test.com" && password === "test123") {
                    resolve({
                        email: "test@test.com",
                        firstName: "test",
                        gender: "Male",
                        lastName: "test",
                        uid: "A01YCODqSug6aZsgLG6vdBQRopn1",
                        userName: "testddc bdf",
                      });
                }
                reject(Error('sign in error'));
                });
            },
            createUserWithEmailAndPassword(email, password) {
                return new Promise((resolve, reject) => {

                const validateEmail = (email) => {
                    return email.match(
                        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
                };

                if (validateEmail(email) && password.length >= 6) {
                    resolve({ 
                        uid: "A01YCODqSug6aZsgLG6vdBQRopn1",
                        email: "test@test.com"
                     });
                }
                reject(Error('create user error '));
                });
            }
        }
    }
});

describe("Authentication", () => {
    test("Login", async () => {
        const results = await firebase.auth.signInWithEmailAndPassword("test@test.com", "test123")
        
        expect(results).toEqual({
            email: "test@test.com",
            firstName: "test",
            gender: "Male",
            lastName: "test",
            uid: "A01YCODqSug6aZsgLG6vdBQRopn1",
            userName: "testddc bdf",
        })
    });

    test("SignUp", async () => {
        const results = await firebase.auth.createUserWithEmailAndPassword("test@test.com", "test123")
        
        expect(results).toEqual({ 
            uid: "A01YCODqSug6aZsgLG6vdBQRopn1",
            email: "test@test.com"
        })
    });

    test("SignOut", async () => {
        const results = await firebase.auth.signOut()
        
        expect(results).toEqual("success")
    });
})