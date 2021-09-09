- JSDoc: 
/**
 * returns x raised to the n-th power
 * 
 * @param {number} x the number to raised
 * @param {number} n the number to raised
 * @return {number} x raise to the n-th power
 */
  function power(x, n) {

  };
  power(); // gợi ý tham số truyen vào là gì.

- type coersion: auto convert kiểu dữ liệu;
- ty conversion: manual convert;
- so sánh kí tự theo unicoode utf16 , kí tự luon lớn hơn số;
- so sánh khác kiểu dữ lieu: chuyển về number hết
- Boolean : cờ hiệu (true-false), lính canh (giữ giá trị);

ARRAY
- dat ten bien array them chu list vao nhe ae;
- Array.isArray(): check co phai la mang ko;
- Array.from():;

TESTCASE:
- kiem tra ket quả trả về là gì => có bao nhiu cái test tương ứng;
- comment các dòng log k sẽ bi lỗi;

- bubble sort 
function bubbleSort(arrayList) {
  if(!Array.isArray(arrayList)) return false;

  const newArr = [...arrayList];

  for(let i = 0; i < newArr.length - 1; i++) {
    for(let j = i + 1;j < newArr.length; j++) {
      if(newArr[i] - newArr[j] > 0) {
        let current = newArr[i];
        newArr[i] = newArr[j];
        newArr[j] = current;
      }
    }
  }
  return newArr;
}

LINKED LIST


STACK:
- push: add stack item
- pop : remove stack item
- Last In First Out;

QUEUE:
- enqueue : add vào cuối hàng
- dequeue: remove ra từ dầu hàng
- FIFO;

BIG O: time complexity cho truong hop tệ nhất
- O(n) loop n vòng;
- 0(n^2): nest 2 loop;
- 0(1): best way;
- 0(log(n)): best way;

SEARCH: linear search & binary search;
- linear search: loop qua 1 vòng rùi tìm kiếm (cach bth hay làm); // O(n)
- binary search: mảng dầu vào phải là sort array, bao gồm left mid và right, mid = left + Math.trunc((right - left) / 2) dể tránh tràn số, nếu target > mid thì kiem tra típ từ mid + 1 => right, nếu target < mid thì kiem tra từ left => mid - 1; // O(log(n));

