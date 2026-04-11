// Question 1

class User {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("You are viewing website data");
    }
}

// Question 2

class admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        console.log("You are editing the website data");
    }
}
