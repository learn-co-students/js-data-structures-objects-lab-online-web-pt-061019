// Write your solution in this file!

const driver = {};

// nondestructive:
// Object.assign() is to provide an empty Object as the first argument. That way we're composing an entirely new Object instead of modifying or overwriting the properties of an existing Object. 
function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, { [key]: value} );
};
// It's important that we merge everything into a new, empty Object. Otherwise, we would be modifying the original Object


// destructive: update or overwrite existing properties by assigning a new value to an existing key; making changes directly to the original Object
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
};

// nondestructive:
// deletes `key` from a clone of driver and returns the new driver
function deleteFromDriverByKey(driver, key) {
    const newDriver = Object.assign({}, driver);
        // data in a const pointing to an Array or Object can still be changed, but a new value cannot be assigned to the name
    delete newDriver[key];
    return newDriver
};

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
};