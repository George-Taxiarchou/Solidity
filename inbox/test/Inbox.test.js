const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
//test
const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface,bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
	//Get a list off all accounts
	accounts = await web3.eth.getAccounts()
		

	// Use one of those accounts to deploy
assert.equal(message,'Hi there!');
	});
});