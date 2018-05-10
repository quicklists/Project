/*
 * End to End Unit Testing
 */

let chai = require('chai');
// Chai HTTP provides an interface for live integration testing
let chaiHttp = require('chai-http');
let server = require('./server');
let should = chai.should();
let expect = chai.expect;

/*
 * Chai-http makes it very easy to test Node.js HTTP applications without having 
 * to to go through the hassle of finding a free port and start the service manually.
 * 
 * Tell chai to use chai-http.
 */
chai.use(chaiHttp);

const binaryParser = function(res, cb) {
    // res.setEncoding("text");
    res.data = "";
    res.on("data", function(chunk) {
        res.data += chunk;
    });
    res.on("end", function() {
        cb(null, res.data);
    });
};

/*
 * Waiting time for MongoDB to execute before running the test
 */
/*describe('Server', () => {
    beforeAll((done) => {
        setTimeout(done, 4000);
    });*/

    /*
     * POST Login Validation
     */
    describe.skip("POST /login", () => {
        test("Should display error message", () => {
            return chai.request(server)
                .post('/login')
                .send({ email: "example@email.com", password: "abcdef" })
                .buffer().parse(binaryParser)
                .then((res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.contain('Wrong email or password');
                });
        });
    });
/*});*/

var myDB = require("./connect");


var obj = {
   
    "username": "brendon",
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

describe.only("addRecord function testing", ()=>{
    test("added product to a list", ()=>{
        myDB.addRecord(obj,"Users", function(msg){
            expect(msg).toBe("success");
        })
        
    
    });
    
});
    
        