#!/bin/bash

echo "This might take a while"
#pip install nodeenv
#nodeenv nenv
echo "Try to turn off autoAttach in Visual Studio Code when npm fails!"
source nenv/bin/activate
npm install
deactivate_node