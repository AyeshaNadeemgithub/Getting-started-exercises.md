let guests: string[] = ["fatima", "zainab", "areeba"];


for (let i = 0; i < guests.length; i++) {
    let invitation = `Dear ${guests[i]}!,with my whole heart i am inviting you to my birthday party on coming sunday.
    see you there!`;
    console.log(invitation);
}
let notComingIndex = 2;//suppose index=2 that is zainab cannot come
let replacementtGuest = 'wajeeha';//save new guest in variable

let notComingguest = guests[notComingIndex];

guests[notComingIndex] = replacementtGuest//here i am replacing index 2 with new guest

console.log(`\nUnfortunately, ${notComingguest} can't make it to birthday party.\n`);

console.log('\n lets invite someone else!\n');//printing new message

for (let i = 0; i < guests.length; i++) {
    let invitation = `Dear ${guests[i]}!,with my whole heart i am inviting you to my birthday party on coming sunday.
    see you there!`;
    console.log(invitation);// now we will have invitation to replacement guest
}


console.log('\nhurray!we found a bigger party setup!\n');
console.log('\nlets invite more guests!\n');

guests.unshift("maryam");
guests.splice(Math.floor(guests.length / 2), 0, "sadia");
guests.push("ayesha");

for (let i = 0; i < guests.length; i++) {
    let invitation = `Dear ${guests[i]}!,with my whole heart i am inviting you to my birthday party on coming sunday.
    see you there!`;
    console.log(invitation);
}


  
  // Inform that only two people can be invited
  console.log("Unfortunately, the bigger party program can not be setup in time, and we can only invite two people for party.\n");
  
  // Remove guests 
  while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
  }
  
  // Print a message to people in list
  for (let i = 0; i < guests.length; i++) {
    let invitation = `Dear ${guests[i]}, you are still invited to dinner. Please join us for a delightful evening!`;
    console.log(invitation);
  }
  
  // Remove the last two names from the list
  guests.pop();
  guests.pop();
  

  console.log("\nthe guest list is now empty:", guests);
  