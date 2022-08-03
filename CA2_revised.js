// Name: Travis Leow Wenkai
// Class: DIT/1A/02
// Adm : 2227759
//
//This is Stage 2 of a pilot application for Company XYZ's membership loyalty programme.

// Import readline-sync
const input = require(`readline-sync`);

// Creating Member class
class Member {
    constructor(name, membership_type, date_joined, date_birth, points_earned) {
        this.name = name;
        this.membership_type = membership_type;
        this.date_joined = date_joined;
        this.date_birth = date_birth;
        this.points_earned = points_earned;
    }

    // Method to display information of a specific member
    displayInformation(space) {
        // If argument == true, add spaces between each line (for sub-menu)
        if (space)
        console.log(`\n\t\tName: ${this.name}\n\t\tMembership Type: ${this.membership_type}\n\t\tDate joined: ${this.date_joined}\n\t\tDate of Birth: ${this.date_birth}\n\t\tPoints earned: ${this.points_earned}\n`);
        else
        console.log(`\n\nName: ${this.name}\nMembership Type: ${this.membership_type}\nDate joined: ${this.date_joined}\nDate of Birth: ${this.date_birth}\nPoints earned: ${this.points_earned}`);
    }

    // Method to update points and/or membership type of a specific member
    updatePoints(spent) {
        var points = 0;

        if (spent <= 50)
        points = 10;
        else if (spent <= 100)
        points = 50;
        else if (spent <= 200)
        points = 100;
        else if (spent <= 500)
        points = 200;
        else if (spent <= 1000)
        points = 500;
        else if (spent <= 2500)
        points = 1000;
        else if (spent >= 2500)
        points = 2000;
        
        this.points_earned += points;

        // Update membership type if conditions met
        if (this.points_earned >= 20000)
        this.membership_type = "Diamond";
        else if (this.points_earned >= 5000)
        this.membership_type = "Platinum";
        else if (this.points_earned >= 500)
        this.membership_type = "Gold";
    }
}

// Creating MemberGroup class
class MemberGroup {
    constructor() {
        this.members = [];
    }

    // Method to see if name is already a member, else returns false
    findMember(name) {
        for (var i = 0; i < member_group.members.length; i++) {
            var memberName = this.members[i].name.toLowerCase();
            if (name == memberName)
            return this.members[i];
            else
            var found = false;
        }
        return found;
    }

    // Method to find members in a membership type
    findMembershipTypeMembers(membershipType) {
        var members = [];
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].membership_type.toLowerCase() == membershipType) 
            members.push(`${this.members[i].name}`);
        }
        return members;
    }

    // Method to find youngest member
    findYoungest() {
        var youngest = this.members[0];
        for (var i = 0; i < this.members.length; i++) {
            if (new Date(this.members[i].date_birth) > new Date(youngest.date_birth)) {
                youngest = this.members[i];
            }
        }
        return youngest.name;
    }

    // Method to find oldest member
    findOldest() {
        var oldest = this.members[0];
        for (var i = 0; i < this.members.length; i++) {
            var member_dob = new Date(this.members[i].date_birth);
            if (member_dob < new Date(oldest.date_birth)) {
                oldest = this.members[i];
            }
        }
        return oldest.name;
    }

    // Method to find member with lowest points
    findLowest() {
        var lowest = this.members[0];
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].points_earned < lowest.points_earned) {
                lowest = this.members[i];
            }
        }
        return lowest.name;
    }

    // Method to find member with highest points
    findHighest() {
        var highest = this.members[0];
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].points_earned > highest.points_earned) {
                highest = this.members[i];
            }
        }
        return highest.name;
    }

    // Method to find number of members for each membership type
    findTotalMembers() {
        var number = [];
        for (var type of membershipTypes) {
            var n = this.findMembershipTypeMembers(type);
            number.push(n.length);
        }
        return number;
    }

    // Method to find total points from a membership type
    findTotalPoints(membershipType) {
        var points = 0;
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].membership_type.toLowerCase() == membershipType)
            points += this.members[i].points_earned;
        }
        return points;
    }
}

// Function to get today's full date, month and year
var today = () => {
    var date = new Date();
    // Getting month name
    var month = date.toLocaleString('default', { month: 'short' });
    // Return today's full date, month and year
    return `${date.getDate()} ${month} ${date.getFullYear()}`;
}


// Function to capitalize first char of str
var capitalize = (str) => {
    str = str.toLowerCase();
    return str.charAt(0).toUpperCase() + str.slice(1);
}


