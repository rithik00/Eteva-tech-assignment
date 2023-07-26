// Function to get a unique set of users from List1 which are not in List2
function getUniqueUsersNotInList2(list1, list2) {
  const uniqueUsersList1 = new Set(list1);
  list2.forEach((user) => uniqueUsersList1.delete(user));
  return uniqueUsersList1;
}

// Function to get a unique set of users from List2 which are not in List1
function getUniqueUsersNotInList1(list1, list2) {
  const uniqueUsersList2 = new Set(list2);
  list1.forEach((user) => uniqueUsersList2.delete(user));
  return uniqueUsersList2;
}

// Function to get a set of users who are present in both List1 and List2 (intersection of list1 & list2)
function getIntersectionOfLists(list1, list2) {
  return list1.filter((user) => list2.includes(user));
}

// Test data
const list1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const list2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

// Output results
const uniqueUsersList1 = Array.from(getUniqueUsersNotInList2(list1, list2));
const uniqueUsersList2 = Array.from(getUniqueUsersNotInList1(list1, list2));
const intersectionList = getIntersectionOfLists(list1, list2);

console.log("a. Unique users in List1 but not in List2:", uniqueUsersList1);
console.log("b. Unique users in List2 but not in List1:", uniqueUsersList2);
console.log("c. Users present in both List1 and List2:", intersectionList);
