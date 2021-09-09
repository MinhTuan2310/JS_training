1. My full name is Le Minh Tuan
2. I had been doing hardware technician in apple vn. 
3. Now I have been challenging myself with a new career as a coder.
4. In fact, I have 6 months practicing coding myself, which give me a fine technical knowledge of what is called coding language.


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

STRICT MODE: sử dụng phiên bản mới

SCOPE:
- block Scope
- global: moi truong khac nhau thì object global khac nhau;

HOISTING: phần khai báo dc mang lên trên.
- những trường hợp bị ảnh hường: khai báo biến, khai báo hàm (delaration function);

*NOTES: nếu dùng VAR gọi tren global scope tren trình duyệt thì nó sễ tự dộng gán vào biến global;

IIFE: hàm dc tạo ra xong thực hiện luôn tại chỗ ()() - làm 1 lần duy nhất.
- phải là anonymus function

CLOSURE: là hàm nam ben trong ham cha, truy cap dc bien cua thang cha, nam giữ giá trị cua biến dó cho dù fn cha dã thuc thi xong;

CURRING FUNCTION: là hàm return về 1 hàm khác bên trong nó;

THIS:
- ARROW FUNCTION: k có this, nó lấy this của thằng bên ngoài ok done;
- BIND METHOD: sẽ chỉ định this cho fn; bind.(obj) => this chính là obj; và tạo ra 1 hàm mới muốn dùng lúc nào dùng; add.bind(obj), add.bind(obj)(3,1)
- CALL METHOD: k tạo ra hàm mới, thuc thi ngay cai hàm dó luon, tham số là danh sách các phần tử, add.call(obj, 3, 1)
- APPLY METHOD: k tạo ra hàm mới, thực thi ngay cái hàm dó luon; tham số chỉ length = 1 và dưới dạng mãng; add.pply(obj, [3,1])
NOTES: 3 methods này k sử dụng dc cho arrow function nhóe ahihi;

ITERATION PROTOCOL:
- iterable: config phần tử này dc loop;
- iterator: loop ntn ?

2015/ es6: 
ECMAScript 2016 /es7 : includes, Math.pow(2,3) === 2 ** 3;
ECMAs 2017 / es8: async fn, major shared memory and aotmics, string padding, Object.values(), Object.entries(), Object.getOwnPropertyDescriptors, trailing commas;
ECMAs 2018: rest, spread, asyn iteration: for await of, promise.prototype.finally(), regular exp.
ECMAs 2019: array.flat, array.flatMap, Object.fromEntries(obj): lấy lại cái object mà mình dã Object.entries(obj) trc do, trimStart(), trimEnd(), optional catch binding;
ECMAs 2020:  BigInt, dynamic import, nulish coaLescing: '??'
- '??', cosnt value = x ?? y nghĩa là nếu x là nulish(null hoặc undifined) thì trả về giá trị y, TH khác thì lấy giá trị x;
- optional chaining: student.profile?.name;
ECMAs 2021: 
- ??= &&= || =;
-numeric separator: count = 1000000 => cout = 1_000_000;

BAT DONG BO:
- alert promt confirm làm web bi blocking;
- api: chuan giao tiep giữa 2 hệ thống;
- debounce: dợi khi event xong sau 1 khoang thoi gian set sẵn mới trigger;
- throttle: trong 1 khoang thoi gian dc set thì nó chỉ trigger 1 lần;
- event loop: 
 + Promise queue: uu tien hon callback queue (macro task);
 + Callback queue: setTimeout, setInterval, ...
 + sync: push vào callstack
 + async: dẩy vào web api => callback queue or promise queque => chờ thang callstack xu lí xong => callstack;