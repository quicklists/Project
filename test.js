var myDB = require("./connect");
// var server = require("./server.js")
var obj = {
   
    "username": "brendon1",
    "email": "brendon@1234",
    "password": "1234",
    "lists": [
        {
            "name": "grocery list",
            "categories": [
                {
                    "name": "Produce",
                    "items": [
                        "brocoli",
                        "pear",
                        "orange"
                    ]
                },
                {
                    "name": "Vegetables",
                    "items": [
                        "carrot",
                        "lettuce",
                        "eggplant"
                    ]
                },
                {
                    "name": "Dairy",
                    "items": [
                        "milk",
                        "creamer"
                    ]
                }
            ]
        }
    ]
};

describe("addRecord function testing", ()=>{
    test("added product to a list", ()=>{
        myDB.addUserDB(obj, "Users", function(msg){
            expect(msg).toBe("success");
        });
    });
});

describe.skip("deleteRecord function testing", ()=>{
    test("deleted product from a list", ()=>{
        myDB.deleteUserDB(obj, "Users", function(msg){
            expect(msg).toBe("success");
        });
    });
});

describe("dropCategory function testing", () => {
    test("delete category inside list", () => {
        myDB.deleteCategoryDB('nick@123.ca', 'grocery list', 'Produce', (msg) => {
            expect(msg).toBe("success");
        });
    });
});

describe.skip("login validation testing.", () => {
    test("email should be proper email format.", () => {
        server.login('nick123.com', '123', (user) => {
            expect(user).toBe('failed');
        });

        server.login('nick@123', '123', (user) => {
            expect(user).toBe('failed');
        });

        server.login('nick@123com', '123', (user) => {
            expect(user).toBe('failed');
        });
    });
});

describe("getListIndex testing", () => {
    test("should return a number", () => {
        expect(myDB.getListIndex('grocery list', obj)).toBe(0);
    })
})

var email = {"email":"brendon@1234"};
var shaunObj = {
    
    "username": "shaun",
    "email": "shaun@1234",
    "password": "1234",
    "lists": [
        {
            "name": "grocery list",
            "categories": [
                {
                    "name": "Produce",
                    "items": [
                        "brocoli",
                        "pear",
                        "orange"
                    ]
                },
                {
                    "name": "Vegetables",
                    "items": [
                        "carrot",
                        "lettuce",
                        "eggplant"
                    ]
                },
                {
                    "name": "Dairy",
                    "items": [
                        "milk",
                        "creamer"
                    ]
                }
            ]
        }
    ]
};

describe.skip("updateDB testing", ()=>{
	test("update brendon@1234 to shaun@1234", ()=>{
		myDB.updateDb(email, shaunObj)
	}); 
});

/*
describe("signup test"), ()=>{
    test("add user shauntseng", ()=>{
        server.signup("shauntseng", "shaun@123.ca", "123", "123", (msg)=>{
            expect(msg).toBe("success");
        })
    }); 
}
*/