import "package:flutter/material.dart";

class About extends StatelessWidget {
  const About({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "Introduction about the app",
        style: TextStyle(
          fontSize: 25,
          color: Colors.green.shade900,
        ),
      ),
    );
  }
}
