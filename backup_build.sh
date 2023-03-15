#!/bin/bash
cd ..
cp -R ./template ./template_backup
rm -rf ./template_backup/template/.expo/web/cache
rm -rf ./template_backup/template/node_modules
rm -rf ./template_backup/template/src-tauri/target
tar -czvf template_backup_aab.tar.gz ./template_backup
rm -rf ./template_backup
cd template
clear
