# Flutter Mobile Midterm Exam

Bài thực hành đúng đề kiểm tra giữa kỳ môn Lập trình cho thiết bị di động.

- `lib/Home.dart`: Welcome my home page, size 25, dark green
- `lib/About.dart`: Introduction about the app, size 25, dark green
- `lib/Detail.dart`: Main content, size 25, green
- `lib/main.dart`: màu chủ đạo Light Green, BottomNavigationBar 3 icon điều hướng Home / About / Detail
- `web/index.html` + `web/manifest.json`: bộ khởi động Flutter Web

## Chạy trong GitHub Codespaces

Mở Codespace tại **repo testex, branch flutter-midterm-exam**, không chạy nhầm project `he` cũ.

Trong Terminal ở thư mục gốc repo:

```bash
bash run-web.sh
```

Mặc định Flutter chạy cổng **3001**, tách khỏi cổng 3000 có thể đang phục vụ ứng dụng khác.
Vào tab **Ports** -> port **3001** -> **Open in Browser**.
Giữ Terminal còn chạy. Sửa code có thể nhấn `r` (hot reload).

Cách chạy tương đương:

```bash
flutter pub get
flutter run -d web-server --web-hostname 0.0.0.0 --web-port 3001
```

Nếu trang vẫn trắng, vào **F12 -> Console** trên trang port 3001 để kiểm tra lỗi JS/Flutter và gửi cả kết quả Terminal. Cần xác nhận URL có `-3001.app.github.dev`, không phải `-3000.app.github.dev` của ứng dụng cũ.

## Chạy như ứng dụng Android mobile

Repo giữ code đề thi gọn, phần Android platform sẽ được Flutter CLI sinh bằng SDK hiện hành. Chạy một lần ở thư mục gốc:

```bash
flutter create --project-name mobile_exam --platforms=android .
flutter pub get
flutter run
```

Chọn Android emulator hoặc điện thoại Android kết nối máy chạy Flutter. Android Emulator không chạy trực tiếp bên trong Codespaces nếu môi trường đó không có emulator.

## Kiểm tra

```bash
flutter analyze
flutter test
flutter build web --release
```

Chú ý: `web/index.html` chỉ là bootstrap; UI thực tế vẫn do Flutter render từ `lib/main.dart`. Các nhánh WebNC của repo không bị thay đổi.
