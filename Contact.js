class Contact {
    // Properties
    firstName;
    lastName;
    address;
    city; 
    state;
    zip;
    phone;
    email;

    //constructors
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

let contact = new Contact("Ruskin", "Bond", "Plot-44", "Mussorie", "UK", "248179", "1111098765", "ruskin@gmail.com");
process.stdout.write(contact.toString() + "\n");