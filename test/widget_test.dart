import "package:flutter/material.dart";
import "package:flutter_test/flutter_test.dart";
import "package:mobile_exam/main.dart";

void main() {
  testWidgets("Home About Detail bottom navigation", (tester) async {
    await tester.pumpWidget(const MyApp());

    expect(find.text("Welcome my home page"), findsOneWidget);

    await tester.tap(find.byIcon(Icons.info));
    await tester.pumpAndSettle();
    expect(find.text("Introduction about the app"), findsOneWidget);

    await tester.tap(find.byIcon(Icons.description));
    await tester.pumpAndSettle();
    expect(find.text("Main content"), findsOneWidget);

    await tester.tap(find.byIcon(Icons.home));
    await tester.pumpAndSettle();
    expect(find.text("Welcome my home page"), findsOneWidget);
  });
}
