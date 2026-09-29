# WebNC Lab 1-10 — 50 lỗi thập cẩm

Source này cố tình chứa 50 lỗi từ dễ đến khó trong phạm vi Lab 1-10.

Sau khi sửa phải chạy được bằng:

```bash
npm install
node server.js
```

Yêu cầu chức năng:
- `/`: trang chủ.
- `/contact`: liên hệ.
- `/students`: danh sách sinh viên.
- `/students/:id`: chi tiết sinh viên.
- `/search?keyword=...`: tìm kiếm sinh viên.
- GET/POST `/students/add`: thêm sinh viên.
- GET/POST `/students/edit?id=...`: sửa sinh viên.
- `/students/delete?id=...`: xóa sinh viên.
- GET/POST `/login`: đăng nhập.
- `/profile`: trang hồ sơ cần đăng nhập.
- `/logout`: đăng xuất.

Dữ liệu đăng nhập demo nằm trong source. Không thay đổi yêu cầu chức năng.
