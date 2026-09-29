# Đề test 04 — Database + Session

Hoàn thiện chức năng đăng nhập.

Yêu cầu:
- GET `/login` hiển thị form.
- POST `/login` kiểm tra username/password.
- Đăng nhập đúng thì lưu session và chuyển đến `/dashboard`.
- `/dashboard` chỉ mở khi đã đăng nhập.
- Model dùng câu SQL có placeholder theo kiểu Lab Database.
- Chỉ sửa lỗi hiện có, không đổi yêu cầu chức năng.

Case này dùng DB giả lập local để test lỗi SQL/parameter mà không cần cài MySQL.
