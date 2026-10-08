# Flutter Mobile Midterm Exam

Bài thực hành theo đúng đề giữa kỳ Lập trình cho thiết bị di động (Flutter).

## Đã làm

- 3 trang: `lib/Home.dart`, `lib/About.dart`, `lib/Detail.dart`
- Home: `Welcome my home page`, chữ 25, dark green
- About: `Introduction about the app`, chữ 25, dark green
- Detail: `Main content`, chữ 25, green
- Màu chính: `Colors.lightGreen`
- Bottom Navigation Bar với 3 biểu tượng: Home / About / Detail; bấm để chuyển nội dung
- `lib/main.dart` khởi động app và điều hướng

## Cách chạy

Mở Terminal tại thư mục gốc repo (đã cài Flutter SDK).

**Lần đầu**, sinh mã nền tảng Android / Web bằng Flutter CLI (source Dart đã có sẵn, không cần chép lại):

```bash
flutter create --project-name mobile_exam --platforms=android,web .
flutter pub get
```

Sau đó chạy một trong các lệnh:

```bash
flutter run                     # Thiết bị được chọn (Android)
flutter run -d chrome           # Chrome nếu có thiết bị Chrome
flutter run -d web-server --web-hostname 0.0.0.0 --web-port 3000  # GitHub Codespaces
```

Với Codespaces, mở cổng 3000 trong tab **Ports** để xem ứng dụng.

## Kiểm tra

```bash
flutter analyze
flutter test
```

Lưu ý: Repo lưu phần code Flutter của bài thi; `flutter create` ở bước đầu là cần thiết để sinh thư mục `android/` và `web/` theo phiên bản Flutter SDK đang dùng. Các nhánh WebNC của `testex` không bị thay đổi.
