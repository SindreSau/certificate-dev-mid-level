---
difficulty: 1
chapter: "Chapter 6: State"
training: true
tags: react
---

# Add Form Validation

## Challenge Description

Time to make your Movie Rating App more robust! 🎬 This challenge focuses on converting uncontrolled forms to controlled components and implementing form management with React state.

Your task is to enhance the existing movie form with proper client-side validation, error handling and user feedback when validation fails.

## Requirements

- Add state management for form data (name, description, image, genres, inTheaters)
- Convert all form inputs to controlled fields using state
- Implement validation for required name field with custom error message
- Implement validation for required genres field (at least one genre must be selected)
- Display validation error messages below the relevant form fields on form submission
- Clear error messages when user starts correcting the input
- Prevent form submission when validation errors exist
- Maintain existing functionality for adding and editing movies

> 💡 HINT: Each field should have a `value` or `checked` property and an `onChange` handler
>
> 💡 HINT: Manage form data and validation errors separately
>
> 💡 HINT: You might want to create helper functions for validation and handling form field changes
>
> 💡 HINT: Handle multi-select genres by converting selected options to an array

When building production applications, it's common to use libraries that can help you with form management and validation, such as [React Hook Form](https://react-hook-form.com/) paired with [Zod](https://zod.dev/). However, for this exercise, you will implement the validation logic manually. You will probably understand why libraries like these are useful after completing this exercise. 😁

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This is an example of what the functionality should look like for the completed exercise. If you'd like to mimic this style, feel free to do so, but it is not required.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTYtMi9zY3JlZW5zaG90LmdpZg==)
