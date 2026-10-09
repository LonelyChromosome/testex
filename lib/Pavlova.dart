import 'package:flutter/material.dart';

/// Giao diện Strawberry Pavlova từ bài học Row / Column.
class PavlovaPage extends StatelessWidget {
  const PavlovaPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(
        builder: (context, constraints) {
          final isWide = constraints.maxWidth >= 760;

          return SingleChildScrollView(
            child: Center(
              child: Padding(
                padding: const EdgeInsets.symmetric(
                  horizontal: 16,
                  vertical: 32,
                ),
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 1080),
                  child: Card(
                    margin: EdgeInsets.zero,
                    elevation: 1,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(2),
                    ),
                    clipBehavior: Clip.antiAlias,
                    child: isWide
                        ? const SizedBox(
                            height: 480,
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.stretch,
                              children: [
                                Expanded(flex: 4, child: _RecipeInfo()),
                                Expanded(flex: 6, child: _PavlovaPhoto()),
                              ],
                            ),
                          )
                        : const Column(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              _PavlovaPhoto(height: 250),
                              _RecipeInfo(),
                            ],
                          ),
                  ),
                ),
              ),
            ),
          );
        },
      ),
    );
  }
}

class _RecipeInfo extends StatelessWidget {
  const _RecipeInfo();

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.symmetric(horizontal: 22, vertical: 25),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            'Strawberry Pavlova',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontSize: 27,
              fontWeight: FontWeight.w800,
              letterSpacing: 0.5,
            ),
          ),
          SizedBox(height: 18),
          Text(
            'Pavlova is a meringue-based dessert named after the Russian '
            'ballerina Anna Pavlova. Pavlova features a crisp crust and '
            'soft, light inside, topped with fruit and whipped cream.',
            textAlign: TextAlign.center,
            style: TextStyle(
              fontFamily: 'Georgia',
              fontSize: 20,
              height: 1.25,
              color: Colors.black87,
            ),
          ),
          SizedBox(height: 27),
          _Ratings(),
          SizedBox(height: 26),
          Row(
            children: [
              Expanded(
                child: _RecipeFact(
                  icon: Icons.kitchen,
                  label: 'PREP:',
                  value: '25 min',
                ),
              ),
              Expanded(
                child: _RecipeFact(
                  icon: Icons.timer,
                  label: 'COOK:',
                  value: '1 hr',
                ),
              ),
              Expanded(
                child: _RecipeFact(
                  icon: Icons.restaurant,
                  label: 'FEEDS:',
                  value: '4-6',
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _Ratings extends StatelessWidget {
  const _Ratings();

  @override
  Widget build(BuildContext context) {
    return Wrap(
      alignment: WrapAlignment.center,
      crossAxisAlignment: WrapCrossAlignment.center,
      spacing: 14,
      runSpacing: 8,
      children: [
        Row(
          mainAxisSize: MainAxisSize.min,
          children: List.generate(
            5,
            (index) => Icon(
              Icons.star,
              size: 21,
              color: index < 3 ? Colors.green : Colors.black,
            ),
          ),
        ),
        const Text(
          '170 Reviews',
          style: TextStyle(
            fontWeight: FontWeight.w800,
            fontSize: 17,
            letterSpacing: 0.4,
          ),
        ),
      ],
    );
  }
}

class _RecipeFact extends StatelessWidget {
  const _RecipeFact({
    required this.icon,
    required this.label,
    required this.value,
  });

  final IconData icon;
  final String label;
  final String value;

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Icon(icon, size: 27, color: Colors.green),
        const SizedBox(height: 8),
        Text(
          label,
          style: const TextStyle(
            fontSize: 13,
            fontWeight: FontWeight.w800,
            letterSpacing: 0.5,
          ),
        ),
        const SizedBox(height: 7),
        Text(value, style: const TextStyle(fontSize: 14)),
      ],
    );
  }
}

class _PavlovaPhoto extends StatelessWidget {
  const _PavlovaPhoto({this.height});

  final double? height;

  static const imageUrl =
      'https://raw.githubusercontent.com/flutter/website/main/'
      'examples/layout/pavlova/images/pavlova.jpg';

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: height,
      child: Image.network(
        imageUrl,
        fit: BoxFit.cover,
        loadingBuilder: (context, child, progress) {
          if (progress == null) return child;
          return const Center(child: CircularProgressIndicator());
        },
        errorBuilder: (context, error, stackTrace) {
          return const ColoredBox(
            color: Color(0xFFF0F0F0),
            child: Center(
              child: Icon(
                Icons.broken_image_outlined,
                color: Colors.grey,
                size: 56,
              ),
            ),
          );
        },
      ),
    );
  }
}
