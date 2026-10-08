#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
flutter pub get
flutter run -d web-server --web-hostname 0.0.0.0 --web-port "${PORT:-3001}"
