# gatsby-theme-react-native-paper

This [theme](https://www.gatsbyjs.org/docs/themes/) adds support for building [Gatsby](https://www.gatsbyjs.org) sites using [React Native Paper](https://github.com/callstack/react-native-paper), a [collection of customizable and production-ready components](https://callstack.github.io/react-native-paper/index.html) for [React Native](https://github.com/facebook/react-native).

## Install

Run the following in your Gatsby site's directory.

```shell
yarn add gatsby-theme-react-native-paper
```

## Usage

Once installed, add the theme as a plugin in your `gatsby-config.js`.

```javascript
// gatsby-config.js
module.exports = {
  plugins: [`gatsby-theme-react-native-paper`],
}
```

That's it, you can now start building your Gatsby site using React Native components like the example below.

## Example

```javascript
// src/pages/index.js
import React from "react"
import { SafeAreaView, View, Dimensions } from "react-native"
import { Appbar, Text, Button } from "react-native-paper"

export default () => (
  <SafeAreaView>
    <Appbar>
      <Appbar.Content
        title="Example"
        subtitle="This is an example Gatsby site built with React Native Paper components."
      />
    </Appbar>
    <View
      style={{
        height: Dimensions.get("window").height - 56,
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
      }}
    >
      <Text style={{ fontSize: 24, color: "rgb(98, 0, 238)" }}>
        Hello, world!
      </Text>
      <Button
        style={{ margin: 16 }}
        mode="contained"
        onPress={() => alert("It works!")}
      >
        Press me
      </Button>
    </View>
  </SafeAreaView>
)
```
