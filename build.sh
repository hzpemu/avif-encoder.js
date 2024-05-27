#!/usr/bin/env bash

command wasm-pack build --target web --out-dir "./dist/core" --out-name "encoder" --no-pack;
# 

command rm -f "./dist/core/.gitignore";
