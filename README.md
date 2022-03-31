# animation-example

React-native `Animated` and `LayoutAnimation` example project for Lunch and Learn

## Why animate?

- Create polished, professional user interfaces
- Objects IRL don't teleport between locations or start and stop abruptly. They overcome inertia and have momentum
- Realistic motion

## Two major ways to animate in React Native

- `Animated`: granular control of specific values, more manual setup, more comprehensive platform support
- `LayoutAnimation`: set an animation to automatically take place on layout transitions. automatic, less verbose, only supported in iOS and Android

## `Animated`

- start value ➡️ transform ➡️ finish value
- `start()`/`stop()` to control execution
- 6 default animated components: `View`, `Text`, `Image`, `ScrollView`, `FlatList`, `SectionList`
- can animate almost any component using `createAnimatedComponent()`
- need to store `Animated.Value` as a ref and manually link it with a style property
- Heavily configurable (easing function, delays, decays, durations, constants...)
- animations can run in series or in parallel
- Doing maths: `Animated.add()`, `subtract()`, `multiply()`, `divide()`, `modulo()` (you can't use arithmetic operators directly)
- `Animated.interpolate()` to convert from scale to scale

### Use in `companycam-mobile`

Lots of places

## `LayoutAnimation`

- configure animations that will apply to all views in the next layout cycle
- can configure distinct `create`, `update`, `delete` animations
- useful when a layout change affects several components at once (e.g. "See more" on a list view item that expands the item and pushes other list items down)
- less controllable than `Animated`
- similar easing function presets

### Use in `companycam-mobile`

Only in project users and add users stuff

## Alternatives

- Reanimated
- Animatable
- Shared Element
- Popmotion
- Lottie

## Resources

- [React Native animation docs](https://reactnative.dev/docs/animations)
- [React Native `Animated` docs](https://reactnative.dev/docs/animated)
- [React Native `LayoutAnimation` docs](https://reactnative.dev/docs/layoutanimation)
- [The best React Native animation libraries](https://blog.logrocket.com/best-react-native-animation-libraries/)
- [Easings.net](https://easings.net/)
