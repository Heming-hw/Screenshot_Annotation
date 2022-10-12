# Screenshot Annotation Tool

## Introduction

1. This tool is adapted from the Video Annotation Tool (Please see the other repo). So the build and test setup is the same as the other tool 

2. There are notable code changes in nearly all javascript files compared with the original tool. But the basic idea is I created a new div with class name `.screenshot` to host all the UI changes when the tool is activated (In the original tool, it finds the video.js element to host all UI changes). Please see `test/test.html` for more reference. 

3. When the `Annotate` button is clicked, it fires up an event in `controls.js` to initialize the UI. Please check the Javascript file for more reference. 

4. The tool is not relied on video.js package, unlike the original tool

## TODO

1. **Code cleaning** -- I commented out quite a lot of original code. 

2. **UI change** -- There are still some UI elements that are for Video but not for Screenshot annotation (for example, `+1 sec` and `-1 sec`) when the Annotate button is first clicked. This can be easily fixed by changing the corresponding handlebars file. 

3. **Bugs** -- There are still some existing bugs caused by the difference between a screenshot and a video (for example, there's a bug when clicking the Cancel link after the comment box is shown, please check `cancelAddNew` function in `control.js`). To fix these bugs, please go to the javascript files and change the corresponding code to those that are more suitable for a screenshot (`js/lib/player_components.js` will be a good place to start). 