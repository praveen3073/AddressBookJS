let firstNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
let lastNameRegex = RegExp("^[A-Z]{1}[A-Za-z]{3,}$");
let addressRegex = RegExp("^.{4,}$");
let cityRegex = RegExp("^[a-zA-Z]{4,}$");
let stateRegex = RegExp("^[a-zA-Z\\s]{4,}$");
let zipRegex = RegExp("^(\\s*[0-9]{1}\\s*){6}$");
let phoneRegex = RegExp("^[1-9]{1}[0-9]{9}$");
let emailRegex = RegExp("^[a-zA-Z]+(\\.[a-zA-Z_+-]+){0,1}[@]{1}[a-zA-Z]+\\.[a-zA-Z]+(\\.[a-zA-Z]+){0,1}$");

class Contact {
    // Properties
    /*firstName;
    lastName;
    address;
    city; 
    state;
    zip;
    phone;
    email;*/

    // Constructor
    constructor(...params){
        this.firstName = params[0];
        this.lastName = params[1];
        this.address = params[2];
        this.city = params[3];
        this.state = params[4];
        this.zip = params[5];
        this.phone = params[6];
        this.email = params[7];
    }

    // Getter & Setter
    get firstName() {return this._firstName;}
    get lastName() {return this._lastName;}
    get address() {return this._address;}
    get city() {return this._city;} 
    get state() {return this._state;}
    get zip() {return this._zip;}
    get phone() {return this._phone;}
    get email() {return this._email;}

    set firstName(firstName) {
        // First Name should start with capital and min 3 characters
        if(firstNameRegex.test(firstName))
            this._firstName = firstName;
        else
            throw "First Name should start with capital and min 3 characters";
    }
    set lastName(lastName) {
        // Last Name should start with capital and min 3 characters
        if(lastNameRegex.test(lastName))
            this._lastName = lastName;
        else
            throw "Last Name should start with capital and min 3 characters";
    }
    set address(address) {
        // Address should have min 4 characters
        if(addressRegex.test(address))
            this._address = address;
        else
            throw "Address should have min 4 characters";
    }
    set city(city) {
        // City should have min 4 characters
        if(cityRegex.test(city))
            this._city = city;
        else
            throw "City should have min 4 characters";
    }
    set state(state) {
        // State should have min 4 characters
        if(stateRegex.test(state))
            this._state = state;
        else
            throw "State should have min 4 characters";
    }   
    set zip(zip) {
        // Zip should have correct pattern
        if(zipRegex.test(zip))
            this._zip = zip;
        else    
            throw "Zip should have correct pattern";
    }
    set phone(phone) {
        // Phone should have correct pattern
        if(phoneRegex.test(phone))
            this._phone = phone;
        else    
            throw "Phone should have correct pattern";
    }
    set email(email) {
        // Email should have correct pattern
        if(emailRegex.test(email))
            this._email = email;
        else    
            throw "Email should have correct pattern";
    }

    //toString method
    toString(){
        return "First Name: " + this.firstName + 
                ", Last Name: " + this.lastName + 
                ", Address: " + this.address + 
                ", City: " + this.city + 
                ", State: " + this.state + 
                ", ZipCode: " + this.zip +
                ", Phone: " + this.phone + 
                ", Email: " + this.email;
    }
}

let contact = new Contact("Ruskin", "Bond", "Plot-44", "Mussorie", "Uttarakand", "248179", "9111098765", "ruskin@gmail.com");
process.stdout.write(contact.toString() + "\n");
// First Name should start with capital and min 3 characters
try {
    contact.firstName = "R";
} catch (e) {
    console.error(e);
}
// Last Name should start with capital and min 3 characters
try {
    contact.lastName = "B";
} catch (e) {
    console.error(e);
}
// Address should have min 4 characters
try {
    contact.address = "44";
} catch (e) {
    console.error(e);
}
// City should have min 4 characters
try {
    contact.city = "Mu.";
} catch (e) {
    console.error(e);
}
// State should have min 4 characters
try {
    contact.state = "UK";
} catch (e) {
    console.error(e);
}
// Zip should have correct pattern
try {
    contact.zip = "123";
} catch (e) {
    console.error(e);
}
// Phone should have correct pattern
try {
    contact.phone = "923453";
} catch (e) {
    console.error(e);
}
// Email should have correct pattern
try {
    contact.email = "abc@bridgelabz";
} catch (e) {
    console.error(e);
}
console.log("\n---------------------------------");

// UC3 Create address book array of contacts
let addressBook = new Array();
addressBook.push(contact);

addressBook.push(new Contact("Tanmay", "Jain", "Mahaveer Nagar", "Jaipur",
"Rajasthan", "302011", "9765485884", "mail.tanmay@gmail.com"));

addressBook.push(new Contact("Donal", "Trump", "White House", "Washington",
"Washington DC", "100001", "9999999999", "pm@gmai.com"));

addressBook.push(new Contact("Ravi", "Kumar", "JLN Marg", "Sampak",
"Kerala", "230056", "9648515621", "rkboi@yahoo.com"));

