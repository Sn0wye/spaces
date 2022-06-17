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

export { capitalizeFirstLetter, removeArrayElementDuplicates };
