# Firebase Hosting Deploy Single File

This utility script deploy a single local file to an existing Firebase Hosting site. 
Other files that are already deployed are left unmodified.

The difference with `firebase deploy` is that this script does not require you to have a local snapshot of all hosted files, 
you just need the one file that you want to add/update.

**USE AT YOUR OWN RISK. NO WARRANTY IS PROVIDED.**

## Usage

    node deployFile.js <site_name> <file_to_deploy> [commit]

## Installation / Example

To use this script, **you must have a signed-in installation of [the Firebase CLI](https://github.com/firebase/firebase-tools)**. 

    git clone https://gist.github.com/e00c34dd82b35c56e91adbc3a9b1c412.git firebase-hosting-deploy-file
    cd firebase-hosting-deploy-file
    npm install
    
    # perform a dry run, make sure you're not doing something you'll regret
    node deployFile.js contentsite /index.html

    # do the deletion for real
    node deployFile.js contentsite /index.html commit
