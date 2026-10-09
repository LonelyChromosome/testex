# Strawberry Pavlova — Flutter Row / Column

Giao diện Flutter/Dart tái hiện bố cục trong ảnh bài học: cột mô tả bên trái, ảnh bánh bên phải, 5 sao + **170 Reviews**, thông tin **PREP / COOK / FEEDS**. Màn hình nhỏ tự xếp ảnh lên trên để không tràn giao diện.

- Nhánh riêng: `flutter-pavlova-layout`
- Code giao diện: `lib/Pavlova.dart`
- Điểm chạy: `lib/main.dart` (cố ý giữ ngắn)
- Flutter dùng `Row`, `Column`, `Expanded`, `Wrap`, `Card`.
- Ảnh mẫu gốc lấy từ repository `flutter/website` qua `Image.network`: cần internet để hiện ảnh.
- Các file Home/About/Detail từ bài trước được giữ nguyên nhưng không sử dụng trên nhánh này.

## Chạy Flutter Web trong Codespaces

```bash
flutter pub get
bash run-web.sh
```

Mở **Ports → 3001 → Open in Browser**. Nhớ chọn đúng branch `flutter-pavlova-layout`.

## Kiểm tra

```bash
flutter analyze
flutter test
flutter build web --release
```

Nguồn ví dụ: https://docs.flutter.dev/ui/layout
Ảnh nguồn: https://github.com/flutter/website/blob/main/examples/layout/pavlova/images/pavlova.jpg
