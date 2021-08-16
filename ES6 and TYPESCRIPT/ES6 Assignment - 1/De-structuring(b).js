let organisation1 = {
        name: " John",
        address: {
        street: " Rammurthy n agar",
        city: " Bangalore",
        pincode: 560016
    }
}
    let organisation2 = {
        name: " Robert",
        address: organisation1. address
    }
console. log( (organisation1. address. pincode === organisation2. address. pincode) );
console. log( organisation1. name === organisation2. name) ;