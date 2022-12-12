## Single value with comparison feature

This Looker visualization has been developed in-house at PulsePoint Inc.

Single value visualization available in Looker lacks flexibility and customization options.

**List of functionalities in this custom visualization**:
- Accepts as many rows as you throw at it, however will use just two on the top.
- The minimum number of rows is 2
- Need one dimension and one measure
- Will automatically compare first-row measure with second-row measure and calculate the difference
- Allows users to customize the following:
	- **Main value**: color, font size, bold
	- **Comparison value**: color, font size, bold
	- Add label for both main value and comparison value
		- Control the following label attributes: color, placement (left, right, bottom, top), bold, font size
	- Globally: background color and font family

There are no error-handling scripts embedded!

## Useful resources

- [API reference](https://github.com/looker/custom_visualizations_v2/blob/master/docs/api_reference.md#the-updateasync-and-update-functions) contains Looker-specific parameters that need to be passed into the JS in order to make it work
- [Custom visualizations v2 repo](https://github.com/looker/custom_visualizations_v2) library of examples and Looker utilities
- [Complete example](https://github.com/looker/custom_visualizations_v2/blob/master/src/examples/hello_world/hello_world.js) not fully working, but a solid base
- [Looker studio](https://developers.google.com/looker-studio/visualization/write-viz) more resources on visualization building