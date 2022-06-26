import { UserCredential } from "firebase/auth";

function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function removeArrayElementDuplicates(array: any[], prop: string) {
  const uniqueIds = new Set();
  const unique = array.filter((element) => {
    const isDuplicate = uniqueIds.has(element[prop]);
    uniqueIds.add(element[prop]);
    return !isDuplicate;
  });
  return unique;
}

function parseUser(userCred: UserCredential) {
  const { user } = userCred;
  const parsedUser = {
    name: user.displayName,
    avatar: user.photoURL,
    uid: user.uid,
  };
  return parsedUser;
}

export { capitalizeFirstLetter, removeArrayElementDuplicates, parseUser };
