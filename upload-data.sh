#!/bin/sh
if [ ! -d data/with-ids ]; then mkdir data/with-ids; fi
kanso transform add-ids data/example.json data/with-ids/example.json
kanso upload data/with-ids/example.json "$1"
