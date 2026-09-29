# WebNC Lab 1-10 — AI Stress Test

Source này cố tình chứa khoảng 50 lỗi từ dễ đến khó trong phạm vi Lab 1-10.

Sau khi sửa, ứng dụng phải chạy bằng:

```bash
npm install
node server.js
```

Các chức năng phải hoạt động:
- Trang chủ: `/`
- Liên hệ: `/contact`
- Danh sách tin: `/news`
- Chi tiết: `/news/:id`
- Tìm kiếm: `/search?keyword=...`
- Thêm bài: GET/POST `/create`
- Sửa bài: GET/POST `/edit?id=...`
- Xóa bài: `/delete?id=...`
- Đăng nhập: GET/POST `/login`
- Hồ sơ: `/profile`
- Đăng xuất: `/logout`

Không đổi yêu cầu chức năng. Sửa source để toàn bộ luồng trên hoạt động.
