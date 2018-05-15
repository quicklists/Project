var myDB = require("./connect");
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
        myDB.addRecord(obj,"Users", function(msg){
            expect(msg).toBe("success");
        })
    });
});

describe("dropCategory function testing", ()=>{
	test("delete category inside list", ()=>{
		myDB.dropCategory(obj,"Categories", function(msg){
			expect(msg).toBe("success");

       })

   });

});
        
describe("deleteRecord function testing", ()=>{
    test("added product to a list", ()=>{
        myDB.deleteRecord(obj,"Users", function(msg){
            expect(msg).toBe("success");
        })
    });
});

var listNameValidate = require("./validate.js");

describe("list names testing", ()=>{
    test("a valid list name with space", ()=>{
        expect(listNameValidate("l i s t")).toBe("list");
    });

    test("a valid list name with case sensitive", ()=>{
        expect(listNameValidate("List")).toBe("list");
    });
});

// nick - Tests the refactored login function for proper email format
var server = require('./server.js')

describe.only("login validation testing.", () => {
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
