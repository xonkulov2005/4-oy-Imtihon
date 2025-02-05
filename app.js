// Array1.
// n natural soni berilgan. 3 sonining dastlabki n ta darajasidan tashkil topgan massivni qaytaruvchi getLevel3(n) nomli funksiya tuzing.
//  📥 Input: getLevel3(5)
//  📤 Output: [3, 9, 27, 81, 243]

// function getLevel3(n) {
//     let result = [];
//     for (let i = 0; i < n; i++) {
//         result.push(3 ** (i + 1));
//     }
//     return result;
// }
// console.log(getLevel3(5));

// Array2.
// n natural soni va X, Y butun sonlari berilgan (n > 2).
// a[0] = X, a[1] = Y.
// Qolgan elementlari esa o‘zidan oldingi ikki element yig‘indisiga teng bo‘lgan massivni hosil qiling va chiqarib bering.
// 📥 Input: n = 6, X = 1, Y = 2
//  📤 Output: [1, 2, 3, 5, 8, 13]

// function son(n, X, Y) {
//   let result = [X, Y];
//   for (let i = 2; i < n; i++) {
//     result.push(result[i - 1] + result[i - 2]);
//   }
//   return result;
// }
// console.log(son(6, 1, 2));

// Array3.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning faqat toq indeksdagi elementlari teskari tartibda chiqarilsin.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output: [9, 8, 5]

// function n(arr) {
//   let result = [];
//   for (let i = 1; i < arr.length; i += 2) {
//     result.unshift(arr[i]);
//   }
//   return result;
// }
// console.log(n([4, 5, 7, 8, 6, 9]));

// Array4.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivda eng kichik va eng katta elementlar joylashgan indekslar yig‘indisi aniqlansin.
// 📥 Input: [10, 5, 3, 8, 1, 6, 9]
//  📤 Output: 4 (1 eng kichik, 9 eng katta, indekslari 4 va 0, 4+0=4)

// function massiv(arr) {
//   let minIndex = 0;
//   let maxIndex = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[minIndex]) minIndex = i;
//     if (arr[i] > arr[maxIndex]) maxIndex = i;
//   }
//   return minIndex + maxIndex;
// }
// console.log(massiv([10, 5, 3, 8, 1, 6, 9]));

// Array5.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning juft indeksdagi elementlari va toq indeksdagi elementlarini alohida massiv qilib chiqaring.
// 📥 Input: [4, 5, 7, 8, 6, 9]
//  📤 Output:
//  Juft indekslilar: [4, 7, 6]
//  Toq indekslilar: [5, 8, 9]
// function array(arr) {
//   let juft = [];
//   let toq = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       juft.push(arr[i]);
//     } else {
//       toq.push(arr[i]);
//     }
//   }
//   return juft, toq ;
// }
// let result = array([4, 5, 7, 8, 6, 9]);
// console.log("Juft indekslilar:", result.juft);
// console.log("Toq indekslilar:", result.toq);

// Array6.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivda eng ko‘p uchragan element va uning soni topilsin.
// 📥 Input: [2, 3, 2, 5, 3, 3, 7, 2, 3]
//  📤 Output: Eng ko‘p uchragan element: 3, Uchrash soni: 4

// Array7.
// n ta elementdan tashkil topgan massiv va R butun soni berilgan.
// Massiv elementlari orasidan R soniga eng uzoq son topilsin.
// 📥 Input: arr = [10, 15, 2, 30, 18], R = 12
//  📤 Output: 30 (12 ga eng uzoq son 30 (farqi 18))
// function array(arr) {
//   let R = 12;
//   let farqi = 0;
//   let n = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] - R > farqi) {
//       farqi = arr[i] - R;
//       n = arr[i];
//     }
//   }
// }
// array([10, 15, 2, 30, 18]);
// console.log("katta son:", n, "farq:", farqi);

// Array8.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivni ikkiga ajrating:
// Birinchi yarmi o‘zidan katta bo‘lgan elementlarni
// Ikkinchi yarmi o‘zidan kichik bo‘lgan elementlarni chiqarib bering.
// 📥 Input: [7, 3, 9, 1, 8, 2, 4]
//  📤 Output:
//  Birinchi yarmi katta: [7, 9, 8]
//  Ikkinchi yarmi kichik: [3, 1, 2, 4]
// function array(arr) {
//   const n = 7;
//   let katta = [];
//   let kichik = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > n) {
//       katta.push(arr[i]);
//     } else {
//       kichik.push(arr[i]);
//     }
//   }
// }
// let result = array([7, 3, 9, 1, 8, 2, 4]);
// console.log(result.katta);
// console.log(result.kichik);

// Array9.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning barcha elementlarini ikkita nusxada chiqaruvchi programma tuzing.
// 📥 Input: [1, 2, 3, 4]
//  📤 Output: [1, 1, 2, 2, 3, 3, 4, 4]
// function array(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result.push(arr[i], arr[i]);
//   }
//   return result;
// }
// console.log(array([1, 2, 3, 4]));

// Array10.
// n ta elementdan tashkil topgan massiv berilgan.
// Massivning oxiridan boshlab har bir ikkinchi elementni chiqaruvchi programma tuzing.
// 📥 Input: [4, 5, 7, 8, 6, 9, 10, 15]
//  📤 Output: [15, 9, 8, 5]
// function array(arr) {
//   let result = [];
//   for (let i = arr.length - 1; i >= 0; i -= 2) {
//     result.push(arr[i]);
//   }
//   return result;
// }
// console.log(array([4, 5, 7, 8, 6, 9, 10, 15]));
