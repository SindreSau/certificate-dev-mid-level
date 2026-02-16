---
difficulty: 1
tags: react
chapter: "Chapter 3: JSX"
training: true
---

# Improve the UX

## Challenge Description

Time to level up your Movie Rating App! 🎬 You'll be improving the user experience by adding better visual indicators. This challenge focuses on JSX conditional rendering and handling different data states.

Your task is to display movie ratings with star icons, show "Now Playing" badges for movies currently in theaters, and provide fallback content for movies without images.

## Requirements

- Display each movie rating number within a large yellow StarIcon in the top right hand corner of the movie posters
- For movies with no rating, show a dash (-) instead of the number and color the StarIcon gray
- Add a "Now Playing" badge to movies that are currently in theaters
- Show a "No image" placeholder for movies that do not have an image

> 💡 HINT: You can use the tailwind classes `text-yellow-500` and `text-gray-500` to help color the star
>
> 💡 HINT: You can give the movie rating a null value in `movies.json` to test the proper display of a movie with no rating
>
> 💡 HINT: You can remove the image for a movie in `movies.json` to test the proper display of a movie with no image

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This is an example of what the functionality should look like for the completed exercise. If you'd like to mimic this style, feel free to do so, but it is not required.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTMtMi9zY3JlZW5zaG90LnBuZw==)
