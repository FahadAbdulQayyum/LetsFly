"use strict";
const data = {
    Name: "",
    FirstName: "",
    LastName: "",
    Age: 0,
    Gender: "",
    Occupation: "",
    Address: {
        Street: "",
        City: "",
        State: "",
        Zip: ""
    }
};
data.Name = "John Doe";
data.FirstName = "John";
data.LastName = "Doe";
data.Age = 27;
data.Gender = "Male";
data.Occupation = "Software Engineer";
data.Address = {
    Street: "1234 Elm St",
    City: "Springfield",
    State: "IL",
    Zip: "62701"
};
console.log("data...", data);
