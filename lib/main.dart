import "package:flutter/material.dart";
import "Home.dart";
import "About.dart";
import "Detail.dart";

void main() {
  runApp(const MyApp());
}

class MyApp extends StatefulWidget {
  const MyApp({super.key});

  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  int index = 0;

  final List<Widget> pages = const [
    Home(),
    About(),
    Detail(),
  ];

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.lightGreen,
        scaffoldBackgroundColor: Colors.lightGreen.shade50,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: const Text("Flutter Mobile App"),
          backgroundColor: Colors.lightGreen,
        ),
        body: pages[index],
        bottomNavigationBar: BottomNavigationBar(
          currentIndex: index,
          selectedItemColor: Colors.green.shade900,
          unselectedItemColor: Colors.grey,
          onTap: (value) {
            setState(() {
              index = value;
            });
          },
          items: const [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: "Home",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.info),
              label: "About",
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.description),
              label: "Detail",
            ),
          ],
        ),
      ),
    );
  }
}
