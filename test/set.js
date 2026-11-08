const myset = new Set();
const a = { name: "shwe" };
myset.add(1);
myset.add("htinkyaw");
myset.add(true);
myset.add(false);
myset.add({ name: "htinkyaw" });
myset.add([1, 2, 3]);
myset.add(a);
// console.log(myset);
myset.delete(1);
myset.delete(a);
// console.log(myset.has(1));
// console.log(myset.size);
// console.log("--------------------Using ForEach Loop--------------------");
// myset.forEach((value) => {
//   console.log(value);
// });
// console.log("--------------------Using For Of Loop--------------------");
// for (let value of myset) {
//   console.log(value);
// }

const numArr = [1, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 7, 7];
const newArr = new Set(numArr);
// console.log(newArr);
const array1 = Array.from(newArr);
// console.log(array1);

const arr2 = [1, 2, 3, 4, 5];
const arr3 = [4, 3, 2, 5, 6, 7, 8];
const newArr2 = new Set([...arr2, ...arr3]);
const newArr2Array = Array.from(newArr2);
// console.log(newArr2Array);

const set1 = new Set(arr2);
const set2 = new Set(arr3);
const intersection = set1.intersection(set2);
const difference = set1.difference(set2);
const difference2 = set2.difference(set1);
const symmetricDifference = set1.symmetricDifference(set2);
const union = set1.union(set2);
// console.log(intersection);
// console.log(difference);
// console.log(difference2);
// console.log(symmetricDifference);
// console.log(union);

const personArr = new Set(["koko", "shwe", "htet", "zaw"]);
// if (personArr.has("koko")) {
//   console.log("koko is already in the set");
// } else {
//   console.log("KOko is not in the set");
// }

//function
const addTag = (setTag, tag) => {
  if (tag) {
    tag = tag.trim().toLowerCase();
    if (setTag.has(tag)) {
      console.log(`The tag "${tag}" is already in the set`);
    } else {
      console.log(`The tag "${tag}" has been added to the set`);
      return new Set([...setTag, tag]);
    }
  } else {
    console.log("Invalid tag");
  }
  return setTag;
};

const removeTag = (setTag, tag) => {
  tag = tag.trim().toLowerCase();
  if (tag) {
    if (setTag.has(tag)) {
      console.log(`The tag "${tag}" has been removed from the set`);
      setTag.delete(tag);
    } else {
      console.log(`The tag "${tag}" is not in the set`);
    }
  } else {
    console.log("Invalid tag");
  }
  return setTag;
};

const checkTag = (setTag, tag) => {
  tag = tag.trim().toLowerCase();
  if (tag) {
    if (setTag.has(tag)) {
      console.log(`The tag "${tag}" is in the set`);
    } else {
      console.log(`The tag "${tag}" is not in the set`);
    }
  } else {
    console.log("Invalid tag");
  }
};

const displayTag = (setTag) => {
  if (setTag.size === 0) {
    console.log("The set is empty");
    return;
  } else {
    console.log("The tags are: ");
    for (let tag of setTag) {
      console.log(tag);
    }
  }
};
checkTag(personArr, "koko");
addTag(personArr, "shwe");
addTag(personArr, null);
removeTag(personArr, "koko");
console.log(personArr);
displayTag(personArr);
