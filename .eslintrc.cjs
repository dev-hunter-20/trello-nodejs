module.exports = {
  // ✅ Định nghĩa môi trường mà code sẽ chạy
  env: {
    es2020: true, // Hỗ trợ ECMAScript 2020 (ES11), bao gồm optional chaining `?.`, nullish coalescing `??`, v.v.
    node: true, // Cho phép sử dụng các API của Node.js như `require()`, `process`, v.v.
  },

  // ✅ Kế thừa các bộ quy tắc có sẵn
  extends: [
    'eslint:recommended', // Sử dụng quy tắc mặc định của ESLint
    'plugin:prettier/recommended', // Tích hợp Prettier vào ESLint
    'prettier', // Tắt các quy tắc ESLint có thể xung đột với Prettier
  ],

  // ✅ Chỉ định trình phân tích cú pháp cho ESLint
  parser: '@babel/eslint-parser', // Sử dụng Babel để hỗ trợ các tính năng mới nhất của JavaScript

  parserOptions: {
    ecmaVersion: 'latest', // Hỗ trợ phiên bản ECMAScript mới nhất
    sourceType: 'module', // Cho phép sử dụng `import/export` thay vì `require()`
    requireConfigFile: false, // Không yêu cầu file cấu hình Babel riêng biệt
    allowImportExportEverywhere: true, // Cho phép sử dụng `import/export` ở bất kỳ đâu trong file
  },

  // ✅ Khai báo danh sách plugin
  plugins: [],

  rules: {
    // 🚀 **CÁC QUY TẮC CƠ BẢN**
    'no-console': 0, // Cho phép sử dụng `console.log()`
    'no-extra-boolean-cast': 0, // Cho phép sử dụng `!!value`
    'no-lonely-if': 1, // Cảnh báo nếu `if` đứng một mình trong `else`
    'no-unused-vars': 1, // Cảnh báo nếu khai báo biến nhưng không sử dụng

    // 🚀 **QUY TẮC VỀ KHOẢNG TRẮNG & XUỐNG DÒNG**
    'no-trailing-spaces': 1, // Cảnh báo nếu có khoảng trắng dư ở cuối dòng
    'no-multi-spaces': 1, // Cảnh báo nếu có nhiều khoảng trắng liên tiếp
    'no-multiple-empty-lines': 1, // Cảnh báo nếu có quá nhiều dòng trống
    'space-before-blocks': ['error', 'always'], // Bắt buộc có dấu cách trước `{`
    'object-curly-spacing': [1, 'always'], // Cảnh báo nếu thiếu khoảng trắng trong `{}` (Ví dụ: `{ key: value }` ✅)

    // 🚀 **QUY TẮC VỀ THỤT DÒNG (INDENTATION)**
    indent: ['warn', 2], // Cảnh báo nếu không thụt dòng đúng 2 spaces

    // 🚀 **QUY TẮC VỀ DẤU CHẤM PHẨY (`;`)**
    semi: [1, 'always'], // Cảnh báo nếu thiếu dấu `;` ở cuối dòng

    // 🚀 **QUY TẮC VỀ DẤU NHÁY**
    quotes: ['error', 'single'], // Bắt buộc sử dụng dấu nháy đơn `'`

    // 🚀 **QUY TẮC VỀ DẤU PHẨY TRONG OBJECT & ARRAY**
    'array-bracket-spacing': 1, // Cảnh báo nếu thiếu khoảng trắng trong `[]`
    'comma-dangle': ['error', 'always-multiline'], // Bắt buộc có dấu `,` ở cuối mỗi phần tử nếu xuống dòng
    'comma-spacing': 1, // Cảnh báo nếu khoảng cách sau `,` không đúng

    // 🚀 **QUY TẮC VỀ DẤU CÁCH & KHOẢNG TRẮNG**
    'linebreak-style': 0, // Không bắt buộc loại xuống dòng (`LF` hay `CRLF`)
    'no-unexpected-multiline': 'warn', // Cảnh báo nếu có lỗi xuống dòng không mong muốn
    'keyword-spacing': 1, // Cảnh báo nếu khoảng cách giữa từ khóa (`if`, `else`, `for`, ...) và `{` không đúng

    // 🚀 **QUY TẮC VỀ HÀM MŨI TÊN (ARROW FUNCTION)**
    'arrow-spacing': 1, // Cảnh báo nếu khoảng cách giữa `=>` không đúng

    // 🚀 **TÍCH HỢP PRETTIER VỚI ESLINT**
    'prettier/prettier': 'error', // Báo lỗi nếu code không đúng chuẩn format của Prettier
  },
};