process.stdout.write(addressBook.join("\n").toString());
console.log("\n---------------------------------");

// UC4 Edit address of contact in address book
function editContactAddress(firstName, lastName, newAddress) {
    for(i = 0; i < addressBook.length; i++) {
        if(addressBook[i].firstName == firstName && addressBook[i].lastName == lastName)
            addressBook[i].address = newAddress;
    }
}

editContactAddress("Ruskin", "Bond", "Plot-234");
process.stdout.write(addressBook.join("\n").toString());

console.log("\n---------------------------------");
// UC5 Delete contact from address book
function deleteContactFromAB(firstName, lastName) {
    for(i = 0; i < addressBook.length; i++) {
        if(addressBook[i].firstName == firstName && addressBook[i].lastName == lastName)
            addressBook.splice(i,1);
    }
}

deleteContactFromAB("Tanmay", "Jain");
process.stdout.write(addressBook.join("\n").toString());

console.log("\n---------------------------------");
// UC6 Get number of contacts in address book
function countContactsInAB() {
    function getCount(count, contact) {
        return count + 1;
    }
    return addressBook.reduce(getCount, 0);
}

process.stdout.write("No of contacts in address book: " + countContactsInAB());

console.log("\n---------------------------------");
// UC7 Check for duplicate contact in address book when adding 
function addContactInAB(contact) {
    for(i = 0; i < addressBook.length; i++) {
        if(addressBook[i].firstName == contact.firstName && addressBook[i].lastName == contact.lastName) {
            throw "Contact already exixts in Address Book";
        }
    }
    addressBook.push(contact);
}

{
    let contact = new Contact("Ravi", "Kumar", "JLN Marg", "Sampak", "Kerala", "230056", "9648515621", "rkboi@yahoo.com");
    try {
        addContactInAB(contact);
    } catch(e) {
        console.error(e);
    }
}

console.log("\n---------------------------------");
//UC8 Check for contact in address book by city and state
function searchContactOnCityState(firstName, city, state){
    let citySearch = addressBook.find(contact => contact.firstName == firstName && contact.city == city);
    let stateSearch = addressBook.find(contact => contact.firstName == firstName && contact.state == state);
    if (citySearch == undefined){
        if (stateSearch == undefined){
            console.log(firstName + " does not exist.");
        }else {console.log(stateSearch.toString());}
    }else {console.log(citySearch.toString());}
}
searchContactOnCityState("Ravi","Sampak","");
searchContactOnCityState("Ravi","","Kerala");
searchContactOnCityState("Ravi","Sampak","Kerala");

console.log("\n---------------------------------");
//UC9 View contacts by city or state
function viewByCity(city){
    addressBook.filter(contact => contact.city == city).forEach(contact => console.log(contact.toString()))
}

function viewByState(state){
    addressBook.filter(contact => contact.state == state).forEach(contact => console.log(contact.toString()))
}
viewByCity("Mussorie");
viewByState("Kerala");

console.log("\n---------------------------------");
//UC 10 Get count by city or state
function getCountByCity(city){
    let count = 0;
    addressBook.filter(contact => contact.city == city).forEach(contact => ++count);
    return count;
}
function getCountByState(state){
    let count = 0;
    addressBook.filter(contact => contact.state == state).forEach(contact => ++count);
    return count;
}
console.log("Count in Mussorie: "+getCountByCity("Mussorie"));
console.log("Count in Kerala: "+getCountByState("Kerala"));

console.log("\n---------------------------------");
//UC11 Sort contacts by name
function sortContactsByName(){
    return addressBook.sort((contact1,contact2) => {
        if (contact1.firstName>contact2.firstName) return 1;
        else if (contact1.firstName<contact2.firstName) return -1;
        return 0;
    });
}
console.log("The sorted Address Book is: ");
console.log(sortContactsByName().join("\n").toString());

console.log("\n---------------------------------");
//UC 12 Sort contacts by other parameters
function sortContacts(type){
    switch(type){
        case "name": addressBook.sort((contact1,contact2) => {
                        if (contact1.firstName>contact2.firstName) return 1;
                        else if (contact1.firstName<contact2.firstName) return -1;
                        return 0;
                        }); break;
        case "city": addressBook.sort((contact1,contact2) => {
                        if (contact1.city>contact2.city) return 1;
                        else if (contact1.city<contact2.city) return -1;
                        return 0;
                        }); break;
        case "state": addressBook.sort((contact1,contact2) => {
                        if (contact1.state>contact2.state) return 1;
                        else if (contact1.state<contact2.state) return -1;
                        return 0;
                        }); break;
        case "zip": addressBook.sort((contact1,contact2) => {
                            return contact1.zip-contact2.zip;
                        }); break;
        default: console.log("Unsupported type.");
    }
}

sortContacts("city");
console.log("The sorted Address Book on City is: ");
console.log(addressBook.join("\n").toString());

sortContacts("state");
console.log("The sorted Address Book on State is: ");
console.log(addressBook.join("\n").toString());

sortContacts("zip");
console.log("The sorted Address Book on Zip is: ");
console.log(addressBook.join("\n").toString());
