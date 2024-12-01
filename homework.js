function findMax(arr) {
    let max = arr[0]; // Khởi tạo giá trị lớn nhất là phần tử đầu tiên của mảng

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]; // Cập nhật giá trị lớn nhất nếu phần tử hiện tại lớn hơn
        }
    }
    return max; 
}
console.log(findMax([10, 20, 30, 5]));

///Bài 3: Lọc số chẵn Viết một hàm để trả về một mảng mới chỉ chứa các số chẵn từ mảng đầu vào. Sử dụng for
function filterEvenNumbers(arr) {
     let evenNumbers = []; // Khởi tạo mảng rỗng để chứa các số chẵn
    
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                evenNumbers.push(arr[i]); // Thêm số chẵn vào mảng evenNumbers
            }
        }
        return evenNumbers; // Trả về mảng chứa các số chẵn    
  }
  console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // [2, 4, 6]

  ///Bài 4: Đếm số lần xuất hiện của một phần tử. Viết một hàm đếm số lần xuất hiện của một phần tử cụ thể trong mảng. Gợi ý: Sử dụng vòng lặp 
  function countOccurrences(arr, value) {
    let result = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == value) {
            result ++; // Cập nhật giá trị lớn nhất nếu phần tử hiện tại lớn hơn
        }
    }
    return result; 
  }
  console.log(countOccurrences([1, 2, 3, 2, 1, 2], 2)); // 3
  