// Function to remove member
var removeMember = (member) => {
    var arr = [...member_group.members];
    var index = arr.findIndex((element) => element == member);
    member_group.members.splice(index, 1);
}

// Function to display a specific information from a member
var specificInformation = (member, index) => {
    var info = "";
    if (index == 1)
    info = "Name";
    else if (index == 2)
    info = "Membership Type";
    else if (index == 3)
    info = "Date joined";
    else if (index == 4)
    info = "Date of Birth";
    else if (index == 5)
    info = "Points Earned";

    var value = Object.values(member)[index - 1];
    console.log(`\n\t\t${member.name}'s ${info}: ${value}\n`);
}

// Initializing variable for member group class
var member_group = new MemberGroup();

// Adding default members to new member
var defaultMembers = [
    new Member("Leonardo", "Gold", "1 Dec 2019", "1 Jan 1980", 1400),
    new Member("Catherine", "Ruby", "14 Jan 2020", "28 Oct 1985", 250),
    new Member("Luther", "Gold", "29 Apr 2020", "16 Mar 1992", 3350),
    new Member("Bruce", "Diamond", "3 Jun 2020", "18 Mar 1994", 40200),
    new Member("Amy", "Ruby", "5 Jun 2020", "31 May 2000", 500)
];

for (var member of defaultMembers) 
member_group.members.push(member);


// Initializing membership types array
const membershipTypes = ["ruby", "gold", "platinum", "diamond"];


// Log introduction to programme
console.log(`\nWelcome to XYZ Membership Loyalty Programme!`);

// Requesting input for user's name
var inputName = input.question(`Please enter your name: `);

