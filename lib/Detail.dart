import "package:flutter/material.dart";

class Detail extends StatelessWidget {
  const Detail({super.key});

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Text(
        "Main content",
        style: TextStyle(
          fontSize: 25,
          color: Colors.green,
        ),
      ),
    );
  }
}
