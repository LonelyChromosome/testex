# WebNC Fixer Test Repo

Repo này dùng để test Chrome extension **WebNC Fixer** cho phạm vi WebNC Lab 1–10.

Mỗi nhánh là một đề độc lập và có lỗi cố ý:
- `test-01-basic`: lỗi đường dẫn, route/controller, params.
- `test-02-html-mvc`: lỗi HTML/EJS ↔ Express/MVC.
- `test-03-mixed`: đề tổng hợp nhiều lỗi cùng lúc.

Cách test:
1. Chuyển sang từng branch.
2. Mở extension và Scan repository.
3. Ghi lại lỗi extension phát hiện, lỗi nó tự fix, và lỗi nó bỏ sót.
4. Không sửa tay trước khi scan để giữ nguyên test case.

Branch `main` chỉ là trang hướng dẫn.