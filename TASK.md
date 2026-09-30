# WebNC Lab 1-10 — Debug test

Ứng dụng quản lý sinh viên nhỏ dùng Express, EJS, session và JSON file database.

Sau khi sửa đúng, chạy:

```bash
npm install
node server.js
```

Các chức năng yêu cầu:

- `GET /`: trang chủ.
- `GET /students`: danh sách sinh viên.
- `GET /students/:id`: chi tiết sinh viên.
- `GET /search?keyword=...`: tìm kiếm theo tên.
- `GET /students/add`: mở form thêm.
- `POST /students/add`: thêm sinh viên.
- `GET /login`: mở form đăng nhập.
- `POST /login`: xử lý đăng nhập.
- `GET /profile`: chỉ truy cập khi đã đăng nhập.
- `GET /logout`: đăng xuất.

Source được cài khoảng 10 lỗi từ dễ đến khó trong phạm vi kiến thức WebNC Lab 1-10.
