---
difficulty: 1
chapter: "Chapter 4: Components"
training: true
tags: react
---

# Extract Components

## Challenge Description

Time to organize your Movie Rating App! 🔧 You'll be refactoring your code by extracting components from the monolithic `App.jsx` into separate, reusable components. This challenge focuses on component architecture and breaking down UI into organized, maintainable code.

Your task is to create a well-structured component hierarchy.

## Requirements

- Move the current template for a movie into a new component inside `MovieItem.jsx`
- Replace the current part of the `App` template where movies are displayed with the `MovieItem` component
- The `MovieItem` component should accept a movie prop
- Break down the `MovieItem` component into smaller sub-components for better organization, and use props to pass data between them. These can be inside `MovieItem.jsx` or in separate files if you prefer.
- Ensure all functionality remains the same after refactoring

> 💡 HINT: Imagine drawing boxes around every component and sub-component in the UI and naming them
>
> 💡 HINT: Each component should ideally only do one thing - use the same techniques for deciding if you should create a new function
>
> 💡 HINT: Consider what you would make CSS class selectors for - those are good candidates for components

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This exercise focuses on proper component architecture. The visual result should maintain the same functionality and appearance as the original app, but with a more organized structure.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi90cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTQvc2NyZWVuc2hvdC5wbmc=)
