---
difficulty: 1
chapter: "Chapter 7: Hooks"
training: true
tags: react
---

# Fetch Data and Enhance the UX

## Challenge Description

Time to make your Movie Rating App feel like a real application! 🎬 This challenge focuses on using `useEffect` for data fetching and side effects, and `useRef` for DOM manipulation and focus management.

Your task is to replace the hardcoded movie data with async fetching from `services/movies-service.js`, which simulates a real API by returning promises, and enhance the modal with better UX patterns.

## Requirements

- Replace static movie data with async data fetching using `useEffect`
- Display a loading placeholder while data is being fetched
- Add auto-focus to the name input field when the modal opens using `useRef`
- Implement modal keyboard interactions with escape key and click-outside-to-close functionality

> 💡 HINT: Add event listeners in `useEffect` for keyboard and mouse events on the modal, and clean up event listeners in the return function
>
> 💡 HINT: For loading states, skeleton UI components are a common practice that match the layout of the actual content, providing predictable and smooth loading experiences rather than generic spinners

When building production applications, modals have many more accessibility requirements, such as focus traps, aria attributes, and proper keyboard navigation. It's common to use libraries like [Radix UI](https://www.radix-ui.com/) to ensure proper accessibility and avoid reinventing complex patterns.

For data fetching, it's common to use async state management libraries like [TanStack Query](https://tanstack.com/query) to handle caching, background updates, and error states automatically.

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This is an example of what the functionality should look like for the completed exercise. If you'd like to mimic this style, feel free to do so, but it is not required.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTctMS9zY3JlZW5zaG90LmdpZg==)
