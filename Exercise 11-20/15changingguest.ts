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

console.log(`\nUnfortunately, ${notComingguest} can't make it to dinner.\n`);

console.log('\n lets invite someone else!\n');//printing new message

for (let i = 0; i < guests.length; i++) {
    let invitation = `Dear ${guests[i]}!,with my whole heart i am inviting you to my birthday party on coming sunday.
    see you there!`;
    console.log(invitation);// now we will have invitation to replacement guest
}
export{}