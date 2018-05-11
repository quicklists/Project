var myDB = require("./connect");

var obj = {
    "_id": {
        "$oid": "5af4cbd3a250c4402852c98d"
    },
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
describe.only("deleteRecord function testing", ()=>{
    test("Delete record", ()=>{
        myDB.deleteRecord(obj,"Users", function(msg){
            expect(msg).toBe("success");
        })
    });
});