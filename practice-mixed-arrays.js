/**
 * Task 1: Create the Profile. Write code to create a profile array containing the
required elements. Fill the array with data for one fictional user profile. Remember
to include all the elements (user name, age, subscription status, user’s location,
user’s hobbies).

 */

let userProfile = ["Steve", 56, {city: "Nashville"}, ["Playing Music", "Biking"]];

/**
 * Task 2: Access and Log Profile Details. Use console.log() to access and display
the following:
● The user’s name.
● The second hobby from the hobbies array.

 */

console.log(userProfile[0], userProfile[3][1]);

/**
 * Task 3: Modify the Profile. Make the following updates:
● Update the user’s age to a new value.
● Add a new hobby to the hobbies array.

 */

userProfile[1] = 42;

userProfile[3].push("Skiing"); 

/**
 * Task 4: Display the Updated Profile. Log the entire updated profile to verify the
changes.

 */

console.log(userProfile);