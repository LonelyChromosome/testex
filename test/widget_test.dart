import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:mobile_exam/main.dart';

void main() {
  testWidgets('Shows the Strawberry Pavlova layout', (tester) async {
    await tester.pumpWidget(const MyApp());

    expect(find.text('Strawberry Pavlova'), findsOneWidget);
    expect(find.text('170 Reviews'), findsOneWidget);
    expect(find.text('PREP:'), findsOneWidget);
    expect(find.text('25 min'), findsOneWidget);
    expect(find.text('COOK:'), findsOneWidget);
    expect(find.text('1 hr'), findsOneWidget);
    expect(find.text('FEEDS:'), findsOneWidget);
    expect(find.text('4-6'), findsOneWidget);
    expect(find.byIcon(Icons.kitchen), findsOneWidget);
    expect(find.byIcon(Icons.timer), findsOneWidget);
    expect(find.byIcon(Icons.restaurant), findsOneWidget);
    expect(find.byType(Image), findsOneWidget);
  });

  testWidgets('Fits a narrow mobile display without overflow', (tester) async {
    tester.view.physicalSize = const Size(390, 844);
    tester.view.devicePixelRatio = 1;
    addTearDown(tester.view.resetPhysicalSize);
    addTearDown(tester.view.resetDevicePixelRatio);

    await tester.pumpWidget(const MyApp());
    expect(find.text('Strawberry Pavlova'), findsOneWidget);
    expect(tester.takeException(), isNull);
  });
}
