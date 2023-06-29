# Akamai EdgeGrid Authorization for Insomnia

This is a 'updated' plugin for [Insomnia Client](https://insomnia.rest/). This replaces the version of [insomnia-plugin-edgegrid](https://github.com/schwabix/insomnia-plugin-edgegrid)

Akamai EdgeGrid Authorization: https://developer.akamai.com/legacy/introduction/Client_Auth.html

## Install

Go to Preferences->Plugins, install `insomnia-plugin-akamai-edgegrid`

## How to use

1. Setup your environment to include your .edgerc configuration

![Screenshot](https://raw.githubusercontent.com/rveldhuizen/insomnia-plugin-akamai-edgegrid/main/readme-ss-environment.png)

2. Add a "dummy" header EdgeAuthorization - this triggers the generation of the Akamai Authorization header

![Screenshot](https://raw.githubusercontent.com/rveldhuizen/insomnia-plugin-akamai-edgegrid/main/readme-ss-header.png)