// 1-masala 
{
    const books = [
        {
          title: "Halqa",
          author: "Akrom Malik",
          read: false,
        },
        {
          title: "Dunyoning ishlari",
          author: "O'tkir Hoshimov",
          read: true,
        },
        {
          title: "Iymon",
          author: "Shayx Muhammad Sodiq Muhammad Yusuf",
          read: true,
        },
      ];
      
      books.forEach((book, index) => {
        const status = book.read ? "o'qilgan" : "o'qilmagan";
        console.log(`${index + 1}. ${book.author} ning ${book.title} kitobi ${status}`);
      });      
}
// 2-masala
{
    const strings = ["text", "world", "laptop"];

const result = strings.reduce((obj, str) => {
  obj[str] = str.length;
  return obj;
}, {});

console.log(result);
}
// 3-masala
{
    const obj = { a: 2, b: 3, c: 4 };
const n = 3;

const res = {};

for (let key in obj) {
  res[key] = obj[key] * n;
}

console.log(res);

}
// 4-masala
{
    function foo(n) {
        const result = [];
        
        for (let i = 1; i <= n; i++) {
          result.push(Math.pow(2, i));
        }
        
        return result;
      }
      
      console.log(foo(4));
      console.log(foo(5)); 
}
// 5-masala
{
    const animals = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];

const count = {};

animals.forEach(animal => {
  count[animal] = (count[animal] || 0) + 1;
});

console.log(count);
}
// 6-masala
{
    const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(num => num * num);
console.log(squares);
}
// 7-masala
{
    const numbers = [1, -4, 12, 0, -3, 29, -150];

const sumOfPositives = numbers
  .filter(num => num > 0)
  .reduce((sum, num) => sum + num, 0); 

console.log(sumOfPositives);
}
// 8-masala
{
    const name = 'George Raymond Richard Martin';

const foo = name
  .split(' ')  // So'zlarga bo'lamiz
  .map(word => word[0])  // Har bir so'zning bosh harfini olamiz
  .join('');  // Harflarni birlashtiramiz

console.log(foo);  // 'GRRM'

}
// 9-masala
{
    const foo = [
        { name: 'John', age: 13 },
        { name: 'Mark', age: 56 },
        { name: 'Rachel', age: 45 },
        { name: 'Nate', age: 67 },
        { name: 'Jeniffer', age: 65 }
      ];
      
      const sortedByAge = foo.sort((a, b) => a.age - b.age);
      
      const youngest = sortedByAge[0].age;  // Eng yosh odamning yoshi
      const oldest = sortedByAge[sortedByAge.length - 1].age;  // Eng keksa odamning yoshi
      
      const age = oldest - youngest;
      
      console.log(age);  // 54
}
// 10-masala
{
    var singleNumber = function(nums) {
        const count = {};
      
        nums.forEach(num => {
          count[num] = (count[num] || 0) + 1;
        });
      
        return Object.keys(count)
          .filter(key => count[key] === 1)
          .map(key => isNaN(key) ? key : Number(key)); 
      };
      
      console.log(singleNumber([4, 1, 2, 1, 2, 9, true]));        
}