// Loop for application's menu
do {
    // Prompts user to input options between 1 to 6
    var selectChoice = input.question(`\nHi ${inputName}, please select your choice:\n\t1. Display all members' information\n\t2. Display member information\n\t3. Add new member\n\t4. Update points earned\n\t5. Statistics\n      * 6. Advanced features\n\t7. Exit\n\t>> `);

    // Display members' information
    if (selectChoice == 1) {
        for (var member of member_group.members) member.displayInformation();
    }

    // Display member's information of user's choice
    else if (selectChoice == 2) {
        var name = input.question(`Please enter member's name: `).toLowerCase();
        var found = member_group.findMember(name);
        if (found == false)
        console.log(`Member does not exist.`);
        else
        found.displayInformation();
    }

    // Add new member
    else if (selectChoice == 3) {
        // Loop if member inputted already exists
        do {
            var name = input.question(`Please enter member's name: `);
            var found = member_group.findMember(name.toLowerCase());
            // Checks if member exists
            if (found !== false) 
            console.log(`\nMember's name exists in database. Please enter new name.`);
            } while (found !== false)
        var DOB = input.question(`Please enter member's date of birth: `);
        name = capitalize(name);
        // Adding new member
        member_group.members.push(new Member(name, 'Ruby', today(), DOB, 0));
    }

    // Update member's points
    else if (selectChoice == 4) {
        var name = input.question(`Please enter member's name: `);
        var found = member_group.findMember(name.toLowerCase());
        // Checks if member exists
        if (found == false)
        console.log(`Member does not exist.`);
        else {
        var spent = input.questionFloat(`Please enter amount spent: `);
        found.updatePoints(spent);
        }
    }

    // Display statistics menu
    else if (selectChoice == 5) {
        do {
            // Prompts user to input options between 1 to 6
            var statChoice = input.question(`\t\tPlease select an option from the sub-menu:\n\t\t1. Display names of (all) a certain type of members only.\n\t\t2. Display the name of the youngest and oldest member in the system.\n\t\t3. Display the name of members with the highest and lowest points earned.\n\t\t4. Display the total number of members in each membership type.\n\t\t5. Display the total points in each membership type.\n\t\t6. Return to main-menu\n\t\t>> `);
            
            // Display members of a membership type
            if (statChoice == 1) {
                var membershipChoice = input.question(`\n\t\tEnter Membership Type: `).toLowerCase();
                // Loop if user inputs invalid membership type
                while (!membershipTypes.includes(membershipChoice)) {
                    console.log(`\t\tPlease enter a valid membership type.`);
                    membershipChoice = input.question(`\n\t\tEnter Membership Type: `).toLowerCase();
                }
                var names = member_group.findMembershipTypeMembers(membershipChoice);
                // Add space after every comma
                names = names.toString().split(',').join(', ');
                console.log(`\t\tMember(s) of membership type ${membershipChoice}: ${names}\n`);
            }
            
            // Display youngest and oldest member
            else if (statChoice == 2) {
                var youngest = member_group.findYoungest();
                var oldest = member_group.findOldest();
                console.log(`\t\tYoungest member: ${youngest}\n\t\tOldest member: ${oldest}\n`);
            }
            
            // Display members with the highest and lowest points
            else if (statChoice == 3) {
                var lowest = member_group.findLowest();
                var highest = member_group.findHighest();
                console.log(`\t\tHighest member: ${highest}\n\t\tLowest member: ${lowest}\n`);
            }

            // Display number of members in each membership types
            else if (statChoice == 4) {
                var totalMembers = member_group.findTotalMembers();
                for (var i = 0; i < totalMembers.length; i++)
                console.log(`\t\t${membershipTypes[i]}: ${totalMembers[i]}`);
                console.log();
            }

            // Display total points of each membership types
            else if (statChoice == 5) {
                var points = [];
                for (var i = 0; i < membershipTypes.length; i++) {
                    points[i] = member_group.findTotalPoints(membershipTypes[i]);
                    console.log(`\t\t${membershipTypes[i]}: ${points[i]}`);
                }
                console.log();
            }

            // Does nothing but purpose is for the else statement to work as intended
            else if (statChoice == 6) 
            continue;
            
            // Message if user's input is not between 1 to 6
            else
            console.log(`\n\t\tPlease enter a valid input.\n`);
        
        // Continue to loop statistics sub-menu if user's input is not 6
        } while (statChoice != 6)
    }

    // Display's advanced features menu
    else if (selectChoice == 6) {
        do {
            // Prompts user to input options between 1 to 3
            var advancedChoice = input.question(`\t\tPlease select an option from the advanced features sub-menu:\n\t\t1. Display a random member's information\n\t\t2. Display a member's specific information\n\t      ! 3. DELETE A MEMBER\n\t\t4. Return to main-menu\n\t\t>> `);

            // Displays a random member's information
            if (advancedChoice == 1) {
                var random = Math.floor(Math.random() * member_group.members.length);
                var member = member_group.members[random];
                // Argument true to add spaces for each line
                member.displayInformation(true);
            }

            // Displays a member's specific information
            else if (advancedChoice == 2) {
                var name = input.question(`\n\t\tPlease enter member's name: `).toLowerCase();
                var found = member_group.findMember(name);
                // Checks if member exists
                if (found == false)
                console.log(`\t\tMember does not exist.\n`);
                else {
                    while (true) {
                        // Prompts user to input options between 1 to 5
                        var option = input.question(`\n\t\tPlease select an information to display:\n\t\t1. Name\n\t\t2. Membership Type\n\t\t3. Date joined\n\t\t4. Date of Birth\n\t\t5. Points earned\n\t\t>> `);
                        if (option >= 1 && option <= 5) {
                            specificInformation(found, option)
                            break;
                        }
                        else {
                            console.log(`\t\tPlease enter a valid input (1 - 5).`);
                            continue;
                        }
                    }
                }
            }

            // Delete a member
            else if (advancedChoice == 3) {
                var name = input.question(`\n\t\tPlease enter member's name to be DELETED: `).toLowerCase();
                var found = member_group.findMember(name);
                // Checks if member exists
                if (found == false)
                console.log(`\t\tMember does not exist.\n`);
                else {
                    // Loop if user inputs an invalid input
                    while (true) {
                    var secondChance = input.question(`\t\tAre you sure you want ${name.toUpperCase()} to be DELETED? (Y/N): `).toLowerCase();

                    // Return to menu if "n"
                    if (secondChance == "n") {
                        console.log(`\n`);
                        break;
                    }

                    // Removes member if "y", return to menu after
                    else if (secondChance == "y") {
                        removeMember(found);
                        console.log(`\n\t\tSuccessfully removed ${name.toUpperCase()} from our database!\n\n`);
                        break;
                        }

                    // Message if user did not input Y or N
                    else console.log(`\t\tPlease enter a valid input (Y/N)`);
                    }
                }
            }

            // Does nothing but purpose is for the else statement to work as intended
            else if (advancedChoice == 4)
            continue;

            // Exit message if user's input is not between 1 to 4
            else 
            console.log(`\n\t\tPlease enter a valid input.\n`);
        } while (advancedChoice != 4)
    }

    // Exit message if user inputs 7
    else if (selectChoice == 7)
    console.log(`Thank you & goodbye!`);

    // Message if user's input is not between 1 to 7
    else
    console.log(`Please enter a valid input.\n`);
    

// Continue to loop main menu if user's input is not 7
} while (selectChoice != 7)



