---
difficulty: 1
chapter: "Chapter 7: Hooks"
training: true
tags: react
---

# Extract Logic into Custom Hooks

## Challenge Description

Time to refactor your Movie App for better code organization! 🔧 This challenge focuses on extracting logic into reusable custom Hooks to improve code readability and maintainability, giving you practice with creating custom hooks.

Your task is to extract data fetching and modal interaction logic into custom Hooks while maintaining all existing functionality.

## Requirements

- Extract data fetching logic into a custom `useFetch` Hook
- Extract modal interaction logic into a custom `useModal` Hook that combines escape key and click-outside functionality
- Maintain all existing functionality

> 💡 HINT: Consider making `useFetch` accept a fetch function and initial value, returning an object with `data`, `setData`, and `isLoading`
>
> 💡 HINT: Look into the ["ignore"](https://react.dev/learn/synchronizing-with-effects#fetching-data) pattern to handle race conditions in `useFetch`
>
> 💡 HINT: Your `useModal` Hook could take a ref, callback function, and `isActive` boolean to handle both escape and click-outside events

Effects are a popular way to fetch data in client-side apps, but this manual approach has significant downsides: it creates network waterfalls, doesn't cache data, and requires boilerplate code to handle i.e, race conditions properly. We're implementing this approach to understand the fundamentals, but libraries like [TanStack Query](https://tanstack.com/query) do much more under the hood - handling caching, background updates, error states, deduplication, and performance optimizations automatically.

Similarly, while we're building custom modal hooks to understand React patterns, real applications require many more accessibility features like focus traps, aria attributes, and proper keyboard navigation. Libraries like [Radix UI](https://www.radix-ui.com/) handle all this complexity and ensure proper accessibility compliance out of the box.

This exercise helps you understand what's happening behind the scenes and practice creating custom Hooks, but in production applications, established libraries are typically the better choice.

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This exercise focuses on proper architecture. The visual result should maintain the same functionality while being built with well-structured, reusable custom Hooks.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTctMi9zY3JlZW5zaG90LmdpZg==)
