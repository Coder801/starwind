#!/bin/bash

# Install npm dependencies for all packages
git submodule foreach --recursive 'if [ -f package.json ]; then npm install; fi'