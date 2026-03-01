---
difficulty: 1
chapter: "Chapter 6: State"
training: true
tags: react
---

# Add Movie Statistics

## Challenge Description

Time to level up your Movie Rating App! 🎬 You'll be adding movie statistics that display in the header. This challenge focuses on deriving computed values from state.

Your task is to calculate and display the total number of movies and the average rating of all movies in the header. These computed values should automatically update whenever the movie data changes.

## Requirements

- Display total number of movies and average rating in the header
- Show "N/A" for average rating when no movies have ratings, otherwise display with one decimal place
- Calculate average rating correctly from movies with valid ratings only
- Ensure statistics update automatically when movies are added, removed, or ratings change

> 💡 HINT: Filter out movies without ratings before calculating the average
>
> 💡 HINT: Use `Number.isFinite()` to check for valid numeric ratings
>
> 💡 HINT: Use `toFixed(1)` to display one decimal place

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This is an example of what the functionality should look like for the completed exercise. If you'd like to mimic this style, feel free to do so, but it is not required.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTYtMy9zY3JlZW5zaG90LmdpZg==)
