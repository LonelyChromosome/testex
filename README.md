# WebNC Fixer Test Repo

Repo này dùng để test Chrome extension **WebNC Fixer** cho phạm vi WebNC Lab 1–10.

Mỗi nhánh là một đề độc lập và có lỗi cố ý:
- `test-01-basic`: lỗi đường dẫn, route/controller, params.
- `test-02-html-mvc`: lỗi HTML/EJS ↔ Express/MVC.
- `test-03-mixed`: đề tổng hợp nhiều lỗi cùng lúc.
- `test-04-db-session`: lỗi database/session/form để test rule nâng cao.

Cách test:
1. Chuyển sang từng branch.
2. Mở extension và Scan repository.
3. Ghi lại lỗi extension phát hiện, lỗi nó tự fix, và lỗi nó bỏ sót.
4. Không sửa tay trước khi scan để giữ nguyên test case.

Branch `main` chỉ là trang hướng dẫn.

## Bộ test mở rộng
- `test-05-typo-heavy`: typo nặng trong Node/Express/HTML/EJS.
- `test-06-html-form`: form action/method/input name + tag/attribute typo.
- `test-07-mvc-model`: sai chuỗi Route ↔ Controller ↔ Model ↔ View.
- `test-08-session-db`: session key, form field và SQL placeholder.
- `test-09-mixed-basic`: bài tổng hợp MVC cơ bản với nhiều mismatch cùng lúc.

- `test-11-50-errors`: stress test khoảng 50 lỗi WebNC Lab 1–10, trộn Express/MVC/EJS/session/database và lỗi tham chiếu cross-file.
