#!/bin/bash
if [[ "$1" == "--help" ]]; then
  echo "Usage: ./get_password.sh PASSWORD"
  exit
fi
printf '%s' "$1" | openssl dgst -sha256
