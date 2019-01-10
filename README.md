# <p align="center">:battery:Battery check</p>

[![Built With NativeScript-Vue](https://img.shields.io/badge/built_with-nativescript--vue-42B883.svg)](https://nativescript-vue.org/#/)

<p>Battery check is an app for monitoring your battery usage</p>

<p>The app will provide options to improve the life cycle of battery<p>

## Features

Early features:

- Profile: (Supress some background tasks or apps to try to save some battery)
  - Work mode (Rules for specific contacts or apps starred)
  - Nirvana mode (Anyone will reach you)
  - Travel mode (To bypass the current settings for charging the battery)
- Basic informations about battery
- Basic user tips
- Best settings to improve the battery cycle (Ex: 80%/20%) (Research in progress)
- Basic warnings wether battery is almost near the lowest percentage choosed or fully charged

## Usage

Execute the following command to build the app:

```bash
# Install dependencies
npm install

# Build for production
tns build <platform> --bundle

# Build, watch for changes and debug the application
tns debug <platform> --bundle

# Build, watch for changes and run the application
tns run <platform> --bundle

# In case of truble with the bundle
rm -rf platforms
```

## License

[APACHE](https://github.com/Nn0Team/Battery-check/blob/master/LICENSE)
