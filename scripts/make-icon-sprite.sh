#!/bin/bash

set -eu

outfile="react/Icon/icons-sprite.js"

icons="$(ls assets/icons/*/*.svg)"

echo "Making icon sprite, output file : ${outfile}..."
echo $icons | xargs yarn svgstore --inline -o /tmp/icons-sprite.svg
echo "// GENERATED FILE, DO NOT EDIT THIS FILE BY HAND" > $outfile
echo "// Use yarn sprite to regenerate" >> $outfile
echo "module.exports = \``cat /tmp/icons-sprite.svg`\`" >> $outfile
